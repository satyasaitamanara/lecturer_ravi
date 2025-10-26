import { useEffect, useRef, useState } from 'react';
import { BookOpen, Award, Users, TrendingUp } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const icons = [BookOpen, Award, Users, TrendingUp];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#0f2a44] mb-16">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div style={{ transitionDelay: '0ms' }}>
              <p className="text-lg text-gray-700 leading-relaxed">
                {profileData.bio.summary}
              </p>
            </div>
            <div style={{ transitionDelay: '100ms' }} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <p className="text-lg text-gray-700 leading-relaxed">
                {profileData.bio.detailedBio}
              </p>
            </div>

            <div style={{ transitionDelay: '200ms' }} className={`pt-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h3 className="text-2xl font-semibold text-[#0f2a44] mb-4">Education</h3>
              <div className="space-y-3">
                {profileData.education.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <BookOpen className="w-5 h-5 text-[#2aa79b] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">{edu.degree}</p>
                      <p className="text-gray-600">{edu.institution} • {edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-[#f6f2ea] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-[#0f2a44] mb-6">Quick Facts</h3>
              <div className="space-y-6">
                {profileData.bio.quickFacts.map((fact, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-white rounded-full p-3 shadow-md">
                        <Icon className="w-6 h-6 text-[#2aa79b]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{fact.label}</p>
                        <p className="text-2xl font-bold text-[#0f2a44]">{fact.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
