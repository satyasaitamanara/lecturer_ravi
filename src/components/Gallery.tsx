import { profileData } from '../data/profileData';

export default function Gallery() {
  const collegePhotos = [...profileData.gallery.collegePhotos, ...profileData.gallery.collegePhotos];
  const familyPhotos = [...profileData.gallery.familyPhotos, ...profileData.gallery.familyPhotos];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#0f2a44] mb-16">
          Gallery
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#0f2a44] mb-6 text-center">
              College Life
            </h3>
            <div className="marquee" role="region" aria-label="College photos gallery">
              <div className="marquee__track marquee__track--ltr">
                {collegePhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="marquee__item"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="marquee__image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#0f2a44] mb-6 text-center">
              Family Moments
            </h3>
            <div className="marquee" role="region" aria-label="Family photos gallery">
              <div className="marquee__track marquee__track--rtl">
                {familyPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="marquee__item"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="marquee__image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <p className="text-center text-gray-600 mt-8 text-sm">
          Touch and drag to explore, or hover to pause
        </p> */}
      </div>
    </section>
  );
}
