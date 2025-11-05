import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-clinic-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "110%", // ✅ Zooms in the image to fill viewport
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm border border-accent/20">
                👋 Welcome to Dr. Rahman’s Physiotherapy Clinic
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="block text-white">Recover.</span>
              <span className="block text-gradient-accent">Restore.</span>
              <span className="block text-white">Rebuild.</span>
            </h1>

            <p
              className="text-lg md:text-xl mb-8 max-w-xl"
              style={{
                textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                color: "rgba(255,255,255,0.95)",
              }}
            >
              At{" "}
              <span className="font-semibold text-white">
                Dr. Rahman’s Physiotherapy Clinic
              </span>{" "}
              in Villivakkam, we combine science, skill, and compassion to help you
              move better, live stronger, and heal faster — one session at a time.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-hero inline-flex items-center justify-center gap-2 group"
              >
                <Calendar className="h-5 w-5 group-hover:animate-bounce-gentle" />
                Book Appointment
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">
                  Flexible
                </div>
                <div className="text-white/80 text-sm">Appointments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">
                  2500+
                </div>
                <div className="text-white/80 text-sm">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">
                  99%
                </div>
                <div className="text-white/80 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Keep Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 md:h-32 lg:h-40 text-[hsl(var(--background))]"
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
