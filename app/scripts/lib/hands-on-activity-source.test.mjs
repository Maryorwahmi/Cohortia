import assert from "node:assert/strict";
import { test } from "node:test";
import { classifyActivity } from "./hands-on-activity-source.js";

test("classifies cloud cost comparison research as Research & Analysis", () => {
  const activity = `Activity: Cloud vs. On-Premises Cost Comparison Scenario
Research estimated on-premises CapEx and OpEx, use the Alibaba Cloud pricing calculator to estimate service costs, and compare the three-year totals.
Starter Template:
\`\`\`
# Cloud vs. On-Premises Cost Comparison
- Servers (2x): $_______
\`\`\``;

  assert.equal(classifyActivity(activity, "").category, "Research & Analysis");
});

test("classifies cloud resource operations as Cloud Console Lab", () => {
  const activity = "Use the AWS console to configure an IAM role and launch an ECS instance.";

  assert.equal(classifyActivity(activity, "").category, "Cloud Console Lab");
});

test("keeps explicit coding activities in Terminal Coding Lab", () => {
  const activity = "Write a Python program that reads a CSV file and prints the total.";

  assert.equal(classifyActivity(activity, "").category, "Terminal Coding Lab");
});

test("classifies an explicitly labeled SQL exercise as Terminal Coding Lab", () => {
  const activity = "Run this query against the sample table:\n```sql\nSELECT id FROM courses;\n```";

  assert.equal(classifyActivity(activity, "").category, "Terminal Coding Lab");
});
