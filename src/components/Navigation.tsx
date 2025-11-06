import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
          ? "bg-[hsl(var(--background)/0.98)] shadow-md backdrop-blur-md border-b border-[hsl(var(--border)/0.5)]"
          : "bg-black/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[88px]">
          {/* Logo + Title */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center space-x-2 group"
          >
            <img
              src={logo}
              alt="Dr. Rahman's Clinic Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border border-[hsl(var(--primary)/0.5)]"
            />
            <div className="flex flex-col leading-tight">
              <span
                className={`text-lg sm:text-xl md:text-2xl font-bold ${
                  scrolled ? "text-[hsl(var(--foreground))]" : "text-white"
                }`}
              >
                Dr. Rahman’s Clinic
              </span>
              <span
                className={`text-xs tracking-[0.15em] uppercase font-medium ${
                  scrolled ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--primary)/0.9)]"
                }`}
              >
                Physiotherapy & Rehab Care
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 text-[15px] font-semibold tracking-wide transition-all duration-300 ${
                  scrolled
                    ? "text-[hsl(var(--foreground)/0.9)] hover:text-[hsl(var(--primary))]"
                    : "text-white hover:text-[hsl(var(--primary))]"
                }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("#contact")}
              className={`btn-hero text-base font-semibold px-6 py-3 rounded-xl whitespace-nowrap transition-all duration-300 ${
                scrolled ? "shadow-md hover:shadow-lg" : ""
              }`}
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
              scrolled
                ? "text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
                : "text-white hover:text-[hsl(var(--primary))]"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-3 pt-2 pb-4 space-y-2 bg-[hsl(var(--background)/0.98)] border-t border-[hsl(var(--border)/0.5)] rounded-b-2xl shadow-md">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-[hsl(var(--foreground)/0.9)] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary)/0.4)]"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="block w-full text-center mt-2 btn-hero text-sm py-2 rounded-xl"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
