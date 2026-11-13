const bootScreen = document.querySelector("#bootScreen");
const bootmessage = document.querySelector("#boot-message");
const startupMenu = document.querySelector("#startup-menu");
const desktop = document.querySelector(".desktop");
import { setTheme } from '@fluentui/web-components';
import { webLightTheme } from '@fluentui/tokens';
import '@fluentui/web-components/button.js';

// Mengatur tema terang bawaan Microsoft
setTheme(webLightTheme);

// 1. FUNGSI UTAMA: Dipanggil saat tombol pertama diklik
function mulaiSistem() {
    // Sembunyikan layar pilihan format di awal
    document.querySelector(".selection-screen").hidden = true;

    // LANGKAH PENTING: Pancing izin suara browser secara kilat (Play lalu langsung Pause)
    pancingIzinSuara();

    // Jalankan animasi teks booting (memakan waktu ~5 detik)
    playprogram();
}

// 2. FUNGSI PANCINGAN: Mengunci izin suara tanpa membiarkan video berjalan dulu
function pancingIzinSuara() {
    const media = document.getElementById('myMedia');
    const pilihan = document.querySelector('input[name="formatOption"]:checked').value;

    // Nyalakan suara sejak awal jika user memilih opsi "suara"
    if (pilihan === "suara") {
        media.muted = false;
    } else {
        media.muted = true;
    }

    // Putar video secara kilat untuk merekam interaksi pengguna di sistem peramban
    media.play().then(() => {
        // DETIK ITU JUGA: Langsung hentikan video agar tidak mencuri start saat booting
        media.pause(); 
        media.currentTime = 0; // Kembalikan posisi video ke detik ke-0 (paling awal)
        console.log("Izin suara Chrome/Safari berhasil dikunci! Video dikembalikan ke awal.");
    }).catch(error => {
        console.log("Browser menolak pancingan suara:", error);
        media.muted = true;
    });
}

// 3. FUNGSI BOOTING: Animasi teks loading
function playprogram() {
    bootScreen.hidden = false;

    const startupmessage = [
        "Loading system files...",
        "Initializing device drivers...",
        "Starting system services...",
        "Preparing desktop...",
    ];

    let messageIndex = 0;
    bootmessage.textContent = startupmessage[0];

    const bootTimer = setInterval(() => {
        messageIndex++;

        if (messageIndex < startupmessage.length) {
            bootmessage.textContent = startupmessage[messageIndex];
        } else {
            clearInterval(bootTimer);
            bootmessage.textContent = "Welcome to Savage Shark!";

            // Transisi pergantian layar setelah booting selesai
            setTimeout(() => {
                bootScreen.classList.add("boot-finished");

                setTimeout(() => {
                    bootScreen.hidden = true;
                    
                    // MEMUNCULKAN SECTION VIDEO
                    document.querySelector("#video-screen").hidden = false;

                    // EKSEKUSI UTAMA: Video baru benar-benar diputar dari awal di section-nya sendiri
                    const media = document.getElementById('myMedia');
                    media.play().catch(err => {
                        console.log("Gagal memutar video di akhir:", err);
                    });

                }, 850);
            }, 400);
        }
    }, 1200);
}


const media = document.querySelector("#myMedia");
const videoScreen = document.querySelector("#video-screen");

// When the intro video finishes

media.addEventListener("ended", () => {
    media.pause();
    videoScreen.hidden = true;
    startupMenu.hidden = false;

    console.log("Video ended — startup menu displayed");
});


// Event listener untuk tombol di menu startup
document.querySelector("#try-button").addEventListener("click", () => {
    startupMenu.hidden = true;
    desktop.hidden = false;
});
