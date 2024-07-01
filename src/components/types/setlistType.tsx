export type setlistType = {
  id: string;
  nama_setlist: string;
  dibawakan_oleh: string;
  lagu: {
    judul_lagu: string;
    lirik: string[];
  }[];
};
