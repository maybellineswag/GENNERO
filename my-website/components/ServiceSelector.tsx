'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Service {
  id: string;
  label: string;
}

interface Subcategory {
  id: string;
  label: string;
  services: Service[];
}

interface ServiceCategory {
  id: string;
  label: string;
  subcategories: Subcategory[];
}

interface ServiceSelectorProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'gynecology',
    label: 'Gynekologie',
    subcategories: [
      {
        id: 'ambulantni-pece',
        label: 'Ambulantní péče',
        services: [
          { id: 'ambulantni-gynekologie', label: 'Ambulantní gynekologická péče' },
          { id: 'tehotne', label: 'Ambulantní péče o těhotné' },
        ],
      },
      {
        id: 'diagnostika',
        label: 'Diagnostika',
        services: [
          { id: 'kolposkopie', label: 'Kolposkopie' },
          { id: 'cytologie', label: 'Cytologie' },
          { id: 'hpv-testace', label: 'HPV testace' },
          { id: 'ultrazvukova-diagnostika', label: 'Ultrazvuková diagnostika' },
          { id: '3d-4d-ultrazvuk', label: '3D/4D ultrazvuk' },
        ],
      },
      {
        id: 'esteticka-gynekologie',
        label: 'Estetická gynekologie',
        services: [
          { id: 'esteticka-gynekologie', label: 'Estetická gynekologie' },
          { id: 'hyaluronova-kyselina', label: 'Aplikace kyseliny hyaluronové v intimních partiích' },
          { id: 'atrofie', label: 'Atrofie' },
        ],
      },
      {
        id: 'antikoncepce',
        label: 'Antikoncepce',
        services: [
          { id: 'antikoncepce', label: 'Antikoncepce' },
        ],
      },
      {
        id: 'tehotenstvi',
        label: 'Těhotenství',
        services: [
          { id: 'aromaterapie-tehotenstvi', label: 'Aromaterapie v těhotenství' },
        ],
      },
    ],
  },
  {
    id: 'cosmetology',
    label: 'Kosmetologie',
    subcategories: [
      {
        id: 'epilace',
        label: 'Epilace',
        services: [
          { id: 'elektro-epilace', label: 'Elektro epilace' },
          { id: 'laserova-epilace', label: 'Laserová epilace' },
        ],
      },
      {
        id: 'osetreni-pleti',
        label: 'Ošetření pleti',
        services: [
          { id: 'mikrojehlickovani', label: 'Mikrojehličkování' },
          { id: 'chemicky-peeling', label: 'Chemický peeling' },
          { id: 'fotorejuvenace', label: 'Fotorejuvenace' },
          { id: 'radiofrekvence', label: 'Radiofrekvence' },
          { id: 'dermatologie', label: 'Dermatologie' },
        ],
      },
      {
        id: 'anti-aging',
        label: 'Anti-aging',
        services: [
          { id: 'botox', label: 'Botox' },
          { id: 'vyplneni-rysek', label: 'Vyplnění vrásek' },
          { id: 'karboxyterapie', label: 'Karboxyterapie' },
        ],
      },
      {
        id: 'mezoterapie',
        label: 'Mezoterapie',
        services: [
          { id: 'mezoterapie', label: 'Mezoterapie' },
        ],
      },
      {
        id: 'esteticke-zakroky',
        label: 'Estetické zákroky',
        services: [
          { id: 'liposukce', label: 'Liposukce' },
          { id: 'plazmove-zvyseni', label: 'Plazmové zvýšení rtů' },
        ],
      },
    ],
  },
];

export default function ServiceSelector({ value, onChange, required }: ServiceSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['gynecology', 'cosmetology']));
  const [expandedSubcategories, setExpandedSubcategories] = useState<Set<string>>(new Set());
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Find the selected service label
  const selectedService = serviceCategories
    .flatMap(cat => cat.subcategories.flatMap(subcat => subcat.services))
    .find(service => service.id === value);

  // Filter categories and subcategories based on search query
  const filteredCategories = serviceCategories.map(category => {
    const filteredSubcategories = category.subcategories.map(subcategory => ({
      ...subcategory,
      services: subcategory.services.filter(service =>
        service.label.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })).filter(subcategory => subcategory.services.length > 0);

    return {
      ...category,
      subcategories: filteredSubcategories,
    };
  }).filter(category => category.subcategories.length > 0);

  // Sync hidden select value with prop
  useEffect(() => {
    const hiddenSelect = dropdownRef.current?.querySelector('select[name="service"]') as HTMLSelectElement;
    if (hiddenSelect) {
      hiddenSelect.value = value;
    }
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Focus search input when dropdown opens
      setTimeout(() => inputRef.current?.focus(), 0);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (serviceId: string) => {
    onChange(serviceId);
    setIsOpen(false);
    setSearchQuery('');
    // Update hidden select for form validation
    const hiddenSelect = dropdownRef.current?.querySelector('select[name="service"]') as HTMLSelectElement;
    if (hiddenSelect) {
      hiddenSelect.value = serviceId;
      // Trigger change event for form validation
      hiddenSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const toggleSubcategory = (subcategoryId: string) => {
    setExpandedSubcategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(subcategoryId)) {
        newSet.delete(subcategoryId);
      } else {
        newSet.add(subcategoryId);
      }
      return newSet;
    });
  };

  // Get category color
  const getCategoryColor = (categoryId: string) => {
    if (categoryId === 'gynecology') {
      return '#8ea9f4'; // Light blue (primary color)
    } else if (categoryId === 'cosmetology') {
      return '#f7c7db'; // Pink (accent color)
    }
    return 'var(--color-dark)';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Vyberte službu"
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
          !selectedService && "text-gray-400"
        )}>
          {selectedService ? selectedService.label : 'Vyberte službu'}
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
            animation: 'dropdownFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            opacity: 0,
            transform: 'translateY(-8px) scale(0.95)',
            animationFillMode: 'forwards',
          }}
        >
          {/* Search Bar */}
          <div className="p-3 border-b border-gray-200">
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Vyhledat službu..."
              className={cn(
                "w-full h-9 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
                "placeholder:text-gray-400"
              )}
              style={{ 
                fontFamily: 'var(--font-daikon), system-ui, sans-serif',
              }}
            />
          </div>

          {/* Service List */}
          <div className="max-h-[400px] overflow-y-auto">
            {filteredCategories.map((category) => {
              const isCategoryExpanded = expandedCategories.has(category.id);
              const categoryColor = getCategoryColor(category.id);

              return (
                <div key={category.id} className="border-b border-gray-100 last:border-b-0">
                  {/* Category Header */}
                  <button
                    type="button"
                    onClick={() => toggleCategory(category.id)}
                    className={cn(
                      "w-full px-4 py-3 flex items-center justify-between",
                      "hover:bg-gray-50/80 transition-colors duration-150",
                      "text-left"
                    )}
                  >
                    <span 
                      className="font-semibold uppercase tracking-wide"
                      style={{ 
                        fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                        fontWeight: 700,
                        fontSize: '0.9375rem',
                        color: categoryColor,
                        letterSpacing: '0.05em',
                      }}
                    >
                      {category.label}
                    </span>
                    <svg
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isCategoryExpanded && "transform rotate-180"
                      )}
                      style={{ color: categoryColor }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Subcategories in Category */}
                  <div 
                    className="bg-gray-50/30 overflow-hidden transition-all duration-300 ease-out"
                    style={{
                      maxHeight: isCategoryExpanded ? '2000px' : '0',
                      opacity: isCategoryExpanded ? 1 : 0,
                      transform: isCategoryExpanded ? 'translateY(0)' : 'translateY(-4px)',
                    }}
                  >
                      {category.subcategories.map((subcategory) => {
                        // Auto-expand all subcategories when searching
                        // When not searching: expand by default, unless user explicitly collapsed it
                        const wasManuallyCollapsed = expandedSubcategories.size > 0 && !expandedSubcategories.has(subcategory.id);
                        const isSubcategoryExpanded = searchQuery !== '' || !wasManuallyCollapsed;
                        const hasServices = subcategory.services.length > 0;

                        if (!hasServices) {
                          return null;
                        }

                        // Hide subcategory header when searching (to reduce clutter)
                        const showSubcategoryHeader = searchQuery === '';

                        return (
                          <div key={subcategory.id} className="border-b border-gray-100/50 last:border-b-0">
                            {/* Subcategory Header - only show when not searching */}
                            {showSubcategoryHeader && (
                              <button
                                type="button"
                                onClick={() => toggleSubcategory(subcategory.id)}
                                className={cn(
                                  "w-full px-5 py-2.5 flex items-center justify-between",
                                  "hover:bg-gray-50/60 transition-colors duration-150",
                                  "text-left"
                                )}
                              >
                                <span 
                                  className="font-semibold"
                                  style={{ 
                                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                                    fontWeight: 600,
                                    fontSize: '0.9375rem',
                                    color: 'var(--color-text-primary)',
                                  }}
                                >
                                  {subcategory.label}
                                </span>
                                <svg
                                  className={cn(
                                    "w-3.5 h-3.5 text-gray-400 transition-transform duration-200",
                                    isSubcategoryExpanded && "transform rotate-180"
                                  )}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                            )}

                            {/* Services in Subcategory */}
                            {hasServices && (
                              <div 
                                className="bg-white overflow-hidden transition-all duration-300 ease-out"
                                style={{
                                  maxHeight: isSubcategoryExpanded ? '2000px' : '0',
                                  opacity: isSubcategoryExpanded ? 1 : 0,
                                  transform: isSubcategoryExpanded ? 'translateY(0)' : 'translateY(-4px)',
                                }}
                              >
                                {subcategory.services.map((service) => {
                                  const isSelected = service.id === value;
                                  return (
                                    <button
                                      key={service.id}
                                      type="button"
                                      role="option"
                                      aria-selected={isSelected}
                                      onClick={() => handleSelect(service.id)}
                                      className={cn(
                                        "w-full px-8 py-2.5 text-left transition-all duration-150",
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
                                        {service.label}
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                </div>
              );
            })}

            {/* No results message */}
            {searchQuery && filteredCategories.length === 0 && (
              <div className="px-4 py-8 text-center">
                <p 
                  className="text-sm text-gray-400"
                  style={{ 
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                  }}
                >
                  Žádné služby nenalezeny
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hidden select for form validation */}
      <select
        name="service"
        value={value}
        required={required}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
        onChange={() => {}}
      >
        <option value="">Vyberte službu</option>
        {serviceCategories.flatMap(cat => 
          cat.subcategories.flatMap(subcat =>
            subcat.services.map(service => (
              <option key={service.id} value={service.id}>{service.label}</option>
            ))
          )
        )}
      </select>
    </div>
  );
}

