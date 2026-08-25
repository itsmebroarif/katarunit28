/**
 * FILE DATA PROFIL TIM INTI & KOMPONEN PENDUKUNG "SIAPA KAMI"
 * Edit secara manual (hardcode):
 *  - coreTeam   : 6 profil inti (berbeda dari tampilan divisi), tiap orang punya
 *                 name, rt, role (id/en/jp), dan photo (URL gambar).
 *  - aboutStats : deretan angka statistik pendukung.
 *  - aboutValues: kartu Visi / Misi / Nilai pendukung.
 */

const coreTeam = [
  {
    name: "Arif Permana Putrasuryana (RT.1)",
    rt: "RT.1",
    role: { id: "Ketua Pelaksana", en: "Executive Chairman", jp: "実行委員長" },
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxLABLeNWEdMZ3hlYuXjQO4zBAFwTqfIf6JsMOnJRy7oRFGsPPiKPyH864&s=10",
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
    name: "Syahwaulia Oktaviandri",
    rt: "RT.2",
    role: { id: "Sekretaris", en: "Secretary", jp: "秘書" },
    photo: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Syahwaulia",
  },
  {
    name: "Salwa",
    rt: "RT.1",
    role: { id: "Bendahara", en: "Treasurer", jp: "会計" },
    photo: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Salwa",
  },
  {
    name: "Faradillah Eka",
    rt: "RT.1",
    role: { id: "Sekretaris 2", en: "Vice Secretary", jp: "副秘書" },
    photo: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Faradillah",
  },
  {
    name: "Aqilla",
    rt: "RT.1",
    role: { id: "Wakil Bendahara", en: "Vice Treasurer", jp: "副会計" },
    photo: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Aqilla",
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
