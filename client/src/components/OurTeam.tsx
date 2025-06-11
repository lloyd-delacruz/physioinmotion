import { useEffect } from "react";
import TeamMemberCard from "@/components/TeamMemberCard";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    role: "Clinic Director & Senior Physiotherapist",
    bio: "Sarah leads our team with over 12 years of experience in orthopedic rehabilitation and sports medicine. She is passionate about helping patients return to their active lifestyles through evidence-based treatment approaches and personalized care plans.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "michael-chen",
    name: "Dr. Michael Chen",
    role: "Registered Physiotherapist",
    bio: "Michael specializes in sports injury rehabilitation and performance optimization. With his background in kinesiology and advanced manual therapy techniques, he helps athletes and active individuals achieve their movement goals safely and effectively.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "emily-rodriguez",
    name: "Dr. Emily Rodriguez",
    role: "Manual Therapy Specialist",
    bio: "Emily brings expertise in chronic pain management and advanced manual therapy techniques. She focuses on providing comprehensive care for complex conditions, combining hands-on treatment with patient education and movement retraining.",
    image: "https://images.unsplash.com/photo-1594824475460-1bb12dfc1a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "amanda-kim",
    name: "Amanda Kim",
    role: "Client Services Coordinator",
    bio: "Amanda ensures every patient receives exceptional care from their first contact with our clinic. She coordinates appointments, insurance matters, and treatment plans while providing warm, professional support throughout each patient's recovery journey.",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "james-thompson",
    name: "James Thompson",
    role: "Kinesiologist",
    bio: "James specializes in movement analysis and exercise prescription to optimize human performance. With his expertise in biomechanics and exercise science, he develops customized fitness programs that support rehabilitation goals and prevent future injuries.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: "maria-santos",
    name: "Maria Santos",
    role: "Rehabilitation Assistant",
    bio: "Maria provides hands-on support during treatment sessions and helps patients with therapeutic exercises. Her compassionate approach and attention to detail ensure patients feel comfortable and confident throughout their rehabilitation journey.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

export default function OurTeam() {
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
    <div className="core-section bg-core-gray-50">
      <div className="core-container">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="core-heading-section text-core-navy mb-6">
            Meet Our Team
          </h2>
          <p className="core-text-lead text-core-gray-600 max-w-3xl mx-auto">
            Our dedicated team of registered physiotherapists and healthcare professionals is committed to providing personalized, evidence-based care. We believe in treating the whole person, not just the condition, to help you achieve lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="scroll-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TeamMemberCard
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            </div>
          ))}
        </div>

        {/* Section Divider */}
        <div className="core-section-divider" />

        {/* Call to Action */}
        <div className="text-center scroll-fade-in">
          <div className="bg-core-gradient-navy rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Meet Our Team?
            </h3>
            <p className="core-text-lead text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule your consultation today and experience the difference personalized physiotherapy care can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
                className="bg-white text-core-blue hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Book an Appointment
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