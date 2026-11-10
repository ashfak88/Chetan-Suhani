import React from 'react';
import { Hairline, Reveal } from './Reveal';
import { invitationData } from '../data/invitationData';

export function CherishSection() {
  const { couple } = invitationData;

  return (
    <section className="relative py-14 px-6 bg-ivory">
      <div className="max-w-md mx-auto text-center">
        <Reveal>
          <div className="text-[10px] tracking-wider-luxe uppercase text-gold-foil mb-2 font-body font-semibold">
            A Moment We Cherish
          </div>
          <h2 className="font-accent text-2xl sm:text-3xl text-foreground leading-[1.15]">
            {couple.groom.name} <span className="text-gold-foil">&amp;</span> {couple.bride.name}
          </h2>
          <Hairline className="w-16 mx-auto mt-4" />
        </Reveal>

        <Reveal delay={150} className="mt-8 max-w-md mx-auto">
          <div className="hover-lift relative rounded-sm overflow-hidden shadow-frame border border-gold/20">
            <img
              src="/images/couple-closeup.jpg?v=5"
              alt={`${couple.groom.name} and ${couple.bride.name}`}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
