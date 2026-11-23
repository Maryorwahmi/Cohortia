import React from 'react';
import { PracticalManifest } from '../types/practical';
import { AlibabaConsoleWorkspace } from './workspaces/AlibabaConsoleWorkspace';
import { AwsConsoleWorkspace } from './workspaces/AwsConsoleWorkspace';
import { AzurePortalWorkspace } from './workspaces/AzurePortalWorkspace';
import { GcpConsoleWorkspace } from './workspaces/GcpConsoleWorkspace';
import { TerraformPlanWorkspace } from './workspaces/TerraformPlanWorkspace';
import { KubernetesClusterWorkspace } from './workspaces/KubernetesClusterWorkspace';

interface CloudConsoleWorkspaceProps {
  manifest: PracticalManifest;
  activeFileName?: string;
  filesContent?: Record<string, string>;
  onUpdateFileContent?: (fileName: string, content: string) => void;
  onCommandRun?: (command: string, output: string) => void;
  onSimulationCompleted?: (passed: boolean) => void;
  lastSavedTimestamp?: string;
}

export const CloudConsoleWorkspace: React.FC<CloudConsoleWorkspaceProps> = (props) => {
  const { manifest } = props;
  const profile = manifest.workspace?.cloud?.profile;

  switch (profile) {
    case 'azure_portal': return <AzurePortalWorkspace {...props} />;
    case 'aws_console': return <AwsConsoleWorkspace {...props} />;
    case 'gcp_console': return <GcpConsoleWorkspace {...props} />;
    case 'alibaba_console': return <AlibabaConsoleWorkspace {...props} />;
    case 'terraform_plan': return <TerraformPlanWorkspace {...props} />;
    case 'kubernetes_cluster': return <KubernetesClusterWorkspace {...props} />;
    default:
      return (
        <div className="flex h-full items-center justify-center bg-slate-50 p-6 text-center">
          <div className="max-w-lg rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">
            This cloud practical is missing a supported workspace profile. Regenerate the practical before starting it.
          </div>
        </div>
      );
  }
};
