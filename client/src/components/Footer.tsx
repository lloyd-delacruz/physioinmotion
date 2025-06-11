import { Link } from "wouter";
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl">Physio in Motion</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Dedicated to restoring movement, enhancing performance, and improving quality of life through evidence-based physiotherapy care.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300">123 Health Street, Toronto, ON M5V 3A8</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300">(416) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300">info@physioinmotion.ca</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-dark">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-dark">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-dark">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/our-team">
                  <a className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-dark">
                    Our Team
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-dark">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-dark"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-dark"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-dark"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">Emergency Hours Available</p>
              <p className="text-gray-300 text-sm">Direct Billing Accepted</p>
              <p className="text-gray-300 text-sm">Licensed & Insured</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Physio in Motion. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-dark"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-dark"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
