import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Ibadah Perayaan Paskah 2026",
      date: "Minggu, 5 April 2026",
      time: "09:00 - 12:00 WIB",
      location: "Gedung Gereja HKI Cawang",
      description: "Mari merayakan kebangkitan Yesus Kristus bersama seluruh jemaat. Ibadah akan dimeriahkan oleh paduan suara gabungan dan perjamuan kudus.",
      image: "https://images.unsplash.com/photo-1548625361-edcbbaea62b3?q=80&w=2070&auto=format&fit=crop",
      category: "Ibadah Raya",
      featured: true
    },
    {
      id: 2,
      title: "Retret Pemuda (Naposobulung) HKI",
      date: "15 - 17 Mei 2026",
      time: "Berangkat Jumat 15:00 WIB",
      location: "Wisma Kinasih, Puncak Bogor",
      description: "Tiga hari untuk menyegarkan rohani, membangun kebersamaan, dan memperlengkapi pemuda menghadapi tantangan zaman.",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5ce25c59a?q=80&w=2070&auto=format&fit=crop",
      category: "Pemuda",
      featured: false
    },
    {
      id: 3,
      title: "Seminar Keluarga Kristen",
      date: "Sabtu, 23 Mei 2026",
      time: "10:00 - 14:00 WIB",
      location: "Ruang Serbaguna Lt. 2",
      description: "Membangun komunikasi yang sehat dalam pernikahan dan mendidik anak di era digital. Pembicara: Pdt. Dr. (HC) S. Simanjuntak.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop",
      category: "Keluarga",
      featured: false
    },
    {
      id: 4,
      title: "Aksi Sosial Donor Darah",
      date: "Sabtu, 6 Juni 2026",
      time: "08:00 - 12:00 WIB",
      location: "Halaman Parkir Gereja",
      description: "Bekerja sama dengan PMI Jakarta Timur. Setetes darah Anda menyelamatkan nyawa sesama. Terbuka untuk umum.",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2069&auto=format&fit=crop",
      category: "Sosial",
      featured: false
    },
    {
      id: 5,
      title: "Lomba Paduan Suara Antar Wijk",
      date: "Minggu, 21 Juni 2026",
      time: "13:00 WIB - Selesai",
      location: "Gedung Gereja HKI Cawang",
      description: "Memeriahkan bulan musik gerejawi dengan perlombaan paduan suara antar wilayah (wijk).",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
      category: "Musik",
      featured: false
    }
  ];

  const featuredEvent = events.find(e => e.featured);
  const upcomingEvents = events.filter(e => !e.featured);

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Acara Gereja</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ikuti berbagai kegiatan dan acara yang kami selenggarakan untuk bertumbuh bersama dalam iman dan persekutuan.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto">
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Acara Utama
                  </div>
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center text-white">
                  <div className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-3">
                    {featuredEvent.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    {featuredEvent.title}
                  </h2>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-blue-100">
                      <Calendar className="w-5 h-5 shrink-0" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-blue-100">
                      <Clock className="w-5 h-5 shrink-0" />
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-blue-100">
                      <MapPin className="w-5 h-5 shrink-0" />
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>
                  <p className="text-blue-50 mb-10 leading-relaxed text-lg">
                    {featuredEvent.description}
                  </p>
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100 w-fit">
                    <Link to="/kontak">Daftar / Info Lanjut</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events List */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Agenda Mendatang</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[2/1] relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                    {event.category}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {event.title}
                  </h3>
                  <div className="space-y-3 mb-6 text-sm text-slate-600">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-blue-500 shrink-0" />
                      <span className="font-medium text-slate-800">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <Button asChild variant="outline" className="w-full group">
                      <Link to="/kontak" className="flex items-center justify-center gap-2">
                        Hubungi Panitia <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
