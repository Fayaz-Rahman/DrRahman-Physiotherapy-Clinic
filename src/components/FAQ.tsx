import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Why is physiotherapy important?',
      a: 'Physiotherapy restores movement and strength after injury, surgery or neurological conditions, improving independence and quality of life.'
    },
    {
      q: 'Do you provide home-visit physiotherapy?',
      a: 'Yes — Dr. Rahman\'s Clinic offers home physiotherapy sessions within Chennai for patients who prefer in-home care.'
    },
    {
      q: 'How many days of treatment will I need?',
      a: 'It depends on your diagnosis and recovery response. Most programs range from 10 to 20 days, reviewed regularly by the therapist.'
    },
    {
      q: 'Is the treatment painful?',
      a: 'Sessions are designed to be gentle and progressive. Minor soreness is normal early on but decreases as healing improves.'
    },
    {
      q: 'Do I need a doctor\'s referral?',
      a: 'No, you can book directly with us. However, if you have recent scans or prescriptions, please bring them for better assessment.'
    },
    {
      q: 'What conditions do you treat?',
      a: 'We specialize in neurological, orthopaedic, geriatric, and sports physiotherapy including stroke recovery, joint pain, and post-surgical rehabilitation.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Find answers to common questions about our physiotherapy services and treatments
          </p>
        </div>

        {/* FAQ Items - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 py-4 md:px-6 md:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.3)] focus:ring-inset"
              >
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-800 pr-2 flex-1">
                  {item.q}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-[hsl(var(--primary))]" />
                  ) : (
                    <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-slate-500" />
                  )}
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-48 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-4 pb-4 md:px-6 md:pb-5 pt-0">
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10 md:mt-12 lg:mt-16">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 md:mb-3">
              Still have questions?
            </h3>
            <p className="text-slate-600 text-sm md:text-base mb-4 md:mb-6 max-w-md mx-auto">
              Contact us directly and we'll be happy to assist you with any queries.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[hsl(var(--primary))] text-white font-medium rounded-lg hover:bg-[hsl(var(--primary)/0.9)] transition-colors duration-200 text-sm md:text-base"
              >
                Contact Us
              </a>
              <a
                href="tel:6382927750"
                className="inline-flex items-center justify-center px-6 py-3 border border-[hsl(var(--primary))] text-[hsl(var(--primary))] font-medium rounded-lg hover:bg-[hsl(var(--primary)/0.05)] transition-colors duration-200 text-sm md:text-base"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;