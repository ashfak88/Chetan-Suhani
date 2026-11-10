import React from 'react';

export function Petals({ count = 10, sizes = false, position = 'absolute', className = '' }) {
  const petals = Array.from({ length: count }, (_, n) => {
    const left = sizes ? (37 * n) % 100 : (41 * n) % 100;
    const duration = sizes ? 14 + (n % 7) * 3 : 12 + (n % 5) * 2;
    const delay = -((duration / count) * n);
    const size = sizes ? 8 + (n % 5) * 3 : undefined;

    return (
      <span
        key={n}
        className="petal"
        style={{
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          ...(size ? { width: `${size}px`, height: `${size}px` } : {}),
        }}
      />
    );
  });

  return (
    <div className={`${position} inset-0 overflow-hidden pointer-events-none ${className}`}>
      {petals}
    </div>
  );
}

