import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import TeamPreview from "@/components/TeamPreview";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  useEffect(() => {
    // SEO optimization for Home page
    document.title = "Physio in Motion | Vancouver Physiotherapy Clinic";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional physiotherapy services in Vancouver. Expert treatment for sports injuries, chronic pain, and rehabilitation. Book your appointment today with Physio in Motion.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Professional physiotherapy services in Vancouver. Expert treatment for sports injuries, chronic pain, and rehabilitation. Book your appointment today with Physio in Motion.";
      document.head.appendChild(meta);
    }
  }, []);
  const handleBookAppointment = () => {
    // TODO: Implement booking system integration
    alert("Booking system integration would be implemented here");
  };

  return (
    <div>
      {/* Modern Hero Section */}
      <Hero />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Team Preview */}
      <TeamPreview />

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Start Your Recovery?
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Take the first step towards better movement and pain-free living. Our team is here to support you on your journey to optimal health.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-white h-5 w-5 flex-shrink-0" />
                  <span className="text-lg">(416) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-white h-5 w-5 flex-shrink-0" />
                  <span className="text-lg">info@physioinmotion.ca</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-white h-5 w-5 flex-shrink-0" />
                  <span className="text-lg">123 Health Street, Toronto, ON M5V 3A8</span>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Clinic Hours</h3>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
              <Button
                onClick={handleBookAppointment}
                className="w-full bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                Book Your Appointment Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
