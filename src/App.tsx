import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Sermons from "./pages/Sermons";
import Events from "./pages/Events";
import Ministries from "./pages/Ministries";
import Contact from "./pages/Contact";
import Give from "./pages/Give";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/ibadah" element={<Services />} />
            <Route path="/khotbah" element={<Sermons />} />
            <Route path="/acara" element={<Events />} />
            <Route path="/pelayanan" element={<Ministries />} />
            <Route path="/kontak" element={<Contact />} />
            <Route path="/persembahan" element={<Give />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
