/**
 * FILE DATA HEADSPACE MEMORIES (GALERI KENANGAN & PROGRAM)
 * Edit kategori, ikon, sub-kategori, dan penjelasannya secara manual.
 * - icon    : class Font Awesome
 * - title   : judul kategori per bahasa (id, en, jp)
 * - desc    : penjelasan kategori per bahasa
 * - sub     : array sub-kategori, masing-masing punya name, desc (per bahasa)
 *             dan items (array poin konten, dalam Bahasa Indonesia)
 * Catatan: kategori "Kegiatan Umum" dipindah ke section EVENT (js/data/events.js).
 */
const memoryData = {
  pendidikan: {
    icon: "fas fa-graduation-cap",
    title: { id: "PENDIDIKAN", en: "EDUCATION", jp: "教育" },
    desc: {
      id: "Ruang belajar & pelatihan keterampilan warga. Fokus pada pendidikan kejuruan (vokasi) yang masih relevan dan dibutuhkan dari 2026 hingga 2026.",
      en: "Learning and skills-training space for residents, focusing on vocational skills relevant from 2026 to 2026.",
      jp: "住民の学習・スキル訓練の場。2026年から2026年まで求められる職業技術に焦点。",
    },
    sub: [
      {
        name: {
          id: "Teknologi Informasi & Digital",
          en: "IT & Digital",
          jp: "IT・デジタル",
        },
        desc: {
          id: "Keterampilan dasar hingga lanjutan di dunia digital yang makin dibutuhkan.",
          en: "Basic to advanced digital skills that are increasingly needed.",
          jp: "ますます必要とされるデジタルスキル。",
        },
        items: [
          "Pengembangan Web & Mobile (Front-end & Back-end)",
          "Desain UI/UX",
          "Analisis Data & Visualisasi",
          "Dasar Kecerdasan Buatan & Machine Learning",
          "Cloud Computing & DevOps dasar",
          "Keamanan Siber (Cybersecurity)",
        ],
      },
      {
        name: {
          id: "Teknik & Ketahanan",
          en: "Engineering & Resilience",
          jp: "技術・防災",
        },
        desc: {
          id: "Keterampilan teknik praktis dan ramah lingkungan.",
          en: "Practical and eco-friendly technical skills.",
          jp: "実践的で環境にやさしい技術スキル。",
        },
        items: [
          "Perakitan & Perawatan Komputer",
          "Teknisi Kendaraan Listrik (EV)",
          "Instalasi Panel Surya / Energi Terbarukan",
          "Cetak 3D & Prototyping (Maker)",
          "Internet of Things (IoT) Rumahan",
        ],
      },
      {
        name: {
          id: "Bisnis & Kewirausahaan Digital",
          en: "Digital Business",
          jp: "デジタル起業",
        },
        desc: {
          id: "Keterampilan berjualan dan berbisnis di era digital.",
          en: "Selling and doing business in the digital era.",
          jp: "デジタル時代の販売・起業スキル。",
        },
        items: [
          "Digital Marketing & SEO",
          "Manajemen Toko Online (E-commerce)",
          "Pembuatan Konten & Editing Video",
          "Freelancing & Portofolio Digital",
          "Keuangan & Akuntansi UMKM",
        ],
      },
      {
        name: {
          id: "Kesehatan & Perawatan Sosial",
          en: "Health & Care",
          jp: "保健・介護",
        },
        desc: {
          id: "Keterampilan dasar penanganan kesehatan dan sosial.",
          en: "Basic health and social care skills.",
          jp: "保健・介護の基礎スキル。",
        },
        items: [
          "Bantuan Hidup Dasar (BHD/CPR)",
          "Asisten Tenaga Kesehatan",
          "Promosi Gizi & Sanitasi",
        ],
      },
      {
        name: {
          id: "Seni, Desain & Kreatif",
          en: "Arts, Design & Creative",
          jp: "芸術・デザイン",
        },
        desc: {
          id: "Keterampilan ekspresi dan produksi karya kreatif.",
          en: "Expression and creative production skills.",
          jp: "表現・クリエイティブ制作スキル。",
        },
        items: [
          "Desain Grafis & Branding",
          "Animasi & Ilustrasi Digital",
          "Fotografi & Videografi",
        ],
      },
    ],
  },
  keamanan: {
    icon: "fas fa-shield-alt",
    title: { id: "KEAMANAN", en: "SECURITY", jp: "セキュリティ" },
    desc: {
      id: "Upaya menjaga ketertiban, kesiapsiagaan, dan keamanan warga.",
      en: "Efforts to maintain order, preparedness, and residents' safety.",
      jp: "秩序・備え・住民の安全を守る取り組み。",
    },
    sub: [
      {
        name: {
          id: "Ketertiban Lingkungan",
          en: "Public Order",
          jp: "地域の秩序",
        },
        desc: {
          id: "Menjaga keamanan dan arus kegiatan di lingkungan.",
          en: "Keeping the environment safe and orderly.",
          jp: "環境の安全と秩序を維持。",
        },
        items: [
          "Ronda & Patroli Kampung",
          "Pengaturan Lalu Lintas Acara",
          "Penanganan Kebakaran Dasar (Damkar)",
        ],
      },
      {
        name: {
          id: "Kesiapsiagaan Bencana",
          en: "Disaster Preparedness",
          jp: "防災",
        },
        desc: {
          id: "Mitigasi dan tanggap darurat saat bencana.",
          en: "Mitigation and emergency response during disasters.",
          jp: "災害時の軽減と緊急対応。",
        },
        items: [
          "Mitigasi Banjir/Rob",
          "Posko Tanggap Darurat",
          "Simulasi Evakuasi",
        ],
      },
    ],
  },
  kesehatan: {
    icon: "fas fa-heartbeat",
    title: { id: "KESEHATAN", en: "HEALTH", jp: "健康" },
    desc: {
      id: "Program menjaga kesehatan fisik, mental, dan lingkungan warga.",
      en: "Programs to maintain residents' physical, mental, and environmental health.",
      jp: "住民の心身・環境の健康を守るプログラム。",
    },
    sub: [
      {
        name: {
          id: "Kesehatan Preventif",
          en: "Preventive Health",
          jp: "予防保健",
        },
        desc: {
          id: "Pencegahan sejak dini melalui kegiatan rutin.",
          en: "Early prevention through routine activities.",
          jp: "日常活動による予防。",
        },
        items: ["Posyandu & Imunisasi", "Senam Warga & Gizi Seimbang"],
      },
      {
        name: { id: "Kesehatan Mental", en: "Mental Health", jp: "心の健康" },
        desc: {
          id: "Dukungan dan edukasi kesejahteraan mental.",
          en: "Support and education for mental well-being.",
          jp: "心のケアと啓発。",
        },
        items: ["Kelompok Dukungan Sebaya", "Edukasi Stigma & Well-being"],
      },
      {
        name: {
          id: "Sanitasi & Lingkungan",
          en: "Sanitation & Environment",
          jp: "衛生・環境",
        },
        desc: {
          id: "Kebersihan lingkungan untuk hidup sehat.",
          en: "Environmental cleanliness for healthy living.",
          jp: "健康な暮らしのための環境清潔。",
        },
        items: ["Kerja Bakti Kebersihan", "Pengelolaan Sampah (3R)"],
      },
    ],
  },
};
