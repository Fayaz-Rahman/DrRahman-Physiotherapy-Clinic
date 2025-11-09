import React from "react";

const services = [
  {
    title: "Geriatric Physiotherapy",
    image: "https://via.placeholder.com/400x300?text=Geriatric+Physio",
    description:
      "Gentle and goal-oriented therapy designed for seniors to improve strength, mobility, balance, and confidence.",
    subtopics: [
      "Stroke Rehabilitation",
      "Parkinson's Therapy",
      "Balance & Gait Training",
      "Post-Fracture Mobility Restoration",
    ],
  },
  {
    title: "Orthopaedic Physiotherapy",
    image: "https://via.placeholder.com/400x300?text=Orthopaedic+Physio",
    description:
      "Comprehensive care for bone, joint, and muscle issues — restoring motion and relieving pain effectively.",
    subtopics: [
      "Arthritis & Joint Pain Relief",
      "Back & Neck Pain Management",
      "Manual Therapy & Mobilization",
      "Post-Operative Joint Rehab",
    ],
  },
  {
    title: "Sports Physiotherapy",
    image: "https://via.placeholder.com/400x300?text=Sports+Physio",
    description:
      "Injury prevention, rapid recovery, and performance optimization for athletes and fitness enthusiasts.",
    subtopics: [
      "Ligament & Muscle Strain Rehab",
      "Sports Injury Assessment",
      "Knee, Shoulder & Ankle Therapy",
      "Taping & Strength Conditioning",
    ],
  },
  {
    title: "Neurological Rehabilitation",
    image: "https://via.placeholder.com/400x300?text=Neurological+Care",
    description:
      "Targeted programs to restore function and movement after neurological conditions or surgeries.",
    subtopics: [
      "Stroke Recovery",
      "Cerebral Palsy Therapy",
      "Bell's Palsy & Nerve Injury",
      "Post-Surgery Rehabilitation",
    ],
  },
  {
    title: "Pain Management & Modalities",
    image: "https://via.placeholder.com/400x300?text=Pain+Management",
    description:
      "State-of-the-art physiotherapy technologies for safe and effective pain relief and recovery.",
    subtopics: [
      "IFT & TENS Therapy",
      "Ultrasound & Laser Treatment",
      "Wax Therapy & Traction",
      "Electrotherapy Pain Relief",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 lg:mb-10 text-gradient-primary">
          Specialized Physiotherapy Services
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mb-12 md:mb-14 lg:mb-16 max-w-2xl mx-auto px-4">
          Our physiotherapy programs are built around your goals — from restoring
          strength and motion to achieving complete recovery with confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-medical hover-elevate text-center p-4 sm:p-5 md:p-6 flex flex-col items-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-lg md:rounded-xl mb-4 sm:mb-5 md:mb-6"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="text-slate-500 text-xs sm:text-sm text-left space-y-1 w-full">
                {service.subtopics.map((topic, i) => (
                  <li key={i} className="pl-2">• {topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;