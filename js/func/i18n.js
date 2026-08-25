/* i18n.js - Logika ganti bahasa */

let currentLang = SITE_CONFIG.defaultLang;
let currentLangIdx = SITE_CONFIG.langOrder.indexOf(currentLang);

function cycleLang() {
    currentLangIdx = (currentLangIdx + 1) % SITE_CONFIG.langOrder.length;
    const newLang = SITE_CONFIG.langOrder[currentLangIdx];
    changeLang(newLang);
    document.getElementById('currentLangLabel').innerText = newLang.toUpperCase();
    if (typeof renderQuests === 'function') renderQuests();
    if (typeof renderMemories === 'function') renderMemories();
    if (typeof renderEvents === 'function') renderEvents();
    if (typeof renderSoftware === 'function') renderSoftware();
    if (typeof renderAboutSupport === 'function') renderAboutSupport();
    if (typeof renderCoreTeam === 'function') renderCoreTeam();
    if (typeof startTypewriter === 'function') startTypewriter();
}

function changeLang(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerText = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
}
