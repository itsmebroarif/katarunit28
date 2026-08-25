/* main.js - Inisialisasi & event listener global */

window.addEventListener('load', () => {
    // Render grid divisi & quest dari data
    renderTeam();
    renderQuests();

    // Terapkan bahasa default
    changeLang(currentLang);
    document.getElementById('currentLangLabel').innerText = currentLang.toUpperCase();
    startTypewriter();

    // Scroll-spy: sorot nav aktif sesuai section yang terlihat
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a, .nav-bottom a');
    const spy = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));

    // Mulai BGM saat klik pertama di mana saja
    document.body.addEventListener('click', () => {
        initAudio();
        if (player && player.getPlayerState && !isPlaying) {
            player.playVideo();
            isPlaying = true;
            const playPauseIcon = document.getElementById('playPauseIcon');
            if (playPauseIcon) {
                playPauseIcon.classList.remove('fa-play');
                playPauseIcon.classList.add('fa-pause');
            }
        }
    }, { once: true });

    // Suara slide navbar
    document.querySelectorAll('.nav-links a, .nav-bottom a').forEach(el => {
        el.addEventListener('mouseenter', playSlideSound);
    });

    // Suara klik untuk semua elemen interaktif
    document.querySelectorAll('a, button, .action-btn, .lang-btn, .software-card, .team-member, .gallery-item, .project-card, input, textarea').forEach(el => {
        el.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            playClickSound();
        });
    });

    // Suara scroll (di-throttle agar tidak berisik)
    let lastScrollPos = window.scrollY;
    window.addEventListener('scroll', () => {
        if (Math.abs(window.scrollY - lastScrollPos) > 120) {
            playTickSound();
            lastScrollPos = window.scrollY;
        }
    }, { passive: true });
});
