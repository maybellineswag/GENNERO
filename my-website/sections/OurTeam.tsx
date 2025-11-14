'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function OurTeam() {
  const doctors = [
    {
      name: 'Anatolii Kovel',
      description: 'Zakladatel kliniky, který spojuje moderní medicínu s lidským přístupem',
      specialty: 'Gynekolog a vedoucí lékař kliniky',
      image: '/doctors/KOVEL1.png',
      href: '/o-nas#anatolii-kovel'
    },
    {
      name: 'Anatolii Kovel',
      description: 'Zakladatel kliniky, který spojuje moderní medicínu s lidským přístupem',
      specialty: 'Gynekolog a vedoucí lékař kliniky',
      image: '/doctors/KOVEL2.png',
      href: '/o-nas#anatolii-kovel'
    },
    {
      name: 'Anatolii Kovel',
      description: 'Zakladatel kliniky, který spojuje moderní medicínu s lidským přístupem',
      specialty: 'Gynekolog a vedoucí lékař kliniky',
      image: '/doctors/KOVEL1.png',
      href: '/o-nas#anatolii-kovel'
    },
    {
      name: 'Anatolii Kovel',
      description: 'Zakladatel kliniky, který spojuje moderní medicínu s lidským přístupem',
      specialty: 'Gynekolog a vedoucí lékař kliniky',
      image: '/doctors/KOVEL2.png',
      href: '/o-nas#anatolii-kovel'
    },
    {
      name: 'Anatolii Kovel',
      description: 'Zakladatel kliniky, který spojuje moderní medicínu s lidským přístupem',
      specialty: 'Gynekolog a vedoucí lékař kliniky',
      image: '/doctors/KOVEL1.png',
      href: '/o-nas#anatolii-kovel'
    },
    {
      name: 'Anatolii Kovel',
      description: 'Zakladatel kliniky, který spojuje moderní medicínu s lidským přístupem',
      specialty: 'Gynekolog a vedoucí lékař kliniky',
      image: '/doctors/KOVEL2.png',
      href: '/o-nas#anatolii-kovel'
    },
    {
      name: 'Anatolii Kovel',
      description: 'Zakladatel kliniky, který spojuje moderní medicínu s lidským přístupem',
      specialty: 'Gynekolog a vedoucí lékař kliniky',
      image: '/doctors/KOVEL1.png',
      href: '/o-nas#anatolii-kovel'
    },
  ];

  return (
    <section id="doktori" className="relative w-full flex items-center justify-center bg-white overflow-x-hidden max-w-full py-16 md:py-20 lg:py-24">
      <div className="container-responsive px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Main Title */}
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8 text-center"
          style={{ 
            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
            fontWeight: 600,
            color: '#112250'
          }}
        >
          Náš tým
        </h2>

        {/* Doctor Cards - Horizontal Scroll */}
        <div className="mb-6 md:mb-8 w-full relative">
          <div className="relative -mx-6 md:-mx-12 lg:-mx-16">
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide pr-6 md:pr-12 lg:pr-16" style={{ WebkitOverflowScrolling: 'touch' }}>
                  {/* Spacer for initial left padding - allows cards to scroll past edge */}
                  <div className="flex-shrink-0 w-6 md:w-12 lg:w-16"></div>
                {doctors.map((doctor, index) => (
                  <div key={index} className={`flex-shrink-0 ${index === 0 ? 'w-[320px] md:w-[380px]' : 'w-[300px] md:w-[360px]'}`}>
                    {/* Card with Background Image - Clickable */}
                    <Link 
                      href={doctor.href}
                      className="block cursor-pointer"
                    >
                      <div 
                        className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${index === 0 ? 'h-[215px] md:h-[260px]' : 'h-[200px] md:h-[240px]'}`}
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
                          sizes="(max-width: 768px) 300px, 360px"
                        />
                        
                        {/* White Gradient Overlay from Bottom - Stronger for better text readability */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/90 via-white/55 to-transparent"></div>

                        {/* Text Content - Bottom Left */}
                        <div className={`absolute bottom-0 left-0 z-10 ${index === 0 ? 'p-4 md:p-5' : 'p-4 md:p-5'}`}>
                          {/* Name - Bold */}
                          <h3 
                            className="font-bold mb-1"
                            style={{ 
                              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                              fontWeight: 700,
                              color: '#112250',
                              fontSize: index === 0 ? '1.05rem' : '1rem',
                              lineHeight: '1.3'
                            }}
                          >
                            {doctor.name}
                          </h3>

                          {/* Description - Medium */}
                          <p 
                            className="text-xs md:text-sm mb-1 leading-snug"
                            style={{ 
                              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                              fontWeight: 500,
                              color: '#112250',
                              fontSize: index === 0 ? '0.75rem' : '0.7rem',
                              lineHeight: '1.4'
                            }}
                          >
                            {doctor.description}
                          </p>

                          {/* Specialty - Smaller Medium */}
                          <p 
                            className="text-xs leading-snug"
                            style={{ 
                              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                              fontWeight: 500,
                              color: '#112250',
                              fontSize: index === 0 ? '0.7rem' : undefined,
                              lineHeight: '1.4'
                            }}
                          >
                            {doctor.specialty}
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* CTA Link - Below Card, aligned with card text */}
                    <div className="flex justify-start mt-3 pl-4 md:pl-5">
                      <Link
                        href={doctor.href}
                        className="group inline-flex items-center gap-1.5 transition-colors hover:opacity-80"
                        style={{ 
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 500,
                          color: '#112250',
                          fontSize: '1rem'
                        }}
                      >
                        <span>Přejít na profil doktora</span>
                        <svg 
                          className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1"
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right Side Gradient Fade - Overlay on scrollable area */}
              <div className="absolute right-0 top-0 bottom-4 w-32 md:w-40 pointer-events-none z-30 bg-gradient-to-l from-white via-white/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Subheading */}
        <p 
          className="text-base md:text-lg mb-1 text-center"
          style={{ 
            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
            fontWeight: 500,
            color: '#112250',
            lineHeight: '1.6'
          }}
        >
          Tým lékařů a specialistek, kteří pečují s precizností i lidskostí.
        </p>

        {/* Google Reviews - Clickable Link */}
        <Link 
          href="/recenze"
          className="group flex items-center justify-center gap-2.5 mb-6 md:mb-8 cursor-pointer transition-opacity hover:opacity-80"
        >
          {/* Google Icon - Pink */}
          <div className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#f7c7db"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#f7c7db"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#f7c7db"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#f7c7db"/>
            </svg>
          </div>

          {/* Google Reviews Text */}
          <span 
            className="text-sm md:text-base"
            style={{ 
              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
              fontWeight: 500,
              color: '#112250'
            }}
          >
            Google Reviews
          </span>

          {/* Star Icons */}
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                  fill="#f7c7db"
                  stroke="#f7c7db"
                  strokeWidth="1"
                />
              </svg>
            ))}
          </div>

          {/* Rating Text */}
          <span 
            className="text-sm md:text-base"
            style={{ 
              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
              fontWeight: 500,
              color: '#112250'
            }}
          >
            4.8 Stars | 22 reviews
          </span>
        </Link>

        {/* CTA Button */}
        <div className="flex justify-center mb-0">
          <Link
            href="/o-nas#doktori"
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
            <span>Seznamte se s našim týmem</span>
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
    </section>
  );
}

