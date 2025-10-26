import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profileData.testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + profileData.testimonials.length) % profileData.testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % profileData.testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f6f2ea]">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#0f2a44] mb-16">
          Testimonials
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-[#2aa79b]/20" />

            <div className="relative z-10 min-h-[300px] flex flex-col justify-center">
              <div className="transition-opacity duration-500">
                <p className="text-xl sm:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                  "{profileData.testimonials[currentIndex].quote}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-[#2aa79b]/10 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2aa79b] to-[#0f2a44] flex items-center justify-center text-white text-xl font-bold">
                      {profileData.testimonials[currentIndex].name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-[#0f2a44] text-lg">
                      {profileData.testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-600">
                      {profileData.testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-[#2aa79b] text-white hover:bg-[#238c82] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2aa79b] focus:ring-offset-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2" role="tablist" aria-label="Testimonial navigation">
                {profileData.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2aa79b] focus:ring-offset-2 ${
                      index === currentIndex ? 'bg-[#2aa79b] w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    role="tab"
                    aria-selected={index === currentIndex}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-[#2aa79b] text-white hover:bg-[#238c82] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2aa79b] focus:ring-offset-2"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
