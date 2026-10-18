
const bootScreen = document.querySelector("#bootScreen");
const bootmessage = document.querySelector("#boot-message");
const startupMenu = document.querySelector("#startup-menu");
const desktop = document.querySelector(".desktop");

function playprogram() {
    document.querySelector("#bootScreen").hidden = false;




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


            setTimeout(() => {
                bootScreen.classList.add("boot-finished");

                setTimeout(() => {
                    bootScreen.hidden = true;
                    document.querySelector("#video-screen").hidden = false;



                }, 850);
            }, 400);
        }
    }, 1200);






    document.querySelector("#try-button").addEventListener("click", () => {
        startupMenu.hidden = true;
        desktop.hidden = false;
    })


    function eksekusiMedia() {
        const pilihan = document.querySelector('input[name="formatOption"]:checked').value;
        const media = document.getElementById('audioVisual');
        const screen = document.getElementById('bootScreen');

        media.style.display = "block";

        // 1. Perintahkan media untuk putar dulu (Chrome pasti mengizinkan karena statusnya masih MUTED)
        media.play().then(() => {
            // 2. Begitu berhasil putar, baru kita tentukan suaranya berdasarkan pilihan user
            if (pilihan === "suara") {
                media.muted = false; // Buka suara (Aman dari freeze karena sudah ada interaksi klik tombol)
            } else {
                media.muted = true;
            }

            // 3. Sembunyikan layar booting
            screen.style.display = "none";
        }).catch(err => {
            // Mencegah eror menyumbat JavaScript jika terjadi kegagalan sistem
            console.log("Ditangkap oleh Chrome: ", err);
            screen.style.display = "none";
        });
    }
}