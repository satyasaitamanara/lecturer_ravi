import { Linkedin, Twitter, Facebook, Mail, Phone } from 'lucide-react';
import { profileData } from '../data/profileData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Impact', href: '#impact' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#0f2a44] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{profileData.name}</h3>
            <p className="text-gray-300 mb-4">{profileData.title}</p>
            <div className="space-y-2">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-[#2aa79b] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{profileData.contact.email}</span>
              </a>
              <a
                href={`tel:${profileData.contact.phone}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-[#2aa79b] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">{profileData.contact.phone}</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-gray-300 hover:text-[#2aa79b] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#2aa79b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2aa79b] focus:ring-offset-2 focus:ring-offset-[#0f2a44]"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={profileData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#2aa79b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2aa79b] focus:ring-offset-2 focus:ring-offset-[#0f2a44]"
                aria-label="Twitter profile"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={profileData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#2aa79b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2aa79b] focus:ring-offset-2 focus:ring-offset-[#0f2a44]"
                aria-label="Facebook profile"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <a
                href={profileData.cvDownloadUrl}
                download
                className="inline-block px-6 py-2 bg-[#2aa79b] text-white font-semibold rounded-lg hover:bg-[#238c82] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2aa79b] focus:ring-offset-2 focus:ring-offset-[#0f2a44]"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
            <p className="mt-2">Dedicated to excellence in commerce education</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
