(() => {
  const { $, $$, copy, store, debounce, tabs, esc } = Prism;
  const EX = { project: "Prism Protocol", day: 12, shipped: "50 open-source dev tools, one repo each\nGitHub Pages demos for every tool\nCI on Node 20 + 22", learned: "Shipping small tools daily beats one giant launch", stats: "25 repos live · 140 tests passing", next: "CLI tools, profile README refresh", link: "https://github.com/krishyaa06", tags: "buildinpublic, vibecoding", tone: "hype" };
  const F = ["project", "day", "shipped", "learned", "stats", "next", "link", "tags", "tone"];
  let I = { ...EX, ...store.get("dl:in", {}) }, plat = "x", cur;
  function render() {
    store.set("dl:in", I);
    cur = Core.post(I, plat); const lim = Core.LIMITS[plat];
    $("#posts").innerHTML = cur.thread.map((t, i) => { const n = plat === "x" ? Core.xLength(t) : t.length; return `<div class="tw"><div class="av">${esc((I.project || "P")[0])}</div><div class="body"><div class="who"><b>${esc(I.project || "You")}</b> <span>@krishyaa06${cur.thread.length > 1 ? ` · ${i + 1}/${cur.thread.length}` : ""}</span></div><div class="txt">${esc(t)}</div><div class="tfoot"><span class="${n > lim ? "bad" : ""}">${n}/${lim}</span><button data-i="${i}">Copy</button></div></div></div>`; }).join("");
    $$("#posts [data-i]").forEach((b) => (b.onclick = () => copy(cur.thread[+b.dataset.i])));
    $("#intent").hidden = plat !== "x"; $("#intent").href = `https://x.com/intent/post?text=${encodeURIComponent(cur.thread[0])}`;
  }
  F.forEach((f) => { $("#" + f).value = I[f] ?? ""; $("#" + f).addEventListener("input", debounce(() => { I[f] = $("#" + f).value; render(); }, 120)); });
  tabs($("#plat"), (v) => { plat = v; render(); });
  $("#copyAll").onclick = () => copy(cur.thread.join("\n\n---\n\n"));
  $("#nextDay").onclick = () => { I.day = (+I.day || 0) + 1; I.shipped = I.next ? I.next.split(/,\s*/).join("\n") : ""; I.learned = ""; I.next = ""; I.stats = ""; F.forEach((f) => ($("#" + f).value = I[f] ?? "")); render(); };
  render();
})();
