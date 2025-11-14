'use client';

import * as React from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200 bg-white text-text-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center mb-4">
              <span
                aria-hidden="true"
                className="block h-[23px] md:h-[27px] w-[114px] md:w-[133px]"
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
            <p 
              className="text-text-secondary"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 500,
                fontSize: '0.875rem',
                lineHeight: '1.6',
                marginLeft: 0,
                paddingLeft: 0
              }}
            >
              Moderní gynekologická a estetická klinika v Teplicích. Spojujeme lékařskou odbornost s lidským přístupem.
            </p>
          </div>

          {/* Menu / Navigation */}
          <div>
            <h3 
              className="font-bold"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 700,
                color: '#112250',
                fontSize: '1.6875rem',
                marginBottom: '1rem',
                height: '1.6875rem',
                lineHeight: '1.6875rem'
              }}
            >
              Menu
            </h3>
            <nav className="space-y-2 text-sm" style={{ marginLeft: 0, paddingLeft: 0, marginTop: 0 }}>
              <Link 
                href="/sluzby" 
                className="block transition-colors hover:text-primary"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500,
                  color: '#4a5568'
                }}
              >
                Služby
              </Link>
              <Link 
                href="/o-nas" 
                className="block transition-colors hover:text-primary"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500,
                  color: '#4a5568'
                }}
              >
                O nás
              </Link>
              <Link 
                href="/reference" 
                className="block transition-colors hover:text-primary"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500,
                  color: '#4a5568'
                }}
              >
                Reference / Recenze
              </Link>
              <Link 
                href="/kontakt" 
                className="block transition-colors hover:text-primary"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500,
                  color: '#4a5568'
                }}
              >
                Kontakt
              </Link>
              <Link 
                href="/kosmetologie" 
                className="block transition-colors hover:text-primary"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500,
                  color: '#4a5568'
                }}
              >
                Kosmetologie / Estetická péče
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 
              className="font-bold"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 700,
                color: '#112250',
                fontSize: '1.6875rem',
                marginBottom: '1rem',
                height: '1.6875rem',
                lineHeight: '1.6875rem'
              }}
            >
              Kontakt
            </h3>
            <nav 
              className="space-y-2 text-sm"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 500,
                color: '#4a5568',
                marginLeft: 0,
                paddingLeft: 0,
                marginTop: 0
              }}
            >
              <div className="block">Teplice, Česká republika</div>
              <div className="block">Email: info@gennero.cz</div>
              <div className="block">Telefon: +420 XXX XXX XXX</div>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 
              className="font-bold"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 700,
                color: '#112250',
                fontSize: '1.6875rem',
                marginBottom: '1rem',
                height: '1.6875rem',
                lineHeight: '1.6875rem'
              }}
            >
              Sledujte nás
            </h3>
            <div className="flex space-x-4" style={{ marginLeft: 0, paddingLeft: 0, marginTop: 0, marginBottom: '1.5rem' }}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-gray-300 hover:border-primary hover:bg-primary/10"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Sledujte nás na Facebooku</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-gray-300 hover:border-primary hover:bg-primary/10"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Sledujte nás na Instagramu</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-gray-300 hover:border-primary hover:bg-primary/10"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span className="sr-only">WhatsApp</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Kontaktujte nás na WhatsApp</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-center md:flex-row">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p 
              className="text-sm text-text-secondary"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 500
              }}
            >
              © {currentYear} GENNERO. Všechna práva vyhrazena.
            </p>
            <a 
              href="https://www.accentai.eu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span 
                className="text-sm text-text-secondary"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500
                }}
              >
                Designed & developed by
              </span>
              <img 
                src="/branding/accent_logo.svg" 
                alt="Accent Logo" 
                className="h-4 w-auto -mt-0.5"
              />
            </a>
          </div>
          <nav className="flex gap-4 text-sm">
            <Link 
              href="/ochrana-soukromi" 
              className="transition-colors hover:text-primary"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 500,
                color: '#4a5568'
              }}
            >
              Ochrana soukromí
            </Link>
            <Link 
              href="/obchodni-podminky" 
              className="transition-colors hover:text-primary"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 500,
                color: '#4a5568'
              }}
            >
              Obchodní podmínky
            </Link>
            <Link 
              href="/cookies" 
              className="transition-colors hover:text-primary"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 500,
                color: '#4a5568'
              }}
            >
              Nastavení cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
