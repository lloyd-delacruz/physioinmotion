import { Menu, X, Phone, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  };

  const isHomePage = activeSection === "home";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'services', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar background and text colors
  const getNavbarClasses = () => {
    if (isHomePage && !isScrolled) {
      // Transparent navbar on home page hero
      return 'bg-transparent';
    } else {
      // Solid navbar on all other pages or when scrolled
      return 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100';
    }
  };

  const getLogoClasses = () => {
    if (isHomePage && !isScrolled) {
      return 'text-white hover:text-blue-200';
    } else {
      return 'text-core-navy hover:text-core-blue';
    }
  };

  const getNavLinkClasses = (isActiveLink: boolean) => {
    const baseClasses = "px-4 py-2 text-base font-semibold transition-all duration-300 rounded-lg nav-underline";
    
    if (isHomePage && !isScrolled) {
      // Home page transparent navbar
      if (isActiveLink) {
        return `${baseClasses} active text-white`;
      } else {
        return `${baseClasses} text-blue-100 hover:text-white hover:bg-white/10`;
      }
    } else {
      // Solid navbar
      if (isActiveLink) {
        return `${baseClasses} active text-core-blue`;
      } else {
        return `${baseClasses} text-core-gray-700 hover:text-core-blue hover:bg-blue-50`;
      }
    }
  };

  const getPhoneClasses = () => {
    if (isHomePage && !isScrolled) {
      return 'text-blue-100';
    } else {
      return 'text-core-gray-600';
    }
  };

  const getButtonVariant = () => {
    if (isHomePage && !isScrolled) {
      return 'secondary';
    } else {
      return 'default';
    }
  };

  const getMobileButtonClasses = () => {
    if (isHomePage && !isScrolled) {
      return 'text-white hover:bg-white/20';
    } else {
      return 'text-core-gray-700 hover:text-core-blue hover:bg-gray-100';
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${getNavbarClasses()}`}>
      <div className="core-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className={`text-2xl font-bold transition-colors cursor-pointer ${getLogoClasses()}`}
            >
              Physio in Motion
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className={getNavLinkClasses(isActive(item.href))}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center text-sm font-medium ${getPhoneClasses()}`}>
              <Phone className="h-4 w-4 mr-2" />
              <span>(604) 555-0123</span>
            </div>
            <Button 
              variant={getButtonVariant()}
              size="sm"
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isHomePage && !isScrolled 
                  ? 'bg-white !text-core-navy hover:bg-slate-100 hover:!text-core-navy shadow-lg' 
                  : 'bg-core-navy !text-white hover:bg-core-blue-dark hover:!text-white shadow-md'
              }`}
              onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Assessment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${getMobileButtonClasses()}`}
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
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className={`px-4 py-3 text-base font-semibold transition-all duration-300 rounded-lg text-left ${
                    isActive(item.href)
                      ? "text-core-blue bg-blue-50 border-l-4 border-core-blue"
                      : "text-core-gray-700 hover:text-core-blue hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </button>
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
