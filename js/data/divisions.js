/**
 * FILE DATA DIVISI & ANGGOTA
 * Edit divisi, ikon, dan anggota secara manual (hardcode) di bawah ini.
 * - icon    : class Font Awesome (https://fontawesome.com/icons)
 * - title   : judul divisi per bahasa (id, en, jp)
 * - desc    : penjelasan tugas divisi per bahasa (ditampilkan di modal)
 * - members : daftar anggota. role juga per bahasa.
 * Jumlah anggota dihitung otomatis dari panjang array members.
 */
const divisionData = {
    utama: {
        icon: "fas fa-crown",
        title: { id: "ANGGOTA UTAMA", en: "MAIN MEMBERS", jp: "メインメンバー" },
        desc: {
            id: "Memimpin dan mengkoordinasikan seluruh kegiatan Karang Taruna, menyusun rencana kerja, serta menjadi penanggung jawab akhir setiap program.",
            en: "Leads and coordinates all Karang Taruna activities, prepares the work plan, and holds final accountability for every program.",
            jp: "すべての活動を統括・調整し、事業計画を立て、各プログラムの最終責任を負います。"
        },
        members: [
            { name: "Arif Permana Putrasuryana (RT.1)", role: { id: "Ketua Pelaksana", en: "Executive Chairman", jp: "実行委員長" } },
            { name: "Syahwaulia Oktaviandri (RT.2)", role: { id: "Sekretaris", en: "Secretary", jp: "秘書" } },
            { name: "Salwa (RT.1)", role: { id: "Bendahara", en: "Treasurer", jp: "会計" } },
            { name: "Faradillah Eka (RT.1)", role: { id: "Sekretaris 2", en: "Vice Secretary", jp: "副秘書" } },
            { name: "Aqilla (RT.1)", role: { id: "Wakil Bendahara", en: "Vice Treasurer", jp: "副会計" } }
        ]
    },
    multimedia: {
        icon: "fas fa-camera-retro",
        title: { id: "MULTIMEDIA", en: "MULTIMEDIA", jp: "マルチメディア" },
        desc: {
            id: "Mendidokumentasikan kegiatan, membuat konten kreatif (foto, video, desain), serta mengelola poster dan publikasi visual organisasi.",
            en: "Documents activities, creates creative content (photos, videos, designs), and manages the organization's posters and visual publications.",
            jp: "活動を記録し、クリエイティブコンテンツ（写真・動画・デザイン）を制作し、視覚的な発信を管理します。"
        },
        members: [
            { name: "Aliefa Ramadanti (RT.1)", role: { id: "Anggota", en: "Member", jp: "メンバー" } },
            { name: "Ilham Syahwandi", role: { id: "Anggota", en: "Member", jp: "メンバー" } },
            { name: "Syahwaulia Oktaviandri (RT.2)", role: { id: "Sekretaris", en: "Secretary", jp: "秘書" } }
        ]
    },
    keamanan: {
        icon: "fas fa-shield-alt",
        title: { id: "KEAMANAN", en: "SECURITY", jp: "セキュリティ" },
        desc: {
            id: "Menjaga ketertiban dan keamanan selama berlangsungnya kegiatan maupun acara kampung.",
            en: "Maintains order and security during activities and village events.",
            jp: "活動や村のイベントにおける秩序と安全を守ります。"
        },
        members: [
            { name: "Ario (RT.1)", role: { id: "Anggota", en: "Member", jp: "メンバー" } },
            { name: "Adit", role: { id: "Anggota", en: "Member", jp: "メンバー" } }
        ]
    },
    humas: {
        icon: "fas fa-bullhorn",
        title: { id: "HUMAS & ASET", en: "PR & ASSETS", jp: "広報と資産" },
        desc: {
            id: "Menjalin relasi dengan pihak luar, mengelola aset organisasi, serta menangani komunikasi publik.",
            en: "Builds relations with external parties, manages organizational assets, and handles public communication.",
            jp: "外部との関係構築、資産管理、対外的なコミュニケーションを担います。"
        },
        members: [
            { name: "Suci Al Desti Febriyani", role: { id: "Anggota", en: "Member", jp: "メンバー" } },
            { name: "Safira Rahmadini", role: { id: "Anggota", en: "Member", jp: "メンバー" } }
        ]
    },
    olahraga: {
        icon: "fas fa-running",
        title: { id: "OLAHRAGA & KEROHANIAN", en: "SPORTS & SPIRITUAL", jp: "スポーツと精神" },
        desc: {
            id: "Menyelenggarakan kegiatan olahraga, kerohanian, dan kebugaran warga sebagai wujud kampung yang sehat.",
            en: "Organizes sports, spiritual, and fitness activities for residents as a form of a healthy village.",
            jp: "住民のスポーツ・精神・健康活動を企画し、健やかな村を目指します。"
        },
        members: [
            { name: "Muhammad Azzam Syuhada (RT.5)", role: { id: "Anggota", en: "Member", jp: "メンバー" } },
            { name: "Randi Gunawan (RT.5)", role: { id: "Anggota", en: "Member", jp: "メンバー" } }
        ]
    },
    wirausaha: {
        icon: "fas fa-store",
        title: { id: "KEWIRAUSAHAAN & SENI BUDAYA", en: "ENTREPRENEURSHIP & ARTS", jp: "起業家精神と芸術" },
        desc: {
            id: "Mengembangkan potensi ekonomi kreatif, kewirausahaan, serta melestarikan seni dan budaya lokal.",
            en: "Develops creative economy potential, entrepreneurship, and preserves local arts and culture.",
            jp: "創造的経済・起業家精神の育成と、地域の芸術・文化の継承を図ります。"
        },
        members: [
            { name: "Khalaf Aidil Muzhaffar", role: { id: "Anggota", en: "Member", jp: "メンバー" } }
        ]
    },
    sistem: {
        icon: "fas fa-laptop-code",
        title: { id: "SISTEM INFORMASI DIGITAL", en: "DIGITAL INFO SYSTEM", jp: "デジタル情報システム" },
        desc: {
            id: "Membangun dan merawat sistem informasi digital (website, aplikasi, dan basis data) organisasi.",
            en: "Builds and maintains the organization's digital information systems (website, applications, and databases).",
            jp: "組織のデジタル情報システム（ウェブサイト・アプリ・データベース）を構築・保守します。"
        },
        members: [
            { name: "Arif Permana Putrasuryana (RT.1)", role: { id: "Ketua Pelaksana", en: "Executive Chairman", jp: "実行委員長" } }
        ]
    }
};
