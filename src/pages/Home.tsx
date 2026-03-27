import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Calendar, Clock, MapPin, PlayCircle, Users, Heart, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
            alt="Worship service at HKI Cawang"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 text-blue-300 text-sm font-semibold tracking-wider mb-6 border border-blue-500/30">
              SELAMAT DATANG DI HKI CAWANG CILILITAN
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Temukan Kasih, <br />
              <span className="text-blue-400">Harapan</span>, dan <br />
              Keluarga Baru.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Kami adalah gereja yang berpusat pada Kristus, rindu melihat setiap orang mengalami kasih Tuhan dan bertumbuh bersama dalam komunitas yang hangat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-base h-14 px-8">
                <Link to="/ibadah">Datang Ibadah Minggu Ini</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-base h-14 px-8 backdrop-blur-sm">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Tonton Online
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times & Location Bar */}
      <section className="bg-white border-b border-slate-100 relative z-20 -mt-8 mx-4 md:mx-auto md:max-w-5xl rounded-xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="p-8 flex items-start gap-4 hover:bg-slate-50 transition-colors">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Ibadah Minggu</h3>
              <p className="text-slate-600 text-sm mb-2">Pukul 09:00 WIB</p>
              <Link to="/ibadah" className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1">
                Lihat jadwal lengkap <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="p-8 flex items-start gap-4 hover:bg-slate-50 transition-colors">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Lokasi Kami</h3>
              <p className="text-slate-600 text-sm mb-2">Jl. Letjen Sutoyo, Cawang</p>
              <Link to="/kontak" className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1">
                Dapatkan petunjuk arah <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="p-8 flex items-start gap-4 hover:bg-slate-50 transition-colors">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Baru Pertama Kali?</h3>
              <p className="text-slate-600 text-sm mb-2">Kami sangat menantikan Anda.</p>
              <Link to="/tentang" className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1">
                Rencanakan kunjungan <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2022&auto=format&fit=crop"
                  alt="Pastor welcoming congregation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex gap-2 text-yellow-400 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 italic text-sm mb-4">
                  "Gereja ini benar-benar terasa seperti rumah. Komunitasnya sangat mendukung dan khotbahnya selalu relevan."
                </p>
                <p className="font-bold text-slate-900 text-sm">- Keluarga Simanjuntak</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Gereja Bukan Sekadar Gedung, Melainkan <span className="text-blue-600">Keluarga</span>.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Di HKI Cawang Cililitan, kami percaya bahwa setiap orang berharga di mata Tuhan. Tidak peduli dari mana Anda berasal atau apa latar belakang Anda, ada tempat bagi Anda di sini.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Kami mengundang Anda untuk bergabung dalam ibadah kami, merasakan hadirat Tuhan, dan bertumbuh bersama dalam iman, pengharapan, dan kasih.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-medium">Komunitas yang penuh kasih dan peduli</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-medium">Pelayanan untuk segala usia (Anak hingga Lansia)</span>
                </li>
              </ul>

              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                <Link to="/tentang">Pelajari Lebih Lanjut Tentang Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Khotbah Terbaru</h2>
            <p className="text-slate-600 text-lg">
              Dengarkan pesan firman Tuhan minggu ini untuk menguatkan iman dan membimbing langkah hidup Anda.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto">
                <img
                  src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop"
                  alt="Sermon video thumbnail"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-blue-600/90 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-lg backdrop-blur-sm">
                    <PlayCircle className="w-10 h-10 ml-1" />
                  </button>
                </div>
              </div>
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>24 Maret 2026</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Berjalan Dalam Pengharapan di Tengah Badai
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Pdt. J. Sitorus membagikan pesan kuat tentang bagaimana kita dapat tetap teguh dan memiliki pengharapan yang pasti meskipun menghadapi berbagai tantangan hidup.
                </p>
                <Button asChild variant="outline" className="w-fit border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                  <Link to="/khotbah">Lihat Semua Khotbah</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Acara Mendatang</h2>
              <p className="text-slate-600 text-lg">
                Bergabunglah dalam berbagai kegiatan gereja untuk bertumbuh dan melayani bersama.
              </p>
            </div>
            <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
              <Link to="/acara" className="flex items-center gap-2">
                Lihat Kalender Penuh <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ibadah Paskah 2026",
                date: "Minggu, 5 April 2026",
                time: "09:00 WIB",
                image: "https://images.unsplash.com/photo-1548625361-edcbbaea62b3?q=80&w=2070&auto=format&fit=crop",
                category: "Ibadah Raya"
              },
              {
                title: "Retret Pemuda HKI",
                date: "15-17 Mei 2026",
                time: "Puncak, Bogor",
                image: "https://images.unsplash.com/photo-1523580846011-d3a5ce25c59a?q=80&w=2070&auto=format&fit=crop",
                category: "Pemuda"
              },
              {
                title: "Seminar Keluarga Kristen",
                date: "Sabtu, 23 Mei 2026",
                time: "10:00 - 14:00 WIB",
                image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop",
                category: "Keluarga"
              }
            ].map((event, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-col gap-2 text-slate-600 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/acara">Detail Acara</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute w-full h-full">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad)" />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Siap Untuk Bergabung?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Kami menantikan kehadiran Anda minggu ini. Mari bertumbuh bersama dalam pengenalan akan Tuhan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100 h-14 px-8 text-base font-bold">
              <Link to="/ibadah">Rencanakan Kunjungan</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 h-14 px-8 text-base">
              <Link to="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
