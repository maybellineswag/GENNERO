'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import ServiceSelector from '@/components/ServiceSelector';
import DateTimePicker from '@/components/DateTimePicker';

interface BookingFormProps {
  align?: 'left' | 'center';
  transparent?: boolean;
}

export default function BookingForm({ align = 'center', transparent = false }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value,
    }));
  };

  const handleDateChange = (date: string) => {
    setFormData(prev => ({
      ...prev,
      date: date,
    }));
  };

  const handleTimeChange = (time: string) => {
    setFormData(prev => ({
      ...prev,
      time: time,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    // TODO: Show success message or redirect
  };

  return (
    <section className={`w-full pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20 ${transparent ? '' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <div className={`${align === 'left' ? 'text-left' : 'text-center'} mb-8 md:mb-12`}>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-dark"
            style={{ 
              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
              fontWeight: 600,
              color: 'var(--color-dark)',
              lineHeight: '1.1',
            }}
          >
            Objednat se
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
            Vyplňte formulář a my se vám ozveme
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name and Surname Row */}
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
                Jméno *
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
                htmlFor="surname"
                className="text-text-primary"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 600,
                }}
              >
                Příjmení *
              </Label>
              <Input
                id="surname"
                name="surname"
                type="text"
                required
                value={formData.surname}
                onChange={handleChange}
                placeholder="Vaše příjmení"
                className="w-full"
              />
            </div>
          </div>

          {/* Phone and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <div className="space-y-1.5">
              <Label 
                htmlFor="email"
                className="text-text-primary"
                style={{ 
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: 600,
                }}
              >
                E-mail *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="vas.email@example.com"
                className="w-full"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div className="space-y-1.5">
            <Label 
              htmlFor="service"
              className="text-text-primary"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 600,
              }}
            >
              Služba *
            </Label>
            <ServiceSelector
              value={formData.service}
              onChange={handleServiceChange}
              required
            />
          </div>

          {/* Date and Time Selection */}
          <DateTimePicker
            date={formData.date}
            time={formData.time}
            onDateChange={handleDateChange}
            onTimeChange={handleTimeChange}
            required
          />

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
              Zpráva
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Vaše zpráva (nepovinné)"
              rows={5}
              className="w-full"
            />
          </div>

          {/* Submit Button */}
          <div className={`flex ${align === 'left' ? 'justify-start' : 'justify-center'} pt-2`}>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary px-8 py-3 text-base md:text-lg font-semibold"
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 600,
              }}
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Odesílání...
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  Odeslat
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5l7 7-7 7" stroke="#112250" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

