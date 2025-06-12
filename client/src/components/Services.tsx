import { useEffect } from "react";
import { ArrowRight, Star, Clock, Shield, Users } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  duration: string;
  image: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    id: "orthopedic",
    title: "Orthopedic Rehabilitation",
    description: "Comprehensive treatment for musculoskeletal injuries, post-surgical recovery, and chronic pain conditions.",
    features: [
      "Post-surgical rehabilitation",
      "Joint replacement recovery",
      "Fracture rehabilitation",
      "Chronic pain management",
      "Movement analysis"
    ],
    duration: "45-60 minutes",
    image: "/attached_assets/ortho.jpg",
    popular: true
  },
  {
    id: "sports-medicine",
    title: "Sports Medicine & Performance",
    description: "Specialized care for athletes and active individuals to prevent injuries and optimize performance.",
    features: [
      "Sports injury treatment",
      "Performance optimization",
      "Return-to-sport protocols",
      "Injury prevention programs",
      "Biomechanical analysis"
    ],
    duration: "60 minutes",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    description: "Hands-on treatment techniques to improve mobility, reduce pain, and restore function.",
    features: [
      "Joint mobilization",
      "Soft tissue therapy",
      "Myofascial release",
      "Trigger point therapy",
      "Spinal manipulation"
    ],
    duration: "45 minutes",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "neurological",
    title: "Neurological Rehabilitation",
    description: "Specialized treatment for neurological conditions to improve function and quality of life.",
    features: [
      "Stroke rehabilitation",
      "Balance and coordination training",
      "Gait training",
      "Neuroplasticity exercises",
      "Adaptive equipment training"
    ],
    duration: "60 minutes",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "pelvic-health",
    title: "Pelvic Health Physiotherapy",
    description: "Confidential and specialized care for pelvic floor dysfunction and related conditions.",
    features: [
      "Pelvic floor assessment",
      "Incontinence treatment",
      "Pre/post-natal care",
      "Pelvic pain management",
      "Core strengthening"
    ],
    duration: "60 minutes",
    image: "https://images.unsplash.com/photo-1559757175-cea4ceaefb5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "workplace-injury",
    title: "Workplace Injury Rehabilitation",
    description: "Comprehensive care for work-related injuries with focus on safe return to work.",
    features: [
      "WorkSafeBC approved",
      "Functional capacity evaluations",
      "Work conditioning programs",
      "Ergonomic assessments",
      "Return-to-work planning"
    ],
    duration: "45-90 minutes",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

export default function Services() {
  // Removed scroll animations for better navigation UX

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="core-section relative z-10">
        <div className="core-container">
          {/* Header Section */}
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Our Services
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive physiotherapy services tailored to your unique needs and goals. From injury recovery to performance optimization, we're here to help you move better.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden hover:scale-105 transition-all duration-500 scroll-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold flex items-center animate-pulse">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-slate-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-slate-400 animate-fade-in-up"
                        style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.1)}s` }}
                      >
                        <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-slate-500 italic">
                        +{service.features.length - 3} more benefits
                      </div>
                    )}
                  </div>

                  {/* Duration & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-400">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <button
                      onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
                      className="group/btn bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 flex items-center hover:scale-105"
                    >
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <div className="text-center mb-16 scroll-fade-in">
              <h3 className="text-4xl font-bold mb-6">Why Choose Our Services?</h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We combine clinical expertise with personalized care to deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Evidence-Based",
                  description: "All treatments are backed by the latest research and clinical evidence."
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Registered physiotherapists with specialized training and certifications."
                },
                {
                  icon: Star,
                  title: "Personalized Care",
                  description: "Every treatment plan is tailored to your specific needs and goals."
                },
                {
                  icon: Clock,
                  title: "Flexible Scheduling",
                  description: "Convenient appointment times that work with your busy schedule."
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="group text-center bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 scroll-fade-in hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{benefit.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center scroll-fade-in">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h3 className="text-4xl font-bold mb-6">Ready to Start Your Recovery?</h3>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Book your initial assessment today and take the first step towards optimal health and movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
                  className="group bg-white text-slate-900 font-bold text-lg px-12 py-5 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20 flex items-center justify-center"
                >
                  Book Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold text-lg px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  Ask Questions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}