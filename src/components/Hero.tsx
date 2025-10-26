import { useEffect, useState } from 'react';
import { profileData } from '../data/profileData';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayedText(profileData.tagline);
      setIsAnimating(false);
      return;
    }

    const words = profileData.tagline.split(' ');
    let currentIndex = 0;
    let currentText = '';

    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        currentText += (currentIndex > 0 ? ' ' : '') + words[currentIndex];
        setDisplayedText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#f6f2ea] min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f2a44] leading-tight animate-fade-in">
              {profileData.heroStats}
            </h1>
            <p
              className="text-xl sm:text-2xl text-[#0f2a44]/80 min-h-[3rem]"
              aria-live="polite"
            >
              {displayedText}
              {isAnimating && <span className="animate-pulse">|</span>}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-8 py-3 bg-[#2aa79b] text-white font-semibold rounded-lg hover:bg-[#238c82] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#2aa79b] focus:ring-offset-2"
              >
                Get in Touch
              </a>
              <a
                href={profileData.cvDownloadUrl}
                download
                className="px-8 py-3 bg-white text-[#0f2a44] font-semibold rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0f2a44] focus:ring-offset-2"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-portrait">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2aa79b] to-[#0f2a44] rounded-full opacity-20 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="../images/ravi1.png"
                  alt="Mr. RAVI TAMANARA"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
