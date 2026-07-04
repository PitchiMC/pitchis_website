function copyConfig() {
    const codeElement = document.getElementById("configCode");
    const btn = document.getElementById("copyBtn");
    
    const code = codeElement.innerText;

    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.innerText;
        btn.innerText = "Copied!";
        btn.classList.add("copied");

        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove("copied");
        }, 2000);
    }).catch(err => {
        console.error('Fehler beim Kopieren: ', err);
    });
}