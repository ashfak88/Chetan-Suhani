import React from 'react';
import { Hairline, Reveal } from './Reveal';
import { invitationData } from '../data/invitationData';

export function VenueSection() {
  const { venue } = invitationData;

  return (
    <section className="relative py-14 px-6 bg-cream">
      <div className="max-w-md mx-auto text-center">
        {/* Section Header */}
        <Reveal>
          <div className="text-[9px] sm:text-[10px] tracking-wider-luxe uppercase text-gold-foil mb-2 font-body font-semibold">
            {venue.title}
          </div>
          <h2 className="font-accent text-xl sm:text-2xl md:text-3xl text-foreground leading-[1.15]">
            {venue.subtitle}
          </h2>
          <Hairline className="w-16 mx-auto mt-3" />
        </Reveal>

        {/* Main Wedding Venue Card (Narayan Paradise) */}
        <Reveal delay={100} className="mt-10">
          <div className="hover-lift bg-card border border-gold/20 shadow-soft rounded-[2px] overflow-hidden text-center">
            {/* Embedded Google Map */}
            <div className="aspect-[4/3] w-full overflow-hidden">
              <iframe
                title={venue.name}
                src={venue.mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Venue Details */}
            <div className="p-7 text-center">
              <p className="text-[10px] tracking-luxe uppercase text-gold-foil mb-2 font-semibold">
                The Celebration · Main Wedding Venue
              </p>
              <h3 className="font-accent text-3xl sm:text-4xl text-foreground">
                {venue.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-xs mx-auto">
                {venue.address}
              </p>
              <Hairline className="w-16 mx-auto my-5" />
              <div className="flex justify-center">
                <a
                  href={venue.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-7 py-3 border border-gold/60 text-[11px] tracking-luxe uppercase hover:bg-gold/10 hover:-translate-y-0.5 transition-all duration-500 font-medium"
                >
                  <span className="text-gold-foil">✦</span>
                  Get Directions
                  <span className="text-gold-foil">✦</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Pre-Wedding Venue Card (Laxmi Paradise) - Centered & Perfectly Styled */}
        {venue.preWeddingVenue && (
          <Reveal delay={200} className="mt-8">
            <div className="hover-lift bg-card border border-gold/20 shadow-soft rounded-[2px] p-7 text-center">
              <p className="text-[10px] tracking-luxe uppercase text-gold-foil mb-2 font-semibold">
                Haldi, Mehndi &amp; Sangeet Venue
              </p>
              <h3 className="font-accent text-2xl sm:text-3xl text-foreground">
                {venue.preWeddingVenue.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-xs mx-auto">
                {venue.preWeddingVenue.address}
              </p>
              <Hairline className="w-16 mx-auto my-5" />
              <div className="flex justify-center">
                <a
                  href={venue.preWeddingVenue.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-7 py-3 border border-gold/60 text-[11px] tracking-luxe uppercase hover:bg-gold/10 hover:-translate-y-0.5 transition-all duration-500 font-medium"
                >
                  <span className="text-gold-foil">✦</span>
                  Directions to Laxmi Paradise
                  <span className="text-gold-foil">✦</span>
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
