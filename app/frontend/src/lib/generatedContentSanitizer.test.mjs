import assert from "node:assert/strict";
import test from "node:test";
import { JSDOM } from "jsdom";

const dom = new JSDOM("", { url: "https://cohortia.test" });
globalThis.window = dom.window;
globalThis.document = dom.window.document;
globalThis.DOMParser = dom.window.DOMParser;
globalThis.XMLSerializer = dom.window.XMLSerializer;

const {
  GENERATED_CONTENT_CSP,
  sanitizeGeneratedHtml,
  sanitizeGeneratedSvg,
} = await import("./generatedContentSanitizer.ts");

test("generated HTML removes scripts, styles, handlers, and network URLs", () => {
  const sanitized = sanitizeGeneratedHtml(`<!doctype html>
    <html><head><style>body { background: url(https://attacker.test/x) }</style>
    <script>window.compromised = true</script></head><body>
      <main><p class="text-sm" onclick="alert(1)">Safe lesson text</p>
      <img src="https://attacker.test/pixel"><a href="javascript:alert(1)">Read more</a>
      <svg onload="alert(1)"><foreignObject><iframe src="https://attacker.test"></iframe></foreignObject>
      <path d="M0 0" fill="url(https://attacker.test/x)" stroke="#ff0000"/></svg>
      <div style="background-image:url(https://attacker.test/x)">More safe text</div></main>
    </body></html>`);

  assert.match(sanitized, /Safe lesson text/);
  assert.match(sanitized, /More safe text/);
  assert.match(sanitized, /class="text-sm"/);
  assert.doesNotMatch(sanitized, /<script|<style|<iframe|<foreignObject|<img|onclick|onload|javascript:|attacker\.test|style=/i);
  assert.match(sanitized, /stroke="#ff0000"/);
  assert.doesNotMatch(sanitized, /fill="url/i);
  assert.match(GENERATED_CONTENT_CSP, /script-src 'none'/);
  assert.match(GENERATED_CONTENT_CSP, /connect-src 'none'/);
});

test("generated SVG allows safe shapes but strips active or remote content", () => {
  const sanitized = sanitizeGeneratedSvg(`<svg viewBox="0 0 10 10" onload="alert(1)">
    <script>alert(1)</script><foreignObject><img src="https://attacker.test/pixel"></foreignObject>
    <path d="M0 0" fill="url(https://attacker.test/x)" stroke="#00ff00"/>
    <circle cx="5" cy="5" r="4" fill="#123"/>
  </svg>`);

  assert.match(sanitized, /<svg/);
  assert.match(sanitized, /<path/);
  assert.match(sanitized, /<circle/);
  assert.match(sanitized, /stroke="#00ff00"/);
  assert.match(sanitized, /width="100%"/);
  assert.match(sanitized, /height="100%"/);
  assert.doesNotMatch(sanitized, /<script|foreignObject|onload|href=|attacker\.test|url\(/i);
});

test("generated markup over the size limit is rejected", () => {
  assert.equal(sanitizeGeneratedHtml(`<p>${"x".repeat(250_001)}</p>`), "");
  assert.equal(sanitizeGeneratedSvg(`<svg>${"x".repeat(250_001)}</svg>`), "");
});
