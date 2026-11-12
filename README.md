# Savage Shark OS

Dokumentasi ini tersedia dalam bahasa Indonesia dan bahasa Inggris.

## Bahasa Indonesia

### Deskripsi

Savage Shark OS adalah simulasi antarmuka desktop bergaya sistem operasi yang berjalan di browser. Pengalaman dimulai dengan animasi boot, dilanjutkan intro video, lalu menu startup yang membawa pengguna ke desktop. Tampilan menggunakan aset gambar dan video lokal serta gaya visual yang terinspirasi dari Windows 7.

Proyek ini dibuat dengan HTML, CSS, dan JavaScript tanpa framework aplikasi.

### Struktur proyek

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

- `index.html` — markup halaman, layar boot, pemutar video, menu startup, dan desktop.
- `css/style.css` — gaya tampilan dan tata letak halaman.
- `js/script.js` — alur boot, pemutaran video, dan interaksi menu.
- `assets/` — gambar dan video yang digunakan oleh halaman.
- `package.json` dan `package-lock.json` — daftar serta versi dependency npm.
- `node_modules/` — dibuat saat dependency dipasang; tidak perlu dikelola atau diedit secara manual.

### Library dan teknologi

- **HTML, CSS, dan JavaScript** — teknologi inti proyek; tidak menggunakan framework JavaScript.
- **[7.css](https://github.com/khang-nd/7.css)** — library CSS bergaya Windows 7, diimpor dari `css/style.css`.
- **[@frutiger.js/core](https://www.npmjs.com/package/@frutiger.js/core)** — tercantum sebagai dependency npm, tetapi belum diimpor atau digunakan oleh halaman saat ini.

### Menjalankan proyek

Pastikan Node.js dan npm tersedia. Dari direktori proyek, pasang dependency:

```bash
npm install
```

Jalankan server web lokal dari direktori yang sama. Contoh menggunakan Python:

```bash
python -m http.server 8000
```

Buka [http://localhost:8000](http://localhost:8000) di browser. Jika perintah `python` tidak tersedia, gunakan `python3 -m http.server 8000`. Anda juga dapat menjalankan proyek menggunakan ekstensi server lokal seperti Live Server di Visual Studio Code.

Proyek ini tidak mendefinisikan script `start`, `dev`, atau `build` di `package.json`. Karena itu, sajikan berkasnya melalui server web lokal alih-alih membuka `index.html` secara langsung; ini membantu aset seperti stylesheet dan video dimuat dengan benar.

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
