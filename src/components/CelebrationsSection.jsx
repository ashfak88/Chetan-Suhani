import React from 'react';
import { Hairline, Reveal } from './Reveal';
import { invitationData } from '../data/invitationData';

export function CelebrationsSection() {
  const { celebrations } = invitationData;

  return (
    <section className="relative py-14 px-4 sm:px-6 bg-ivory">
      <div className="max-w-md mx-auto text-center">
        {/* Section Header */}
        <Reveal>
          <div className="text-[9px] sm:text-[10px] tracking-wider-luxe uppercase text-gold-foil mb-2 font-body font-semibold">
            Save These Moments
          </div>
          <h2 className="font-accent text-2xl sm:text-3xl md:text-4xl text-foreground leading-[1.15]">
            Wedding Celebrations
          </h2>
          <Hairline className="w-16 mx-auto mt-3" />
          <p className="mt-3 text-[12px] sm:text-sm font-display italic text-muted-foreground leading-snug max-w-sm mx-auto">
            Rituals, music, laughter and lifelong memories — we would be deeply honoured to share them with you.
          </p>
        </Reveal>

        {/* Days & Events */}
        <div className="mt-12 space-y-14">
          {celebrations.map((dayGroup, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              {/* Day Header */}
              <Reveal delay={groupIdx * 80}>
                <div className="text-center">
                  <p className="text-[10px] tracking-luxe uppercase text-muted-foreground font-semibold">
                    {dayGroup.day}
                  </p>
                  <p className="font-accent text-3xl sm:text-4xl text-gold-foil mt-1">
                    {dayGroup.date}
                  </p>
                  <p className="font-display italic text-sm text-foreground/80 mt-1.5">
                    {dayGroup.title}
                  </p>
                  <Hairline className="w-16 mx-auto mt-4" />
                </div>
              </Reveal>

              {/* Centered Event Cards */}
              <div className="space-y-4">
                {dayGroup.events.map((evt, evtIdx) => (
                  <React.Fragment key={evtIdx}>
                    {/* Subtle connecting thread between consecutive events on the same day */}
                    {evtIdx > 0 && (
                      <div className="flex justify-center -my-2">
                        <div className="w-px h-5 bg-gold/40" />
                      </div>
                    )}

                    <Reveal delay={evtIdx * 100}>
                      <div className="hover-lift bg-card border border-gold/20 p-5 sm:p-6 shadow-soft rounded-[2px] text-center">
                        {/* Time Badge */}
                        <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-ivory border border-gold/25 text-[10px] tracking-luxe uppercase text-gold-foil font-semibold mb-2">
                          <span>✦</span>
                          <span>{evt.time}</span>
                          <span>✦</span>
                        </div>

                        {/* Event Name */}
                        <h4 className="font-accent text-lg sm:text-xl text-foreground mt-1 font-medium">
                          {evt.name}
                        </h4>

                        {/* Venue */}
                        {evt.venue && (
                          <div className="mt-3 pt-3 border-t border-gold/15 max-w-xs mx-auto">
                            <p className="text-xs text-foreground/80 leading-relaxed font-body">
                              <span className="text-gold-foil mr-1">📍</span>
                              {evt.venue}
                            </p>
                          </div>
                        )}
                      </div>
                    </Reveal>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
