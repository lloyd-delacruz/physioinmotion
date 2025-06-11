import { useEffect } from "react";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    title: "Clinic Director & Senior Physiotherapist",
    specialization: "Leading expert in orthopedic rehabilitation and sports medicine with over 12 years of clinical experience.",
    credentials: "MSc PT, FCAMPT",
  },
  {
    name: "Dr. Michael Chen",
    title: "Sports Performance Specialist",
    specialization: "Specialized in athletic performance optimization and movement analysis for professional athletes.",
    credentials: "DPT, CSCS",
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Manual Therapy & Pain Management",
    specialization: "Expert in chronic pain management and advanced manual therapy techniques for complex conditions.",
    credentials: "PhD PT, COMT",
  },
];

export default function TeamPreview() {
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
    <section className="core-section bg-white">
      <div className="core-container">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="core-heading-section text-core-navy mb-6">
            Meet Our Expert Team
          </h2>
          <p className="core-text-lead text-core-gray-600 max-w-3xl mx-auto">
            Our registered physiotherapists combine years of clinical expertise with the latest evidence-based practices to deliver exceptional care tailored to your unique needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="text-center group scroll-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Avatar */}
              <div className="relative mb-8">
                <div className="w-40 h-40 rounded-full mx-auto bg-gradient-to-br from-core-blue-pale to-core-blue/20 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 core-hover-lift">
                  <div className="w-24 h-24 bg-core-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="space-y-4">
                <h3 className="core-heading-card text-core-navy group-hover:text-core-blue transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="space-y-2">
                  <p className="text-core-blue font-semibold text-lg">
                    {member.title}
                  </p>
                  <p className="text-core-gray-500 font-medium text-sm tracking-wide">
                    {member.credentials}
                  </p>
                </div>
                <p className="core-text-body text-core-gray-600 leading-relaxed">
                  {member.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Divider */}
        <div className="core-section-divider" />

        {/* Call to Action */}
        <div className="text-center scroll-fade-in">
          <div className="bg-core-gradient-navy rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Experience Personalized Care
            </h3>
            <p className="core-text-lead text-blue-100 mb-8 max-w-2xl mx-auto">
              Our multidisciplinary team works together to create comprehensive treatment plans that address your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = "/our-team"}
                className="bg-white text-core-navy hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Meet Our Full Team
              </button>
              <button
                onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
                className="border-2 border-white text-white hover:bg-white hover:text-core-navy font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
