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
    id: "sports-injury",
    title: "Sports Injury Rehabilitation",
    description: "Comprehensive rehabilitation programs for athletes and active individuals, focusing on injury recovery, performance optimization, and safe return to sport activities.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    slug: "sports-injury"
  },
  {
    id: "post-surgical",
    title: "Post-Surgical Physiotherapy",
    description: "Specialized post-operative care and rehabilitation to optimize healing, restore function, and ensure successful recovery following orthopedic and other surgical procedures.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    slug: "post-surgical"
  },
  {
    id: "chronic-pain",
    title: "Chronic Pain Management",
    description: "Evidence-based treatment approaches for persistent pain conditions, incorporating manual therapy, exercise prescription, and patient education for long-term relief.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    slug: "chronic-pain"
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
    // SEO optimization for Services page
    document.title = "Services | Physio in Motion Vancouver Physiotherapy";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Comprehensive physiotherapy services in Vancouver including manual therapy, sports injury treatment, chronic pain management, and rehabilitation programs.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Comprehensive physiotherapy services in Vancouver including manual therapy, sports injury treatment, chronic pain management, and rehabilitation programs.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of physiotherapy services tailored to meet your individual needs and help you achieve optimal movement and function. Our evidence-based treatments are designed to get you back to what you love doing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Recovery?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your initial assessment today and take the first step towards better movement and pain-free living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => window.location.href = "/contact"}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
