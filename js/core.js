/* Prism Devlog · core logic */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.Core = api;
})(typeof self !== "undefined" ? self : this, function () {
  const items = (s) => String(s || "").split("\n").map((l) => l.replace(/^\s*[-*•]\s*/, "").trim()).filter(Boolean);
  // X counts every URL as 23 chars; emoji/most non-BMP chars as 2
  function xLength(text) {
    const t = String(text).replace(/https?:\/\/\S+/g, "x".repeat(23));
    let n = 0; for (const ch of t) n += ch.codePointAt(0) > 0xffff || /[\u1100-\u115f\u2e80-\ua4cf\uac00-\ud7a3\uf900-\ufaff\uff00-\uff60]/.test(ch) ? 2 : 1;
    return n;
  }
  function splitThread(text, limit = 280) {
    const paras = String(text).split(/\n{2,}/).map((p) => p.trim()).filter(Boolean), out = [];
    let cur = "";
    const push = () => { if (cur) out.push(cur); cur = ""; };
    for (const p of paras) {
      const cand = cur ? `${cur}\n\n${p}` : p;
      if (xLength(cand) <= limit - 6) { cur = cand; continue; }
      push();
      if (xLength(p) <= limit - 6) { cur = p; continue; }
      for (const w of p.split(/(?<=[.!?])\s+|\s+(?=\S)/)) { const c2 = cur ? `${cur} ${w}` : w; if (xLength(c2) <= limit - 6) cur = c2; else { push(); cur = w; } }
    }
    push();
    return out.length > 1 ? out.map((t, i) => `${t}\n\n${i + 1}/${out.length}`) : out;
  }
  const TONES = {
    hype: { open: (d, p) => `Day ${d} of building ${p} 🚀`, shipped: "Shipped today:", learned: "Lesson:", next: "Next up:", close: "Let's go." },
    chill: { open: (d, p) => `${p} devlog · day ${d}`, shipped: "What I got done:", learned: "Learned:", next: "Tomorrow:", close: "Slow progress is still progress." },
    pro: { open: (d, p) => `${p} — build log, day ${d}`, shipped: "Progress:", learned: "Takeaway:", next: "Next:", close: "Feedback welcome." },
  };
  function post(i, platform = "x") {
    const tone = TONES[i.tone] || TONES.hype, project = i.project?.trim() || "my project";
    const shipped = items(i.shipped), learned = items(i.learned), next = items(i.next);
    const bullet = platform === "discord" ? "•" : platform === "linkedin" ? "▸" : "✅";
    const parts = [tone.open(i.day || 1, project)];
    if (shipped.length) parts.push(`${tone.shipped}\n${shipped.map((s) => `${bullet} ${s}`).join("\n")}`);
    if (learned.length) parts.push(`${tone.learned} ${learned.join(" · ")}`);
    if (i.stats?.trim()) parts.push(`📊 ${i.stats.trim()}`);
    if (next.length) parts.push(`${tone.next} ${next.join(", ")}`);
    if (i.link?.trim()) parts.push(platform === "discord" ? `<${i.link.trim()}>` : i.link.trim());
    const tags = (i.tags || "").split(/[\s,]+/).filter(Boolean).map((t) => (t.startsWith("#") ? t : `#${t}`));
    if (platform === "linkedin") parts.push(tone.close);
    if (tags.length && platform !== "discord") parts.push(tags.join(" "));
    let text = parts.join("\n\n");
    if (platform === "discord") text = `**${parts[0]}**\n\n${parts.slice(1).join("\n\n")}`;
    return { text, thread: platform === "x" && xLength(text) > 280 ? splitThread(text) : [text], length: platform === "x" ? xLength(text) : text.length };
  }
  const LIMITS = { x: 280, linkedin: 3000, discord: 2000, bluesky: 300 };
  return { post, splitThread, xLength, items, TONES, LIMITS };
});
