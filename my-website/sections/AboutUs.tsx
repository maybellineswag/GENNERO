'use client';
import Link from 'next/link';

export default function AboutUs() {
  const values = [
    {
      title: 'Respekt',
      description: 'Respektujeme vaše rozhodnutí, potřeby a hranice. Každá žena je jedinečná.',
      icon: '/icons/ambulantni-pece.svg',
      bgColor: '#f7c7db' // Light pink
    },
    {
      title: 'Bezpečná odbornost',
      description: 'Kombinujeme lékařskou odbornost s empatickým přístupem. Bezpečné prostředí pro každou pacientku.',
      icon: '/icons/doctorr.svg',
      bgColor: '#b0c4f8' // Light blue
    },
    {
      title: 'Na míru',
      description: 'Péče šitá na míru, která reflektuje vaši jedinečnou situaci a osobní cíle.',
      icon: '/icons/ambulantni-gynekologie.svg',
      bgColor: '#f7c7db' // Light pink
    },
    {
      title: 'Otevřená komunikace',
      description: 'Transparentní komunikace. Vysvětlíme vše a odpovíme na všechny vaše otázky.',
      icon: '/icons/esteticka-gynekologie.svg',
      bgColor: '#b0c4f8' // Light blue
    },
  ];

  return (
    <section id="hodnoty" className="relative w-full flex items-center justify-center overflow-hidden bg-white pt-16 md:pt-20 lg:pt-24 pb-4 md:pb-6 lg:pb-8 overflow-x-hidden max-w-full">
      <div 
        className="max-w-7xl mx-auto w-full"
        style={{
          paddingLeft: 'clamp(3rem, 6vw, 6rem)',
          paddingRight: 'clamp(3rem, 6vw, 6rem)'
        }}
      >
        {/* Main Content */}
        <div className="flex flex-col items-center">
          {/* Heading */}
          <h2 
            className="about-us-title text-base md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center"
            style={{ 
              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
              fontWeight: 600,
              lineHeight: '1.2',
              color: '#112250'
            }}
          >
            Gennero — péče, která začíná důvěrou.
          </h2>

          {/* Introduction Paragraph */}
          <p 
            className="text-xs md:text-lg max-w-4xl mb-8 md:mb-10 leading-relaxed text-center w-full"
            style={{ 
              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
              fontWeight: 500,
              lineHeight: '1.6',
              color: '#112250'
            }}
          >
            Místo, kde ženské zdraví není jen povinností, ale upřímnou pozorností ke každé ženě. Spojujeme lékařskou odbornost s lidským a vřelým přístupem, aby se pacientky cítily jistě a v bezpečí.
          </p>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl mb-10 md:mb-12 overflow-visible">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="relative flex flex-col rounded-2xl overflow-visible px-4 py-6 pb-10 md:px-5 md:py-7 md:pb-10 h-[220px] md:h-auto"
                style={{ 
                  backgroundColor: value.bgColor
                }}
              >
                {/* Text Content at Top */}
                <div className="flex flex-col mb-7 md:mb-8 relative z-10 flex-1">
                  {/* Title */}
                  <h3 
                    className="font-semibold mb-2 text-dark leading-tight min-h-[3rem] md:min-h-0"
                    style={{ 
                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                      fontWeight: 600,
                      color: '#112250',
                      wordBreak: 'break-word',
                      fontSize: '2rem',
                      lineHeight: '1.2'
                    }}
                  >
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-sm md:text-base text-dark/90 leading-relaxed"
                    style={{ 
                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                      fontWeight: 500,
                      lineHeight: '1.5',
                      color: '#112250'
                    }}
                  >
                    {value.description}
                  </p>
                </div>

                {/* White Icon at Bottom-Left - Offset */}
                <div className="absolute bottom-0 left-0 -translate-x-1 translate-y-4 z-0">
                  <span
                    aria-hidden="true"
                    className="block w-24 h-24 md:w-28 md:h-28"
                    style={{
                      backgroundColor: '#ffffff',
                      WebkitMaskImage: `url(${value.icon})`,
                      maskImage: `url(${value.icon})`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Primary Button - O nás */}
            <Link
              href="/o-nas"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-full text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 600
              }}
            >
              <span>Více o nás</span>
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 text-dark transition-transform group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Text Link - Náš tým */}
            <Link
              href="/o-nas#doktori"
              className="group inline-flex items-center gap-2 text-dark font-semibold text-base md:text-lg transition-colors hover:text-primary"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 600,
                color: '#112250'
              }}
            >
              <span>Náš tým</span>
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 text-primary transition-transform group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

