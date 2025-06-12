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
  // Removed scroll animations for better navigation UX

  return (
    <div className="relative bg-gradient-to-br from-slate-100 via-white to-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-40 h-40 bg-core-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-56 h-56 bg-core-navy/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-core-blue-light/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="core-section relative z-10">
        <div className="core-container">
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="text-5xl md:text-6xl font-black text-core-navy mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl md:text-2xl text-core-blue max-w-4xl mx-auto leading-relaxed">
              Our dedicated team of registered physiotherapists and healthcare professionals is committed to providing personalized, evidence-based care that delivers exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 scroll-fade-in border border-slate-200 hover:border-core-blue/30 hover:scale-105"
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

          {/* Call to Action */}
          <div className="text-center scroll-fade-in mt-20">
            <div className="bg-gradient-to-r from-core-navy via-core-blue-dark to-core-blue rounded-3xl p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-6">
                  Ready to Meet Our Team?
                </h3>
                <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Schedule your consultation today and experience the difference personalized physiotherapy care can make in your recovery journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button
                    onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
                    className="group bg-white text-core-navy font-bold text-lg px-12 py-5 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    Book Assessment
                    <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</div>
                  </button>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-white text-white hover:bg-white hover:text-core-navy font-bold text-lg px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-105"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}