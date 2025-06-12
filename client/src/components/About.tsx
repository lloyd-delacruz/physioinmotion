import { useEffect } from "react";
import { Award, Users, Target, Heart, CheckCircle, ArrowRight } from "lucide-react";
import storyImage from "@assets/story.jpg";

export default function About() {
  // Removed scroll animations for better navigation UX

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every treatment plan is tailored to your unique needs, goals, and lifestyle.",
      color: "text-red-500"
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "Our team maintains the highest standards through continuous education and evidence-based practice.",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work closely with you and your healthcare team to ensure comprehensive care.",
      color: "text-green-500"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "We focus on measurable outcomes that matter most to your recovery and quality of life.",
      color: "text-purple-500"
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Excellence" },
    { number: "6", label: "Expert Therapists" },
    { number: "2000+", label: "Successful Cases" },
    { number: "98%", label: "Patient Satisfaction" }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-core-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-core-navy/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-core-blue-light/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="core-section relative z-10">
        <div className="core-container">
          {/* Header Section */}
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="text-5xl md:text-6xl font-black text-core-navy mb-6">
              About Physio in Motion
            </h2>
            <p className="text-xl md:text-2xl text-core-blue max-w-4xl mx-auto leading-relaxed">
              Vancouver's premier physiotherapy clinic dedicated to helping you achieve optimal movement and live pain-free through personalized, evidence-based care.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="scroll-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-core-navy to-core-blue rounded-2xl blur opacity-20 animate-pulse"></div>
                <img
                  src={storyImage}
                  width="800"
                  height="600"
                  alt="Modern physiotherapy clinic interior"
                  className="relative w-full h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-8 scroll-fade-in animate-slide-in-right">
              <h3 className="text-4xl font-bold text-core-navy mb-6">Our Story</h3>
              <div className="space-y-6 text-lg text-core-blue-dark leading-relaxed">
                <p>
                  Founded in 2009, Physio in Motion began with a simple yet powerful vision: to provide exceptional physiotherapy care that truly makes a difference in people's lives. What started as a small clinic has grown into Vancouver's most trusted physiotherapy destination.
                </p>
                <p>
                  Our approach combines cutting-edge treatment techniques with compassionate, personalized care. We believe that every patient deserves individual attention and a treatment plan designed specifically for their unique needs and goals.
                </p>
                <p>
                  Today, we're proud to have helped over 2,000 patients return to their active lifestyles, whether they're professional athletes, weekend warriors, or individuals simply looking to live without pain.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-6">
                {['Award-Winning Care', 'Evidence-Based Treatment', 'Personalized Approach'].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-core-navy text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-24">
            <div className="text-center mb-16 scroll-fade-in">
              <h3 className="text-4xl font-bold text-core-navy mb-6">Our Core Values</h3>
              <p className="text-xl text-core-blue max-w-3xl mx-auto">
                These principles guide everything we do and ensure you receive the highest quality care.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 scroll-fade-in border border-slate-200 hover:border-core-blue/30 hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-core-navy mb-4">{value.title}</h4>
                  <p className="text-core-blue-dark leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-24">
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 rounded-3xl p-12 text-white relative overflow-hidden border-2 border-slate-600">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-12 scroll-fade-in">
                  <h3 className="text-4xl font-bold mb-4 text-white">Our Achievements</h3>
                  <p className="text-xl text-slate-200 max-w-2xl mx-auto">
                    Numbers that reflect our commitment to excellence and patient satisfaction.
                  </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="text-center group scroll-fade-in animate-scale-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="text-5xl md:text-6xl font-black mb-3 group-hover:scale-110 transition-transform duration-300 text-white drop-shadow-lg">
                        {achievement.number}
                      </div>
                      <div className="text-slate-200 font-semibold text-lg">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center scroll-fade-in">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-200 max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold text-core-navy mb-8">Our Mission</h3>
              <p className="text-xl text-core-blue-dark leading-relaxed mb-8">
                To empower our patients to achieve their optimal physical potential through innovative, evidence-based physiotherapy treatments delivered with compassion, expertise, and unwavering dedication to their success.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
                  className="group bg-core-navy text-white font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-core-navy text-core-navy hover:bg-core-navy hover:text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}