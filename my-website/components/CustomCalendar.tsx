'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CustomCalendarProps {
  value: string;
  onChange: (date: string) => void;
  minDate?: string;
  onClose: () => void;
}

export default function CustomCalendar({ value, onChange, minDate, onClose }: CustomCalendarProps) {
  const initialMonth = value ? new Date(value) : new Date();
  const [currentMonth, setCurrentMonth] = useState(initialMonth);
  const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Update current month when value changes externally
  useEffect(() => {
    if (value) {
      const date = new Date(value);
      setCurrentMonth(date);
      setSelectedDate(date);
    }
  }, [value]);

  const today = new Date();
  const minDateObj = minDate ? new Date(minDate) : today;

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Monday = 0
  };

  const isDateDisabled = (date: Date) => {
    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const minDateOnly = new Date(minDateObj.getFullYear(), minDateObj.getMonth(), minDateObj.getDate());
    return dateOnly < minDateOnly;
  };

  const isToday = (date: Date) => {
    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return dateOnly.getTime() === todayOnly.getTime();
  };

  const isSelected = (date: Date) => {
    if (!selectedDate) return false;
    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const selectedOnly = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    return dateOnly.getTime() === selectedOnly.getTime();
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (!isDateDisabled(newDate)) {
      const dateString = newDate.toISOString().split('T')[0];
      onChange(dateString);
      setSelectedDate(newDate);
      // Close immediately after selection, similar to service selector
      onClose();
    }
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const monthNames = [
    'Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen',
    'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'
  ];

  const dayNames = ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'];

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days: (number | null)[] = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  // Get previous month's days for display
  const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 0);
  const daysInPrevMonth = prevMonth.getDate();

  return (
    <div
      ref={calendarRef}
      className="absolute z-50 mt-2 bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden"
      style={{
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
        minWidth: '320px',
        animation: 'dropdownFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: 0,
        transform: 'translateY(-8px) scale(0.95)',
        animationFillMode: 'forwards',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50/50">
        <button
          type="button"
          onClick={handlePreviousMonth}
          className="p-1.5 rounded-md hover:bg-white transition-colors duration-150"
          style={{ color: 'var(--color-primary)' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3
          className="font-semibold text-dark"
          style={{
            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            color: 'var(--color-dark)',
          }}
        >
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <button
          type="button"
          onClick={handleNextMonth}
          className="p-1.5 rounded-md hover:bg-white transition-colors duration-150"
          style={{ color: 'var(--color-primary)' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-1 px-2 pt-3 pb-2">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-text-secondary py-2"
            style={{
              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
              fontWeight: 600,
              fontSize: '0.75rem',
              color: 'var(--color-text-secondary)',
            }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 px-2 pb-3">
        {days.map((day, index) => {
          if (day === null) {
            // Don't show previous month's days - leave empty
            return (
              <div
                key={`empty-${index}`}
                className="aspect-square"
              />
            );
          }

          const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
          const disabled = isDateDisabled(date);
          const isDateToday = isToday(date);
          const isDateSelected = isSelected(date);

          return (
            <button
              key={day}
              type="button"
              onClick={() => handleDateSelect(day)}
              disabled={disabled}
              className={cn(
                "aspect-square flex items-center justify-center text-sm rounded-md transition-all duration-150",
                "hover:bg-primary/10 hover:scale-105",
                disabled && "opacity-30 cursor-not-allowed hover:bg-transparent hover:scale-100",
                isDateToday && !isDateSelected && "font-bold",
                isDateSelected && "bg-primary text-white font-semibold shadow-md scale-105",
                !disabled && !isDateSelected && "text-text-primary hover:text-primary"
              )}
              style={{
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                fontWeight: isDateSelected ? 600 : isDateToday ? 600 : 400,
                color: isDateSelected
                  ? '#ffffff'
                  : disabled
                  ? 'var(--color-text-light)'
                  : isDateToday
                  ? 'var(--color-primary)'
                  : 'var(--color-text-primary)',
                backgroundColor: isDateSelected ? 'var(--color-primary)' : 'transparent',
              }}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

