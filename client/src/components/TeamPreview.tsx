import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    title: "Lead Physiotherapist, MSc PT",
    specialization: "Specializes in orthopedic rehabilitation and sports injury recovery with 10+ years of experience.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  },
  {
    name: "Dr. Michael Chen",
    title: "Sports Physiotherapist, DPT",
    specialization: "Expert in performance optimization and injury prevention for athletes of all levels.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Manual Therapy Specialist, PhD PT",
    specialization: "Focuses on chronic pain management and manual therapy techniques with advanced certification.",
    image: "https://images.unsplash.com/photo-1594824475460-1bb12dfc1a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  },
];

export default function TeamPreview() {
  const handleViewAllTeam = () => {
    // TODO: Navigate to team page
    window.location.href = "/our-team";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-neutral-mid max-w-2xl mx-auto">
            Our registered physiotherapists bring years of experience and specialized training to help you achieve your health and movement goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full mx-auto bg-blue-100 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">
                {member.title}
              </p>
              <p className="text-neutral-mid text-sm leading-relaxed">
                {member.specialization}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={handleViewAllTeam}
            size="lg"
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
          >
            Meet Our Full Team
          </Button>
        </div>
      </div>
    </section>
  );
}
