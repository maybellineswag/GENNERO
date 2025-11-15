'use client';

import Image from 'next/image';

export default function BlogPage() {
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
      
      <main className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ 
                color: 'var(--color-dark)',
                fontFamily: 'var(--font-daikon), system-ui, sans-serif'
              }}
            >
              Blog
            </h1>
            <p 
              className="text-base md:text-lg lg:text-xl leading-relaxed"
              style={{ 
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-daikon), system-ui, sans-serif'
              }}
            >
              Zde najdete užitečné články a informace o gynekologii, kosmetologii a péči o zdraví.
            </p>
          </div>

          {/* Blog Posts Placeholder */}
          <div className="flex flex-col gap-6">
            {/* Placeholder for blog posts */}
            <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(17, 34, 80, 0.1)',
              }}
            >
              {/* Image placeholder */}
              <div className="flex-shrink-0 w-full md:w-64 h-48 md:h-auto rounded-lg overflow-hidden relative">
                <Image
                  src="/hero-image.png"
                  alt="Blog placeholder"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center">
                <p 
                  className="text-sm font-medium mb-2"
                  style={{ 
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                    color: 'var(--color-text-light)',
                  }}
                >
                  Brzy přidáme příspěvky
                </p>
                <h3 
                  className="text-xl md:text-2xl font-semibold mb-2"
                  style={{ 
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                    color: 'var(--color-dark)',
                  }}
                >
                  Blog články se připravují
                </h3>
                <p 
                  className="text-base mb-4"
                  style={{ 
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  V nejbližší době zde najdete užitečné články o zdraví a péči o sebe.
                </p>
                
                {/* CTA Button */}
                <button
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-2 w-fit mt-auto"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-text-white)',
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(142, 169, 244, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>Zjistit více</span>
                  <svg 
                    className="w-3.5 h-3.5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

