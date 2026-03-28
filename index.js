// Wir warten, bis das Dokument geladen ist
document.addEventListener('DOMContentLoaded', () => {
    const follower = document.getElementById('cursor-follower');

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

document.addEventListener('DOMContentLoaded', () => {
    const follower = document.querySelector('.cursor-follower');
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.locbar_text');

    // 1. Cursor Logik (beibehalten)
    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        if (follower) {
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
        }
        requestAnimationFrame(animate);
    }
    animate();

    // 2. Scroll-Spy Logik (NEU)
    window.addEventListener('scroll', () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Wenn wir mehr als 150px in die Sektion gescrollt sind
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            // Prüfen, ob der href des Links zur aktuellen ID passt
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});

    function animate() {
        followerX += (mouseX - followerX) * 0.11;
        followerY += (mouseY - followerY) * 0.11;

        if (follower) {
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
        }

        requestAnimationFrame(animate);
    }

    animate();
});