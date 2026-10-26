<!-- ═════════════ HEADER ═════════════ -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:07060f,50:00D2FF,100:FF6B9A&height=200&section=header&text=Prism%20Devlog&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Build-in-public%20post%20generator&descAlignY=58&descSize=16" width="100%" alt="Prism Devlog" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=19&duration=2600&pause=800&color=00D2FF&center=true&vCenter=true&width=680&lines=Day+12+of+building+%F0%9F%9A%80;Auto-split+into+a+thread;X-accurate+280+counter;LinkedIn+%26+Discord+too" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://github.com/krishyaa06/prism-devlog/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/krishyaa06/prism-devlog/ci.yml?branch=main&style=for-the-badge&label=CI&logo=githubactions&logoColor=white" alt="CI" /></a>
  <a href="https://krishyaa06.github.io/prism-devlog/"><img src="https://img.shields.io/badge/Live_Demo-Open-00D2FF?style=for-the-badge&logo=githubpages&logoColor=black" alt="Live demo" /></a>
  <img src="https://img.shields.io/badge/Vanilla-HTML%20%7C%20CSS%20%7C%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JS" />
  <img src="https://img.shields.io/badge/dependencies-0-00D2FF?style=for-the-badge" alt="Zero dependencies" />
  <a href="LICENSE"><img src="https://img.shields.io/github/license/krishyaa06/prism-devlog?style=for-the-badge&color=FF6B9A" alt="License" /></a>
</p>

<p align="center">
  <img src="assets/screenshots/desktop.png" width="90%" alt="Prism Devlog screenshot" />
</p>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" width="100%" />

## ⚡ Overview

**Prism Devlog** removes the friction from posting build-in-public updates. Fill in what you shipped, what you learned, a stat or two and what's next, choose a tone, and get a post formatted for X, LinkedIn or Discord. Long X posts are split into a numbered thread at sentence boundaries, and character counts follow X's rules (URLs count as 23, emoji as 2). **Next day →** carries tomorrow's plan forward.

## ✨ Features

- **3 platforms** — X, LinkedIn, Discord (bold title, link embeds suppressed)
- **Auto thread splitting** under 280 with `1/n` numbering
- **X-accurate counting** — URLs = 23 chars, emoji = 2
- **3 tones**: hype, chill, professional
- **Day counter** + **Next day →** that rolls "next" into "shipped"
- Preview cards, copy per post or whole thread, open in X compose

## 📸 Screenshots

<table>
  <tr>
    <td width="68%"><img src="assets/screenshots/desktop.png" width="100%" alt="Prism Devlog on desktop" /></td>
    <td width="32%"><img src="assets/screenshots/mobile.png" width="100%" alt="Prism Devlog on mobile" /></td>
  </tr>
</table>

## 🚀 Quick Start

**Use it online:** [https://krishyaa06.github.io/prism-devlog/](https://krishyaa06.github.io/prism-devlog/)

**Run locally:**

```bash
git clone https://github.com/krishyaa06/prism-devlog.git
cd prism-devlog
# open index.html in your browser, or serve it:
npx serve .
```

## 🛠️ Usage

1. Fill in project, day, shipped / learned / next, link and hashtags.
2. Pick a platform and tone; read the preview.
3. Copy each post (or **Open in X**). Tomorrow, hit **Next day →**.

## 📁 Project Structure

```
prism-devlog/
├── assets/
│   ├── logo.png
│   └── logo.svg
├── css/
│   ├── app.css
│   └── prism.css
├── js/
│   ├── app.js   # form + previews
│   ├── core.js   # post builder, X length, thread splitter — tested in Node
│   └── prism.js
├── test/
│   └── core.test.js
├── .gitignore
├── LICENSE
├── index.html
└── package.json
```

## 🧪 Tests

```bash
npm test
```

Tests use the built-in `node:test` runner, so there is nothing to install. CI runs them on Node 20 and 22.

## 🤝 Contributing

1. Fork the repo and create a branch: `git checkout -b feature/my-idea`
2. Make your change and add a test in `test/`
3. Run `npm test` and open a Pull Request

## 🔷 Part of Prism Protocol

Prism Devlog is one of the open-source tools built by [Prism Protocol](https://dc.gg/prismprotocol), a tech community where young builders learn, ship and compete together.

## 👤 Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/krishyaa06"><img src="https://github.com/krishyaa06.png" width="90" style="border-radius:50%" /><br><b>Soumya Bhandare</b></a><br>
      <sub>Founder @ Prism Protocol</sub>
    </td>
    <td>
      <a href="https://dc.gg/prismprotocol"><img src="https://img.shields.io/badge/Discord-Prism%20Protocol-5865F2?style=for-the-badge&logo=discord&logoColor=white" /></a><br>
      <a href="https://instagram.com/prism_protocol_"><img src="https://img.shields.io/badge/Instagram-@prism__protocol__-E4405F?style=for-the-badge&logo=instagram&logoColor=white" /></a><br>
      <a href="https://x.com/krishyaa06"><img src="https://img.shields.io/badge/X-@krishyaa06-000000?style=for-the-badge&logo=x&logoColor=white" /></a>
    </td>
  </tr>
</table>

## 📄 License

Released under the [MIT License](LICENSE).

<p align="center">
  <b>If you like this project, consider giving it a ⭐</b><br>
  <sub>"Build. Create. Compete." · Made with ⚡ by Prism Protocol</sub>
</p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF6B9A,50:00D2FF,100:07060f&height=110&section=footer" width="100%" />
