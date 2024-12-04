// components/LogoTicker.js
import Image from "next/image";

export default function LogoTicker() {
  // Add your company logos here
  const logos = [
    { image: "/logos/company1.png", name: "Company 1" },
    { image: "/logos/company2.png", name: "Company 2" },
    { image: "/logos/company3.png", name: "Company 3" },
    { image: "/logos/company4.png", name: "Company 4" },
    { image: "/logos/company5.png", name: "Company 5" },
    { image: "/logos/company6.png", name: "Company 6" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-600 text-xl mb-12">
          Trusted by market leaders
        </h3>

        {/* Logo ticker container */}
        <div className="relative overflow-hidden">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Scrolling logos container */}
          <div className="flex gap-12 logos-slide">
            {/* First set of logos */}
            <div className="flex gap-12 items-center animate-scroll">
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex items-center justify-center min-w-[150px] h-16"
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={120}
                    height={48}
                    className="max-w-[120px] h-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless scrolling */}
            <div className="flex gap-12 items-center animate-scroll">
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex items-center justify-center min-w-[150px] h-16"
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={120}
                    height={48}
                    className="max-w-[120px] h-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
