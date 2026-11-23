import React, { useState } from 'react';
import { WorkspaceProps } from './AlibabaConsoleWorkspace';
import {
  Cloud,
  Server,
  Database,
  HardDrive,
  Network,
  ShieldCheck,
  Plus,
  Terminal,
  Sliders,
  CheckCircle2,
} from 'lucide-react';

type GcpService = 'cloud_run' | 'vpc' | 'cloud_sql' | 'storage' | 'iam';

export const GcpConsoleWorkspace: React.FC<WorkspaceProps> = ({
  manifest,
  onCommandRun,
  onSimulationCompleted,
  lastSavedTimestamp = 'just now',
}) => {
  const cloudWorkspace = manifest.workspace?.cloud;
  const requestedSurface = cloudWorkspace?.surface;
  const initialService: GcpService = ['cloud_run', 'vpc', 'cloud_sql', 'storage', 'iam'].includes(requestedSurface || '')
    ? requestedSurface as GcpService
    : 'cloud_run';
  const [projectId, setProjectId] = useState(cloudWorkspace?.projectId || 'prod-finops-platform-4192');
  const [activeService, setActiveService] = useState<GcpService>(initialService);

  const [cloudRunServices, setCloudRunServices] = useState([
    {
      name: 'checkout-api-svc',
      region: 'us-central1',
      url: 'https://checkout-api-svc-uc.a.run.app',
      activeRevision: 'checkout-api-svc-00014-k9p',
      canaryRevision: 'checkout-api-svc-00015-r2m',
      canaryTrafficPct: 10,
      p95LatencyMs: 42,
      status: 'Ready',
    },
    {
      name: 'ledger-worker-svc',
      region: 'us-central1',
      url: 'https://ledger-worker-svc-uc.a.run.app',
      activeRevision: 'ledger-worker-svc-00008-x1v',
      canaryRevision: '',
      canaryTrafficPct: 0,
      p95LatencyMs: 28,
      status: 'Ready',
    },
  ]);

  const [subnets] = useState([
    { name: 'subnet-us-central1-app', network: 'vpc-main-global', region: 'us-central1', cidr: '10.128.0.0/20', privateGoogleAccess: true },
    { name: 'subnet-us-east1-dr', network: 'vpc-main-global', region: 'us-east1', cidr: '10.142.0.0/20', privateGoogleAccess: true },
  ]);

  const [sqlInstances] = useState([
    { name: 'pg-orders-primary', version: 'PostgreSQL 15', tier: 'db-custom-4-16384', availability: 'REGIONAL (HA)', privateIp: '10.128.14.5', state: 'RUNNABLE' },
  ]);

  const [buckets, setBuckets] = useState([
    { name: 'prod-finops-ledger-artifacts', location: 'US-CENTRAL1', storageClass: 'STANDARD', uniformAccess: 'Enabled', retention: '90 days' },
  ]);

  const [iamBindings, setIamBindings] = useState([
    { member: 'serviceAccount:checkout-runner@prod-finops-platform-4192.iam.gserviceaccount.com', role: 'roles/cloudsql.client', condition: 'None' },
    { member: 'group:sre-oncall@company.io', role: 'roles/run.developer', condition: 'None' },
  ]);

  const [modalMode, setModalMode] = useState<'traffic' | 'bucket' | 'iam' | null>(null);
  const [canaryInput, setCanaryInput] = useState(50);
  const [fieldA, setFieldA] = useState('');
  const [fieldB, setFieldB] = useState('');

  const [cliInput, setCliInput] = useState('');
  const [cliLogs, setCliLogs] = useState<string[]>([
    `Google Cloud Shell • Google Cloud SDK 476.0.0 • Project: ${projectId}`,
    'Type "help" or run: gcloud run services list | gcloud compute networks subnets list | gcloud sql instances list | gcloud projects get-iam-policy',
  ]);

  const emitAction = (cmd: string, out: string) => {
    setCliLogs((p) => [...p, `$ ${cmd}`, out]);
    onCommandRun?.(cmd, out);
    onSimulationCompleted?.(true);
  };

  const handleUpdateCanary = (e: React.FormEvent) => {
    e.preventDefault();
    const pct = Math.max(0, Math.min(100, Number(canaryInput)));
    setCloudRunServices((prev) =>
      prev.map((s) => (s.name === 'checkout-api-svc' ? { ...s, canaryTrafficPct: pct } : s))
    );
    emitAction(
      `gcloud run services update-traffic checkout-api-svc --region=us-central1 --to-revisions=checkout-api-svc-00015-r2m=${pct}`,
      `Routing ${pct}% traffic to checkout-api-svc-00015-r2m and ${100 - pct}% to checkout-api-svc-00014-k9p.`
    );
    setModalMode(null);
  };

  const handleCreateResource = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalMode === 'bucket') {
      setBuckets((p) => [
        ...p,
        { name: fieldA, location: fieldB || 'US-CENTRAL1', storageClass: 'NEARLINE', uniformAccess: 'Enabled', retention: '365 days' },
      ]);
      emitAction(
        `gcloud storage buckets create gs://${fieldA} --location=${fieldB || 'US-CENTRAL1'} --uniform-bucket-level-access`,
        `Creating gs://${fieldA}/... Uniform bucket-level access enabled.`
      );
    } else if (modalMode === 'iam') {
      setIamBindings((p) => [...p, { member: fieldA, role: fieldB, condition: 'None' }]);
      emitAction(
        `gcloud projects add-iam-policy-binding ${projectId} --member="${fieldA}" --role="${fieldB}"`,
        `Updated IAM policy for project [${projectId}].`
      );
    }
    setModalMode(null);
  };

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = cliInput.trim();
    if (!cmd) return;
    setCliInput('');
    const low = cmd.toLowerCase();
    if (low === 'help') {
      emitAction(cmd, 'gcloud commands: gcloud run services list | gcloud compute networks subnets list | gcloud sql instances list | gcloud storage buckets list | gcloud projects get-iam-policy');
    } else if (low.includes('run services list')) {
      emitAction(cmd, JSON.stringify(cloudRunServices));
    } else if (low.includes('subnets list') || low.includes('networks list')) {
      emitAction(cmd, JSON.stringify(subnets));
    } else if (low.includes('sql instances list')) {
      emitAction(cmd, JSON.stringify(sqlInstances));
    } else if (low.includes('storage buckets list')) {
      emitAction(cmd, JSON.stringify(buckets));
    } else if (low.includes('get-iam-policy')) {
      emitAction(cmd, JSON.stringify({ bindings: iamBindings }));
    } else {
      emitAction(cmd, `Done. Project [${projectId}] operation completed.`);
    }
  };

  const navItems: Array<{ id: GcpService; label: string; icon: React.ComponentType<{ className?: string }> }> = [
    { id: 'cloud_run', label: 'Cloud Run', icon: Server },
    { id: 'vpc', label: 'VPC network', icon: Network },
    { id: 'cloud_sql', label: 'Cloud SQL', icon: Database },
    { id: 'storage', label: 'Cloud Storage', icon: HardDrive },
    { id: 'iam', label: 'IAM & Admin', icon: ShieldCheck },
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden min-h-0 select-none">
      {/* Google Cloud Console Header */}
      <div className="px-4 py-2 bg-white text-slate-900 flex items-center justify-between gap-3 shrink-0 border-b border-slate-200">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-6 h-6 rounded bg-[#1a73e8] flex items-center justify-center">
              <Cloud className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-xs tracking-tight text-slate-900 whitespace-nowrap">
              Google Cloud
            </span>
          </div>
          <select
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded px-2 py-1 text-xs font-mono font-semibold text-slate-800 cursor-pointer"
          >
            <option value="prod-finops-platform-4192">prod-finops-platform-4192</option>
            <option value="staging-finops-4192">staging-finops-4192</option>
          </select>
          <span className="text-xs text-slate-500 font-mono truncate hidden md:inline">{manifest.title}</span>
        </div>

        <span className="text-[10px] font-mono text-slate-400 shrink-0 hidden sm:inline">
          Saved {lastSavedTimestamp}
        </span>
      </div>

      {/* Main Layout */}
      <div className="flex-1 flex min-h-0 overflow-hidden">
        {/* Left Navigation Drawer */}
        <aside className="w-44 bg-white border-r border-slate-200 p-2 space-y-0.5 shrink-0 hidden sm:block overflow-y-auto">
          <div className="px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
            Platform Services
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeService === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveService(item.id)}
                className={`w-full px-2.5 py-2 rounded text-xs font-medium flex items-center gap-2 transition-colors cursor-pointer text-left ${
                  active
                    ? 'bg-blue-50 text-[#1a73e8] font-semibold border border-blue-200'
                    : 'text-slate-700 hover:bg-slate-50 border border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Right Workspace Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-w-0">
          {/* Mobile Tab Strip */}
          <div className="flex sm:hidden items-center gap-1 overflow-x-auto pb-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveService(item.id)}
                className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer ${
                  activeService === item.id ? 'bg-[#1a73e8] text-white' : 'bg-white border border-slate-200 text-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                {navItems.find((n) => n.id === activeService)?.label}
              </h3>
              <p className="text-xs text-slate-500 font-mono">Project: {projectId}</p>
            </div>

            {activeService === 'cloud_run' && (
              <button
                onClick={() => {
                  setCanaryInput(cloudRunServices[0].canaryTrafficPct);
                  setModalMode('traffic');
                }}
                className="px-3 py-1.5 rounded bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Manage Traffic Split</span>
              </button>
            )}
            {activeService === 'storage' && (
              <button
                onClick={() => {
                  setFieldA('prod-audit-archive-gcs');
                  setFieldB('US-CENTRAL1');
                  setModalMode('bucket');
                }}
                className="px-3 py-1.5 rounded bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Create Bucket</span>
              </button>
            )}
            {activeService === 'iam' && (
              <button
                onClick={() => {
                  setFieldA('serviceAccount:reporter@prod-finops-platform-4192.iam.gserviceaccount.com');
                  setFieldB('roles/run.invoker');
                  setModalMode('iam');
                }}
                className="px-3 py-1.5 rounded bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Grant Principal Access</span>
              </button>
            )}
          </div>

          {activeService === 'cloud_run' && (
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Service / URL</th>
                    <th className="px-3 py-2">Region</th>
                    <th className="px-3 py-2">Revision Split</th>
                    <th className="px-3 py-2">P95 Latency</th>
                    <th className="px-3 py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {cloudRunServices.map((svc) => (
                    <tr key={svc.name} className="hover:bg-slate-50/70">
                      <td className="px-3 py-2.5">
                        <div className="font-semibold text-[#1a73e8]">{svc.name}</div>
                        <div className="font-mono text-[11px] text-slate-500">{svc.url}</div>
                      </td>
                      <td className="px-3 py-2.5 font-mono text-slate-700">{svc.region}</td>
                      <td className="px-3 py-2.5 font-mono tabular-nums text-slate-800">
                        {svc.canaryRevision ? (
                          <div>
                            <div>{100 - svc.canaryTrafficPct}% → {svc.activeRevision.slice(-9)}</div>
                            <div className="text-[#1a73e8] font-semibold">{svc.canaryTrafficPct}% → {svc.canaryRevision.slice(-9)}</div>
                          </div>
                        ) : (
                          <span>100% → {svc.activeRevision.slice(-9)}</span>
                        )}
                      </td>
                      <td className="px-3 py-2.5 font-mono tabular-nums text-slate-700">{svc.p95LatencyMs} ms</td>
                      <td className="px-3 py-2.5 font-mono text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {svc.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeService === 'vpc' && (
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Subnet Name</th>
                    <th className="px-3 py-2">VPC Network</th>
                    <th className="px-3 py-2">Region</th>
                    <th className="px-3 py-2">IP Range</th>
                    <th className="px-3 py-2">Private Google Access</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {subnets.map((sub) => (
                    <tr key={sub.name} className="hover:bg-slate-50/70">
                      <td className="px-3 py-2.5 font-mono font-semibold text-[#1a73e8]">{sub.name}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-700">{sub.network}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-600">{sub.region}</td>
                      <td className="px-3 py-2.5 font-mono tabular-nums text-slate-900">{sub.cidr}</td>
                      <td className="px-3 py-2.5 font-mono text-emerald-700 font-semibold">
                        {sub.privateGoogleAccess ? 'On' : 'Off'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeService === 'cloud_sql' && (
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Instance ID</th>
                    <th className="px-3 py-2">Engine</th>
                    <th className="px-3 py-2">Machine Tier</th>
                    <th className="px-3 py-2">Availability</th>
                    <th className="px-3 py-2">Private IP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sqlInstances.map((db) => (
                    <tr key={db.name}>
                      <td className="px-3 py-2.5 font-mono font-semibold text-[#1a73e8]">{db.name}</td>
                      <td className="px-3 py-2.5 text-slate-800">{db.version}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-700">{db.tier}</td>
                      <td className="px-3 py-2.5 font-mono text-emerald-700 font-semibold">{db.availability}</td>
                      <td className="px-3 py-2.5 font-mono tabular-nums text-slate-800">{db.privateIp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeService === 'storage' && (
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Bucket Name</th>
                    <th className="px-3 py-2">Location</th>
                    <th className="px-3 py-2">Storage Class</th>
                    <th className="px-3 py-2">Access Control</th>
                    <th className="px-3 py-2">Retention</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {buckets.map((b) => (
                    <tr key={b.name}>
                      <td className="px-3 py-2.5 font-mono font-semibold text-[#1a73e8]">gs://{b.name}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-700">{b.location}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-700">{b.storageClass}</td>
                      <td className="px-3 py-2.5 font-mono text-emerald-700 font-semibold">{b.uniformAccess}</td>
                      <td className="px-3 py-2.5 font-mono tabular-nums text-slate-600">{b.retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeService === 'iam' && (
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Principal</th>
                    <th className="px-3 py-2">IAM Role</th>
                    <th className="px-3 py-2">IAM Condition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {iamBindings.map((b, i) => (
                    <tr key={i}>
                      <td className="px-3 py-2.5 font-mono text-slate-800 break-all">{b.member}</td>
                      <td className="px-3 py-2.5 font-mono font-semibold text-[#1a73e8]">{b.role}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-500">{b.condition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalMode === 'traffic' && (
        <div className="fixed inset-0 bg-slate-900/40 z-50 flex items-center justify-center p-4">
          <form onSubmit={handleUpdateCanary} className="bg-white border border-slate-200 rounded-xl shadow-lg w-full max-w-md p-4 space-y-3">
            <h4 className="text-sm font-bold text-slate-900">Split Cloud Run Revision Traffic (checkout-api-svc)</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between font-mono">
                <span>Canary (00015-r2m): {canaryInput}%</span>
                <span>Stable (00014-k9p): {100 - canaryInput}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={canaryInput}
                onChange={(e) => setCanaryInput(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button type="button" onClick={() => setModalMode(null)} className="px-3 py-1.5 rounded border border-slate-200 text-xs font-semibold text-slate-600 cursor-pointer">
                Cancel
              </button>
              <button type="submit" className="px-3 py-1.5 rounded bg-[#1a73e8] text-white text-xs font-bold cursor-pointer">
                Update Traffic Split
              </button>
            </div>
          </form>
        </div>
      )}

      {(modalMode === 'bucket' || modalMode === 'iam') && (
        <div className="fixed inset-0 bg-slate-900/40 z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreateResource} className="bg-white border border-slate-200 rounded-xl shadow-lg w-full max-w-md p-4 space-y-3">
            <h4 className="text-sm font-bold text-slate-900">
              {modalMode === 'bucket' ? 'Create Cloud Storage Bucket' : 'Add Least-Privilege IAM Binding'}
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <label className="block font-mono text-slate-600 mb-1">
                  {modalMode === 'bucket' ? 'Bucket Name' : 'Principal Member'}
                </label>
                <input value={fieldA} onChange={(e) => setFieldA(e.target.value)} className="w-full px-2.5 py-1.5 border border-slate-300 rounded font-mono text-slate-900" required />
              </div>
              <div>
                <label className="block font-mono text-slate-600 mb-1">
                  {modalMode === 'bucket' ? 'Location' : 'IAM Role'}
                </label>
                <input value={fieldB} onChange={(e) => setFieldB(e.target.value)} className="w-full px-2.5 py-1.5 border border-slate-300 rounded font-mono text-slate-900" required />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button type="button" onClick={() => setModalMode(null)} className="px-3 py-1.5 rounded border border-slate-200 text-xs font-semibold text-slate-600 cursor-pointer">
                Cancel
              </button>
              <button type="submit" className="px-3 py-1.5 rounded bg-[#1a73e8] text-white text-xs font-bold cursor-pointer">
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Google Cloud Shell */}
      <div className="h-36 bg-[#0d1117] border-t border-slate-800 flex flex-col shrink-0">
        <div className="px-3 py-1 bg-[#1b222c] border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-blue-200">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span>Google Cloud Shell ({projectId})</span>
          </div>
          <span className="text-slate-400">gcloud sdk</span>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-1.5 font-mono text-[11px] text-slate-300 space-y-1">
          {cliLogs.map((line, i) => (
            <div key={i} className={line.startsWith('$') ? 'text-blue-300 font-semibold' : 'text-slate-300 break-all'}>
              {line}
            </div>
          ))}
        </div>
        <form onSubmit={handleCliSubmit} className="px-3 py-1.5 border-t border-slate-800 flex items-center gap-2">
          <span className="font-mono text-xs text-blue-400 font-bold">$</span>
          <input
            value={cliInput}
            onChange={(e) => setCliInput(e.target.value)}
            placeholder="gcloud run services list"
            className="flex-1 bg-transparent font-mono text-xs text-white placeholder-slate-500 focus:outline-hidden"
          />
        </form>
      </div>
    </div>
  );
};
