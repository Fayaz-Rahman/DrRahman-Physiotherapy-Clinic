import { useState, ChangeEvent, FormEvent } from "react";
import { Send, MapPin, Clock, Building, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    appointmentType: "clinic", // "clinic" or "home"
    patientName: "",
    patientPhone: "",
    visitingTime: "",
    patientAddress: "",
    landmark: "",
    preferredTime: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Clinic timings for dropdown
  const clinicTimings = [
    "5:30 PM - 6:30 PM",
    "6:30 PM - 7:30 PM", 
    "7:30 PM - 8:30 PM",
    "8:30 PM - 9:30 PM",
    "Sunday: 10:00 AM - 11:00 AM",
    "Sunday: 11:00 AM - 12:00 PM",
    "Sunday: 12:00 PM - 1:00 PM"
  ];

  // Home visit timings
  const homeVisitTimings = [
    "Morning: 9:00 AM - 12:00 PM",
    "Afternoon: 2:00 PM - 5:00 PM",
    "Evening: 5:30 PM - 8:00 PM"
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'radio') {
      setFormData(prev => ({ 
        ...prev, 
        [name]: value,
        // Reset time fields when switching types
        visitingTime: "",
        preferredTime: ""
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Sending email with data:', formData);
      
      const result = await emailjs.send(
        'service_skl3n14',
        'template_yyzzwk4', 
        {
          appointment_type: formData.appointmentType === "clinic" ? "Clinic Visit" : "Home Visit",
          patient_name: formData.patientName,
          patient_phone: formData.patientPhone,
          visiting_time: formData.visitingTime,
          patient_address: formData.patientAddress,
          landmark: formData.landmark,
          preferred_time: formData.preferredTime,
          message: formData.message,
          to_email: 'rahmanfayaz0110@gmail.com',
          date: new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'short'
          })
        },
        'wiPHIQNxXpP1Rwn-o'
      );

      console.log('Email sent successfully:', result);
      alert("Thank you! We'll contact you shortly to confirm your appointment.");
      // Reset form
      setFormData({
        appointmentType: "clinic",
        patientName: "",
        patientPhone: "",
        visitingTime: "",
        patientAddress: "",
        landmark: "",
        preferredTime: "",
        message: "",
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      alert("Sorry, there was an error sending your message. Please try again or call us directly at +91 63829 27750.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-[#B98341]">
            Book Your <span className="text-gray-800">Appointment</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Schedule your physiotherapy session at our clinic or request a home visit. 
            We're here to help you recover and rebuild.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Google Map Only */}
          <div className="order-2 lg:order-1">
            <div className="h-[500px] rounded-xl lg:rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="Dr. Rahman's Physiotherapy Clinic Map"
                src="https://www.google.com/maps?q=36-1/178,+N+Red+Hills+Rd,+Rajaji+Nagar,+Villivakkam,+Chennai,+Tamil+Nadu+600049,+India&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Appointment Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-xl lg:rounded-2xl shadow-md border border-gray-200 space-y-4 md:space-y-6 order-1 lg:order-2"
          >
            {/* Appointment Type Selection */}
            <div>
              <Label className="text-sm md:text-base text-gray-700 mb-3 block">
                Appointment Type *
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {/* Clinic Visit Option */}
                <label className={`flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer transition-all duration-200 ${
                  formData.appointmentType === "clinic" 
                    ? "border-[#B98341] bg-amber-50" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}>
                  <input
                    type="radio"
                    name="appointmentType"
                    value="clinic"
                    checked={formData.appointmentType === "clinic"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <Building className="h-6 w-6 mb-2 text-gray-600" />
                  <span className="text-sm font-medium">Clinic Visit</span>
                </label>

                {/* Home Visit Option */}
                <label className={`flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer transition-all duration-200 ${
                  formData.appointmentType === "home" 
                    ? "border-[#B98341] bg-amber-50" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}>
                  <input
                    type="radio"
                    name="appointmentType"
                    value="home"
                    checked={formData.appointmentType === "home"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <Home className="h-6 w-6 mb-2 text-gray-600" />
                  <span className="text-sm font-medium">Home Visit</span>
                </label>
              </div>
            </div>

            {/* Patient Name */}
            <div>
              <Label htmlFor="patientName" className="text-sm md:text-base text-gray-700">
                Patient Name *
              </Label>
              <Input
                id="patientName"
                name="patientName"
                required
                value={formData.patientName}
                onChange={handleChange}
                placeholder="Enter patient's full name"
                className="border border-gray-300 focus:border-[#B98341] focus:ring-2 focus:ring-[#B98341]/30 rounded-lg transition-all duration-200 text-sm md:text-base"
              />
            </div>

            {/* Patient Phone */}
            <div>
              <Label htmlFor="patientPhone" className="text-sm md:text-base text-gray-700">
                Patient Phone Number *
              </Label>
              <Input
                id="patientPhone"
                name="patientPhone"
                type="tel"
                required
                value={formData.patientPhone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="border border-gray-300 focus:border-[#B98341] focus:ring-2 focus:ring-[#B98341]/30 rounded-lg transition-all duration-200 text-sm md:text-base"
              />
            </div>

            {/* CLINIC VISIT FIELDS */}
            {formData.appointmentType === "clinic" && (
              <div>
                <Label htmlFor="visitingTime" className="text-sm md:text-base text-gray-700">
                  Preferred Clinic Timing *
                </Label>
                <select
                  id="visitingTime"
                  name="visitingTime"
                  required
                  value={formData.visitingTime}
                  onChange={handleChange}
                  className="w-full border border-gray-300 focus:border-[#B98341] focus:ring-2 focus:ring-[#B98341]/30 rounded-lg transition-all duration-200 text-sm md:text-base p-2.5"
                >
                  <option value="">Select preferred time slot</option>
                  {clinicTimings.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  Clinic Timings: Mon-Sat 5:30 PM - 9:30 PM | Sun 10:00 AM - 1:00 PM
                </p>
              </div>
            )}

            {/* HOME VISIT FIELDS */}
            {formData.appointmentType === "home" && (
              <>
                {/* Patient Address */}
                <div>
                  <Label htmlFor="patientAddress" className="text-sm md:text-base text-gray-700 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Patient Address *
                  </Label>
                  <Textarea
                    id="patientAddress"
                    name="patientAddress"
                    required
                    value={formData.patientAddress}
                    onChange={handleChange}
                    placeholder="Full address for home visit"
                    rows={2}
                    className="border border-gray-300 focus:border-[#B98341] focus:ring-2 focus:ring-[#B98341]/30 rounded-lg transition-all duration-200 text-sm md:text-base"
                  />
                </div>

                {/* Landmark */}
                <div>
                  <Label htmlFor="landmark" className="text-sm md:text-base text-gray-700">
                    Nearby Landmark
                  </Label>
                  <Input
                    id="landmark"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleChange}
                    placeholder="Nearby landmark or reference point"
                    className="border border-gray-300 focus:border-[#B98341] focus:ring-2 focus:ring-[#B98341]/30 rounded-lg transition-all duration-200 text-sm md:text-base"
                  />
                </div>

                {/* Preferred Time for Home Visit */}
                <div>
                  <Label htmlFor="preferredTime" className="text-sm md:text-base text-gray-700 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Preferred Time for Home Visit *
                  </Label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full border border-gray-300 focus:border-[#B98341] focus:ring-2 focus:ring-[#B98341]/30 rounded-lg transition-all duration-200 text-sm md:text-base p-2.5"
                  >
                    <option value="">Select preferred time slot</option>
                    {homeVisitTimings.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {/* Additional Message */}
            <div>
              <Label htmlFor="message" className="text-sm md:text-base text-gray-700">
                Additional Message / Condition Details
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe the condition or any special requirements..."
                className="border border-gray-300 focus:border-[#B98341] focus:ring-2 focus:ring-[#B98341]/30 rounded-lg transition-all duration-200 text-sm md:text-base"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#B98341] hover:bg-[#A67438] text-white py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Booking Appointment...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 md:h-5 md:w-5" /> 
                  <span>Book Appointment</span>
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;