import React from "react";

const services = [
  {
    title: "Geriatric Physiotherapy",
    image: "https://tse1.explicit.bing.net/th/id/OIP.d6eVT-EULy8Q2jksqinjQAHaEj?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
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
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 lg:mb-10 text-gray-800">
          Specialized Physiotherapy Services
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-12 md:mb-14 lg:mb-16 max-w-2xl mx-auto px-4">
          Our physiotherapy programs are built around your goals — from restoring
          strength and motion to achieving complete recovery with confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-5 md:p-6 flex flex-col items-center bg-white rounded-lg shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 group"
            >
              <div className="w-full h-40 sm:h-44 md:h-48 rounded-lg md:rounded-xl mb-4 sm:mb-5 md:mb-6 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-[#B98341] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="text-gray-500 text-xs sm:text-sm text-left space-y-1 w-full">
                {service.subtopics.map((topic, i) => (
                  <li key={i} className="pl-2 hover:text-[#B98341] transition-colors duration-200">• {topic}</li>
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