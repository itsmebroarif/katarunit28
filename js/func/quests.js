/* quests.js - Render daftar quest/misi dari data + status otomatis berdasarkan tanggal */

function getQuestStatus(q) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const s = q.startDate ? new Date(q.startDate) : null;
    const e = q.endDate ? new Date(q.endDate) : null;
    if (s && now < s) return 'upcoming';   // Akan Berjalan
    if (e && now > e) return 'done';       // Sudah Berjalan
    return 'ongoing';                      // Sedang Berjalan
}

function renderQuests() {
    const list = document.querySelector('.project-list');
    if (!list) return;
    const t = translations[currentLang];

    list.innerHTML = '';
    questData.forEach(q => {
        const st = getQuestStatus(q);
        const card = document.createElement('div');
        card.className = 'project-card omori-box';
        card.innerHTML = `
            <div>
                <div class="quest-status st-${st}"><i class="fas fa-circle"></i> ${t['status_' + st]}</div>
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
