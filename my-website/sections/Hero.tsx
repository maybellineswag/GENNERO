'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide scroll cue when user scrolls down more than 100px
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden max-w-full">
      {/* Full-screen background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-image.png"
          alt="Tým lékařek GENNERO kliniky"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Removed overlay to allow blend modes to interact directly with the image */}
      </div>

      {/* Content overlay */}
      <div className="relative h-full flex flex-col">
        {/* Spacer for navbar (navbar is positioned absolutely in Layout) */}
        <div className="h-14 md:h-16"></div>

        {/* Centered text content */}
        <div className="flex-1 flex flex-col items-start md:items-center justify-start md:justify-center text-left md:text-center px-4 md:px-8 pt-24 md:pt-20 lg:pt-40">
          {/* Alert: Nově nabízíme také kosmetologii - Mobile only, above heading */}
          <div className="mb-2 md:hidden">
            <div className="liquid-glass-apple rounded-full px-3 py-1.5 inline-flex items-center gap-1.5">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                style={{
                  backgroundColor: '#f7c7db',
                  animation: 'pinkGlow 2s ease-in-out infinite'
                }}
                aria-hidden="true"
              />
              <span
                className="text-dark text-xs font-medium"
                style={{
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif'
                }}
              >
                Nově nabízíme také kosmetologii!
              </span>
            </div>
          </div>

          <h1
            className="hero-title-mobile md:text-5xl lg:text-6xl xl:text-7xl font-semibold !text-white mb-2 md:mb-3 md:whitespace-nowrap mx-0 md:mx-auto text-left md:text-center text-shadow text-shadow-soft px-0 md:px-4 w-full md:w-auto md:leading-tight"
            style={{ 
              color: '#ffffff', 
              fontWeight: 600,
              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
              lineHeight: '1',
              // Individual tuning for the heading shadow
              ['--ts-y' as any]: '1px',
              ['--ts-blur' as any]: '4px',
              ['--ts-color' as any]: 'rgba(0,0,0,0.22)',
              maxWidth: '100%'
            }}
          >
            <span className="block md:inline">Péče, která začíná</span>{' '}
            <span
              className="block md:inline-block text-primary mix-blend-screen brightness-110 text-shadow"
              style={{
                // Slightly stronger for the accent word
                ['--ts-y' as any]: '1px',
                ['--ts-blur' as any]: '5px',
                ['--ts-color' as any]: 'rgba(0,0,0,0.28)'
              }}
            >
              důvěrou.
            </span>
          </h1>

          <p
            className="text-sm md:text-lg lg:text-xl text-white leading-tight mb-4 md:mb-6 max-w-4xl mx-0 md:mx-auto text-left md:text-center text-shadow text-shadow-subtle"
            style={{ 
              fontWeight: 500,
              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
              // Slightly lighter than heading
              ['--ts-y' as any]: '1px',
              ['--ts-blur' as any]: '3px',
              ['--ts-color' as any]: 'rgba(0,0,0,0.20)'
            }}
          >
            Moderní gynekologická a estetická klinika v{' '}
            <span className="relative inline-block ml-1 md:ml-2">
              <span
                className="inline-block drop-shadow shrink-0 align-middle w-[0.75em] h-[0.75em] md:w-[0.75em] md:h-[0.75em] lg:w-[0.85em] lg:h-[0.85em]"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  WebkitMaskImage: 'url(/icons/location.svg)',
                  maskImage: 'url(/icons/location.svg)',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  transform: 'translateY(0.2em)',
                  marginRight: '-0.25em',
                  zIndex: 0,
                  position: 'relative'
                }}
                aria-hidden="true"
              />
              <Link 
                href="/kontakt#jak-nas-najdete"
                className="hover:text-primary cursor-pointer -ml-1 md:-ml-2 relative z-10"
                style={{ 
                  transition: 'color 0.2s ease-in-out'
                }}
              >
                Teplicích.
              </Link>
            </span>
            <br />
            Spojujeme odbornost s lidským přístupem.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-row gap-3 md:gap-6 mb-7 md:mb-9 justify-start md:justify-center items-start md:items-center"
          >
            <Link
              href="/sluzby"
              className="btn btn-secondary text-center font-semibold arrow-float-parent"
              style={{ 
                fontWeight: 600,
                fontFamily: 'var(--font-daikon), system-ui, sans-serif'
              }}
            >
              <span className="inline-flex items-center gap-1">
                <span className="text-xs md:text-2xl leading-none">Naše služby</span>
                {/* Baby blue arrow */}
                <svg className="w-3.5 h-3.5 md:w-7 md:h-7 text-primary arrow-float-hover" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
            <Link
              href="/objednat"
              className="btn btn-primary hero-cta-btn text-center font-semibold arrow-float-parent"
              style={{ 
                fontWeight: 600,
                fontFamily: 'var(--font-daikon), system-ui, sans-serif'
              }}
            >
              <span className="inline-flex items-center gap-1">
                <span className="text-xs md:text-2xl leading-none">Objednat online</span>
                {/* Dark blue arrow */}
                <svg className="w-3.5 h-3.5 md:w-7 md:h-7 text-dark arrow-float-hover" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Divider line with gradient fading to transparency on both sides */}
          <div className="hidden md:block container-responsive w-full mb-3 md:mb-4">
            <div className="mx-0 md:mx-auto w-full md:w-3/4 h-px md:h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
          </div>

          {/* Bottom informational snippets (inside centered content) */}
          <motion.div
            className="container-responsive pt-3 md:pt-4 overflow-x-hidden"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-0 md:gap-15 lg:gap-16 px-0 md:px-4">
              {/* Tým certifikovaných lékařek */}
              <div className="relative flex items-start justify-start w-full md:w-auto py-3 md:py-0 pl-4 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute w-6 h-6 md:w-7 md:h-7 drop-shadow shrink-0 z-0 top-[0.6em] md:top-[45%] md:-translate-y-[48%]"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    WebkitMaskImage: 'url(/icons/doctorr.svg)',
                    maskImage: 'url(/icons/doctorr.svg)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    left: '-12px'
                  }}
                />
                <span className="relative z-10 text-white text-sm md:text-lg font-medium text-shadow text-shadow-subtle ml-3 md:ml-0">Tým certifikovaných lékařek</span>
              </div>

              {/* Divider line - Mobile only */}
              <div className="w-full md:hidden h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>

              {/* Doporučeno desítkami spokojených pacientek */}
              <div className="relative flex items-start justify-start w-full md:w-auto py-3 md:py-0 pl-4 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute w-6 h-6 md:w-7 md:h-7 drop-shadow shrink-0 z-0 top-[0.6em] md:top-[45%] md:-translate-y-[48%]"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    WebkitMaskImage: 'url(/icons/starr.svg)',
                    maskImage: 'url(/icons/starr.svg)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    left: '-12px'
                  }}
                />
                <span className="relative z-10 text-white text-sm md:text-lg font-medium text-shadow text-shadow-subtle ml-3 md:ml-0">Doporučeno desítkami spokojených pacientek</span>
              </div>

              {/* Divider line - Mobile only */}
              <div className="w-full md:hidden h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>

              {/* Působíme od roku 2019 */}
              <div className="relative flex items-start justify-start w-full md:w-auto py-3 md:py-0 pl-4 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute w-6 h-6 md:w-7 md:h-7 drop-shadow shrink-0 z-0 top-[0.6em] md:top-[45%] md:-translate-y-[48%]"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    WebkitMaskImage: 'url(/icons/timee.svg)',
                    maskImage: 'url(/icons/timee.svg)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    left: '-16px'
                  }}
                />
                <span className="relative z-10 text-white text-sm md:text-lg font-medium text-shadow text-shadow-subtle ml-3 md:ml-0">Působíme od roku 2019</span>
              </div>
            </div>
          </motion.div>

          {/* Alert: Nově nabízíme také kosmetologii - Desktop only, at bottom */}
          <div className="hidden md:flex items-center justify-center gap-2 mt-4 md:mt-5">
            <span
              className="inline-block w-2 h-2 rounded-full shrink-0"
              style={{
                backgroundColor: '#f7c7db',
                animation: 'pinkGlow 2s ease-in-out infinite'
              }}
              aria-hidden="true"
            />
            <span
              className="text-white text-sm md:text-base font-medium text-shadow text-shadow-subtle"
              style={{
                fontFamily: 'var(--font-daikon), system-ui, sans-serif'
              }}
            >
              Nově nabízíme také kosmetologii!
            </span>
          </div>
        </div>

        {/* Scroll cue */}
        <div 
          className={`absolute bottom-6 md:bottom-8 left-1/2 transition-opacity duration-300 ${
            isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{
            animation: isScrolled ? 'none' : 'slowBounce 3s ease-in-out infinite'
          }}
        >
          <svg className="w-6 h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
