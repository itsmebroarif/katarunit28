/**
 * FILE DATA PROFIL TIM INTI & KOMPONEN PENDUKUNG "SIAPA KAMI"
 * Edit secara manual (hardcode):
 *  - coreTeam        : 6 profil inti (berbeda dari tampilan divisi), tiap orang punya
 *                      name, rt, role (id/en/jp), dan photo (URL gambar).
 *  - chairmanProfile : bio "Tentang Ketua Pelaksana" + link profil utama.
 *  - aboutStats      : deretan angka statistik pendukung.
 *  - aboutValues     : kartu Visi / Misi / Nilai pendukung.
 */

const coreTeam = [
  {
    name: "Arif Permana Putrasuryana (RT.1)",
    rt: "RT.1",
    role: { id: "Ketua Pelaksana", en: "Executive Chairman", jp: "実行委員長" },
    photo: "assets/image/img_arif.jpg",
  },
  {
    name: "Syahwaulia Oktaviandri",
    rt: "RT.2",
    role: { id: "Sekretaris", en: "Secretary", jp: "秘書" },
    photo: "assets/image/img_syahwaulia.jpg",
  },
  {
    name: "Salwa",
    rt: "RT.1",
    role: { id: "Bendahara", en: "Treasurer", jp: "会計" },
    photo: "assets/image/salwa.jpg",
  },
  {
    name: "Arif (Bono)",
    rt: "RT.1",
    role: {
      id: "Wakil Ketua Pelaksana",
      en: "Vice Executive Chairman",
      jp: "副実行委員長",
    },
    photo: "https://api.dicebear.com/7.x/pixel-art/svg?seed=ArifBono",
  },
  {
    name: "Faradillah Eka",
    rt: "RT.1",
    role: { id: "Sekretaris 2", en: "Vice Secretary", jp: "副秘書" },
    photo: "assets/image/faradilla.jpg",
  },
  {
    name: "Aqilla",
    rt: "RT.1",
    role: { id: "Wakil Bendahara", en: "Vice Treasurer", jp: "副会計" },
    photo: "assets/image/aqilla.jpeg",
  },
];

const aboutStats = [
  { num: "16+", label: { id: "Anggota", en: "Members", jp: "メンバー" } },
  { num: "7", label: { id: "Divisi", en: "Divisions", jp: "部門" } },
  {
    num: "2+",
    label: { id: "Quest Aktif", en: "Active Quests", jp: "進行中クエスト" },
  },
  { num: "2026", label: { id: "Sejak", en: "Since", jp: "創設" } },
];

const aboutValues = [
  {
    icon: "fas fa-bullseye",
    title: { id: "Visi", en: "Vision", jp: "ビジョン" },
    desc: {
      id: "Menjadi wadah pemuda yang aktif, kreatif, dan gotong royong demi Bojong Lio yang lebih baik.",
      en: "To be an active, creative, and cooperative youth hub for a better Bojong Lio.",
      jp: "より良いボジョン・リオのために、活動的で創造的・協力的な青年の拠点となる。",
    },
  },
  {
    icon: "fas fa-hands-helping",
    title: { id: "Misi", en: "Mission", jp: "ミッション" },
    desc: {
      id: "Menyelenggarakan kegiatan sosial, pelatihan vokasi, dan digitalisasi untuk warga.",
      en: "Running social activities, vocational training, and digitalization for residents.",
      jp: "住民のための社会活動・職業訓練・デジタル化を推進する。",
    },
  },
  {
    icon: "fas fa-star",
    title: { id: "Nilai", en: "Values", jp: "価値観" },
    desc: {
      id: "Kolaborasi, kekeluargaan, dan terus belajar hal baru bersama.",
      en: "Collaboration, togetherness, and continuously learning new things.",
      jp: "協力・家族の絆・共に学び続けること。",
    },
  },
];

const chairmanProfile = {
    name: "Arif Permana Putrasuryana",
    alias: "itsmebroarif",
    role: {
        id: "Ketua Karang Taruna Unit 28 Bojong Lio & Pakar Teknologi Digital",
        en: "Chairman of Karang Taruna Unit 28 Bojong Lio & Digital Technology Expert",
        jp: "Karang Taruna Unit 28 Bojong Lio 会長 & デジタル技術の専門家"
    },
    photo: "assets/image/img_arif.jpg",
    profileUrl: "https://itsmebroarif-apps.vercel.app/#hero",
    bio: [
        {
            title: { id: "PROFIL PEMIMPIN KOMUNITAS", en: "COMMUNITY LEADER PROFILE", jp: "コミュニティリーダーのプロフィール" },
            desc: {
                id: "Arif, yang dikenal secara luas di dunia digital dengan identitas itsmebroarif, adalah seorang pengabdi masyarakat yang berdedikasi tinggi di Depok, Jawa Barat.",
                en: "Arif, widely known in the digital world as itsmebroarif, is a highly dedicated public servant based in Depok, West Java.",
                jp: "itsmebroarifとしてデジタル世界で広く知られるArifは、西ジャワ州デポックを拠点とする献身的な社会貢献者です。"
            }
        },
        {
            title: { id: "KETUA KARANG TARUNA UNIT 28 BOJONG LIO, DEPOK", en: "CHAIRMAN OF KARANG TARUNA UNIT 28 BOJONG LIO", jp: "Karang Taruna Unit 28 会長" },
            desc: {
                id: "Memimpin organisasi kepemudaan di tingkat lokal dengan visi besar untuk menggerakkan potensi generasi muda. Di bawah kepemimpinannya, ia aktif menciptakan sinergi antar pemuda untuk membangun lingkungan yang lebih produktif dan inovatif.",
                en: "Leads a local youth organization with a grand vision to mobilize the potential of the younger generation. Under his leadership, he actively creates youth synergy to build a more productive and innovative environment.",
                jp: "若い世代の可能性を動かす大きなビジョンを持つ地域青年組織を率いています。生産的で革新的な環境づくりのため、青年同士の連携を積極的に生み出しています。"
            }
        },
        {
            title: { id: "PEMBERDAYAAN PEMUDA BERBASIS DIGITAL", en: "DIGITAL-BASED YOUTH EMPOWERMENT", jp: "デジタルによる若者のエンパワーメント" },
            desc: {
                id: "Memanfaatkan latar belakang teknologinya untuk melakukan digitalisasi pada kegiatan kepemudaan. Arif berfokus pada program edukasi positif dan pembekalan keterampilan digital (digital skill-up) bagi remaja di Bojong Lio agar mereka memiliki kesiapan kerja yang relevan di era modern.",
                en: "Leverages his technology background to digitize youth activities. Arif focuses on positive education programs and digital skill-up training for Bojong Lio teens so they are work-ready in the modern era.",
                jp: "技術のバックグラウンドを活かし、青年活動のデジタル化を推進。ボジョン・リオの10代向けにポジティブな教育とデジタルスキル向上のプログラムに注力しています。"
            }
        }
    ]
};
