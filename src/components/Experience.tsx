import { useEffect, useRef, useState } from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, index]);
          }
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (itemRefs.current[index]) {
          observer.unobserve(itemRefs.current[index]!);
        }
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f6f2ea]">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#0f2a44] mb-16">
          Professional Experience
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#2aa79b]/30"></div>

            {profileData.experience.map((exp, index) => {
              const isVisible = visibleItems.includes(index);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  className={`relative mb-12 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-12' : 'translate-x-12'} md:translate-x-0`
                  }`}
                >
                  <div className={`md:flex md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="bg-[#2aa79b]/10 rounded-lg p-3">
                            <Briefcase className="w-6 h-6 text-[#2aa79b]" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-[#2aa79b] mb-1">
                              {exp.years}
                            </div>
                            <h3 className="text-xl font-bold text-[#0f2a44] mb-1">
                              {exp.role}
                            </h3>
                            <p className="text-md font-semibold text-gray-600 mb-3">
                              {exp.institution}
                            </p>
                            <p className="text-gray-700 mb-4">
                              {exp.description}
                            </p>
                            {exp.achievements.length > 0 && (
                              <div className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <div key={i} className="flex items-start space-x-2">
                                    <CheckCircle className="w-4 h-4 text-[#2aa79b] mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-gray-600">{achievement}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#2aa79b] rounded-full border-4 border-[#f6f2ea] items-center justify-center shadow-lg z-10">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>

                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
