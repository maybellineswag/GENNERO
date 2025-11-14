'use client';

import BookingForm from '@/sections/BookingForm';

export default function BookingPage() {
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
        <BookingForm align="center" transparent />
      </div>
    </div>
  );
}

