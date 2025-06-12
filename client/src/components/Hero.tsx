import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.scroll-fade-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden animate-gradient">
      {/* Enhanced Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        poster="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
      >
        <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c9a1a1a1&profile_id=164" type="video/mp4" />
      </video>

      {/* Dynamic Overlay with Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-core-navy/90 via-core-blue-dark/85 to-core-blue/80">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Video Control */}
      <button
        onClick={toggleVideo}
        className="absolute top-24 right-8 z-20 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
      </button>

      {/* Enhanced Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="core-container text-center text-white">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Main Heading with Staggered Animation */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black leading-tight animate-fade-in-up">
                <span className="block text-white drop-shadow-2xl animate-shimmer">Expert</span>
                <span className="block text-white drop-shadow-xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Physiotherapy</span>
                <span className="block text-slate-100 drop-shadow-lg text-4xl md:text-5xl font-medium animate-fade-in-up" style={{ animationDelay: '0.6s' }}>That Moves You Forward</span>
              </h1>
              <p className="text-xl md:text-2xl text-white drop-shadow-lg max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                Vancouver's premier physiotherapy clinic providing evidence-based treatment, personalized care plans, and innovative rehabilitation solutions.
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <button
                onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
                className="group relative overflow-hidden bg-white text-core-navy font-bold text-lg px-12 py-5 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20"
              >
                <span className="relative z-10">Book Your Assessment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-3 border-white text-white hover:bg-white hover:text-core-navy font-bold text-lg px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-105"
              >
                Learn More
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-20 max-w-5xl mx-auto">
              {[
                { number: "15+", label: "Years Excellence", delay: "1.5s" },
                { number: "2000+", label: "Lives Transformed", delay: "1.7s" },
                { number: "98%", label: "Success Rate", delay: "1.9s" }
              ].map((stat, index) => (
                <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: stat.delay }}>
                  <div className="text-6xl font-black text-white mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                    {stat.number}
                  </div>
                  <div className="text-white font-semibold text-xl tracking-wide drop-shadow-lg">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="pt-16 animate-fade-in-up" style={{ animationDelay: '2.1s' }}>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {[
                  "Registered Physiotherapists",
                  "Direct Insurance Billing",
                  "Evidence-Based Care"
                ].map((text, index) => (
                  <div
                    key={index}
                    className="bg-white/15 backdrop-blur-xl rounded-2xl px-8 py-4 border-2 border-white/30 hover:bg-white/25 transition-all duration-500 hover:scale-105 animate-float shadow-2xl"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <span className="text-white font-bold text-lg drop-shadow-lg">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center hover:border-white transition-all duration-300 hover:scale-110">
          <div className="w-1 h-4 bg-white rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}