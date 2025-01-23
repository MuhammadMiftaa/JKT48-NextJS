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
