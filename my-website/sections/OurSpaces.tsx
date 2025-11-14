'use client';
import Image from 'next/image';

export default function OurSpaces() {
  // Clinic space images - 6 images total, 2 per row, full width
  const spaces = [
    {
      image: '/hero-image.png', // Placeholder - replace with actual clinic photo
      alt: 'Prostor kliniky Gennero 1'
    },
    {
      image: '/hero-image.png', // Placeholder - replace with actual clinic photo
      alt: 'Prostor kliniky Gennero 2'
    },
    {
      image: '/hero-image.png', // Placeholder - replace with actual clinic photo
      alt: 'Prostor kliniky Gennero 3'
    },
    {
      image: '/hero-image.png', // Placeholder - replace with actual clinic photo
      alt: 'Prostor kliniky Gennero 4'
    },
    {
      image: '/hero-image.png', // Placeholder - replace with actual clinic photo
      alt: 'Prostor kliniky Gennero 5'
    },
    {
      image: '/hero-image.png', // Placeholder - replace with actual clinic photo
      alt: 'Prostor kliniky Gennero 6'
    },
  ];

  return (
    <div className="relative w-full bg-white pt-20 md:pt-24 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
      {/* Title Section - In container above gallery */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-12 md:mb-16">
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center"
          style={{ 
            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
            fontWeight: 600,
            lineHeight: '1.2',
            color: '#112250'
          }}
        >
          Naše prostory
        </h2>
      </div>

      {/* Full Width Gallery Section */}
      <section 
        id="prostory"
        className="relative bg-white"
        style={{ 
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)'
        }}
      >
        {/* Full Width Grid - 2 columns, 3 rows, 100vw total, no gaps */}
        <div className="grid grid-cols-2">
          {spaces.map((space, index) => (
            <div
              key={index}
              className="relative w-full aspect-[16/9] overflow-hidden"
            >
              <Image
                src={space.image}
                alt={space.alt}
                fill
                className="object-cover"
                sizes="50vw"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

