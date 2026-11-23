import React, { useState } from 'react';
import { WorkspaceProps } from './AlibabaConsoleWorkspace';
import {
  FolderKanban,
  Server,
  Network,
  Shield,
  Database,
  Users,
  Plus,
  Terminal,
  Play,
  Square,
  CheckCircle2,
  Search,
} from 'lucide-react';

type AzureBlade = 'resource_groups' | 'vnets' | 'vms' | 'storage' | 'rbac';

export const AzurePortalWorkspace: React.FC<WorkspaceProps> = ({
  manifest,
  onCommandRun,
  onSimulationCompleted,
  lastSavedTimestamp = 'just now',
}) => {
  const cloudWorkspace = manifest.workspace?.cloud;
  const cloudRegion = cloudWorkspace?.region || 'eastus';
  const requestedSurface = cloudWorkspace?.surface;
  const initialBlade: AzureBlade = ['resource_groups', 'vnets', 'vms', 'storage', 'rbac'].includes(requestedSurface || '')
    ? requestedSurface as AzureBlade
    : 'vnets';
  const [subscription] = useState('Enterprise-Prod-Sub (8f4c-91a2)');
  const [activeBlade, setActiveBlade] = useState<AzureBlade>(initialBlade);
  const [filterQuery, setFilterQuery] = useState('');

  const [resourceGroups, setResourceGroups] = useState([
    { name: 'rg-prod-core-eastus', location: 'eastus', resources: 6, state: 'Succeeded' },
    { name: 'rg-network-hub-eastus', location: 'eastus', resources: 4, state: 'Succeeded' },
  ]);

  const [vnets, setVnets] = useState([
    {
      name: 'vnet-prod-eastus',
      resourceGroup: 'rg-network-hub-eastus',
      addressSpace: '10.20.0.0/16',
      subnets: 'snet-app (10.20.1.0/24), snet-data (10.20.2.0/24)',
      nsg: 'nsg-prod-app',
    },
  ]);

  const [nsgRules, setNsgRules] = useState([
    { priority: 100, name: 'AllowHttpsInbound', port: '443', protocol: 'TCP', source: 'Internet', access: 'Allow' },
    { priority: 110, name: 'AllowAppToData', port: '5432', protocol: 'TCP', source: '10.20.1.0/24', access: 'Allow' },
    { priority: 4096, name: 'DenyAllInbound', port: '*', protocol: 'Any', source: '*', access: 'Deny' },
  ]);

  const [vms, setVms] = useState([
    { name: 'vm-app-node-01', rg: 'rg-prod-core-eastus', size: 'Standard_D4s_v5', privateIp: '10.20.1.14', status: 'Running' },
    { name: 'vm-worker-02', rg: 'rg-prod-core-eastus', size: 'Standard_D2s_v5', privateIp: '10.20.1.15', status: 'Stopped' },
  ]);

  const [storageAccounts, setStorageAccounts] = useState([
    { name: 'stprodartifacts01', rg: 'rg-prod-core-eastus', sku: 'Standard_GRS', tlsMin: 'TLS 1.2', publicBlob: 'Disabled' },
  ]);

  const [rbacAssignments] = useState([
    { principal: 'Platform-Infra-Admins', role: 'Contributor', scope: 'rg-prod-core-eastus', type: 'Entra ID Group' },
    { principal: 'SecOps-Compliance', role: 'Reader', scope: 'Subscription', type: 'Entra ID Group' },
  ]);

  const [modalOpen, setModalOpen] = useState<'rg' | 'nsg' | 'storage' | null>(null);
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [inputC, setInputC] = useState('');

  const [cliInput, setCliInput] = useState('');
  const [cliLogs, setCliLogs] = useState<string[]>([
    `Azure Cloud Shell (Bash) • az-cli 2.61.0 • Subscription: ${subscription}`,
    'Type "help" or run: az group list | az network vnet list | az network nsg rule list | az vm list | az storage account list',
  ]);

  const emitAction = (cmd: string, out: string) => {
    setCliLogs((p) => [...p, `$ ${cmd}`, out]);
    onCommandRun?.(cmd, out);
    onSimulationCompleted?.(true);
  };

  const handleToggleVm = (name: string) => {
    setVms((prev) =>
      prev.map((vm) => {
        if (vm.name !== name) return vm;
        const nextStatus = vm.status === 'Running' ? 'Stopped' : 'Running';
        const action = nextStatus === 'Running' ? 'start' : 'deallocate';
        emitAction(`az vm ${action} -g ${vm.rg} -n ${vm.name}`, `{"powerState": "VM ${nextStatus.toLowerCase()}"}`);
        return { ...vm, status: nextStatus };
      })
    );
  };

  const openModal = (mode: typeof modalOpen) => {
    if (mode === 'rg') {
      setInputA('rg-dr-standby-westus2');
      setInputB(cloudRegion);
    } else if (mode === 'nsg') {
      setInputA('AllowBastionSsh');
      setInputB('22');
      setInputC('10.254.0.10/32');
    } else if (mode === 'storage') {
      setInputA('stbackupvault02');
      setInputB('Standard_ZRS');
    }
    setModalOpen(mode);
  };

  const handleSubmitModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalOpen === 'rg') {
      setResourceGroups((p) => [...p, { name: inputA, location: inputB || 'eastus', resources: 0, state: 'Succeeded' }]);
      emitAction(`az group create --name ${inputA} --location ${inputB}`, `{"properties": {"provisioningState": "Succeeded"}}`);
    } else if (modalOpen === 'nsg') {
      const priority = 120 + nsgRules.length * 10;
      setNsgRules((p) => [
        ...p.filter((r) => r.priority < 4000),
        { priority, name: inputA, port: inputB || '22', protocol: 'TCP', source: inputC || '10.254.0.10/32', access: 'Allow' },
        ...p.filter((r) => r.priority >= 4000),
      ]);
      emitAction(`az network nsg rule create --nsg-name nsg-prod-app -n ${inputA} --priority ${priority} --destination-port-ranges ${inputB}`, `{"provisioningState": "Succeeded", "access": "Allow"}`);
    } else if (modalOpen === 'storage') {
      setStorageAccounts((p) => [...p, { name: inputA, rg: 'rg-prod-core-eastus', sku: inputB || 'Standard_GRS', tlsMin: 'TLS 1.2', publicBlob: 'Disabled' }]);
      emitAction(`az storage account create -n ${inputA} -g rg-prod-core-eastus --sku ${inputB} --min-tls-version TLS1_2`, `{"provisioningState": "Succeeded", "minimumTlsVersion": "TLS1_2"}`);
    }
    setModalOpen(null);
  };

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = cliInput.trim();
    if (!cmd) return;
    setCliInput('');
    const low = cmd.toLowerCase();
    if (low === 'help') {
      emitAction(cmd, 'Azure CLI commands: az group list | az network vnet list | az network nsg rule list | az vm list | az storage account list');
    } else if (low.includes('group list')) {
      emitAction(cmd, JSON.stringify(resourceGroups));
    } else if (low.includes('vnet list')) {
      emitAction(cmd, JSON.stringify(vnets));
    } else if (low.includes('nsg rule list')) {
      emitAction(cmd, JSON.stringify(nsgRules));
    } else if (low.includes('vm list')) {
      emitAction(cmd, JSON.stringify(vms));
    } else if (low.includes('storage account list')) {
      emitAction(cmd, JSON.stringify(storageAccounts));
    } else {
      emitAction(cmd, `{"status": "Succeeded", "subscription": "${subscription}"}`);
    }
  };

  const bladeNav: Array<{ id: AzureBlade; label: string; icon: React.ComponentType<{ className?: string }> }> = [
    { id: 'resource_groups', label: 'Resource groups', icon: FolderKanban },
    { id: 'vnets', label: 'Virtual networks & NSG', icon: Network },
    { id: 'vms', label: 'Virtual machines', icon: Server },
    { id: 'storage', label: 'Storage accounts', icon: Database },
    { id: 'rbac', label: 'Entra ID (RBAC)', icon: Users },
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden min-h-0 select-none">
      {/* Classic Microsoft Azure Portal Top Bar */}
      <div className="px-4 py-2 bg-[#0078d4] text-white flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-bold text-xs tracking-tight text-white whitespace-nowrap">
            Microsoft Azure
          </span>
          <div className="hidden md:flex items-center gap-1.5 bg-white/15 border border-white/20 rounded px-2.5 py-0.5 w-64">
            <Search className="w-3 h-3 text-white/80" />
            <input
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search resources, services (G+/)"
              className="bg-transparent text-xs text-white placeholder-white/75 focus:outline-hidden w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[11px] font-mono text-white/90 hidden sm:inline">{subscription}</span>
          <span className="text-[11px] font-mono text-white/75 hidden lg:inline">Contoso Entra ID</span>
        </div>
      </div>

      {/* Main Split: Left Azure Blade Sidebar + Right Resource Blade */}
      <div className="flex-1 flex min-h-0 overflow-hidden">
        {/* Left Azure Service Menu */}
        <aside className="w-48 bg-white border-r border-slate-200 p-2 space-y-0.5 shrink-0 hidden sm:block overflow-y-auto">
          <div className="px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
            Azure Services
          </div>
          {bladeNav.map((item) => {
            const Icon = item.icon;
            const active = activeBlade === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveBlade(item.id)}
                className={`w-full px-2.5 py-2 rounded text-xs font-medium flex items-center gap-2 transition-colors cursor-pointer text-left ${
                  active
                    ? 'bg-sky-50 text-[#005a9e] font-semibold border border-sky-200'
                    : 'text-slate-700 hover:bg-slate-50 border border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Right Blade Workspace */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto p-4 space-y-3">
          {/* Mobile Blade Switcher */}
          <div className="flex sm:hidden items-center gap-1 overflow-x-auto pb-1">
            {bladeNav.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveBlade(item.id)}
                className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer ${
                  activeBlade === item.id ? 'bg-[#0078d4] text-white' : 'bg-white border border-slate-200 text-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="text-[11px] font-mono text-slate-400">
                Home &gt; {manifest.title}
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                {bladeNav.find((b) => b.id === activeBlade)?.label}
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] font-mono text-slate-400 hidden lg:inline">
                Saved {lastSavedTimestamp}
              </span>
              {(activeBlade === 'resource_groups' || activeBlade === 'vnets' || activeBlade === 'storage') && (
                <button
                  onClick={() => openModal(activeBlade === 'resource_groups' ? 'rg' : activeBlade === 'vnets' ? 'nsg' : 'storage')}
                  className="px-3 py-1.5 rounded bg-[#0078d4] hover:bg-[#106ebe] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>
                    {activeBlade === 'resource_groups'
                      ? 'Create resource group'
                      : activeBlade === 'vnets'
                      ? 'Add NSG inbound rule'
                      : 'Create storage account'}
                  </span>
                </button>
              )}
            </div>
          </div>

          {activeBlade === 'resource_groups' && (
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Resource Group</th>
                    <th className="px-3 py-2">Region</th>
                    <th className="px-3 py-2">Deployments</th>
                    <th className="px-3 py-2">Provisioning State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {resourceGroups
                    .filter((r) => r.name.toLowerCase().includes(filterQuery.toLowerCase()))
                    .map((rg) => (
                      <tr key={rg.name} className="hover:bg-slate-50/70">
                        <td className="px-3 py-2.5 font-mono font-semibold text-[#005a9e]">{rg.name}</td>
                        <td className="px-3 py-2.5 font-mono text-slate-700">{rg.location}</td>
                        <td className="px-3 py-2.5 font-mono tabular-nums text-slate-700">{rg.resources}</td>
                        <td className="px-3 py-2.5 font-mono text-emerald-700 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {rg.state}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}

          {activeBlade === 'vnets' && (
            <div className="space-y-3">
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                    <tr>
                      <th className="px-3 py-2">Virtual Network</th>
                      <th className="px-3 py-2">Address Space</th>
                      <th className="px-3 py-2">Subnets</th>
                      <th className="px-3 py-2">Attached NSG</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {vnets.map((v) => (
                      <tr key={v.name}>
                        <td className="px-3 py-2.5 font-mono font-semibold text-[#005a9e]">{v.name}</td>
                        <td className="px-3 py-2.5 font-mono tabular-nums text-slate-800">{v.addressSpace}</td>
                        <td className="px-3 py-2.5 font-mono text-slate-600">{v.subnets}</td>
                        <td className="px-3 py-2.5 font-mono text-slate-700">{v.nsg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                <div className="px-3 py-2 bg-slate-50 border-b border-slate-200 text-[11px] font-mono font-bold text-slate-600 uppercase flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#0078d4]" />
                  <span>Network Security Group (nsg-prod-app) — Inbound Security Rules</span>
                </div>
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50/50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                    <tr>
                      <th className="px-3 py-2">Priority</th>
                      <th className="px-3 py-2">Rule Name</th>
                      <th className="px-3 py-2">Port</th>
                      <th className="px-3 py-2">Source</th>
                      <th className="px-3 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {nsgRules.map((rule) => (
                      <tr key={rule.priority} className="hover:bg-slate-50/70">
                        <td className="px-3 py-2 font-mono tabular-nums text-slate-700">{rule.priority}</td>
                        <td className="px-3 py-2 font-semibold text-slate-900">{rule.name}</td>
                        <td className="px-3 py-2 font-mono tabular-nums text-slate-700">{rule.protocol}/{rule.port}</td>
                        <td className="px-3 py-2 font-mono tabular-nums text-slate-700">{rule.source}</td>
                        <td className={`px-3 py-2 font-mono font-semibold ${rule.access === 'Allow' ? 'text-emerald-700' : 'text-rose-700'}`}>
                          {rule.access}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeBlade === 'vms' && (
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Virtual Machine</th>
                    <th className="px-3 py-2">SKU Size</th>
                    <th className="px-3 py-2">Private IP</th>
                    <th className="px-3 py-2">Status</th>
                    <th className="px-3 py-2">Power Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {vms.map((vm) => (
                    <tr key={vm.name} className="hover:bg-slate-50/70">
                      <td className="px-3 py-2.5">
                        <div className="font-mono font-semibold text-[#005a9e]">{vm.name}</div>
                        <div className="font-mono text-[11px] text-slate-500">{vm.rg}</div>
                      </td>
                      <td className="px-3 py-2.5 font-mono text-slate-700">{vm.size}</td>
                      <td className="px-3 py-2.5 font-mono tabular-nums text-slate-800">{vm.privateIp}</td>
                      <td className={`px-3 py-2.5 font-mono font-semibold ${vm.status === 'Running' ? 'text-emerald-700' : 'text-slate-500'}`}>
                        {vm.status}
                      </td>
                      <td className="px-3 py-2.5">
                        <button
                          onClick={() => handleToggleVm(vm.name)}
                          className="px-2.5 py-1 rounded border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center gap-1 cursor-pointer"
                        >
                          {vm.status === 'Running' ? <Square className="w-3 h-3 text-rose-600" /> : <Play className="w-3 h-3 text-emerald-600" />}
                          <span>{vm.status === 'Running' ? 'Deallocate' : 'Start VM'}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeBlade === 'storage' && (
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Storage Account</th>
                    <th className="px-3 py-2">Redundancy (SKU)</th>
                    <th className="px-3 py-2">Minimum TLS</th>
                    <th className="px-3 py-2">Public Blob Access</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {storageAccounts.map((sa) => (
                    <tr key={sa.name} className="hover:bg-slate-50/70">
                      <td className="px-3 py-2.5 font-mono font-semibold text-[#005a9e]">{sa.name}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-700">{sa.sku}</td>
                      <td className="px-3 py-2.5 font-mono text-emerald-700 font-semibold">{sa.tlsMin}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-700">{sa.publicBlob}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeBlade === 'rbac' && (
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Principal</th>
                    <th className="px-3 py-2">Role Definition</th>
                    <th className="px-3 py-2">Scope</th>
                    <th className="px-3 py-2">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rbacAssignments.map((r) => (
                    <tr key={r.principal}>
                      <td className="px-3 py-2.5 font-semibold text-slate-900">{r.principal}</td>
                      <td className="px-3 py-2.5 font-mono font-semibold text-[#005a9e]">{r.role}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-700">{r.scope}</td>
                      <td className="px-3 py-2.5 text-slate-600">{r.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 z-50 flex items-center justify-center p-4">
          <form onSubmit={handleSubmitModal} className="bg-white border border-slate-200 rounded-xl shadow-lg w-full max-w-md p-4 space-y-3">
            <h4 className="text-sm font-bold text-slate-900">
              {modalOpen === 'rg'
                ? 'Create Azure Resource Group'
                : modalOpen === 'nsg'
                ? 'Add NSG Inbound Security Rule'
                : 'Create Azure Storage Account'}
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <label className="block font-mono text-slate-600 mb-1">
                  {modalOpen === 'rg' ? 'Resource Group Name' : modalOpen === 'nsg' ? 'Rule Name' : 'Account Name (lowercase)'}
                </label>
                <input
                  value={inputA}
                  onChange={(e) => setInputA(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded font-mono text-slate-900"
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-slate-600 mb-1">
                  {modalOpen === 'rg' ? 'Azure Region' : modalOpen === 'nsg' ? 'Destination Port' : 'Replication SKU'}
                </label>
                <input
                  value={inputB}
                  onChange={(e) => setInputB(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded font-mono text-slate-900"
                  required
                />
              </div>
              {modalOpen === 'nsg' && (
                <div>
                  <label className="block font-mono text-slate-600 mb-1">Source IP / CIDR</label>
                  <input
                    value={inputC}
                    onChange={(e) => setInputC(e.target.value)}
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
                className="px-3 py-1.5 rounded bg-[#0078d4] hover:bg-[#106ebe] text-white text-xs font-bold cursor-pointer"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Azure Cloud Shell */}
      <div className="h-36 bg-[#0d1117] border-t border-slate-800 flex flex-col shrink-0">
        <div className="px-3 py-1 bg-[#0b253a] border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-sky-200">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>Azure Cloud Shell (az cli)</span>
          </div>
          <span className="text-sky-300/70">eastus</span>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-1.5 font-mono text-[11px] text-slate-300 space-y-1">
          {cliLogs.map((line, i) => (
            <div key={i} className={line.startsWith('$') ? 'text-sky-300 font-semibold' : 'text-slate-300 break-all'}>
              {line}
            </div>
          ))}
        </div>
        <form onSubmit={handleCliSubmit} className="px-3 py-1.5 border-t border-slate-800 flex items-center gap-2">
          <span className="font-mono text-xs text-sky-400 font-bold">$</span>
          <input
            value={cliInput}
            onChange={(e) => setCliInput(e.target.value)}
            placeholder="az network vnet list"
            className="flex-1 bg-transparent font-mono text-xs text-white placeholder-slate-500 focus:outline-hidden"
          />
        </form>
      </div>
    </div>
  );
};
