import {
  Monitor,
  Server,
  Database,
  ShieldCheck,
  Shield,
  Network,
  Users,
  Building2,
  Lock,
  Key,
  FileCode,
  Cpu,
  Layers,
  Globe,
  Boxes,
  Workflow,
  GitBranch,
  Cloud,
  HardDrive,
  Lightbulb,
  Zap,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Database,
  ShieldCheck,
  Shield,
  Network,
  Users,
  Building2,
  Lock,
  Key,
  FileCode,
  Cpu,
  Layers,
  Globe,
  Boxes,
  Workflow,
  GitBranch,
  Cloud,
  HardDrive,
  Lightbulb,
  Zap,
  BookOpen,
  CheckCircle2,
};

const INFERENCE_RULES: Array<[RegExp, LucideIcon]> = [
  [/ordering|orderer/i, Layers],
  [/msp|identity|auth|certificate/i, ShieldCheck],
  [/client|app|browser/i, Monitor],
  [/peer|server|node|host/i, Server],
  [/ledger|db|state|couch/i, Database],
  [/org|consortium|company|enterprise/i, Building2],
  [/user|member|admin/i, Users],
  [/contract|chaincode|code/i, FileCode],
  [/network|channel/i, Network],
  [/key|cert/i, Key],
];

export function inferIcon(label?: string): LucideIcon {
  if (label) {
    for (const [pattern, icon] of INFERENCE_RULES) {
      if (pattern.test(label)) return icon;
    }
  }
  return Boxes;
}

export function resolveIcon(iconName?: string, label?: string): LucideIcon {
  if (iconName && ICON_MAP[iconName]) return ICON_MAP[iconName];
  return inferIcon(label);
}
