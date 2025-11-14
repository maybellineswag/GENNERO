'use client';
import Link from 'next/link';
import Image from 'next/image';
import Timeline from '@/components/Timeline';
import BookingForm from '@/sections/BookingForm';

export default function DoctorProfilePage() {
  const doctor = {
    name: 'Anatolii Kovel',
    specialty: 'Gynekolog a vedoucí lékař kliniky',
    yearsOfExperience: 15,
    image: '/doctors/KOVEL1F.png',
    email: 'kovel@kovel.com',
    services: [
      { name: 'Prenatalni pece', href: '/sluzby#tehotne' },
      { name: 'Esteticka gynekologie', href: '/sluzby#esteticka-gynekologie' },
    ],
    quote: `V medicíně mě vždy fascinoval přímý kontakt s lidmi a možnost pomáhat ženám cítit se jistě a v bezpečí. Každou pacientku vnímám individuálně – s respektem, empatií a důrazem na otevřenou komunikaci.`,
  };

  const timelineData = [
    {
      title: 'VZDĚLÁNÍ',
      events: [
        {
          year: '2009 – 2015',
          title: '1. lékařská fakulta',
          subtitle: 'Charkovská národní lékařská univerzita',
        },
        {
          year: '2017',
          title: 'Uznání odborné způsobilosti (aprobace) v České republice',
        },
        {
          year: '2022',
          title: 'Specializovaná způsobilost (atestace) v oboru gynekologie a porodnictví',
        },
      ],
    },
    {
      title: 'PŮSOBENÍ',
      events: [
        {
          year: '2016 - dosud',
          title: 'Gynekologicko-porodnické oddělení',
          subtitle: 'KZ, a.s. - Nemocnice Teplice, o.z.',
        },
      ],
    },
  ];

  return (
    <>
      <style>{`
        .doctor-profile-page section .doctor-name-header {
          color: #112250 !important;
          font-size: clamp(2rem, 2.5vw + 1.25rem, 3rem) !important;
          margin-bottom: 0.1rem !important;
          line-height: 1.2 !important;
        }
        .doctor-profile-page section .doctor-info-top p {
          margin-top: 0 !important;
          margin-bottom: 0.35rem !important;
          line-height: 1.3 !important;
        }
        .doctor-profile-page section .doctor-info-top p:last-of-type {
          margin-bottom: 0 !important;
        }
        .doctor-profile-page section .doctor-info-top {
          margin-bottom: 1.5rem !important;
        }
        .doctor-profile-page section .services-section {
          margin-bottom: 1.5rem !important;
        }
        .doctor-profile-page section .email-section {
          margin-bottom: 1.5rem !important;
        }
      `}</style>
      <div className="w-full overflow-x-hidden max-w-full bg-white doctor-profile-page">
        {/* Full Width Background Image with Text Overlay on Right */}
        <section className="relative w-full h-[80vh] md:h-[90vh] lg:h-[95vh] flex items-center">
          {/* Full Width Background Image - Doctor's photo covering left portion */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 w-full h-full bg-gray-100"></div>
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover"
              sizes="100vw"
              priority
              style={{ objectPosition: '40% center' }}
            />
          </div>

          {/* Content Container */}
          <div className="relative w-full h-full flex items-center justify-center z-10 pt-8 md:pt-12 lg:pt-16">
            <div className="container-responsive px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center md:mr-20 lg:mr-32">
                {/* Left Column: Empty - Background image shows through */}
                <div className="md:col-span-1 hidden md:block"></div>

                {/* Right Column: ALL Text Content - stacked vertically */}
                <div className="md:col-span-1 flex flex-col justify-center bg-gray-100/95 md:bg-transparent p-8 md:p-0 doctor-content-overlay">
                  {/* Go Back Button */}
                  <div className="mb-1">
                    <Link
                      href="/nas-tym"
                      className="group inline-flex items-center gap-2 transition-colors"
                      style={{ 
                        fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                        fontWeight: 500,
                        color: '#112250',
                        fontSize: '0.875rem',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#8ea9f4';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#112250';
                      }}
                    >
                      <svg 
                        className="w-4 h-4 transition-transform group-hover:-translate-x-1" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Zpět na náš tým</span>
                    </Link>
                  </div>
                  
                  <div className="doctor-info-top">
                    {/* Name */}
                    <h1 
                      className="doctor-name-header font-bold"
                      style={{ 
                        fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                        fontWeight: 700
                      }}
                    >
                      {doctor.name}
                    </h1>

                    {/* Specialty */}
                    <p 
                      className="text-base md:text-lg"
                      style={{ 
                        fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                        fontWeight: 500,
                        color: '#112250'
                      }}
                    >
                      {doctor.specialty}
                    </p>

                    {/* Years of Experience */}
                    <p 
                      className="text-base md:text-lg"
                      style={{ 
                        fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                        fontWeight: 500,
                        color: '#112250'
                      }}
                    >
                      <span className="doctor-years-number" style={{ color: '#8ea9f4' }}>{doctor.yearsOfExperience}</span> let praxe
                    </p>
                  </div>

                {/* Services */}
                <div className="services-section flex flex-col space-y-0.5">
                  <Link
                    href={doctor.services[0].href}
                    className="group flex items-center gap-2 transition-colors"
                    style={{ 
                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                      fontWeight: 500,
                      color: '#112250',
                      fontSize: '1rem',
                      lineHeight: '1.5'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#8ea9f4';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#112250';
                    }}
                  >
                    <span>{doctor.services[0].name}</span>
                    <span>&gt;</span>
                  </Link>
                  <Link
                    href={doctor.services[1].href}
                    className="group flex items-center gap-2 transition-colors"
                    style={{ 
                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                      fontWeight: 500,
                      color: '#112250',
                      fontSize: '1rem',
                      lineHeight: '1.5'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#8ea9f4';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#112250';
                    }}
                  >
                    <span>{doctor.services[1].name}</span>
                    <span>&gt;</span>
                  </Link>
                </div>

                {/* Contact Email */}
                <div className="email-section flex items-center gap-2.5">
                  <svg 
                    className="w-4 h-4 flex-shrink-0" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: '#112250' }}
                  >
                    <path 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a 
                    href={`mailto:${doctor.email}`}
                    className="text-sm md:text-base"
                    style={{ 
                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                      fontWeight: 500,
                      color: '#112250',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#8ea9f4';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#112250';
                    }}
                  >
                    {doctor.email}
                  </a>
                </div>

                {/* Personal Statement/Quote */}
                <div>
                  <p 
                    className="text-sm md:text-base leading-relaxed"
                    style={{ 
                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                      fontWeight: 500,
                      color: '#112250',
                      lineHeight: '1.6'
                    }}
                  >
                    &quot;{doctor.quote}&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline sections={timelineData} />

      {/* Booking Form Section */}
      <BookingForm align="left" />
    </div>
    </>
  );
}

