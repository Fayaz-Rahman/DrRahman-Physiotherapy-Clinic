import { useEffect, useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  // Detect scroll for nav background transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 88;
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md border-b border-gray-200/50 h-24"
          : "bg-black/70 backdrop-blur-sm h-28"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${scrolled ? "h-24" : "h-28"}`}>
          {/* Logo + Title */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center space-x-3 group flex-shrink-0"
          >
            <img
              src={logo}
              alt="Dr. Rahman's Clinic Logo"
              className={`rounded-full object-cover border-2 transition-all duration-300 ${
                scrolled 
                  ? "h-14 w-14 border-[hsl(var(--primary))]" 
                  : "h-16 w-16 border-[hsl(var(--primary)/0.8)]"
              }`}
            />
            <div className="flex flex-col leading-tight text-left">
              <span
                className={`font-bold transition-colors duration-300 ${
                  scrolled 
                    ? "text-[hsl(var(--primary))] text-xl sm:text-2xl" 
                    : "text-white text-2xl sm:text-3xl"
                }`}
              >
                Dr. Rahman's Clinic
              </span>
              <span
                className={`font-medium tracking-wide transition-colors duration-300 ${
                  scrolled 
                    ? "text-gray-600 text-xs" 
                    : "text-gray-200 text-sm"
                }`}
              >
                Physiotherapy & Rehabilitation
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-3 text-[15px] font-semibold rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.05)]"
                    : "text-white hover:text-[hsl(var(--primary))] hover:bg-white/10"
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* Book Now CTA - Desktop */}
            <button
              onClick={() => scrollToSection("#contact")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary)/0.9)] shadow-md hover:shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30"
              }`}
            >
              <Calendar className="h-5 w-5" />
              <span className="text-base">Book Now</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-3 rounded-lg transition-all duration-200 ${
              scrolled
                ? "text-gray-700 hover:text-[hsl(var(--primary))] hover:bg-gray-100"
                : "text-white hover:text-[hsl(var(--primary))] hover:bg-white/10"
            }`}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`px-4 pt-2 space-y-1 rounded-2xl shadow-lg ${
            scrolled ? "bg-white/95 backdrop-blur-md" : "bg-black/90 backdrop-blur-md"
          }`}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-4 rounded-lg text-base font-semibold transition-all duration-200 ${
                  scrolled
                    ? "text-gray-700 hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.05)]"
                    : "text-white hover:text-[hsl(var(--primary))] hover:bg-white/10"
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile Book Now Button */}
            <div className="pt-3 px-4">
              <button
                onClick={() => scrollToSection("#contact")}
                className={`w-full py-4 px-4 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center gap-3 ${
                  scrolled
                    ? "bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary)/0.9)]"
                    : "bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary)/0.9)]"
                }`}
              >
                <Calendar className="h-5 w-5" />
                Book Appointment Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;