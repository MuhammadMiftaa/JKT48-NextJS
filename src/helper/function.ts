export function formatDateToReadable(date: string): string {
  // Nama hari dalam bahasa Indonesia
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  // Nama bulan dalam bahasa Indonesia
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Ubah string date menjadi objek Date
  const dateObj = new Date(date);

  // Ambil nama hari, tanggal, bulan, dan tahun
  const dayName = days[dateObj.getDay()];
  const day = dateObj.getDate();
  const monthName = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  // Gabungkan menjadi format "Kamis, 23 Januari 2025"
  return `${dayName}, ${day} ${monthName} ${year}`;
}

export function generatePlaceholder(label: string): string {
  switch (label) {
    case "nama":
      return "Abigail Rachel";
    case "nama_lengkap":
      return "Abigail Rachel";
    case "nama_panggilan":
      return "Aralie, Ayayi";
    case "generasi":
      return "12";
    case "foto":
      return "https://example.com/abigail-rachel.jpg";
    case "umur":
      return "17";
    case "asal":
      return "Jakarta";
    case "tanggal_lahir":
      return "06 August 2008";
    case "kota_lahir":
      return "Jakarta";
    case "salam_perkenalan":
      return "Seperti bunga yang mekar, aku akan membuat kamu, kamu, dan kamu terbayang-bayang. Aku Ara-Aralie. Halo semuanya, nama aku Aralie ya!";
    case "tanggal_bergabung":
      return "18 November 2023";
    case "fanbase":
      return "Arariel";
    case "universitas":
      return "Universitas Indonesia";
    case "jurusan":
      return "Ilmu Komunikasi";
    case "username_idn":
      return "Aralie JKT48";
    case "username_ig":
      return "jkt48.aralie";
    case "username_sr":
      return "Aralie / アラリー (JKT48)";
    case "username_tiktok":
      return "jkt48.aralie";
    case "username_x":
      return "Aralie_JKT48";
    default:
      return "";
  }
}
