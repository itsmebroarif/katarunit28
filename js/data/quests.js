/**
 * FILE DATA QUEST / MISI
 * Tambah quest cukup dengan menyalin satu blok object di dalam array dan
 * mengisi field berikut:
 *  - id        : unik, tanpa spasi (untuk keperluan teknis)
 *  - icon      : class Font Awesome
 *  - title     : judul quest per bahasa (id, en, jp)
 *  - desc      : deskripsi quest per bahasa
 *  - datetime  : waktu tampil di kartu (bebas, mis. "2026-08-17 08:00")
 *  - startDate : tanggal mulai (YYYY-MM-DD) -> untuk hitung STATUS otomatis
 *  - endDate   : tanggal selesai (YYYY-MM-DD) -> untuk hitung STATUS otomatis
 *  - location  : tempat pelaksanaan
 *  - pic       : penanggung jawab (Person In Charge)
 *
 * STATUS OTOMATIS berdasarkan tanggal hari ini:
 *  - hari ini < startDate          -> "AKAN BERJALAN" (upcoming)
 *  - startDate <= hari ini <= end  -> "SEDANG BERJALAN" (ongoing)
 *  - hari ini > endDate            -> "SUDAH BERJALAN" (done)
 */
const questData = [
  {
    id: "tujuhbelasan",
    icon: "fas fa-flag",
    title: {
      id: "PERSIAPAN TUJUH BELASAN",
      en: "INDEPENDENCE DAY PREP",
      jp: "独立記念日の準備",
    },
    desc: {
      id: "Menyiapkan berbagai perlombaan dan acara untuk merayakan hari kemerdekaan.",
      en: "Preparing various competitions and events to celebrate independence day.",
      jp: "独立記念日を祝うための様々な競技やイベントの準備。",
    },
    datetime: "2026-08-17 08:00",
    startDate: "2026-08-01",
    endDate: "2026-08-17",
    location: "Lapangan Bojong Lio",
    pic: "Arif Permana Putrasuryana",
  },
  {
    id: "minisoccer",
    icon: "fas fa-futbol",
    title: {
      id: "MINI SOCCER RW.028",
      en: "MINI SOCCER RW.028",
      jp: "ミニサッカー RW.028",
    },
    desc: {
      id: "Turnamen mini soccer antar warga RW.028 yang penuh semangat dan kekompakan.",
      en: "A spirited mini soccer tournament among RW.028 residents.",
      jp: "RW.028住民による熱いミニサッカー大会。",
    },
    datetime: "2026-09-12 08:00",
    startDate: "2026-09-12",
    endDate: "2026-09-12",
    location: " BSS Arena Mini Soccer Depok",
    pic: "Arif Permana Putrasuryana",
  },
];
