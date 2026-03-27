import { Users, BookOpen, Heart, Music, ArrowRight, Baby } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Ministries() {
  const ministries = [
    {
      id: "sekolah-minggu",
      title: "Sekolah Minggu (Anak)",
      icon: <Baby className="w-8 h-8 text-blue-600" />,
      description: "Membimbing anak-anak untuk mengenal kasih Yesus sejak dini melalui cerita Alkitab, pujian, dan aktivitas kreatif.",
      schedule: "Setiap Minggu, 09:00 WIB",
      image: "https://images.unsplash.com/photo-1548625361-edcbbaea62b3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "pemuda",
      title: "Pemuda (Naposobulung)",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      description: "Wadah bagi generasi muda untuk bertumbuh dalam iman, melayani sesama, dan menghadapi tantangan masa muda bersama Kristus.",
      schedule: "Setiap Sabtu, 18:00 WIB",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5ce25c59a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "kaum-ibu",
      title: "Persekutuan Perempuan (Ina)",
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      description: "Persekutuan kaum ibu untuk saling menguatkan, berdoa bersama, dan melayani keluarga serta gereja.",
      schedule: "Kamis, 16:00 WIB (Minggu ke-2 & 4)",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "kaum-bapak",
      title: "Persekutuan Laki-laki (Ama)",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      description: "Membangun kepemimpinan rohani kaum bapak dalam keluarga dan gereja melalui pendalaman Alkitab dan persekutuan.",
      schedule: "Jumat, 19:30 WIB (Minggu ke-1 & 3)",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "paduan-suara",
      title: "Paduan Suara & Musik",
      icon: <Music className="w-8 h-8 text-blue-600" />,
      description: "Melayani Tuhan melalui puji-pujian dalam ibadah Minggu dan acara khusus gereja.",
      schedule: "Latihan: Kamis & Sabtu",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "diakonia",
      title: "Pelayanan Diakonia (Sosial)",
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      description: "Menyalurkan kasih Kristus melalui bantuan sosial, kunjungan orang sakit, dan kepedulian terhadap jemaat yang membutuhkan.",
      schedule: "Sesuai kebutuhan",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pelayanan & Komunitas</h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Temukan tempat Anda untuk bertumbuh, melayani, dan membangun hubungan yang bermakna dalam keluarga besar HKI Cawang Cililitan.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2022&auto=format&fit=crop"
                  alt="Community gathering"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <h3 className="text-2xl font-bold mb-2">Terlibatlah!</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Gereja bukan hanya tempat untuk dihadiri, tetapi komunitas untuk dihidupi. Mari temukan peran Anda.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Setiap Orang Memiliki <span className="text-blue-600">Tempat</span> dan <span className="text-blue-600">Peran</span>.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Kami percaya bahwa Tuhan memberikan karunia yang berbeda-beda kepada setiap orang percaya untuk saling melengkapi dan membangun tubuh Kristus.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Melalui berbagai wadah pelayanan kategorial (kategori usia/gender) dan tim pelayanan khusus, kami rindu memfasilitasi Anda untuk bertumbuh dan melayani sesuai dengan panggilan Tuhan.
              </p>
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                <Link to="/kontak">Hubungi Kami untuk Bergabung</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Wadah Pelayanan Kami</h2>
            <p className="text-slate-600">Pilih pelayanan yang sesuai dengan kelompok usia atau minat Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ministries.map((ministry) => (
              <div key={ministry.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow group flex flex-col">
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      {ministry.icon}
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {ministry.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm flex-grow">
                    {ministry.description}
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-6">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Jadwal Pertemuan</span>
                    <span className="text-sm font-medium text-slate-900">{ministry.schedule}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full group/btn">
                    <Link to="/kontak" className="flex items-center justify-center gap-2">
                      Gabung Pelayanan <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Rindu Melayani di Bidang Lain?</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Kami selalu membutuhkan tenaga sukarela untuk multimedia, penyambut tamu (usher), guru sekolah minggu, dan banyak lagi.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100 h-14 px-8 text-base font-bold">
            <Link to="/kontak">Daftar Menjadi Relawan</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
