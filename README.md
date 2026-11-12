Savage Shark OS

## English

### Description

Savage Shark OS is a browser-based simulation of an operating-system desktop. The experience starts with a boot animation, continues with an intro video, and then shows a startup menu that leads to the desktop. It uses local image and video assets and a visual style inspired by Windows 7.

The project is built with HTML, CSS, and JavaScript, without an application framework.

### Project structure

```text
.
├── assets/
│   ├── AllNewIcon.png
│   ├── Artboard-01.jpg
│   ├── Asset 1.png
│   ├── DSCN2818.JPG
│   ├── IMG1.png
│   ├── Profile-01-01-01.jpg
│   └── result.mp4
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

- `index.html` — page markup, boot screen, video player, startup menu, and desktop.
- `css/style.css` — page styling and layout.
- `js/script.js` — boot sequence, video playback, and menu interactions.
- `assets/` — images and video used by the page.
- `package.json` and `package-lock.json` — npm dependency declarations and locked versions.
- `node_modules/` — generated when dependencies are installed; it does not need to be maintained or edited manually.

### Libraries and technologies

- **HTML, CSS, and JavaScript** — the project's core technologies; no JavaScript framework is used.
- **[7.css](https://github.com/khang-nd/7.css)** — a Windows 7-inspired CSS library imported by `css/style.css`.
- **[@frutiger.js/core](https://www.npmjs.com/package/@frutiger.js/core)** — listed as an npm dependency, but not currently imported or used by the page.

### Run the project

Make sure Node.js and npm are installed. From the project directory, install dependencies:

```bash
npm install
```

Start a local web server from the same directory. For example, with Python:

```bash
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser. If `python` is unavailable, use `python3 -m http.server 8000`. You can also use a local server extension such as Live Server in Visual Studio Code.

The project does not define `start`, `dev`, or `build` scripts in `package.json`. Serve the files through a local web server rather than opening `index.html` directly; this helps assets such as the stylesheet and video load correctly.
