import React, { useState, useMemo } from 'react';
import { WorkspaceProps } from './AlibabaConsoleWorkspace';
import {
  FileCode2,
  Play,
  CheckCircle2,
  Terminal,
  GitCompare,
  Database,
  RefreshCw,
  Trash2,
  ShieldCheck,
} from 'lucide-react';

interface ParsedResource {
  address: string;
  type: string;
  name: string;
  attributes: Record<string, string>;
}

type PlanAction = 'create' | 'update' | 'destroy' | 'no-op';

interface PlannedChange {
  address: string;
  type: string;
  name: string;
  action: PlanAction;
  attributes: Record<string, string>;
  previousAttributes?: Record<string, string>;
}

function parseHclResources(hclContent: string): ParsedResource[] {
  const resources: ParsedResource[] = [];
  const blockRegex = /resource\s+"([^"]+)"\s+"([^"]+)"\s*\{([\s\S]*?)\n\}/g;
  let match: RegExpExecArray | null;
  while ((match = blockRegex.exec(hclContent)) !== null) {
    const [, type, name, body] = match;
    const attributes: Record<string, string> = {};
    body.split('\n').forEach((line) => {
      const kv = line.match(/^\s*([a-zA-Z0-9_]+)\s*=\s*(.+?)\s*$/);
      if (kv) {
        attributes[kv[1]] = kv[2].replace(/^"|"$/g, '').trim();
      }
    });
    resources.push({
      address: `${type}.${name}`,
      type,
      name,
      attributes,
    });
  }
  return resources;
}

type TfTab = 'plan' | 'editor' | 'state';

export const TerraformPlanWorkspace: React.FC<WorkspaceProps> = ({
  manifest,
  activeFileName,
  filesContent = {},
  onUpdateFileContent,
  onCommandRun,
  onSimulationCompleted,
  lastSavedTimestamp = 'just now',
}) => {
  const requestedSurface = manifest.workspace?.cloud?.surface;
  const initialTab: TfTab = ['plan', 'editor', 'state'].includes(requestedSurface || '')
    ? requestedSurface as TfTab
    : 'plan';
  const tfFileName =
    (activeFileName && filesContent[activeFileName] !== undefined ? activeFileName : null) ||
    manifest.files.find((f) => f.name.endsWith('.tf'))?.name ||
    manifest.files[0]?.name ||
    'main.tf';

  const currentHcl = filesContent[tfFileName] || manifest.files[0]?.initialContent || '';

  const [activeTab, setActiveTab] = useState<TfTab>(initialTab);
  const [initialized, setInitialized] = useState<boolean>(true);
  const [validated, setValidated] = useState<boolean>(true);
  const [appliedState, setAppliedState] = useState<Record<string, ParsedResource>>(() => {
    const initialParsed = parseHclResources(manifest.files[0]?.initialContent || '');
    // Pre-seed first resource as already in state so plan shows realistic mix of no-op / update / create
    if (initialParsed.length > 1) {
      return { [initialParsed[0].address]: initialParsed[0] };
    }
    return {};
  });

  const [cliInput, setCliInput] = useState('');
  const [cliLogs, setCliLogs] = useState<string[]>([
    'Terraform v1.8.4 on linux_amd64 • Providers: hashicorp/aws v5.48.0',
    'Ready. Run "terraform init", "terraform validate", "terraform plan", "terraform apply", or edit HCL directly.',
  ]);

  const parsedResources = useMemo(() => parseHclResources(currentHcl), [currentHcl]);

  const plannedChanges = useMemo<PlannedChange[]>(() => {
    const changes: PlannedChange[] = [];
    const seen = new Set<string>();

    parsedResources.forEach((res) => {
      seen.add(res.address);
      const existing = appliedState[res.address];
      if (!existing) {
        changes.push({
          address: res.address,
          type: res.type,
          name: res.name,
          action: 'create',
          attributes: res.attributes,
        });
      } else {
        const changed = JSON.stringify(existing.attributes) !== JSON.stringify(res.attributes);
        changes.push({
          address: res.address,
          type: res.type,
          name: res.name,
          action: changed ? 'update' : 'no-op',
          attributes: res.attributes,
          previousAttributes: existing.attributes,
        });
      }
    });

    Object.values(appliedState).forEach((stateRes) => {
      if (!seen.has(stateRes.address)) {
        changes.push({
          address: stateRes.address,
          type: stateRes.type,
          name: stateRes.name,
          action: 'destroy',
          attributes: stateRes.attributes,
        });
      }
    });

    return changes;
  }, [parsedResources, appliedState]);

  const summaryCounts = useMemo(() => {
    return {
      add: plannedChanges.filter((c) => c.action === 'create').length,
      change: plannedChanges.filter((c) => c.action === 'update').length,
      destroy: plannedChanges.filter((c) => c.action === 'destroy').length,
    };
  }, [plannedChanges]);

  const emitAction = (cmd: string, out: string) => {
    setCliLogs((p) => [...p, `$ ${cmd}`, out]);
    onCommandRun?.(cmd, out);
  };

  const handleInit = () => {
    setInitialized(true);
    emitAction(
      'terraform init',
      'Initializing the backend... Successfully configured provider plugins (hashicorp/aws v5.48.0). Terraform has been successfully initialized!'
    );
  };

  const handleValidate = () => {
    const valid = parsedResources.length > 0;
    setValidated(valid);
    emitAction(
      'terraform validate',
      valid
        ? `Success! The configuration in ${tfFileName} is valid (${parsedResources.length} resource block(s) parsed).`
        : 'Error: No valid HCL resource blocks found.'
    );
  };

  const handlePlan = () => {
    setActiveTab('plan');
    emitAction(
      'terraform plan',
      `Plan: ${summaryCounts.add} to add, ${summaryCounts.change} to change, ${summaryCounts.destroy} to destroy.`
    );
    onSimulationCompleted?.(true);
  };

  const handleApply = () => {
    const nextState: Record<string, ParsedResource> = {};
    parsedResources.forEach((r) => {
      nextState[r.address] = r;
    });
    setAppliedState(nextState);
    setActiveTab('state');
    emitAction(
      'terraform apply -auto-approve',
      `Apply complete! Resources: ${summaryCounts.add} added, ${summaryCounts.change} changed, ${summaryCounts.destroy} destroyed.`
    );
    onSimulationCompleted?.(true);
  };

  const handleDestroy = () => {
    const count = Object.keys(appliedState).length;
    setAppliedState({});
    emitAction(
      'terraform destroy -auto-approve',
      `Destroy complete! Resources: ${count} destroyed.`
    );
  };

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = cliInput.trim();
    if (!cmd) return;
    setCliInput('');
    const low = cmd.toLowerCase();
    if (low === 'help') {
      emitAction(cmd, 'Commands: terraform init | terraform validate | terraform plan | terraform apply | terraform state list | terraform destroy');
    } else if (low.includes('terraform init')) {
      handleInit();
    } else if (low.includes('terraform validate')) {
      handleValidate();
    } else if (low.includes('terraform plan')) {
      handlePlan();
    } else if (low.includes('terraform apply')) {
      handleApply();
    } else if (low.includes('terraform destroy')) {
      handleDestroy();
    } else if (low.includes('state list')) {
      const list = Object.keys(appliedState);
      emitAction(cmd, list.length ? list.join('\n') : '(empty state)');
    } else {
      emitAction(cmd, 'Executed successfully.');
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden min-h-0 select-none">
      {/* Terraform Studio Top Bar */}
      <div className="px-4 py-2 bg-[#1c1427] text-white flex items-center justify-between gap-3 shrink-0 border-b border-purple-950">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-6 h-6 rounded bg-[#7b42bc] flex items-center justify-center">
              <GitCompare className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-xs tracking-tight text-white whitespace-nowrap">
              Terraform IaC Studio
            </span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-xs text-purple-200 font-mono truncate">{manifest.title}</span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[11px] font-mono text-slate-300 hidden md:inline">
            Workspace: production-vpc
          </span>
          <span className="text-[10px] font-mono text-slate-400 hidden lg:inline">
            Saved {lastSavedTimestamp}
          </span>
        </div>
      </div>

      {/* Action Lifecycle Toolbar */}
      <div className="px-3 py-2 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-1">
          {[
            { id: 'plan', label: 'Execution Plan Diff', icon: GitCompare },
            { id: 'editor', label: `HCL Editor (${tfFileName})`, icon: FileCode2 },
            { id: 'state', label: `State (${Object.keys(appliedState).length})`, icon: Database },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TfTab)}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-purple-50 text-[#5c2d91] border border-purple-200'
                    : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Terraform CLI Action Buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleInit}
            className="px-2.5 py-1 rounded border border-slate-200 hover:bg-slate-50 text-xs font-mono font-semibold text-slate-700 flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
          >
            <RefreshCw className="w-3 h-3" />
            <span>init</span>
          </button>
          <button
            onClick={handleValidate}
            className="px-2.5 py-1 rounded border border-slate-200 hover:bg-slate-50 text-xs font-mono font-semibold text-slate-700 flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
          >
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>validate</span>
          </button>
          <button
            onClick={handlePlan}
            className="px-2.5 py-1 rounded border border-purple-300 bg-purple-50 hover:bg-purple-100 text-xs font-mono font-bold text-[#5c2d91] flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
          >
            <GitCompare className="w-3 h-3" />
            <span>plan</span>
          </button>
          <button
            onClick={handleApply}
            className="px-2.5 py-1 rounded bg-[#7b42bc] hover:bg-[#6733a3] text-white text-xs font-mono font-bold flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>apply</span>
          </button>
          <button
            onClick={handleDestroy}
            className="px-2 py-1 rounded border border-rose-200 hover:bg-rose-50 text-rose-700 text-xs font-mono font-semibold flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
            title="Destroy managed resources"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
        {activeTab === 'plan' && (
          <>
            {/* Plan Summary Strip */}
            <div className="bg-white border border-slate-200 rounded-lg px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-4">
                <span className="text-emerald-700 font-bold tabular-nums">+{summaryCounts.add} to add</span>
                <span className="text-amber-700 font-bold tabular-nums">~{summaryCounts.change} to change</span>
                <span className="text-rose-700 font-bold tabular-nums">-{summaryCounts.destroy} to destroy</span>
              </div>
              <div className="text-[11px] text-slate-500">
                Init: <strong className="text-slate-800">{initialized ? 'Ready' : 'Pending'}</strong> • Validate:{' '}
                <strong className="text-emerald-700">{validated ? 'Valid HCL' : 'Needs Fix'}</strong>
              </div>
            </div>

            {/* Diff Resource Blocks */}
            <div className="space-y-2.5">
              {plannedChanges.map((change) => (
                <div key={change.address} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                  <div className="px-3 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-bold ${
                          change.action === 'create'
                            ? 'text-emerald-700'
                            : change.action === 'update'
                            ? 'text-amber-700'
                            : change.action === 'destroy'
                            ? 'text-rose-700'
                            : 'text-slate-500'
                        }`}
                      >
                        {change.action === 'create'
                          ? '+ create'
                          : change.action === 'update'
                          ? '~ update in-place'
                          : change.action === 'destroy'
                          ? '- destroy'
                          : '= unchanged'}
                      </span>
                      <span className="font-bold text-slate-900">{change.address}</span>
                    </div>
                    <span className="text-[11px] text-slate-500">{change.type}</span>
                  </div>
                  <div className="p-3 bg-[#0f172a] text-slate-200 font-mono text-[11px] space-y-1">
                    {Object.entries(change.attributes).map(([k, v]) => {
                      const prevVal = change.previousAttributes?.[k];
                      const isModified = change.action === 'update' && prevVal !== v;
                      return (
                        <div key={k} className="flex items-start gap-2">
                          <span
                            className={
                              change.action === 'create'
                                ? 'text-emerald-400'
                                : change.action === 'destroy'
                                ? 'text-rose-400'
                                : isModified
                                ? 'text-amber-400'
                                : 'text-slate-500'
                            }
                          >
                            {change.action === 'create' ? '+' : change.action === 'destroy' ? '-' : isModified ? '~' : ' '}
                          </span>
                          <span className="text-sky-300">{k}</span>
                          <span className="text-slate-500">=</span>
                          <span className="text-slate-100">
                            {isModified ? `"${prevVal}" -> "${v}"` : `"${v}"`}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'editor' && (
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col h-full min-h-[260px]">
            <div className="px-3 py-1.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-600">
              <span>{tfFileName} — Edit HCL and switch back to Plan Diff to inspect changes</span>
              <span>{parsedResources.length} resource(s)</span>
            </div>
            <textarea
              value={currentHcl}
              onChange={(e) => onUpdateFileContent?.(tfFileName, e.target.value)}
              spellCheck={false}
              className="flex-1 w-full p-3 font-mono text-xs text-slate-900 bg-white focus:outline-hidden resize-none leading-relaxed"
            />
          </div>
        )}

        {activeTab === 'state' && (
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
            <div className="px-3 py-2 bg-slate-50 border-b border-slate-200 text-xs font-mono font-bold text-slate-700 flex items-center justify-between">
              <span>terraform.tfstate (Serial: {Object.keys(appliedState).length + 1})</span>
              <span className="text-emerald-700 font-semibold">State Locked & Synchronized</span>
            </div>
            {Object.keys(appliedState).length === 0 ? (
              <div className="p-6 text-center text-xs text-slate-500 font-mono">
                No managed resources in terraform.tfstate. Click "apply" to provision resources.
              </div>
            ) : (
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Resource Address</th>
                    <th className="px-3 py-2">Provider Type</th>
                    <th className="px-3 py-2">Tracked Attributes</th>
                    <th className="px-3 py-2">State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {Object.values(appliedState).map((r) => (
                    <tr key={r.address}>
                      <td className="px-3 py-2.5 font-mono font-bold text-[#5c2d91]">{r.address}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-700">{r.type}</td>
                      <td className="px-3 py-2.5 font-mono text-[11px] text-slate-600">
                        {Object.entries(r.attributes)
                          .slice(0, 3)
                          .map(([k, v]) => `${k}=${v}`)
                          .join(', ')}
                      </td>
                      <td className="px-3 py-2.5 font-mono text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Applied
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>

      {/* Terraform CLI Terminal */}
      <div className="h-36 bg-[#0d1117] border-t border-slate-800 flex flex-col shrink-0">
        <div className="px-3 py-1 bg-[#1c1427] border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-purple-200">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>Terraform CLI (/workspace/{tfFileName})</span>
          </div>
          <span className="text-purple-300/70">terraform v1.8.4</span>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-1.5 font-mono text-[11px] text-slate-300 space-y-1">
          {cliLogs.map((line, i) => (
            <div key={i} className={line.startsWith('$') ? 'text-purple-300 font-semibold' : 'text-slate-300 whitespace-pre-wrap break-all'}>
              {line}
            </div>
          ))}
        </div>
        <form onSubmit={handleCliSubmit} className="px-3 py-1.5 border-t border-slate-800 flex items-center gap-2">
          <span className="font-mono text-xs text-purple-400 font-bold">$</span>
          <input
            value={cliInput}
            onChange={(e) => setCliInput(e.target.value)}
            placeholder="terraform plan"
            className="flex-1 bg-transparent font-mono text-xs text-white placeholder-slate-500 focus:outline-hidden"
          />
        </form>
      </div>
    </div>
  );
};
