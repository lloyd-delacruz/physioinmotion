import { useEffect } from "react";

export default function About() {
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

  return (
    <div className="core-section bg-core-gray-50">
      <div className="core-container">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="core-heading-section text-core-navy mb-6">
            About Physio in Motion
          </h2>
          <p className="core-text-lead text-core-gray-600 max-w-3xl mx-auto">
            We are dedicated to helping you move better and live better through personalized physiotherapy care. Our approach combines evidence-based treatment with compassionate support to achieve lasting results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Mission */}
          <div className="scroll-fade-in">
            <h3 className="text-2xl font-bold text-core-navy mb-4">Our Mission</h3>
            <p className="core-text-body text-core-gray-600 leading-relaxed mb-4">
              At Physio in Motion, our mission is to empower individuals to achieve optimal movement and function through personalized, evidence-based physiotherapy care. We believe that movement is fundamental to health and well-being, and we are committed to helping each patient unlock their full potential.
            </p>
            <p className="core-text-body text-core-gray-600 leading-relaxed">
              We strive to create a welcoming, supportive environment where patients feel heard, understood, and motivated to participate actively in their recovery journey.
            </p>
          </div>

          {/* Philosophy */}
          <div className="scroll-fade-in">
            <h3 className="text-2xl font-bold text-core-navy mb-4">Our Philosophy</h3>
            <p className="core-text-body text-core-gray-600 leading-relaxed mb-4">
              We believe in treating the whole person, not just the injury or condition. Our patient-centered approach recognizes that every individual has unique needs, goals, and circumstances that influence their path to recovery.
            </p>
            <p className="core-text-body text-core-gray-600 leading-relaxed">
              Our philosophy is built on the foundation of evidence-based practice, continuous learning, and collaborative care. We work closely with each patient to develop treatment plans that are not only clinically effective but also practical and sustainable for their lifestyle.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="scroll-fade-in text-center">
          <h3 className="text-2xl font-bold text-core-navy mb-6">Our Story</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="core-text-body text-core-gray-600 leading-relaxed">
              Founded in 2015, Physio in Motion began as a vision to create a different kind of physiotherapy clinic—one that prioritized patient experience and outcomes above all else. Our founder, Dr. Sarah Johnson, recognized the need for a more holistic, patient-centered approach to physiotherapy care in the Vancouver community.
            </p>
            <p className="core-text-body text-core-gray-600 leading-relaxed">
              Starting with a small clinic and a commitment to excellence, we have grown to become a trusted healthcare provider in Vancouver. Our success is built on the relationships we've formed with our patients and the positive outcomes we've achieved together.
            </p>
            <p className="core-text-body text-core-gray-600 leading-relaxed">
              Today, we continue to evolve and adapt, incorporating the latest research and treatment techniques while maintaining our core values of compassion, integrity, and clinical excellence.
            </p>
          </div>
        </div>

        {/* Section Divider */}
        <div className="core-section-divider" />

        {/* Community Commitment */}
        <div className="text-center scroll-fade-in">
          <div className="bg-core-gradient-navy rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Our Community Commitment
            </h3>
            <p className="core-text-lead text-blue-100 mb-8 max-w-3xl mx-auto">
              As a proud member of the Vancouver community, we are committed to promoting health and wellness beyond our clinic walls. We actively participate in community health initiatives, provide educational workshops, and support local sports teams and active living programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
                className="bg-white text-core-navy hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Book Consultation
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-core-navy font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}