import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Team", href: "/our-team" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="core-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className={`text-2xl font-bold transition-colors cursor-pointer ${
                isScrolled ? 'text-core-navy' : 'text-white'
              } hover:text-core-blue`}>
                Physio in Motion
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/10 ${
                  isActive(item.href)
                    ? isScrolled 
                      ? "text-core-blue bg-blue-50" 
                      : "text-white bg-white/20"
                    : isScrolled
                      ? "text-core-gray-700 hover:text-core-blue"
                      : "text-blue-100 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className={`flex items-center text-sm font-medium ${
              isScrolled ? 'text-core-gray-600' : 'text-blue-100'
            }`}>
              <Phone className="h-4 w-4 mr-2" />
              <span>(604) 555-0123</span>
            </div>
            <button 
              className={`core-btn-primary text-sm px-6 py-3 ${
                isScrolled ? '' : 'bg-white text-core-blue hover:bg-blue-50'
              }`}
              onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
            >
              Book Assessment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-core-gray-700 hover:text-core-blue hover:bg-gray-100' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-2xl shadow-xl">
            <div className="flex flex-col space-y-2 p-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg ${
                    isActive(item.href)
                      ? "text-core-blue bg-blue-50 border-l-4 border-core-blue"
                      : "text-core-gray-700 hover:text-core-blue hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center text-core-gray-600 text-sm mb-4 px-4">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(604) 555-0123</span>
                </div>
                <button 
                  className="w-full core-btn-primary text-sm py-3"
                  onClick={() => {
                    window.open("https://physioinmotion.janeapp.com", "_blank");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Book Assessment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
