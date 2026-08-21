import React from 'react';

export default function IsoLogo(props) {
  return (
    <svg
      viewBox="0 0 200 200"
      width="1em"
      height="1em"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Helper paths for curved text */}
      <defs>
        {/* Top curve: clockwise from 9 o'clock to 3 o'clock */}
        <path
          id="iso-top-curve"
          d="M 24 100 A 76 76 0 0 1 176 100"
          fill="none"
        />
        {/* Bottom curve: counter-clockwise from 9 o'clock to 3 o'clock to keep text tops pointing outwards */}
        <path
          id="iso-bottom-curve"
          d="M 24 100 A 76 76 0 0 0 176 100"
          fill="none"
        />
      </defs>

      {/* Outer thin ring */}
      <circle
        cx="100"
        cy="100"
        r="93"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
      />

      {/* Curved Text - CERTIFIED */}
      <text
        fontFamily="var(--font-primary), 'Poppins', sans-serif"
        fontSize="18"
        fontWeight="800"
        fill="currentColor"
        letterSpacing="3.5"
      >
        <textPath href="#iso-top-curve" startOffset="50%" textAnchor="middle">
          CERTIFIED
        </textPath>
      </text>

      {/* Inner filled circle */}
      <circle
        cx="100"
        cy="100"
        r="60"
        fill="currentColor"
      />

      {/* Center text - ISO */}
      <text
        x="100"
        y="95"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="44"
        fontWeight="bold"
        fill="#ffffff"
        textAnchor="middle"
      >
        ISO
      </text>

      {/* Center text - 9001:2015 */}
      <text
        x="100"
        y="126"
        fontFamily="var(--font-primary), 'Poppins', sans-serif"
        fontSize="16"
        fontWeight="800"
        fill="#ffffff"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        9001:2015
      </text>

      {/* Curved Text - COMPANY */}
      <text
        fontFamily="var(--font-primary), 'Poppins', sans-serif"
        fontSize="18"
        fontWeight="800"
        fill="currentColor"
        letterSpacing="3.5"
      >
        <textPath href="#iso-bottom-curve" startOffset="50%" textAnchor="middle">
          COMPANY
        </textPath>
      </text>
    </svg>
  );
}
