import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0c1320] text-white py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-12">
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-[hsl(var(--primary))] mb-4 md:mb-6">
              Dr. Rahman's Physiotherapy Clinic
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
              Expert physiotherapy care in Chennai with a focus on neurological,
              orthopaedic, and geriatric rehabilitation. Rebuilding lives through 
              evidence-based treatment and compassionate care.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-[hsl(var(--primary))] mb-4 md:mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-300">
              <li className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 md:gap-3">
                <div className="flex items-center gap-2 min-w-[200px] justify-center lg:justify-start">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[hsl(var(--primary))] flex-shrink-0" />
                  <span className="text-left">Clinic Address:</span>
                </div>
                <span className="text-gray-200 text-sm leading-relaxed">
                  36-1/178, N Red Hills Rd, Rajaji Nagar,<br className="hidden sm:block" />
                  Villivakkam, Chennai, Tamil Nadu 600049
                </span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2 md:gap-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-[hsl(var(--primary))] flex-shrink-0" />
                <div>
                  <span className="text-gray-200 font-medium">+91 63829 27750</span>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 md:gap-3">
                <div className="flex items-center gap-2 min-w-[200px] justify-center lg:justify-start">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-[hsl(var(--primary))] flex-shrink-0" />
                  <span>Clinic Timings:</span>
                </div>
                <div className="text-gray-200 text-sm">
                  <div>Mon–Sat: 5:30 PM – 9:30 PM</div>
                  <div>Sunday: 10:00 AM – 1:00 PM</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links & Services */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-[hsl(var(--primary))] mb-4 md:mb-6">
              Our Services
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
              <li className="hover:text-white transition-colors duration-200">
                Neurological Physiotherapy
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Orthopaedic Rehabilitation
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Geriatric Care
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Sports Injury Treatment
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Home Visit Services
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Post-Surgical Rehabilitation
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Info Bar */}
        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-center md:text-left">
            <div className="text-xs md:text-sm text-gray-400">
              <strong>Emergency Contact:</strong> Available for urgent cases during clinic hours
            </div>
            <div className="text-xs md:text-sm text-gray-400">
              <strong>Home Visits:</strong> Available within Chennai by prior appointment
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-8 border-t border-gray-700 pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-gray-400">
            © 2025 Dr. Rahman's Physiotherapy Clinic. All rights reserved. | 
            <span className="text-gray-500"> Medical License: TNMC/XXXXX</span>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Professional physiotherapy services with 8+ years of clinical experience
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;