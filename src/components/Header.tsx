import { useState, useEffect } from "react";
import { HardHat } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#FF5E00] rounded-lg flex items-center justify-center">
              <HardHat className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-2xl">Zohation</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-[#FF5E00] transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-[#FF5E00] transition-colors">
              About
            </a>
            <a href="#services" className="text-white hover:text-[#FF5E00] transition-colors">
              Services
            </a>
            <a href="#blog" className="text-white hover:text-[#FF5E00] transition-colors">
              Blog
            </a>
            <a href="#projects" className="text-white hover:text-[#FF5E00] transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-white hover:text-[#FF5E00] transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-[#FF5E00] text-white px-6 py-3 rounded-xl hover:bg-[#ff7a33] transition-all duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
