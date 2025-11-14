'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CustomTimeInputProps {
  value: string;
  onChange: (time: string) => void;
  required?: boolean;
  id?: string;
  name?: string;
}

export default function CustomTimeInput({ value, onChange, required, id, name }: CustomTimeInputProps) {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [focusedField, setFocusedField] = useState<'hours' | 'minutes' | null>(null);
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);
  const onChangeRef = useRef(onChange);
  const lastValueRef = useRef(value);

  // Keep onChange ref updated
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // Initialize from value prop - only update if value changed externally
  useEffect(() => {
    if (value !== lastValueRef.current) {
      lastValueRef.current = value;
      if (value) {
        const [h, m] = value.split(':');
        setHours(h || '');
        setMinutes(m || '');
      } else {
        setHours('');
        setMinutes('');
      }
    }
  }, [value]);

  // Helper function to update parent
  const updateParent = (h: string, m: string) => {
    if (h.length === 2 && m.length === 2) {
      const hourNum = parseInt(h);
      const minNum = parseInt(m);
      if (hourNum >= 0 && hourNum <= 23 && minNum >= 0 && minNum <= 59) {
        const timeString = `${String(hourNum).padStart(2, '0')}:${String(minNum).padStart(2, '0')}`;
        if (timeString !== lastValueRef.current) {
          lastValueRef.current = timeString;
          onChangeRef.current(timeString);
        }
      }
    } else if (h.length === 0 && m.length === 0) {
      if (lastValueRef.current !== '') {
        lastValueRef.current = '';
        onChangeRef.current('');
      }
    }
  };

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^\d]/g, ''); // Only numbers
    
    // Limit to 2 digits
    if (val.length > 2) {
      val = val.slice(0, 2);
    }
    
    // Validate hours (00-23)
    const numVal = val === '' ? -1 : parseInt(val);
    let finalVal = val;
    
    if (val === '' || (numVal >= 0 && numVal <= 23)) {
      finalVal = val;
    } else if (val.length === 2 && numVal > 23) {
      // If user types invalid hours (like 24-99), clamp to 23
      finalVal = '23';
    }
    
    setHours(finalVal);
    updateParent(finalVal, minutes);
    
    // Auto-advance to minutes when 2 digits entered
    if (finalVal.length === 2) {
      // Use requestAnimationFrame to ensure DOM is updated
      requestAnimationFrame(() => {
        minutesRef.current?.focus();
        minutesRef.current?.select();
      });
    }
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^\d]/g, ''); // Only numbers
    
    // Limit to 2 digits
    if (val.length > 2) {
      val = val.slice(0, 2);
    }
    
    // Validate minutes (00-59)
    const numVal = val === '' ? -1 : parseInt(val);
    let finalVal = val;
    
    if (val === '' || (numVal >= 0 && numVal <= 59)) {
      finalVal = val;
    } else if (val.length === 2 && numVal > 59) {
      // If user types invalid minutes (like 60-99), clamp to 59
      finalVal = '59';
    }
    
    setMinutes(finalVal);
    updateParent(hours, finalVal);
  };

  const handleHoursKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Arrow right moves to minutes
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      minutesRef.current?.focus();
      minutesRef.current?.select();
      return;
    }
    // Tab moves to minutes if hours are complete
    if (e.key === 'Tab' && !e.shiftKey && hours.length === 2) {
      // Let default Tab behavior work, but focus minutes
      setTimeout(() => {
        if (document.activeElement !== minutesRef.current) {
          minutesRef.current?.focus();
          minutesRef.current?.select();
        }
      }, 0);
    }
    // If typing a digit and we'll have 2 digits, prepare to move
    if (/[0-9]/.test(e.key) && hours.length === 1) {
      // Will have 2 digits after this keypress, move to minutes
      setTimeout(() => {
        if (hoursRef.current?.value.length === 2) {
          minutesRef.current?.focus();
          minutesRef.current?.select();
        }
      }, 10);
    }
  };

  const handleMinutesKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Arrow left moves to hours
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      hoursRef.current?.focus();
      hoursRef.current?.select();
    }
    // Backspace at start moves to hours
    if (e.key === 'Backspace' && minutes.length === 0) {
      e.preventDefault();
      hoursRef.current?.focus();
      hoursRef.current?.select();
    }
  };

  const handleHoursBlur = () => {
    // Pad hours with zero if single digit
    if (hours.length === 1) {
      const padded = hours.padStart(2, '0');
      setHours(padded);
      updateParent(padded, minutes);
    }
    setFocusedField(null);
  };

  const handleMinutesBlur = () => {
    // Pad minutes with zero if single digit
    if (minutes.length === 1) {
      const padded = minutes.padStart(2, '0');
      setMinutes(padded);
      updateParent(hours, padded);
    }
    setFocusedField(null);
  };

  // Hidden input for form validation
  const hiddenValue = hours.length === 2 && minutes.length === 2 
    ? `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}` 
    : '';

  return (
    <>
      <div className="relative flex items-center gap-2">
        {/* Hours Input */}
        <input
          ref={hoursRef}
          type="text"
          inputMode="numeric"
          value={hours}
          onChange={handleHoursChange}
          onKeyDown={handleHoursKeyDown}
          onFocus={() => setFocusedField('hours')}
          onBlur={handleHoursBlur}
          placeholder="00"
          maxLength={2}
          className={cn(
            "flex h-10 w-16 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-center ring-offset-background",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "transition-all duration-150"
          )}
          style={{ 
            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
            fontWeight: 500,
          }}
        />
        
        {/* Colon Separator */}
        <span 
          className="text-text-secondary text-xl font-medium"
          style={{
            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
            color: 'var(--color-text-secondary)',
            fontWeight: 600,
          }}
        >
          :
        </span>

        {/* Minutes Input */}
        <input
          ref={minutesRef}
          type="text"
          inputMode="numeric"
          value={minutes}
          onChange={handleMinutesChange}
          onKeyDown={handleMinutesKeyDown}
          onFocus={() => setFocusedField('minutes')}
          onBlur={handleMinutesBlur}
          placeholder="00"
          maxLength={2}
          className={cn(
            "flex h-10 w-16 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-center ring-offset-background",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "transition-all duration-150"
          )}
          style={{ 
            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
            fontWeight: 500,
          }}
        />
      </div>
      
      {/* Hidden input for form validation */}
      <input
        type="hidden"
        id={id}
        name={name}
        value={hiddenValue}
        required={required}
      />
    </>
  );
}

