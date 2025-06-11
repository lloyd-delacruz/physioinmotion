import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBookAppointment = () => {
    // TODO: Integrate with JaneApp booking system
    window.open("https://janeapp.com/", "_blank");
  };

  const handleLearnMore = () => {
    // Smooth scroll to services section
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            backgroundPosition: "center 30%"
          }}
        />
        {/* Blue-tinted Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/75 via-blue-800/70 to-blue-700/65" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className={`transform transition-all duration-1000 ease-out ${
            isVisible 
              ? "translate-y-0 opacity-100" 
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white">Move Better.</span>
            <span className="block text-blue-300">Live Better.</span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light transform transition-all duration-1000 ease-out delay-300 ${
              isVisible 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            }`}
          >
            Personalized physiotherapy & rehabilitation in <span className="text-white font-medium">Toronto</span>, Canada
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 ease-out delay-500 ${
              isVisible 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            }`}
          >
            <Button
              onClick={handleBookAppointment}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg shadow-xl transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl group"
            >
              Book an Appointment
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              onClick={handleLearnMore}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold backdrop-blur-sm bg-white/10 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 group"
            >
              Learn More
              <ChevronDown className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div 
            className={`mt-16 flex flex-wrap justify-center items-center gap-6 text-blue-100 transform transition-all duration-1000 ease-out delay-700 ${
              isVisible 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="font-medium text-sm">Licensed Professionals</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="font-medium text-sm">Direct Insurance Billing</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="font-medium text-sm">Same Day Appointments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}