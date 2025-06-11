import { Button } from "@/components/ui/button";
import ServicesPreview from "@/components/ServicesPreview";
import TeamPreview from "@/components/TeamPreview";
import { Award, Clock, Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  const handleBookAppointment = () => {
    // TODO: Implement booking system integration
    alert("Booking system integration would be implemented here");
  };

  const handleLearnMore = () => {
    // TODO: Navigate to about page or scroll to services
    window.location.href = "/about";
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Physio in Motion
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 font-light">
                  Restoring movement, enhancing performance, improving quality of life
                </p>
              </div>
              
              <p className="text-lg text-blue-50 leading-relaxed max-w-2xl">
                Our experienced team of physiotherapists is dedicated to helping you recover from injury, manage pain, and achieve your movement goals through personalized treatment plans and evidence-based care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleBookAppointment}
                  className="bg-white text-primary hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
                >
                  Book Your Assessment
                </Button>
                <Button
                  onClick={handleLearnMore}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Award className="text-accent h-5 w-5" />
                  <span className="text-blue-100">Licensed Professionals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-accent h-5 w-5" />
                  <span className="text-blue-100">Flexible Scheduling</span>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional physiotherapist consulting with patient"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ServicesPreview />

      {/* Team Preview */}
      <TeamPreview />

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Start Your Recovery?
              </h2>
              <p className="text-lg text-green-100 leading-relaxed">
                Take the first step towards better movement and pain-free living. Our team is here to support you on your journey to optimal health.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-accent h-5 w-5 flex-shrink-0" />
                  <span className="text-lg">(416) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-accent h-5 w-5 flex-shrink-0" />
                  <span className="text-lg">info@physioinmotion.ca</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-accent h-5 w-5 flex-shrink-0" />
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
                className="w-full bg-accent hover:bg-yellow-600 text-white px-8 py-4 text-lg font-semibold"
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
