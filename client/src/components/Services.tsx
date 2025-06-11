import { useEffect } from "react";
import ServiceCard from "@/components/ServiceCard";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  slug?: string;
}

const services: Service[] = [
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    description: "Hands-on treatment techniques including joint mobilization, soft tissue massage, and specialized manual techniques to restore movement and reduce pain effectively.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    slug: "manual-therapy"
  },
  {
    id: "sports-rehabilitation",
    title: "Sports Rehabilitation",
    description: "Specialized treatment for athletes and active individuals focusing on injury recovery, performance optimization, and return-to-sport protocols.",
    image: "https://images.unsplash.com/photo-1571019613540-996a0629a3be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    slug: "sports-rehabilitation"
  },
  {
    id: "chronic-pain",
    title: "Chronic Pain Management",
    description: "Comprehensive approach to managing persistent pain conditions through movement therapy, education, and evidence-based treatment strategies.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    slug: "chronic-pain"
  },
  {
    id: "post-surgical",
    title: "Post-Surgical Rehabilitation",
    description: "Specialized recovery programs designed to restore function and mobility following orthopedic surgeries and medical procedures.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    slug: "post-surgical"
  },
  {
    id: "pediatric",
    title: "Pediatric Physiotherapy",
    description: "Specialized care for children and adolescents addressing developmental delays, movement disorders, and pediatric conditions in a fun, supportive environment.",
    image: "https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    slug: "pediatric"
  },
  {
    id: "workplace-injury",
    title: "Workplace Injury Rehabilitation",
    description: "Comprehensive treatment for work-related injuries including ergonomic assessments, injury prevention programs, and safe return-to-work protocols.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    slug: "workplace-injury"
  }
];

export default function Services() {
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
    <div className="core-section bg-white">
      <div className="core-container">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="core-heading-section text-core-navy mb-6">
            Our Services
          </h2>
          <p className="core-text-lead text-core-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of physiotherapy services tailored to meet your individual needs and help you achieve optimal movement and function. Our evidence-based treatments are designed to get you back to what you love doing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="scroll-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                slug={service.slug}
              />
            </div>
          ))}
        </div>

        {/* Section Divider */}
        <div className="core-section-divider" />

        {/* Call to Action */}
        <div className="text-center scroll-fade-in">
          <div className="bg-core-gradient-primary rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="core-text-lead text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team of registered physiotherapists is here to help you achieve your health and movement goals. Book your assessment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
                className="bg-white text-core-blue hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Book Assessment
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-core-blue font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}