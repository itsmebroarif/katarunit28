/* events.js - Banner upcoming, kartu kegiatan, popup kalender & download dokumen */

function downloadDoc(url) {
    if (typeof playClickSound === 'function') playClickSound();
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
        return;
    }
    window.open(url, '_blank');
}

/* Popup kalender: jika kegiatan punya jadwal -> tampilkan kalender bulan
   berisi jadwal terdekat; jika tidak -> "Belum ada kegiatan tersebut." */
function openCalendar(idx) {
    if (typeof playClickSound === 'function') playClickSound();
    const ev = eventData[idx];
    const t = translations[currentLang];

    if (!ev.schedule || ev.schedule.length === 0) {
        Swal.fire({
            title: `<span style="font-family:'Press Start 2P', cursive; font-size:1.2rem;">${ev.name[currentLang]}</span>`,
            text: t.cal_empty,
            icon: 'info',
            background: 'var(--hs-mint)',
            color: 'var(--hs-border)',
            confirmButtonText: 'OK',
            confirmButtonColor: 'var(--hs-border)',
            customClass: { popup: 'omori-box', confirmButton: 'action-btn' }
        });
        return;
    }

    const items = [...ev.schedule].sort((a, b) => a.date.localeCompare(b.date));
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const targetItem = items.find(it => new Date(it.date) >= today) || items[items.length - 1];
    const d = new Date(targetItem.date);

    const grid = buildMonthGrid(d.getFullYear(), d.getMonth(), items);
    const listHtml = items.map(it => `
        <li style="background:var(--hs-white); border:3px solid var(--hs-border); border-radius:10px; padding:10px 15px; margin-bottom:8px;">
            <b style="font-family:'VT323', monospace; font-size:1.4rem;">${formatDate(it.date)}</b><br>
            <span style="font-size:1.25rem;">${it.note || ''}</span>
        </li>`).join('');

    Swal.fire({
        title: `<span style="font-family:'Press Start 2P', cursive; font-size:1.2rem;">${ev.name[currentLang]}</span>`,
        html: `${grid}<ul style="list-style:none; padding:0; text-align:left; max-height:30vh; overflow-y:auto; margin-top:12px;">${listHtml}</ul>`,
        background: 'var(--hs-mint)',
        color: 'var(--hs-border)',
        confirmButtonText: 'OK',
        confirmButtonColor: 'var(--hs-border)',
        customClass: { popup: 'omori-box', confirmButton: 'action-btn' }
    });
}

/* Grid kalender satu bulan; hari yang punya jadwal ditandai */
function buildMonthGrid(year, month, items) {
    const daySet = {};
    items.forEach(it => {
        const d = new Date(it.date);
        if (d.getFullYear() === year && d.getMonth() === month) daySet[d.getDate()] = true;
    });

    const localeName = currentLang === 'en' ? 'en-GB' : currentLang === 'jp' ? 'ja-JP' : 'id-ID';
    const monthLabel = new Date(year, month, 1)
        .toLocaleDateString(localeName, { month: 'long', year: 'numeric' });

    const headers = currentLang === 'jp'
        ? ['日', '月', '火', '水', '木', '金', '土']
        : ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

    // Hari pertama dalam bulan (0=Minggu). Geser agar Senin jadi kolom pertama.
    const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
    const totalDays = new Date(year, month + 1, 0).getDate();

    let cells = '';
    for (let i = 0; i < firstDay; i++) cells += '<td class="cal-cell"></td>';
    for (let day = 1; day <= totalDays; day++) {
        cells += `<td class="cal-cell ${daySet[day] ? 'cal-mark' : ''}">${day}</td>`;
        if ((firstDay + day) % 7 === 0 && day !== totalDays) cells += '</tr><tr>';
    }
    while ((firstDay + totalDays) % 7 !== 0) { cells += '<td class="cal-cell"></td>'; break; }

    return `
        <div class="cal-wrap">
            <div class="cal-title"><i class="far fa-calendar-alt"></i> ${monthLabel}</div>
            <table class="cal-grid">
                <tr>${headers.map(h => `<th class="cal-head">${h}</th>`).join('')}</tr>
                <tr>${cells}</tr>
            </table>
        </div>`;
}

function formatDate(dateStr) {
    const locale = currentLang === 'en' ? 'en-GB' : currentLang === 'jp' ? 'ja-JP' : 'id-ID';
    return new Date(dateStr).toLocaleDateString(locale, {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
}

function renderEvents() {
    // Banner Upcoming Event
    const banner = document.getElementById('upcomingBanner');
    if (banner && typeof upcomingEvent !== 'undefined' && upcomingEvent) {
        banner.innerHTML = `
            <div class="upcoming-date"><i class="far fa-calendar-alt"></i> ${upcomingEvent.date}</div>
            <h3>${upcomingEvent.title[currentLang]}</h3>
            <p>${upcomingEvent.desc[currentLang]}</p>
            <button class="doc-btn" onclick="downloadDoc('${upcomingEvent.doc}')">
                <i class="fas fa-file-download"></i> <span data-i18n="doc_btn">DOWNLOAD DOCUMENT</span>
            </button>
        `;
    }

    // Grid kegiatan umum (klik kartu -> popup kalender)
    const grid = document.getElementById('eventGrid');
    if (!grid) return;

    grid.innerHTML = '';
    eventData.forEach((ev, idx) => {
        const card = document.createElement('div');
        card.className = 'event-card omori-box';
        card.setAttribute('onclick', `openCalendar(${idx})`);
        card.innerHTML = `
            <i class="${ev.icon}"></i>
            <h3>${ev.name[currentLang]}</h3>
            <p>${ev.desc[currentLang]}</p>
            <button class="doc-btn" onclick="event.stopPropagation(); downloadDoc('${ev.doc}')">
                <i class="fas fa-file-download"></i> <span data-i18n="doc_btn">DOWNLOAD DOCUMENT</span>
            </button>
        `;
        grid.appendChild(card);
    });
}
