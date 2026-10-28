import React, { useState } from 'react';
import { PracticalManifest } from '../types/practical';
import {
  Cloud,
  Server,
  Network,
  HardDrive,
  Bell,
  Globe,
  Plus,
  CheckCircle2,
  AlertTriangle,
  Terminal,
  Activity,
  ArrowRight,
  Shield,
  Layers,
  ChevronDown
} from 'lucide-react';

interface CloudConsoleWorkspaceProps {
  manifest: PracticalManifest;
  onSimulationCompleted?: (passed: boolean) => void;
  lastSavedTimestamp?: string;
}

export const CloudConsoleWorkspace: React.FC<CloudConsoleWorkspaceProps> = ({
  manifest,
  onSimulationCompleted,
  lastSavedTimestamp = 'just now',
}) => {
  const isAlibaba = manifest.courseName.toLowerCase().includes('alibaba') || manifest.id.includes('alibaba');

  // Cloud services tabs
  const [activeService, setActiveService] = useState<'vpc' | 'vswitch' | 'eip' | 'disk' | 'monitor'>('vpc');

  // Resource states
  const [vpcs, setVpcs] = useState([
    { id: 'vpc-2ze8f41', name: 'vpc-production-east', cidr: '192.168.0.0/16', status: 'Available', region: 'cn-hangzhou' }
  ]);

  const [vswitches, setVswitches] = useState([
    { id: 'vsw-2zek891', name: 'vsw-zone-i-primary', cidr: '192.168.1.0/24', vpcId: 'vpc-2ze8f41', zone: 'cn-hangzhou-i', status: 'Available' }
  ]);

  const [eips, setEips] = useState([
    { id: 'eip-2ze671a', ip: '47.98.112.4', bandwidth: '10 Mbps', status: 'In Use', instance: 'ecs-web-cluster-01' }
  ]);

  const [disks, setDisks] = useState([
    { id: 'd-2ze91ab', name: 'disk-data-ssd', size: '100 GiB', type: 'Enhanced SSD (ESSD)', status: 'In Use', instance: 'ecs-web-cluster-01' }
  ]);

  const [alarms, setAlarms] = useState([
    { id: 'alm-101', name: 'CPU-Utilization-Critical', metric: 'CPUUtilization > 80%', evaluationPeriod: '3 periods of 1m', state: 'OK', notification: 'admin-alert-group' }
  ]);

  // Modals for creation
  const [modalOpen, setModalOpen] = useState<'vpc' | 'vswitch' | 'eip' | 'disk' | 'alarm' | null>(null);

  // Form states
  const [newVpcName, setNewVpcName] = useState('vpc-demo-app');
  const [newVpcCidr, setNewVpcCidr] = useState('172.16.0.0/12');
  const [newVswName, setNewVswName] = useState('vsw-zone-j-backup');
  const [newVswCidr, setNewVswCidr] = useState('172.16.1.0/24');
  const [newDiskSize, setNewDiskSize] = useState('80');
  const [newAlarmThreshold, setNewAlarmThreshold] = useState('85');

  // Integrated CLI drawer
  const [cliInput, setCliInput] = useState('');
  const [cliLogs, setCliLogs] = useState<string[]>([
    isAlibaba
      ? 'Aliyun CLI v3.0.188 configured for region cn-hangzhou'
      : 'AWS CLI v2.15.15 configured for us-east-1',
    'Ready. Run "aliyun vpc DescribeVpcs" or create resources using console.'
  ]);

  const handleCreateVpc = () => {
    const id = `vpc-${Math.random().toString(36).substring(2, 9)}`;
    setVpcs((prev) => [...prev, { id, name: newVpcName, cidr: newVpcCidr, status: 'Available', region: 'cn-hangzhou' }]);
    setCliLogs((prev) => [...prev, `$ aliyun vpc CreateVpc --VpcName ${newVpcName} --CidrBlock ${newVpcCidr}`, `[Success] Created VPC ${id}`]);
    setModalOpen(null);
    onSimulationCompleted?.(true);
  };

  const handleCreateVSwitch = () => {
    const id = `vsw-${Math.random().toString(36).substring(2, 9)}`;
    setVswitches((prev) => [...prev, { id, name: newVswName, cidr: newVswCidr, vpcId: vpcs[0]?.id || 'vpc-default', zone: 'cn-hangzhou-j', status: 'Available' }]);
    setCliLogs((prev) => [...prev, `$ aliyun vpc CreateVSwitch --VSwitchName ${newVswName} --CidrBlock ${newVswCidr}`, `[Success] Created VSwitch ${id}`]);
    setModalOpen(null);
    onSimulationCompleted?.(true);
  };

  const handleCreateDisk = () => {
    const id = `d-${Math.random().toString(36).substring(2, 9)}`;
    setDisks((prev) => [...prev, { id, name: `disk-extra-${newDiskSize}gb`, size: `${newDiskSize} GiB`, type: 'Standard SSD', status: 'In Use', instance: 'ecs-web-cluster-01' }]);
    setCliLogs((prev) => [...prev, `$ aliyun ecs CreateDisk --Size ${newDiskSize} --Category cloud_ssd`, `[Success] Attached Disk ${id} to ecs-web-cluster-01`]);
    setModalOpen(null);
    onSimulationCompleted?.(true);
  };

  const handleCreateAlarm = () => {
    const id = `alm-${Math.floor(100 + Math.random() * 900)}`;
    setAlarms((prev) => [...prev, { id, name: `CPU-Threshold-${newAlarmThreshold}pct`, metric: `CPUUtilization > ${newAlarmThreshold}%`, evaluationPeriod: '2 periods of 1m', state: 'OK', notification: 'ops-team' }]);
    setCliLogs((prev) => [...prev, `$ aliyun cms PutMetricRule --RuleName CPU-Threshold-${newAlarmThreshold}pct`, `[Success] CloudMonitor Alarm ${id} enabled`]);
    setModalOpen(null);
    onSimulationCompleted?.(true);
  };

  const handleRunCli = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliInput.trim()) return;
    const cmd = cliInput.trim();
    setCliLogs((prev) => [...prev, `$ ${cmd}`]);
    if (cmd.includes('DescribeVpcs') || cmd.includes('describe-vpcs')) {
      setCliLogs((prev) => [...prev, JSON.stringify(vpcs, null, 2)]);
    } else if (cmd.includes('CreateVpc')) {
      handleCreateVpc();
    } else {
      setCliLogs((prev) => [...prev, `API execution successful. 200 OK (0.12s)`]);
    }
    setCliInput('');
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-100 overflow-hidden font-sans select-none">
      {/* 1. Cloud Web Console Header */}
      <div className="px-4 py-2 bg-slate-900 text-white flex items-center justify-between shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold text-xs tracking-tight">
            <Cloud className="w-4 h-4 text-orange-400" />
            <span>{isAlibaba ? 'Alibaba Cloud Console' : 'AWS Management Console'}</span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-xs text-slate-300 font-mono">
            {manifest.title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-slate-800 text-xs px-2.5 py-1 rounded text-slate-300 font-mono">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>{isAlibaba ? 'cn-hangzhou (Hangzhou)' : 'us-east-1 (N. Virginia)'}</span>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            UID: 519280410
          </span>
        </div>
      </div>

      {/* 2. Secondary Navigation Tabs */}
      <div className="px-4 py-1.5 bg-white border-b border-slate-200 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveService('vpc')}
            className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeService === 'vpc'
                ? 'bg-orange-50 text-orange-700 border border-orange-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>VPC ({vpcs.length})</span>
          </button>

          <button
            onClick={() => setActiveService('vswitch')}
            className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeService === 'vswitch'
                ? 'bg-orange-50 text-orange-700 border border-orange-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>VSwitches ({vswitches.length})</span>
          </button>

          <button
            onClick={() => setActiveService('eip')}
            className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeService === 'eip'
                ? 'bg-orange-50 text-orange-700 border border-orange-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Elastic IP ({eips.length})</span>
          </button>

          <button
            onClick={() => setActiveService('disk')}
            className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeService === 'disk'
                ? 'bg-orange-50 text-orange-700 border border-orange-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <HardDrive className="w-3.5 h-3.5" />
            <span>Cloud Disks ({disks.length})</span>
          </button>

          <button
            onClick={() => setActiveService('monitor')}
            className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeService === 'monitor'
                ? 'bg-orange-50 text-orange-700 border border-orange-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>CloudMonitor ({alarms.length})</span>
          </button>
        </div>

        <button
          onClick={() => {
            if (activeService === 'vpc') setModalOpen('vpc');
            else if (activeService === 'vswitch') setModalOpen('vswitch');
            else if (activeService === 'disk') setModalOpen('disk');
            else if (activeService === 'monitor') setModalOpen('alarm');
            else setModalOpen('eip');
          }}
          className="px-3 py-1 bg-orange-600 hover:bg-orange-700 text-white rounded-md text-xs font-semibold flex items-center gap-1 shadow-2xs transition-colors cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Create Resource</span>
        </button>
      </div>

      {/* 3. Main Console Viewport */}
      <div className="flex-1 p-3 min-h-0 overflow-hidden flex flex-col gap-2">
        {/* Table & Topology Area */}
        <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col min-h-0 overflow-hidden">
          {/* Active Service Table */}
          <div className="flex-1 p-3 overflow-y-auto min-h-0">
            {activeService === 'vpc' && (
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-800">
                    Virtual Private Clouds (VPC)
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Isolated Software-Defined Network
                  </span>
                </div>
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                      <th className="py-1.5 px-2 font-semibold">VPC ID</th>
                      <th className="py-1.5 px-2 font-semibold">Name</th>
                      <th className="py-1.5 px-2 font-semibold">IPv4 CIDR</th>
                      <th className="py-1.5 px-2 font-semibold">Status</th>
                      <th className="py-1.5 px-2 font-semibold">Region</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {vpcs.map((v) => (
                      <tr key={v.id} className="hover:bg-slate-50">
                        <td className="py-1.5 px-2 text-indigo-600 font-medium">{v.id}</td>
                        <td className="py-1.5 px-2 text-slate-800 font-sans font-medium">{v.name}</td>
                        <td className="py-1.5 px-2 text-slate-700">{v.cidr}</td>
                        <td className="py-1.5 px-2 text-emerald-600 font-bold">{v.status}</td>
                        <td className="py-1.5 px-2 text-slate-500">{v.region}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeService === 'vswitch' && (
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-800">
                    VSwitches (Subnets)
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Zone-Specific Network Segments
                  </span>
                </div>
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                      <th className="py-1.5 px-2 font-semibold">VSwitch ID</th>
                      <th className="py-1.5 px-2 font-semibold">Name</th>
                      <th className="py-1.5 px-2 font-semibold">IPv4 CIDR</th>
                      <th className="py-1.5 px-2 font-semibold">VPC ID</th>
                      <th className="py-1.5 px-2 font-semibold">Zone</th>
                      <th className="py-1.5 px-2 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {vswitches.map((vs) => (
                      <tr key={vs.id} className="hover:bg-slate-50">
                        <td className="py-1.5 px-2 text-indigo-600 font-medium">{vs.id}</td>
                        <td className="py-1.5 px-2 text-slate-800 font-sans font-medium">{vs.name}</td>
                        <td className="py-1.5 px-2 text-slate-700">{vs.cidr}</td>
                        <td className="py-1.5 px-2 text-slate-600">{vs.vpcId}</td>
                        <td className="py-1.5 px-2 text-slate-500">{vs.zone}</td>
                        <td className="py-1.5 px-2 text-emerald-600 font-bold">{vs.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeService === 'eip' && (
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-800">
                    Elastic IP Addresses (EIP)
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Static Public IPv4 Allocation
                  </span>
                </div>
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                      <th className="py-1.5 px-2 font-semibold">EIP ID</th>
                      <th className="py-1.5 px-2 font-semibold">IP Address</th>
                      <th className="py-1.5 px-2 font-semibold">Bandwidth</th>
                      <th className="py-1.5 px-2 font-semibold">Associated Instance</th>
                      <th className="py-1.5 px-2 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {eips.map((e) => (
                      <tr key={e.id} className="hover:bg-slate-50">
                        <td className="py-1.5 px-2 text-indigo-600 font-medium">{e.id}</td>
                        <td className="py-1.5 px-2 text-slate-900 font-bold">{e.ip}</td>
                        <td className="py-1.5 px-2 text-slate-700">{e.bandwidth}</td>
                        <td className="py-1.5 px-2 text-slate-700 font-sans">{e.instance}</td>
                        <td className="py-1.5 px-2 text-emerald-600 font-bold">{e.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeService === 'disk' && (
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-800">
                    Block Storage (Cloud Disks)
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Ultra-low latency block devices
                  </span>
                </div>
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                      <th className="py-1.5 px-2 font-semibold">Disk ID</th>
                      <th className="py-1.5 px-2 font-semibold">Name</th>
                      <th className="py-1.5 px-2 font-semibold">Capacity</th>
                      <th className="py-1.5 px-2 font-semibold">Category</th>
                      <th className="py-1.5 px-2 font-semibold">Attached To</th>
                      <th className="py-1.5 px-2 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {disks.map((d) => (
                      <tr key={d.id} className="hover:bg-slate-50">
                        <td className="py-1.5 px-2 text-indigo-600 font-medium">{d.id}</td>
                        <td className="py-1.5 px-2 text-slate-800 font-sans font-medium">{d.name}</td>
                        <td className="py-1.5 px-2 text-slate-900 font-bold">{d.size}</td>
                        <td className="py-1.5 px-2 text-slate-600">{d.type}</td>
                        <td className="py-1.5 px-2 text-slate-700 font-sans">{d.instance}</td>
                        <td className="py-1.5 px-2 text-emerald-600 font-bold">{d.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeService === 'monitor' && (
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-800">
                    CloudMonitor Metric Alarm Rules
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Automated Alert Triggering
                  </span>
                </div>
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                      <th className="py-1.5 px-2 font-semibold">Rule ID</th>
                      <th className="py-1.5 px-2 font-semibold">Rule Name</th>
                      <th className="py-1.5 px-2 font-semibold">Metric Condition</th>
                      <th className="py-1.5 px-2 font-semibold">Evaluation</th>
                      <th className="py-1.5 px-2 font-semibold">Alarm State</th>
                      <th className="py-1.5 px-2 font-semibold">Notification Target</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {alarms.map((a) => (
                      <tr key={a.id} className="hover:bg-slate-50">
                        <td className="py-1.5 px-2 text-indigo-600 font-medium">{a.id}</td>
                        <td className="py-1.5 px-2 text-slate-800 font-sans font-medium">{a.name}</td>
                        <td className="py-1.5 px-2 text-orange-600 font-bold">{a.metric}</td>
                        <td className="py-1.5 px-2 text-slate-600">{a.evaluationPeriod}</td>
                        <td className="py-1.5 px-2 text-emerald-600 font-bold">{a.state}</td>
                        <td className="py-1.5 px-2 text-slate-600 font-sans">{a.notification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Integrated CLI Console Bar */}
          <div className="bg-slate-950 text-slate-200 p-2.5 border-t border-slate-800 font-mono text-xs flex flex-col max-h-[110px] shrink-0">
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-800 text-[10px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-bold">
                <Terminal className="w-3 h-3" />
                Cloud Shell (Integrated Aliyun / AWS CLI)
              </span>
              <span>exit: 0</span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-0.5 text-[11px] mb-1">
              {cliLogs.slice(-3).map((log, idx) => (
                <div key={idx} className={log.startsWith('$') ? 'text-emerald-400 font-bold' : 'text-slate-300'}>
                  {log}
                </div>
              ))}
            </div>
            <form onSubmit={handleRunCli} className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">$</span>
              <input
                type="text"
                placeholder="aliyun vpc DescribeVpcs"
                value={cliInput}
                onChange={(e) => setCliInput(e.target.value)}
                className="flex-1 bg-transparent border-none text-slate-100 focus:outline-hidden font-mono text-xs"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Creation Modals */}
      {modalOpen === 'vpc' && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl border border-slate-200 shadow-xl max-w-md w-full p-4 space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Create Virtual Private Cloud (VPC)</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-0.5">VPC Name</label>
                <input
                  type="text"
                  value={newVpcName}
                  onChange={(e) => setNewVpcName(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-0.5">IPv4 CIDR Block</label>
                <input
                  type="text"
                  value={newVpcCidr}
                  onChange={(e) => setNewVpcCidr(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 font-mono"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setModalOpen(null)}
                className="px-3 py-1.5 rounded text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateVpc}
                className="px-3 py-1.5 rounded text-xs font-semibold bg-orange-600 text-white hover:bg-orange-700"
              >
                Confirm & Create
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen === 'vswitch' && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl border border-slate-200 shadow-xl max-w-md w-full p-4 space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Create VSwitch</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-0.5">VSwitch Name</label>
                <input
                  type="text"
                  value={newVswName}
                  onChange={(e) => setNewVswName(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-0.5">Subnet CIDR Block</label>
                <input
                  type="text"
                  value={newVswCidr}
                  onChange={(e) => setNewVswCidr(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 font-mono"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setModalOpen(null)}
                className="px-3 py-1.5 rounded text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateVSwitch}
                className="px-3 py-1.5 rounded text-xs font-semibold bg-orange-600 text-white hover:bg-orange-700"
              >
                Create VSwitch
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen === 'disk' && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl border border-slate-200 shadow-xl max-w-md w-full p-4 space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Attach Cloud Disk (Block Storage)</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-0.5">Capacity (GiB)</label>
                <input
                  type="number"
                  value={newDiskSize}
                  onChange={(e) => setNewDiskSize(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 font-mono"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setModalOpen(null)}
                className="px-3 py-1.5 rounded text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateDisk}
                className="px-3 py-1.5 rounded text-xs font-semibold bg-orange-600 text-white hover:bg-orange-700"
              >
                Attach Disk
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen === 'alarm' && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl border border-slate-200 shadow-xl max-w-md w-full p-4 space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Configure CloudMonitor Alarm</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-0.5">CPU Utilization Threshold (%)</label>
                <input
                  type="number"
                  value={newAlarmThreshold}
                  onChange={(e) => setNewAlarmThreshold(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 font-mono"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setModalOpen(null)}
                className="px-3 py-1.5 rounded text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateAlarm}
                className="px-3 py-1.5 rounded text-xs font-semibold bg-orange-600 text-white hover:bg-orange-700"
              >
                Enable Alarm Rule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
