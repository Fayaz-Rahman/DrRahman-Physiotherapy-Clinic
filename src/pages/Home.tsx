import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-background text-foreground">
      {/* Sticky Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose{" "}
              <span className="text-gradient-primary">Dr. Rahman’s Clinic?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience holistic healing through science-driven physiotherapy,
              personalized treatment plans, and patient-first care that sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-medical p-8 text-center animate-scale-in">
              <div className="w-16 h-16 bg-gradient-to-r from-medical-blue to-medical-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Modern Facilities</h3>
              <p className="text-muted-foreground">
                Our clinic is equipped with the latest rehabilitation and pain-relief technologies.
              </p>
            </div>

            <div
              className="card-medical p-8 text-center animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-medical-blue to-medical-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Care</h3>
              <p className="text-muted-foreground">
                Led by Dr. Rahman, our team provides specialized, evidence-based physiotherapy care.
              </p>
            </div>

            <div
              className="card-medical p-8 text-center animate-scale-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-medical-blue to-medical-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Patient-Centered Results</h3>
              <p className="text-muted-foreground">
                We focus on recovery that lasts — improving mobility, function, and quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
