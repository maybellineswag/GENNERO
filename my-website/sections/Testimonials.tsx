'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Klinika Gennero změnila můj pohled na gynekologickou péči. Profesionální přístup, empatie a moderní vybavení - přesně to, co jsem hledala. Doktorka mi vždy vysvětlí vše srozumitelně a cítím se respektována.",
      author: "Marie Nováková",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
      initials: "MN",
      featured: true
    },
    {
      id: 2,
      text: "Výborná zkušenost s estetickou gynekologií. Profesionální tým, moderní přístupy a výborné výsledky. Cítím se sebejistější a spokojenější.",
      author: "Jana Svobodová",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
      initials: "JS"
    },
    {
      id: 3,
      text: "Konečně klinika, kde se cítím opravdu dobře. Individuální přístup, čas na dotazy a vždy příjemná atmosféra.",
      author: "Eva Procházková",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80",
      initials: "EP"
    },
    {
      id: 4,
      text: "Doporučuji všem ženám. Kombinace odbornosti, moderní medicíny a lidského přístupu je vzácná. Děkuji za péči!",
      author: "Lucie Dvořáková",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&q=80",
      initials: "LD"
    }
  ];

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/TESTIMONIAL.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Overlay for better text readability and glass effect */}
      <div className="absolute inset-0 z-0 bg-white/20" />
      
      <div className="container-responsive px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full relative z-10">
        {/* Main Content */}
        <div className="flex flex-col items-center">
          {/* Heading */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center"
            style={{ 
              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
              fontWeight: 600,
              lineHeight: '1.2',
              color: '#112250'
            }}
          >
            Co říkají naše pacientky
          </h2>

          {/* Introduction Paragraph */}
          <p 
            className="text-base md:text-lg max-w-4xl mb-8 md:mb-10 leading-relaxed text-center w-full"
            style={{ 
              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
              fontWeight: 500,
              lineHeight: '1.6',
              color: '#112250'
            }}
          >
            Tisíce spokojených pacientek důvěřují našim lékařkám a specialistkám. Péče s precizností, empatií a respektem k vašim potřebám.
          </p>

          {/* Bento Grid */}
          <div className="w-full max-w-4xl">
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
            {/* Featured Large Card */}
            <Card 
              className="liquid-glass-apple grid grid-rows-[auto_1fr] gap-4 sm:col-span-2 sm:p-5 lg:row-span-2 border-0 rounded-2xl"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.24) 100%)',
                backdropFilter: 'blur(16px) saturate(120%)',
                WebkitBackdropFilter: 'blur(16px) saturate(120%)'
              }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className="w-4 h-4"
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
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-4">
                  <p 
                    className="text-base md:text-lg font-medium leading-snug"
                    style={{ 
                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                      fontWeight: 500,
                      color: '#112250',
                      lineHeight: '1.5'
                    }}
                  >
                    {testimonials[0].text}
                  </p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12 border-2" style={{ borderColor: '#8ea9f4' }}>
                      <AvatarImage
                        src={testimonials[0].image}
                        alt={testimonials[0].author}
                        width={48}
                        height={48}
                      />
                      <AvatarFallback 
                        style={{ 
                          backgroundColor: '#f7c7db',
                          color: '#112250',
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 600
                        }}
                      >
                        {testimonials[0].initials}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <cite 
                        className="text-sm font-semibold not-italic block mb-0.5"
                        style={{ 
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 600,
                          color: '#112250'
                        }}
                      >
                        {testimonials[0].author}
                      </cite>
                      <span 
                        className="text-xs block"
                        style={{ 
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 500,
                          color: '#4a5568'
                        }}
                      >
                        {testimonials[0].role}
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            {/* Medium Card */}
            <Card 
              className="liquid-glass-apple md:col-span-2 border-0 rounded-2xl"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.24) 100%)',
                backdropFilter: 'blur(16px) saturate(120%)',
                WebkitBackdropFilter: 'blur(16px) saturate(120%)'
              }}
            >
              <CardContent className="h-full pt-4">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-4">
                  <p 
                    className="text-sm md:text-base font-medium leading-snug"
                    style={{ 
                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                      fontWeight: 500,
                      color: '#112250',
                      lineHeight: '1.5'
                    }}
                  >
                    {testimonials[1].text}
                  </p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-10">
                      <AvatarImage
                        src={testimonials[1].image}
                        alt={testimonials[1].author}
                        width={40}
                        height={40}
                      />
                      <AvatarFallback 
                        style={{ 
                          backgroundColor: '#b0c4f8',
                          color: '#112250',
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 600
                        }}
                      >
                        {testimonials[1].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <cite 
                        className="text-xs font-semibold not-italic block mb-0.5"
                        style={{ 
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 600,
                          color: '#112250'
                        }}
                      >
                        {testimonials[1].author}
                      </cite>
                      <span 
                        className="text-xs block"
                        style={{ 
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 500,
                          color: '#4a5568'
                        }}
                      >
                        {testimonials[1].role}
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            {/* Small Card 1 */}
            <Card 
              className="liquid-glass-apple border-0 rounded-2xl"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.24) 100%)',
                backdropFilter: 'blur(16px) saturate(120%)',
                WebkitBackdropFilter: 'blur(16px) saturate(120%)'
              }}
            >
              <CardContent className="h-full pt-4">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-3">
                  <p 
                    className="text-xs md:text-sm leading-snug"
                    style={{ 
                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                      fontWeight: 500,
                      color: '#112250',
                      lineHeight: '1.5'
                    }}
                  >
                    {testimonials[2].text}
                  </p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                    <Avatar className="size-9">
                      <AvatarImage
                        src={testimonials[2].image}
                        alt={testimonials[2].author}
                        width={36}
                        height={36}
                      />
                      <AvatarFallback 
                        style={{ 
                          backgroundColor: '#f7c7db',
                          color: '#112250',
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 600,
                          fontSize: '0.7rem'
                        }}
                      >
                        {testimonials[2].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <cite 
                        className="text-xs font-semibold not-italic block mb-0.5"
                        style={{ 
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 600,
                          color: '#112250'
                        }}
                      >
                        {testimonials[2].author}
                      </cite>
                      <span 
                        className="text-xs block"
                        style={{ 
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 500,
                          color: '#4a5568'
                        }}
                      >
                        {testimonials[2].role}
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            {/* Small Card 2 */}
            <Card 
              className="liquid-glass-apple border-0 rounded-2xl"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.24) 100%)',
                backdropFilter: 'blur(16px) saturate(120%)',
                WebkitBackdropFilter: 'blur(16px) saturate(120%)'
              }}
            >
              <CardContent className="h-full pt-4">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-3">
                  <p 
                    className="text-xs md:text-sm leading-snug"
                    style={{ 
                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                      fontWeight: 500,
                      color: '#112250',
                      lineHeight: '1.5'
                    }}
                  >
                    {testimonials[3].text}
                  </p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                    <Avatar className="size-9">
                      <AvatarImage
                        src={testimonials[3].image}
                        alt={testimonials[3].author}
                        width={36}
                        height={36}
                      />
                      <AvatarFallback 
                        style={{ 
                          backgroundColor: '#8ea9f4',
                          color: '#ffffff',
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 600,
                          fontSize: '0.7rem'
                        }}
                      >
                        {testimonials[3].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <cite 
                        className="text-xs font-semibold not-italic block mb-0.5"
                        style={{ 
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 600,
                          color: '#112250'
                        }}
                      >
                        {testimonials[3].author}
                      </cite>
                      <span 
                        className="text-xs block"
                        style={{ 
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 500,
                          color: '#4a5568'
                        }}
                      >
                        {testimonials[3].role}
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 md:mt-10 lg:mt-12">
            <Link
              href="/recenze"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-full text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 600
              }}
            >
              <span>Zobrazit všechny recenze</span>
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" 
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
  );
}

