import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
   <footer className="w-full bg-[#0c1320] text-white py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
    {/* Left section */}
    <div>
      <h2 className="text-xl font-bold text-[hsl(var(--primary))] mb-3">
        Dr. Rahman’s Physiotherapy Clinic
      </h2>
      <p className="text-sm text-gray-300">
        Expert physiotherapy care in Chennai with a focus on neurological,
        orthopaedic, and geriatric rehabilitation.
      </p>
    </div>

    {/* Right section */}
    <div>
      <h3 className="text-lg font-semibold text-[hsl(var(--primary))] mb-3">
        Contact
      </h3>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>📍 36-1/178, N Red Hills Rd, Rajaji Nagar, Villivakkam, Chennai, Tamil Nadu 600049</li>
        <li>📞 +91 63829 27750</li>
        <li>🕐 Mon–Sat 5:30–9:30 PM | Sun 10:00AM-1:00 PM</li>
      </ul>
    </div>
  </div>

  {/* Copyright */}
  <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
    © 2025 Dr. Rahman’s Physiotherapy Clinic. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
