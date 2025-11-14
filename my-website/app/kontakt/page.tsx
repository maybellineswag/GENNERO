'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import SubjectSelector from '@/components/SubjectSelector';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call or email service integration here
    alert('Děkujeme za vaši zprávu! Brzy se vám ozveme.');
    setFormData({ name: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubjectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value,
    }));
  };
  const departments = [
    {
      name: 'Gynekologie',
      color: '#8ea9f4',
      email: 'gynekologie@gennero.cz',
      phone: '+420 777 123 456',
      address: 'Jakubská 2, 602 00 Brno',
      openingHours: [
        { day: 'Pondělí', hours: '8:00 - 17:00' },
        { day: 'Úterý', hours: '8:00 - 17:00' },
        { day: 'Středa', hours: '8:00 - 17:00' },
        { day: 'Čtvrtek', hours: '8:00 - 17:00' },
        { day: 'Pátek', hours: '8:00 - 15:00' },
        { day: 'Sobota', hours: 'Zavřeno' },
        { day: 'Neděle', hours: 'Zavřeno' },
      ],
    },
    {
      name: 'Kosmetologie',
      color: '#f7c7db',
      email: 'kosmetologie@gennero.cz',
      phone: '+420 777 654 321',
      address: 'Jakubská 2, 602 00 Brno',
      openingHours: [
        { day: 'Pondělí', hours: '9:00 - 18:00' },
        { day: 'Úterý', hours: '9:00 - 18:00' },
        { day: 'Středa', hours: '9:00 - 18:00' },
        { day: 'Čtvrtek', hours: '9:00 - 18:00' },
        { day: 'Pátek', hours: '9:00 - 16:00' },
        { day: 'Sobota', hours: 'Po domluvě' },
        { day: 'Neděle', hours: 'Zavřeno' },
      ],
    },
  ];

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
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 mb-12">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ 
              color: 'var(--color-dark)',
              fontFamily: 'var(--font-daikon), system-ui, sans-serif'
            }}
          >
            Kontaktujte nás
          </h1>
          <p 
            className="text-base md:text-lg lg:text-xl leading-relaxed"
            style={{ 
              color: 'var(--color-text-secondary)',
              maxWidth: '100%',
              wordWrap: 'normal',
              whiteSpace: 'normal'
            }}
          >
            Jsme zde pro vás. Neváhejte nás kontaktovat, rádi odpovíme na všechny vaše dotazy.
          </p>
        </div>

        {/* Department Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10"
            >
              {/* Department Header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: dept.color }}
                />
                <h2
                  className="text-3xl md:text-4xl font-bold"
                  style={{ 
                    color: 'var(--color-dark)',
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif'
                  }}
                >
                  {dept.name}
                </h2>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: dept.color + '20',
                      color: dept.color === '#8ea9f4' ? 'var(--color-primary)' : 'var(--color-accent-dark)'
                    }}
                  >
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-light)' }}>
                      Email
                    </p>
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-base font-medium hover:underline transition-all"
                      style={{ color: 'var(--color-dark)' }}
                    >
                      {dept.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: dept.color + '20',
                      color: dept.color === '#8ea9f4' ? 'var(--color-primary)' : 'var(--color-accent-dark)'
                    }}
                  >
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-light)' }}>
                      Telefon
                    </p>
                    <a
                      href={`tel:${dept.phone}`}
                      className="text-base font-medium hover:underline transition-all"
                      style={{ color: 'var(--color-dark)' }}
                    >
                      {dept.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: dept.color + '20',
                      color: dept.color === '#8ea9f4' ? 'var(--color-primary)' : 'var(--color-accent-dark)'
                    }}
                  >
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-light)' }}>
                      Adresa
                    </p>
                    <p className="text-base font-medium" style={{ color: 'var(--color-dark)' }}>
                      {dept.address}
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: dept.color + '20',
                      color: dept.color === '#8ea9f4' ? 'var(--color-primary)' : 'var(--color-accent-dark)'
                    }}
                  >
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium mb-2" style={{ color: 'var(--color-text-light)' }}>
                      Ordinační hodiny
                    </p>
                    <div className="space-y-1.5">
                      {dept.openingHours.map((schedule, scheduleIdx) => (
                        <div key={scheduleIdx} className="flex justify-between items-center">
                          <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                            {schedule.day}
                          </span>
                          <span 
                            className="text-sm font-semibold"
                            style={{ 
                              color: schedule.hours.includes('Zavřeno') ? 'var(--color-text-light)' : 'var(--color-dark)'
                            }}
                          >
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Book Appointment Button */}
                <div className="pt-4">
                  <a
                    href="/objednat"
                    className="btn btn-primary w-full justify-center text-center inline-flex items-center gap-2"
                    style={{
                      backgroundColor: dept.color,
                      color: dept.color === '#8ea9f4' ? '#ffffff' : 'var(--color-dark)',
                    }}
                  >
                    <span>Objednat se</span>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M9 5l7 7-7 7" 
                        stroke={dept.color === '#8ea9f4' ? '#ffffff' : '#112250'} 
                        strokeWidth="2.25" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-8 md:mb-12">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-dark"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 600,
                  color: 'var(--color-dark)',
                  lineHeight: '1.1',
                }}
              >
                Napište nám
              </h2>
              <p 
                className="text-base md:text-lg text-text-secondary"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 500,
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                Máte dotaz nebo připomínku? Neváhejte nás kontaktovat pomocí formuláře níže.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label 
                    htmlFor="name"
                    className="text-text-primary"
                    style={{ 
                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    Jméno a příjmení *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vaše jméno"
                    className="w-full"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label 
                    htmlFor="phone"
                    className="text-text-primary"
                    style={{ 
                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    Telefon *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+420 123 456 789"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <Label 
                  htmlFor="subject"
                  className="text-text-primary"
                  style={{ 
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  Předmět *
                </Label>
                <SubjectSelector
                  value={formData.subject}
                  onChange={handleSubjectChange}
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label 
                  htmlFor="message"
                  className="text-text-primary"
                  style={{ 
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  Zpráva *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Vaše zpráva..."
                  rows={5}
                  className="w-full"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <Button
                  type="submit"
                  className="btn btn-primary px-8 py-3 text-base md:text-lg font-semibold"
                  style={{ 
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    Odeslat zprávu
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5l7 7-7 7" stroke="#112250" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div id="jak-nas-najdete" className="mb-12 scroll-mt-24">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            style={{ 
              color: 'var(--color-dark)',
              fontFamily: 'var(--font-daikon), system-ui, sans-serif'
            }}
          >
            Kde nás najdete
          </h2>
          <div 
            className="liquid-glass overflow-hidden"
            style={{
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <iframe
              src="https://frame.mapy.cz/s/feramopoke"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              title="Mapa - Gennero"
            />
          </div>
        </div>

        </div>
      </main>
    </div>
  );
}

