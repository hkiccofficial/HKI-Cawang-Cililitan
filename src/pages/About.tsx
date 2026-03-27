import { Users, Heart, BookOpen, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tentang HKI Cawang Cililitan</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Mengenal lebih dekat sejarah, visi, misi, dan nilai-nilai yang kami pegang teguh sebagai komunitas orang percaya.
          </p>
        </div>
      </section>

      {/* History & Identity */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Sejarah & Identitas Kami</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Huria Kristen Indonesia (HKI) Cawang Cililitan telah berdiri sebagai mercusuar kasih karunia Tuhan di wilayah Jakarta Timur selama puluhan tahun. Berawal dari persekutuan kecil keluarga-keluarga Kristen yang rindu beribadah bersama, kini kami telah bertumbuh menjadi jemaat yang dinamis.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Kami adalah bagian dari sinode Huria Kristen Indonesia (HKI), memegang teguh pengakuan iman rasuli, dan berkomitmen untuk memberitakan Injil Yesus Kristus dalam kata dan perbuatan.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1980+</div>
                  <div className="text-sm font-medium text-slate-700">Tahun Berdiri</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm font-medium text-slate-700">Jemaat Aktif</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1548625361-edcbbaea62b3?q=80&w=2070&auto=format&fit=crop"
                  alt="Church history"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-slate-800 p-10 rounded-2xl border border-slate-700">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                "Menjadi jemaat yang bertumbuh dalam iman, berakar dalam firman, dan berbuah dalam kasih bagi kemuliaan nama Tuhan di tengah masyarakat."
              </p>
            </div>
            <div className="bg-slate-800 p-10 rounded-2xl border border-slate-700">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Menyelenggarakan ibadah yang hidup dan berkenan kepada Allah.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Membina jemaat melalui pengajaran Firman Tuhan yang sehat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Membangun persekutuan yang saling mengasihi dan memperhatikan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Melaksanakan misi pelayanan kasih dan penginjilan.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nilai-Nilai Inti</h2>
            <p className="text-slate-600">Prinsip-prinsip yang membimbing setiap langkah dan pelayanan kami.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Berpusat pada Alkitab</h3>
              <p className="text-slate-600">Firman Tuhan adalah otoritas tertinggi dan panduan mutlak bagi kehidupan dan pelayanan kami.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Kasih yang Nyata</h3>
              <p className="text-slate-600">Mewujudkan kasih Kristus melalui tindakan nyata, kepedulian, dan penerimaan terhadap sesama.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Komunitas Otentik</h3>
              <p className="text-slate-600">Membangun hubungan yang jujur, saling mendukung, dan bertumbuh bersama dalam anugerah.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Tim Pelayan Kami</h2>
            <p className="text-slate-600">Mengenal para pelayan Tuhan yang mendedikasikan diri untuk menggembalakan jemaat.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Pdt. J. Sitorus, S.Th", 
                role: "Pendeta Resort", 
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
                desc: "Melayani sebagai gembala utama, memimpin visi gereja, dan membimbing pertumbuhan rohani seluruh jemaat."
              },
              { 
                name: "Pdt. M. Pasaribu, M.Th", 
                role: "Pendeta Jemaat", 
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
                desc: "Fokus pada pelayanan pastoral, konseling keluarga, dan pembinaan generasi muda gereja."
              },
              { 
                name: "St. R. Hutagalung", 
                role: "Guru Huria", 
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
                desc: "Bertanggung jawab atas pengajaran, katekisasi, dan pendalaman Alkitab bagi jemaat."
              },
              { 
                name: "St. A. Nainggolan", 
                role: "Ketua Parhalado", 
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
                desc: "Memimpin majelis jemaat dalam administrasi, operasional, dan program-program gereja."
              }
            ].map((person, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 text-center group flex flex-col">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{person.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-4">{person.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect (For Newcomers) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Baru Pertama Kali Berkunjung?</h2>
                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                  Kami tahu bahwa mengunjungi gereja baru bisa terasa mengintimidasi. Kami ingin Anda merasa senyaman mungkin.
                </p>
                <ul className="space-y-6 mb-10">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 font-bold">1</div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Pakaian Santai & Sopan</h4>
                      <p className="text-blue-100 text-sm">Datanglah dengan pakaian yang membuat Anda nyaman. Kebanyakan jemaat berpakaian rapi kasual.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 font-bold">2</div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Penyambutan Hangat</h4>
                      <p className="text-blue-100 text-sm">Tim penyambut kami akan menyapa Anda di pintu depan dan membantu Anda menemukan tempat duduk.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 font-bold">3</div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Ibadah yang Menguatkan</h4>
                      <p className="text-blue-100 text-sm">Nikmati pujian penyembahan yang mengangkat hati dan khotbah yang relevan dengan kehidupan sehari-hari.</p>
                    </div>
                  </li>
                </ul>
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100 w-fit">
                  <Link to="/ibadah">Lihat Jadwal Ibadah</Link>
                </Button>
              </div>
              <div className="relative hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"
                  alt="Welcoming community"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
