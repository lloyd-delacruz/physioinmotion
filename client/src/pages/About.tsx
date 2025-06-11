import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // SEO optimization for About page
    document.title = "About Physio in Motion | Vancouver Physiotherapy Clinic";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about the mission, philosophy, and story of Physio in Motion — your trusted physiotherapy clinic in Vancouver, Canada.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Learn about the mission, philosophy, and story of Physio in Motion — your trusted physiotherapy clinic in Vancouver, Canada.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Physio in Motion</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to helping you move better and live better through personalized physiotherapy care. Our approach combines evidence-based treatment with compassionate support to achieve lasting results.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="Modern physiotherapy clinic interior with diverse patients and healthcare professionals engaging in movement therapy and rehabilitation exercises"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">
        
        {/* Our Mission */}
        <section>
          <h2 className="text-3xl font-bold text-neutral-dark mb-6">Our Mission</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-mid leading-relaxed mb-4">
              At Physio in Motion, our mission is to empower individuals to achieve optimal movement and function through personalized, evidence-based physiotherapy care. We believe that movement is fundamental to health and well-being, and we are committed to helping each patient unlock their full potential.
            </p>
            <p className="text-neutral-mid leading-relaxed">
              We strive to create a welcoming, supportive environment where patients feel heard, understood, and motivated to participate actively in their recovery journey. Our goal is not just to treat symptoms, but to address the root causes of dysfunction and provide our patients with the tools and knowledge they need for long-term success.
            </p>
          </div>
        </section>

        {/* Our Philosophy */}
        <section>
          <h2 className="text-3xl font-bold text-neutral-dark mb-6">Our Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-neutral-mid leading-relaxed mb-4">
                We believe in treating the whole person, not just the injury or condition. Our patient-centered approach recognizes that every individual has unique needs, goals, and circumstances that influence their path to recovery.
              </p>
              <p className="text-neutral-mid leading-relaxed">
                Our philosophy is built on the foundation of evidence-based practice, continuous learning, and collaborative care. We work closely with each patient to develop treatment plans that are not only clinically effective but also practical and sustainable for their lifestyle.
              </p>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Physiotherapist providing hands-on manual therapy treatment to diverse patient in modern clinical setting focused on movement and wellness"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section>
          <h2 className="text-3xl font-bold text-neutral-dark mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-mid leading-relaxed mb-4">
              Founded in 2015, Physio in Motion began as a vision to create a different kind of physiotherapy clinic—one that prioritized patient experience and outcomes above all else. Our founder, Dr. Sarah Johnson, recognized the need for a more holistic, patient-centered approach to physiotherapy care in the Vancouver community.
            </p>
            <p className="text-neutral-mid leading-relaxed mb-4">
              Starting with a small clinic and a commitment to excellence, we have grown to become a trusted healthcare provider in Vancouver. Our success is built on the relationships we've formed with our patients and the positive outcomes we've achieved together. We've expanded our team to include specialists in various areas of physiotherapy, allowing us to provide comprehensive care for a wide range of conditions.
            </p>
            <p className="text-neutral-mid leading-relaxed">
              Today, we continue to evolve and adapt, incorporating the latest research and treatment techniques while maintaining our core values of compassion, integrity, and clinical excellence. Every member of our team shares a passion for helping people move better and live better, and this shared commitment drives everything we do.
            </p>
          </div>
        </section>

        {/* Our Community Commitment */}
        <section>
          <h2 className="text-3xl font-bold text-neutral-dark mb-6">Our Community Commitment</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Diverse group of Vancouver community members participating in outdoor fitness and movement activities with healthcare professionals supporting active lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-neutral-mid leading-relaxed mb-4">
                As a proud member of the Vancouver community, we are committed to promoting health and wellness beyond our clinic walls. We actively participate in community health initiatives, provide educational workshops, and support local sports teams and active living programs.
              </p>
              <p className="text-neutral-mid leading-relaxed">
                We believe in giving back to the community that has supported us, and we are dedicated to making physiotherapy care accessible and inclusive for all Vancouver residents. Our multicultural team reflects the diversity of our community, and we provide care that is culturally sensitive and responsive to individual needs.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the Physio in Motion difference. Book your consultation today and take the first step towards better movement and improved quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("https://physioinmotion.janeapp.com", "_blank")}
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => window.location.href = "/contact"}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
