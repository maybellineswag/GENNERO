'use client';
import Link from 'next/link';
import Image from 'next/image';
import BookingForm from '@/sections/BookingForm';

export default function TeamPage() {
  // Gynecology doctors
  const gynecologyDoctors = [
    {
      name: 'Anatolii Kovel',
      description: 'Zakladatel kliniky, který spojuje moderní medicínu s lidským přístupem',
      specialty: 'Gynekolog a vedoucí lékař kliniky',
      image: '/doctors/KOVEL1.png',
      href: '/doctors/anatolii-kovel',
      yearsOfExperience: 15
    },
    {
      name: 'Anatolii Kovel',
      description: 'Zakladatel kliniky, který spojuje moderní medicínu s lidským přístupem',
      specialty: 'Gynekolog a vedoucí lékař kliniky',
      image: '/doctors/KOVEL2.png',
      href: '/o-nas#anatolii-kovel',
      yearsOfExperience: 12
    },
    {
      name: 'Anatolii Kovel',
      description: 'Zakladatel kliniky, který spojuje moderní medicínu s lidským přístupem',
      specialty: 'Gynekolog a vedoucí lékař kliniky',
      image: '/doctors/KOVEL1.png',
      href: '/o-nas#anatolii-kovel',
      yearsOfExperience: 10
    },
    {
      name: 'Anatolii Kovel',
      description: 'Zakladatel kliniky, který spojuje moderní medicínu s lidským přístupem',
      specialty: 'Gynekolog a vedoucí lékař kliniky',
      image: '/doctors/KOVEL2.png',
      href: '/o-nas#anatolii-kovel',
      yearsOfExperience: 9
    },
  ];

  // Cosmetology doctors
  const cosmetologyDoctors = [
    {
      name: 'Anatolii Kovel',
      description: 'Zakladatel kliniky, který spojuje moderní medicínu s lidským přístupem',
      specialty: 'Gynekolog a vedoucí lékař kliniky',
      image: '/doctors/KOVEL1.png',
      href: '/o-nas#anatolii-kovel',
      yearsOfExperience: 8
    },
    {
      name: 'Anatolii Kovel',
      description: 'Zakladatel kliniky, který spojuje moderní medicínu s lidským přístupem',
      specialty: 'Gynekolog a vedoucí lékař kliniky',
      image: '/doctors/KOVEL2.png',
      href: '/o-nas#anatolii-kovel',
      yearsOfExperience: 6
    },
    {
      name: 'Anatolii Kovel',
      description: 'Zakladatel kliniky, který spojuje moderní medicínu s lidským přístupem',
      specialty: 'Gynekolog a vedoucí lékař kliniky',
      image: '/doctors/KOVEL1.png',
      href: '/o-nas#anatolii-kovel',
      yearsOfExperience: 5
    },
  ];

  const DoctorCard = ({ doctor, index = 0 }: { doctor: typeof gynecologyDoctors[0]; index?: number }) => (
    <div className="flex flex-col">
      {/* Card with Background Image - Clickable */}
      <Link 
        href={doctor.href}
        className="block cursor-pointer"
      >
        <div 
          className="relative rounded-2xl overflow-hidden transition-all duration-300 h-[180px] md:h-[200px] lg:h-[220px]"
          style={{
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.1)',
            transform: 'scale(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 16px 50px rgba(0, 0, 0, 0.2), 0 6px 15px rgba(0, 0, 0, 0.15)';
            e.currentTarget.style.transform = 'scale(1.01)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {/* Doctor Image as Background */}
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* White Gradient Overlay from Bottom - Stronger for better readability */}
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-white/95 via-white/80 via-white/60 to-transparent"></div>

          {/* Text Content - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-10 px-3 md:px-4" style={{ paddingBottom: '0.75rem' }}>
            {/* Name */}
            <h3 
              className="font-bold"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 700,
                color: '#112250',
                fontSize: '0.95rem',
                lineHeight: '1.2',
                marginBottom: '0'
              }}
            >
              {doctor.name}
            </h3>

            {/* Description - Medium - Closer to name */}
            <p 
              className="text-xs leading-tight line-clamp-2"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 500,
                color: '#112250',
                fontSize: '0.7rem',
                lineHeight: '1.2',
                marginTop: '0.1rem',
                marginBottom: '0'
              }}
            >
              {doctor.description}
            </p>

            {/* Specialty and Years of Experience - Same line, justify between - Bigger distance from bottom */}
            <div className="flex items-baseline justify-between gap-2" style={{ marginTop: '0.5rem' }}>
              <p 
                className="text-xs leading-snug min-w-0"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500,
                  color: '#112250',
                  fontSize: '0.65rem',
                  lineHeight: '1.3'
                }}
              >
                {doctor.specialty}
              </p>
              {doctor.yearsOfExperience && (
                <span 
                  className="font-semibold flex-shrink-0 text-right"
                  style={{ 
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                    fontWeight: 600,
                    color: '#112250',
                    fontSize: '0.65rem',
                    lineHeight: '1.3'
                  }}
                >
                  <span style={{ color: '#8ea9f4' }}>{doctor.yearsOfExperience}</span>{' '}
                  {doctor.yearsOfExperience === 1 ? 'rok praxe' : doctor.yearsOfExperience >= 2 && doctor.yearsOfExperience <= 4 ? 'roky praxe' : 'let praxe'}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>

      {/* CTA Link - Below Card */}
      <div className="flex justify-start mt-2 pl-3 md:pl-4">
        <Link
          href={doctor.href}
          className="group inline-flex items-center gap-1.5 transition-colors hover:opacity-80"
          style={{ 
            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
            fontWeight: 500,
            color: '#112250',
            fontSize: '0.875rem'
          }}
        >
          <span>Přejít na profil doktora</span>
          <svg 
            className="w-3.5 h-3.5 text-primary transition-transform group-hover:translate-x-1"
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/TESTIMONIAL.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
          filter: 'blur(8px)',
          WebkitFilter: 'blur(8px)'
        }}
      />
      <div className="fixed inset-0 z-0 bg-white/20" />
      
      <section className="relative z-10 w-full flex items-center justify-center pt-20 pb-0 md:pt-28 md:pb-0">
        <div className="container-responsive px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full flex flex-col">
          {/* Main Title */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8 text-left !text-[#112250]"
            style={{ 
              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
              fontWeight: 600,
              color: '#112250'
            } as React.CSSProperties}
          >
            Náš tým
          </h1>

          {/* Gynecology Section */}
          <div className="mb-16 md:mb-20">
            <div className="mb-8 md:mb-10 w-full">
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 600,
                  color: '#112250'
                }}
              >
                Gynekologie
              </h2>
              <p 
                className="text-base md:text-lg text-text-secondary"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500,
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.6',
                  maxWidth: '48rem'
                }}
              >
                Náš tým zkušených gynekoložek poskytuje komplexní péči s individuálním přístupem a respektem k potřebám každé pacientky.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mb-8 md:mb-10">
              {gynecologyDoctors.map((doctor, index) => (
                <DoctorCard key={index} doctor={doctor} index={index} />
              ))}
            </div>
            {/* CTA Button */}
            <div className="flex justify-start">
              <Link
                href="/sluzby#gynekologie"
                className="group inline-flex items-center gap-1.5 text-white font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 600,
                  backgroundColor: '#8ea9f4',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#6b8ae0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#8ea9f4';
                }}
              >
                <span>Prohlédnout gynekologické služby</span>
                <svg 
                  className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" stroke="#112250" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Cosmetology Section */}
          <div className="mb-16 md:mb-20">
            <div className="mb-8 md:mb-10 w-full">
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 600,
                  color: '#112250'
                }}
              >
                Kosmetologie
              </h2>
              <p 
                className="text-base md:text-lg text-text-secondary"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500,
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.6',
                  maxWidth: '48rem'
                }}
              >
                Naše certifikované specialistky v estetické medicíně vám pomohou dosáhnout přirozené krásy pomocí nejmodernějších technik a šetrných postupů.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mb-8 md:mb-10">
              {cosmetologyDoctors.map((doctor, index) => (
                <DoctorCard key={index} doctor={doctor} index={index} />
              ))}
            </div>
            {/* CTA Button */}
            <div className="flex justify-start">
              <Link
                href="/sluzby#kosmetologie"
                className="group inline-flex items-center gap-1.5 text-white font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 600,
                  backgroundColor: '#8ea9f4',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#6b8ae0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#8ea9f4';
                }}
              >
                <span>Prohlédnout kosmetologické služby</span>
                <svg 
                  className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" stroke="#112250" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form - Reduced top spacing */}
      <div className="relative z-10 -mt-12 md:-mt-16">
        <BookingForm transparent />
      </div>
    </div>
  );
}

