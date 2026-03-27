import { Heart, CreditCard, Building2, Smartphone } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Give() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="w-16 h-16 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Persembahan & Donasi</h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            "Hendaklah masing-masing memberikan menurut kerelaan hatinya, jangan dengan sedih hati atau karena paksaan, sebab Allah mengasihi orang yang memberi dengan sukacita." (2 Korintus 9:7)
          </p>
        </div>
      </section>

      {/* Why We Give */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Mengapa Kita Memberi?</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Memberi bukanlah sebuah kewajiban yang memberatkan, melainkan respons syukur kita atas segala berkat dan anugerah yang telah Tuhan berikan dalam hidup kita.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Melalui persembahan, persepuluhan, dan donasi Anda, gereja dapat terus menjalankan misinya: memberitakan Injil, melayani jemaat, membantu mereka yang kekurangan, dan memelihara rumah Tuhan.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">Transparansi Keuangan</h3>
                <p className="text-blue-800 text-sm">
                  Kami berkomitmen untuk mengelola setiap persembahan dengan penuh tanggung jawab dan integritas. Laporan keuangan gereja selalu dibacakan setiap hari Minggu dan tersedia di warta jemaat.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2069&auto=format&fit=crop"
                  alt="Offering and giving"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Cara Memberi</h2>
            <p className="text-slate-600">Pilih metode yang paling memudahkan Anda untuk menyalurkan persembahan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Bank Transfer */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Transfer Bank</h3>
              <p className="text-slate-600 text-sm mb-6">
                Transfer langsung ke rekening resmi gereja. Harap tambahkan kode unik jika ada (misal: Rp 100.001 untuk Persembahan Pembangunan).
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-4">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Bank Mandiri</p>
                  <p className="font-mono text-lg font-bold text-slate-900">123-456-789-0123</p>
                  <p className="text-sm text-slate-600">a.n. HKI Cawang Cililitan</p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">BCA</p>
                  <p className="font-mono text-lg font-bold text-slate-900">098-765-4321</p>
                  <p className="text-sm text-slate-600">a.n. HKI Cawang Cililitan</p>
                </div>
              </div>
            </div>

            {/* QRIS */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">QRIS (E-Wallet)</h3>
              <p className="text-slate-600 text-sm mb-6">
                Scan kode QRIS menggunakan aplikasi mobile banking, GoPay, OVO, Dana, atau e-wallet lainnya.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center justify-center">
                <div className="w-48 h-48 bg-white border-2 border-slate-200 rounded-lg flex items-center justify-center mb-4 p-2">
                  {/* Placeholder for QR Code */}
                  <div className="w-full h-full border-4 border-dashed border-slate-300 rounded flex items-center justify-center text-slate-400 font-medium text-center p-4">
                    Gambar QRIS<br/>HKI Cawang
                  </div>
                </div>
                <p className="text-sm font-bold text-slate-900">HKI CAWANG CILILITAN</p>
                <p className="text-xs text-slate-500">NMID: ID1234567890</p>
              </div>
            </div>

            {/* In Person */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ibadah Langsung</h3>
              <p className="text-slate-600 text-sm mb-6">
                Anda dapat memberikan persembahan secara tunai atau menggunakan amplop persembahan saat ibadah berlangsung.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Kantong Persembahan (Kolekte) diedarkan selama ibadah.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Kotak Persembahan Khusus tersedia di pintu masuk/keluar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Amplop Persepuluhan & Ucapan Syukur dapat diserahkan ke majelis bertugas.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Konfirmasi Persembahan</h2>
          <p className="text-slate-600 mb-8">
            Jika Anda memberikan persembahan khusus (Pembangunan, Diakonia, dll) melalui transfer bank, mohon konfirmasi ke bendahara gereja agar dapat dicatat dengan benar.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <a href="https://wa.me/6281234567890?text=Syalom,%20saya%20ingin%20konfirmasi%20persembahan..." target="_blank" rel="noopener noreferrer">
              Konfirmasi via WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
