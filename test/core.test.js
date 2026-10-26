const test = require("node:test");
const assert = require("node:assert/strict");
const C = require("../js/core.js");
test("xLength: urls count 23, emoji 2", () => {
  assert.equal(C.xLength("hi https://example.com/a/very/long/path/that/goes/on"), 3 + 23);
  assert.equal(C.xLength("🚀"), 2);
});
test("post for X with hashtags + link", () => {
  const p = C.post({ project: "Prism", day: 3, shipped: "- A\n- B", next: "C", link: "https://x.dev", tags: "buildinpublic, js" }, "x");
  assert.match(p.text, /^Day 3 of building Prism 🚀\n\nShipped today:\n✅ A\n✅ B\n\nNext up: C\n\nhttps:\/\/x\.dev\n\n#buildinpublic #js$/);
  assert.equal(p.thread.length, 1);
});
test("long posts become numbered threads under 280", () => {
  const p = C.post({ project: "P", day: 1, shipped: Array.from({ length: 14 }, (_, i) => `Feature number ${i} with a longer description`).join("\n") }, "x");
  assert.ok(p.thread.length > 1);
  p.thread.forEach((t, i) => { assert.ok(C.xLength(t) <= 280, t); assert.ok(t.endsWith(`${i + 1}/${p.thread.length}`)); });
});
test("discord formatting", () => {
  const p = C.post({ project: "P", day: 2, shipped: "A", link: "https://a.b", tags: "x", tone: "pro" }, "discord");
  assert.match(p.text, /^\*\*P — build log, day 2\*\*/); assert.match(p.text, /<https:\/\/a\.b>/); assert.doesNotMatch(p.text, /#x/);
});
