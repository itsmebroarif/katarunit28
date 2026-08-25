/**
 * FILE DATA QUEST / MISI
 * Tambah quest cukup dengan menyalin satu blok object di dalam array dan
 * mengisi field berikut:
 *  - id        : unik, tanpa spasi (untuk keperluan teknis)
 *  - icon      : class Font Awesome
 *  - title     : judul quest per bahasa (id, en, jp)
 *  - desc      : deskripsi quest per bahasa
 *  - datetime  : waktu pelaksanaan (bebas, mis. "2026-08-17 08:00" / "Setiap Minggu")
 *  - location  : tempat pelaksanaan
 *  - pic       : penanggung jawab (Person In Charge)
 * Urutan di dalam array = urutan tampil di website.
 */
const questData = [
    {
        id: "tujuhbelasan",
        icon: "fas fa-flag",
        title: { id: "PERSIAPAN TUJUH BELASAN", en: "INDEPENDENCE DAY PREP", jp: "独立記念日の準備" },
        desc: {
            id: "Menyiapkan berbagai perlombaan dan acara untuk merayakan hari kemerdekaan.",
            en: "Preparing various competitions and events to celebrate independence day.",
            jp: "独立記念日を祝うための様々な競技やイベントの準備。"
        },
        datetime: "2026-08-17 08:00",
        location: "Lapangan Bojong Lio",
        pic: "Arif Permana Putrasuryana"
    },
    {
        id: "kerjabakti",
        icon: "fas fa-hands-helping",
        title: { id: "KERJA BAKTI BERSAMA", en: "COMMUNITY CLEANUP", jp: "地域清掃" },
        desc: {
            id: "Membersihkan lingkungan desa bersama-sama untuk kenyamanan bersama.",
            en: "Cleaning the village environment together for mutual comfort.",
            jp: "互いの快適さのために村の環境を一緒に掃除する。"
        },
        datetime: "Setiap Minggu",
        location: "Lingkungan Kampung Bojong Lio",
        pic: "Anggota Utama"
    }
];
