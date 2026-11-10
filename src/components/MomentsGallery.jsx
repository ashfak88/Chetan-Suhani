import React, { useState } from 'react';
import { Hairline, Reveal } from './Reveal';

export function MomentsGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Column 1 (Clean, balanced photos)
  const column1 = [
    { src: '/images/client/royal-painting.jpg?v=8', caption: 'Royal Elegance' },
    { src: '/images/client/dinner-date.jpg?v=8', caption: 'Dinner &amp; Blooms' },
    { src: '/images/client/cute-smile.jpg?v=8', caption: 'Sweetest Smiles' },
    { src: '/images/client/embrace.jpg?v=8', caption: 'A Warm Embrace' },
  ];

  // Column 2 (Clean, balanced photos)
  const column2 = [
    { src: '/images/client/lake-portrait.jpg?v=8', caption: 'By the Waters' },
    { src: '/images/client/sunflowers.jpg?v=8', caption: 'Sunflowers &amp; Smiles' },
    { src: '/images/client/lantern-evening.jpg?v=8', caption: 'Lantern Nights' },
  ];

  return (
    <section className="relative py-14 px-4 sm:px-6 bg-cream overflow-hidden">
      <div className="max-w-md mx-auto text-center">
        <Reveal>
          <p className="text-[10px] tracking-wider-luxe uppercase text-gold-foil mb-2 font-semibold">
            Cherished Memories
          </p>
          <h2 className="font-accent text-3xl sm:text-4xl text-foreground">
            Our Journey of Love
          </h2>
          <p className="mt-3 font-display italic text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-sm mx-auto">
            Glimpses of love, laughter, and beautiful memories on our way to forever.
          </p>
          <Hairline className="w-16 mx-auto my-7" />
        </Reveal>

        {/* 2-Column Balanced Gallery */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 items-start text-left">
          {/* Column 1 */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {column1.map((item, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <div
                  onClick={() => setSelectedPhoto(item.src)}
                  className="hover-lift group relative overflow-hidden rounded-lg bg-card border border-gold/25 shadow-soft cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt="Chetan &amp; Suhani"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                    <span className="text-[10px] tracking-luxe uppercase text-ivory font-semibold">
                      ✦ Tap to View ✦
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {column2.map((item, idx) => (
              <Reveal key={idx} delay={idx * 80 + 40}>
                <div
                  onClick={() => setSelectedPhoto(item.src)}
                  className="hover-lift group relative overflow-hidden rounded-lg bg-card border border-gold/25 shadow-soft cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt="Chetan &amp; Suhani"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                    <span className="text-[10px] tracking-luxe uppercase text-ivory font-semibold">
                      ✦ Tap to View ✦
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-[120] bg-ink/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-up"
        >
          <div className="relative max-w-md max-h-[85vh] overflow-hidden rounded-xl border border-gold/40 shadow-2xl bg-ivory p-2">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-ink/70 text-ivory flex items-center justify-center text-sm hover:bg-gold transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedPhoto}
              alt="Chetan &amp; Suhani"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
