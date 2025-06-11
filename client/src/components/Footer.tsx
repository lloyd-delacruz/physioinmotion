import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Clock, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-core-navy text-white">
      <div className="core-container py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Clinic Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">Physio in Motion</h3>
              <p className="text-blue-200 leading-relaxed text-lg max-w-lg">
                Vancouver's premier physiotherapy clinic dedicated to restoring movement, enhancing performance, and improving quality of life through evidence-based care and personalized treatment.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Visit Our Clinic</p>
                  <p className="text-blue-200">123 Health Street, Vancouver, BC V6B 1A1</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Call Us Today</p>
                  <p className="text-blue-200">(604) 555-0123</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <p className="text-blue-200">info@physioinmotion.ca</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Clinic Hours</h4>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-300 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Mon - Fri</p>
                  <p className="text-blue-200 text-sm">8:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-300 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Saturday</p>
                  <p className="text-blue-200 text-sm">9:00 AM - 4:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-4 w-4 text-blue-300 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Direct Billing</p>
                  <p className="text-blue-200 text-sm">Most Insurance Plans</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h5 className="text-white font-medium mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-600/20 p-3 rounded-lg text-blue-300 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-blue-600/20 p-3 rounded-lg text-blue-300 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-blue-600/20 p-3 rounded-lg text-blue-300 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/50 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-blue-300 text-sm">
              © 2024 Physio in Motion. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm">
              <a
                href="#"
                className="text-blue-300 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-blue-300 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-blue-300 hover:text-white transition-colors duration-300"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
