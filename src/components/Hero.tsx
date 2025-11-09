import { ArrowRight, Calendar, Star, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-clinic-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative -mt-[88px] min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center pt-[88px]"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/30 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/60 sm:to-transparent z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Text Content */}
          <div className="text-white text-center lg:text-left max-w-2xl mx-auto lg:mx-0 drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] flex-1">
            {/* Welcome Tag */}
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary))] font-semibold rounded-full text-sm sm:text-base border border-[hsl(var(--primary)/0.3)] backdrop-blur-sm">
                <Star className="h-4 w-4 mr-2" />
                Welcome to Dr. Rahman's Physiotherapy Clinic
              </span>
            </div>

            {/* Headings */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold leading-tight sm:leading-tight md:leading-tight mb-6 sm:mb-8">
              <span className="block text-white">Recover.</span>
              <span className="block text-[hsl(var(--primary))] mt-2">Restore.</span>
              <span className="block text-white mt-2">Rebuild.</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-gray-200 leading-relaxed sm:leading-relaxed max-w-3xl">
              At{" "}
              <span className="font-semibold text-white">
                Dr. Rahman's Physiotherapy Clinic
              </span>{" "}
              in Villivakkam, we combine science, skill, and compassion to help
              you move better, live stronger, and heal faster.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {[
                "Neurology Specialist",
                "8+ Years Experience",
                "Home Visits Available",
                "Evidence-Based Treatment"
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start gap-2 text-gray-200">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--primary))] flex-shrink-0" />
                  <span className="text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 mb-12 sm:mb-16">
              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-white font-semibold rounded-xl sm:rounded-2xl text-lg sm:text-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2 border-transparent hover:border-white/20"
              >
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-pulse" />
                Book Appointment
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={() => {
                  const element = document.querySelector("#about");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl sm:rounded-2xl text-lg sm:text-xl backdrop-blur-sm border-2 border-white/20 hover:border-white/40 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 border-t border-white/20">
              {[
                { label: "Years Experience", value: "8+" },
                { label: "Patients Treated", value: "2500+" },
                { label: "Recovery Rate", value: "99%" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Optional Image or Additional Content */}
          <div className="flex-1 max-w-lg lg:max-w-none hidden lg:block">
            {/* You can add a doctor image or treatment illustration here */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--primary))] text-white rounded-full text-sm font-semibold mb-4">
                  <Calendar className="h-4 w-4" />
                  Same Day Appointments
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Help You
                </h3>
                <p className="text-gray-200 text-lg mb-6">
                  Emergency cases and urgent consultations welcome
                </p>
                <div className="text-[hsl(var(--primary))] text-2xl font-bold">
                  Call: +91 63829 27750
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-16 sm:h-24 md:h-32 lg:h-40 xl:h-48 text-[hsl(var(--background))]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,256L60,250.7C120,245,240,235,360,224C480,213,600,203,720,197.3C840,192,960,192,1080,197.3C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <div className="animate-bounce flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;