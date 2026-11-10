import React, { useState, useEffect } from 'react';
import { Monogram } from './Monogram';
import { Hairline, Reveal } from './Reveal';
import { invitationData } from '../data/invitationData';

export function CountdownSection() {
  const { couple } = invitationData;
  const targetTime = new Date(couple.weddingDate).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function calculate() {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <section className="relative py-12 px-6 bg-cream overflow-hidden">
      <div className="max-w-md mx-auto text-center">
        <Reveal>
          <p className="text-[10px] tracking-wider-luxe uppercase text-gold-foil mb-3">
            Counting Every Moment
          </p>
          <h2 className="font-accent sm:text-5xl text-3xl">Counting Down to Our Forever</h2>
          <div className="my-10 flex justify-center">
            <Monogram
              width={88}
              className="animate-shimmer"
              left={couple.groom.initial}
              right={couple.bride.initial}
              date={couple.dateShort}
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="hover-lift bg-ivory border border-gold/20 rounded-sm py-5 px-1 shadow-soft overflow-hidden"
              >
                <div
                  key={unit.value}
                  className="font-accent text-3xl sm:text-4xl text-gold-foil tabular-nums animate-tick"
                >
                  {pad(unit.value)}
                </div>
                <div className="mt-1 text-[9px] sm:text-[10px] tracking-luxe uppercase text-muted-foreground">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>

          <Hairline className="w-16 mx-auto my-8" />
          <p className="text-xs tracking-luxe uppercase text-muted-foreground">
            {couple.dateFormatted}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

