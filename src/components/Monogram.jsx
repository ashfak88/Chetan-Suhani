import React, { useId } from 'react';

export function Monogram({
  left = 'S',
  right = 'A',
  date = '23 · 09 · 2026',
  width = 140,
  className = '',
}) {
  const id = useId().replace(/:/g, '');
  const foilId = `goldFoil-${id}`;
  const dateId = `goldFoilDate-${id}`;

  return (
    <svg
      viewBox="0 0 200 230"
      width={width}
      height={width * 1.15}
      className={className}
      aria-label={`${left} and ${right} monogram`}
    >
      <defs>
        <linearGradient id={foilId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b08a47" />
          <stop offset="45%" stopColor="#efd28c" />
          <stop offset="70%" stopColor="#a17a3a" />
          <stop offset="100%" stopColor="#d4af6a" />
        </linearGradient>
        <linearGradient id={dateId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a5418" />
          <stop offset="100%" stopColor="#a8782c" />
        </linearGradient>
      </defs>

      {/* Decorative Circles */}
      <g fill="none" stroke={`url(#${foilId})`} strokeWidth="0.8">
        <circle cx="100" cy="100" r="92" opacity="0.5" />
        <circle cx="100" cy="100" r="86" opacity="0.7" />
      </g>

      {/* Letters */}
      <g fill={`url(#${foilId})`} textAnchor="middle">
        <text
          x="62"
          y="118"
          fontSize="78"
          letterSpacing="-2"
          fontFamily="'Italiana', serif"
        >
          {left}
        </text>
        <text
          x="100"
          y="122"
          fontSize="56"
          fontFamily="'Tangerine', cursive"
          fontStyle="italic"
        >
          &amp;
        </text>
        <text
          x="142"
          y="118"
          fontSize="78"
          letterSpacing="-2"
          fontFamily="'Italiana', serif"
        >
          {right}
        </text>
      </g>

      {/* Date Dividers */}
      <g stroke={`url(#${dateId})`} strokeWidth="0.8">
        <line x1="55" y1="200" x2="92" y2="200" />
        <line x1="108" y1="200" x2="145" y2="200" />
      </g>

      {/* Diamond Accent */}
      <polygon points="100,195 105,200 100,205 95,200" fill={`url(#${dateId})`} />

      {/* Date Text */}
      <text
        x="100"
        y="222"
        textAnchor="middle"
        fill={`url(#${dateId})`}
        fontFamily="'Inter', sans-serif"
        fontSize="14"
        letterSpacing="4"
        fontWeight="700"
      >
        {date}
      </text>
    </svg>
  );
}

