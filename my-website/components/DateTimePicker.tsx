'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import CustomCalendar from './CustomCalendar';
import CustomTimeInput from './CustomTimeInput';

interface DateTimePickerProps {
  date: string;
  time: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  required?: boolean;
}

export default function DateTimePicker({ date, time, onDateChange, onTimeChange, required }: DateTimePickerProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Format date for display (DD/MM/YYYY)
  const formatDateForDisplay = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString + 'T00:00:00');
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Date Picker */}
      <div className="space-y-1.5">
        <Label 
          htmlFor="date"
          className="text-text-primary"
          style={{ 
            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
            fontWeight: 600,
          }}
        >
          Datum *
        </Label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className={cn(
              "date-picker-input flex h-10 w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-sm ring-offset-background",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "cursor-pointer text-left",
              "hover:border-primary/50 transition-colors",
              isCalendarOpen && "ring-2 ring-primary border-primary"
            )}
            style={{ 
              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
              color: date ? 'var(--color-text-primary)' : 'var(--color-text-light)',
            }}
          >
            {date ? formatDateForDisplay(date) : 'Vyberte datum'}
          </button>
          {/* Calendar Icon */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg 
              className="w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          {/* Hidden input for form validation */}
          <input
            type="hidden"
            id="date"
            name="date"
            value={date}
            required={required}
          />

          {/* Custom Calendar */}
          {isCalendarOpen && (
            <CustomCalendar
              value={date}
              onChange={onDateChange}
              minDate={getMinDate()}
              onClose={() => setIsCalendarOpen(false)}
            />
          )}
        </div>
      </div>

      {/* Time Picker */}
      <div className="space-y-1.5">
        <Label 
          htmlFor="time"
          className="text-text-primary"
          style={{ 
            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
            fontWeight: 600,
          }}
        >
          Čas *
        </Label>
        <div className="relative flex items-center">
          <CustomTimeInput
            id="time"
            name="time"
            value={time}
            onChange={onTimeChange}
            required={required}
          />
          {/* Clock Icon - positioned to the right */}
          <div className="ml-3 flex items-center pointer-events-none">
            <svg 
              className="w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

