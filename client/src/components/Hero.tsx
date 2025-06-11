import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <section className="core-video-hero">
      {/* Video Background for Desktop */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block"
        poster="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
      >
        {/* Placeholder video URL - would be replaced with actual physiotherapy video */}
        <source src="https://sample-videos.com/zip/10/mp4/1080/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
      </video>

      {/* Mobile Background Image */}
      <div 
        className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />

      {/* Overlay */}
      <div className="core-video-overlay" />

      {/* Content */}
      <div className="core-video-content">
        <div className="core-container text-center text-white">
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* Main Heading */}
            <div className="scroll-fade-in">
              <h1 className="core-heading-hero text-white mb-6">
                Expert Physiotherapy
                <span className="block text-blue-200">That Moves You Forward</span>
              </h1>
              <p className="core-text-lead text-blue-100 max-w-3xl mx-auto mb-8">
                Leading physiotherapy clinic in Vancouver providing evidence-based treatment, personalized care plans, and innovative rehabilitation solutions to help you achieve optimal movement and live pain-free.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="scroll-fade-in flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
                className="core-btn-primary text-lg px-12 py-5 hover:scale-105 transition-transform duration-300 shadow-2xl"
              >
                Book Your Assessment
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="core-btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-blue-900 text-lg px-12 py-5"
              >
                Explore Services
              </button>
            </div>

            {/* Key Stats */}
            <div className="scroll-fade-in grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="text-5xl font-bold text-white mb-3 animate-fade-in-up group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-blue-200 font-medium text-lg">Years of Excellence</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold text-white mb-3 animate-fade-in-up group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>2000+</div>
                <div className="text-blue-200 font-medium text-lg">Lives Transformed</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold text-white mb-3 animate-fade-in-up group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.4s' }}>98%</div>
                <div className="text-blue-200 font-medium text-lg">Patient Satisfaction</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="scroll-fade-in pt-12">
              <div className="flex flex-wrap justify-center items-center gap-6 opacity-90">
                <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-xl px-8 py-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 core-hover-lift">
                  <span className="text-white font-medium text-lg">Registered Physiotherapists</span>
                </div>
                <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-xl px-8 py-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 core-hover-lift">
                  <span className="text-white font-medium text-lg">Direct Billing Available</span>
                </div>
                <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-xl px-8 py-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 core-hover-lift">
                  <span className="text-white font-medium text-lg">Evidence-Based Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" 
           onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="w-6 h-10 border-2 border-white border-opacity-60 rounded-full flex justify-center hover:border-opacity-100 transition-all duration-300">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}