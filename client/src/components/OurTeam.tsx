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
            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-core-navy/10 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-core-blue/10 to-transparent rounded-full blur-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10 p-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-core-navy rounded-2xl mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                
                <h3 className="text-4xl font-black text-core-navy mb-6 leading-tight">
                  Ready to Meet Our Team?
                </h3>
                
                <p className="text-xl text-core-blue-dark mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                  Schedule your consultation today and experience the difference personalized physiotherapy care can make in your recovery journey.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button
                    onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
                    className="group bg-core-navy text-white font-bold text-lg px-12 py-5 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center hover:bg-core-blue-dark"
                  >
                    Book Assessment
                    <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</div>
                  </button>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-core-navy text-core-navy hover:bg-core-navy hover:text-white font-bold text-lg px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-105"
                  >
                    Contact Us
                  </button>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 mt-10 pt-8 border-t border-slate-200">
                  <div className="flex items-center text-core-blue-dark">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">Direct Insurance Billing</span>
                  </div>
                  <div className="flex items-center text-core-blue-dark">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">Registered Therapists</span>
                  </div>
                  <div className="flex items-center text-core-blue-dark">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">15+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}