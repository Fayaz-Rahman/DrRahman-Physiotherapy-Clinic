import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-clinic-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative -mt-[88px] min-h-screen flex items-center overflow-hidden bg-cover bg-center pt-[88px]"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Overlay for cinematic effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent sm:bg-gradient-to-r z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-12 pb-6 lg:pt-16">


        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="text-white text-center sm:text-left max-w-2xl mx-auto lg:mx-0 drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]">
            {/* Welcome Tag */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary))] font-medium rounded-full text-sm border border-[hsl(var(--primary)/0.3)] backdrop-blur-sm">
                👋 Welcome to Dr. Rahman’s Physiotherapy Clinic
              </span>
            </div>

            {/* Headings */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block text-white">Recover.</span>
              <span className="block text-[hsl(var(--primary))]">Restore.</span>
              <span className="block text-white">Rebuild.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              At{" "}
              <span className="font-semibold text-white">
                Dr. Rahman’s Physiotherapy Clinic
              </span>{" "}
              in Villivakkam, we combine science, skill, and compassion to help
              you move better, live stronger, and heal faster — one session at a
              time.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-hero inline-flex items-center justify-center gap-2 group px-8 py-4 text-base sm:text-lg font-semibold"
              >
                <Calendar className="h-5 w-5 group-hover:animate-bounce-gentle" />
                Book Appointment
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/20">
              {[
                { label: "Appointments", value: "Flexible" },
                { label: "Patients Treated", value: "2500+" },
                { label: "Satisfaction Rate", value: "99%" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-3xl font-bold text-[hsl(var(--primary))]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20 sm:h-28 md:h-36 lg:h-44 text-[hsl(var(--background))]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,256L60,250.7C120,245,240,235,360,224C480,213,600,203,720,197.3C840,192,960,192,1080,197.3C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
