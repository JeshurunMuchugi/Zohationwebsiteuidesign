import { HardHat, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#FF5E00] rounded-lg flex items-center justify-center">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-2xl">Zohation</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building excellence through innovative construction solutions. Transforming visions into reality.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FF5E00] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FF5E00] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FF5E00] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FF5E00] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#FF5E00] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#FF5E00] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-[#FF5E00] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#FF5E00] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#FF5E00] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h4 className="text-white mb-6">Utility Pages</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF5E00] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF5E00] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF5E00] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF5E00] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF5E00] transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF5E00] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Construction Avenue,
                  <br />
                  Building District, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF5E00]" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-[#FF5E00] transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF5E00]" />
                <a href="mailto:info@zohation.com" className="text-gray-400 hover:text-[#FF5E00] transition-colors">
                  info@zohation.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © 2025 Zohation. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
