import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-500 to-green-400">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            backgroundPosition: "center 30%"
          }}
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-teal-800/60 to-green-800/70" />
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="block">Move Better.</span>
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
              Live Better.
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 ease-out delay-300 ${
              isVisible 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            }`}
          >
            Personalized physiotherapy & rehabilitation in <span className="text-yellow-300 font-semibold">Toronto</span>, Canada
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
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-10 py-6 text-lg rounded-full shadow-2xl transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-3xl group"
            >
              Book an Appointment
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              onClick={handleLearnMore}
              variant="outline"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-teal-600 px-10 py-6 text-lg rounded-full backdrop-blur-sm bg-white/10 font-semibold transition-all duration-300 ease-out hover:scale-105 group"
            >
              <Play className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div 
            className={`mt-16 flex flex-wrap justify-center items-center gap-8 text-blue-100 transform transition-all duration-1000 ease-out delay-700 ${
              isVisible 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-medium">Licensed Professionals</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="font-medium">Direct Insurance Billing</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="font-medium">Same Day Appointments</span>
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