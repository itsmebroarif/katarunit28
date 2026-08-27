/* gallery.js - Render kategori Headspace Memories & modal sub-kategori */

function renderMemories() {
    const grid = document.querySelector('.grid-gallery');
    if (!grid) return;

    grid.innerHTML = '';
    Object.entries(memoryData).forEach(([catId, data]) => {
        const card = document.createElement('div');
        card.className = 'gallery-item omori-box';
        card.setAttribute('onclick', `openMemoryModal('${catId}')`);
        card.innerHTML = `
            <i class="${data.icon}"></i>
            <p>${data.title[currentLang]}</p>
        `;
        grid.appendChild(card);
    });
}

function openMemoryModal(catId) {
    playClickSound();
    const data = memoryData[catId];
    const title = data.title[currentLang];
    const desc = data.desc[currentLang];

    let html = `<p style="text-align:left; font-family:'Gaegu', cursive; font-size:1.4rem; font-weight:bold; margin-bottom:15px;">${desc}</p>`;

    html += '<div class="memory-sub-grid">';
    data.sub.forEach(sub => {
        const items = sub.items.map(i =>
            `<li style="margin:4px 0 4px 18px; font-family:'Gaegu', cursive; font-size:1.3rem;">${i}</li>`
        ).join('');

        html += `
            <div class="omori-box memory-sub-card">
                <h3 style="font-size:1.7rem;">${sub.name[currentLang]}</h3>
                <p style="font-weight:bold; margin:8px 0;">${sub.desc[currentLang]}</p>
                <ul style="list-style: '▸ ';">${items}</ul>
            </div>`;
    });
    html += '</div>';

    Swal.fire({
        title: `<span style="font-family:'Press Start 2P', cursive; font-size:1.3rem; text-transform:uppercase;">${title}</span>`,
        html: html,
        background: 'var(--hs-mint)',
        color: 'var(--hs-border)',
        confirmButtonText: 'TUTUP',
        confirmButtonColor: 'var(--hs-border)',
        customClass: {
            popup: 'omori-box',
            confirmButton: 'action-btn'
        }
    }).then(() => {
        playClickSound();
    });
}
