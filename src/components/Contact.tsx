import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! We’ll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-700">
            Contact <span className="text-slate-800">Dr. Rahman’s Clinic</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Book an appointment or reach out with your questions — we’re here to
            help you recover, restore and rebuild.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Google Map */}
         {/* Google Map */}
<div className="h-[450px] rounded-2xl overflow-hidden shadow-md">
  <iframe
    title="Dr. Rahman’s Physiotherapy Clinic Map"
    src="https://www.google.com/maps?q=36-1/178,+N+Red+Hills+Rd,+Rajaji+Nagar,+Villivakkam,+Chennai,+Tamil+Nadu+600049,+India&hl=en&z=16&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
  ></iframe>
</div>


          {/* Form */}
          <form onSubmit={handleSubmit} className="card p-8 space-y-6 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="message">Message / Concern</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="btn-primary w-full">
              <Send className="h-5 w-5 mr-2" /> Send Message
            </Button>

            <div className="text-center text-slate-600 mt-4 text-sm leading-relaxed">
              <MapPin className="inline h-4 w-4 mr-1 text-brand-700" />{" "}
              36-1/178, N Red Hills Rd, Rajaji Nagar, Villivakkam, Chennai,
              Tamil Nadu 600049
              <br />
              <Phone className="inline h-4 w-4 mr-1" /> Call: 63829 27750
              {"  |  "}
              <Clock className="inline h-4 w-4 mx-1" /> Mon–Sat 5:30–9:30 PM ·
              Sun 10–1 PM
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
