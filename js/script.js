
const bootScreen = document.querySelector("#bootScreen");
const bootmessage = document.querySelector("#boot-message");
const startupMenu = document.querySelector("#startup-menu");
const desktop = document.querySelector(".desktop");

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
                document.querySelector("#startup-menu").hidden = false;

            }, 850);
        }, 400);
    }
}, 1200);






document.querySelector("#try-button").addEventListener("click", () => {
    startupMenu.hidden = true;
    desktop.hidden = false;
})