import React from 'react';
import { Hairline, Reveal } from './Reveal';
import { invitationData } from '../data/invitationData';

export function InLovingMemorySection() {
  const { inLovingMemory } = invitationData;

  return (
    <section className="relative py-12 px-6 bg-ivory">
      <div className="max-w-md mx-auto text-center">
        <Reveal>
          <p className="text-[10px] tracking-wider-luxe uppercase text-gold-foil mb-3">
            {inLovingMemory.title}
          </p>
          <h2 className="font-accent text-3xl sm:text-4xl text-foreground">
            {inLovingMemory.subtitle}
          </h2>
          <p className="mt-4 font-display italic text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-sm mx-auto">
            {inLovingMemory.description}
          </p>
          <Hairline className="w-16 mx-auto my-8" />
        </Reveal>

        <div className="space-y-4 mt-6">
          {inLovingMemory.elders.map((elder, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div className="hover-lift bg-card border border-gold/20 p-5 shadow-soft rounded-[2px]">
                <p className="text-[10px] tracking-wider-luxe uppercase text-gold-foil mb-1">
                  ॐ In Loving Memory
                </p>
                <h3 className="font-display text-sm sm:text-base font-semibold text-foreground leading-snug">
                  {elder.names}
                </h3>
                <p className="font-accent text-xs sm:text-sm text-gold-foil mt-1">
                  {elder.relation}
                </p>
                <p className="mt-2 text-[10px] tracking-luxe uppercase text-muted-foreground">
                  {elder.tag}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

