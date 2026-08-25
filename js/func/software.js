/* software.js - Render grid aplikasi/software dari data */

function renderSoftware() {
    const grid = document.getElementById('softwareGrid');
    if (!grid) return;

    grid.innerHTML = '';
    softwareData.forEach(sw => {
        const card = document.createElement('div');
        card.className = 'software-card omori-box';
        card.setAttribute('onclick', `window.open('${sw.link}', '_blank')`);
        card.innerHTML = `
            <div class="badge">${sw.badge[currentLang]}</div>
            <i class="${sw.icon}"></i>
            <h3>${sw.title[currentLang]}</h3>
            <p style="margin-top: 10px;">${sw.desc[currentLang]}</p>
            <div class="download-hint"><i class="fas fa-globe"></i> <span data-i18n="click_download">Klik untuk Membuka</span></div>
        `;
        grid.appendChild(card);
    });
}
