import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ExternalLink, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: ""
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
    
    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "", honeypot: "" });
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="core-section relative z-10">
        <div className="core-container">
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-6 animate-shimmer">
              Get In Touch
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Ready to start your journey to better movement? Connect with our expert team and begin your path to optimal health today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="scroll-fade-in">
              <div className="space-y-8">
                <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <MapPin className="h-5 w-5 mr-3 text-slate-300" />
                      Visit Our Clinic
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-200 mb-4">
                      123 Health Street<br />
                      Vancouver, BC V6B 1A1<br />
                      Canada
                    </p>
                    <p className="text-sm text-slate-400">
                      Convenient location with accessible parking and public transit access.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <Phone className="h-5 w-5 mr-3 text-slate-300" />
                      Call Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-slate-200 mb-2">(604) 555-0123</p>
                    <p className="text-sm text-slate-400">
                      Call us during business hours for appointments and inquiries.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <Clock className="h-5 w-5 mr-3 text-slate-300" />
                      Clinic Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Monday - Friday</span>
                        <span className="font-medium text-slate-200">8:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Saturday</span>
                        <span className="font-medium text-slate-200">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Sunday</span>
                        <span className="font-medium text-slate-200">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Online Booking CTA */}
                <Card className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border-white/30 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">Book Online 24/7</h3>
                    <p className="text-slate-300 mb-4">
                      Schedule your appointment anytime using our secure online booking system.
                    </p>
                    <Button 
                      onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
                      className="group w-full bg-white text-slate-900 hover:bg-slate-100 font-semibold"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Book on JaneApp
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="scroll-fade-in">
              <Card className="bg-white/10 backdrop-blur-xl border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Send Us a Message</CardTitle>
                  <p className="text-slate-300">
                    Have questions about our services? We'd love to hear from you.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-green-300 mb-2">Thank you!</h3>
                        <p className="text-green-200">
                          Your message has been sent successfully. We'll get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-200 font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-white/40"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-200 font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-white/40"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-slate-200 font-medium">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-white/40 min-h-[120px]"
                          placeholder="Tell us about your needs or ask any questions..."
                        />
                      </div>

                      {/* Honeypot field */}
                      <div style={{ display: 'none' }}>
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
                        className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg py-6 hover:scale-105 transition-all duration-300"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>

                      <p className="text-sm text-slate-400 text-center">
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
    </div>
  );
}