import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const colRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  const testimonials = [
    {
      name: 'Ramya M.S',
      content: 'My father took a 15-day physiotherapy session after his brain stroke. Dr. Rahman is very knowledgeable, punctual, and encouraging throughout the treatment. We could see visible progress in his balance and mobility. We are very satisfied with the care and guidance provided.',
      rating: 5
    },
    {
      name: 'Sriraam K.S',
      content: 'I had a great experience with Dr. Rahman. His physiotherapy sessions were very effective, and I can feel a real improvement in my body. The classes were well-guided and helped me a lot in my recovery. Highly recommended!',
      rating: 5
    },
    {
      name: 'Shhyam M',
      content: 'I took 10 days of physiotherapy treatment for my shoulder cuff and had a very good experience. The team was very friendly, supportive, and professional. They explained each step clearly, and I am really happy with the care and results.',
      rating: 5
    },
    {
      name: 'Sambandan Suresh',
      content: 'I was treated for 10 days by Dr. Rahman, and I stopped my medication from the 5th day after following his guidance. I can truly feel the pain relief and mobility improvement. Thank you for your dedicated care.',
      rating: 5
    },
    {
      name: 'Venkatesulu G',
      content: 'I had an ACL injury, and Dr. Rahman\'s simple and effective physiotherapy worked wonders. I got real relief and was able to return to my routine without surgery. Truly thankful for his care.',
      rating: 5
    },
    {
      name: 'Savitri V',
      content: 'My mother had a Total Knee Replacement surgery. Dr. Rahman provided excellent post-surgery physiotherapy that matched her age and condition. Our family is extremely happy with her recovery progress.',
      rating: 5
    },
    {
      name: 'Nandhini Nagaraj',
      content: 'I visited for my L4 & L5 disc issue. After 10 days of treatment, I experienced nearly 80% pain relief. Dr. Rahman\'s approach is professional and effective. Thank you for guiding me through recovery.',
      rating: 5
    },
    {
      name: 'Sangeetha Ganesh',
      content: 'I had neck pain and many concerns, and the physiotherapist patiently explained everything. The treatment improved my overall posture and health. Highly recommended for anyone seeking quality care.',
      rating: 5
    },
    {
      name: 'Ruby Priscilla',
      content: 'The treatment was effective and the therapists are knowledgeable and supportive. The physiotherapy improved my mobility and reduced my pain. Thank you!',
      rating: 5
    },
    {
      name: 'Manju',
      content: 'I had a fantastic experience with my physiotherapy treatment. The team was caring and explained the process patiently. They helped me recover from pain and restore strength.',
      rating: 5
    },
    {
      name: 'Trisanth Chezian',
      content: 'Completed a 15-day wrist mobilization program with manual therapy and strengthening. Dr. Rahman was skilled, patient, and adjusted sessions based on progress. Very effective treatment!',
      rating: 5
    },
    {
      name: 'Jaya Gopal Govindaraj',
      content: 'Excellent experience at Dr. Rahman\'s Clinic! The staff is friendly, and Dr. Rahman is knowledgeable. The treatment was effective, and I saw great improvement. Highly recommend!',
      rating: 5
    },
    {
      name: 'Nafiah',
      content: 'I went for severe right arm pain due to cervical spondylitis. Dr. Rahman listened carefully and gave proper treatment and stretches. It helped me a lot. His assistant Mr. Dilip made me feel comfortable.',
      rating: 5
    },
    {
      name: 'Raghul Raghul',
      content: 'I came for fracture rehab after my right-hand bone fracture. After 15 days, I achieved excellent recovery. The team monitored my progress daily. I\'m now able to do all activities properly!',
      rating: 5
    }
  ];

  // Split into columns based on screen size
  const getColumns = () => {
    if (typeof window === 'undefined') return [[], [], []];
    
    const width = window.innerWidth;
    if (width < 640) {
      // Mobile: 1 column
      return [testimonials];
    } else if (width < 1024) {
      // Tablet: 2 columns
      return [
        testimonials.filter((_, i) => i % 2 === 0),
        testimonials.filter((_, i) => i % 2 === 1)
      ];
    } else {
      // Desktop: 3 columns
      return [
        testimonials.filter((_, i) => i % 3 === 0),
        testimonials.filter((_, i) => i % 3 === 1),
        testimonials.filter((_, i) => i % 3 === 2)
      ];
    }
  };

  const columns = getColumns();
  const doubledColumns = columns.map((col) => [...col, ...col]);

  useEffect(() => {
    const animations: number[] = [];

    colRefs.forEach((ref, idx) => {
      if (!ref.current) return;
      
      const container = ref.current;
      let y = 0;
      const speed = 0.2 + idx * 0.08;

      const animate = () => {
        y -= speed;
        const height = container.scrollHeight / 2;
        if (Math.abs(y) >= height) {
          y = 0;
        }
        container.style.transform = `translateY(${y}px)`;
        animations[idx] = requestAnimationFrame(animate);
      };

      animations[idx] = requestAnimationFrame(animate);
    });

    return () => {
      animations.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  return (
    <section id="testimonials" className="py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            What Our <span className="text-gradient-primary">Patients Say</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-2 md:mt-3">
            Real stories from real patients who have experienced our exceptional care
          </p>
        </div>

        {/* Responsive Scrolling Columns */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 h-[400px] sm:h-[450px] md:h-[500px]`}>
          {doubledColumns.map((col, colIndex) => (
            <div
              key={colIndex}
              className="overflow-hidden relative"
              style={{
                maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div
                ref={colRefs[colIndex]}
                className="flex flex-col gap-4 sm:gap-5 lg:gap-6 will-change-transform"
              >
                {col.map((t, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-card p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl shadow-md relative"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-accent opacity-20">
                      <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-3 sm:mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4 italic leading-relaxed">"{t.content}"</p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="text-2xl sm:text-3xl">{t.image}</div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base">{t.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;