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
    // SEO optimization for Our Team page
    document.title = "Our Team | Physio in Motion Vancouver Physiotherapy";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Meet our experienced physiotherapy team in Vancouver. Our registered physiotherapists and healthcare professionals provide expert, compassionate care for all your rehabilitation needs.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Meet our experienced physiotherapy team in Vancouver. Our registered physiotherapists and healthcare professionals provide expert, compassionate care for all your rehabilitation needs.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of registered physiotherapists and healthcare professionals is committed to providing personalized, evidence-based care. We believe in treating the whole person, not just the condition, to help you achieve lasting results.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Meet Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your consultation today and experience the difference personalized physiotherapy care can make.
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
