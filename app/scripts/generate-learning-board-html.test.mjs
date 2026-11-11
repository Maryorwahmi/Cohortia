import assert from "node:assert/strict";
import test from "node:test";
import {normalizeChapterSource} from "./generate-learning-board-html.js";

test("compacts whitespace-padded Markdown table rows without changing other source lines", () => {
  const paddedTableRow = `| Policy |${" ".repeat(50000)}A useful description |`;
  const source = `Intro  keeps its spacing.\n${paddedTableRow}\n|---|---|`;
  const normalized = normalizeChapterSource(source);

  assert.equal(normalized, "Intro  keeps its spacing.\n| Policy | A useful description |\n|---|---|");
  assert.ok(normalized.length < 100);
});
