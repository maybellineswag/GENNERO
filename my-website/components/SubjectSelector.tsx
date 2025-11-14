'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SubjectSelectorProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const subjects = [
  { value: 'gynekologie', label: 'Gynekologie' },
  { value: 'kosmetologie', label: 'Kosmetologie' },
  { value: 'objednavka', label: 'Objednávka' },
  { value: 'dotaz', label: 'Obecný dotaz' },
  { value: 'jine', label: 'Jiné' },
];

export default function SubjectSelector({ value, onChange, required }: SubjectSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find the selected subject label
  const selectedSubject = subjects.find(subject => subject.value === value);

  // Sync hidden select value with prop
  useEffect(() => {
    const hiddenSelect = dropdownRef.current?.querySelector('select[name="subject"]') as HTMLSelectElement;
    if (hiddenSelect) {
      hiddenSelect.value = value;
    }
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (subjectValue: string) => {
    onChange(subjectValue);
    setIsOpen(false);
    // Update hidden select for form validation
    const hiddenSelect = dropdownRef.current?.querySelector('select[name="subject"]') as HTMLSelectElement;
    if (hiddenSelect) {
      hiddenSelect.value = subjectValue;
      // Trigger change event for form validation
      hiddenSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Vyberte předmět"
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-sm ring-offset-background",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "text-left cursor-pointer transition-all duration-200",
          "hover:border-primary/50",
          isOpen && "ring-2 ring-primary border-primary"
        )}
        style={{ 
          fontFamily: 'var(--font-daikon), system-ui, sans-serif',
        }}
      >
        <span className={cn(
          "block truncate",
          !selectedSubject && "text-gray-400"
        )}>
          {selectedSubject ? selectedSubject.label : 'Vyberte předmět'}
        </span>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg 
            className={cn(
              "w-5 h-5 text-gray-400 transition-transform duration-200",
              isOpen && "transform rotate-180"
            )} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div 
          role="listbox"
          className="absolute z-50 w-full mt-2 bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden"
          style={{
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* Subject List */}
          <div className="max-h-[300px] overflow-y-auto">
            {subjects.map((subject) => {
              const isSelected = subject.value === value;
              return (
                <button
                  key={subject.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(subject.value)}
                  className={cn(
                    "w-full px-4 py-2.5 text-left transition-all duration-150",
                    "border-l-2 border-transparent",
                    "hover:bg-primary/10 hover:border-primary/50",
                    isSelected && "bg-primary/15 border-primary"
                  )}
                >
                  <span
                    className={cn(
                      "text-sm",
                      isSelected 
                        ? "font-semibold text-primary" 
                        : "text-text-secondary"
                    )}
                    style={{ 
                      fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                      fontWeight: isSelected ? 600 : 400,
                      color: isSelected ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    }}
                  >
                    {subject.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Hidden select for form validation */}
      <select
        name="subject"
        value={value}
        required={required}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
        onChange={() => {}}
      >
        <option value="">Vyberte předmět</option>
        {subjects.map(subject => (
          <option key={subject.value} value={subject.value}>{subject.label}</option>
        ))}
      </select>
    </div>
  );
}

