import React, { useState, useMemo } from 'react';
import { WorkspaceProps } from './AlibabaConsoleWorkspace';
import {
  Box,
  Layers,
  Globe,
  FileCode2,
  Terminal,
  Plus,
  Minus,
  RotateCw,
  ScrollText,
  Play,
  CheckCircle2,
} from 'lucide-react';

type K8sTab = 'deployments' | 'pods' | 'services' | 'yaml';

interface K8sPod {
  name: string;
  namespace: string;
  ready: string;
  status: 'Running' | 'Pending' | 'Terminating';
  restarts: number;
  cpu: string;
  memory: string;
  node: string;
  logs: string[];
}

interface K8sDeployment {
  name: string;
  namespace: string;
  replicas: number;
  image: string;
  strategy: string;
}

export const KubernetesClusterWorkspace: React.FC<WorkspaceProps> = ({
  manifest,
  activeFileName,
  filesContent = {},
  onUpdateFileContent,
  onCommandRun,
  onSimulationCompleted,
  lastSavedTimestamp = 'just now',
}) => {
  const requestedSurface = manifest.workspace?.cloud?.surface;
  const initialTab: K8sTab = ['deployments', 'pods', 'services', 'yaml'].includes(requestedSurface || '')
    ? requestedSurface as K8sTab
    : 'deployments';
  const yamlFileName =
    (activeFileName && filesContent[activeFileName] !== undefined ? activeFileName : null) ||
    manifest.files.find((f) => f.name.endsWith('.yaml') || f.name.endsWith('.yml'))?.name ||
    manifest.files[0]?.name ||
    'deployment.yaml';

  const currentYaml = filesContent[yamlFileName] || manifest.files[0]?.initialContent || '';

  const [namespace, setNamespace] = useState<'all' | 'production' | 'default' | 'kube-system'>('production');
  const [activeTab, setActiveTab] = useState<K8sTab>(initialTab);
  const [selectedPodLogs, setSelectedPodLogs] = useState<K8sPod | null>(null);

  const [deployments, setDeployments] = useState<K8sDeployment[]>([
    { name: 'api-gateway', namespace: 'production', replicas: 3, image: 'registry.internal/api-gateway:v2.4.1', strategy: 'RollingUpdate' },
    { name: 'payments-worker', namespace: 'production', replicas: 2, image: 'registry.internal/payments:v1.9.0', strategy: 'RollingUpdate' },
    { name: 'coredns', namespace: 'kube-system', replicas: 2, image: 'registry.k8s.io/coredns/coredns:v1.11.1', strategy: 'RollingUpdate' },
  ]);

  const [pods, setPods] = useState<K8sPod[]>([
    {
      name: 'api-gateway-7d9c8f4b2-x8k2p',
      namespace: 'production',
      ready: '1/1',
      status: 'Running',
      restarts: 0,
      cpu: '112m',
      memory: '184Mi',
      node: 'node-pool-1a',
      logs: [
        '2025-02-14T10:02:11Z INFO listening on :8080 (TLS 1.3)',
        '2025-02-14T10:03:45Z INFO GET /healthz 200 1.2ms',
        '2025-02-14T10:04:18Z INFO Upstream payments-worker connected',
      ],
    },
    {
      name: 'api-gateway-7d9c8f4b2-m4n9q',
      namespace: 'production',
      ready: '1/1',
      status: 'Running',
      restarts: 0,
      cpu: '108m',
      memory: '179Mi',
      node: 'node-pool-1b',
      logs: [
        '2025-02-14T10:02:12Z INFO listening on :8080 (TLS 1.3)',
        '2025-02-14T10:04:20Z INFO GET /v1/orders 200 6.4ms',
      ],
    },
    {
      name: 'api-gateway-7d9c8f4b2-z2v7r',
      namespace: 'production',
      ready: '1/1',
      status: 'Running',
      restarts: 0,
      cpu: '98m',
      memory: '175Mi',
      node: 'node-pool-1c',
      logs: ['2025-02-14T10:02:14Z INFO readiness probe succeeded'],
    },
    {
      name: 'payments-worker-5f6b99c4d-j9p1w',
      namespace: 'production',
      ready: '1/1',
      status: 'Running',
      restarts: 1,
      cpu: '240m',
      memory: '312Mi',
      node: 'node-pool-1a',
      logs: ['2025-02-14T10:01:02Z INFO Kafka consumer group ledger-prod joined'],
    },
    {
      name: 'coredns-787d4945fb-b6t2x',
      namespace: 'kube-system',
      ready: '1/1',
      status: 'Running',
      restarts: 0,
      cpu: '14m',
      memory: '42Mi',
      node: 'node-pool-1b',
      logs: ['[INFO] plugin/ready: Still waiting on: "kubernetes" -> Ready'],
    },
  ]);

  const [services] = useState([
    { name: 'api-gateway-lb', namespace: 'production', type: 'LoadBalancer', clusterIp: '10.96.42.18', externalIp: '34.117.88.19', ports: '443:8080/TCP' },
    { name: 'payments-svc', namespace: 'production', type: 'ClusterIP', clusterIp: '10.96.108.91', externalIp: '<none>', ports: '9000/TCP' },
    { name: 'kube-dns', namespace: 'kube-system', type: 'ClusterIP', clusterIp: '10.96.0.10', externalIp: '<none>', ports: '53/UDP,53/TCP' },
  ]);

  const [cliInput, setCliInput] = useState('');
  const [cliLogs, setCliLogs] = useState<string[]>([
    'Context: prod-eks-cluster-01 (Kubernetes v1.30.2) • Default Namespace: production',
    'Type "help" or run: kubectl get pods -n production | kubectl get deploy | kubectl scale deployment/api-gateway --replicas=4 | kubectl apply -f deployment.yaml',
  ]);

  const emitAction = (cmd: string, out: string) => {
    setCliLogs((p) => [...p, `$ ${cmd}`, out]);
    onCommandRun?.(cmd, out);
    onSimulationCompleted?.(true);
  };

  const syncPodsForDeployment = (depName: string, ns: string, newReplicas: number) => {
    setPods((prev) => {
      const otherPods = prev.filter((p) => !(p.namespace === ns && p.name.startsWith(depName)));
      const existingDepPods = prev.filter((p) => p.namespace === ns && p.name.startsWith(depName));
      const updated = existingDepPods.slice(0, newReplicas);
      while (updated.length < newReplicas) {
        const suffix = Math.random().toString(36).slice(2, 7);
        updated.push({
          name: `${depName}-7d9c8f4b2-${suffix}`,
          namespace: ns,
          ready: '1/1',
          status: 'Running',
          restarts: 0,
          cpu: '95m',
          memory: '168Mi',
          node: 'node-pool-1b',
          logs: [`${new Date().toISOString()} INFO Pod scheduled and passing readinessProbe`],
        });
      }
      return [...updated, ...otherPods];
    });
  };

  const handleScale = (dep: K8sDeployment, delta: number) => {
    const nextReplicas = Math.max(0, Math.min(10, dep.replicas + delta));
    setDeployments((prev) =>
      prev.map((d) => (d.name === dep.name && d.namespace === dep.namespace ? { ...d, replicas: nextReplicas } : d))
    );
    syncPodsForDeployment(dep.name, dep.namespace, nextReplicas);
    emitAction(
      `kubectl scale deployment/${dep.name} -n ${dep.namespace} --replicas=${nextReplicas}`,
      `deployment.apps/${dep.name} scaled`
    );
  };

  const handleRolloutRestart = (dep: K8sDeployment) => {
    emitAction(
      `kubectl rollout restart deployment/${dep.name} -n ${dep.namespace}`,
      `deployment.apps/${dep.name} restarted (rolling update in progress)`
    );
  };

  const handleApplyYaml = () => {
    const nameMatch = currentYaml.match(/name:\s*([a-z0-9-]+)/i);
    const repMatch = currentYaml.match(/replicas:\s*(\d+)/i);
    const imgMatch = currentYaml.match(/image:\s*([^\s\n]+)/i);
    const nsMatch = currentYaml.match(/namespace:\s*([a-z0-9-]+)/i);

    const depName = nameMatch?.[1] || 'api-gateway';
    const replicas = repMatch ? Number(repMatch[1]) : 3;
    const image = imgMatch?.[1] || 'registry.internal/api-gateway:v2.4.2';
    const ns = nsMatch?.[1] || 'production';

    setDeployments((prev) => {
      const exists = prev.some((d) => d.name === depName);
      if (exists) {
        return prev.map((d) => (d.name === depName ? { ...d, replicas, image, namespace: ns } : d));
      }
      return [...prev, { name: depName, namespace: ns, replicas, image, strategy: 'RollingUpdate' }];
    });
    syncPodsForDeployment(depName, ns, replicas);
    emitAction(`kubectl apply -f ${yamlFileName}`, `deployment.apps/${depName} configured (${replicas} replicas, image=${image})`);
    setActiveTab('deployments');
  };

  const filteredDeployments = useMemo(
    () => (namespace === 'all' ? deployments : deployments.filter((d) => d.namespace === namespace)),
    [deployments, namespace]
  );
  const filteredPods = useMemo(
    () => (namespace === 'all' ? pods : pods.filter((p) => p.namespace === namespace)),
    [pods, namespace]
  );
  const filteredServices = useMemo(
    () => (namespace === 'all' ? services : services.filter((s) => s.namespace === namespace)),
    [services, namespace]
  );

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = cliInput.trim();
    if (!cmd) return;
    setCliInput('');
    const low = cmd.toLowerCase();
    if (low === 'help') {
      emitAction(cmd, 'kubectl commands: kubectl get pods | kubectl get deploy | kubectl get svc | kubectl scale deployment/api-gateway --replicas=4 | kubectl logs <pod> | kubectl apply -f deployment.yaml');
    } else if (low.includes('get pods') || low.includes('get po')) {
      emitAction(cmd, filteredPods.map((p) => `${p.name}   ${p.ready}   ${p.status}   ${p.restarts}   ${p.node}`).join('\n'));
    } else if (low.includes('get deploy')) {
      emitAction(cmd, filteredDeployments.map((d) => `${d.name}   ${d.replicas}/${d.replicas}   ${d.image}`).join('\n'));
    } else if (low.includes('get svc') || low.includes('get services')) {
      emitAction(cmd, filteredServices.map((s) => `${s.name}   ${s.type}   ${s.clusterIp}   ${s.externalIp}   ${s.ports}`).join('\n'));
    } else if (low.includes('scale')) {
      const repMatch = cmd.match(/--replicas=(\d+)/);
      const targetDep = deployments.find((d) => low.includes(d.name)) || deployments[0];
      const targetCount = repMatch ? Number(repMatch[1]) : targetDep.replicas + 1;
      setDeployments((p) => p.map((d) => (d.name === targetDep.name ? { ...d, replicas: targetCount } : d)));
      syncPodsForDeployment(targetDep.name, targetDep.namespace, targetCount);
      emitAction(cmd, `deployment.apps/${targetDep.name} scaled to ${targetCount}`);
    } else if (low.includes('apply -f')) {
      handleApplyYaml();
    } else if (low.includes('logs')) {
      const pod = filteredPods[0];
      emitAction(cmd, pod ? pod.logs.join('\n') : 'No logs found');
    } else {
      emitAction(cmd, 'kubectl command executed.');
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden min-h-0 select-none">
      {/* Kubernetes Cluster Top Bar */}
      <div className="px-4 py-2 bg-[#1a2234] text-white flex items-center justify-between gap-3 shrink-0 border-b border-slate-800">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-6 h-6 rounded bg-[#326ce5] flex items-center justify-center">
              <Box className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-xs tracking-tight text-white whitespace-nowrap">
              Kubernetes Cluster Console
            </span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-xs text-slate-300 font-mono truncate">{manifest.title}</span>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <select
            value={namespace}
            onChange={(e) => setNamespace(e.target.value as typeof namespace)}
            className="bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 rounded px-2 py-1 focus:outline-hidden cursor-pointer"
          >
            <option value="production">ns: production</option>
            <option value="default">ns: default</option>
            <option value="kube-system">ns: kube-system</option>
            <option value="all">All Namespaces</option>
          </select>
          <span className="text-[11px] font-mono text-sky-300 hidden md:inline">v1.30.2</span>
        </div>
      </div>

      {/* Navigation Strip */}
      <div className="px-3 py-1.5 bg-white border-b border-slate-200 flex items-center justify-between gap-2 shrink-0 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1 shrink-0">
          {[
            { id: 'deployments', label: 'Deployments', icon: Layers, count: filteredDeployments.length },
            { id: 'pods', label: 'Pods', icon: Box, count: filteredPods.length },
            { id: 'services', label: 'Services & Ingress', icon: Globe, count: filteredServices.length },
            { id: 'yaml', label: `YAML (${yamlFileName})`, icon: FileCode2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as K8sTab)}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-blue-50 text-[#2557bd] border border-blue-200'
                    : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className="font-mono text-[10px] text-slate-400 tabular-nums">({tab.count})</span>
                )}
              </button>
            );
          })}
        </div>

        <span className="text-[10px] font-mono text-slate-400 shrink-0 hidden lg:inline">
          Saved {lastSavedTimestamp}
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
        {activeTab === 'deployments' && (
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                <tr>
                  <th className="px-3 py-2">Deployment</th>
                  <th className="px-3 py-2">Namespace</th>
                  <th className="px-3 py-2">Ready Replicas</th>
                  <th className="px-3 py-2">Container Image</th>
                  <th className="px-3 py-2">Rollout Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDeployments.map((dep) => (
                  <tr key={`${dep.namespace}-${dep.name}`} className="hover:bg-slate-50/70">
                    <td className="px-3 py-2.5 font-mono font-bold text-[#2557bd]">{dep.name}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-600">{dep.namespace}</td>
                    <td className="px-3 py-2.5 font-mono tabular-nums font-bold text-emerald-700">
                      {dep.replicas}/{dep.replicas}
                    </td>
                    <td className="px-3 py-2.5 font-mono text-[11px] text-slate-700">{dep.image}</td>
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleScale(dep, -1)}
                          className="p-1 rounded border border-slate-200 hover:bg-slate-100 text-slate-700 cursor-pointer"
                          title="Scale down (-1 replica)"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleScale(dep, 1)}
                          className="p-1 rounded border border-slate-200 hover:bg-slate-100 text-slate-700 cursor-pointer"
                          title="Scale up (+1 replica)"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleRolloutRestart(dep)}
                          className="px-2 py-1 rounded border border-slate-200 hover:bg-slate-100 text-[11px] font-mono text-slate-700 flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
                        >
                          <RotateCw className="w-3 h-3" />
                          <span>Restart</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'pods' && (
          <div className="space-y-3">
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Pod Name</th>
                    <th className="px-3 py-2">Ready</th>
                    <th className="px-3 py-2">Status</th>
                    <th className="px-3 py-2">CPU / Mem</th>
                    <th className="px-3 py-2">Node</th>
                    <th className="px-3 py-2">Inspect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredPods.map((pod) => (
                    <tr key={pod.name} className="hover:bg-slate-50/70">
                      <td className="px-3 py-2.5 font-mono font-semibold text-slate-900">{pod.name}</td>
                      <td className="px-3 py-2.5 font-mono tabular-nums text-slate-700">{pod.ready}</td>
                      <td className="px-3 py-2.5 font-mono text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {pod.status}
                      </td>
                      <td className="px-3 py-2.5 font-mono tabular-nums text-slate-600">
                        {pod.cpu} / {pod.memory}
                      </td>
                      <td className="px-3 py-2.5 font-mono text-slate-600">{pod.node}</td>
                      <td className="px-3 py-2.5">
                        <button
                          onClick={() => setSelectedPodLogs(pod)}
                          className="text-xs font-mono font-semibold text-[#2557bd] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <ScrollText className="w-3.5 h-3.5" />
                          <span>Logs</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {selectedPodLogs && (
              <div className="bg-[#0f172a] border border-slate-800 rounded-lg p-3 font-mono text-[11px] text-slate-200 space-y-1">
                <div className="flex items-center justify-between text-sky-300 border-b border-slate-800 pb-1.5 mb-1.5">
                  <span>kubectl logs {selectedPodLogs.name} -n {selectedPodLogs.namespace}</span>
                  <button
                    onClick={() => setSelectedPodLogs(null)}
                    className="text-slate-400 hover:text-white cursor-pointer"
                  >
                    Close
                  </button>
                </div>
                {selectedPodLogs.logs.map((l, idx) => (
                  <div key={idx}>{l}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'services' && (
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                <tr>
                  <th className="px-3 py-2">Service Name</th>
                  <th className="px-3 py-2">Type</th>
                  <th className="px-3 py-2">Cluster-IP</th>
                  <th className="px-3 py-2">External-IP</th>
                  <th className="px-3 py-2">Port(s)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredServices.map((svc) => (
                  <tr key={svc.name}>
                    <td className="px-3 py-2.5 font-mono font-bold text-[#2557bd]">{svc.name}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-800">{svc.type}</td>
                    <td className="px-3 py-2.5 font-mono tabular-nums text-slate-700">{svc.clusterIp}</td>
                    <td className="px-3 py-2.5 font-mono tabular-nums font-semibold text-emerald-700">{svc.externalIp}</td>
                    <td className="px-3 py-2.5 font-mono tabular-nums text-slate-600">{svc.ports}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'yaml' && (
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col h-full min-h-[260px]">
            <div className="px-3 py-1.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-700 font-semibold">{yamlFileName}</span>
              <button
                onClick={handleApplyYaml}
                className="px-3 py-1 rounded bg-[#326ce5] hover:bg-[#2557bd] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>kubectl apply -f {yamlFileName}</span>
              </button>
            </div>
            <textarea
              value={currentYaml}
              onChange={(e) => onUpdateFileContent?.(yamlFileName, e.target.value)}
              spellCheck={false}
              className="flex-1 w-full p-3 font-mono text-xs text-slate-900 bg-white focus:outline-hidden resize-none leading-relaxed"
            />
          </div>
        )}
      </div>

      {/* kubectl CLI Terminal */}
      <div className="h-36 bg-[#0d1117] border-t border-slate-800 flex flex-col shrink-0">
        <div className="px-3 py-1 bg-[#1a2234] border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-sky-200">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>kubectl Terminal (prod-eks-cluster-01)</span>
          </div>
          <span className="text-slate-400">ns: {namespace}</span>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-1.5 font-mono text-[11px] text-slate-300 space-y-1">
          {cliLogs.map((line, i) => (
            <div key={i} className={line.startsWith('$') ? 'text-sky-300 font-semibold' : 'text-slate-300 whitespace-pre-wrap break-all'}>
              {line}
            </div>
          ))}
        </div>
        <form onSubmit={handleCliSubmit} className="px-3 py-1.5 border-t border-slate-800 flex items-center gap-2">
          <span className="font-mono text-xs text-sky-400 font-bold">$</span>
          <input
            value={cliInput}
            onChange={(e) => setCliInput(e.target.value)}
            placeholder="kubectl get pods -n production"
            className="flex-1 bg-transparent font-mono text-xs text-white placeholder-slate-500 focus:outline-hidden"
          />
        </form>
      </div>
    </div>
  );
};
