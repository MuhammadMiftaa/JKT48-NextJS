import { z } from "zod";

export const MemberSchemaZod = z.object({
  nama: z.string(),
  nama_lengkap: z.string(),
  nama_panggilan: z.string(),
  generasi: z.number().max(20).min(1),
  kabesha: z.string(),
  foto: z.string(),
  umur: z.number().max(30).min(10),
  asal: z.string(),
  tanggal_lahir: z.string(),
  kota_lahir: z.string(),
  member_regular: z
    .union([z.boolean(), z.string()])
    .transform((val) => (typeof val === "string" ? val === "true" : val)),
  salam_perkenalan: z.string(),
  tanggal_bergabung: z.string(),
  fanbase: z.string(),
  universitas: z.string(),
  jurusan: z.string(),
  username_idn: z.string(),
  username_ig: z.string(),
  username_sr: z.string(),
  username_tiktok: z.string(),
  username_x: z.string(),
});

export type MemberTypeZod = z.infer<typeof MemberSchemaZod>;
