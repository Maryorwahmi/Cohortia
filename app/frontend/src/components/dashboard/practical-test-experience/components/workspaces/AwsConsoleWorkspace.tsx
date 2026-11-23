import React, { useState } from 'react';
import { WorkspaceProps } from './AlibabaConsoleWorkspace';
import {
  Cloud,
  KeyRound,
  Users,
  ShieldCheck,
  Network,
  GitBranch,
  Route,
  Plus,
  Terminal,
  CheckCircle2,
  Lock,
} from 'lucide-react';

type AwsTab = 'iam_sso' | 'permission_sets' | 'tgw' | 'tgw_routes';

export const AwsConsoleWorkspace: React.FC<WorkspaceProps> = ({
  manifest,
  onCommandRun,
  onSimulationCompleted,
  lastSavedTimestamp = 'just now',
}) => {
  const cloudWorkspace = manifest.workspace?.cloud;
  const requestedSurface = cloudWorkspace?.surface;
  const initialTab: AwsTab = ['iam_sso', 'permission_sets', 'tgw', 'tgw_routes'].includes(requestedSurface || '')
    ? requestedSurface as AwsTab
    : 'iam_sso';
  const [region, setRegion] = useState(cloudWorkspace?.region || 'us-east-1');
  const [activeTab, setActiveTab] = useState<AwsTab>(initialTab);

  // IAM Identity Center State
  const [ssoInstance] = useState({
    arn: 'arn:aws:sso:::instance/ssoins-7291a0f82b',
    identitySource: 'External IdP (Okta SAML 2.0 + SCIM)',
    mfaMode: 'Every sign-in (FIDO2 / TOTP Required)',
    portalUrl: 'https://d-9067f128a4.awsapps.com/start',
  });

  const [permissionSets, setPermissionSets] = useState([
    {
      name: 'CloudPlatformAdmin',
      arn: 'arn:aws:sso:::permissionSet/ssoins-7291a0f82b/ps-8812f',
      sessionDuration: 'PT4H',
      managedPolicy: 'AdministratorAccess',
      mfaRequired: true,
    },
    {
      name: 'SecurityReadOnlyAudit',
      arn: 'arn:aws:sso:::permissionSet/ssoins-7291a0f82b/ps-3190a',
      sessionDuration: 'PT2H',
      managedPolicy: 'SecurityAudit',
      mfaRequired: true,
    },
  ]);

  const [assignments, setAssignments] = useState([
    {
      id: 'asg-01',
      accountId: '111222333444',
      accountName: 'Production-Core',
      principal: 'Group: CloudPlatformEngineers',
      permissionSet: 'CloudPlatformAdmin',
      status: 'Provisioned',
    },
    {
      id: 'asg-02',
      accountId: '555666777888',
      accountName: 'SharedServices-Hub',
      principal: 'Group: CloudPlatformEngineers',
      permissionSet: 'CloudPlatformAdmin',
      status: 'Provisioned',
    },
  ]);

  // Transit Gateway & VPC Routing State
  const [tgwAttachments, setTgwAttachments] = useState([
    { id: 'tgw-attach-0a11b', name: 'tgw-att-shared-services', vpcId: 'vpc-011a (10.0.0.0/16)', subnets: 'subnet-a1, subnet-a2', state: 'available' },
    { id: 'tgw-attach-0b22c', name: 'tgw-att-production', vpcId: 'vpc-022b (10.1.0.0/16)', subnets: 'subnet-b1, subnet-b2', state: 'available' },
    { id: 'tgw-attach-0c33d', name: 'tgw-att-inspection', vpcId: 'vpc-033c (10.99.0.0/16)', subnets: 'subnet-c1, subnet-c2', state: 'available' },
  ]);

  const [tgwRoutes, setTgwRoutes] = useState([
    { tableId: 'tgw-rtb-spoke-isolated', cidr: '10.0.0.0/16', attachment: 'tgw-att-shared-services', type: 'static', state: 'active' },
    { tableId: 'tgw-rtb-spoke-isolated', cidr: '0.0.0.0/0', attachment: 'tgw-att-inspection', type: 'static', state: 'active' },
  ]);

  const [modalMode, setModalMode] = useState<'permission_set' | 'assignment' | 'tgw_attach' | 'tgw_route' | null>(null);
  const [fieldA, setFieldA] = useState('');
  const [fieldB, setFieldB] = useState('');
  const [fieldC, setFieldC] = useState('');

  const [cliInput, setCliInput] = useState('');
  const [cliLogs, setCliLogs] = useState<string[]>([
    `AWS CloudShell • aws-cli/2.15.30 • Region: ${region} • Account: 111222333444`,
    'Type "help" or run: aws sso-admin list-permission-sets | aws ec2 describe-transit-gateways | aws ec2 search-transit-gateway-routes',
  ]);

  const emitAction = (cmd: string, out: string) => {
    setCliLogs((p) => [...p, `$ ${cmd}`, out]);
    onCommandRun?.(cmd, out);
    onSimulationCompleted?.(true);
  };

  const openModal = (mode: typeof modalMode) => {
    if (mode === 'permission_set') {
      setFieldA('NetworkOperationsAdmin');
      setFieldB('PT4H');
      setFieldC('NetworkAdministrator');
    } else if (mode === 'assignment') {
      setFieldA('999888777666 (Security-Audit)');
      setFieldB('Group: SecOpsAuditors');
      setFieldC(permissionSets[1]?.name || 'SecurityReadOnlyAudit');
    } else if (mode === 'tgw_attach') {
      setFieldA('tgw-att-analytics-spoke');
      setFieldB('vpc-044d (10.2.0.0/16)');
      setFieldC('subnet-d1, subnet-d2');
    } else if (mode === 'tgw_route') {
      setFieldA('10.2.0.0/16');
      setFieldB('tgw-att-inspection');
      setFieldC('tgw-rtb-spoke-isolated');
    }
    setModalMode(mode);
  };

  const handleSubmitModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalMode === 'permission_set') {
      const arn = `arn:aws:sso:::permissionSet/ssoins-7291a0f82b/ps-${Math.random().toString(16).slice(2, 7)}`;
      setPermissionSets((p) => [
        ...p,
        { name: fieldA, arn, sessionDuration: fieldB || 'PT4H', managedPolicy: fieldC || 'ReadOnlyAccess', mfaRequired: true },
      ]);
      emitAction(
        `aws sso-admin create-permission-set --name ${fieldA} --session-duration ${fieldB}`,
        `{"PermissionSet": {"Name": "${fieldA}", "PermissionSetArn": "${arn}"}}`
      );
    } else if (modalMode === 'assignment') {
      const id = `asg-${Math.floor(10 + Math.random() * 89)}`;
      const [accId, accLabel] = fieldA.split(' ');
      setAssignments((p) => [
        ...p,
        { id, accountId: accId, accountName: (accLabel || 'Member').replace(/[()]/g, ''), principal: fieldB, permissionSet: fieldC, status: 'Provisioned' },
      ]);
      emitAction(
        `aws sso-admin create-account-assignment --target-id ${accId} --principal-type GROUP`,
        `{"AccountAssignmentCreationStatus": {"Status": "SUCCEEDED"}}`
      );
    } else if (modalMode === 'tgw_attach') {
      const id = `tgw-attach-${Math.random().toString(16).slice(2, 7)}`;
      setTgwAttachments((p) => [
        ...p,
        { id, name: fieldA, vpcId: fieldB, subnets: fieldC, state: 'available' },
      ]);
      emitAction(
        `aws ec2 create-transit-gateway-vpc-attachment --transit-gateway-id tgw-091f82e71c --vpc-id ${fieldB.split(' ')[0]}`,
        `{"TransitGatewayVpcAttachment": {"TransitGatewayAttachmentId": "${id}", "State": "available"}}`
      );
    } else if (modalMode === 'tgw_route') {
      setTgwRoutes((p) => [
        ...p,
        { tableId: fieldC || 'tgw-rtb-spoke-isolated', cidr: fieldA, attachment: fieldB, type: 'static', state: 'active' },
      ]);
      emitAction(
        `aws ec2 create-transit-gateway-route --destination-cidr-block ${fieldA} --transit-gateway-route-table-id ${fieldC}`,
        `{"Route": {"DestinationCidrBlock": "${fieldA}", "State": "active"}}`
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
      emitAction(cmd, 'AWS CLI commands: aws sso-admin list-permission-sets | aws ec2 describe-transit-gateways | aws ec2 search-transit-gateway-routes | aws sts get-caller-identity');
    } else if (low.includes('list-permission-sets')) {
      emitAction(cmd, JSON.stringify({ PermissionSets: permissionSets.map((p) => p.arn) }));
    } else if (low.includes('describe-transit-gateways')) {
      emitAction(cmd, JSON.stringify({ TransitGatewayId: 'tgw-091f82e71c', AmazonSideAsn: 64512, DefaultRouteTableAssociation: 'disable', DefaultRouteTablePropagation: 'disable' }));
    } else if (low.includes('search-transit-gateway-routes')) {
      emitAction(cmd, JSON.stringify({ Routes: tgwRoutes }));
    } else if (low.includes('get-caller-identity')) {
      emitAction(cmd, '{"UserId": "AROA7291A0F82B:architect", "Account": "111222333444", "Arn": "arn:aws:sts::111222333444:assumed-role/AWSReservedSSO_CloudPlatformAdmin"}');
    } else {
      emitAction(cmd, `{"ResponseMetadata": {"HTTPStatusCode": 200}, "Region": "${region}"}`);
    }
  };

  const tabs: Array<{ id: AwsTab; label: string; icon: React.ComponentType<{ className?: string }> }> = [
    { id: 'iam_sso', label: 'IAM Identity Center', icon: KeyRound },
    { id: 'permission_sets', label: 'Permission Sets & Accounts', icon: ShieldCheck },
    { id: 'tgw', label: 'Transit Gateway Hub', icon: Network },
    { id: 'tgw_routes', label: 'TGW Route Tables', icon: Route },
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden min-h-0 select-none">
      {/* AWS Management Console Top Bar */}
      <div className="px-4 py-2 bg-[#232f3e] text-white flex items-center justify-between gap-3 shrink-0 border-b border-slate-700">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-6 h-6 rounded bg-[#ff9900] flex items-center justify-center">
              <Cloud className="w-3.5 h-3.5 text-[#232f3e]" />
            </div>
            <span className="font-bold text-xs tracking-tight text-white whitespace-nowrap">
              AWS Management Console
            </span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-xs text-slate-300 font-mono truncate">{manifest.title}</span>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="bg-[#161e28] border border-slate-600 text-xs font-mono text-slate-200 rounded px-2 py-1 focus:outline-hidden cursor-pointer"
          >
            <option value="us-east-1">us-east-1 (N. Virginia)</option>
            <option value="us-west-2">us-west-2 (Oregon)</option>
            <option value="eu-west-1">eu-west-1 (Ireland)</option>
          </select>
          <span className="text-[11px] font-mono text-amber-300 hidden md:inline tabular-nums">
            Mgmt Acct: 1112-2233-3444
          </span>
        </div>
      </div>

      {/* AWS Service Subheader */}
      <div className="px-3 py-1.5 bg-white border-b border-slate-200 flex items-center justify-between gap-2 shrink-0 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1 shrink-0">
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-amber-50 text-amber-900 border border-amber-300'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        <span className="text-[10px] font-mono text-slate-400 shrink-0 hidden lg:inline">
          Synced {lastSavedTimestamp}
        </span>
      </div>

      {/* Console Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {activeTab === 'iam_sso' && (
          <>
            <div className="bg-white border border-slate-200 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Instance ARN</div>
                <div className="font-mono text-slate-900 font-semibold mt-0.5 break-all">{ssoInstance.arn}</div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Identity Source</div>
                <div className="font-semibold text-slate-800 mt-0.5">{ssoInstance.identitySource}</div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">MFA Policy</div>
                <div className="font-semibold text-emerald-700 flex items-center gap-1 mt-0.5">
                  <Lock className="w-3.5 h-3.5" />
                  {ssoInstance.mfaMode}
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">AWS Access Portal URL</div>
                <div className="font-mono text-blue-700 mt-0.5">{ssoInstance.portalUrl}</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 font-mono">
                Active Multi-Account Assignments ({assignments.length})
              </h4>
              <button
                onClick={() => openModal('assignment')}
                className="px-3 py-1.5 rounded-md bg-[#ff9900] hover:bg-[#eb8c00] text-[#232f3e] text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Assign Group to Account</span>
              </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Target AWS Account</th>
                    <th className="px-3 py-2">Principal (Group)</th>
                    <th className="px-3 py-2">Permission Set</th>
                    <th className="px-3 py-2">Provisioning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {assignments.map((a) => (
                    <tr key={a.id} className="hover:bg-slate-50/70">
                      <td className="px-3 py-2.5">
                        <div className="font-semibold text-slate-900">{a.accountName}</div>
                        <div className="font-mono text-[11px] text-slate-500 tabular-nums">{a.accountId}</div>
                      </td>
                      <td className="px-3 py-2.5 font-mono text-slate-700 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        {a.principal}
                      </td>
                      <td className="px-3 py-2.5 font-mono font-semibold text-slate-900">{a.permissionSet}</td>
                      <td className="px-3 py-2.5 font-mono text-emerald-700 font-semibold">{a.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'permission_sets' && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900">IAM Identity Center Permission Sets</h3>
                <p className="text-xs text-slate-500">Define STS session boundaries and AWS managed policy blueprints.</p>
              </div>
              <button
                onClick={() => openModal('permission_set')}
                className="px-3 py-1.5 rounded-md bg-[#ff9900] hover:bg-[#eb8c00] text-[#232f3e] text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Create Permission Set</span>
              </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Permission Set Name</th>
                    <th className="px-3 py-2">Session Duration</th>
                    <th className="px-3 py-2">Managed Policy</th>
                    <th className="px-3 py-2">Hardware MFA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {permissionSets.map((ps) => (
                    <tr key={ps.arn} className="hover:bg-slate-50/70">
                      <td className="px-3 py-2.5">
                        <div className="font-bold text-slate-900">{ps.name}</div>
                        <div className="font-mono text-[11px] text-slate-400 truncate max-w-xs">{ps.arn}</div>
                      </td>
                      <td className="px-3 py-2.5 font-mono tabular-nums font-semibold text-slate-800">{ps.sessionDuration}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-700">{ps.managedPolicy}</td>
                      <td className="px-3 py-2.5 font-mono text-emerald-700 font-semibold">
                        {ps.mfaRequired ? 'Enforced' : 'Optional'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'tgw' && (
          <>
            <div className="bg-white border border-slate-200 rounded-lg p-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Transit Gateway ID</div>
                <div className="font-mono font-bold text-slate-900 mt-0.5">tgw-091f82e71c</div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Amazon Side ASN</div>
                <div className="font-mono tabular-nums font-semibold text-slate-800 mt-0.5">64512</div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Default Assoc / Prop</div>
                <div className="font-mono font-semibold text-emerald-700 mt-0.5">Disabled (Zero-Trust)</div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Attachments</div>
                <div className="font-mono tabular-nums font-bold text-slate-900 mt-0.5">{tgwAttachments.length} Active</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 font-mono flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5" />
                Transit Gateway VPC Attachments
              </h4>
              <button
                onClick={() => openModal('tgw_attach')}
                className="px-3 py-1.5 rounded-md bg-[#ff9900] hover:bg-[#eb8c00] text-[#232f3e] text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Create VPC Attachment</span>
              </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Attachment Name / ID</th>
                    <th className="px-3 py-2">Resource VPC & CIDR</th>
                    <th className="px-3 py-2">AZ Subnets</th>
                    <th className="px-3 py-2">State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {tgwAttachments.map((att) => (
                    <tr key={att.id} className="hover:bg-slate-50/70">
                      <td className="px-3 py-2.5">
                        <div className="font-semibold text-slate-900">{att.name}</div>
                        <div className="font-mono text-[11px] text-slate-500">{att.id}</div>
                      </td>
                      <td className="px-3 py-2.5 font-mono tabular-nums text-slate-800">{att.vpcId}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-600">{att.subnets}</td>
                      <td className="px-3 py-2.5 font-mono text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {att.state}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'tgw_routes' && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Transit Gateway Route Table: tgw-rtb-spoke-isolated</h3>
                <p className="text-xs text-slate-500">Enforce centralized egress inspection by routing 0.0.0.0/0 to the firewall appliance VPC.</p>
              </div>
              <button
                onClick={() => openModal('tgw_route')}
                className="px-3 py-1.5 rounded-md bg-[#ff9900] hover:bg-[#eb8c00] text-[#232f3e] text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Create Static Route</span>
              </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="px-3 py-2">Destination CIDR</th>
                    <th className="px-3 py-2">Target Attachment</th>
                    <th className="px-3 py-2">Route Table</th>
                    <th className="px-3 py-2">Route Type</th>
                    <th className="px-3 py-2">State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {tgwRoutes.map((r, idx) => (
                    <tr key={`${r.cidr}-${idx}`} className="hover:bg-slate-50/70">
                      <td className="px-3 py-2.5 font-mono tabular-nums font-bold text-slate-900">{r.cidr}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-800">{r.attachment}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-500">{r.tableId}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-600">{r.type}</td>
                      <td className="px-3 py-2.5 font-mono text-emerald-700 font-semibold">{r.state}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* Creation Modal */}
      {modalMode && (
        <div className="fixed inset-0 bg-slate-900/40 z-50 flex items-center justify-center p-4">
          <form onSubmit={handleSubmitModal} className="bg-white border border-slate-200 rounded-xl shadow-lg w-full max-w-md p-4 space-y-3">
            <h4 className="text-sm font-bold text-slate-900">
              {modalMode === 'permission_set'
                ? 'Create IAM Identity Center Permission Set'
                : modalMode === 'assignment'
                ? 'Assign Group to AWS Account'
                : modalMode === 'tgw_attach'
                ? 'Create Transit Gateway VPC Attachment'
                : 'Add Transit Gateway Static Route'}
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <label className="block font-mono text-slate-600 mb-1">
                  {modalMode === 'permission_set'
                    ? 'Permission Set Name'
                    : modalMode === 'assignment'
                    ? 'Target AWS Account'
                    : modalMode === 'tgw_attach'
                    ? 'Attachment Name'
                    : 'Destination CIDR Block'}
                </label>
                <input
                  value={fieldA}
                  onChange={(e) => setFieldA(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded font-mono text-slate-900"
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-slate-600 mb-1">
                  {modalMode === 'permission_set'
                    ? 'Session Duration (ISO 8601)'
                    : modalMode === 'assignment'
                    ? 'Principal Group'
                    : modalMode === 'tgw_attach'
                    ? 'Target VPC & CIDR'
                    : 'Target Attachment'}
                </label>
                <input
                  value={fieldB}
                  onChange={(e) => setFieldB(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded font-mono text-slate-900"
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-slate-600 mb-1">
                  {modalMode === 'permission_set'
                    ? 'AWS Managed Policy'
                    : modalMode === 'assignment'
                    ? 'Permission Set'
                    : modalMode === 'tgw_attach'
                    ? 'Subnets (Multi-AZ)'
                    : 'Route Table ID'}
                </label>
                <input
                  value={fieldC}
                  onChange={(e) => setFieldC(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-slate-300 rounded font-mono text-slate-900"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setModalMode(null)}
                className="px-3 py-1.5 rounded border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1.5 rounded bg-[#ff9900] hover:bg-[#eb8c00] text-[#232f3e] text-xs font-bold cursor-pointer"
              >
                Apply Change
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Integrated AWS CloudShell */}
      <div className="h-36 bg-[#0d1117] border-t border-slate-800 flex flex-col shrink-0">
        <div className="px-3 py-1 bg-[#161e28] border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span>AWS CloudShell ({region})</span>
          </div>
          <span className="text-slate-500">aws-cli/2.15</span>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-1.5 font-mono text-[11px] text-slate-300 space-y-1">
          {cliLogs.map((line, i) => (
            <div key={i} className={line.startsWith('$') ? 'text-amber-300 font-semibold' : 'text-slate-300 break-all'}>
              {line}
            </div>
          ))}
        </div>
        <form onSubmit={handleCliSubmit} className="px-3 py-1.5 border-t border-slate-800 flex items-center gap-2">
          <span className="font-mono text-xs text-amber-400 font-bold">$</span>
          <input
            value={cliInput}
            onChange={(e) => setCliInput(e.target.value)}
            placeholder="aws sso-admin list-permission-sets"
            className="flex-1 bg-transparent font-mono text-xs text-white placeholder-slate-500 focus:outline-hidden"
          />
        </form>
      </div>
    </div>
  );
};
