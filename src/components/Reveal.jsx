import React from 'react';
import { useRevealVisible } from '../hooks/useRevealVisible';

export function Reveal({ children, className = '', delay = 0 }) {
  const { ref, isVisible } = useRevealVisible();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}

export function Hairline({ className = '', delay = 0 }) {
  const { ref, isVisible } = useRevealVisible();

  return (
    <div
      ref={ref}
      className={`hairline reveal-line ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    />
  );
}

