import React from 'react';
import { Hairline, Reveal } from './Reveal';
import { invitationData } from '../data/invitationData';

export function CoupleDetailsSection() {
  const { couple } = invitationData;

  return (
    <section className="relative py-12 px-6 bg-cream">
      <div className="max-w-md mx-auto text-center">
        <Reveal>
          <p className="text-[10px] tracking-wider-luxe uppercase text-gold-foil mb-3">
            With Love &amp; Respect
          </p>
          <h2 className="font-accent text-3xl sm:text-4xl text-foreground">
            The Groom &amp; The Bride
          </h2>
          <p className="mt-4 font-display italic text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-sm mx-auto">
            Two souls united by destiny, beginning a lifelong journey of companionship and love.
          </p>
          <Hairline className="w-16 mx-auto my-8" />
        </Reveal>

        <div className="space-y-6">
          {/* Groom Card */}
          <Reveal delay={100}>
            <div className="hover-lift bg-card border border-gold/20 p-6 shadow-soft rounded-[2px] text-center">
              <p className="text-[10px] tracking-wider-luxe uppercase text-gold-foil mb-1">
                The Groom
              </p>
              <h3 className="font-accent text-2xl sm:text-3xl text-foreground">
                {couple.groom.fullName}
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-semibold text-foreground/90">
                Beloved Son of
              </p>
              <p className="mt-1 text-sm text-foreground/90 font-medium">
                {couple.groom.parents}
              </p>
              {couple.groom.family && (
                <p className="mt-2 text-[10px] tracking-luxe uppercase text-gold-foil">
                  ({couple.groom.family})
                </p>
              )}
            </div>
          </Reveal>

          {/* Bride Card */}
          <Reveal delay={200}>
            <div className="hover-lift bg-card border border-gold/20 p-6 shadow-soft rounded-[2px] text-center">
              <p className="text-[10px] tracking-wider-luxe uppercase text-gold-foil mb-1">
                The Bride
              </p>
              <h3 className="font-accent text-2xl sm:text-3xl text-foreground">
                {couple.bride.fullName}
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-semibold text-foreground/90">
                Beloved Daughter of
              </p>
              <p className="mt-1 text-sm text-foreground/90 font-medium">
                {couple.bride.parents}
              </p>
              {couple.bride.family && (
                <p className="mt-2 text-[10px] tracking-luxe uppercase text-gold-foil">
                  ({couple.bride.family})
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
