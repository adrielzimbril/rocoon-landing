interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 28 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Oleap logo"
    >
      <rect width="32" height="32" rx="8" fill="#191b22" />
      <circle cx="16" cy="16" r="7" stroke="white" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="3" fill="#4b56ab" />
      <line
        x1="16"
        y1="5"
        x2="16"
        y2="9"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="23"
        x2="16"
        y2="27"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="16"
        x2="9"
        y2="16"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="23"
        y1="16"
        x2="27"
        y2="16"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
