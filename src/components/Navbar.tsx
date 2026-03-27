import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Beranda", path: "/" },
  { name: "Tentang Kami", path: "/tentang" },
  { name: "Jadwal Ibadah", path: "/ibadah" },
  { name: "Khotbah", path: "/khotbah" },
  { name: "Acara", path: "/acara" },
  { name: "Pelayanan", path: "/pelayanan" },
  { name: "Kontak", path: "/kontak" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-700 transition-colors">
              HKI
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 leading-tight tracking-tight">HKI Cawang</span>
              <span className="text-xs text-slate-500 font-medium tracking-wider">CILILITAN</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-600",
                    location.pathname === link.path
                      ? "text-blue-600"
                      : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 border-l pl-6">
              <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                <Link to="/persembahan">Persembahan</Link>
              </Button>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-200">
                <Link to="/ibadah">Kunjungi Kami</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-4 py-3 rounded-md text-base font-medium transition-colors",
                location.pathname === link.path
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 mt-2">
            <Button asChild variant="outline" className="w-full justify-center">
              <Link to="/persembahan">Persembahan</Link>
            </Button>
            <Button asChild className="w-full justify-center bg-blue-600">
              <Link to="/ibadah">Kunjungi Kami</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
