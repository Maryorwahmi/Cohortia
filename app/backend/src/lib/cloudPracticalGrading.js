function matches(value, pattern) {
  if (typeof pattern !== 'string' || !pattern.trim()) return false;
  try {
    return new RegExp(pattern, 'i').test(value);
  } catch {
    return value.toLowerCase().includes(pattern.toLowerCase());
  }
}

export function evaluateCloudPractical({ cloud, tasks = [], evidence = [] }) {
  const checks = Array.isArray(cloud?.verificationChecks) ? cloud.verificationChecks : [];
  const allowedIds = new Set(
    (Array.isArray(cloud?.allowedActions) ? cloud.allowedActions : [])
      .map((action) => action?.id || action?.action)
      .filter(Boolean),
  );
  const safeEvidence = evidence.map((item) => ({
    command: typeof item?.command === 'string' ? item.command : '',
    output: typeof item?.output === 'string' ? item.output : '',
  }));
  const results = checks.map((check, index) => {
    const id = typeof check?.id === 'string' && check.id ? check.id : `cloud-check-${index + 1}`;
    const action = typeof check?.action === 'string' ? check.action : '';
    const matched = Boolean(action && allowedIds.has(action)) && safeEvidence.find((item) => (
      matches(item.command, check?.commandPattern)
      && (check?.outputPattern === undefined || matches(item.output, check.outputPattern))
    ));
    const taskId = typeof check?.taskId === 'string' && check.taskId
      ? check.taskId
      : tasks.find((task) => Array.isArray(task?.checkIds) && task.checkIds.includes(id))?.id;
    return {
      checkId: id,
      taskId,
      passed: Boolean(matched),
      message: matched
        ? `${check?.label || id} verified from workspace evidence.`
        : `${check?.label || id} has not been demonstrated with an allowed action and matching result.`,
    };
  });
  const taskResults = tasks.map((task) => {
    const taskChecks = results.filter((check) => check.taskId === task.id);
    return { taskId: task.id, passed: taskChecks.length > 0 && taskChecks.every((check) => check.passed) };
  });
  const passedChecks = results.filter((check) => check.passed).length;
  return {
    passed: results.length > 0 && passedChecks === results.length,
    score: results.length ? Math.round((passedChecks / results.length) * 100) : 0,
    checks: results,
    taskResults,
  };
}
