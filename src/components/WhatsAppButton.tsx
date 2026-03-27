import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "6281234567890"; // Replace with actual number
  const message = "Syalom, saya ingin bertanya tentang HKI Cawang Cililitan.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 text-sm font-medium py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Hubungi Kami
        <span className="absolute top-1/2 -translate-y-1/2 -right-1.5 border-4 border-transparent border-l-white"></span>
      </span>
    </a>
  );
}
