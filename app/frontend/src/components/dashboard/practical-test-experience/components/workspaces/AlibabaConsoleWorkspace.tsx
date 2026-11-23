import React, { useState } from 'react';
import { PracticalManifest } from '../../types/practical';
import {
  Cloud,
  Network,
  Layers,
  Globe,
  HardDrive,
  Shield,
  Bell,
  Plus,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  Link2,
} from 'lucide-react';

export interface WorkspaceProps {
  manifest: PracticalManifest;
  activeFileName?: string;
  filesContent?: Record<string, string>;
  onUpdateFileContent?: (fileName: string, content: string) => void;
  onCommandRun?: (command: string, output: string) => void;
  onSimulationCompleted?: (passed: boolean) => void;
  lastSavedTimestamp?: string;
}

type AlibabaTab = 'vpc' | 'vswitch' | 'eip' | 'disk' | 'sg' | 'monitor';

export const AlibabaConsoleWorkspace: React.FC<WorkspaceProps> = ({
  manifest,
  onCommandRun,
  onSimulationCompleted,
  lastSavedTimestamp = 'just now',
}) => {
  const cloudWorkspace = manifest.workspace?.cloud;
  const requestedSurface = cloudWorkspace?.surface;
  const initialTab: AlibabaTab = ['vpc', 'vswitch', 'eip', 'disk', 'sg', 'monitor'].includes(requestedSurface || '')
    ? requestedSurface as AlibabaTab
    : 'vpc';
  const isNetworkLab =
    manifest.id.includes('m4') || manifest.title.toLowerCase().includes('vpc');

  const [region, setRegion] = useState(cloudWorkspace?.region || 'cn-hangzhou');
  const [activeTab, setActiveTab] = useState<AlibabaTab>(requestedSurface ? initialTab : (isNetworkLab ? 'vpc' : 'eip'));

  const [vpcs, setVpcs] = useState([
    { id: 'vpc-2ze8f41a', name: 'vpc-production-east', cidr: '192.168.0.0/16', status: 'Available', routeTable: 'vtb-2ze01k', zoneCount: 2 },
  ]);

  const [vswitches, setVswitches] = useState([
    { id: 'vsw-2zek8911', name: 'vsw-zone-i-primary', cidr: '192.168.1.0/24', vpcId: 'vpc-2ze8f41a', zone: 'cn-hangzhou-i', availableIps: 251, status: 'Available' },
  ]);

  const [eips, setEips] = useState([
    { id: 'eip-2ze671a0', ip: '47.98.112.4', bandwidth: '10 Mbps', chargeType: 'PayByTraffic', status: 'InUse', instance: 'ecs-web-cluster-01' },
  ]);

  const [disks, setDisks] = useState([
    { id: 'd-2ze91ab2', name: 'disk-data-ssd-100gb', sizeGiB: 100, category: 'cloud_essd (PL1)', iops: '50,000', status: 'InUse', instance: 'ecs-web-cluster-01' },
  ]);

  const [sgRules, setSgRules] = useState([
    { id: 'sgr-01', direction: 'Ingress', policy: 'Accept', protocol: 'TCP', port: '443/443', cidr: '0.0.0.0/0', priority: 1, description: 'Public HTTPS Ingress' },
    { id: 'sgr-02', direction: 'Ingress', policy: 'Accept', protocol: 'TCP', port: '22/22', cidr: '10.200.0.15/32', priority: 10, description: 'Bastion SSH Access' },
  ]);

  const [alarms, setAlarms] = useState([
    { id: 'alm-101', name: 'CPU-Utilization-Critical', metric: 'CPUUtilization >= 80%', period: '3 x 60s', target: 'ecs-web-cluster-01', state: 'OK', contactGroup: 'ops-emergency-group' },
  ]);

  const [modalOpen, setModalOpen] = useState<'vpc' | 'vswitch' | 'eip' | 'disk' | 'sg' | 'alarm' | null>(null);
  const [formName, setFormName] = useState('');
  const [formCidr, setFormCidr] = useState('');
  const [formValue, setFormValue] = useState('');
  const [formZone, setFormZone] = useState('cn-hangzhou-j');

  const [cliInput, setCliInput] = useState('');
  const [cliLogs, setCliLogs] = useState<string[]>([
    `Aliyun CLI v3.0.192 • Profile: default • Region: ${region}`,
    'Type "help" or run commands like: aliyun vpc DescribeVpcs | aliyun ecs DescribeDisks | aliyun cms DescribeMetricRuleList',
  ]);

  const emitAction = (cmd: string, out: string) => {
    setCliLogs((prev) => [...prev, `$ ${cmd}`, out]);
    onCommandRun?.(cmd, out);
    onSimulationCompleted?.(true);
  };

  const openModal = (type: typeof modalOpen) => {
    if (type === 'vpc') {
      setFormName('vpc-staging-east');
      setFormCidr('172.16.0.0/16');
    } else if (type === 'vswitch') {
      setFormName('vsw-zone-j-backup');
      setFormCidr('192.168.2.0/24');
    } else if (type === 'eip') {
      setFormName('eip-failover-standby');
      setFormValue('20');
    } else if (type === 'disk') {
      setFormName('disk-wal-archive');
      setFormValue('200');
    } else if (type === 'sg') {
      setFormName('Allow Internal API');
      setFormValue('8443/8443');
      setFormCidr('192.168.0.0/16');
    } else if (type === 'alarm') {
      setFormName('Memory-Utilization-High');
      setFormValue('85');
    }
    setModalOpen(type);
  };

  const handleSubmitModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalOpen === 'vpc') {
      const id = `vpc-${Math.random().toString(36).slice(2, 10)}`;
      setVpcs((p) => [...p, { id, name: formName || 'vpc-custom', cidr: formCidr || '172.16.0.0/16', status: 'Available', routeTable: `vtb-${id.slice(4, 9)}`, zoneCount: 1 }]);
      emitAction(`aliyun vpc CreateVpc --RegionId ${region} --VpcName ${formName} --CidrBlock ${formCidr}`, `{"VpcId": "${id}", "Status": "Available"}`);
    } else if (modalOpen === 'vswitch') {
      const id = `vsw-${Math.random().toString(36).slice(2, 10)}`;
      const vpcId = vpcs[0]?.id || 'vpc-2ze8f41a';
      setVswitches((p) => [...p, { id, name: formName || 'vsw-custom', cidr: formCidr || '192.168.2.0/24', vpcId, zone: formZone, availableIps: 252, status: 'Available' }]);
      emitAction(`aliyun vpc CreateVSwitch --VpcId ${vpcId} --ZoneId ${formZone} --CidrBlock ${formCidr}`, `{"VSwitchId": "${id}", "Status": "Available"}`);
    } else if (modalOpen === 'eip') {
      const id = `eip-${Math.random().toString(36).slice(2, 10)}`;
      const ip = `47.98.${Math.floor(100 + Math.random() * 140)}.${Math.floor(10 + Math.random() * 220)}`;
      setEips((p) => [...p, { id, ip, bandwidth: `${formValue || '10'} Mbps`, chargeType: 'PayByTraffic', status: 'Available', instance: 'Unbound' }]);
      emitAction(`aliyun vpc AllocateEipAddress --RegionId ${region} --Bandwidth ${formValue || '10'}`, `{"AllocationId": "${id}", "EipAddress": "${ip}"}`);
    } else if (modalOpen === 'disk') {
      const id = `d-${Math.random().toString(36).slice(2, 10)}`;
      const size = Number(formValue) || 100;
      setDisks((p) => [...p, { id, name: formName || 'disk-essd', sizeGiB: size, category: 'cloud_essd (PL1)', iops: '50,000', status: 'InUse', instance: 'ecs-web-cluster-01' }]);
      emitAction(`aliyun ecs CreateDisk --ZoneId ${region}-i --Size ${size} --DiskCategory cloud_essd`, `{"DiskId": "${id}", "Status": "InUse", "AttachedTo": "ecs-web-cluster-01"}`);
    } else if (modalOpen === 'sg') {
      const id = `sgr-${Math.floor(10 + Math.random() * 89)}`;
      setSgRules((p) => [...p, { id, direction: 'Ingress', policy: 'Accept', protocol: 'TCP', port: formValue || '8443/8443', cidr: formCidr || '192.168.0.0/16', priority: 20, description: formName || 'Custom rule' }]);
      emitAction(`aliyun ecs AuthorizeSecurityGroup --PortRange ${formValue} --SourceCidrIp ${formCidr}`, `{"RequestId": "req-${id}", "Policy": "Accept"}`);
    } else if (modalOpen === 'alarm') {
      const id = `alm-${Math.floor(200 + Math.random() * 799)}`;
      setAlarms((p) => [...p, { id, name: formName || 'Custom-Alarm', metric: `CPUUtilization >= ${formValue || '85'}%`, period: '3 x 60s', target: 'ecs-web-cluster-01', state: 'OK', contactGroup: 'ops-emergency-group' }]);
      emitAction(`aliyun cms PutResourceMetricRule --RuleName ${formName} --Threshold ${formValue}`, `{"RuleId": "${id}", "Success": true}`);
    }
    setModalOpen(null);
  };

  const handleBindEip = (id: string) => {
    setEips((p) => p.map((e) => (e.id === id ? { ...e, status: 'InUse', instance: 'ecs-web-cluster-01' } : e)));
    emitAction(`aliyun vpc AssociateEipAddress --AllocationId ${id} --InstanceId ecs-web-cluster-01`, `{"Status": "InUse", "InstanceId": "ecs-web-cluster-01"}`);
  };

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = cliInput.trim();
    if (!cmd) return;
    setCliInput('');
    const low = cmd.toLowerCase();
    if (low === 'help') {
      emitAction(cmd, 'Available commands: aliyun vpc DescribeVpcs | aliyun vpc DescribeVSwitches | aliyun vpc DescribeEipAddresses | aliyun ecs DescribeDisks | aliyun cms DescribeMetricRuleList');
    } else if (low.includes('describevpcs')) {
      emitAction(cmd, JSON.stringify({ TotalCount: vpcs.length, Vpcs: vpcs }));
    } else if (low.includes('describevswitches')) {
      emitAction(cmd, JSON.stringify({ TotalCount: vswitches.length, VSwitches: vswitches }));
    } else if (low.includes('describeeip')) {
      emitAction(cmd, JSON.stringify({ TotalCount: eips.length, EipAddresses: eips }));
    } else if (low.includes('describedisks')) {
      emitAction(cmd, JSON.stringify({ TotalCount: disks.length, Disks: disks }));
    } else if (low.includes('describemetric')) {
      emitAction(cmd, JSON.stringify({ TotalCount: alarms.length, Alarms: alarms }));
    } else {
      emitAction(cmd, `{"Code": "200", "RegionId": "${region}", "Message": "Executed command successfully"}`);
    }
  };

  const navItems: Array<{ id: AlibabaTab; label: string; icon: React.ComponentType<{ className?: string }>; count: number }> = [
    { id: 'vpc', label: 'VPC Networks', icon: Network, count: vpcs.length },
    { id: 'vswitch', label: 'VSwitches', icon: Layers, count: vswitches.length },
    { id: 'eip', label: 'Elastic IPs', icon: Globe, count: eips.length },
    { id: 'disk', label: 'ESSD Disks', icon: HardDrive, count: disks.length },
    { id: 'sg', label: 'Security Groups', icon: Shield, count: sgRules.length },
    { id: 'monitor', label: 'CloudMonitor', icon: Bell, count: alarms.length },
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden min-h-0 select-none">
      {/* Top Alibaba Cloud Console Header */}
      <div className="px-4 py-2 bg-[#141923] text-white flex items-center justify-between gap-3 shrink-0 border-b border-slate-800">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-6 h-6 rounded bg-[#ff6a00] flex items-center justify-center">
              <Cloud className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-xs tracking-tight text-white whitespace-nowrap">
              Alibaba Cloud Console
            </span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-xs text-slate-300 font-mono truncate">{manifest.title}</span>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 rounded px-2 py-1 focus:outline-hidden cursor-pointer"
          >
            <option value="cn-hangzhou">cn-hangzhou (Hangzhou)</option>
            <option value="cn-shanghai">cn-shanghai (Shanghai)</option>
            <option value="ap-southeast-1">ap-southeast-1 (Singapore)</option>
          </select>
          <span className="text-[11px] font-mono text-slate-400 hidden md:inline tabular-nums">
            RAM UID: 519280410
          </span>
        </div>
      </div>

      {/* Product Navigation Bar */}
      <div className="px-3 py-1.5 bg-white border-b border-slate-200 flex items-center justify-between gap-2 shrink-0 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1 shrink-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-orange-50 text-[#d95300] border border-orange-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                <span className="font-mono text-[10px] text-slate-400 tabular-nums">({item.count})</span>
              </button>
            );
          })}
        </div>

        <span className="text-[10px] font-mono text-slate-400 shrink-0 hidden lg:inline">
          Saved {lastSavedTimestamp}
        </span>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
        {/* Action Header */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              {navItems.find((n) => n.id === activeTab)?.label} — {region}
            </h3>
            <p className="text-xs text-slate-500">
              Target ECS Node: <span className="font-mono text-slate-700">ecs-web-cluster-01</span>
            </p>
          </div>
          <button
            onClick={() => openModal(activeTab === 'monitor' ? 'alarm' : activeTab)}
            className="px-3 py-1.5 rounded-md bg-[#ff6a00] hover:bg-[#e55f00] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>
              {activeTab === 'vpc'
                ? 'Create VPC'
                : activeTab === 'vswitch'
                ? 'Create VSwitch'
                : activeTab === 'eip'
                ? 'Allocate EIP'
                : activeTab === 'disk'
                ? 'Create Cloud Disk'
                : activeTab === 'sg'
                ? 'Add Security Rule'
                : 'Create Alarm Rule'}
            </span>
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          {activeTab === 'vpc' && (
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                <tr>
                  <th className="px-3 py-2">VPC ID / Name</th>
                  <th className="px-3 py-2">IPv4 CIDR Block</th>
                  <th className="px-3 py-2">Route Table</th>
                  <th className="px-3 py-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {vpcs.map((v) => (
                  <tr key={v.id} className="hover:bg-slate-50/70">
                    <td className="px-3 py-2.5">
                      <div className="font-semibold text-slate-900">{v.name}</div>
                      <div className="font-mono text-[11px] text-slate-500 tabular-nums">{v.id}</div>
                    </td>
                    <td className="px-3 py-2.5 font-mono tabular-nums text-slate-700">{v.cidr}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-600">{v.routeTable}</td>
                    <td className="px-3 py-2.5">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-mono text-[11px] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {v.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'vswitch' && (
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                <tr>
                  <th className="px-3 py-2">VSwitch ID / Name</th>
                  <th className="px-3 py-2">CIDR Block</th>
                  <th className="px-3 py-2">Zone</th>
                  <th className="px-3 py-2">Available IPs</th>
                  <th className="px-3 py-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {vswitches.map((vs) => (
                  <tr key={vs.id} className="hover:bg-slate-50/70">
                    <td className="px-3 py-2.5">
                      <div className="font-semibold text-slate-900">{vs.name}</div>
                      <div className="font-mono text-[11px] text-slate-500">{vs.id}</div>
                    </td>
                    <td className="px-3 py-2.5 font-mono tabular-nums text-slate-700">{vs.cidr}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-600">{vs.zone}</td>
                    <td className="px-3 py-2.5 font-mono tabular-nums text-slate-700">{vs.availableIps}</td>
                    <td className="px-3 py-2.5 font-mono text-emerald-700 font-semibold">{vs.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'eip' && (
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                <tr>
                  <th className="px-3 py-2">Allocation ID</th>
                  <th className="px-3 py-2">Public IPv4</th>
                  <th className="px-3 py-2">Peak Bandwidth</th>
                  <th className="px-3 py-2">Bound Instance</th>
                  <th className="px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {eips.map((e) => (
                  <tr key={e.id} className="hover:bg-slate-50/70">
                    <td className="px-3 py-2.5 font-mono text-slate-700">{e.id}</td>
                    <td className="px-3 py-2.5 font-mono font-bold text-slate-900 tabular-nums">{e.ip}</td>
                    <td className="px-3 py-2.5 font-mono tabular-nums text-slate-600">{e.bandwidth}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-700">{e.instance}</td>
                    <td className="px-3 py-2.5">
                      {e.instance === 'Unbound' ? (
                        <button
                          onClick={() => handleBindEip(e.id)}
                          className="text-xs font-semibold text-[#d95300] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Link2 className="w-3.5 h-3.5" />
                          Bind to ecs-web-cluster-01
                        </button>
                      ) : (
                        <span className="font-mono text-[11px] text-emerald-700 font-semibold">Bound & Active</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'disk' && (
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                <tr>
                  <th className="px-3 py-2">Disk ID / Name</th>
                  <th className="px-3 py-2">Category</th>
                  <th className="px-3 py-2">Capacity</th>
                  <th className="px-3 py-2">Max IOPS</th>
                  <th className="px-3 py-2">Attached Instance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {disks.map((d) => (
                  <tr key={d.id} className="hover:bg-slate-50/70">
                    <td className="px-3 py-2.5">
                      <div className="font-semibold text-slate-900">{d.name}</div>
                      <div className="font-mono text-[11px] text-slate-500">{d.id}</div>
                    </td>
                    <td className="px-3 py-2.5 font-mono text-slate-700">{d.category}</td>
                    <td className="px-3 py-2.5 font-mono tabular-nums font-semibold text-slate-800">{d.sizeGiB} GiB</td>
                    <td className="px-3 py-2.5 font-mono tabular-nums text-slate-600">{d.iops}</td>
                    <td className="px-3 py-2.5 font-mono text-emerald-700">{d.instance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'sg' && (
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                <tr>
                  <th className="px-3 py-2">Priority</th>
                  <th className="px-3 py-2">Direction / Policy</th>
                  <th className="px-3 py-2">Protocol / Port</th>
                  <th className="px-3 py-2">Source CIDR</th>
                  <th className="px-3 py-2">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sgRules.map((r) => {
                  const openSshWarning = r.port.startsWith('22') && r.cidr === '0.0.0.0/0';
                  return (
                    <tr key={r.id} className="hover:bg-slate-50/70">
                      <td className="px-3 py-2.5 font-mono tabular-nums text-slate-600">{r.priority}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-800">{r.direction} • {r.policy}</td>
                      <td className="px-3 py-2.5 font-mono tabular-nums font-semibold text-slate-900">{r.protocol} {r.port}</td>
                      <td className="px-3 py-2.5 font-mono tabular-nums">
                        <span className={openSshWarning ? 'text-rose-600 font-bold inline-flex items-center gap-1' : 'text-slate-700'}>
                          {openSshWarning && <AlertTriangle className="w-3.5 h-3.5" />}
                          {r.cidr}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-slate-600">{r.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          {activeTab === 'monitor' && (
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                <tr>
                  <th className="px-3 py-2">Rule Name</th>
                  <th className="px-3 py-2">Threshold Condition</th>
                  <th className="px-3 py-2">Evaluation Window</th>
                  <th className="px-3 py-2">Target Resource</th>
                  <th className="px-3 py-2">State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {alarms.map((a) => (
                  <tr key={a.id} className="hover:bg-slate-50/70">
                    <td className="px-3 py-2.5">
                      <div className="font-semibold text-slate-900">{a.name}</div>
                      <div className="font-mono text-[11px] text-slate-500">{a.contactGroup}</div>
                    </td>
                    <td className="px-3 py-2.5 font-mono tabular-nums text-slate-800">{a.metric}</td>
                    <td className="px-3 py-2.5 font-mono tabular-nums text-slate-600">{a.period}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-700">{a.target}</td>
                    <td className="px-3 py-2.5 font-mono font-semibold text-emerald-700">{a.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Creation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 z-50 flex items-center justify-center p-4">
          <form onSubmit={handleSubmitModal} className="bg-white border border-slate-200 rounded-xl shadow-lg w-full max-w-md p-4 space-y-3">
            <h4 className="text-sm font-bold text-slate-900">
              Provision Alibaba Cloud {modalOpen.toUpperCase()} Resource
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <label className="block font-mono text-slate-600 mb-1">Resource Name</label>
                <input
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded font-mono text-slate-900"
                  required
                />
              </div>
              {(modalOpen === 'vpc' || modalOpen === 'vswitch' || modalOpen === 'sg') && (
                <div>
                  <label className="block font-mono text-slate-600 mb-1">
                    {modalOpen === 'sg' ? 'Source CIDR Block' : 'IPv4 CIDR Block'}
                  </label>
                  <input
                    value={formCidr}
                    onChange={(e) => setFormCidr(e.target.value)}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded font-mono text-slate-900"
                    required
                  />
                </div>
              )}
              {modalOpen === 'vswitch' && (
                <div>
                  <label className="block font-mono text-slate-600 mb-1">Availability Zone</label>
                  <select
                    value={formZone}
                    onChange={(e) => setFormZone(e.target.value)}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded font-mono text-slate-900"
                  >
                    <option value="cn-hangzhou-i">cn-hangzhou-i</option>
                    <option value="cn-hangzhou-j">cn-hangzhou-j</option>
                    <option value="cn-hangzhou-k">cn-hangzhou-k</option>
                  </select>
                </div>
              )}
              {(modalOpen === 'eip' || modalOpen === 'disk' || modalOpen === 'sg' || modalOpen === 'alarm') && (
                <div>
                  <label className="block font-mono text-slate-600 mb-1">
                    {modalOpen === 'eip'
                      ? 'Bandwidth (Mbps)'
                      : modalOpen === 'disk'
                      ? 'Disk Size (GiB)'
                      : modalOpen === 'sg'
                      ? 'Port Range (e.g. 8443/8443)'
                      : 'CPU Threshold (%)'}
                  </label>
                  <input
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded font-mono text-slate-900"
                    required
                  />
                </div>
              )}
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setModalOpen(null)}
                className="px-3 py-1.5 rounded border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1.5 rounded bg-[#ff6a00] hover:bg-[#e55f00] text-white text-xs font-bold cursor-pointer"
              >
                Confirm Provisioning
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Integrated Aliyun CLI Shell */}
      <div className="h-36 bg-[#0d1117] border-t border-slate-800 flex flex-col shrink-0">
        <div className="px-3 py-1 bg-[#161b22] border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-orange-400" />
            <span>Aliyun Cloud Shell ({region})</span>
          </div>
          <span className="text-slate-500">aliyun cli v3.0</span>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-1.5 font-mono text-[11px] text-slate-300 space-y-1">
          {cliLogs.map((line, i) => (
            <div key={i} className={line.startsWith('$') ? 'text-orange-300 font-semibold' : 'text-slate-300 break-all'}>
              {line}
            </div>
          ))}
        </div>
        <form onSubmit={handleCliSubmit} className="px-3 py-1.5 border-t border-slate-800 flex items-center gap-2">
          <span className="font-mono text-xs text-orange-400 font-bold">$</span>
          <input
            value={cliInput}
            onChange={(e) => setCliInput(e.target.value)}
            placeholder="aliyun vpc DescribeVpcs"
            className="flex-1 bg-transparent font-mono text-xs text-white placeholder-slate-500 focus:outline-hidden"
          />
        </form>
      </div>
    </div>
  );
};
