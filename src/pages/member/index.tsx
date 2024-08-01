// import "../member/index.module.scss"
import Loading from "@/components/elements/Loading";
import { memberType } from "@/components/types/memberType";
import useSWR from "swr";
import MemberCards from "@/components/layouts/MemberCards";
import { ChangeEventHandler, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function MemberPage() {
  // const [member, setMember] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/memberData")
  //     .then((res) => res.json())
  //     .then((data) => setMember(data.data));
  // }, []);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/data-member/member", fetcher);
  const dataMember: memberType[] = isLoading
    ? [
        {
          id: "Abigail-Rachel",
          member_regular: false,
          umur: 16,
          username_sr: "Aralie / アラリー (JKT48)",
          username_x: "Aralie_JKT48",
          username_tiktok: "jkt48.aralie",
          nama_lengkap: "Abigail Rachel Lie",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.aralie",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 12,
          username_idn: "Aralie JKT48",
          foto: "https://jkt48.com/profile/abigail_rachel.jpg?v=20230116",
          nama: "Abigail Rachel",
          fanbase: "Aralie",
          nama_panggilan: "Aralie",
          salam_perkenalan:
            "Seperti bunga yang mekar, aku akan membuat kamu, kamu, dan kamu terbayang-bayang. Aku Ara-Aralie. Halo semuanya, nama aku Aralie ya!",
          tanggal_lahir: "06 August 2008",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Adeline-Wijaya",
          member_regular: false,
          umur: 17,
          username_sr: "Delynn / デリンヌ (JKT48)",
          username_x: "Delynn_JKT48",
          username_tiktok: "jkt48.delynn",
          nama_lengkap: "Adeline Wijaya",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.delynn",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 12,
          username_idn: "Delynn JKT48",
          foto: "https://jkt48.com/profile/adeline_wijaya.jpg?v=20230116",
          nama: "Adeline Wijaya",
          fanbase: "Adeliner",
          nama_panggilan: "Delynn",
          salam_perkenalan:
            "Nyemangatin dan ngangenin, siapa yang kamu pikirin? Delynn! Pyong! Pyong! Aku Delynn!",
          tanggal_lahir: "01 September 2007",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Alya-Amanda",
          member_regular: false,
          umur: 18,
          username_sr: "Alya / アリア (JKT48)",
          username_x: "AA_AlyaJKT48",
          username_tiktok: "alyajkt48",
          nama_lengkap: "Alya Amanda Fatihah",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.alya_",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 11,
          username_idn: "Alya  JKT48",
          foto: "https://jkt48.com/profile/alya_amanda.jpg?v=20230116",
          nama: "Alya Amanda",
          fanbase: "Alamanda",
          nama_panggilan: "Alya",
          salam_perkenalan:
            "Jika hatimu sedang menangis, aku akan datang sebagai pelangi! Hai aku Alya!",
          tanggal_lahir: "26 August 2006",
          tanggal_bergabung: "31 Oktober 2022",
        },
        {
          id: "Amanda-Sukma",
          member_regular: true,
          umur: 20,
          username_sr: "Amanda / アマンダ (JKT48)",
          username_x: "PS_AmandaJKT48",
          username_tiktok: "jkt48.amanda.s",
          nama_lengkap: "Amanda Puspita Sukma Mulyadewi",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.amanda.s",
          asal: "Bandung",
          kota_lahir: "Malang",
          generasi: 10,
          username_idn: "Amanda JKT48",
          foto: "https://jkt48.com/profile/amanda_sukma.jpg?v=20230116",
          nama: "Amanda Sukma",
          fanbase: "Mandaffection",
          nama_panggilan: "Amanda, Manda, Mandut",
          salam_perkenalan:
            "Brum brum! Melaju cepat bagai motor 1000cc! Aku si gadis penyuka motor. Halo semuanya aku Amanda.",
          tanggal_lahir: "17 December 2004",
          tanggal_bergabung: "18 Desember 2021",
        },
        {
          id: "Angelina-Christy",
          member_regular: true,
          umur: 19,
          username_sr: "Christy / クリスティー (JKT48)",
          username_x: "A_ChristyJKT48",
          username_tiktok: "christyjkt48",
          nama_lengkap: "Angelina Christy",
          username_ig: "jkt48.christy",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 7,
          username_idn: "Christy JKT48",
          foto: "https://jkt48.com/profile/angelina_christy.jpg?v=20230116",
          nama: "Angelina Christy",
          fanbase: "Christyzer",
          nama_panggilan: "Christy, Angel, Kitoy, Toya",
          salam_perkenalan:
            "Peduli dan berbaik hati, siapakah dia? Chris.. (ty!) Halo semuanya aku Christy.",
          tanggal_lahir: "05 December 2005",
          tanggal_bergabung: "29 September 2018",
          universitas: "Institut Komunikasi Dan Bisnis Lspr",
          jurusan: "Ilmu Komunikasi",
        },
        {
          id: "Anindya-Ramadhani",
          member_regular: false,
          umur: 19,
          username_sr: "Anindya / アニンディア (JKT48)",
          username_x: "AR_AnindyaJKT48",
          username_tiktok: "anindyajkt48",
          nama_lengkap: "Anindya Ramadhani Purnomo",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.anindya_",
          asal: "Jakarta",
          kota_lahir: "Depok",
          generasi: 11,
          username_idn: "Anindya  JKT48",
          foto: "https://jkt48.com/profile/anindya_ramadhani.jpg?v=20230116",
          nama: "Anindya Ramadhani",
          fanbase: "Aninimous",
          nama_panggilan: "Anindya, Anin",
          salam_perkenalan: "Si mungil hadir, semanis mangga! Hai aku Anindya!",
          tanggal_lahir: "18 October 2005",
          tanggal_bergabung: "31 Oktober 2022",
        },
        {
          id: "Aurellia",
          member_regular: true,
          umur: 22,
          username_sr: "Lia / リア (JKT48)",
          username_x: "AU_LiaJKT48",
          username_tiktok: "jkt48.aurellia_",
          nama_lengkap: "Aurellia",
          universitas: "Sekolah Tinggi Ilmu Ekonomi Trisakti",
          jurusan: "Akuntansi",
          username_ig: "jkt48.aurellia_",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 10,
          username_idn: "Lia JKT48",
          foto: "https://jkt48.com/profile/aurellia.jpg?v=20230116",
          nama: "Aurellia",
          fanbase: "Liamelior",
          nama_panggilan: "Lia, Oreli, Coach Lia",
          salam_perkenalan:
            "Si social butterfly yang energik dan periang! Halo semuanya nama aku Lia!",
          tanggal_lahir: "29 October 2002",
          tanggal_bergabung: "18 Desember 2021",
        },
        {
          id: "Aurhel-Alana",
          member_regular: false,
          umur: 18,
          username_sr: "Lana / ラナ (JKT48)",
          username_x: "AR_LanaJKT48",
          username_tiktok: "jkt48.lana",
          nama_lengkap: "Aurhel Alana Tirta",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.lana.a",
          asal: "Bekasi",
          kota_lahir: "Bekasi",
          generasi: 12,
          username_idn: "Lana JKT48",
          foto: "https://jkt48.com/profile/aurhel_alana.jpg?v=20230116",
          nama: "Aurhel Alana",
          fanbase: "Lanautica",
          nama_panggilan: "Lana",
          salam_perkenalan:
            "Dengan kekuatan bulan, aku akan menyihirmu dengan pesonaku! Halo semuanya, nama aku Lana!",
          tanggal_lahir: "14 September 2006",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Azizi-Asadel",
          member_regular: true,
          umur: 20,
          username_sr: "Zee / ジー (JKT48)",
          username_x: "A_ZeeJKT48",
          username_tiktok: "zeejkt48",
          nama_lengkap: "Azizi Shafaa Asadel",
          universitas: "Universitas Terbuka",
          jurusan: "Ilmu Komunikasi",
          username_ig: "jkt48.zee",
          asal: "Tangerang",
          kota_lahir: "Jakarta",
          generasi: 7,
          username_idn: "Zee JKT48",
          foto: "https://jkt48.com/profile/azizi_asadel.jpg?v=20230116",
          nama: "Azizi Asadel",
          fanbase: "Zeemotion",
          nama_panggilan: "Zee, Azizi, Zizoy, Zoya",
          salam_perkenalan:
            "Si gadis tomboi yang semangatnya meletup-letup! Panggil aku Zee!",
          tanggal_lahir: "16 May 2004",
          tanggal_bergabung: "29 September 2018",
        },
        {
          id: "Callista-Alifia",
          member_regular: true,
          umur: 19,
          username_sr: "Callie / カリー (JKT48)",
          username_x: "AW_CallieJKT48",
          username_tiktok: "jkt48.callie.a",
          nama_lengkap: "Callista Alifia Wardhana",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.callie.a",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 10,
          username_idn: "Callie JKT48",
          foto: "https://jkt48.com/profile/callista_alifia.jpg?v=20230116",
          nama: "Callista Alifia",
          fanbase: "Callistavers",
          nama_panggilan: "Callie, Keli",
          salam_perkenalan:
            "Si beruang madu, penyuka madu! Hai semuanya aku Callie!",
          tanggal_lahir: "08 August 2005",
          tanggal_bergabung: "18 Desember 2021",
        },
        {
          id: "Catherina-Vallencia",
          member_regular: false,
          umur: 17,
          username_sr: "Erine / エリン (JKT48)",
          username_x: "CErine_JKT48",
          username_tiktok: "jkt48.erine_",
          nama_lengkap: "Catherina Vallencia Kurniawan",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.erine",
          asal: "Bekasi",
          kota_lahir: "Bekasi",
          generasi: 12,
          username_idn: "Erine JKT48",
          foto: "https://jkt48.com/profile/catherina_vallencia.jpg?v=20230116",
          nama: "Catherina Vallencia",
          fanbase: "Cavallery",
          nama_panggilan: "Erine",
          salam_perkenalan:
            "Hanya dengan seribu kejutan, checkmate! Siap memenangkan hatimu! Halo semuanya namaku Erine!",
          tanggal_lahir: "21 August 2007",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Cathleen-Nixie",
          member_regular: false,
          umur: 15,
          username_sr: "Cathy / キャシー (JKT48)",
          username_x: "N_CathyJKT48",
          username_tiktok: "cathyjkt48",
          nama_lengkap: "Cathleen Hana Nixie",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.cathy",
          asal: "Jakarta",
          kota_lahir: "Surabaya",
          generasi: 11,
          username_idn: "Cathy  JKT48",
          foto: "https://jkt48.com/profile/cathleen_nixie.jpg?v=20230116",
          nama: "Cathleen Nixie",
          fanbase: "Cathleennexus",
          nama_panggilan: "Cathy",
          salam_perkenalan:
            "Tring! Si peri cantik jelita, itulah aku! Hai semuanya, namaku Cathy!",
          tanggal_lahir: "28 May 2009",
          tanggal_bergabung: "31 Oktober 2022",
        },
        {
          id: "Celline-Thefani",
          member_regular: false,
          umur: 17,
          username_sr: "Elin / エリン (JKT48)",
          username_x: "Elin_JKT48",
          username_tiktok: "elinjkt48",
          nama_lengkap: "Celline Thefannie",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.elin_",
          asal: "Jakarta",
          kota_lahir: "Tangerang",
          generasi: 11,
          username_idn: "Elin  JKT48",
          foto: "https://jkt48.com/profile/celline_thefani.jpg?v=20230116",
          nama: "Celline Thefani",
          fanbase: "Cellineyours",
          nama_panggilan: "Elin",
          salam_perkenalan:
            "Semanis permen kapas dan seindah bunga lavender. Hola, perkenalkan namaku Elin.",
          tanggal_lahir: "09 April 2007",
          tanggal_bergabung: "31 Oktober 2022",
        },
        {
          id: "Chelsea-Davina",
          member_regular: false,
          umur: 15,
          username_sr: "Chelsea / チェルシー (JKT48)",
          username_x: "DC_ChelseaJKT48",
          username_tiktok: "_chelseajkt48",
          nama_lengkap: "Chelsea Davina Norman",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.chelsea.d",
          asal: "Sydney",
          kota_lahir: "Sydney",
          generasi: 11,
          username_idn: "Chelsea  JKT48",
          foto: "https://jkt48.com/profile/chelsea_davina.jpg?v=20230116",
          nama: "Chelsea Davina",
          fanbase: "Chelsealand",
          nama_panggilan: "Chelsea",
          salam_perkenalan:
            "As bright as a shooting star in the starry night sky. Hai semua, aku Chelsea!",
          tanggal_lahir: "23 December 2009",
          tanggal_bergabung: "31 Oktober 2022",
        },
        {
          id: "Cornelia-Vanisa",
          member_regular: true,
          umur: 22,
          username_sr: "Oniel / オニエル (JKT48)",
          username_x: "C_OnielJKT48",
          username_tiktok: "onieljkt48",
          nama_lengkap: "Cornelia Syafa Vanisa",
          universitas: "Universitas Pamulang",
          jurusan: "Sastra Inggris",
          username_ig: "jkt48.oniel",
          asal: "Tangerang",
          kota_lahir: "Tangerang",
          generasi: 8,
          username_idn: "Oniel JKT48",
          foto: "https://jkt48.com/profile/cornelia_vanisa.jpg?v=20230116",
          nama: "Cornelia Vanisa",
          fanbase: "Onielity",
          nama_panggilan: "Oniel",
          salam_perkenalan:
            "Seperti teka-teki yang akan membuat kalian selalu penasaran denganku! Aku Oniel!",
          tanggal_lahir: "26 July 2002",
          tanggal_bergabung: "27 April 2019",
        },
        {
          id: "Cynthia-Yaputera",
          member_regular: false,
          umur: 21,
          username_sr: "Cynthia / シンティア (JKT48)",
          username_x: "Y_CynthiaJKT48",
          username_tiktok: "cynthiajkt48",
          nama_lengkap: "Cynthia Yaputera",
          universitas: "Universitas Bina Nusantara",
          jurusan: "Desain Interior",
          username_ig: "jkt48.cynthia",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 11,
          username_idn: "Cynthia  JKT48",
          foto: "https://jkt48.com/profile/cynthia_yaputera.jpg?v=20230116",
          nama: "Cynthia Yaputera",
          fanbase: "Cynthiaction",
          nama_panggilan: "Cynthia, Ciput",
          salam_perkenalan:
            "Semangatku terus-menerus meluap, pop-pop! Halo aku Cynthia yang selalu semangat!",
          tanggal_lahir: "22 November 2003",
          tanggal_bergabung: "31 Oktober 2022",
        },
        {
          id: "Dena-Natalia",
          member_regular: false,
          umur: 19,
          username_sr: "Danella / ダネラ (JKT48)",
          username_x: "Danella_JKT48",
          username_tiktok: "danellajkt48",
          nama_lengkap: "Dena Natalia Ang",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.danella",
          asal: "Bandung",
          kota_lahir: "Bekasi",
          generasi: 11,
          username_idn: "Danella  JKT48",
          foto: "https://jkt48.com/profile/dena_natalia.jpg?v=20230116",
          nama: "Dena Natalia",
          fanbase: "Denalize",
          nama_panggilan: "Danella, Dena",
          salam_perkenalan:
            "Tok tok! Siapa? Si penari yang akan menarikmu ke duniaku. Hai, aku Danella.",
          tanggal_lahir: "16 December 2005",
          tanggal_bergabung: "31 Oktober 2022",
        },
        {
          id: "Desy-Natalia",
          member_regular: false,
          umur: 19,
          username_sr: "Daisy / デイシー (JKT48)",
          username_x: "Daisy_JKT48",
          username_tiktok: "daisyjkt48",
          nama_lengkap: "Desy Natalia Ang",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.daisy",
          asal: "Bandung",
          kota_lahir: "Bekasi",
          generasi: 11,
          username_idn: "Daisy  JKT48",
          foto: "https://jkt48.com/profile/desy_natalia.jpg?v=20230116",
          nama: "Desy Natalia",
          fanbase: "Daisynateur",
          nama_panggilan: "Daisy, Desy",
          salam_perkenalan:
            "Seperti bunga daisy, aku akan memancarkan kesegaran dan kebahagiaan! Hai hai, aku Daisy.",
          tanggal_lahir: "16 December 2005",
          tanggal_bergabung: "31 Oktober 2022",
        },
        {
          id: "Febriola-Sinambela",
          member_regular: true,
          umur: 19,
          username_sr: "Olla / オラ (JKT48)",
          username_x: "F_OllaJKT48",
          username_tiktok: "ollajkt48",
          nama_lengkap: "Febriola Sinambela",
          universitas: "Universitas Nasional",
          jurusan: "Ilmu Komunikasi",
          username_ig: "jkt48.olla",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 7,
          username_idn: "Olla JKT48",
          foto: "https://jkt48.com/profile/febriola_sinambela.jpg?v=20230116",
          nama: "Febriola Sinambela",
          fanbase: "Oracle (Olla the Miracle)",
          nama_panggilan: "Olla, Olali, Febri",
          salam_perkenalan:
            "Dengan keajaibanku aku akan membuat kalian semua selalu tertawa! Halo semuanya aku Olla, si mechanic girl!",
          tanggal_lahir: "26 February 2005",
          tanggal_bergabung: "29 September 2018",
        },
        {
          id: "Feni-Fitriyanti",
          member_regular: true,
          umur: 25,
          username_sr: "Feni / フェニ (JKT48)",
          username_x: "F_FeniJKT48",
          username_tiktok: "fenijkt48",
          nama_lengkap: "Feni Fitriyanti",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48feni",
          asal: "Cianjur",
          kota_lahir: "Cianjur",
          generasi: 3,
          username_idn: "Feni JKT48",
          foto: "https://jkt48.com/profile/feni_fitriyanti.jpg?v=20230116",
          nama: "Feni Fitriyanti",
          fanbase: "Fenidelity",
          nama_panggilan: "Feni, Mpen",
          salam_perkenalan:
            "Matahari yang indah, yang akan memberikan kehangatan di setiap harinya. Halo aku Feni.",
          tanggal_lahir: "16 January 1999",
          tanggal_bergabung: "15 Maret 2014",
        },
        {
          id: "Fiony-Alveria",
          member_regular: true,
          umur: 22,
          username_sr: "Fiony / フィオニー (JKT48)",
          username_x: "A_FionyJKT48",
          username_tiktok: "fionyjkt48",
          nama_lengkap: "Fiony Alveria Tantri",
          universitas: "Universitas Pelita Harapan",
          jurusan: "Desain Komunikasi Visual",
          username_ig: "jkt48.fiony",
          asal: "Tangerang",
          kota_lahir: "Jakarta",
          generasi: 8,
          username_idn: "Fiony JKT48",
          foto: "https://jkt48.com/profile/fiony_alveria.jpg?v=20230116",
          nama: "Fiony Alveria",
          fanbase: "Symfiony",
          nama_panggilan: "Fiony, Pio, Ce Pio",
          salam_perkenalan:
            "Seperti simfoni yang menenangkan hati, halo aku Fiony!",
          tanggal_lahir: "04 February 2002",
          tanggal_bergabung: "27 April 2019",
        },
        {
          id: "Flora-Shafiq",
          member_regular: true,
          umur: 19,
          username_sr: "Flora / フロラ (JKT48)",
          username_x: "S_FloraJKT48",
          username_tiktok: "florajkt48",
          nama_lengkap: "Flora Shafiqa Riyadi",
          username_ig: "jkt48.flora",
          asal: "Tangerang",
          kota_lahir: "Tangerang",
          generasi: 8,
          username_idn: "Flora JKT48",
          foto: "https://jkt48.com/profile/flora_shafiq.jpg?v=20230116",
          nama: "Flora Shafiq",
          fanbase: "FloRisen",
          nama_panggilan: "Flora, Flo",
          salam_perkenalan:
            "Mau ikut aku nggak? (Mau!) Ayo ikut ke dunia Flora! Simsalabim akan 'ku sulap hatimu menjadi berbunga-bunga! Halo semuanya, aku Flora!",
          tanggal_lahir: "04 April 2005",
          tanggal_bergabung: "27 April 2019",
          jurusan: "Sastra Jepang",
          universitas: "Universitas Nasional",
        },
        {
          id: "Freya-Jayawardana",
          member_regular: true,
          umur: 18,
          username_sr: "Freya / フレヤ (JKT48)",
          username_x: "Freya_JKT48",
          username_tiktok: "freyajkt48",
          nama_lengkap: "Freyanashifa Jayawardana",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.freya",
          asal: "Tangerang",
          kota_lahir: "Tangerang",
          generasi: 7,
          username_idn: "Freya JKT48",
          foto: "https://jkt48.com/profile/freya_jayawardana.jpg?v=20230116",
          nama: "Freya Jayawardana",
          fanbase: "Freyanation",
          nama_panggilan: "Freya, Fre, Nurdana, Nunung",
          salam_perkenalan:
            "Gadis koleris yang suka berimajinasi, terangi harimu dengan senyuman karamelku. Halo aku Freya!",
          tanggal_lahir: "13 February 2006",
          tanggal_bergabung: "29 September 2018",
        },
        {
          id: "Fritzy-Rosmerian",
          member_regular: false,
          umur: 16,
          username_sr: "Fritzy / フリッツィ (JKT48)",
          username_x: "RFritzy_JKT48",
          username_tiktok: "jkt48.fritzy",
          nama_lengkap: "Fritzy Rosmerian",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.fritzy.r",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 12,
          username_idn: "Fritzy JKT48",
          foto: "https://jkt48.com/profile/fritzy_rosmerian.jpg?v=20230116",
          nama: "Fritzy Rosmerian",
          fanbase: "Itzyraise",
          nama_panggilan: "Fritzy",
          salam_perkenalan:
            "Abrakadabra! Si pesulap yang siap membuat hatimu terpikat. Halo semuanya, it's me Fritzy.",
          tanggal_lahir: "28 July 2008",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Gabriela-Abigail",
          member_regular: true,
          umur: 18,
          username_sr: "Ella / エラ (JKT48)",
          username_x: "AM_EllaJKT48",
          username_tiktok: "jkt48.ella.a",
          nama_lengkap: "Gabriela Abigail Mewengkang",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.ella.a",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 10,
          username_idn: "Ella JKT48",
          foto: "https://jkt48.com/profile/gabriela_abigail.jpg?v=20230116",
          nama: "Gabriela Abigail",
          fanbase: "Ellatheria",
          nama_panggilan: "Ella, Gaby, Ellay",
          salam_perkenalan:
            "Ohayo! Konnichiwa! Oyasumi! Aku ingin ada di setiap harimu. Halo semuanya aku Ella.",
          tanggal_lahir: "07 August 2006",
          tanggal_bergabung: "18 Desember 2021",
        },
        {
          id: "Gendis-Mayrannisa",
          member_regular: false,
          umur: 14,
          username_sr: "Gendis / ゲンディス (JKT48)",
          username_x: "Gendis_JKT48",
          username_tiktok: "gendisjkt48",
          nama_lengkap: "Gendis Mayrannisa Setiawan",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.gendis",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 11,
          username_idn: "Gendis  JKT48",
          foto: "https://jkt48.com/profile/gendis_mayrannisa.jpg?v=20230116",
          nama: "Gendis Mayrannisa",
          fanbase: "Gendiscious",
          nama_panggilan: "Gendis",
          salam_perkenalan:
            "Bonjour! Periang dan pencair suasana, itulah aku. Halo semuanya, aku Gendis!",
          tanggal_lahir: "23 June 2010",
          tanggal_bergabung: "31 Oktober 2022",
        },
        {
          id: "Gita-Sekar-Andarini",
          member_regular: true,
          umur: 23,
          username_sr: "Gita / ギタ (JKT48)",
          username_x: "A_GitaJKT48",
          username_tiktok: "gitajkt48",
          nama_lengkap: "Gita Sekar Andarini",
          universitas: "Universitas Nasional",
          jurusan: "Sastra Inggris",
          username_ig: "jkt48gita",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 6,
          username_idn: "Gita JKT48",
          foto: "https://jkt48.com/profile/gita_sekar_andarini.jpg?v=20230116",
          nama: "Gita Sekar Andarini",
          fanbase: "Gitroops",
          nama_panggilan: "Gita",
          salam_perkenalan: "Diam bukan berarti tak memperhatikanmu. Aku Gita.",
          tanggal_lahir: "30 June 2001",
          tanggal_bergabung: "08 April 2018",
        },
        {
          id: "Grace-Octaviani",
          member_regular: true,
          umur: 17,
          username_sr: "Gracie / グラシー (JKT48)",
          username_x: "Gracie_JKT48",
          username_tiktok: "graciejkt48",
          nama_lengkap: "Grace Octaviani Tanujaya",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.gracie",
          asal: "Jakarta",
          kota_lahir: "Tangerang",
          generasi: 11,
          username_idn: "Gracie JKT48",
          foto: "https://jkt48.com/profile/grace_octaviani.jpg?v=20230116",
          nama: "Grace Octaviani",
          fanbase: "Gracyluv",
          nama_panggilan: "Gracie",
          salam_perkenalan:
            "Manis seperti gulali, imut seperti kelinci. Cie cie cie Gracie!",
          tanggal_lahir: "18 October 2007",
          tanggal_bergabung: "31 Oktober 2022",
        },
        {
          id: "Greesella-Adhalia",
          member_regular: true,
          umur: 18,
          username_sr: "Greesel / グリーセル (JKT48)",
          username_x: "Greesel_JKT48",
          username_tiktok: "greeseljkt48",
          nama_lengkap: "Greesella Sophina Adhalia",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.greesel",
          asal: "Jakarta",
          kota_lahir: "Bogor",
          generasi: 11,
          username_idn: "Greesel JKT48",
          foto: "https://jkt48.com/profile/greesella_adhalia.jpg?v=20230116",
          nama: "Greesella Adhalia",
          fanbase: "Degrees",
          nama_panggilan: "Greesel, Icel",
          salam_perkenalan:
            "Pandangan mataku akan menyinari hatimu bagaikan kunang-kunang di malam hari. Halo, aku Greesel!",
          tanggal_lahir: "10 January 2006",
          tanggal_bergabung: "31 Oktober 2022",
        },
        {
          id: "Helisma-Putri",
          member_regular: true,
          umur: 24,
          username_sr: "Eli / エリ (JKT48)",
          username_x: "H_EliJKT48",
          username_tiktok: "elijkt48",
          nama_lengkap: "Helisma Mauludzunia Putri Kurnia",
          username_ig: "jkt48.eli",
          asal: "Bandung",
          kota_lahir: "Bandung",
          generasi: 7,
          username_idn: "Eli JKT48",
          foto: "https://jkt48.com/profile/helisma_putri.jpg?v=20230116",
          nama: "Helisma Putri",
          fanbase: "Helismiley",
          nama_panggilan: "Eli, Helisma, Ceu Eli",
          salam_perkenalan:
            "Aprikot aprikot aprikot aprikot, pang! Dengan energi kegembiraanku aku akan menghangatkan suasana. Halo halo aku Ceu Eli.",
          tanggal_lahir: "15 June 2000",
          tanggal_bergabung: "29 September 2018",
          jurusan: "Bahasa Korea",
          universitas: "Universitas Nasional",
        },
        {
          id: "Hillary-Abigail",
          member_regular: false,
          umur: 17,
          username_sr: "Lily / リリー (JKT48)",
          username_x: "Lily_JKT48",
          username_tiktok: "jkt48.lily",
          nama_lengkap: "Hillary Abigail",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.lily_",
          asal: "Jakarta",
          kota_lahir: "New Hampshire",
          generasi: 12,
          username_idn: "Lily JKT48",
          foto: "https://jkt48.com/profile/hillary_abigail.jpg?v=20230116",
          nama: "Hillary Abigail",
          fanbase: "Hillaryours",
          nama_panggilan: "Lily",
          salam_perkenalan:
            "Papipapipum! Aku akan mengejutkanmu dengan kehebatanku! Halo nama aku Lily.",
          tanggal_lahir: "19 October 2007",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Indah-Cahya",
          member_regular: true,
          umur: 23,
          username_sr: "Indah / インダー (JKT48)",
          username_x: "C_IndahJKT48",
          username_tiktok: "indahjkt48",
          nama_lengkap: "Indah Cahya Nabilla",
          universitas: "Universitas Negeri Jakarta",
          jurusan: "Pendidikan Bahasa Inggris",
          username_ig: "jkt48indah_",
          asal: "Kerinci",
          kota_lahir: "Jambi",
          generasi: 9,
          username_idn: "Indah JKT48",
          foto: "https://jkt48.com/profile/indah_cahya.jpg?v=20230116",
          nama: "Indah Cahya",
          fanbase: "Interindah",
          nama_panggilan: "Indah",
          salam_perkenalan:
            "Tak banyak bicara, bercerita melalui tulisan. Hai aku Indah.",
          tanggal_lahir: "20 March 2001",
          tanggal_bergabung: "1 Desember 2019",
        },
        {
          id: "Indira-Seruni",
          member_regular: true,
          umur: 20,
          username_sr: "Indira / インディラ (JKT48)",
          username_x: "SP_IndiraJKT48",
          username_tiktok: "jkt48.indira.s",
          nama_lengkap: "Indira Putri Seruni",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.indira.s",
          asal: "Bandung",
          kota_lahir: "Bandung",
          generasi: 10,
          username_idn: "Indira JKT48",
          foto: "https://jkt48.com/profile/indira_seruni.jpg?v=20230116",
          nama: "Indira Seruni",
          fanbase: "Indiraise",
          nama_panggilan: "Indira, Dira",
          salam_perkenalan:
            "Watashi no kokoro unlock, akan menemani hari-harimu dengan sepenuh hati. Halo, aku Indira!",
          tanggal_lahir: "26 April 2004",
          tanggal_bergabung: "18 Desember 2021",
        },
        {
          id: "Jazzlyn-Trisha",
          member_regular: false,
          umur: 13,
          username_sr: "Trisha / トリシャ (JKT48)",
          username_x: "JTrisha_JKT48",
          username_tiktok: "jkt48.trisha",
          nama_lengkap: "Jazzlyn Agatha Trisha",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.trisha",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 12,
          username_idn: "Trisha JKT48",
          foto: "https://jkt48.com/profile/jazzlyn_trisha.jpg?v=20230116",
          nama: "Jazzlyn Trisha",
          fanbase: "Trishairs",
          nama_panggilan: "Trisha",
          salam_perkenalan:
            "Pelukis yang hadir di mimpi-mimpi indahmu. One, two, Tri... sha!",
          tanggal_lahir: "16 October 2011",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Jessica-Chandra",
          member_regular: true,
          umur: 19,
          username_sr: "Jessi / ジェシ (JKT48)",
          username_x: "C_JessiJKT48",
          username_tiktok: "jessijkt48",
          nama_lengkap: "Jessica Chandra",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.jessi",
          asal: "Tangerang",
          kota_lahir: "Jakarta",
          generasi: 7,
          username_idn: "Jessi JKT48",
          foto: "https://jkt48.com/profile/jessica_chandra.jpg?v=20230116",
          nama: "Jessica Chandra",
          fanbase: "Jessination",
          nama_panggilan: "Jessi, Jeci",
          salam_perkenalan:
            "Suka menari dan akan selalu berusaha untuk menjadi sumber energimu. Perkenalkan aku Jessi.",
          tanggal_lahir: "23 September 2005",
          tanggal_bergabung: "29 September 2018",
        },
        {
          id: "Jesslyn-Elly",
          member_regular: true,
          umur: 23,
          username_sr: "Lyn / リーン (JKT48)",
          username_x: "SE_LynJKT48",
          username_tiktok: "jkt48.lyn.s",
          nama_lengkap: "Jesslyn Elly Septiani",
          universitas: "Universitas Pelita Harapan",
          jurusan: "Psikologi",
          username_ig: "jkt48.lyn.s",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 10,
          username_idn: "Lyn JKT48",
          foto: "https://jkt48.com/profile/jesslyn_elly.jpg?v=20230116",
          nama: "Jesslyn Elly",
          fanbase: "Lynear",
          nama_panggilan: "Lyn",
          salam_perkenalan:
            "Seperti ombak laut yang tenang, tiba-tiba aku akan menyapumu dengan banyak cinta. Halo semuanya, aku Lyn!",
          tanggal_lahir: "13 September 2001",
          tanggal_bergabung: "18 Desember 2021",
        },
        {
          id: "Kathrina-Irene",
          member_regular: true,
          umur: 18,
          username_sr: "Kathrina / カトリナ (JKT48)",
          username_x: "I_KathrinaJKT48",
          username_tiktok: "kathrinjkt48",
          nama_lengkap: "Kathrina Irene Indarto Putri",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.kathrina",
          asal: "Jakarta",
          kota_lahir: "Bekasi",
          generasi: 9,
          username_idn: "Kathrina JKT48",
          foto: "https://jkt48.com/profile/kathrina_irene.jpg?v=20230116",
          nama: "Kathrina Irene",
          fanbase: "KATH, Inc.",
          nama_panggilan: "Kathrina, Kathrin, Atin, Bokem",
          salam_perkenalan:
            "Never miss a chance to be a star. Halo semua aku Kathrina.",
          tanggal_lahir: "26 July 2006",
          tanggal_bergabung: "1 Desember 2019",
        },
        {
          id: "Letycia-Moreen",
          member_regular: false,
          umur: 14,
          username_sr: "Moreen / モリーン (JKT48)",
          username_x: "Moreen_JKT48",
          username_tiktok: "jkt48.moreen",
          nama_lengkap: "Letycia Moreen Praditya",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.moreen",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 12,
          username_idn: "Moreen JKT48",
          foto: "https://jkt48.com/profile/letycia_moreen.jpg?v=20230116",
          nama: "Letycia Moreen",
          fanbase: "Morrealta",
          nama_panggilan: "Moreen",
          salam_perkenalan:
            "Sweet as bubble gum, graceful as a princess. Siapakah itu? One and only, Moreen! Halo semuanya nama aku Moreen!",
          tanggal_lahir: "07 June 2010",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Lulu-Salsabila",
          member_regular: true,
          umur: 22,
          username_sr: "Lulu / ルル (JKT48)",
          username_x: "A_LuluJKT48",
          username_tiktok: "lulu_jkt48",
          nama_lengkap: "Lulu Azkiya Salsabila",
          universitas: "Universitas Paramadina",
          jurusan: "Ilmu Komunikasi",
          username_ig: "jkt48.lulu",
          asal: "Serang",
          kota_lahir: "Serang",
          generasi: 8,
          username_idn: "Lulu JKT48",
          foto: "https://jkt48.com/profile/lulu_salsabila.jpg?v=20230116",
          nama: "Lulu Salsabila",
          fanbase: "Lunarian",
          nama_panggilan: "Lulu, Salsa",
          salam_perkenalan:
            "Terang seperti bulan, bersinar seperti bintang. Halo aku Lulu!",
          tanggal_lahir: "23 October 2002",
          tanggal_bergabung: "27 April 2019",
        },
        {
          id: "Marsha-Lenathea",
          member_regular: true,
          umur: 18,
          username_sr: "Marsha / マーシャ (JKT48)",
          username_x: "L_MarshaJKT48",
          username_tiktok: "marsha.jkt48",
          nama_lengkap: "Marsha Lenathea Lapian",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.marsha",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 9,
          username_idn: "Marsha JKT48",
          foto: "https://jkt48.com/profile/marsha_lenathea.jpg?v=20230116",
          nama: "Marsha Lenathea",
          fanbase: "MarshaOshi",
          nama_panggilan: "Marsha, Matcha, Anime, Maeng",
          salam_perkenalan:
            "Seperti pizza yang selalu dinanti-nantikan semua orang, selalu nantikan aku ya! Halo aku Marsha!",
          tanggal_lahir: "09 January 2006",
          tanggal_bergabung: "1 Desember 2019",
        },
        {
          id: "Michelle-Alexandra",
          member_regular: false,
          umur: 15,
          username_sr: "Michie / ミチー (JKT48)",
          username_x: "Michie_JKT48",
          username_tiktok: "michiejkt48",
          nama_lengkap: "Michelle Alexandra Suandi",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.michie_",
          asal: "Palembang",
          kota_lahir: "Jakarta",
          generasi: 11,
          username_idn: "Michie  JKT48",
          foto: "https://jkt48.com/profile/michelle_alexandra.jpg?v=20230116",
          nama: "Michelle Alexandra",
          fanbase: "Michiban",
          nama_panggilan: "Michie",
          salam_perkenalan:
            "Always your number one, till infinity and beyond. Hello everyone, it's Michie!",
          tanggal_lahir: "22 April 2009",
          tanggal_bergabung: "31 Oktober 2022",
        },
        {
          id: "Michelle-Levia",
          member_regular: false,
          umur: 15,
          username_sr: "Levi / レヴィ (JKT48)",
          username_x: "Levi_JKT48",
          username_tiktok: "jkt48.levi",
          nama_lengkap: "Michelle Levia Arifin",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.levi",
          asal: "Tangerang",
          kota_lahir: "Kota Tangerang",
          generasi: 12,
          username_idn: "Levi JKT48",
          foto: "https://jkt48.com/profile/michelle_levia.jpg?v=20230116",
          nama: "Michelle Levia",
          fanbase: "Levianistic",
          nama_panggilan: "Levi",
          salam_perkenalan:
            "Are you ready? Jalani hari ini dengan menari bersamaku. Yuhu! Aku Levi!",
          tanggal_lahir: "24 January 2009",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Mutiara-Azzahra",
          member_regular: true,
          umur: 20,
          username_sr: "Muthe / ムテ (JKT48)",
          username_x: "A_MutheJKT48",
          username_tiktok: "muthejkt48",
          nama_lengkap: "Mutiara Azzahra Umandana",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.muthe_",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 7,
          username_idn: "Muthe JKT48",
          foto: "https://jkt48.com/profile/mutiara_azzahra.jpg?v=20230116",
          nama: "Mutiara Azzahra",
          fanbase: "Muffin",
          nama_panggilan: "Muthe, Mumuchang",
          salam_perkenalan:
            "Dengan kelincahanku, aku akan menari setiap hari! Panggil aku Mu-Mu-Mu-Mu-the!",
          tanggal_bergabung: "29 September 2018",
          tanggal_lahir: "12 July 2004",
        },
        {
          id: "Nayla-Suji",
          member_regular: false,
          umur: 17,
          username_sr: "Nayla / ナイラ (JKT48)",
          username_x: "SNayla_JKT48",
          username_tiktok: "jkt48.nayla",
          nama_lengkap: "Nayla Suji Aurelia (ナイラ・スジ・アウレリア)",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.nayla.s",
          asal: "Jepang",
          kota_lahir: "Kumamoto",
          generasi: 12,
          username_idn: "Nayla JKT48",
          foto: "https://jkt48.com/profile/nayla_suji.jpg?v=20230116",
          nama: "Nayla Suji",
          fanbase: "Naylands",
          nama_panggilan: "Nayla",
          salam_perkenalan:
            "Moshi! moshi! Welcome Nayla-lalaland! Halo semuanya, bakkyun! Nama aku Nayla!",
          tanggal_lahir: "18 June 2007",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Nina-Tutachia",
          member_regular: false,
          umur: 15,
          username_sr: "Nachia / ナチア (JKT48)",
          username_x: "Nachia_JKT48",
          username_tiktok: "jkt48.nachia",
          nama_lengkap: "Nina Tutachia Chapman",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.nachia.t",
          asal: "Bali",
          kota_lahir: "Bali",
          generasi: 12,
          username_idn: "Nachia JKT48",
          foto: "https://jkt48.com/profile/nina_tutachia.jpg?v=20230116",
          nama: "Nina Tutachia",
          fanbase: "NiTuVers",
          nama_panggilan: "Nachia",
          salam_perkenalan:
            "Si panda unyu yang selalu ceria. Halo aku Nachia, bikin kamu bahagia!",
          tanggal_lahir: "16 October 2009",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Oline-Manuel",
          member_regular: false,
          umur: 17,
          username_sr: "OlineM / オリヌ (JKT48)",
          username_x: "M_OlineJKT48",
          username_tiktok: "jkt48.oline",
          nama_lengkap: "Oline Manuel Chay",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.oline",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 12,
          username_idn: "Oline JKT48",
          foto: "https://jkt48.com/profile/oline_manuel.jpg?v=20230116",
          nama: "Oline Manuel",
          fanbase: "Olinever",
          nama_panggilan: "Oline",
          salam_perkenalan: "Semangatku full terus, gas gas gas Oline!",
          tanggal_lahir: "03 November 2007",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Raisha-Syifa",
          member_regular: true,
          umur: 17,
          username_sr: "Raisha / ライシャ (JKT48)",
          username_x: "SW_RaishaJKT48",
          username_tiktok: "jkt48.raisha.s",
          nama_lengkap: "Raisha Syifa Wardhana",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.raisha.s",
          asal: "Jakarta",
          kota_lahir: "Tangerang",
          generasi: 10,
          username_idn: "Raisha JKT48",
          foto: "https://jkt48.com/profile/raisha_syifa.jpg?v=20230116",
          nama: "Raisha Syifa",
          fanbase: "Raishanrise",
          nama_panggilan: "Raisha",
          salam_perkenalan:
            "Kalau sakura itu kembang, aku itu kembanggaanmu! You can call me Raisha.",
          tanggal_lahir: "11 November 2007",
          tanggal_bergabung: "18 Desember 2021",
        },
        {
          id: "Regina-Wilian",
          member_regular: false,
          umur: 15,
          username_sr: "Regie / レギー (JKT48)",
          username_x: "Regie_JKT48",
          username_tiktok: "jkt48.regie",
          nama_lengkap: "Regina Wilian Hapsari",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.regie",
          asal: "Surakarta",
          kota_lahir: "Surakarta",
          generasi: 12,
          username_idn: "Regie JKT48",
          foto: "https://jkt48.com/profile/regina_wilian.jpg?v=20230116",
          nama: "Regina Wilian",
          fanbase: "Reginanska",
          nama_panggilan: "Regie",
          salam_perkenalan:
            "Bagai kalium yang bereaksi dengan air, aku akan meledak dengan semangatku. Boom! Aku Regie.",
          tanggal_lahir: "10 December 2009",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Reva-Fidela",
          member_regular: true,
          umur: 18,
          username_sr: "Adel / アデル (JKT48)",
          username_x: "R_AdelJKT48",
          username_tiktok: "adeljkt48",
          nama_lengkap: "Reva Fidela Adel Pantjoro",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.adel",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 8,
          username_idn: "Adel JKT48",
          foto: "https://jkt48.com/profile/reva_fidela.jpg?v=20230116",
          nama: "Reva Fidela",
          fanbase: "Adellion",
          nama_panggilan: "Adel, Dedel, Reva",
          salam_perkenalan:
            "Bagaikan kucing yang kalem tapi akan selalu memikat hati kamu! Halo semuanya aku Adel!",
          tanggal_lahir: "14 July 2006",
          tanggal_bergabung: "27 April 2019",
        },
        {
          id: "Ribka-Budiman",
          member_regular: false,
          umur: 15,
          username_sr: "Ribka / リブカ (JKT48)",
          username_x: "Ribka_JKT48",
          username_tiktok: "jkt48.ribka",
          nama_lengkap: "Ribka Budiman",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.ribka",
          asal: "Bandung",
          kota_lahir: "Bandung",
          generasi: 12,
          username_idn: "Ribka JKT48",
          foto: "https://jkt48.com/profile/ribka_budiman.jpg?v=20230116",
          nama: "Ribka Budiman",
          fanbase: "Ribcalls",
          nama_panggilan: "Ribka",
          salam_perkenalan:
            "Mirror mirror on the wall, who's the sweetest in here? It's me Ribka!",
          tanggal_lahir: "13 January 2009",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Shabilqis-Naila",
          member_regular: false,
          umur: 16,
          username_sr: "Nala / ナラ (JKT48)",
          username_x: "Nala_JKT48",
          username_tiktok: "jkt48.nala",
          nama_lengkap: "Shabilqis Naila Bustami",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.nala",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 12,
          username_idn: "Nala JKT48",
          foto: "https://jkt48.com/profile/shabilqis_naila.jpg?v=20230116",
          nama: "Shabilqis Naila",
          fanbase: "Qistimewa",
          nama_panggilan: "Nala",
          salam_perkenalan:
            "Roar! Si singa pemberani yang siap menyemangati harimu. Hai, hai! Aku Nala.",
          tanggal_lahir: "01 September 2008",
          tanggal_bergabung: "18 November 2023",
        },
        {
          id: "Shani-Indira-Natio",
          member_regular: true,
          umur: 26,
          username_sr: "Shani / シャニ (JKT48)",
          username_x: "N_ShaniJKT48",
          username_tiktok: "shanijkt48",
          nama_lengkap: "Shani Indira Natio",
          universitas: "Universitas Tarumanegara",
          jurusan: "Ilmu Komunikasi",
          username_ig: "jkt48shani",
          asal: "Yogyakarta",
          kota_lahir: "Kebumen",
          generasi: 3,
          username_idn: "Shani JKT48",
          foto: "https://jkt48.com/profile/shani_indira_natio.jpg?v=20230116",
          nama: "Shani Indira Natio",
          fanbase: "Inshanity",
          nama_panggilan: "Shani",
          salam_perkenalan: "Semanis coklat selembut sutra. Halo aku Shani.",
          tanggal_lahir: "05 October 1998",
          tanggal_bergabung: "15 Maret 2014",
        },
        {
          id: "Shania-Gracia",
          member_regular: true,
          umur: 25,
          username_sr: "Gracia / グラシア (JKT48)",
          username_x: "S_GraciaJKT48",
          username_tiktok: "graciajkt48",
          nama_lengkap: "Shania Gracia",
          universitas: "Institut Bisnis Dan Informatika Kwik Kian Gie",
          jurusan: "Ilmu Komunikasi",
          username_ig: "jkt48gracia",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 3,
          username_idn: "Gracia JKT48",
          foto: "https://jkt48.com/profile/shania_gracia.jpg?v=20230116",
          nama: "Shania Gracia",
          fanbase: "Gracias",
          nama_panggilan: "Gracia, Gre",
          salam_perkenalan:
            "Senyumku terekam jelas dalam ingatanmu seperti foto dengan sejuta warna. Namaku Gracia, always smile! Sekali lagi? (Gracia!)",
          tanggal_lahir: "31 August 1999",
          tanggal_bergabung: "15 Maret 2014",
        },
        {
          id: "Victoria-Kimberly",
          member_regular: false,
          umur: 14,
          username_sr: "Kimmy / キミー (JKT48)",
          username_x: "Kimmy_JKT48",
          username_tiktok: "jkt48.kimmy",
          nama_lengkap: "Victoria Kimberly",
          universitas: "-",
          jurusan: "-",
          username_ig: "jkt48.kimmy",
          asal: "Jakarta",
          kota_lahir: "Jakarta",
          generasi: 12,
          username_idn: "Kimmy JKT48",
          foto: "https://jkt48.com/profile/victoria_kimberly.jpg?v=20230116",
          nama: "Victoria Kimberly",
          fanbase: "Victorian Era",
          nama_panggilan: "Kimmy",
          salam_perkenalan:
            "Baby hamster yang lincah, aku akan berlari-lari di pikiranmu. Halo-ha, katakan Kimmy!",
          tanggal_lahir: "08 March 2010",
          tanggal_bergabung: "18 November 2023",
        },
      ]
    : data.data;
  const memberRegular = dataMember.filter((member) => member.member_regular);
  const memberTrainee = dataMember.filter((member) => !member.member_regular);

  const [name, setName] = useState<string>("");
  const handleSetName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };
  const [birthplace, setBirthplace] = useState<string>("");
  const handleSetBirthplace: ChangeEventHandler<HTMLInputElement> = (event) => {
    setBirthplace(event.target.value);
  };
  const [hometown, setHometown] = useState<string>("");
  const handleSetHometown: ChangeEventHandler<HTMLInputElement> = (event) => {
    setHometown(event.target.value);
  };
  const [age, setAge] = useState<number>(0);
  const handleSetAge: ChangeEventHandler<HTMLInputElement> = (event) => {
    setAge(parseInt(event.target.value));
  };
  const [gen, setGen] = useState<number>(0);
  const handleSetGen: ChangeEventHandler<HTMLInputElement> = (event) => {
    setGen(parseInt(event.target.value));
  };

  return (
    <>
      <div className="flex flex-col w-full pb-32 mt-12">
        <div className="flex justify-between px-8 md:px-24 items-start mt-10 md:mt-12 mb-6 md:mb-20">
          <h1 className="font-extralight text-lg md:text-2xl font-urbanist">
            <span className="title-gradient-bold text-2xl md:text-4xl font-poppins">
              JKT48
            </span>{" "}
            Active Member
          </h1>
          <button
            type="button"
            data-drawer-target="drawer-right-example"
            data-drawer-show="drawer-right-example"
            data-drawer-placement="right"
            aria-controls="drawer-right-example"
            data-drawer-body-scrolling="true"
            className="text-black bg-gradient-to-r from-custom-green to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-lg md:text-xl px-3 md:px-5 py-2 md:py-2.5 text-center me-2 mb-2 "
          >
            <FiSearch />
          </button>
        </div>
        <div
          id="drawer-right-example"
          className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto duration-700 transition-transform translate-x-full bg-zinc-950 w-72 md:w-96 dark:bg-gray-800"
          tabIndex={-1}
          aria-labelledby="drawer-right-label"
          data-drawer-body-scrolling="true"
        >
          <h5
            id="drawer-right-label"
            className="inline-flex font-poppins items-center mb-2 md:mb-4 title-gradient-bold text-lg md:text-2xl"
          >
            Search Member
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="flex flex-col gap-6 mt-5">
            <div>
              <label
                htmlFor="first_name"
                className="block text-xs mb-1 md:mb-0 md:text-sm font-light text-zinc-400 font-poppins"
              >
                Name
              </label>
              <input onChange={handleSetName}
                type="text"
                id="first_name"
                className="bg-zinc-950 border font-montserrat text-white border-gray-300 text-sm md:text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Abigail Rachel"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-xs mb-1 md:mb-0 md:text-sm font-light text-zinc-400 font-poppins"
              >
                Generation
              </label>
              <input onChange={handleSetGen}
                type="number"
                id="number-input"
                aria-describedby="helper-text-explanation"
                className="bg-zinc-950 border border-gray-300 text-white font-montserrat text-sm md:text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="12"
                required
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-xs mb-1 md:mb-0 md:text-sm font-light text-zinc-400 font-poppins"
              >
                Age
              </label>
              <input onChange={handleSetAge}
                type="number"
                id="number-input"
                aria-describedby="helper-text-explanation"
                className="bg-zinc-950 border border-gray-300 text-white font-montserrat text-sm md:text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="16"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-xs mb-1 md:mb-0 md:text-sm font-light text-zinc-400 font-poppins"
              >
                Birthplace
              </label>
              <input onChange={handleSetBirthplace}
                type="tel"
                id="phone"
                className="bg-zinc-950 border font-montserrat text-white border-gray-300 text-sm md:text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jakarta"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block text-xs mb-1 md:mb-0 md:text-sm font-light text-zinc-400 font-poppins"
              >
                Hometown
              </label>
              <input onChange={handleSetHometown}
                type="url"
                id="website"
                className="bg-zinc-950 border font-montserrat text-white border-gray-300 text-sm md:text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jakarta"
                required
              />
            </div>
          </div>
        </div>

        {dataMember.length > 0 ? (
          <div className="flex flex-col">
            <MemberCards
              memberRegular={memberRegular}
              category="Regular"
              search={
                name || birthplace || hometown || age || gen
                  ? {
                      name,
                      birthplace,
                      hometown,
                      age,
                      gen,
                    }
                  : null
              }
            />
            <MemberCards
              search={
                name || birthplace || hometown || age || gen
                  ? {
                      name,
                      birthplace,
                      hometown,
                      age,
                      gen,
                    }
                  : null
              }
              memberRegular={memberTrainee}
              category="Trainee"
            />
          </div>
        ) : (
          <div
            className="flex justify-center items-center"
            style={{ height: "70vh" }}
          >
            <Loading />
          </div>
        )}
      </div>
    </>
  );
}
