export interface Book {
  title: string;
  writer: string;
  release_date: string;
  publisher: string;
  rating: string;
  synopsis: string;
  image: any; // for require() images
}

export const books: Book[] = [
  {
    title: "LAUT BERCERITA",
    writer: "Leila S. Chudori",
    release_date: "23 Oktober 2017",
    publisher: "Kepustakaan Populer Gramedia (KPG)",
    rating: "4,6/5",
    synopsis: "Novel ini menggambarkan tragedi penculikan aktivis mahasiswa pada masa transisi Orde Baru ke Reformasi. Tokoh utama, Biru Laut, seorang aktivis yang ditangkap aparat, menjadi simbol perjuangan melawan ketidakadilan. Cerita dituturkan dari berbagai sudut pandang: keluarga yang kehilangan, sahabat yang berduka, hingga pelaku yang berkhianat",
    image: require("../../assets/book1.jpg")
  },
  {
    title: "MICKEY 17",
    writer: "Edward Ashton",
    release_date: "15 Februari 2022",
    publisher: "St. Martin's Griffin",
    rating: "4/5",
    synopsis: "Kisah ini mengikuti Mickey Barnes, seorang disposable employee yang bisa dikloning kembali setiap kali mati dalam misi berbahaya. Cerita menyoroti absurditas hidup, identitas, dan nilai kemanusiaan ketika Mickey menyadari dirinya dianggap mati padahal masih hidup",
    image: require("../../assets/book2.webp")
  },
  {
    title: "THE SUBTLE ART OF NOT GIVING A F*CK",
    writer: "Mark Manson",
    release_date: "13 September 2016",
    publisher: "Grasindo (Indonesia)",
    rating: "3.9/5",
    synopsis: "Buku self-help ini menolak pola pikir positif berlebihan. Manson menekankan bahwa hidup penuh masalah, dan justru dengan memilih hal-hal yang layak diperjuangkan, kita menemukan makna. Intinya: jangan pedulikan hal-hal remeh, fokus pada nilai yang benar-benar penting",
    image: require("../../assets/book3.png")
  },
  {
    title: "THE SILENT PATIENT",
    writer: "Alex Michaelides",
    release_date: "2019",
    publisher: "Gramedia Pustaka Utama (Indonesia)",
    rating: "4.1/5",
    synopsis: "Thriller psikologis tentang Alicia Berenson, seorang pelukis yang membunuh suaminya lalu bungkam total. Ia hanya berbicara lewat sebuah lukisan berjudul Alcestis. Theo Faber, seorang psikoterapis, berusaha mengungkap misteri di balik kebisuan Alicia, yang berujung pada twist mengejutkan",
    image: require("../../assets/book4.webp")
  },
  {
    title: "THE TRAVELING CAT CHRONICLES",
    writer: "Hiro Arikawa",
    release_date: "2019 (edisi Indonesia)",
    publisher: "Penerbit Haru",
    rating: "4.3/5",
    synopsis: "Kisah persahabatan antara Satoru dan kucingnya, Nana. Saat Satoru mencari orang yang bisa mengadopsi Nana, mereka melakukan perjalanan penuh kenangan. Cerita dituturkan dari sudut pandang manusia dan kucing, menyoroti arti persahabatan, kehilangan, dan cinta tanpa syarat",
    image: require("../../assets/book5.jpg")
  },
  {
    title: "FILOSOFI TERAS",
    writer: "Henry Manampiring",
    release_date: "2018",
    publisher: "Penerbit Buku Kompas",
    rating: "4.4/5",
    synopsis: "Buku nonfiksi yang memperkenalkan filsafat Stoisisme dengan bahasa ringan dan relevan bagi generasi modern. Fokusnya pada dikotomi kendali: membedakan hal-hal yang bisa kita kendalikan dan yang tidak. Tujuannya membantu pembaca mengelola emosi negatif dan membangun mental tangguh",
    image: require("../../assets/book6.jpeg")
  }
];