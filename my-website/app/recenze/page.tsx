'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import BookingForm from '@/sections/BookingForm';

export default function RecenzePage() {
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
    },
    {
      id: 5,
      text: "Prenatální péče na nejvyšší úrovni. Cítila jsem se v dobrých rukou po celou dobu těhotenství. Děkuji!",
      author: "Petra Černá",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&q=80",
      initials: "PČ",
      featured: true
    },
    {
      id: 6,
      text: "Profesionální přístup k těhotenství a porodu. Vždy vstřícné, trpělivé a empatické jednání. Jsem velmi spokojená.",
      author: "Kateřina Malá",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
      initials: "KM"
    },
    {
      id: 7,
      text: "Nejlepší gynekologická klinika v Praze! Moderní přístup, profesionalita a skvělé lékařky. Doporučuji!",
      author: "Markéta Horáková",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80",
      initials: "MH"
    },
    {
      id: 8,
      text: "Úžasná péče během mého těhotenství. Doktorka byla vždy k dispozici, trpělivá a vysvětlila mi vše, co jsem potřebovala vědět.",
      author: "Tereza Ková",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&q=80",
      initials: "TK"
    },
    {
      id: 9,
      text: "Mikrojehličkování u Gennero bylo fantastické. Výsledky jsou viditelné a personál profesionální. Určitě se vrátím!",
      author: "Barbora Novotná",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&q=80",
      initials: "BN"
    },
    {
      id: 10,
      text: "S úsměvem a profesionalitou. Konečně místo, kde se o vás opravdu postarají. Doporučuji každé ženě!",
      author: "Simona Veselá",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&q=80",
      initials: "SV"
    },
    {
      id: 11,
      text: "Chemický peeling byl skvělý! Má pleť vypadá mnohem lépe a personál byl neskutečně milý a profesionální.",
      author: "Veronika Kratochvílová",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&q=80",
      initials: "VK"
    },
    {
      id: 12,
      text: "Důvěřuji svému zdraví pouze Gennero. Profesionální, empatické a vždy ochotné pomoci. Jsem velmi vděčná!",
      author: "Alena Benešová",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&q=80",
      initials: "AB",
      featured: true
    },
    {
      id: 13,
      text: "Mezoterapie je úžasná! Viditelné výsledky už po několika sezeních. Děkuji celému týmu za skvělou práci.",
      author: "Lenka Poláková",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&q=80",
      initials: "LP"
    },
    {
      id: 14,
      text: "Citlivý přístup a profesionalita. Právě takovou péči jsem hledala. Jsem nadšená!",
      author: "Hana Marková",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=400&h=400&fit=crop&q=80",
      initials: "HM"
    },
    {
      id: 15,
      text: "Estetická gynekologie změnila můj život! Cítím se mnohem sebejistěji. Děkuji za profesionální přístup.",
      author: "Zuzana Bartošová",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80",
      initials: "ZB"
    },
    {
      id: 16,
      text: "Elektro epilace je skvělá! Doktorka byla trpělivá a profesionální. Výsledky jsou úžasné.",
      author: "Nikola Stránská",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=400&h=400&fit=crop&q=80",
      initials: "NS"
    },
    {
      id: 17,
      text: "Nejlepší gynekologická péče, kterou jsem kdy zažila. Doktorka je úžasná, empatická a profesionální. Děkuji!",
      author: "Gabriela Sedláková",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=400&h=400&fit=crop&q=80",
      initials: "GS",
      featured: true
    },
    {
      id: 18,
      text: "Krásné prostředí, milý personál a profesionální péče. Doporučuji každé ženě, která hledá kvalitní gynekologickou péči.",
      author: "Andrea Kučerová",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&q=80",
      initials: "AK"
    },
    {
      id: 19,
      text: "Jsem nadšená z celkové péče. Doktorky jsou profesionální, milé a opravdu se zajímají o své pacientky.",
      author: "Monika Říhová",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
      initials: "MŘ"
    },
    {
      id: 20,
      text: "Úžasná zkušenost! Cítím se tady jako doma. Profesionalita, empatie a moderní přístup - to všechno najdete v Gennero.",
      author: "Kristýna Jelínková",
      role: "Pacientka",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&q=80",
      initials: "KJ"
    }
  ];

  const FeaturedCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <Card 
      className="liquid-glass-apple grid grid-rows-[auto_1fr] gap-4 sm:col-span-2 sm:p-5 md:row-span-2 border-0 rounded-2xl"
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.24) 100%)',
        backdropFilter: 'blur(16px) saturate(120%)',
        WebkitBackdropFilter: 'blur(16px) saturate(120%)'
      }}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
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
            {testimonial.text}
          </p>
          <div className="grid grid-cols-[auto_1fr] items-center gap-3">
            <Avatar className="size-12 border-2" style={{ borderColor: '#8ea9f4' }}>
              <AvatarImage
                src={testimonial.image}
                alt={testimonial.author}
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
                {testimonial.initials}
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
                {testimonial.author}
              </cite>
              <span 
                className="text-xs block"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500,
                  color: '#4a5568'
                }}
              >
                {testimonial.role}
              </span>
            </div>
          </div>
        </blockquote>
      </CardContent>
    </Card>
  );

  const MediumCard = ({ testimonial, bgColor }: { testimonial: typeof testimonials[0], bgColor: string }) => (
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
            {testimonial.text}
          </p>
          <div className="grid grid-cols-[auto_1fr] items-center gap-3">
            <Avatar className="size-10">
              <AvatarImage
                src={testimonial.image}
                alt={testimonial.author}
                width={40}
                height={40}
              />
              <AvatarFallback 
                style={{ 
                  backgroundColor: bgColor,
                  color: '#112250',
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 600
                }}
              >
                {testimonial.initials}
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
                {testimonial.author}
              </cite>
              <span 
                className="text-xs block"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500,
                  color: '#4a5568'
                }}
              >
                {testimonial.role}
              </span>
            </div>
          </div>
        </blockquote>
      </CardContent>
    </Card>
  );

  const SmallCard = ({ testimonial, bgColor, textColor }: { testimonial: typeof testimonials[0], bgColor: string, textColor?: string }) => (
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
            {testimonial.text}
          </p>
          <div className="grid grid-cols-[auto_1fr] items-center gap-2">
            <Avatar className="size-9">
              <AvatarImage
                src={testimonial.image}
                alt={testimonial.author}
                width={36}
                height={36}
              />
              <AvatarFallback 
                style={{ 
                  backgroundColor: bgColor,
                  color: textColor || '#112250',
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.7rem'
                }}
              >
                {testimonial.initials}
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
                {testimonial.author}
              </cite>
              <span 
                className="text-xs block"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500,
                  color: '#4a5568'
                }}
              >
                {testimonial.role}
              </span>
            </div>
          </div>
        </blockquote>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/TESTIMONIAL.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="fixed inset-0 z-0 bg-white/20" />
      
      <div className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-responsive px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6 text-center"
          style={{ 
            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
            fontWeight: 600,
            lineHeight: '1.2',
            color: '#112250'
          }}
        >
          Co říkají naše pacientky
        </h1>

        <p 
          className="text-base md:text-lg max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed text-center"
          style={{ 
            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
            fontWeight: 500,
            lineHeight: '1.6',
            color: '#112250'
          }}
        >
          Tisíce spokojených pacientek důvěřují našim lékařkám a specialistkám. Péče s precizností, empatií a respektem k vašim potřebám.
        </p>

        {/* Grid 1 */}
        <div className="w-full max-w-4xl mx-auto mb-3">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2">
            <FeaturedCard testimonial={testimonials[0]} />
            <MediumCard testimonial={testimonials[1]} bgColor="#b0c4f8" />
            <SmallCard testimonial={testimonials[2]} bgColor="#f7c7db" />
            <SmallCard testimonial={testimonials[3]} bgColor="#8ea9f4" textColor="#ffffff" />
          </div>
        </div>

        {/* Grid 2 */}
        <div className="w-full max-w-4xl mx-auto mb-3">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2">
            <SmallCard testimonial={testimonials[5]} bgColor="#8ea9f4" textColor="#ffffff" />
            <SmallCard testimonial={testimonials[6]} bgColor="#b0c4f8" />
            <MediumCard testimonial={testimonials[7]} bgColor="#f7c7db" />
            <FeaturedCard testimonial={testimonials[4]} />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="w-full max-w-4xl mx-auto mb-3">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2">
            <FeaturedCard testimonial={testimonials[11]} />
            <MediumCard testimonial={testimonials[8]} bgColor="#b0c4f8" />
            <SmallCard testimonial={testimonials[9]} bgColor="#f7c7db" />
            <SmallCard testimonial={testimonials[10]} bgColor="#8ea9f4" textColor="#ffffff" />
          </div>
        </div>

        {/* Grid 4 */}
        <div className="w-full max-w-4xl mx-auto mb-3">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2">
            <SmallCard testimonial={testimonials[12]} bgColor="#b0c4f8" />
            <SmallCard testimonial={testimonials[13]} bgColor="#f7c7db" />
            <MediumCard testimonial={testimonials[14]} bgColor="#8ea9f4" />
            <FeaturedCard testimonial={testimonials[16]} />
          </div>
        </div>

        {/* Grid 5 - Remaining */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            <SmallCard testimonial={testimonials[15]} bgColor="#8ea9f4" textColor="#ffffff" />
            <SmallCard testimonial={testimonials[17]} bgColor="#b0c4f8" />
            <SmallCard testimonial={testimonials[18]} bgColor="#f7c7db" />
            <SmallCard testimonial={testimonials[19]} bgColor="#b0c4f8" />
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
