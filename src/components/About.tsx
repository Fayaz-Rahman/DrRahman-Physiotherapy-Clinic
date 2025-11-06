import { Heart, Target, Users } from "lucide-react";
import doctorImage from "@/assets/doctor-portrait.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Doctor Section */}
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Doctor Image */}
          <div className="animate-slide-in-right">
            <img
              src={doctorImage}
              alt="Dr. R.B. Ijaj Rahman, Consultant Physiotherapist"
             className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"

            />
          </div>

          {/* Doctor Info */}
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-[hsl(var(--secondary))] text-[hsl(var(--primary))] font-medium rounded-full text-sm border border-[hsl(var(--border))] mb-4">
              👨‍⚕️ Meet Our Consultant
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--primary))]">
              Dr. R.B. Ijaj Rahman, B.P.T, M.P.T (Neurology)
            </h2>

            <p className="text-lg text-[hsl(var(--text-secondary))] mb-6 leading-relaxed">
              Consultant Physiotherapist specializing in Neurology with extensive
              experience in orthopaedic, geriatric, neurological, and sports physiotherapy.
              Dedicated to rebuilding lives through personalized, evidence-based treatment.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[hsl(var(--primary))]">
                  8+
                </div>
                <div className="text-sm text-[hsl(var(--text-light))]">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[hsl(var(--primary))]">
                  2500+
                </div>
                <div className="text-sm text-[hsl(var(--text-light))]">
                  Patients Treated
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[hsl(var(--primary))]">
                  99%
                </div>
                <div className="text-sm text-[hsl(var(--text-light))]">
                  Recovery Rate
                </div>
              </div>
            </div>

            <p className="text-[hsl(var(--text-light))] leading-relaxed text-sm md:text-base">
              <strong>Clinic Name:</strong> Dr. Rahman’s Physiotherapy Clinic <br />
              <strong>Specialties:</strong> Neurology, Orthopaedic, Geriatric & Sports Physiotherapy <br />
              <strong>Contact:</strong> 63829 27750 <br />
              <strong>Timings:</strong> Evening – 5:30 PM to 9:30 PM | Sunday – 10 AM to 1 PM <br />
              <strong>Home Visits:</strong> Available
            </p>
          </div>
        </article>

        {/* Core Values Section */}
        <section className="text-center mt-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-10">
            Our <span className="text-[hsl(var(--primary))]">Core Values</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 text-center border border-[hsl(var(--border))] rounded-2xl shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <Target className="h-8 w-8 mx-auto text-[hsl(var(--primary))] mb-4" />
              <h4 className="text-xl font-semibold mb-2">Vision</h4>
              <p className="text-[hsl(var(--text-light))] text-sm leading-relaxed">
                To deliver exceptional physiotherapy care that helps every patient regain
                independence and quality of life.
              </p>
            </div>

            <div className="p-8 text-center border border-[hsl(var(--border))] rounded-2xl shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <Heart className="h-8 w-8 mx-auto text-[hsl(var(--primary))] mb-4" />
              <h4 className="text-xl font-semibold mb-2">Mission</h4>
              <p className="text-[hsl(var(--text-light))] text-sm leading-relaxed">
                Providing personalized physiotherapy that blends clinical excellence
                with compassion and patient education.
              </p>
            </div>

            <div className="p-8 text-center border border-[hsl(var(--border))] rounded-2xl shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <Users className="h-8 w-8 mx-auto text-[hsl(var(--primary))] mb-4" />
              <h4 className="text-xl font-semibold mb-2">Why Choose Us</h4>
              <p className="text-[hsl(var(--text-light))] text-sm leading-relaxed">
                Certified physiotherapist, advanced equipment, home visits, and a
                commitment to long-term recovery.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
