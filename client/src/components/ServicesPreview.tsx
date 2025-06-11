import { useEffect } from "react";
import { UserX, Zap, Brain, ArrowRight } from "lucide-react";

const services = [
  {
    icon: UserX,
    title: "Injury Rehabilitation",
    description: "Comprehensive treatment for sports injuries, workplace injuries, and post-surgical recovery with personalized rehabilitation programs.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: Zap,
    title: "Sports Performance",
    description: "Optimize your athletic performance with movement analysis, strength training, and injury prevention strategies.",
    image: "https://images.unsplash.com/photo-1571019613540-996a0629a3be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: Brain,
    title: "Pain Management",
    description: "Evidence-based approaches to chronic pain management including manual therapy, exercise prescription, and education.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
];

export default function ServicesPreview() {
  useEffect(() => {
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
    <section id="services" className="core-section bg-core-gray-50">
      <div className="core-container">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="core-heading-section text-core-navy mb-6">
            Expert Physiotherapy Services
          </h2>
          <p className="core-text-lead text-core-gray-600 max-w-3xl mx-auto">
            From injury rehabilitation to performance optimization, our comprehensive range of evidence-based treatments are designed to help you move better and live pain-free.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="core-card core-hover-lift scroll-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} physiotherapy treatment at Physio in Motion Vancouver clinic`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-core-navy/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="core-heading-card text-core-navy mb-4 group-hover:text-core-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="core-text-body text-core-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => window.location.href = "/services"}
                  className="inline-flex items-center text-core-blue font-medium hover:text-core-blue-light transition-all duration-300 group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section Divider */}
        <div className="core-section-divider" />

        {/* Call to Action */}
        <div className="text-center scroll-fade-in">
          <h3 className="text-2xl font-bold text-core-navy mb-4">
            Ready to Start Your Recovery Journey?
          </h3>
          <p className="core-text-body text-core-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of registered physiotherapists is here to provide personalized care tailored to your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = "/services"}
              className="core-btn-primary hover:scale-105 transition-transform duration-300"
            >
              View All Services
            </button>
            <button
              onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
              className="core-btn-secondary hover:scale-105 transition-transform duration-300"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
