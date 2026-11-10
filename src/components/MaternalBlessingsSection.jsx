import React from 'react';
import { Hairline, Reveal } from './Reveal';
import { invitationData } from '../data/invitationData';

export function MaternalBlessingsSection() {
  const { maternalSide } = invitationData;

  return (
    <section className="relative py-8 px-6 bg-cream">
      <div className="max-w-md mx-auto text-center">
        <Reveal>
          <p className="text-[10px] tracking-wider-luxe uppercase text-gold-foil mb-3">
            {maternalSide.title}
          </p>
          <h2 className="font-accent text-3xl sm:text-4xl text-foreground">
            {maternalSide.subtitle}
          </h2>
          <Hairline className="w-16 mx-auto my-8" />
        </Reveal>

        <div className="space-y-3">
          {maternalSide.members.map((member, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className="hover-lift bg-card border border-gold/15 px-4 py-3 shadow-soft rounded-[2px] flex flex-col sm:flex-row items-center justify-between gap-1">
                <span className="text-[10px] tracking-luxe uppercase text-gold-foil font-semibold">
                  {member.relation}
                </span>
                <span className="font-display text-xs sm:text-sm text-foreground/90 font-medium">
                  {member.names}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

