const FAQ = () => {
  const faqs = [
    {
      q: 'Why is physiotherapy important?',
      a: 'Physiotherapy restores movement and strength after injury, surgery or neurological conditions, improving independence and quality of life.'
    },
    {
      q: 'Do you provide home-visit physiotherapy?',
      a: 'Yes — Dr. Rahman’s Clinic offers home physiotherapy sessions within Chennai for patients who prefer in-home care.'
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
      q: 'Do I need a doctor’s referral?',
      a: 'No, you can book directly with us. However, if you have recent scans or prescriptions, please bring them for better assessment.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-brand-700">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 text-left">
          {faqs.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white shadow-sm border">
              <h4 className="text-lg font-semibold mb-2">{item.q}</h4>
              <p className="text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
