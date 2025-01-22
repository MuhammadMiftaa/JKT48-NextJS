type deleted = {
  isDeleted: boolean;
  deletedAt: string;
  description: string
}

export type memberType = {
  id?: string;
  nama: string;
  nama_lengkap: string;
  nama_panggilan: string;
  generasi: number;
  foto: string;
  umur: number;
  asal: string;
  tanggal_lahir: string;
  kota_lahir: string;
  member_regular: boolean;
  salam_perkenalan: string;
  tanggal_bergabung: string;
  fanbase: string;
  universitas: string;
  jurusan: string;
  username_idn: string;
  username_ig: string;
  username_sr: string;
  username_tiktok: string;
  username_x: string;
  deleted: deleted;
};
