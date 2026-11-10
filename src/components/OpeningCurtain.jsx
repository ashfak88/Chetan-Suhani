import React, { useState } from 'react';
import { Petals } from './Petals';
import { Monogram } from './Monogram';
import { invitationData } from '../data/invitationData';

export function OpeningCurtain({ isOpen, onOpen }) {
  const { couple } = invitationData;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ivory transition-opacity duration-700 ${
        isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        backgroundImage: 'radial-gradient(ellipse at center, #fdfaf4 0%, #f3e9d8 100%)',
      }}
    >
      <Petals count={10} />

      <div className="relative text-center px-8 py-10 my-auto animate-fade-up">
        {/* Lord Ganesha */}
        <div className="mx-auto mb-4 relative w-[150px] sm:w-[180px]">
          <div
            className="absolute inset-0 -z-10 rounded-full blur-2xl opacity-60"
            style={{
              background: 'radial-gradient(circle, rgba(212,175,106,0.55) 0%, transparent 70%)',
            }}
          />
          <img
            src="/images/ganesha.png"
            alt="Lord Ganesha — invoking divine blessings"
            className="w-full h-auto drop-shadow-[0_8px_20px_rgba(140,90,30,0.25)] animate-shimmer"
          />
        </div>

        <p className="font-display italic text-base sm:text-lg text-foreground/80 tracking-wide">
          ॥ Shree Ganeshaya Namah ॥
        </p>

        {/* Monogram */}
        <div className="my-8 flex justify-center">
          <Monogram
            width={140}
            className="animate-shimmer"
            left={couple.groom.initial}
            right={couple.bride.initial}
            date={couple.dateShort}
          />
        </div>

        {/* Couple Names */}
        <p className="font-accent text-xl sm:text-2xl text-foreground mb-1">
          {couple.groom.name} <span className="text-gold-foil">&amp;</span> {couple.bride.name}
        </p>

        <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-10">
          A Sacred Union · {couple.dateFormatted}
        </p>

        {/* Open Button */}
        <button
          onClick={onOpen}
          className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-[11px] tracking-luxe uppercase text-ivory font-medium overflow-hidden shadow-[0_10px_30px_-10px_rgba(196,158,98,0.6)] hover:shadow-[0_18px_40px_-12px_rgba(196,158,98,0.8)] hover:-translate-y-0.5 transition-all duration-500"
          style={{
            background: 'linear-gradient(135deg, #a8782c 0%, #d7b174 45%, #f0dcb0 55%, #b98249 100%)',
            backgroundSize: '200% 200%',
            border: '1px solid rgba(240,220,176,0.6)',
          }}
        >
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background:
                'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer-sweep 1.8s linear infinite',
            }}
          />
          <span className="relative text-ivory drop-shadow-sm">✦</span>
          <span className="relative">Open Invitation</span>
          <span className="relative text-ivory drop-shadow-sm">✦</span>
        </button>
      </div>
    </div>
  );
}

