function copyConfig() {
    const codeElement = document.getElementById("configCode");
    const btn = document.getElementById("copyBtn");
    
    // Text aus dem pre-Tag extrahieren
    const code = codeElement.innerText;

    navigator.clipboard.writeText(code).then(() => {
        // Visuelles Feedback
        const originalText = btn.innerText;
        btn.innerText = "Copied!";
        btn.classList.add("copied");

        // Nach 2 Sekunden zurücksetzen
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove("copied");
        }, 2000);
    }).catch(err => {
        console.error('Fehler beim Kopieren: ', err);
    });
}