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
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Team Preview */}
      <TeamPreview />
    </div>
  );
}
