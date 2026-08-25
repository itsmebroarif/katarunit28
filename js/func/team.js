/* team.js - Render grid divisi dari data & modal anggota */

function renderTeam() {
    const grid = document.querySelector('.team-grid');
    if (!grid) return;

    grid.innerHTML = '';
    Object.entries(divisionData).forEach(([divId, data]) => {
        const count = data.members.length;
        const card = document.createElement('div');
        card.className = 'team-member omori-box';
        card.setAttribute('onclick', `openModal('${divId}')`);
        card.innerHTML = `
            <div class="avatar"><i class="${data.icon}"></i></div>
            <h3 data-i18n="team_${divId}">${data.title[currentLang]}</h3>
            <p style="font-weight: bold; margin-top: 5px;"><span class="member-count">${count}</span> Members</p>
            <div class="team-hover-hint" data-i18n="click_view">Klik untuk melihat</div>
        `;
        grid.appendChild(card);
    });
}

function openModal(divId) {
    playClickSound();
    const data = divisionData[divId];
    const title = data.title[currentLang];
    const desc = data.desc ? data.desc[currentLang] : '';
    let htmlContent = `<p style="text-align:left; font-family:'Gaegu', cursive; font-size:1.4rem; margin-bottom:15px; font-weight:bold;">${desc}</p>`;
    htmlContent += '<ul style="list-style:none; padding:0; text-align:left; max-height:40vh; overflow-y:auto;">';
    data.members.forEach(member => {
        htmlContent += `<li style="background:var(--hs-white); border:3px solid var(--hs-border); border-radius:10px; padding:15px; margin-bottom:10px;">
            <span style="font-weight:bold; font-size:1.6rem; display:block; font-family:'VT323', monospace;">${member.name}</span>
            <span style="font-size:1.3rem; color:#555; font-family:'Gaegu', cursive;"><i class="fas fa-caret-right"></i> ${member.role[currentLang]}</span>
        </li>`;
    });
    htmlContent += '</ul>';

    Swal.fire({
        title: `<span style="font-family:'Press Start 2P', cursive; font-size:1.5rem; text-transform:uppercase;">${title}</span>`,
        html: htmlContent,
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
