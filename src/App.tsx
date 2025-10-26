import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Impact from './components/Impact';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profileData } from './data/profileData';

function App() {
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": profileData.name,
      "jobTitle": profileData.title,
      "description": profileData.bio.summary,
      "email": profileData.contact.email,
      "telephone": profileData.contact.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kotananduru",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN"
      },
      "alumniOf": profileData.education.map(edu => ({
        "@type": "EducationalOrganization",
        "name": edu.institution
      })),
      "worksFor": {
        "@type": "EducationalOrganization",
        "name": "Chaitanya Degree College"
      },
      "sameAs": [
        profileData.social.linkedin,
        profileData.social.twitter,
        profileData.social.facebook
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />  
        <Impact />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
