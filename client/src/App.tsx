import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import TeamPreview from "@/components/TeamPreview";
import About from "@/components/About";
import Services from "@/components/Services";
import OurTeam from "@/components/OurTeam";
import Contact from "@/components/Contact";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen">
          <Header />
          <main>
            {/* Home Section */}
            <section id="home">
              <Hero />
            </section>

            {/* About Section */}
            <section id="about">
              <About />
            </section>

            {/* Services Section */}
            <section id="services">
              <Services />
            </section>

            {/* Team Section */}
            <section id="team">
              <OurTeam />
            </section>

            {/* Contact Section */}
            <section id="contact">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
