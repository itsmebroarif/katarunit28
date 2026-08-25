/* typewriter.js - Animasi teks ketik untuk hero */

const typewriterPhrases = {
    id: [
        "Menunggu sesuatu terjadi? Mari berkarya bersama Karang Taruna.",
        "Merajut realita dan mimpi demi Bojong Lio.",
        "Bersama pemuda, kampung jadi lebih hidup."
    ],
    en: [
        "Waiting for something to happen? Let's work together with Karang Taruna.",
        "Weaving reality and dreams for Bojong Lio.",
        "Together, the village comes alive."
    ],
    jp: [
        "何かが起こるのを待っている？Karang Tarunaと一緒に働きましょう。",
        "現実と夢を紡いでボジョン・リオを前進させる。",
        "共に歩めば、村はもっと輝く。"
    ]
};

let twToken = 0;

function startTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const phrases = typewriterPhrases[currentLang] || typewriterPhrases.id;
    const myToken = ++twToken;
    let pIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
        if (myToken !== twToken) return; // dibatalkan (ganti bahasa)

        const full = phrases[pIndex];
        if (!deleting) {
            charIndex++;
            el.textContent = full.substring(0, charIndex);
            if (charIndex === full.length) {
                deleting = true;
                setTimeout(tick, 1800);
                return;
            }
            setTimeout(tick, 55);
        } else {
            charIndex--;
            el.textContent = full.substring(0, charIndex);
            if (charIndex === 0) {
                deleting = false;
                pIndex = (pIndex + 1) % phrases.length;
                setTimeout(tick, 350);
                return;
            }
            setTimeout(tick, 30);
        }
    }
    tick();
}
