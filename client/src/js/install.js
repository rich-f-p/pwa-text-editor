const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptE = window.deferredPrompt;
    if(!promptE){
        console.log('not prptE');
        return;
    }
    promptE.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
