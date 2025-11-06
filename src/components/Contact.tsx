import { useState, ChangeEvent, FormEvent } from "react";
import { Send } from "lucide-react";
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! We’ll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--primary))]">
            Contact <span className="text-slate-800">Dr. Rahman’s Clinic</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Book an appointment or reach out with your questions — we’re here to
            help you recover, restore and rebuild.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary)/0.3)] rounded-lg transition-all duration-200"
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
                  className="border border-gray-300 focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary)/0.3)] rounded-lg transition-all duration-200"
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
                className="border border-gray-300 focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary)/0.3)] rounded-lg transition-all duration-200"
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
                className="border border-gray-300 focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary)/0.3)] rounded-lg transition-all duration-200"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-white py-4 text-base sm:text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex justify-center items-center gap-2"
            >
              <Send className="h-5 w-5" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
