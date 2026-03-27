import { Clock, MapPin, Music, BookOpen, Users, Coffee } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Jadwal Ibadah</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Mari bersekutu, memuji Tuhan, dan mendengarkan Firman-Nya bersama-sama. Kami memiliki beberapa jadwal ibadah untuk memenuhi kebutuhan jemaat.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sunday Morning */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden flex flex-col">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
                  alt="Sunday Service"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                  <h2 className="text-2xl font-bold text-white">Ibadah Minggu Raya</h2>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-3 text-slate-700 mb-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-lg">Setiap Minggu, 09:00 WIB</span>
                </div>
                <div className="flex items-start gap-3 text-slate-600 mb-6">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                  <span>Gedung Gereja Utama HKI Cawang Cililitan<br/>Jl. Letjen Sutoyo, Jakarta Timur</span>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Ibadah utama kami yang menggunakan Bahasa Indonesia. Dilengkapi dengan iringan musik kontemporer dan tradisional, serta paduan suara. Tersedia juga Sekolah Minggu pada jam yang sama.
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link to="/kontak">Dapatkan Petunjuk Arah</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Youth Service */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden flex flex-col">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1523580846011-d3a5ce25c59a?q=80&w=2070&auto=format&fit=crop"
                  alt="Youth Service"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                  <h2 className="text-2xl font-bold text-white">Ibadah Pemuda (Naposobulung)</h2>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-3 text-slate-700 mb-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-lg">Setiap Sabtu, 18:00 WIB</span>
                </div>
                <div className="flex items-start gap-3 text-slate-600 mb-6">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                  <span>Ruang Serbaguna Lt. 2<br/>HKI Cawang Cililitan</span>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Ibadah khusus untuk kaum muda (remaja dan pemuda) dengan gaya penyembahan yang lebih dinamis, khotbah yang relevan dengan pergumulan anak muda, dan waktu persekutuan (fellowship) setelah ibadah.
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/pelayanan">Info Pelayanan Pemuda</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Meetings */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Persekutuan & Doa</h2>
            <p className="text-slate-400">Selain ibadah akhir pekan, kami juga memiliki berbagai pertemuan tengah minggu untuk memperdalam iman.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold mb-2">Partangiangan Wijk</h3>
              <p className="text-blue-400 text-sm font-semibold mb-4">Rabu, 19:30 WIB</p>
              <p className="text-slate-400 text-sm">Ibadah sektor/wilayah yang diadakan bergiliran di rumah-rumah jemaat. Momen yang tepat untuk saling mengenal lebih dekat.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold mb-2">Persekutuan Doa</h3>
              <p className="text-blue-400 text-sm font-semibold mb-4">Jumat, 18:00 WIB</p>
              <p className="text-slate-400 text-sm">Waktu khusus untuk berdoa bersama bagi gereja, bangsa, dan pokok-pokok doa jemaat di ruang doa gereja.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold mb-2">Latihan Paduan Suara</h3>
              <p className="text-blue-400 text-sm font-semibold mb-4">Kamis & Sabtu</p>
              <p className="text-slate-400 text-sm">Persiapan untuk melayani dalam ibadah Minggu. Terbuka bagi anggota jemaat yang rindu melayani lewat suara.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Apa yang Terjadi Saat Ibadah?</h2>
            <p className="text-slate-600">Gambaran singkat tentang tata ibadah kami agar Anda merasa nyaman saat berkunjung.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Music className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Pujian & Penyembahan</h3>
              <p className="text-slate-600 text-sm">Kami menyanyikan lagu-lagu pujian kontemporer dan himne tradisional untuk memuliakan Tuhan.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Khotbah Firman</h3>
              <p className="text-slate-600 text-sm">Pesan Alkitabiah yang praktis dan relevan untuk diaplikasikan dalam kehidupan sehari-hari (sekitar 30-40 menit).</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Doa Bersama</h3>
              <p className="text-slate-600 text-sm">Waktu untuk mendoakan kebutuhan jemaat, gereja, dan bangsa secara bersama-sama.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Coffee className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Ramah Tamah</h3>
              <p className="text-slate-600 text-sm">Setelah ibadah selesai, kami sering menyediakan waktu untuk saling menyapa dan menikmati teh/kopi bersama.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Pertanyaan Umum (FAQ)</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Apakah ada fasilitas untuk anak-anak?</h3>
              <p className="text-slate-600">Ya! Kami memiliki Sekolah Minggu yang berjalan bersamaan dengan ibadah utama (09:00 WIB). Anak-anak akan belajar Firman Tuhan dengan cara yang menyenangkan sesuai usia mereka.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Bagaimana dengan tempat parkir?</h3>
              <p className="text-slate-600">Kami menyediakan area parkir yang cukup luas untuk mobil dan motor di kompleks gereja. Petugas keamanan kami akan membantu mengarahkan Anda.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Apakah saya harus memberikan persembahan?</h3>
              <p className="text-slate-600">Memberi persembahan adalah bagian dari ibadah kami, namun sebagai tamu atau pengunjung baru, Anda tidak diwajibkan untuk memberi. Kehadiran Anda sudah menjadi berkat bagi kami.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
