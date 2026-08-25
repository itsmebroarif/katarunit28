/* about.js - Render komponen pendukung "Siapa Kami" & profil tim inti */

function renderAboutSupport() {
    const statRow = document.getElementById('statRow');
    if (statRow) {
        statRow.innerHTML = '';
        aboutStats.forEach(s => {
            const box = document.createElement('div');
            box.className = 'stat-box omori-box';
            box.innerHTML = `<div class="num">${s.num}</div><div class="lbl">${s.label[currentLang]}</div>`;
            statRow.appendChild(box);
        });
    }

    const valueGrid = document.getElementById('valueGrid');
    if (valueGrid) {
        valueGrid.innerHTML = '';
        aboutValues.forEach(v => {
            const card = document.createElement('div');
            card.className = 'value-card omori-box';
            card.innerHTML = `
                <i class="${v.icon}"></i>
                <h3>${v.title[currentLang]}</h3>
                <p>${v.desc[currentLang]}</p>
            `;
            valueGrid.appendChild(card);
        });
    }
}

function renderCoreTeam() {
    const grid = document.getElementById('coreTeamGrid');
    if (!grid) return;

    grid.innerHTML = '';
    coreTeam.forEach(member => {
        const card = document.createElement('div');
        card.className = 'profile-card omori-box';
        card.innerHTML = `
            <img class="photo" src="${member.photo}" alt="${member.name}" onerror="this.onerror=null;this.src='https://api.dicebear.com/7.x/pixel-art/svg?seed=${encodeURIComponent(member.name)}'">
            <h3>${member.name}</h3>
            <p class="role">${member.role[currentLang]}</p>
            ${member.rt && member.rt !== '-' ? `<p class="rt">${member.rt}</p>` : ''}
        `;
        grid.appendChild(card);
    });
}
