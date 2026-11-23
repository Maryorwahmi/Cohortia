/**
 * Explicit cloud workspace profiles shared by practical generation validation.
 *
 * A cloud practical must name one of these profiles.  Titles and provider
 * strings are descriptive metadata only; they are never used to select a UI.
 */

export const CLOUD_WORKSPACE_PROFILES = Object.freeze({
  azure_portal: Object.freeze({
    provider: "azure",
    component: "AzurePortalWorkspace",
    surfaces: Object.freeze(["global_infrastructure", "resource_groups", "vnets", "vms", "storage", "rbac"]),
    actions: Object.freeze([
      "region.inspect",
      "availability_zone.inspect",
      "regional_pair.inspect",
      "architecture.decision.record",
      "resource_group.create",
      "resource_group.inspect",
      "storage_account.create",
      "network_security_rule.create",
      "vm.power",
      "resource.delete",
      "command.verify",
    ]),
  }),
  aws_console: Object.freeze({
    provider: "aws",
    component: "AwsConsoleWorkspace",
    surfaces: Object.freeze(["iam_sso", "permission_sets", "tgw", "tgw_routes"]),
    actions: Object.freeze([
      "iam.permission_set.create",
      "iam.assignment.create",
      "transit_gateway.attachment.create",
      "transit_gateway.route.create",
      "command.verify",
    ]),
  }),
  gcp_console: Object.freeze({
    provider: "gcp",
    component: "GcpConsoleWorkspace",
    surfaces: Object.freeze(["cloud_run", "vpc", "cloud_sql", "storage", "iam"]),
    actions: Object.freeze([
      "cloud_run.traffic.update",
      "storage.bucket.create",
      "iam.binding.create",
      "command.verify",
    ]),
  }),
  alibaba_console: Object.freeze({
    provider: "alibaba",
    component: "AlibabaConsoleWorkspace",
    surfaces: Object.freeze(["vpc", "vswitch", "eip", "disk", "sg", "monitor"]),
    actions: Object.freeze([
      "vpc.create",
      "vswitch.create",
      "eip.allocate",
      "disk.create",
      "security_group_rule.create",
      "alarm.create",
      "command.verify",
    ]),
  }),
  terraform_plan: Object.freeze({
    provider: "terraform",
    component: "TerraformPlanWorkspace",
    surfaces: Object.freeze(["plan", "editor", "state"]),
    actions: Object.freeze([
      "terraform.init",
      "terraform.validate",
      "terraform.plan",
      "terraform.apply",
      "terraform.destroy",
      "terraform.state.inspect",
    ]),
  }),
  kubernetes_cluster: Object.freeze({
    provider: "kubernetes",
    component: "KubernetesClusterWorkspace",
    surfaces: Object.freeze(["deployments", "pods", "services", "yaml"]),
    actions: Object.freeze([
      "deployment.scale",
      "deployment.restart",
      "deployment.apply",
      "pod.logs.inspect",
      "service.inspect",
    ]),
  }),
});

export const CLOUD_PROFILE_IDS = Object.freeze(Object.keys(CLOUD_WORKSPACE_PROFILES));

function asTrimmedString(value) {
  return typeof value === "string" ? value.trim() : "";
}

export function cloudProfileFor(profile) {
  const id = asTrimmedString(profile);
  return id && CLOUD_WORKSPACE_PROFILES[id] ? CLOUD_WORKSPACE_PROFILES[id] : null;
}

export function validateCloudWorkspace(cloud) {
  const errors = [];
  const profileId = asTrimmedString(cloud?.profile);
  const profile = cloudProfileFor(profileId);

  if (!profile) {
    errors.push(`cloud workspace needs a valid profile (${CLOUD_PROFILE_IDS.join(", ")})`);
    return errors;
  }

  const provider = asTrimmedString(cloud?.provider).toLowerCase();
  if (provider !== profile.provider) {
    errors.push(`cloud profile ${profileId} requires provider ${profile.provider}`);
  }
  if (!asTrimmedString(cloud?.region)) errors.push("cloud workspace needs region");
  if (!asTrimmedString(cloud?.surface) || !profile.surfaces.includes(asTrimmedString(cloud?.surface))) {
    errors.push(`cloud profile ${profileId} needs a supported surface (${profile.surfaces.join(", ")})`);
  }

  for (const field of ["initialResources", "allowedActions", "forbiddenActions", "commandTemplates", "expectedState", "verificationChecks"]) {
    if (!Array.isArray(cloud?.[field])) errors.push(`cloud workspace needs ${field}`);
  }

  const allowedActions = Array.isArray(cloud?.allowedActions) ? cloud.allowedActions : [];
  const allowedIds = new Set();
  allowedActions.forEach((action, index) => {
    const id = asTrimmedString(action?.id || action?.action);
    if (!id) {
      errors.push(`cloud.allowedActions[${index}] needs id`);
      return;
    }
    if (allowedIds.has(id)) errors.push(`cloud.allowedActions contains duplicate action ${id}`);
    allowedIds.add(id);
    if (!profile.actions.includes(id)) errors.push(`cloud action ${id} is not supported by profile ${profileId}`);
  });

  const checks = Array.isArray(cloud?.verificationChecks) ? cloud.verificationChecks : [];
  const checkIds = new Set();
  checks.forEach((check, index) => {
    const id = asTrimmedString(check?.id);
    const action = asTrimmedString(check?.action);
    const commandPattern = asTrimmedString(check?.commandPattern);
    if (!id) errors.push(`cloud.verificationChecks[${index}] needs id`);
    if (id && checkIds.has(id)) errors.push(`cloud.verificationChecks contains duplicate id ${id}`);
    if (id) checkIds.add(id);
    if (!action) errors.push(`cloud.verificationChecks[${index}] needs action`);
    if (action && !allowedIds.has(action)) errors.push(`cloud.verificationChecks[${index}] references action ${action} that is not allowed`);
    if (!commandPattern) errors.push(`cloud.verificationChecks[${index}] needs commandPattern`);
  });

  const expectedState = Array.isArray(cloud?.expectedState) ? cloud.expectedState : [];
  if (!expectedState.length) errors.push("cloud.expectedState must contain at least one expected state item");
  if (!checks.length) errors.push("cloud.verificationChecks must contain at least one real verifier check");
  if (!allowedActions.length) errors.push("cloud.allowedActions must contain at least one supported action");

  return errors;
}
