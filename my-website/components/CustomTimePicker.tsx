'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CustomTimePickerProps {
  value: string;
  onChange: (time: string) => void;
  minTime?: string;
  onClose: () => void;
}

export default function CustomTimePicker({ value, onChange, minTime, onClose }: CustomTimePickerProps) {
  const [hours, setHours] = useState(value ? parseInt(value.split(':')[0]) : new Date().getHours());
  const [minutes, setMinutes] = useState(value ? parseInt(value.split(':')[1]) : 0);
  const timePickerRef = useRef<HTMLDivElement>(null);

  // Close time picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (timePickerRef.current && !timePickerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Initialize time when value changes externally
  useEffect(() => {
    if (value) {
      const [h, m] = value.split(':').map(Number);
      if (h !== hours || m !== minutes) {
        setHours(h);
        setMinutes(m);
      }
    }
  }, [value]);

  const handleHourChange = (hour: number) => {
    if (hour >= 0 && hour <= 23) {
      setHours(hour);
      const timeString = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
      onChange(timeString);
    }
  };

  const handleMinuteChange = (minute: number) => {
    if (minute >= 0 && minute <= 59) {
      setMinutes(minute);
      const timeString = `${String(hours).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      onChange(timeString);
    }
  };

  const generateTimeOptions = (type: 'hours' | 'minutes') => {
    if (type === 'hours') {
      return Array.from({ length: 24 }, (_, i) => i);
    } else {
      return Array.from({ length: 60 }, (_, i) => i).filter(m => m % 5 === 0); // 5-minute intervals
    }
  };

  const scrollToSelected = (containerId: string, value: number) => {
    const container = document.getElementById(containerId);
    if (container) {
      const option = container.querySelector(`[data-value="${value}"]`);
      if (option) {
        option.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    scrollToSelected('hours-list', hours);
    scrollToSelected('minutes-list', minutes);
  }, []);

  return (
    <div
      ref={timePickerRef}
      className="absolute z-50 mt-2 bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden"
      style={{
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
        minWidth: '200px',
        animation: 'fadeIn 0.2s ease-out',
      }}
    >
      <div className="flex">
        {/* Hours */}
        <div className="flex-1 border-r border-gray-200">
          <div className="px-3 py-2 text-center border-b border-gray-200 bg-gray-50/50">
            <span
              className="text-xs font-semibold text-text-secondary uppercase tracking-wide"
              style={{
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                color: 'var(--color-text-secondary)',
              }}
            >
              Hodiny
            </span>
          </div>
          <div
            id="hours-list"
            className="max-h-[200px] overflow-y-auto"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'var(--color-primary-light) transparent',
            }}
          >
            {generateTimeOptions('hours').map((hour) => (
              <button
                key={hour}
                type="button"
                data-value={hour}
                onClick={() => handleHourChange(hour)}
                className={cn(
                  "w-full px-4 py-2 text-center text-sm transition-all duration-150",
                  "hover:bg-primary/10",
                  hours === hour && "bg-primary text-white font-semibold"
                )}
                style={{
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: hours === hour ? 600 : 400,
                  color: hours === hour ? '#ffffff' : 'var(--color-text-primary)',
                  backgroundColor: hours === hour ? 'var(--color-primary)' : 'transparent',
                }}
              >
                {String(hour).padStart(2, '0')}
              </button>
            ))}
          </div>
        </div>

        {/* Minutes */}
        <div className="flex-1">
          <div className="px-3 py-2 text-center border-b border-gray-200 bg-gray-50/50">
            <span
              className="text-xs font-semibold text-text-secondary uppercase tracking-wide"
              style={{
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                color: 'var(--color-text-secondary)',
              }}
            >
              Minuty
            </span>
          </div>
          <div
            id="minutes-list"
            className="max-h-[200px] overflow-y-auto"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'var(--color-primary-light) transparent',
            }}
          >
            {generateTimeOptions('minutes').map((minute) => (
              <button
                key={minute}
                type="button"
                data-value={minute}
                onClick={() => handleMinuteChange(minute)}
                className={cn(
                  "w-full px-4 py-2 text-center text-sm transition-all duration-150",
                  "hover:bg-primary/10",
                  minutes === minute && "bg-primary text-white font-semibold"
                )}
                style={{
                  fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  fontWeight: minutes === minute ? 600 : 400,
                  color: minutes === minute ? '#ffffff' : 'var(--color-text-primary)',
                  backgroundColor: minutes === minute ? 'var(--color-primary)' : 'transparent',
                }}
              >
                {String(minute).padStart(2, '0')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

