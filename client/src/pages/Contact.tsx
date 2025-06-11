import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    // SEO optimization for Contact page
    document.title = "Contact Us | Physio in Motion Vancouver Physiotherapy";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contact Physio in Motion in Vancouver. Book appointments, ask questions, or visit our clinic. Phone, email, and online booking available.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Contact Physio in Motion in Vancouver. Book appointments, ask questions, or visit our clinic. Phone, email, and online booking available.";
      document.head.appendChild(meta);
    }
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "" // Spam protection
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot spam protection
    if (formData.honeypot) {
      return; // Likely spam, silently ignore
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    }, 3000);
  };

  const handleBookAppointment = () => {
    window.open("https://physioinmotion.janeapp.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to start your journey to better movement? Get in touch with our team or book your appointment today.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Prominent Booking CTA */}
        <div className="text-center mb-16">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-xl">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Book Your Appointment?</h2>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Schedule your consultation with our licensed physiotherapists through our secure online booking system.
              </p>
              <Button
                onClick={handleBookAppointment}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                Book an Appointment
                <ExternalLink className="ml-3 h-5 w-5" />
              </Button>
              <p className="text-blue-200 text-sm mt-4">
                Powered by JaneApp • Opens in new window • PHI-compliant booking
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-neutral-dark mb-8">Get In Touch</h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark mb-1">Visit Our Clinic</h3>
                    <p className="text-neutral-mid">
                      123 Health Street<br />
                      Toronto, ON M5V 3A8<br />
                      Canada
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark mb-1">Call Us</h3>
                    <a 
                      href="tel:+14165550123" 
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      (416) 555-0123
                    </a>
                    <p className="text-neutral-mid text-sm">Monday - Friday, 8:00 AM - 7:00 PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark mb-1">Email Us</h3>
                    <a 
                      href="mailto:info@physioinmotion.ca"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      info@physioinmotion.ca
                    </a>
                    <p className="text-neutral-mid text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark mb-1">Clinic Hours</h3>
                    <div className="text-neutral-mid space-y-1">
                      <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Google Maps integration placeholder</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-neutral-dark">Send Us a Message</CardTitle>
                <p className="text-neutral-mid">
                  Have a question? Send us a message and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-dark mb-2">Thank You!</h3>
                    <p className="text-neutral-mid">Your message has been sent. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - hidden from users */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="mt-1"
                        placeholder="Tell us about your condition, preferred appointment times, or any questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-sm text-neutral-mid text-center">
                      For appointment bookings, please use our{" "}
                      <button
                        type="button"
                        onClick={handleBookAppointment}
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        online booking system
                      </button>
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
