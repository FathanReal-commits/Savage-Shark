const bootScreen = document.querySelector("#bootScreen");
const bootmessage = document.querySelector("#boot-message");
const startupMenu = document.querySelector("#startup-menu");
const desktop = document.querySelector(".desktop");





function mulaiSistem() {
    
    document.querySelector(".selection-screen").hidden = true;

 
    pancingIzinSuara();

  
    playprogram();
}


function pancingIzinSuara() {
    const media = document.getElementById('myMedia');
    const pilihan = document.querySelector('input[name="formatOption"]:checked').value;

   
    if (pilihan === "suara") {
        media.muted = false;
    } else {
        media.muted = true;
    }

   
    media.play().then(() => {
       
        media.pause(); 
        media.currentTime = 0; 
        console.log("Izin suara Chrome/Safari berhasil dikunci! Video dikembalikan ke awal.");
    }).catch(error => {
        console.log("Browser menolak pancingan suara:", error);
        media.muted = true;
    });
}

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


const startButton = document.querySelector("#home-button")
const startMenu = document.querySelector("#start-menu")

startButton.addEventListener("click", () => {
    startMenu.hidden = !startMenu.hidden;
})