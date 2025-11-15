'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
interface SplitServicesProps {
  height?: string;
  clickToExpand?: boolean;
}

export default function SplitServices({ height = 'h-[70vh] md:h-[80vh]', clickToExpand = false }: SplitServicesProps) {
  const [hoveredSide, setHoveredSide] = useState<'gynecology' | 'cosmetology' | null>(null);
  const [expandedSide, setExpandedSide] = useState<'gynecology' | 'cosmetology' | null>(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [selectedSubcategoryIndex, setSelectedSubcategoryIndex] = useState<number | null>(null);

  // Check URL hash on mount and when it changes to auto-expand sections and select cards
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      
      // Map of hash to card index for gynecology
      const gynecologyCardMap: Record<string, number> = {
        '#tehotne': 0,
        '#ambulantni-gynekologie': 1,
        '#esteticka-gynekologie': 2,
        '#prevence': 3,
      };

      // Map of hash to card index for cosmetology
      const cosmetologyCardMap: Record<string, number> = {
        '#elektro-epilace': 0,
        '#mikrojehlickovani': 1,
        '#chemicky-peeling': 2,
        '#mezoterapie': 3,
      };

      if (hash === '#gynekologie' || hash === '#gynekology') {
        setExpandedSide('gynecology');
        setHoveredSide(null);
        setSelectedCardIndex(null);
      } else if (hash === '#kosmetologie' || hash === '#cosmetology') {
        setExpandedSide('cosmetology');
        setHoveredSide(null);
        setSelectedCardIndex(null);
      } else if (gynecologyCardMap[hash] !== undefined) {
        // Specific gynecology service card
        setExpandedSide('gynecology');
        setHoveredSide(null);
        setSelectedCardIndex(gynecologyCardMap[hash]);
      } else if (cosmetologyCardMap[hash] !== undefined) {
        // Specific cosmetology service card
        setExpandedSide('cosmetology');
        setHoveredSide(null);
        setSelectedCardIndex(cosmetologyCardMap[hash]);
      }
    };

    // Check on mount
    checkHash();

    // Listen for hash changes
    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  const gynecologyServices = [
    { 
      label: 'Ambulantní gynekologická péče', 
      href: '/sluzby#ambulantni-gynekologie',
      icon: '/icons/ambulantni-gynekologie.svg'
    },
    { 
      label: 'Ambulantní péče o těhotné', 
      href: '/sluzby#tehotne',
      icon: '/icons/ambulantni-pece.svg'
    },
    { 
      label: 'Estetická gynekologie', 
      href: '/sluzby#esteticka-gynekologie',
      icon: '/icons/esteticka-gynekologie.svg'
    },
  ];

  const cosmetologyServices = [
    { 
      label: 'Elektro epilace', 
      href: '/sluzby#elektro-epilace',
      icon: '/icons/elektro-epilace.svg'
    },
    { 
      label: 'Mikrojehličkování', 
      href: '/sluzby#mikrojehlickovani',
      icon: '/icons/mikrojehlickovani.svg'
    },
    { 
      label: 'Chemický peeling', 
      href: '/sluzby#chemicky-peeling',
      icon: '/icons/chemicky-peeling.svg'
    },
    { 
      label: 'Mezoterapie', 
      href: '/sluzby#mezoterapie',
      icon: '/icons/mezoterapie.svg'
    },
  ];

  return (
    <section className={`relative w-full ${height} flex overflow-x-hidden max-w-full`}>
      {/* Gynecology Side - Left */}
      <div 
        className={`relative overflow-hidden ${
          expandedSide === 'cosmetology' ? 'w-0 opacity-0' :
          expandedSide === 'gynecology' ? 'w-full' :
          hoveredSide === 'gynecology' ? 'w-2/3' : 
          hoveredSide === 'cosmetology' ? 'w-1/3' : 'w-1/2'
        }`}
        style={{
          willChange: 'width, opacity',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
          isolation: 'isolate',
          contain: 'layout style paint',
          transition: 'width 0.95s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.95s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseEnter={() => !expandedSide && setHoveredSide('gynecology')}
        onMouseLeave={() => !expandedSide && setHoveredSide(null)}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <Image
            src="/gynecology.png"
            alt="Gynekologie"
            fill
            className="object-cover"
            sizes="50vw"
            priority
            style={{ 
              objectPosition: expandedSide === 'gynecology' ? 'center center' : 'left center',
              willChange: 'object-position',
              WebkitTransform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          />
        </div>

        {/* Content */}
        <div 
          className={`relative h-full flex items-center justify-start ${
            (hoveredSide === 'gynecology' || hoveredSide === 'cosmetology') && !expandedSide ? 'pt-8 md:pt-12' : ''
          }`}
          style={{
            willChange: 'padding-top',
            transform: 'translateZ(0)',
            transition: 'padding-top 0.95s cubic-bezier(0.16, 1, 0.3, 1)',
            backfaceVisibility: 'hidden'
          }}
        >
          <div 
            className={`flex flex-col justify-center w-full ${
              expandedSide === 'gynecology' ? 'items-start w-full' : 'items-start max-w-2xl px-6 md:px-10 lg:px-12'
            } ${expandedSide === 'gynecology' ? 'px-4 md:px-6 lg:px-8 xl:px-12' : ''}`}
            style={{
              willChange: 'max-width, padding',
              transform: 'translateZ(0)',
              transition: 'max-width 0.95s cubic-bezier(0.16, 1, 0.3, 1), padding 0.95s cubic-bezier(0.16, 1, 0.3, 1)',
              backfaceVisibility: 'hidden'
            }}
          >
            {/* Always visible heading - hidden when card is selected */}
            <div 
              className={`leading-tight text-left transition-all duration-700 mb-0 flex flex-col ${
                selectedCardIndex !== null ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100'
              }`}
            >
                {clickToExpand ? (
                  <>
                    {/* Go Back Button - visible when expanded and no card selected */}
                    {expandedSide === 'gynecology' && selectedCardIndex === null && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          setExpandedSide(null);
                          setHoveredSide(null);
                        }}
                        className="group inline-flex items-center gap-2 mb-3 md:mb-4 transition-colors self-start"
                        style={{ 
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 500,
                          color: '#ffffff',
                          fontSize: '0.875rem',
                          textDecoration: 'none',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                          textShadow: '0 2px 6px rgba(0,0,0,0.5)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#8ea9f4';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#ffffff';
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
                        <span>Zpět</span>
                      </button>
                    )}
                    
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (selectedCardIndex !== null) {
                          // If a card is selected, just deselect it
                          setSelectedCardIndex(null);
                        } else {
                          // Otherwise, toggle the expanded state
                          setExpandedSide(expandedSide === 'gynecology' ? null : 'gynecology');
                          setHoveredSide(null);
                        }
                      }}
                      className="group flex flex-col items-start gap-0 cursor-pointer arrow-float-parent self-start"
                    >
                    {expandedSide !== 'gynecology' && (
                      <h2 
                        className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-0 text-shadow drop-shadow-xl whitespace-nowrap"
                        style={{ 
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 600,
                          color: '#ffffff',
                          lineHeight: '1.1',
                          ['--ts-y' as any]: '2px',
                          ['--ts-blur' as any]: '10px',
                          ['--ts-color' as any]: 'rgba(0,0,0,0.6)'
                        }}
                      >
                        Objevte
                      </h2>
                    )}
                      <span 
                        className={`font-semibold border-b-3 border-primary text-primary text-shadow drop-shadow-xl transition-all duration-700 whitespace-nowrap inline-flex items-center gap-2 ${
                          expandedSide === 'gynecology' 
                            ? 'text-5xl md:text-6xl lg:text-7xl -mt-1' 
                            : 'text-3xl md:text-4xl lg:text-5xl -mt-1'
                        }`}
                        style={{ 
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 600,
                          paddingBottom: '2px',
                          lineHeight: '1.1',
                          ['--ts-y' as any]: '2px',
                          ['--ts-blur' as any]: '10px',
                          ['--ts-color' as any]: 'rgba(0,0,0,0.6)'
                        }}
                      >
                        {expandedSide === 'gynecology' ? 'Gynekologie' : 'Gynekologii'}
                      {expandedSide !== 'gynecology' && selectedCardIndex === null && (
                        <svg 
                          className="w-7 h-7 md:w-8 md:h-8 text-primary arrow-float-hover drop-shadow-lg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      </span>
                    </button>
                  </>
                ) : (
                <>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-0 text-shadow drop-shadow-xl whitespace-nowrap"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: '1.1',
                  ['--ts-y' as any]: '2px',
                  ['--ts-blur' as any]: '10px',
                  ['--ts-color' as any]: 'rgba(0,0,0,0.6)'
                }}
              >
                Objevte
              </h2>
              <Link 
                href="/sluzby#gynekologie"
                className="group inline-flex items-center gap-2 whitespace-nowrap -mt-1 arrow-float-parent no-underline"
                style={{ textDecoration: 'none' }}
              >
                <span 
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary text-shadow drop-shadow-xl"
                  style={{ 
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                    fontWeight: 600,
                    paddingBottom: '2px',
                    lineHeight: '1.1',
                    ['--ts-y' as any]: '2px',
                    ['--ts-blur' as any]: '10px',
                    ['--ts-color' as any]: 'rgba(0,0,0,0.6)',
                    textDecoration: 'none'
                  }}
                >
                  Gynekologii
                </span>
                <svg 
                  className="w-7 h-7 md:w-8 md:h-8 text-primary arrow-float-hover drop-shadow-lg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
                </>
              )}
            </div>

            {/* Expanded content - visible on hover or click */}
            <div 
              className={`transition-all duration-500 w-full ${
                (hoveredSide === 'gynecology' || expandedSide === 'gynecology')
                  ? expandedSide === 'gynecology' 
                    ? 'opacity-100 max-h-none mt-4 md:mt-5' 
                    : 'opacity-100 max-h-[1000px] mt-4 md:mt-5'
                  : 'opacity-0 max-h-0 overflow-hidden'
              }`}
            >
              {/* Subheading - hidden when card is selected */}
              <p 
                className={`text-white mb-1 text-left text-shadow drop-shadow-lg ${
                  expandedSide === 'gynecology' 
                    ? 'text-base md:text-lg' 
                    : 'text-base md:text-lg'
                } ${
                  selectedCardIndex !== null ? 'opacity-0 max-h-0 overflow-hidden mb-0' : ''
                }`}
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500,
                  lineHeight: '1.5',
                  minWidth: expandedSide === 'gynecology' ? 'auto' : '500px',
                  ['--ts-y' as any]: '2px',
                  ['--ts-blur' as any]: '6px',
                  ['--ts-color' as any]: 'rgba(0,0,0,0.5)',
                  opacity: (hoveredSide === 'gynecology' || expandedSide === 'gynecology') && selectedCardIndex === null 
                    ? (expandedSide === 'gynecology' ? 1 : (hoveredSide === 'gynecology' ? 1 : 0))
                    : 0,
                  transform: (hoveredSide === 'gynecology' || expandedSide === 'gynecology') && selectedCardIndex === null
                    ? 'translateY(0)'
                    : 'translateY(-10px)',
                  transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                }}
              >
                Citlivá péče o vaše ženské zdraví – od prevence po moderní diagnostiku.
              </p>

              {/* Service Cards - visible when expanded */}
              {expandedSide === 'gynecology' && (
                <div className={`w-full ${selectedCardIndex !== null ? 'mt-0' : 'mt-6 md:mt-8'}`}>
                  {selectedCardIndex !== null ? (
                    // Single card view when selected
                    <div className="w-full">
                      {[
                        {
                          title: 'Ambulantní péče pro těhotné',
                          description: 'Komplexní gynekologická péče v celém rozsahu běžné ambulantní péče',
                          href: '/sluzby#tehotne',
                          categories: [
                            {
                              title: 'Fyzikální gynekologické vyšetření',
                              items: ['Vaginalni', 'V zrcadle']
                            },
                            {
                              title: 'Onkologická prevence',
                              items: ['Kolposkopie', 'Cytologie', 'HPV Testace']
                            },
                            {
                              title: 'Ultrazvuková diagnostika',
                              items: ['Abdominalni', 'Vaginalni']
                            },
                            {
                              title: 'Antikoncepce',
                              items: ['Hormonální antikoncepce', 'Nitroděložní tělíska', 'Vyšetření trombofilních mutací']
                            }
                          ]
                        },
                        {
                          title: 'Ambulantní gynekologická péče',
                          description: 'Preventivní vyšetření, diagnostika a léčba gynekologických obtíží',
                          href: '/sluzby#ambulantni-gynekologie',
                          categories: [
                            {
                              title: 'Fyzikální gynekologické vyšetření',
                              items: ['Vaginalni', 'V zrcadle']
                            },
                            {
                              title: 'Onkologická prevence',
                              items: ['Kolposkopie', 'Cytologie', 'HPV Testace']
                            },
                            {
                              title: 'Ultrazvuková diagnostika',
                              items: ['Abdominalni', 'Vaginalni']
                            },
                            {
                              title: 'Antikoncepce',
                              items: ['Hormonální antikoncepce', 'Nitroděložní tělíska', 'Vyšetření trombofilních mutací']
                            }
                          ]
                        },
                        {
                          title: 'Estetická gynekologie',
                          description: 'Moderní estetické zákroky pro zvýšení kvality života a sebedůvěry',
                          href: '/sluzby#esteticka-gynekologie',
                          categories: [
                            {
                              title: 'Fyzikální gynekologické vyšetření',
                              items: ['Vaginalni', 'V zrcadle']
                            },
                            {
                              title: 'Onkologická prevence',
                              items: ['Kolposkopie', 'Cytologie', 'HPV Testace']
                            },
                            {
                              title: 'Ultrazvuková diagnostika',
                              items: ['Abdominalni', 'Vaginalni']
                            },
                            {
                              title: 'Antikoncepce',
                              items: ['Hormonální antikoncepce', 'Nitroděložní tělíska', 'Vyšetření trombofilních mutací']
                            }
                          ]
                        },
                        {
                          title: 'Prevence a screening',
                          description: 'Pravidelné kontroly a preventivní programy pro vaše zdraví',
                          href: '/sluzby#prevence',
                          categories: [
                            {
                              title: 'Fyzikální gynekologické vyšetření',
                              items: ['Vaginalni', 'V zrcadle']
                            },
                            {
                              title: 'Onkologická prevence',
                              items: ['Kolposkopie', 'Cytologie', 'HPV Testace']
                            },
                            {
                              title: 'Ultrazvuková diagnostika',
                              items: ['Abdominalni', 'Vaginalni']
                            },
                            {
                              title: 'Antikoncepce',
                              items: ['Hormonální antikoncepce', 'Nitroděložní tělíska', 'Vyšetření trombofilních mutací']
                            }
                          ]
                        }
                      ].filter((_, idx) => idx === selectedCardIndex).map((card, _) => {
                        const cardIndex = selectedCardIndex!;
                        return (
                          <div
                            key={cardIndex}
                            className="relative rounded-2xl overflow-hidden group w-full"
                  style={{
                    minHeight: '500px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.24) 100%)',
                    backdropFilter: 'blur(16px) saturate(120%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(120%)',
                    border: '1px solid rgba(255,255,255,0.35)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 20px rgba(17,34,80,0.1), 0 2px 6px rgba(17,34,80,0.06)',
                    animation: 'fadeIn 0.4s ease-out',
                  }}
                          >
                          {/* Heart SVG Background */}
                          <div 
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              backgroundImage: 'url(/service-heart.svg)',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              opacity: 0.5,
                              filter: 'brightness(0) invert(1)',
                              WebkitFilter: 'brightness(0) invert(1)',
                            }}
                          />
                          
                          {/* Content */}
                          <div 
                            className="relative flex flex-col justify-start z-10"
                            style={{
                              padding: '2rem',
                              minHeight: 0,
                              overflow: 'hidden',
                            }}
                          >
                            <div className="flex flex-col items-start w-full">
                              {/* Go Back Button */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (selectedSubcategoryIndex !== null) {
                                    // If viewing subcategory detail, go back to categories
                                    setSelectedSubcategoryIndex(null);
                                  } else {
                                    // Otherwise go back to grid
                                    setSelectedCardIndex(null);
                                  }
                                }}
                                className="inline-flex items-center gap-2 font-medium text-dark transition-all duration-300 hover:gap-1.5 mb-4 w-fit"
                                style={{ 
                                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                  fontWeight: 500,
                                  color: 'var(--color-dark)',
                                  fontSize: '0.875rem',
                                  lineHeight: '1.2',
                                  backgroundColor: 'transparent',
                                  border: 'none',
                                  cursor: 'pointer',
                                  padding: 0,
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.opacity = '0.8';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.opacity = '1';
                                }}
                              >
                                <svg 
                                  className="w-4 h-4" 
                                  viewBox="0 0 24 24" 
                                  fill="none" 
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ color: 'var(--color-primary)' }}
                                >
                                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Zpět</span>
                              </button>
                              
                              {selectedSubcategoryIndex === null ? (
                                <>
                              {/* Title */}
                              <h3 
                                className="font-semibold mb-1.5 text-dark leading-tight"
                                style={{ 
                                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                  fontWeight: 600,
                                  color: 'var(--color-dark)',
                                  fontSize: '1.75rem',
                                  lineHeight: '1.1'
                                }}
                              >
                                {card.title}
                              </h3>
                              {/* Subtitle */}
                              <p 
                                className="text-sm text-dark/80 leading-snug mb-6"
                                style={{ 
                                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                  fontWeight: 500,
                                  color: 'var(--color-text-secondary)',
                                  fontSize: '1rem',
                                  lineHeight: '1.2'
                                }}
                              >
                                {card.description}
                              </p>
                              
                              {/* Categories - 2 columns with aligned buttons */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full">
                                {card.categories.map((category, catIndex) => (
                                  <div key={catIndex} className="flex flex-col items-start">
                                    {/* Category Title */}
                                    <div className="w-full mb-2">
                                      <div className="flex items-center gap-2">
                                        <h4
                                          className="font-medium text-dark"
                                          style={{ 
                                            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                            fontWeight: 500,
                                            color: 'var(--color-dark)',
                                            fontSize: '1.5rem',
                                            lineHeight: '1.2',
                                          }}
                                        >
                                          {category.title}
                                        </h4>
                                        <svg 
                                          className="w-4 h-4" 
                                          viewBox="0 0 24 24" 
                                          fill="none" 
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{ color: 'var(--color-primary)' }}
                                        >
                                          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </div>
                                    </div>
                                    
                                    {/* Content area: bullets + button with fixed spacing from title */}
                                    <div className="flex flex-col w-full" style={{ height: '7rem' }}>
                                      {/* Bullet Points - horizontal flow with wrapping */}
                                      <ul className="flex flex-row flex-wrap gap-x-4 gap-y-1.5 mb-2 items-start" style={{ alignContent: 'flex-start' }}>
                                        {category.items.map((item, itemIndex) => (
                                          <li 
                                            key={itemIndex}
                                            className="flex items-center"
                                            style={{
                                              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                              fontWeight: 500,
                                              color: 'var(--color-text-secondary)',
                                              fontSize: '0.875rem',
                                              lineHeight: '1.4'
                                            }}
                                          >
                                            <span
                                              className="w-1.5 h-1.5 rounded-full mr-1.5 flex-shrink-0"
                                              style={{
                                                backgroundColor: 'var(--color-primary)'
                                              }}
                                            />
                                            <span className="whitespace-nowrap">{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                      
                                      {/* CTA Buttons - always at bottom of fixed-height container */}
                                      <div className="flex items-center gap-3 mt-auto">
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            // Navigate to booking or service page
                                            window.location.href = '/objednat';
                                          }}
                                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-2.5 w-fit"
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
                                          <span>Objednat se</span>
                                          <svg 
                                            className="w-4 h-4" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: 'var(--color-dark)' }}
                                          >
                                            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                        </button>
                                        
                                        {/* Learn More Link - only show for Fyzikální gynekologické vyšetření */}
                                        {category.title === 'Fyzikální gynekologické vyšetření' && (
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setSelectedSubcategoryIndex(catIndex);
                                            }}
                                            className="inline-flex items-center gap-1 group transition-all duration-300"
                                            style={{
                                              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                              fontWeight: 500,
                                              fontSize: '0.875rem',
                                              color: '#112250',
                                              backgroundColor: 'transparent',
                                              border: 'none',
                                              cursor: 'pointer',
                                              padding: 0,
                                            }}
                                          >
                                            <span>Zjistit více</span>
                                            <svg 
                                              className="w-3 h-3 transition-transform group-hover:translate-x-0.5" 
                                              viewBox="0 0 24 24" 
                                              fill="none" 
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                                </>
                              ) : (
                                // Subcategory Detail View
                                <>
                                  {/* Title - Subcategory name */}
                                  <h3 
                                    className="font-semibold mb-1.5 text-dark leading-tight"
                                    style={{ 
                                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                      fontWeight: 600,
                                      color: 'var(--color-dark)',
                                      fontSize: '1.75rem',
                                      lineHeight: '1.1'
                                    }}
                                  >
                                    {card.categories[selectedSubcategoryIndex].title}
                                  </h3>
                                  
                                  {/* Subtitle - Service subheading */}
                                  <p 
                                    className="text-base text-dark/80 leading-snug"
                                    style={{ 
                                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                      fontWeight: 500,
                                      color: 'var(--color-text-secondary)',
                                      fontSize: '1rem',
                                      lineHeight: '1.4'
                                    }}
                                  >
                                    Základní gynekologické vyšetření s důrazem na respekt a odbornost
                                  </p>
                                  
                                  {/* Vertically Centered Content Wrapper */}
                                  <div className="flex-1 flex flex-col justify-center my-8">
                                    {/* Detail Content - 3 column grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                      {[
                                        {
                                          icon: '/icons/ambulantni-gynekologie.svg',
                                          title: 'Co zákrok obnáší',
                                          description: 'Krátké a šetrné vyšetření, při kterém lékař hodnotí stav ženských pohlavních orgánů pomocí zrcadel. Slouží k odhalení zánětů, cyst nebo jiných změn. Probíhá v diskrétním prostředí s důrazem na pohodlí pacientky.'
                                        },
                                        {
                                          icon: '/icons/doctorr.svg',
                                          title: 'Komu je určené',
                                          description: 'Všem ženám po zahájení pohlavního života, ideálně v rámci pravidelné preventivní prohlídky. Doporučuje se také při bolestech, výtoku nebo nepravidelnostech cyklu.'
                                        },
                                        {
                                          icon: '/icons/starr.svg',
                                          title: 'Jaké jsou výsledky',
                                          description: 'Včasné odhalení zdravotních potíží a doporučení dalšího postupu či léčby. Pravidelné vyšetření pomáhá udržet dlouhodobé gynekologické zdraví.'
                                        }
                                      ].map((section, idx) => (
                                        <div key={idx} className="flex flex-col">
                                          {/* Icon */}
                                          <div className="mb-3">
                                            <span
                                              aria-hidden="true"
                                              className="block w-10 h-10"
                                              style={{
                                                backgroundColor: 'var(--color-primary)',
                                                WebkitMaskImage: `url(${section.icon})`,
                                                maskImage: `url(${section.icon})`,
                                                WebkitMaskRepeat: 'no-repeat',
                                                maskRepeat: 'no-repeat',
                                                WebkitMaskPosition: 'center',
                                                maskPosition: 'center',
                                                WebkitMaskSize: 'contain',
                                                maskSize: 'contain',
                                              }}
                                            />
                                          </div>

                                          {/* Title */}
                                          <h4 
                                            className="text-lg font-semibold mb-2 text-dark"
                                            style={{ 
                                              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                              fontWeight: 600,
                                              color: 'var(--color-dark)'
                                            }}
                                          >
                                            {section.title}
                                          </h4>

                                          {/* Description */}
                                          <p 
                                            className="text-sm leading-relaxed"
                                            style={{ 
                                              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                              fontWeight: 500,
                                              lineHeight: '1.6',
                                              color: 'var(--color-text-secondary)'
                                            }}
                                          >
                                            {section.description}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  {/* CTA Buttons */}
                                  <div className="flex items-center gap-4">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        window.location.href = '/objednat';
                                      }}
                                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:gap-2.5"
                                      style={{
                                        backgroundColor: 'var(--color-primary)',
                                        color: '#ffffff',
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
                                      <span>Objednat se</span>
                                      <svg 
                                        className="w-4 h-4" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </button>
                                    
                                    {/* Secondary CTA */}
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        window.location.href = '/kontakt';
                                      }}
                                      className="inline-flex items-center gap-1 group transition-all duration-300"
                                      style={{
                                        fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                        fontWeight: 500,
                                        fontSize: '1rem',
                                        color: 'var(--color-dark)',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: 0,
                                      }}
                                    >
                                      <span>Kontaktujte nás</span>
                                      <svg 
                                        className="w-4 h-4 transition-transform group-hover:translate-x-0.5" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </button>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        );
                      })}
                    </div>
                  ) : (
                    // Grid view when no card is selected
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                      {[
                        {
                          title: 'Ambulantní péče pro těhotné',
                          description: 'Komplexní gynekologická péče v celém rozsahu běžné ambulantní péče',
                          href: '/sluzby#tehotne'
                        },
                        {
                          title: 'Ambulantní gynekologická péče',
                          description: 'Preventivní vyšetření, diagnostika a léčba gynekologických obtíží',
                          href: '/sluzby#ambulantni-gynekologie'
                        },
                        {
                          title: 'Estetická gynekologie',
                          description: 'Moderní estetické zákroky pro zvýšení kvality života a sebedůvěry',
                          href: '/sluzby#esteticka-gynekologie'
                        },
                        {
                          title: 'Prevence a screening',
                          description: 'Pravidelné kontroly a preventivní programy pro vaše zdraví',
                          href: '/sluzby#prevence'
                        }
                      ].map((card, index) => (
                      <div
                        key={index}
                        className="relative rounded-2xl overflow-hidden group"
                        style={{
                          aspectRatio: '8/5',
                          background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.24) 100%)',
                          backdropFilter: 'blur(16px) saturate(120%)',
                          WebkitBackdropFilter: 'blur(16px) saturate(120%)',
                          border: '1px solid rgba(255,255,255,0.35)',
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 20px rgba(17,34,80,0.1), 0 2px 6px rgba(17,34,80,0.06)',
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease',
                        }}
                        onClick={() => setSelectedCardIndex(index)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                      {/* Heart SVG Background */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          backgroundImage: 'url(/service-heart.svg)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          opacity: 0.5,
                          filter: 'brightness(0) invert(1)',
                          WebkitFilter: 'brightness(0) invert(1)',
                        }}
                      />
                      
                      {/* Content - centered vertically with consistent alignment */}
                      <div 
                        className="relative h-full z-10 flex flex-col justify-center"
                        style={{
                          padding: '1rem',
                        }}
                      >
                        {/* Content wrapper - fixed structure to maintain cross-card alignment */}
                        <div 
                          className="w-full flex flex-col"
                          style={{
                            // Fixed total height ensures titles, subheadings, and buttons align across cards
                            // while the wrapper itself is centered vertically
                          }}
                        >
                          {/* Title section - fixed height to align subheadings across all cards */}
                          <div 
                            className="w-full"
                            style={{
                              height: '3.5rem', // Fixed height for 2 lines - ensures all subheadings start at same level
                              display: 'flex',
                              alignItems: 'flex-start',
                            }}
                          >
                            <h3 
                              className="font-semibold text-dark"
                              style={{ 
                                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                fontWeight: 600,
                                color: 'var(--color-dark)',
                                fontSize: '1.2rem',
                                lineHeight: '1.15', // Tighter line height
                                margin: '0',
                                padding: '0',
                                marginBottom: '0',
                              }}
                            >
                              {card.title}
                            </h3>
                          </div>
                          
                          {/* Description section - aligned across all cards, very close to title */}
                          <div 
                            className="w-full"
                            style={{
                              marginTop: '-0.4rem', // Negative margin to pull description closer to title
                              minHeight: '2.5rem',
                            }}
                          >
                            <p 
                              className="text-xs text-dark/80"
                              style={{ 
                                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                fontWeight: 500,
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.35', // Slightly tighter line height
                                margin: '0',
                                padding: '0',
                              }}
                            >
                              {card.description}
                            </p>
                          </div>
                          
                          {/* Button section - closer to subheading */}
                          <div 
                            className="w-full flex items-start"
                            style={{
                              marginTop: '0.25rem', // Closer spacing between subheading and button
                            }}
                          >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCardIndex(index);
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold text-xs transition-all duration-300 hover:gap-2 w-fit"
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
                            <span>Prozkoumat</span>
                            <svg 
                              className="w-3 h-3" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                        </div>
                        {/* End content wrapper */}
                      </div>
                    </div>
                  ))}
                    </div>
                  )}
                </div>
              )}

              {/* Services List - hidden when expanded via click */}
              {expandedSide !== 'gynecology' && (
                <div 
                  className="flex flex-col gap-1 items-start mt-3 md:mt-4"
                  style={{
                    opacity: hoveredSide === 'gynecology' ? 1 : 0,
                    transform: hoveredSide === 'gynecology' ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.25s'
                  }}
                >
                {gynecologyServices.map((service, index) => (
                  <Link
                    key={service.label}
                    href={service.href}
                      className="group flex items-center gap-3 text-white hover:text-primary p-2 rounded-2xl hover:bg-white/10 w-fit transition-colors duration-75 ease-out"
                      style={{
                        opacity: hoveredSide === 'gynecology' ? 1 : 0,
                        transform: hoveredSide === 'gynecology' ? 'translateY(0)' : 'translateY(-8px)',
                        transition: `opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + index * 0.08}s, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + index * 0.08}s, color 75ms ease-out, background-color 75ms ease-out`
                      }}
                  >
                    <div 
                      className="inline-block shrink-0 relative"
                      style={{
                        filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6))',
                        WebkitFilter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6))'
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className={`inline-block group-hover:scale-110 transition-transform duration-150 ease-out relative z-10 ${
                          service.label === 'Ambulantní gynekologická péče' ? 'w-6 h-6' : 'w-5 h-5'
                        }`}
                        style={{
                          backgroundColor: 'var(--color-primary)',
                          WebkitMaskImage: `url(${service.icon})`,
                          maskImage: `url(${service.icon})`,
                          WebkitMaskRepeat: 'no-repeat',
                          maskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskPosition: 'center',
                          WebkitMaskSize: 'contain',
                          maskSize: 'contain',
                          display: 'block'
                        }}
                      />
                    </div>
                    <span 
                      className="text-sm md:text-base whitespace-nowrap text-shadow drop-shadow-xl transition-colors duration-75"
                      style={{ 
                        fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                        fontWeight: 500,
                        ['--ts-y' as any]: '2px',
                        ['--ts-blur' as any]: '10px',
                        ['--ts-color' as any]: 'rgba(0,0,0,0.6)'
                      }}
                    >
                      {service.label}
                    </span>
                  </Link>
                ))}
                {/* Prozkoumat více button */}
                <Link
                  href="/sluzby#gynekologie"
                  className="mt-2 md:mt-3 flex items-center gap-1.5 text-xs md:text-sm font-medium arrow-float-parent whitespace-nowrap"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                    textShadow: '0 2px 6px rgba(0,0,0,0.5)',
                    opacity: hoveredSide === 'gynecology' ? 1 : 0,
                    transform: hoveredSide === 'gynecology' ? 'translateY(0)' : 'translateY(-8px)',
                    transition: `opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + gynecologyServices.length * 0.08}s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + gynecologyServices.length * 0.08}s, color 100ms ease-out`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  }}
                >
                  <span>Prozkoumat více</span>
                  <svg className="w-3.5 h-3.5 arrow-float-hover shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal Divider line */}
      {expandedSide === null && (
      <div 
        className="absolute top-0 h-full w-1 bg-gradient-to-b from-transparent via-white/50 to-transparent z-10 pointer-events-none"
        style={{
          left: hoveredSide === 'gynecology' ? '66.666%' : 
                hoveredSide === 'cosmetology' ? '33.333%' : '50%',
          transform: 'skewY(-2deg) translateZ(0)',
          transformOrigin: 'center',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
          transition: 'left 0.95s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'left',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
          isolation: 'isolate',
          WebkitTransform: 'skewY(-2deg) translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          contain: 'layout style paint'
        }}
      ></div>
      )}

      {/* Cosmetology Side - Right */}
      <div 
        className={`relative overflow-hidden ${
          expandedSide === 'gynecology' ? 'w-0 opacity-0' :
          expandedSide === 'cosmetology' ? 'w-full' :
          hoveredSide === 'cosmetology' ? 'w-2/3' : 
          hoveredSide === 'gynecology' ? 'w-1/3' : 'w-1/2'
        }`}
        style={{
          willChange: 'width, opacity',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
          isolation: 'isolate',
          contain: 'layout style paint',
          transition: 'width 0.95s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.95s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseEnter={() => !expandedSide && setHoveredSide('cosmetology')}
        onMouseLeave={() => !expandedSide && setHoveredSide(null)}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <Image
            src="/cosmetology.png"
            alt="Kosmetologie"
            fill
            className="object-cover"
            sizes="50vw"
            priority
            unoptimized
            style={{ 
              objectPosition: expandedSide === 'cosmetology' ? 'center center' : 'right center',
              willChange: 'object-position',
              WebkitTransform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          />
        </div>

        {/* Content */}
        <div 
          className={`relative h-full flex items-center justify-start ${
            (hoveredSide === 'gynecology' || hoveredSide === 'cosmetology') && !expandedSide ? 'pt-8 md:pt-12' : ''
          }`}
          style={{
            willChange: 'padding-top',
            transform: 'translateZ(0)',
            transition: 'padding-top 0.95s cubic-bezier(0.16, 1, 0.3, 1)',
            backfaceVisibility: 'hidden'
          }}
        >
          <div 
            className={`flex flex-col justify-center w-full ${
              expandedSide === 'cosmetology' ? 'items-start w-full' : 'items-start max-w-2xl px-6 md:px-10 lg:px-12'
            } ${expandedSide === 'cosmetology' ? 'px-4 md:px-6 lg:px-8 xl:px-12' : ''}`}
            style={{
              willChange: 'max-width, padding',
              transform: 'translateZ(0)',
              transition: 'max-width 0.95s cubic-bezier(0.16, 1, 0.3, 1), padding 0.95s cubic-bezier(0.16, 1, 0.3, 1)',
              backfaceVisibility: 'hidden'
            }}
          >
            {/* Nově! Alert */}
            <div className="flex items-center justify-start gap-2 mb-1 md:mb-1.5">
              <div
                className="relative"
                style={{
                  filter: 'drop-shadow(0 4px 14px rgba(0, 0, 0, 1)) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.9))',
                  WebkitFilter: 'drop-shadow(0 4px 14px rgba(0, 0, 0, 1)) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.9))'
                }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full shrink-0 relative z-10"
                  style={{
                    backgroundColor: '#f7c7db',
                    animation: 'pinkGlow 2s ease-in-out infinite',
                    boxShadow: '0 3px 12px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.7), 0 1px 4px rgba(0, 0, 0, 1)',
                    display: 'block'
                  }}
                  aria-hidden="true"
                />
              </div>
              <span
                className="text-white text-sm md:text-base font-medium text-shadow drop-shadow-xl"
                style={{
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  ['--ts-y' as any]: '2px',
                  ['--ts-blur' as any]: '10px',
                  ['--ts-color' as any]: 'rgba(0,0,0,0.6)'
                }}
              >
                Nově!
              </span>
            </div>

            {/* Always visible heading - hidden when card is selected */}
            <div 
              className={`leading-tight text-left transition-all duration-700 mb-0 flex flex-col ${
                selectedCardIndex !== null ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100'
              }`}
            >
                {clickToExpand ? (
                  <>
                    {/* Go Back Button - visible when expanded and no card selected */}
                    {expandedSide === 'cosmetology' && selectedCardIndex === null && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          setExpandedSide(null);
                          setHoveredSide(null);
                        }}
                        className="group inline-flex items-center gap-2 mb-3 md:mb-4 transition-colors self-start"
                        style={{ 
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 500,
                          color: '#ffffff',
                          fontSize: '0.875rem',
                          textDecoration: 'none',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          padding: 0,
                          textShadow: '0 2px 6px rgba(0,0,0,0.5)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#f7c7db';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#ffffff';
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
                        <span>Zpět</span>
                      </button>
                    )}
                    
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (selectedCardIndex !== null) {
                          // If a card is selected, just deselect it
                          setSelectedCardIndex(null);
                        } else {
                          // Otherwise, toggle the expanded state
                          setExpandedSide(expandedSide === 'cosmetology' ? null : 'cosmetology');
                          setHoveredSide(null);
                        }
                      }}
                      className="group flex flex-col items-start gap-0 cursor-pointer arrow-float-parent self-start"
                    >
                      {expandedSide !== 'cosmetology' && (
                        <h2 
                          className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-0 text-shadow drop-shadow-xl whitespace-nowrap"
                          style={{ 
                            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                            fontWeight: 600,
                            color: '#ffffff',
                            lineHeight: '1.1',
                            ['--ts-y' as any]: '2px',
                            ['--ts-blur' as any]: '10px',
                            ['--ts-color' as any]: 'rgba(0,0,0,0.6)'
                          }}
                        >
                          Objevte
                        </h2>
                      )}
                      <span 
                        className={`font-semibold border-b-3 border-accent text-accent text-shadow drop-shadow-xl transition-all duration-700 whitespace-nowrap inline-flex items-center gap-2 ${
                          expandedSide === 'cosmetology' 
                            ? 'text-5xl md:text-6xl lg:text-7xl -mt-1' 
                            : 'text-3xl md:text-4xl lg:text-5xl -mt-1'
                        }`}
                        style={{ 
                          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                          fontWeight: 600,
                          paddingBottom: '2px',
                          lineHeight: '1.1',
                          ['--ts-y' as any]: '2px',
                          ['--ts-blur' as any]: '10px',
                          ['--ts-color' as any]: 'rgba(0,0,0,0.6)'
                        }}
                      >
                        {expandedSide === 'cosmetology' ? 'Kosmetologie' : 'kosmetologii'}
                        {expandedSide !== 'cosmetology' && selectedCardIndex === null && (
                          <svg 
                            className="w-7 h-7 md:w-8 md:h-8 text-accent arrow-float-hover drop-shadow-lg" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </span>
                    </button>
                  </>
                ) : (
                <>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-0 text-shadow drop-shadow-xl whitespace-nowrap"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: '1.1',
                  ['--ts-y' as any]: '2px',
                  ['--ts-blur' as any]: '10px',
                  ['--ts-color' as any]: 'rgba(0,0,0,0.6)'
                }}
              >
                Objevte
              </h2>
              <Link 
                href="/sluzby#kosmetologie"
                className="group inline-flex items-center gap-2 whitespace-nowrap -mt-1 arrow-float-parent no-underline"
                style={{ textDecoration: 'none' }}
              >
                <span 
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold text-accent text-shadow drop-shadow-xl"
                  style={{ 
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                    fontWeight: 600,
                    paddingBottom: '2px',
                    lineHeight: '1.1',
                    ['--ts-y' as any]: '2px',
                    ['--ts-blur' as any]: '10px',
                    ['--ts-color' as any]: 'rgba(0,0,0,0.6)',
                    textDecoration: 'none'
                  }}
                >
                  kosmetologii
                </span>
                <svg 
                  className="w-7 h-7 md:w-8 md:h-8 text-accent arrow-float-hover drop-shadow-lg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
                </>
              )}
            </div>

            {/* Expanded content - visible on hover or click */}
            <div 
              className={`transition-all duration-500 w-full ${
                (hoveredSide === 'cosmetology' || expandedSide === 'cosmetology')
                  ? expandedSide === 'cosmetology' 
                    ? 'opacity-100 max-h-none mt-4 md:mt-5' 
                    : 'opacity-100 max-h-[1000px] mt-4 md:mt-5'
                  : 'opacity-0 max-h-0 overflow-hidden'
              }`}
            >
              {/* Subheading - hidden when card is selected */}
              <p 
                className={`text-white mb-1 text-left text-shadow drop-shadow-lg ${
                  expandedSide === 'cosmetology' 
                    ? 'text-base md:text-lg' 
                    : 'text-base md:text-lg'
                } ${
                  selectedCardIndex !== null ? 'opacity-0 max-h-0 overflow-hidden mb-0' : ''
                }`}
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500,
                  lineHeight: '1.5',
                  minWidth: expandedSide === 'cosmetology' ? 'auto' : '500px',
                  ['--ts-y' as any]: '2px',
                  ['--ts-blur' as any]: '6px',
                  ['--ts-color' as any]: 'rgba(0,0,0,0.5)',
                  opacity: (hoveredSide === 'cosmetology' || expandedSide === 'cosmetology') && selectedCardIndex === null 
                    ? (expandedSide === 'cosmetology' ? 1 : (hoveredSide === 'cosmetology' ? 1 : 0))
                    : 0,
                  transform: (hoveredSide === 'cosmetology' || expandedSide === 'cosmetology') && selectedCardIndex === null
                    ? 'translateY(0)'
                    : 'translateY(-10px)',
                  transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                }}
              >
                Profesionální kosmetické služby pro vaši přirozenou krásu. O péči se stará lékařka-kosmetoložka s medicínským vzděláním – nový směr služeb, který kombinuje odbornost s estetikou.
              </p>

              {/* Service Cards - visible when expanded */}
              {expandedSide === 'cosmetology' && (
                <div className={`w-full ${selectedCardIndex !== null ? 'mt-0' : 'mt-6 md:mt-8'}`}>
                  {selectedCardIndex !== null ? (
                    // Single card view when selected
                    <div className="w-full">
                      {[
                        {
                          title: 'Elektro epilace',
                          description: 'Trvalé odstranění nežádoucích chloupků pomocí elektrického proudu',
                          href: '/sluzby#elektro-epilace',
                          categories: [
                            {
                              title: 'Postup zákroku',
                              items: ['Konzultace', 'Výběr vhodné metody', 'Postupné ošetření']
                            },
                            {
                              title: 'Výhody',
                              items: ['Trvalé výsledky', 'Šetrné k pokožce', 'Vhodné pro všechny typy kůže']
                            },
                            {
                              title: 'Oblast ošetření',
                              items: ['Obličej', 'Tělo', 'Intimní oblasti']
                            },
                            {
                              title: 'Délka léčby',
                              items: ['Pravidelné sezení', 'Individuální plán', 'Dlouhodobé výsledky']
                            }
                          ]
                        },
                        {
                          title: 'Mikrojehličkování',
                          description: 'Stimulace kolagenu pomocí mikrojehliček pro mladší vzhled pokožky',
                          href: '/sluzby#mikrojehlickovani',
                          categories: [
                            {
                              title: 'Postup zákroku',
                              items: ['Konzultace', 'Příprava pokožky', 'Mikrojehličkování']
                            },
                            {
                              title: 'Výhody',
                              items: ['Stimulace kolagenu', 'Redukce vrásek', 'Zlepšení textury pokožky']
                            },
                            {
                              title: 'Oblast ošetření',
                              items: ['Obličej', 'Dekoltu', 'Ruce']
                            },
                            {
                              title: 'Délka léčby',
                              items: ['Série ošetření', 'Doporučený interval', 'Viditelné výsledky']
                            }
                          ]
                        },
                        {
                          title: 'Chemický peeling',
                          description: 'Hloubkové očištění a omlazení pokožky pomocí chemických látek',
                          href: '/sluzby#chemicky-peeling',
                          categories: [
                            {
                              title: 'Postup zákroku',
                              items: ['Konzultace', 'Analýza pokožky', 'Aplikace peelingu']
                            },
                            {
                              title: 'Výhody',
                              items: ['Omlazení pokožky', 'Redukce pigmentace', 'Vyhlazení textury']
                            },
                            {
                              title: 'Typ peelingu',
                              items: ['Povrchový', 'Střední', 'Hluboký']
                            },
                            {
                              title: 'Péče po zákroku',
                              items: ['Ochrana před sluncem', 'Hydratace', 'Doporučená péče']
                            }
                          ]
                        },
                        {
                          title: 'Mezoterapie',
                          description: 'Intradermální aplikace aktivních látek pro regeneraci pokožky',
                          href: '/sluzby#mezoterapie',
                          categories: [
                            {
                              title: 'Postup zákroku',
                              items: ['Konzultace', 'Výběr koktejlu', 'Aplikace injekcí']
                            },
                            {
                              title: 'Výhody',
                              items: ['Intenzivní hydratace', 'Vyživení pokožky', 'Anti-age efekt']
                            },
                            {
                              title: 'Oblast ošetření',
                              items: ['Obličej', 'Dekoltu', 'Vlasy (vlasová)']
                            },
                            {
                              title: 'Délka léčby',
                              items: ['Série ošetření', 'Optimalní frekvence', 'Udržovací péče']
                            }
                          ]
                        }
                      ].filter((_, idx) => idx === selectedCardIndex).map((card, _) => {
                        const cardIndex = selectedCardIndex!;
                        return (
                          <div
                            key={cardIndex}
                            className="relative rounded-2xl overflow-hidden group w-full"
                  style={{
                    minHeight: '500px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.24) 100%)',
                    backdropFilter: 'blur(16px) saturate(120%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(120%)',
                    border: '1px solid rgba(255,255,255,0.35)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 20px rgba(17,34,80,0.1), 0 2px 6px rgba(17,34,80,0.06)',
                    animation: 'fadeIn 0.4s ease-out',
                  }}
                          >
                          {/* Heart SVG Background */}
                          <div 
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              backgroundImage: 'url(/service-heart.svg)',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              opacity: 0.5,
                              filter: 'brightness(0) invert(1)',
                              WebkitFilter: 'brightness(0) invert(1)',
                            }}
                          />
                          
                          {/* Content */}
                          <div 
                            className="relative flex flex-col justify-start z-10"
                            style={{
                              padding: '2rem',
                              minHeight: 0,
                              overflow: 'hidden',
                            }}
                          >
                            <div className="flex flex-col items-start w-full">
                              {/* Go Back Button */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (selectedSubcategoryIndex !== null) {
                                    // If viewing subcategory detail, go back to categories
                                    setSelectedSubcategoryIndex(null);
                                  } else {
                                    // Otherwise go back to grid
                                    setSelectedCardIndex(null);
                                  }
                                }}
                                className="inline-flex items-center gap-2 font-medium text-dark transition-all duration-300 hover:gap-1.5 mb-4 w-fit"
                                style={{ 
                                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                  fontWeight: 500,
                                  color: 'var(--color-dark)',
                                  fontSize: '0.875rem',
                                  lineHeight: '1.2',
                                  backgroundColor: 'transparent',
                                  border: 'none',
                                  cursor: 'pointer',
                                  padding: 0,
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.opacity = '0.8';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.opacity = '1';
                                }}
                              >
                                <svg 
                                  className="w-4 h-4" 
                                  viewBox="0 0 24 24" 
                                  fill="none" 
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ color: 'var(--color-accent)' }}
                                >
                                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Zpět</span>
                              </button>
                              
                              {selectedSubcategoryIndex === null ? (
                                <>
                              {/* Title */}
                              <h3 
                                className="font-semibold mb-1.5 text-dark leading-tight"
                                style={{ 
                                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                  fontWeight: 600,
                                  color: 'var(--color-dark)',
                                  fontSize: '1.75rem',
                                  lineHeight: '1.1'
                                }}
                              >
                                {card.title}
                              </h3>
                              {/* Subtitle */}
                              <p 
                                className="text-sm text-dark/80 leading-snug mb-6"
                                style={{ 
                                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                  fontWeight: 500,
                                  color: 'var(--color-text-secondary)',
                                  fontSize: '1rem',
                                  lineHeight: '1.2'
                                }}
                              >
                                {card.description}
                              </p>
                              
                              {/* Categories - 2 columns with aligned buttons */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full">
                                {card.categories.map((category, catIndex) => (
                                  <div key={catIndex} className="flex flex-col items-start">
                                    {/* Category Title */}
                                    <div className="w-full mb-2">
                                      <div className="flex items-center gap-2">
                                        <h4
                                          className="font-medium text-dark"
                                          style={{ 
                                            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                            fontWeight: 500,
                                            color: 'var(--color-dark)',
                                            fontSize: '1.5rem',
                                            lineHeight: '1.2',
                                          }}
                                        >
                                          {category.title}
                                        </h4>
                                        <svg 
                                          className="w-4 h-4" 
                                          viewBox="0 0 24 24" 
                                          fill="none" 
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{ color: 'var(--color-accent)' }}
                                        >
                                          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </div>
                                    </div>
                                    
                                    {/* Content area: bullets + button with fixed spacing from title */}
                                    <div className="flex flex-col w-full" style={{ height: '7rem' }}>
                                      {/* Bullet Points - horizontal flow with wrapping */}
                                      <ul className="flex flex-row flex-wrap gap-x-4 gap-y-1.5 mb-2 items-start" style={{ alignContent: 'flex-start' }}>
                                        {category.items.map((item, itemIndex) => (
                                          <li 
                                            key={itemIndex}
                                            className="flex items-center"
                                            style={{
                                              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                              fontWeight: 500,
                                              color: 'var(--color-text-secondary)',
                                              fontSize: '0.875rem',
                                              lineHeight: '1.4'
                                            }}
                                          >
                                            <span
                                              className="w-1.5 h-1.5 rounded-full mr-1.5 flex-shrink-0"
                                              style={{
                                                backgroundColor: 'var(--color-accent)'
                                              }}
                                            />
                                            <span className="whitespace-nowrap">{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                      
                                      {/* CTA Buttons - always at bottom of fixed-height container */}
                                      <div className="flex items-center gap-3 mt-auto">
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            // Navigate to booking or service page
                                            window.location.href = '/objednat';
                                          }}
                                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-2.5 w-fit"
                                          style={{
                                            backgroundColor: 'var(--color-accent)',
                                            color: 'var(--color-text-white)',
                                            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                            fontWeight: 600,
                                            border: 'none',
                                            cursor: 'pointer',
                                          }}
                                          onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = '#e6a0c0';
                                            e.currentTarget.style.transform = 'translateY(-1px)';
                                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(247, 199, 219, 0.4)';
                                          }}
                                          onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                          }}
                                        >
                                          <span>Objednat se</span>
                                          <svg 
                                            className="w-4 h-4" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: 'var(--color-dark)' }}
                                          >
                                            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                                </>
                              ) : (
                                // Subcategory Detail View
                                <>
                                  {/* Title - Subcategory name */}
                                  <h3 
                                    className="font-semibold mb-1.5 text-dark leading-tight"
                                    style={{ 
                                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                      fontWeight: 600,
                                      color: 'var(--color-dark)',
                                      fontSize: '1.75rem',
                                      lineHeight: '1.1'
                                    }}
                                  >
                                    {card.categories[selectedSubcategoryIndex].title}
                                  </h3>
                                  
                                  {/* Subtitle - Service subheading */}
                                  <p 
                                    className="text-base text-dark/80 leading-snug"
                                    style={{ 
                                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                      fontWeight: 500,
                                      color: 'var(--color-text-secondary)',
                                      fontSize: '1rem',
                                      lineHeight: '1.4'
                                    }}
                                  >
                                    Detailní informace o kosmetickém ošetření
                                  </p>
                                  
                                  {/* Vertically Centered Content Wrapper */}
                                  <div className="flex-1 flex flex-col justify-center my-8">
                                    {/* Detail Content - 3 column grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                      {[
                                        {
                                          icon: '/icons/ambulantni-gynekologie.svg',
                                          title: 'Co zákrok obnáší',
                                          description: 'Komplexní kosmetické ošetření prováděné zkušenými odborníky s využitím nejmodernějších technologií a přípravků. Každý zákrok začíná konzultací a analýzou vaší pokožky.'
                                        },
                                        {
                                          icon: '/icons/doctorr.svg',
                                          title: 'Komu je určené',
                                          description: 'Všem, kteří chtějí zlepšit vzhled a stav své pokožky. Ideální pro osoby s prvními známkami stárnutí, pigmentací nebo nepravidelnostmi textury pokožky.'
                                        },
                                        {
                                          icon: '/icons/starr.svg',
                                          title: 'Jaké jsou výsledky',
                                          description: 'Viditelné zlepšení vzhledu pokožky již po prvním ošetření. Pravidelná péče přináší dlouhodobé výsledky v podobě mladší, zdravější a zářivější pokožky.'
                                        }
                                      ].map((section, idx) => (
                                        <div key={idx} className="flex flex-col">
                                          {/* Icon */}
                                          <div className="mb-3">
                                            <span
                                              aria-hidden="true"
                                              className="block w-10 h-10"
                                              style={{
                                                backgroundColor: 'var(--color-accent)',
                                                WebkitMaskImage: `url(${section.icon})`,
                                                maskImage: `url(${section.icon})`,
                                                WebkitMaskRepeat: 'no-repeat',
                                                maskRepeat: 'no-repeat',
                                                WebkitMaskPosition: 'center',
                                                maskPosition: 'center',
                                                WebkitMaskSize: 'contain',
                                                maskSize: 'contain',
                                              }}
                                            />
                                          </div>

                                          {/* Title */}
                                          <h4 
                                            className="text-lg font-semibold mb-2 text-dark"
                                            style={{ 
                                              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                              fontWeight: 600,
                                              color: 'var(--color-dark)'
                                            }}
                                          >
                                            {section.title}
                                          </h4>

                                          {/* Description */}
                                          <p 
                                            className="text-sm leading-relaxed"
                                            style={{ 
                                              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                              fontWeight: 500,
                                              lineHeight: '1.6',
                                              color: 'var(--color-text-secondary)'
                                            }}
                                          >
                                            {section.description}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  {/* CTA Buttons */}
                                  <div className="flex items-center gap-4">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        window.location.href = '/objednat';
                                      }}
                                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:gap-2.5"
                                      style={{
                                        backgroundColor: 'var(--color-accent)',
                                        color: '#ffffff',
                                        fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                        fontWeight: 600,
                                        border: 'none',
                                        cursor: 'pointer',
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#e6a0c0';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(247, 199, 219, 0.4)';
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                      }}
                                    >
                                      <span>Objednat se</span>
                                      <svg 
                                        className="w-4 h-4" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </button>
                                    
                                    {/* Secondary CTA */}
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        window.location.href = '/kontakt';
                                      }}
                                      className="inline-flex items-center gap-1 group transition-all duration-300"
                                      style={{
                                        fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                        fontWeight: 500,
                                        fontSize: '1rem',
                                        color: 'var(--color-dark)',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: 0,
                                      }}
                                    >
                                      <span>Kontaktujte nás</span>
                                      <svg 
                                        className="w-4 h-4 transition-transform group-hover:translate-x-0.5" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </button>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        );
                      })}
                    </div>
                  ) : (
                    // Grid view when no card is selected
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                      {[
                        {
                          title: 'Elektro epilace',
                          description: 'Trvalé odstranění nežádoucích chloupků pomocí elektrického proudu',
                          href: '/sluzby#elektro-epilace'
                        },
                        {
                          title: 'Mikrojehličkování',
                          description: 'Stimulace kolagenu pomocí mikrojehliček pro mladší vzhled pokožky',
                          href: '/sluzby#mikrojehlickovani'
                        },
                        {
                          title: 'Chemický peeling',
                          description: 'Hloubkové očištění a omlazení pokožky pomocí chemických látek',
                          href: '/sluzby#chemicky-peeling'
                        },
                        {
                          title: 'Mezoterapie',
                          description: 'Intradermální aplikace aktivních látek pro regeneraci pokožky',
                          href: '/sluzby#mezoterapie'
                        }
                      ].map((card, index) => (
                      <div
                        key={index}
                        className="relative rounded-2xl overflow-hidden group"
                        style={{
                          aspectRatio: '8/5',
                          background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.24) 100%)',
                          backdropFilter: 'blur(16px) saturate(120%)',
                          WebkitBackdropFilter: 'blur(16px) saturate(120%)',
                          border: '1px solid rgba(255,255,255,0.35)',
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 20px rgba(17,34,80,0.1), 0 2px 6px rgba(17,34,80,0.06)',
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease',
                        }}
                        onClick={() => setSelectedCardIndex(index)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                      {/* Heart SVG Background */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          backgroundImage: 'url(/service-heart.svg)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          opacity: 0.5,
                          filter: 'brightness(0) invert(1)',
                          WebkitFilter: 'brightness(0) invert(1)',
                        }}
                      />
                      
                      {/* Content - centered vertically with consistent alignment */}
                      <div 
                        className="relative h-full z-10 flex flex-col justify-center"
                        style={{
                          padding: '1rem',
                        }}
                      >
                        {/* Content wrapper - fixed structure to maintain cross-card alignment */}
                        <div 
                          className="w-full flex flex-col"
                          style={{
                            // Fixed total height ensures titles, subheadings, and buttons align across cards
                            // while the wrapper itself is centered vertically
                          }}
                        >
                          {/* Title section - fixed height to align subheadings across all cards */}
                          <div 
                            className="w-full"
                            style={{
                              height: '3.5rem', // Fixed height for 2 lines - ensures all subheadings start at same level
                              display: 'flex',
                              alignItems: 'flex-start',
                            }}
                          >
                            <h3 
                              className="font-semibold text-dark"
                              style={{ 
                                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                fontWeight: 600,
                                color: 'var(--color-dark)',
                                fontSize: '1.2rem',
                                lineHeight: '1.15', // Tighter line height
                                margin: '0',
                                padding: '0',
                                marginBottom: '0',
                              }}
                            >
                              {card.title}
                            </h3>
                          </div>
                          
                          {/* Description section - aligned across all cards, very close to title */}
                          <div 
                            className="w-full"
                            style={{
                              marginTop: '-0.4rem', // Negative margin to pull description closer to title
                              minHeight: '2.5rem',
                            }}
                          >
                            <p 
                              className="text-xs text-dark/80"
                              style={{ 
                                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                fontWeight: 500,
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.35', // Slightly tighter line height
                                margin: '0',
                                padding: '0',
                              }}
                            >
                              {card.description}
                            </p>
                          </div>
                          
                          {/* Button section - closer to subheading */}
                          <div 
                            className="w-full flex items-start"
                            style={{
                              marginTop: '0.25rem', // Closer spacing between subheading and button
                            }}
                          >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCardIndex(index);
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold text-xs transition-all duration-300 hover:gap-2 w-fit"
                            style={{
                              backgroundColor: 'var(--color-accent)',
                              color: 'var(--color-text-white)',
                              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                              fontWeight: 600,
                              border: 'none',
                              cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#e6a0c0';
                              e.currentTarget.style.transform = 'translateY(-1px)';
                              e.currentTarget.style.boxShadow = '0 4px 12px rgba(247, 199, 219, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            <span>Prozkoumat</span>
                            <svg 
                              className="w-3 h-3" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                        </div>
                        {/* End content wrapper */}
                      </div>
                    </div>
                  ))}
                    </div>
                  )}
                </div>
              )}

              {/* Services List - hidden when expanded via click */}
              {expandedSide !== 'cosmetology' && (
                <div 
                  className="flex flex-col gap-1 items-start mt-3 md:mt-4"
                style={{
                  opacity: hoveredSide === 'cosmetology' ? 1 : 0,
                  transform: hoveredSide === 'cosmetology' ? 'translateY(0)' : 'translateY(-10px)',
                  transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.25s'
                }}
              >
                {cosmetologyServices.map((service, index) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="group flex items-center gap-3 text-white hover:text-accent p-2 rounded-2xl hover:bg-white/10 w-fit transition-colors duration-75 ease-out"
                    style={{
                      opacity: hoveredSide === 'cosmetology' ? 1 : 0,
                      transform: hoveredSide === 'cosmetology' ? 'translateY(0)' : 'translateY(-8px)',
                      transition: `opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + index * 0.08}s, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + index * 0.08}s, color 75ms ease-out, background-color 75ms ease-out`
                    }}
                  >
                    <div 
                      className="inline-block shrink-0 relative"
                      style={{
                        filter: service.label === 'Chemický peeling' 
                          ? 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4))'
                          : 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6))',
                        WebkitFilter: service.label === 'Chemický peeling'
                          ? 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4))'
                          : 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6))'
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className={`inline-block group-hover:scale-110 transition-transform duration-150 ease-out relative z-10 ${
                          service.label === 'Elektro epilace' ? 'w-6 h-6' : 'w-5 h-5'
                        }`}
                        style={{
                          backgroundColor: 'var(--color-accent)',
                          WebkitMaskImage: `url(${service.icon})`,
                          maskImage: `url(${service.icon})`,
                          WebkitMaskRepeat: 'no-repeat',
                          maskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskPosition: 'center',
                          WebkitMaskSize: 'contain',
                          maskSize: 'contain',
                          display: 'block'
                        }}
                      />
                    </div>
                    <span 
                      className="text-sm md:text-base whitespace-nowrap text-shadow drop-shadow-xl transition-colors duration-75"
                      style={{ 
                        fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                        fontWeight: 500,
                        ['--ts-y' as any]: '2px',
                        ['--ts-blur' as any]: '10px',
                        ['--ts-color' as any]: 'rgba(0,0,0,0.6)'
                      }}
                    >
                      {service.label}
                    </span>
                  </Link>
                ))}
                {/* Prozkoumat více button */}
                <Link
                  href="/sluzby#kosmetologie"
                  className="mt-2 md:mt-3 flex items-center gap-1.5 text-xs md:text-sm font-medium arrow-float-parent whitespace-nowrap"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                    textShadow: '0 2px 6px rgba(0,0,0,0.5)',
                    opacity: hoveredSide === 'cosmetology' ? 1 : 0,
                    transform: hoveredSide === 'cosmetology' ? 'translateY(0)' : 'translateY(-8px)',
                    transition: `opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + cosmetologyServices.length * 0.08}s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + cosmetologyServices.length * 0.08}s, color 100ms ease-out`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  }}
                >
                  <span>Prozkoumat více</span>
                  <svg className="w-3.5 h-3.5 arrow-float-hover shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



