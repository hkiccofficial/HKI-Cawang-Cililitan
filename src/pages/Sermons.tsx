import { PlayCircle, Calendar, User, Search, Filter } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Sermons() {
  const sermons = [
    {
      id: 1,
      title: "Berjalan Dalam Pengharapan di Tengah Badai",
      preacher: "Pdt. J. Sitorus, S.Th",
      date: "24 Maret 2026",
      series: "Menghadapi Tantangan Hidup",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop",
      duration: "45:20"
    },
    {
      id: 2,
      title: "Kasih yang Mengubahkan",
      preacher: "Pdt. M. Pasaribu, M.Th",
      date: "17 Maret 2026",
      series: "Karakter Kristus",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop",
      duration: "38:15"
    },
    {
      id: 3,
      title: "Pentingnya Komunitas Orang Percaya",
      preacher: "St. R. Hutagalung",
      date: "10 Maret 2026",
      series: "Gereja yang Sehat",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop",
      duration: "42:10"
    },
    {
      id: 4,
      title: "Mengampuni Seperti Kristus",
      preacher: "Pdt. J. Sitorus, S.Th",
      date: "3 Maret 2026",
      series: "Karakter Kristus",
      image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2022&auto=format&fit=crop",
      duration: "40:05"
    },
    {
      id: 5,
      title: "Iman yang Bekerja Melalui Kasih",
      preacher: "Pdt. M. Pasaribu, M.Th",
      date: "24 Februari 2026",
      series: "Surat Yakobus",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
      duration: "35:50"
    },
    {
      id: 6,
      title: "Bersukacita Senantiasa",
      preacher: "Pdt. J. Sitorus, S.Th",
      date: "17 Februari 2026",
      series: "Surat Filipi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      duration: "41:30"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Khotbah & Media</h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Dengarkan kembali pesan Firman Tuhan untuk menguatkan iman dan membimbing langkah hidup Anda sehari-hari.
          </p>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto">
                <img
                  src={sermons[0].image}
                  alt={sermons[0].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer transition-colors hover:bg-black/50">
                  <button className="w-20 h-20 bg-blue-600/90 text-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg backdrop-blur-sm">
                    <PlayCircle className="w-10 h-10 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                  {sermons[0].duration}
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4 w-fit">
                  Khotbah Terbaru
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                  {sermons[0].title}
                </h2>
                <div className="flex flex-col gap-2 text-slate-600 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" />
                    <span>{sermons[0].preacher}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>{sermons[0].date}</span>
                  </div>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Pesan kuat tentang bagaimana kita dapat tetap teguh dan memiliki pengharapan yang pasti meskipun menghadapi berbagai tantangan hidup.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">Tonton Sekarang</Button>
                  <Button variant="outline">Unduh Audio</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Archive */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <h2 className="text-2xl font-bold text-slate-900">Arsip Khotbah</h2>
            
            <div className="flex w-full md:w-auto gap-4">
              <div className="relative flex-grow md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Cari judul atau pengkhotbah..." 
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <Button variant="outline" className="shrink-0 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.slice(1).map((sermon) => (
              <div key={sermon.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                    {sermon.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">
                    Seri: {sermon.series}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {sermon.title}
                  </h3>
                  <div className="flex flex-col gap-2 text-slate-500 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{sermon.preacher}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{sermon.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">Muat Lebih Banyak</Button>
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
            <PlayCircle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ikuti Kami di YouTube</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Jangan lewatkan siaran langsung ibadah setiap hari Minggu dan konten rohani lainnya. Subscribe channel YouTube HKI Cawang Cililitan sekarang.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              Subscribe ke Channel Kami
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
