'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuClosing, setIsMobileMenuClosing] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [closingMenu, setClosingMenu] = useState<string | null>(null);
  const [notchLeft, setNotchLeft] = useState<number | null>(null);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isLanguageMenuClosing, setIsLanguageMenuClosing] = useState(false);
  const [languageNotchRight, setLanguageNotchRight] = useState<number | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const languageButtonRef = useRef<HTMLButtonElement>(null);
  
  // Handle exit animation for main dropdowns
  useEffect(() => {
    if (closingMenu) {
      const timer = setTimeout(() => {
        setClosingMenu(null);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [closingMenu]);
  
  // Handle exit animation for language dropdown
  useEffect(() => {
    if (isLanguageMenuClosing) {
      const timer = setTimeout(() => {
        setIsLanguageMenuClosing(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isLanguageMenuClosing]);

  // Handle exit animation for mobile menu
  useEffect(() => {
    if (isMobileMenuClosing) {
      const timer = setTimeout(() => {
        setIsMobileMenuClosing(false);
        setIsMenuOpen(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isMobileMenuClosing]);

  const navLinks = [
    { href: '/sluzby', label: 'Služby', hasDropdown: true },
    { href: '/o-nas', label: 'O nás', hasDropdown: true },
    { href: '/pricing', label: 'Ceník', hasArrow: true },
    { href: '/kontakt', label: 'Kontakt', hasArrow: true },
  ];

  const leftLinks = navLinks.slice(0, 3);
  const contactLink = navLinks[3];

  const menuData: Record<string, { heading: string; groups: { title: string; href?: string; items: { label: string; href: string }[] }[] }> = {
    'sluzby': {
      heading: 'Služby',
      groups: [
        {
          title: 'GYNEKOLOGIE',
          href: '/sluzby#gynekologie',
          items: [
            { label: 'Ambulantní gynekologická péče', href: '/sluzby#ambulantni-gynekologie' },
            { label: 'Ambulantní péče o těhotné', href: '/sluzby#tehotne' },
            { label: 'Estetická gynekologie', href: '/sluzby#esteticka-gynekologie' },
          ],
        },
        {
          title: 'LÉKAŘSKÁ KOSMETOLOGIE',
          href: '/sluzby#kosmetologie',
          items: [
            { label: 'Elektro epilace', href: '/sluzby#elektro-epilace' },
            { label: 'Mikrojehličkování', href: '/sluzby#mikrojehlickovani' },
            { label: 'Chemický peeling', href: '/sluzby#chemicky-peeling' },
          ],
        },
      ],
    },
    'o-nas': {
      heading: 'O nás',
      groups: [
        {
          title: 'O NÁS',
          href: '/o-nas',
          items: [
            { label: 'Náš tým', href: '/nas-tym' },
            { label: 'Naše prostory', href: '/o-nas#prostory' },
            { label: 'Co říkají pacientky', href: '/recenze' },
            { label: 'Blog', href: '/blog' },
            { label: 'Zdravotní pojišťovny', href: '/pricing#pojistovny' },
          ],
        },
      ],
    },
  };

  function keyFromHref(href: string): string {
    return href.replace('/', '');
  }

  function iconFor(label: string): string | null {
    const map: Record<string, string> = {
      'Ambulantní gynekologická péče': '/icons/ambulantni-gynekologie.svg',
      'Ambulantní péče o těhotné': '/icons/ambulantni-pece.svg',
      'Estetická gynekologie': '/icons/esteticka-gynekologie.svg',
      'Elektro epilace': '/icons/elektro-epilace.svg',
      'Mikrojehličkování': '/icons/mikrojehlickovani.svg',
      'Chemický peeling': '/icons/chemicky-peeling.svg',
      'Mezoterapie': '/icons/mezoterapie.svg',
    };
    return map[label] ?? null;
  }

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-3 md:px-4">
      <div className="relative flex items-center w-full gap-2 md:gap-3">
        <div className="liquid-glass liquid-glass-apple rounded-full h-10 md:h-12 pl-2 md:pl-3 pr-2 md:pr-3 flex-1">
          <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              aria-hidden="true"
              className="block h-7 md:h-8 w-[140px] md:w-[165px]"
              style={{
                backgroundColor: 'var(--color-dark)',
                WebkitMaskImage: 'url(/branding/gennero-logo.svg)',
                maskImage: 'url(/branding/gennero-logo.svg)',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'left center',
                maskPosition: 'left center',
                WebkitMaskSize: 'contain',
                maskSize: 'contain'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center w-full">
            {/* Left: evenly spaced three links */}
            <div className="flex-1 flex items-center justify-evenly">
              {leftLinks.map((link) => {
                const key = keyFromHref(link.href);
                const isOpen = activeMenu === key;
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={(e) => {
                      if (link.hasDropdown) {
                        setClosingMenu(null); // Clear any closing state
                        setActiveMenu(key);
                        const current = e.currentTarget as HTMLElement;
                        const arrowEl = current.querySelector('.navlink-arrow') as HTMLElement | null;
                        const linkRect = current.getBoundingClientRect();
                        if (arrowEl) {
                          const arrowRect = arrowEl.getBoundingClientRect();
                          const menuWidth = window.innerWidth >= 768 ? 420 : 340; // px, matches dropdown width
                          const dropdownLeft = linkRect.left + linkRect.width / 2 - menuWidth / 2;
                          const desiredCenter = arrowRect.left + arrowRect.width / 2 - dropdownLeft;
                          const clamped = Math.max(16, Math.min(menuWidth - 16, desiredCenter));
                          setNotchLeft(clamped);
                        } else {
                          setNotchLeft(null);
                        }
                      }
                    }}
                    onMouseLeave={() => {
                      if (activeMenu === key) {
                        setClosingMenu(key);
                        setActiveMenu(null);
                      }
                    }}
                  >
                    <Link
                      href={link.href}
                      className="text-dark font-semibold hover:text-primary transition-colors flex items-center gap-1 text-sm md:text-base arrow-float-parent"
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <svg 
                          className={`navlink-arrow w-4 h-4 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                      {link.hasArrow && (
                        <svg className="w-4 h-4 text-primary arrow-float-hover" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </Link>

                    {/* Dropdown */}
                    {link.hasDropdown && (isOpen || closingMenu === key) && (
                      <div className={`absolute left-1/2 -translate-x-1/2 z-50 w-[340px] md:w-[420px] max-w-[90vw] dropdown-container ${closingMenu === key ? 'dropdown-closing' : ''}`} style={{ top: '100%', marginTop: 0 }}>
                        {/* Invisible hover bridge to keep menu open while moving pointer down and add spacing */}
                        <div className="h-5 md:h-6"></div>
                        <div 
                          className="relative dropdown-with-notch"
                          style={{ '--notch-left': notchLeft ? `${notchLeft}px` : '50%' } as React.CSSProperties}
                        >
                          <div className="liquid-glass-apple rounded-2xl p-5 md:p-6 shadow-xl relative z-0">
                          {menuData[key]?.groups?.map((group) => (
                            <div key={group.title} className="mb-4 last:mb-0">
                              {group.href ? (
                                <Link 
                                  href={group.href}
                                  className="flex items-center gap-2 text-dark font-semibold tracking-wide mb-2 transition-colors duration-100 group arrow-float-parent"
                                  style={{ color: 'var(--color-dark)', transition: 'color 100ms ease-out' }}
                                  onClick={() => {
                                    setActiveMenu(null);
                                    setClosingMenu(null);
                                  }}
                                  onMouseEnter={(e) => {
                                    const hoverColor = group.title === 'LÉKAŘSKÁ KOSMETOLOGIE' ? '#f7c7db' : 'var(--color-primary)';
                                    e.currentTarget.style.color = hoverColor;
                                    const arrow = e.currentTarget.querySelector('svg');
                                    if (arrow) {
                                      arrow.style.color = hoverColor;
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--color-dark)';
                                    const arrow = e.currentTarget.querySelector('svg');
                                    if (arrow) {
                                      arrow.style.color = group.title === 'LÉKAŘSKÁ KOSMETOLOGIE' ? '#f7c7db' : 'var(--color-primary)';
                                    }
                                  }}
                                >
                                  <span>{group.title}</span>
                                  <svg 
                                    className="w-4 h-4 transition-colors duration-100 arrow-float-hover" 
                                    style={{ 
                                      color: group.title === 'LÉKAŘSKÁ KOSMETOLOGIE' ? '#f7c7db' : 'var(--color-primary)',
                                      transition: 'color 100ms ease-out'
                                    }}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              ) : (
                              <div className="text-dark font-semibold tracking-wide mb-2">{group.title}</div>
                              )}
                              <ul className="space-y-2">
                                {group.items.map((item) => (
                                  <li key={item.label}>
                                    <Link 
                                      href={item.href} 
                                      className="flex items-center gap-3 text-dark transition-colors duration-100 drop-shadow-lg"
                                      style={{
                                        color: 'var(--color-dark)',
                                        transition: 'color 100ms ease-out',
                                      }}
                                      onClick={() => {
                                        setActiveMenu(null);
                                        setClosingMenu(null);
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.color = group.title === 'LÉKAŘSKÁ KOSMETOLOGIE' ? '#f7c7db' : 'var(--color-primary)';
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'var(--color-dark)';
                                      }}
                                    >
                                      {iconFor(item.label) ? (
                                        <span
                                          aria-hidden="true"
                                          className="inline-block w-4 h-4 md:w-4 md:h-4"
                                          style={{
                                            backgroundColor: group.title === 'LÉKAŘSKÁ KOSMETOLOGIE' ? '#f7c7db' : 'var(--color-primary)',
                                            WebkitMaskImage: `url(${iconFor(item.label)})`,
                                            maskImage: `url(${iconFor(item.label)})`,
                                            WebkitMaskRepeat: 'no-repeat',
                                            maskRepeat: 'no-repeat',
                                            WebkitMaskPosition: 'center',
                                            maskPosition: 'center',
                                            WebkitMaskSize: 'contain',
                                            maskSize: 'contain',
                                          }}
                                        />
                                      ) : (
                                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
                                      )}
                                      <span className="text-sm md:text-base">{item.label}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              {(group.title === 'LÉKAŘSKÁ KOSMETOLOGIE' || group.title === 'GYNEKOLOGIE') && (
                                <Link
                                  href={group.title === 'LÉKAŘSKÁ KOSMETOLOGIE' ? '/sluzby#kosmetologie' : '/sluzby#gynekologie'}
                                  className="mt-3 flex items-center gap-1.5 text-xs md:text-sm font-medium transition-colors duration-100 arrow-float-parent"
                                  style={{
                                    color: 'var(--color-text-secondary)',
                                    transition: 'color 100ms ease-out',
                                  }}
                                  onClick={() => {
                                    setActiveMenu(null);
                                    setClosingMenu(null);
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.color = group.title === 'LÉKAŘSKÁ KOSMETOLOGIE' ? '#f7c7db' : 'var(--color-primary)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                                  }}
                                >
                                  <span>Prozkoumat více</span>
                                  <svg className="w-3.5 h-3.5 arrow-float-hover" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              )}
                            </div>
                          ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: Kontakt next to CTA */}
            <div className="flex items-center gap-3 lg:gap-4" onMouseLeave={() => setActiveMenu(null)}>
              <Link
                key={contactLink.href}
                href={contactLink.href}
                className="text-dark font-semibold hover:text-primary transition-colors flex items-center gap-1 text-sm md:text-base arrow-float-parent"
              >
                {contactLink.label}
                {contactLink.hasArrow && (
                  <svg className="w-4 h-4 text-primary arrow-float-hover" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </Link>

              {/* CTA Button */}
              <Link
                href="/objednat"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white rounded-full h-7 md:h-8 px-3.5 md:px-4 text-sm md:text-base arrow-float-parent"
                style={{ 
                  fontWeight: 600,
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif'
                }}
              >
                <span className="inline-flex items-center gap-1">
                  <span className="leading-none tracking-tight">Objednat</span>
                  <svg className="w-4 h-4 text-dark arrow-float-hover" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button and Language Icon */}
          <div className="md:hidden flex items-center justify-center gap-2 h-full">
            {/* Hamburger Menu Button - Left */}
            <button
              onClick={() => {
                if (isMenuOpen) {
                  setIsMobileMenuClosing(true);
                } else {
                  // Close language dropdown if open
                  if (isLanguageMenuOpen) {
                    setIsLanguageMenuClosing(true);
                    setIsLanguageMenuOpen(false);
                  }
                  setIsMobileMenuClosing(false);
                  setIsMenuOpen(true);
                }
              }}
              className="flex items-center justify-center p-2 text-dark hover:text-primary transition-colors h-full"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Language Button - Mobile (icon only, no bubble) - Right */}
            <div className="relative flex items-center justify-center h-full">
              <button 
                onClick={() => {
                  if (isLanguageMenuOpen) {
                    setIsLanguageMenuClosing(true);
                    setIsLanguageMenuOpen(false);
                  } else {
                    // Close mobile menu if open
                    if (isMenuOpen) {
                      setIsMobileMenuClosing(true);
                    }
                    setIsLanguageMenuClosing(false);
                    setIsLanguageMenuOpen(true);
                    const buttonWidth = 24; // icon size
                    const buttonCenterFromRight = buttonWidth / 2;
                    setLanguageNotchRight(buttonCenterFromRight);
                  }
                }}
                className="flex items-center justify-center p-2 text-dark hover:text-primary transition-colors h-full"
                aria-label="Select language"
              >
                <span
                  aria-hidden="true"
                  className="inline-block w-5 h-5"
                  style={{
                    backgroundColor: 'var(--color-dark)',
                    WebkitMaskImage: 'url(/icons/language.svg)',
                    maskImage: 'url(/icons/language.svg)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain'
                  }}
                />
              </button>
            </div>
          </div>
          </div>
        </div>

        {/* Language Dropdown - Mobile - positioned outside glass container */}
        {(isLanguageMenuOpen || isLanguageMenuClosing) && (
          <div className="md:hidden absolute right-0 top-full mt-2 px-3 z-50" style={{ isolation: 'isolate' }}>
            <div className={`dropdown-container ${isLanguageMenuClosing ? 'dropdown-closing' : ''}`}>
              <div className="h-5"></div>
              <div className="relative">
                <div className="liquid-glass-apple rounded-2xl px-3 py-3 shadow-xl relative z-0" style={{ willChange: 'opacity, transform' }}>
                  <ul className="space-y-2">
                    <li>
                      <button 
                        onClick={() => {
                          setIsLanguageMenuClosing(true);
                          setIsLanguageMenuOpen(false);
                        }}
                        className="w-full text-left flex items-center gap-2 text-dark transition-colors drop-shadow-lg"
                        style={{ color: 'var(--color-dark)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--color-dark)';
                        }}
                      >
                        <span className="text-2xl">🇨🇿</span>
                        <span className="text-sm">Čeština</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => {
                          setIsLanguageMenuClosing(true);
                          setIsLanguageMenuOpen(false);
                        }}
                        className="w-full text-left flex items-center gap-2 text-dark transition-colors drop-shadow-lg"
                        style={{ color: 'var(--color-dark)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--color-dark)';
                        }}
                      >
                        <span className="text-2xl">🇬🇧</span>
                        <span className="text-sm">Angličtina</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => {
                          setIsLanguageMenuClosing(true);
                          setIsLanguageMenuOpen(false);
                        }}
                        className="w-full text-left flex items-center gap-2 text-dark transition-colors drop-shadow-lg"
                        style={{ color: 'var(--color-dark)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--color-dark)';
                        }}
                      >
                        <span className="text-2xl">🇷🇺</span>
                        <span className="text-sm">Ruština</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => {
                          setIsLanguageMenuClosing(true);
                          setIsLanguageMenuOpen(false);
                        }}
                        className="w-full text-left flex items-center gap-2 text-dark transition-colors drop-shadow-lg"
                        style={{ color: 'var(--color-dark)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--color-dark)';
                        }}
                      >
                        <span className="text-2xl">🇺🇦</span>
                        <span className="text-sm">Ukrajinština</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu - positioned outside glass container */}
        {(isMenuOpen || isMobileMenuClosing) && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 px-3 z-50" style={{ isolation: 'isolate' }}>
            <div className={`dropdown-container ${isMobileMenuClosing ? 'dropdown-closing' : ''}`}>
              <div className="h-5"></div>
              <div className="relative">
                <div className="liquid-glass-apple rounded-2xl p-5 shadow-xl relative z-0" style={{ willChange: 'opacity, transform' }}>
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => {
                      const key = keyFromHref(link.href);
                      const isDropdownOpen = mobileActiveDropdown === key;
                      const menuContent = menuData[key];
                      
                      return (
                        <div key={link.href} className="flex flex-col">
                          {link.hasDropdown ? (
                            <>
                              <button
                                onClick={() => setMobileActiveDropdown(isDropdownOpen ? null : key)}
                                className="text-dark font-medium hover:text-primary transition-colors py-2 flex items-center gap-2 text-left"
                              >
                                {link.label}
                                <svg 
                                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              {isDropdownOpen && menuContent && (
                                <div className="ml-4 mt-2 space-y-4">
                                  {menuContent.groups.map((group) => (
                                    <div key={group.title} className="flex flex-col gap-2">
                                      {group.href ? (
                                        <Link 
                                          href={group.href}
                                          className="text-dark font-semibold tracking-wide flex items-center gap-2"
                                          onClick={() => {
                                            setIsMobileMenuClosing(true);
                                            setMobileActiveDropdown(null);
                                          }}
                                        >
                                          <span>{group.title}</span>
                                          <svg 
                                            className="w-4 h-4 text-primary" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                          >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                          </svg>
                                        </Link>
                                      ) : (
                                        <div className="text-dark font-semibold tracking-wide">{group.title}</div>
                                      )}
                                      <ul className="space-y-2">
                                        {group.items.map((item) => (
                                          <li key={item.label}>
                                            <Link 
                                              href={item.href} 
                                              className="flex items-center gap-3 text-dark transition-colors"
                                              onClick={() => {
                                                setIsMobileMenuClosing(true);
                                                setMobileActiveDropdown(null);
                                              }}
                                            >
                                              {iconFor(item.label) ? (
                                                <span
                                                  aria-hidden="true"
                                                  className="inline-block w-4 h-4"
                                                  style={{
                                                    backgroundColor: group.title === 'LÉKAŘSKÁ KOSMETOLOGIE' ? '#f7c7db' : 'var(--color-primary)',
                                                    WebkitMaskImage: `url(${iconFor(item.label)})`,
                                                    maskImage: `url(${iconFor(item.label)})`,
                                                    WebkitMaskRepeat: 'no-repeat',
                                                    maskRepeat: 'no-repeat',
                                                    WebkitMaskPosition: 'center',
                                                    maskPosition: 'center',
                                                    WebkitMaskSize: 'contain',
                                                    maskSize: 'contain',
                                                  }}
                                                />
                                              ) : (
                                                <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
                                              )}
                                              <span className="text-sm">{item.label}</span>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={link.href}
                              className="text-dark font-medium hover:text-primary transition-colors py-2 flex items-center gap-2"
                              onClick={() => setIsMobileMenuClosing(true)}
                            >
                              {link.label}
                              {link.hasArrow && (
                                <svg className="w-4 h-4 arrow-float-hover" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              )}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Language bubble (same height as nav pill) */}
        <div className="hidden md:inline-flex relative h-10 md:h-12 items-center justify-center"
          onMouseEnter={() => {
            setIsLanguageMenuClosing(false); // Clear any closing state
            setIsLanguageMenuOpen(true);
            if (languageButtonRef.current) {
              // Button is h-10 w-10 (40px) on mobile, h-12 w-12 (48px) on desktop
              // Center is at half the width from the right edge
              const isDesktop = window.innerWidth >= 768;
              const buttonWidth = isDesktop ? 48 : 40;
              const buttonCenterFromRight = buttonWidth / 2;
              setLanguageNotchRight(buttonCenterFromRight);
            }
          }}
          onMouseLeave={() => {
            if (isLanguageMenuOpen) {
              setIsLanguageMenuClosing(true);
              setIsLanguageMenuOpen(false);
            }
          }}
        >
          <button 
            ref={languageButtonRef}
            className="inline-flex items-center justify-center liquid-glass liquid-glass-apple rounded-full h-10 w-10 md:h-12 md:w-12"
          >
            <span
              aria-hidden="true"
              className="inline-block w-5 h-5 md:w-6 md:h-6"
              style={{
                backgroundColor: 'var(--color-dark)',
                WebkitMaskImage: 'url(/icons/language.svg)',
                maskImage: 'url(/icons/language.svg)',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                WebkitMaskSize: 'contain',
                maskSize: 'contain'
              }}
            />
          </button>

          {/* Language Dropdown */}
          {(isLanguageMenuOpen || isLanguageMenuClosing) && (
            <div className={`absolute right-0 z-50 w-auto dropdown-container ${isLanguageMenuClosing ? 'dropdown-closing' : ''}`} style={{ top: '100%', marginTop: 0, isolation: 'isolate' }}>
              {/* Invisible hover bridge to keep menu open while moving pointer down and add spacing */}
              <div className="h-5 md:h-6"></div>
              <div 
                className="relative dropdown-with-notch"
                data-notch-side="right"
                style={{ '--notch-right': languageNotchRight !== null ? `${languageNotchRight}px` : '20px' } as React.CSSProperties}
              >
                <div className="liquid-glass-apple rounded-2xl px-3 py-3 md:px-4 md:py-4 shadow-xl relative z-0" style={{ willChange: 'opacity, transform' }}>
                  <ul className="space-y-2">
                    <li>
                      <button className="w-full text-left flex items-center gap-2 text-dark transition-colors drop-shadow-lg"
                        style={{ color: 'var(--color-dark)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--color-dark)';
                        }}
                      >
                        <span className="text-2xl">🇨🇿</span>
                        <span className="text-sm md:text-base">Čeština</span>
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left flex items-center gap-2 text-dark transition-colors drop-shadow-lg"
                        style={{ color: 'var(--color-dark)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--color-dark)';
                        }}
                      >
                        <span className="text-2xl">🇬🇧</span>
                        <span className="text-sm md:text-base">Angličtina</span>
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left flex items-center gap-2 text-dark transition-colors drop-shadow-lg"
                        style={{ color: 'var(--color-dark)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--color-dark)';
                        }}
                      >
                        <span className="text-2xl">🇷🇺</span>
                        <span className="text-sm md:text-base">Ruština</span>
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left flex items-center gap-2 text-dark transition-colors drop-shadow-lg"
                        style={{ color: 'var(--color-dark)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--color-dark)';
                        }}
                      >
                        <span className="text-2xl">🇺🇦</span>
                        <span className="text-sm md:text-base">Ukrajinština</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
