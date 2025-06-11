import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserX, Zap, Brain, ArrowRight } from "lucide-react";

const services = [
  {
    icon: UserX,
    title: "Injury Rehabilitation",
    description: "Comprehensive treatment for sports injuries, workplace injuries, and post-surgical recovery with personalized rehabilitation programs.",
    color: "text-primary",
    bgColor: "bg-primary bg-opacity-10",
  },
  {
    icon: Zap,
    title: "Sports Performance",
    description: "Optimize your athletic performance with movement analysis, strength training, and injury prevention strategies.",
    color: "text-secondary",
    bgColor: "bg-secondary bg-opacity-10",
  },
  {
    icon: Brain,
    title: "Pain Management",
    description: "Evidence-based approaches to chronic pain management including manual therapy, exercise prescription, and education.",
    color: "text-accent",
    bgColor: "bg-accent bg-opacity-10",
  },
];

export default function ServicesPreview() {
  const handleLearnMore = () => {
    // TODO: Navigate to specific service or show more details
    console.log("Navigate to service details");
  };

  const handleViewAllServices = () => {
    // TODO: Navigate to services page
    window.location.href = "/services";
  };

  return (
    <section id="services-section" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-mid max-w-2xl mx-auto">
            We offer comprehensive physiotherapy services tailored to your specific needs, from injury rehabilitation to performance enhancement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className={`${service.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <service.icon className={`${service.color} h-8 w-8`} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-mid mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={handleLearnMore}
                  className="text-primary font-medium hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={handleViewAllServices}
            className="bg-primary hover:bg-blue-700 text-white px-8 py-3"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
