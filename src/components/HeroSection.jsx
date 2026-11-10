import React from 'react';
import { Monogram } from './Monogram';
import { Hairline } from './Reveal';
import { invitationData } from '../data/invitationData';

export function HeroSection() {
  const { couple, invitationHeader } = invitationData;

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ivory">
      {/* Background Image: Chetan & Suhani */}
      <div className="absolute inset-0">
        <img
          src="/images/couple-portrait.jpg?v=5"
          alt={`${couple.groom.name} & ${couple.bride.name}`}
          className="object-cover animate-slow-zoom object-[50%_35%] sm:object-[50%_30%] origin-center"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: 'transparent',
          }}
        />
        {/* Soft veil overlay so faces shine through and typography is clear */}
        <div className="absolute inset-0 bg-veil" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 30%, rgba(251,249,244,0.45) 80%)',
          }}
        />
      </div>

      {/* Top Bar with decorative gold flourishes and Monogram */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
        <div className="relative flex items-center justify-between px-3 pt-3 sm:px-6 sm:pt-4">
          <svg
            viewBox="0 0 160 60"
            className="h-12 sm:h-16 w-auto text-gold-foil opacity-90 drop-shadow-[0_1px_2px_rgba(140,90,30,0.25)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <path d="M2 30 Q 40 2, 80 30 T 158 30" />
            <path d="M2 38 Q 40 14, 80 38 T 158 38" opacity="0.55" />
            <circle cx="80" cy="30" r="3" fill="currentColor" />
            <circle cx="40" cy="18" r="1.6" fill="currentColor" />
            <circle cx="120" cy="18" r="1.6" fill="currentColor" />
            <path d="M150 30 l8 -6 M150 30 l8 6" />
          </svg>

          <div className="shrink-0 mx-2">
            <Monogram
              width={110}
              className="opacity-95 animate-shimmer"
              left={couple.groom.initial}
              right={couple.bride.initial}
              date={couple.dateShort}
            />
          </div>

          <svg
            viewBox="0 0 160 60"
            className="h-12 sm:h-16 w-auto text-gold-foil opacity-90 drop-shadow-[0_1px_2px_rgba(140,90,30,0.25)] -scale-x-100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <path d="M2 30 Q 40 2, 80 30 T 158 30" />
            <path d="M2 38 Q 40 14, 80 38 T 158 38" opacity="0.55" />
            <circle cx="80" cy="30" r="3" fill="currentColor" />
            <circle cx="40" cy="18" r="1.6" fill="currentColor" />
            <circle cx="120" cy="18" r="1.6" fill="currentColor" />
            <path d="M150 30 l8 -6 M150 30 l8 6" />
          </svg>
        </div>
      </div>

      {/* Main Content: Exact previous design typography & hierarchy */}
      <div className="relative z-10 min-h-[100svh] flex flex-col items-center px-6 pb-16 pt-36 sm:pt-44 text-center">
        {/* Divine Blessings */}
        <div className="flex flex-col items-center gap-2 animate-fade-up">
          <div className="inline-flex items-center gap-3 px-5 py-2">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold-foil text-xs">✦</span>
            <span className="font-script text-base sm:text-lg text-gold-foil leading-[1.4] tracking-wide pb-1">
              With Divine Blessings
            </span>
            <span className="text-gold-foil text-xs">✦</span>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="font-display italic text-sm sm:text-base text-foreground/90 max-w-md mx-auto leading-relaxed drop-shadow-[0_1px_3px_rgba(255,255,255,0.85)] [text-shadow:0_1px_8px_rgba(255,255,255,0.7)]">
            {invitationHeader.blessingLine}
          </p>
        </div>

        {/* Couple Names, Family Invitation & Tagline */}
        <div className="mt-auto pt-10 animate-fade-up">
          <div className="my-6 flex flex-col items-center">
            <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-3 font-semibold">
              {invitationHeader.host}
            </p>
            <h1 className="font-accent text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-foreground">
              {couple.groom.name}
              <span className="block font-script text-6xl sm:text-7xl md:text-8xl text-gold-foil my-2 -rotate-2 font-normal">
                &amp;
              </span>
              {couple.bride.name}
            </h1>
          </div>

          <Hairline className="w-32 mx-auto my-6" />

          <p className="font-display italic text-base sm:text-lg text-foreground/85 max-w-sm mx-auto leading-snug">
            {couple.tagline}
          </p>

          <div className="mt-8 inline-flex items-center gap-3 px-5 py-2 border border-gold/40 rounded-full bg-ivory/70 backdrop-blur-sm shadow-sm">
            <span className="text-gold-foil text-xs">♡</span>
            <span className="text-[11px] tracking-luxe uppercase text-foreground font-semibold">
              {couple.hashtag}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-6 left-0 right-0 z-10 flex justify-center animate-fade-up"
        style={{ animationDelay: '1.3s' }}
      >
        <div className="animate-bounce-slow flex flex-col items-center gap-1.5 text-gold-foil">
          <span className="text-[9px] tracking-luxe uppercase text-muted-foreground">
            Scroll
          </span>
          <svg
            viewBox="0 0 16 24"
            width="12"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <path d="M2 8 L8 15 L14 8" />
          </svg>
        </div>
      </div>
    </section>
  );
}
