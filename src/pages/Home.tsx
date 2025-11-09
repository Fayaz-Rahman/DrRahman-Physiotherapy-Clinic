import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Award, Users, Clock, Shield, Target, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-gray-800">
      {/* Sticky Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-amber-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6">
              <Award className="h-4 w-4" />
              Trusted Care Since 2016
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              Why Choose{" "}
              <span className="text-[#B98341]">
                Dr. Rahman's Clinic
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference with our evidence-based approach, cutting-edge technology, 
              and personalized care that puts your recovery journey first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-amber-200 transition-all duration-500">
              <div className="inline-flex p-3 rounded-2xl bg-[#B98341] text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#B98341] transition-colors duration-300">
                Certified Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                B.P.T, M.P.T (Neurology) certified specialist with 8+ years of clinical experience 
                in neurological and orthopaedic rehabilitation.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>8+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-amber-200 transition-all duration-500">
              <div className="inline-flex p-3 rounded-2xl bg-[#B98341] text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#B98341] transition-colors duration-300">
                Personalized Treatment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Customized rehabilitation programs tailored to your specific condition, 
                goals, and lifestyle for optimal recovery outcomes.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>2500+ Patients Treated</span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-amber-200 transition-all duration-500 md:col-span-2 lg:col-span-1">
              <div className="inline-flex p-3 rounded-2xl bg-[#B98341] text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#B98341] transition-colors duration-300">
                Comprehensive Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From advanced electrotherapy to manual techniques and home exercise programs - 
                we provide complete rehabilitation solutions under one roof.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Award className="h-4 w-4" />
                  <span>99% Recovery Rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 lg:mt-20 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { number: "8+", label: "Years Experience", icon: Clock },
                { number: "2500+", label: "Patients Treated", icon: Users },
                { number: "99%", label: "Recovery Rate", icon: Award },
                { number: "100%", label: "Patient Satisfaction", icon: Heart },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-3 rounded-2xl bg-amber-50 text-amber-600 mb-4 group-hover:bg-amber-100 group-hover:text-amber-700 transition-all duration-300">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
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