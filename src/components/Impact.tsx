import { useEffect, useRef, useState } from 'react';
import { GraduationCap, TrendingUp, Heart, Users } from 'lucide-react';
import { profileData } from '../data/profileData';

const iconMap = {
  GraduationCap,
  TrendingUp,
  Heart,
  Users,
};

export default function Impact() {
  const [counters, setCounters] = useState(profileData.impact.stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

          if (prefersReducedMotion) {
            setCounters(profileData.impact.stats.map(stat => stat.value));
            return;
          }

          profileData.impact.stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;

            const interval = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = stat.value;
                  return newCounters;
                });
                clearInterval(interval);
              } else {
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(current);
                  return newCounters;
                });
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...prev, index]);
          }
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (cardRefs.current[index]) {
          observer.unobserve(cardRefs.current[index]!);
        }
      });
    };
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#0f2a44] mb-16">
          Students & Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {profileData.impact.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-[#f6f2ea] rounded-xl p-6 shadow-lg"
            >
              <div className="text-4xl sm:text-5xl font-bold text-[#2aa79b] mb-2" aria-live="polite">
                {counters[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#0f2a44] mb-12">
          Success Stories
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.impact.caseStudies.map((study, index) => {
            const Icon = iconMap[study.icon as keyof typeof iconMap];
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#2aa79b]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#2aa79b]" />
                </div>
                <h4 className="text-lg font-bold text-[#0f2a44] mb-3">
                  {study.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {study.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
