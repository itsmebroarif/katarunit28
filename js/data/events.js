/**
 * FILE DATA EVENT (KEGIATAN UMUM) & UPCOMING EVENT
 * - eventData     : kartu kegiatan umum (icon, name, desc, doc opsional)
 *   - schedule    : array jadwal { date: "YYYY-MM-DD", note: "keterangan" }.
 *     Kosongkan ([]) agar popup menampilkan "Belum ada kegiatan tersebut."
 * - upcomingEvent : satu event mendatang yang ditampilkan sebagai banner.
 *   Isi doc dengan URL untuk langsung download; biarkan "" agar muncul
 *   pesan "Surat Sedang Dibuat..." (SweetAlert).
 */
const upcomingEvent = {
    date: "12 September 2026",
    title: { id: "Mini Soccer RW.028", en: "Mini Soccer RW.028", jp: "ミニサッカー RW.028" },
    desc: {
        id: "Turnamen mini soccer antar warga RW.028 yang penuh semangat.",
        en: "A spirited mini soccer tournament for RW.028 residents.",
        jp: "RW.028住民による熱いミニサッカー大会。"
    },
    doc: ""
};

const eventData = [
    {
        icon: "fas fa-broom",
        name: { id: "Kerja Bakti", en: "Community Work", jp: "共同作業" },
        desc: {
            id: "Gotong royong membersihkan dan merawat lingkungan kampung bersama warga.",
            en: "Working together to clean and maintain the village environment.",
            jp: "住民と共に環境を清掃・整備する取り組み。"
        },
        doc: "",
        schedule: [
            { date: "2026-09-06", note: "Kerja bakti rutin mingguan" },
            { date: "2026-09-13", note: "Kerja bakti rutin mingguan" },
            { date: "2026-09-27", note: "Kerja bakti besar sebelum Mini Soccer" }
        ]
    },
    {
        icon: "fas fa-comments",
        name: { id: "Diskusi Bersama", en: "Group Discussion", jp: "グループディスカッション" },
        desc: {
            id: "Musyawarah dan bertukar ide antar warga untuk kemajuan bersama.",
            en: "Deliberation and exchanging ideas among residents for shared progress.",
            jp: "住民同士の話し合いとアイデア交換。"
        },
        doc: "",
        schedule: []
    },
    {
        icon: "fas fa-mosque",
        name: { id: "Kegiatan Keagamaan", en: "Religious Activities", jp: "宗教行事" },
        desc: {
            id: "Pengajian, doa bersama, dan peringatan hari besar keagamaan.",
            en: "Religious study, communal prayer, and religious holiday observances.",
            jp: "学習会・合同礼拝・宗教的祝日の行事。"
        },
        doc: "",
        schedule: [
            { date: "2026-09-05", note: "Pengajian rutin bulanan" }
        ]
    },
    {
        icon: "fas fa-drum",
        name: { id: "Kegiatan Festival", en: "Festival Activities", jp: "お祭り" },
        desc: {
            id: "Pentas seni dan lomba yang memeriahkan kampung.",
            en: "Art performances and competitions that enliven the village.",
            jp: "村を盛り上げる舞台芸能と競技。"
        },
        doc: "",
        schedule: []
    },
    {
        icon: "fas fa-volleyball-ball",
        name: { id: "Kegiatan Olahraga", en: "Sports Activities", jp: "スポーツ活動" },
        desc: {
            id: "Turnamen dan senam bersama untuk warga yang sehat.",
            en: "Tournaments and group exercise for a healthy community.",
            jp: "住民の健康のための大会と体操。"
        },
        doc: "",
        schedule: [
            { date: "2026-09-20", note: "Senam sehat bersama warga" }
        ]
    },
    {
        icon: "fas fa-tree",
        name: { id: "Piknik", en: "Picnic", jp: "ピクニック" },
        desc: {
            id: "Rekreasi santai untuk mempererat kekeluargaan warga.",
            en: "Relaxed recreation to strengthen community bonds.",
            jp: "共同体の絆を深めるゆったりしたレクリエーション。"
        },
        doc: "",
        schedule: []
    }
];
