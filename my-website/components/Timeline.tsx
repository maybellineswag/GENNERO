'use client';

interface TimelineEvent {
  year: string;
  title: string;
  subtitle?: string;
  description?: string;
}

interface TimelineSection {
  title: string;
  events: TimelineEvent[];
}

interface TimelineProps {
  sections: TimelineSection[];
}

export default function Timeline({ sections }: TimelineProps) {
  return (
    <section className="w-full bg-white pt-12 md:pt-16 lg:pt-20 pb-4 md:pb-6 lg:pb-8">
      <div className="w-full overflow-x-auto scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
        <div className="flex gap-8 md:gap-12 lg:gap-16 px-6 md:px-12 lg:px-16 min-w-max pb-4">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="flex-shrink-0 flex flex-col">
              {/* Section Title */}
              <div className="mb-8 md:mb-12">
                <h2
                  className="font-bold"
                  style={{
                    fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                    color: '#112250',
                    fontWeight: 700,
                    fontSize: 'clamp(1.125rem, 0.9vw + 0.9rem, 1.5rem)',
                  }}
                >
                  {section.title}
                </h2>
              </div>

              {/* Timeline Events - Horizontal Flow */}
              <div className="relative flex flex-col gap-8 md:gap-10 lg:gap-12">
                {/* Continuous Timeline Line - spans all events */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{
                    backgroundColor: '#8ea9f4',
                  }}
                />
                
                {section.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex-shrink-0 w-[300px] md:w-[360px] lg:w-[420px] relative"
                  >
                    <div className="relative pl-10 md:pl-12">
                      {/* Timeline Dot */}
                      <div
                        className="absolute top-3 w-4 h-4 rounded-full transform -translate-x-1/2 border-2 border-white z-10"
                        style={{
                          backgroundColor: '#8ea9f4',
                          left: '1px', // Center on the 2px wide line (0.5 * 2px = 1px)
                        }}
                      />

                      {/* Event Content */}
                      <div className="pt-1">
                        {/* Year */}
                        <div
                          className="text-base md:text-lg font-semibold mb-3"
                          style={{
                            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                            color: '#8ea9f4',
                            fontWeight: 600,
                          }}
                        >
                          {event.year}
                        </div>

                        {/* Title */}
                        <div
                          className="text-lg md:text-xl font-semibold mb-2 leading-tight"
                          style={{
                            fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                            color: '#112250',
                            fontWeight: 600,
                          }}
                        >
                          {event.title}
                        </div>

                        {/* Subtitle */}
                        {event.subtitle && (
                          <div
                            className="text-base md:text-lg mb-2"
                            style={{
                              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                              color: '#112250',
                              fontWeight: 500,
                            }}
                          >
                            {event.subtitle}
                          </div>
                        )}

                        {/* Description */}
                        {event.description && (
                          <div
                            className="text-sm md:text-base"
                            style={{
                              fontFamily: 'var(--font-daikon), system-ui, sans-serif',
                              color: '#4a5568',
                              fontWeight: 400,
                              lineHeight: '1.6',
                            }}
                          >
                            {event.description}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

