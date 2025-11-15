'use client';

import BookingForm from '@/sections/BookingForm';

export default function PricingPage() {
  const gynekologieServices = [
    { name: 'Nitroděložní tělísko IUS Mirena vč. zavedení', price: '5900,-' },
    { name: 'Nitroděložní tělísko IUS Levosert vč. zavedení', price: '4500,-' },
    { name: 'Nitroděložní tělísko IUD nehormonální se zlatem vč. zavedení', price: '2100,-' },
    { name: 'Gynekologické vyšetření', price: '800,-' },
    { name: 'Ultrazvukové vyšetření', price: '600,-' },
    { name: 'Konzultace s lékařem', price: '500,-' },
    { name: 'Odběr cytologie', price: '400,-' },
    { name: 'STD screening', price: '1200,-' },
  ];

  const kosmetologieServices = [
    { name: 'Elektro epilace - 15 minut', price: '400,-' },
    { name: 'Elektro epilace - 30 minut', price: '750,-' },
    { name: 'Elektro epilace - 60 minut', price: '1400,-' },
    { name: 'Mikrojehličkování - obličej', price: '2500,-' },
    { name: 'Mikrojehličkování - dekolt', price: '2000,-' },
    { name: 'Chemický peeling - povrchový', price: '1800,-' },
    { name: 'Chemický peeling - střední', price: '2500,-' },
    { name: 'Mezoterapie - obličej', price: '2200,-' },
  ];

  const ServiceCategory = ({ title, subtitle, services }: { title: string; subtitle?: string; services: { name: string; price: string }[] }) => (
    <div className="mb-16 md:mb-20 lg:mb-24">
      <h2 
        className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6"
        style={{ 
          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
          fontWeight: 600,
          color: '#112250',
          lineHeight: '1.1',
        }}
      >
        {title}
      </h2>
      
      {subtitle && (
        <p 
          className="text-base md:text-xl lg:text-2xl font-semibold mb-8 md:mb-10 lg:mb-12 uppercase tracking-wide"
          style={{ 
            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
            fontWeight: 600,
            color: '#112250',
            lineHeight: '1.4',
          }}
        >
          {subtitle}
        </p>
      )}

      <div className="space-y-3 md:space-y-4">
        {services.map((service, index) => (
          <div 
            key={index}
            className="flex items-end gap-2 overflow-hidden"
          >
            <span 
              className="text-base md:text-lg"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 400,
                color: '#112250',
                lineHeight: '1.6',
              }}
            >
              {service.name}
            </span>
            <div className="flex-1 border-b border-dotted border-[#112250]/30 mb-[0.35em]" />
            <span 
              className="text-base md:text-lg font-bold whitespace-nowrap"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 700,
                color: '#112250',
              }}
            >
              {service.price}
            </span>
          </div>
        ))}
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
      
      <div className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-responsive max-w-6xl mx-auto w-full">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 md:mb-12 lg:mb-16 px-8 md:px-16 lg:px-24"
            style={{ 
              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
              fontWeight: 600,
              color: '#112250',
              lineHeight: '1.1',
            }}
          >
            Ceník
          </h1>

          <div className="px-8 md:px-16 lg:px-24">
            <ServiceCategory 
              title="GYNEKOLOGIE"
              subtitle="CENÍK SLUŽEB NA ŽÁDOST PACIENTKY A/NEBO NAD RÁMEC VEŘEJNÉHO ZDRAVOTNÍHO POJIŠTĚNÍ"
              services={gynekologieServices}
            />

            <ServiceCategory 
              title="KOSMETOLOGIE"
              services={kosmetologieServices}
            />

            {/* Health Insurance Section */}
            <div id="pojistovny" className="mb-8 md:mb-10 lg:mb-12 scroll-mt-32">
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 600,
                  color: '#112250',
                  lineHeight: '1.1',
                }}
              >
                ZDRAVOTNÍ POJIŠŤOVNY
              </h2>
              
              <p 
                className="text-base md:text-lg mb-8 md:mb-10"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 400,
                  color: '#112250',
                  lineHeight: '1.6',
                }}
              >
                Spolupracujeme s následujícími zdravotními pojišťovnami:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  { code: '111', name: 'Všeobecná zdravotní pojišťovna ČR' },
                  { code: '201', name: 'Vojenská zdravotní pojišťovna ČR' },
                  { code: '205', name: 'Česká průmyslová zdravotní pojišťovna ČR' },
                  { code: '207', name: 'Oborová zdravotní poj. zam. bank, poj. a stav.' },
                  { code: '211', name: 'Zdravotní pojišťovna ministerstva vnitra ČR' },
                  { code: '209', name: 'Zaměstnanecká pojišťovna Škoda' },
                  { code: '213', name: 'Revírní bratrská pokladna, zdrav. poj.' },
                ].map((insurance, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-lg"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(17, 34, 80, 0.1)',
                    }}
                  >
                    <span 
                      className="text-lg md:text-xl font-bold whitespace-nowrap flex-shrink-0"
                      style={{ 
                        fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                        fontWeight: 700,
                        color: '#112250',
                      }}
                    >
                      {insurance.code}
                    </span>
                    <span 
                      className="text-base md:text-lg"
                      style={{ 
                        fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                        fontWeight: 400,
                        color: '#112250',
                        lineHeight: '1.5',
                      }}
                    >
                      {insurance.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="relative z-10">
          <BookingForm transparent />
        </div>
      </div>
    </div>
  );
}

