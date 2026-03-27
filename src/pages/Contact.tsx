import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Hubungi Kami</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Kami siap melayani, menjawab pertanyaan, dan mendoakan Anda. Jangan ragu untuk menghubungi kami melalui berbagai saluran yang tersedia.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Informasi Kontak</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Alamat Gereja</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Jl. Letjen Sutoyo No.XX, Cawang<br />
                      Kec. Kramat Jati, Kota Jakarta Timur<br />
                      Daerah Khusus Ibukota Jakarta 13630
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Telepon & WhatsApp</h3>
                    <p className="text-slate-600 mb-1">Sekretariat: (021) 809-XXXX</p>
                    <p className="text-slate-600">WhatsApp: +62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Email</h3>
                    <p className="text-slate-600">info@hkicawang.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Jam Operasional Sekretariat</h3>
                    <p className="text-slate-600 mb-1">Selasa - Sabtu: 09:00 - 16:00 WIB</p>
                    <p className="text-slate-600">Senin: Libur</p>
                  </div>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-300">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 flex-col gap-2">
                  <MapPin className="w-8 h-8" />
                  <span className="font-medium">Google Maps Embed</span>
                </div>
                {/* Real embed would go here */}
                {/* <iframe src="..." width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe> */}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan / Pokok Doa</h2>
              <p className="text-slate-600 mb-8">
                Silakan isi formulir di bawah ini. Tim kami akan segera merespons pesan Anda atau mendoakan pokok doa yang Anda sampaikan.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Nama Lengkap *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">No. WhatsApp / HP *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      placeholder="0812..."
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email (Opsional)</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="nama@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium text-slate-700">Kategori Pesan *</label>
                  <select 
                    id="category" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white"
                    required
                  >
                    <option value="">Pilih kategori...</option>
                    <option value="umum">Pertanyaan Umum</option>
                    <option value="doa">Permohonan Doa</option>
                    <option value="kunjungan">Permintaan Kunjungan</option>
                    <option value="pelayanan">Informasi Pelayanan</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Pesan *</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none"
                    placeholder="Tulis pesan atau pokok doa Anda di sini..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-base font-bold flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Kirim Pesan
                </Button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Data Anda aman bersama kami dan tidak akan dibagikan kepada pihak ketiga.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
