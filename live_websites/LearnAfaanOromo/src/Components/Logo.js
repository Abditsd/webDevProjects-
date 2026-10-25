import React, { useId } from 'react';
import '../assets/css/Logo.css';

// Speech-bubble mark with a stylised "A"; drawn inline so it stays crisp at any size
export const LogoMark = ({ size = 44 }) => {
  // useId output can contain characters that break url(#id) references
  const gradientId = `logo-grad-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff9a3d" />
          <stop offset="1" stopColor="#f25c05" />
        </linearGradient>
      </defs>
      <path
        d="M14 3h20a11 11 0 0 1 11 11v13a11 11 0 0 1-11 11H19l-8.5 7.2a1 1 0 0 1-1.6-.8V37.6A11 11 0 0 1 3 27V14A11 11 0 0 1 14 3z"
        fill={`url(#${gradientId})`}
      />
      <path
        d="M15.5 30 24 11l8.5 19M18.6 23.5h10.8"
        fill="none"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Logo = ({ variant = 'dark' }) => (
  <span className={`logo-lockup logo-${variant}`}>
    <LogoMark />
    <span className="logo-text">
      <span className="logo-name">Afaan <span>Oromo</span></span>
      <span className="logo-tag">with Abdullah</span>
    </span>
  </span>
);

export default Logo;
