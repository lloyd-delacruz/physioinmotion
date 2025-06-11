import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "" // Spam protection
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "", honeypot: "" });
  };

  const handleBookAppointment = () => {
    window.open("https://physioinmotion.janeapp.com", "_blank");
  };

  return (
    <div className="core-section bg-white">
      <div className="core-container">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="core-heading-section text-core-navy mb-6">
            Contact Us
          </h2>
          <p className="core-text-lead text-core-gray-600 max-w-3xl mx-auto">
            Ready to start your journey to better movement? Get in touch with our team or book your appointment today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="scroll-fade-in">
            <div className="space-y-8">
              <Card className="core-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-core-navy">
                    <MapPin className="h-5 w-5 mr-3 text-core-blue" />
                    Visit Our Clinic
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-core-gray-600 mb-4">
                    123 Health Street<br />
                    Vancouver, BC V6B 1A1<br />
                    Canada
                  </p>
                  <p className="text-sm text-core-gray-500">
                    Convenient location with accessible parking and public transit access.
                  </p>
                </CardContent>
              </Card>

              <Card className="core-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-core-navy">
                    <Phone className="h-5 w-5 mr-3 text-core-blue" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-core-gray-700 mb-2">(604) 555-0123</p>
                  <p className="text-sm text-core-gray-500">
                    Call us during business hours for appointments and inquiries.
                  </p>
                </CardContent>
              </Card>

              <Card className="core-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-core-navy">
                    <Clock className="h-5 w-5 mr-3 text-core-blue" />
                    Clinic Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-core-gray-600">Monday - Friday</span>
                      <span className="font-medium text-core-gray-700">8:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-core-gray-600">Saturday</span>
                      <span className="font-medium text-core-gray-700">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-core-gray-600">Sunday</span>
                      <span className="font-medium text-core-gray-700">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Online Booking CTA */}
              <Card className="core-card bg-core-gradient-primary text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Book Online 24/7</h3>
                  <p className="text-blue-100 mb-4">
                    Schedule your appointment anytime using our secure online booking system.
                  </p>
                  <Button 
                    onClick={handleBookAppointment}
                    className="bg-white text-core-blue hover:bg-blue-50 font-semibold"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Book on JaneApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-fade-in">
            <Card className="core-card">
              <CardHeader>
                <CardTitle className="text-core-navy">Send Us a Message</CardTitle>
                <p className="text-core-gray-600">
                  Have questions about our services? We'd love to hear from you.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">Thank you!</h3>
                      <p className="text-green-700">
                        Your message has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-core-gray-700 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-core-gray-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-core-gray-700 font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full min-h-[120px]"
                        placeholder="Tell us about your needs or ask any questions..."
                      />
                    </div>

                    {/* Honeypot field - hidden from users */}
                    <div style={{ display: 'none' }}>
                      <Label htmlFor="honeypot">Leave this field empty</Label>
                      <Input
                        id="honeypot"
                        name="honeypot"
                        type="text"
                        value={formData.honeypot}
                        onChange={handleInputChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full core-btn-primary"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-sm text-core-gray-500 text-center">
                      * Required fields. We respect your privacy and will never share your information.
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