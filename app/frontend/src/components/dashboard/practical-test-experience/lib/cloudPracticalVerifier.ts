import type { PracticalManifest } from '../types/practical';

export interface CloudCommandEvidence {
  command: string;
  output: string;
}

export interface CloudCheckResult {
  checkId: string;
  taskId?: string;
  passed: boolean;
  message: string;
}

export interface CloudVerificationResult {
  passed: boolean;
  score: number;
  checks: CloudCheckResult[];
  taskResults: Array<{ taskId: string; passed: boolean }>;
}

function matches(value: string, pattern: unknown): boolean {
  if (typeof pattern !== 'string' || !pattern.trim()) return false;
  try {
    return new RegExp(pattern, 'i').test(value);
  } catch {
    return value.toLowerCase().includes(pattern.toLowerCase());
  }
}

function checkTaskId(manifest: PracticalManifest, check: Record<string, unknown>): string | undefined {
  if (typeof check.taskId === 'string' && check.taskId) return check.taskId;
  const checkId = typeof check.id === 'string' ? check.id : '';
  return manifest.tasks.find((task) => (
    Array.isArray((task as PracticalTaskWithChecks).checkIds)
      && (task as PracticalTaskWithChecks).checkIds?.includes(checkId)
  ))?.id;
}

type PracticalTaskWithChecks = PracticalManifest['tasks'][number] & { checkIds?: string[] };

export function verifyCloudPractical(
  manifest: PracticalManifest,
  evidence: CloudCommandEvidence[],
): CloudVerificationResult {
  const cloud = manifest.workspace?.cloud;
  const checks = Array.isArray(cloud?.verificationChecks) ? cloud.verificationChecks : [];
  const results = checks.map((rawCheck, index) => {
    const check = rawCheck as Record<string, unknown>;
    const commandPattern = check.commandPattern;
    const outputPattern = check.outputPattern;
    const matchedEvidence = evidence.find((item) => (
      matches(item.command, commandPattern)
      && (outputPattern === undefined || matches(item.output, outputPattern))
    ));
    const checkId = typeof check.id === 'string' && check.id ? check.id : `cloud-check-${index + 1}`;
    const taskId = checkTaskId(manifest, check);
    return {
      checkId,
      taskId,
      passed: Boolean(matchedEvidence),
      message: matchedEvidence
        ? `${typeof check.label === 'string' ? check.label : checkId} verified from the workspace evidence.`
        : `${typeof check.label === 'string' ? check.label : checkId} has not been demonstrated yet. Use the required workspace action and verify its result.`,
    };
  });

  const taskResults = manifest.tasks.map((task) => {
    const taskChecks = results.filter((check) => check.taskId === task.id);
    return {
      taskId: task.id,
      passed: taskChecks.length > 0 && taskChecks.every((check) => check.passed),
    };
  });
  const passedChecks = results.filter((check) => check.passed).length;

  return {
    passed: results.length > 0 && passedChecks === results.length,
    score: results.length ? Math.round((passedChecks / results.length) * 100) : 0,
    checks: results,
    taskResults,
  };
}
