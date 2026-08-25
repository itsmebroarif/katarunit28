/* events.js - Render banner upcoming event & kartu kegiatan di section EVENT */

function downloadDoc(url) {
    if (!url) {
        const t = translations[currentLang];
        Swal.fire({
            title: t.doc_title,
            text: t.doc_empty,
            icon: 'info',
            confirmButtonColor: 'var(--hs-border)',
            background: 'var(--hs-white)',
            customClass: { popup: 'omori-box', confirmButton: 'action-btn' }
        });
        if (typeof playClickSound === 'function') playClickSound();
        return;
    }
    if (typeof playClickSound === 'function') playClickSound();
    window.open(url, '_blank');
}

function renderEvents() {
    // Banner Upcoming Event
    const banner = document.getElementById('upcomingBanner');
    if (banner && upcomingEvent) {
        banner.innerHTML = `
            <div class="upcoming-date"><i class="far fa-calendar-alt"></i> ${upcomingEvent.date}</div>
            <h3>${upcomingEvent.title[currentLang]}</h3>
            <p>${upcomingEvent.desc[currentLang]}</p>
            <button class="doc-btn" onclick="downloadDoc('${upcomingEvent.doc}')">
                <i class="fas fa-file-download"></i> <span data-i18n="doc_btn">DOWNLOAD DOCUMENT</span>
            </button>
        `;
    }

    // Grid kegiatan umum
    const grid = document.getElementById('eventGrid');
    if (!grid) return;

    grid.innerHTML = '';
    eventData.forEach(ev => {
        const card = document.createElement('div');
        card.className = 'event-card omori-box';
        card.innerHTML = `
            <i class="${ev.icon}"></i>
            <h3>${ev.name[currentLang]}</h3>
            <p>${ev.desc[currentLang]}</p>
            <button class="doc-btn" onclick="downloadDoc('${ev.doc}')">
                <i class="fas fa-file-download"></i> <span data-i18n="doc_btn">DOWNLOAD DOCUMENT</span>
            </button>
        `;
        grid.appendChild(card);
    });
}
