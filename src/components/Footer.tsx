import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Clock, Send } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Newsletter Section */}
        <div className="bg-slate-800 rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-700">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Berlangganan Warta Jemaat</h3>
            <p className="text-slate-400">Dapatkan informasi terbaru seputar jadwal ibadah, acara, dan renungan mingguan langsung di kotak masuk Anda.</p>
          </div>
          <form className="w-full md:w-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Alamat Email Anda" 
              className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white min-w-[250px]"
              required
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 h-auto">
              Daftar <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Intro */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                HKI
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white leading-tight tracking-tight">HKI Cawang</span>
                <span className="text-xs text-blue-400 font-medium tracking-wider">CILILITAN</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Gereja yang ramah, hangat, dan berpusat pada Kristus. Kami rindu melihat setiap orang bertumbuh dalam iman dan kasih kepada sesama.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Tautan Cepat</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/tentang" className="hover:text-blue-400 transition-colors">Tentang Kami</Link></li>
              <li><Link to="/ibadah" className="hover:text-blue-400 transition-colors">Jadwal Ibadah</Link></li>
              <li><Link to="/khotbah" className="hover:text-blue-400 transition-colors">Khotbah Terbaru</Link></li>
              <li><Link to="/acara" className="hover:text-blue-400 transition-colors">Acara Gereja</Link></li>
              <li><Link to="/pelayanan" className="hover:text-blue-400 transition-colors">Pelayanan & Komunitas</Link></li>
              <li><Link to="/persembahan" className="hover:text-blue-400 transition-colors">Persembahan</Link></li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Jadwal Ibadah</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                <div>
                  <p className="text-white font-medium">Ibadah Minggu Pagi</p>
                  <p className="text-sm text-slate-400">09:00 WIB (Bahasa Indonesia)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                <div>
                  <p className="text-white font-medium">Sekolah Minggu</p>
                  <p className="text-sm text-slate-400">09:00 WIB</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                <div>
                  <p className="text-white font-medium">Ibadah Pemuda</p>
                  <p className="text-sm text-slate-400">Sabtu, 18:00 WIB</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Hubungi Kami</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm leading-relaxed">
                  Jl. Letjen Sutoyo No.XX, Cawang, Cililitan, Jakarta Timur 13630
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm">info@hkicawang.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} HKI Cawang Cililitan. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="/privasi" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link to="/syarat" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
