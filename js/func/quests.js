/* quests.js - Render daftar quest/misi dari data */

function renderQuests() {
    const list = document.querySelector('.project-list');
    if (!list) return;

    list.innerHTML = '';
    questData.forEach(q => {
        const card = document.createElement('div');
        card.className = 'project-card omori-box';
        card.innerHTML = `
            <div>
                <h3>${q.title[currentLang]}</h3>
                <p style="margin-top: 10px; font-weight: bold;">${q.desc[currentLang]}</p>
                <div class="quest-meta">
                    <span><i class="far fa-calendar-alt"></i> ${q.datetime}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${q.location}</span>
                    <span><i class="fas fa-user-check"></i> PIC: ${q.pic}</span>
                </div>
            </div>
            <div class="project-icon"><i class="${q.icon}"></i></div>
        `;
        list.appendChild(card);
    });
}
