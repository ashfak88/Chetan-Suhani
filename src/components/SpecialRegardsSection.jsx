import React from 'react';
import { Hairline, Reveal } from './Reveal';
import { invitationData } from '../data/invitationData';

export function SpecialRegardsSection() {
  const { specialRegards } = invitationData;
  if (!specialRegards) return null;

  return (
    <section className="relative py-12 px-6 bg-ivory">
      <div className="max-w-md mx-auto text-center">
        <Reveal>
          <p className="text-[10px] tracking-wider-luxe uppercase text-gold-foil mb-3">
            {specialRegards.title}
          </p>
          <h2 className="font-accent text-3xl sm:text-4xl text-foreground">
            {specialRegards.subtitle}
          </h2>
          <Hairline className="w-16 mx-auto my-8" />
        </Reveal>

        <Reveal delay={150}>
          <div className="hover-lift bg-card border border-gold/20 p-6 shadow-soft rounded-[2px] text-center">
            <p className="font-display italic text-sm text-foreground/90 leading-relaxed">
              {specialRegards.description}
            </p>
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
              {specialRegards.note}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-gold-foil text-sm font-script">
              <span>✦</span>
              <span>Marwal &amp; Kumawat Families</span>
              <span>✦</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
