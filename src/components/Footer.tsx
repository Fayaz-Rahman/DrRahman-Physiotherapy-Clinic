import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Clinic Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-accent">
            Dr. Rahman’s Physiotherapy Clinic
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Expert physiotherapy care in Chennai with a focus on neurological,
            orthopaedic, and geriatric rehabilitation.
          </p>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-accent">Contact</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent" />
              <span>
                36-1/178, N Red Hills Rd, Rajaji Nagar, Villivakkam, Chennai,
                Tamil Nadu 600049
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <span>+91 63829 27750</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              <span>Mon–Sat 5:30–9:30 PM | Sun 10–1 PM</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Map */}
        {/* <div className="rounded-lg overflow-hidden shadow-md h-40 md:h-48">
          <iframe
            title="Clinic Map"
            src="https://www.google.com/maps?q=36-1/178+N+Red+Hills+Rd,+Rajaji+Nagar,+Villivakkam,+Chennai,+Tamil+Nadu+600049&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div> */}
      </div>

      <div className="text-center text-slate-500 text-sm mt-10 border-t border-slate-800 pt-6">
        © {new Date().getFullYear()} Dr. Rahman’s Physiotherapy Clinic. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
