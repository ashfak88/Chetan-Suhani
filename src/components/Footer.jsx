import React from 'react';
import { Monogram } from './Monogram';
import { Hairline, Reveal } from './Reveal';
import { invitationData } from '../data/invitationData';

export function Footer() {
  const { couple } = invitationData;

  return (
    <footer className="relative pt-14 pb-10 px-6 bg-ivory text-center overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(184,145,89,0.5), transparent)',
        }}
      />

      <Reveal>
        <p className="font-display italic text-sm text-foreground/85 max-w-md mx-auto leading-relaxed">
          &quot;We eagerly await your presence to bless the couple and celebrate this sacred union.&quot;
        </p>

        <div className="my-8 flex justify-center">
          <Monogram
            width={100}
            className="animate-shimmer"
            left={couple.groom.initial}
            right={couple.bride.initial}
            date={couple.dateShort}
          />
        </div>

        <h3 className="font-accent text-2xl sm:text-3xl">
          {couple.groom.name} <span className="text-rose">♥</span> {couple.bride.name}
        </h3>
        <p className="mt-3 text-[9px] tracking-wider-luxe uppercase text-gold-foil">
          {couple.hashtag}
        </p>
        <p className="mt-2 text-[9px] tracking-luxe uppercase text-muted-foreground">
          {couple.dateShort}
        </p>
        <Hairline className="w-24 mx-auto my-10" />
      </Reveal>
    </footer>
  );
}

