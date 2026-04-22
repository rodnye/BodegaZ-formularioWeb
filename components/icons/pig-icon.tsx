export function PigIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Cuerpo del cerdo */}
      <ellipse cx="12" cy="13" rx="8" ry="6" />
      {/* Cabeza */}
      <circle cx="18" cy="10" r="3" />
      {/* Hocico */}
      <ellipse cx="20" cy="10" rx="1.5" ry="1" />
      <circle cx="19.5" cy="9.5" r="0.3" fill="currentColor" />
      <circle cx="20.5" cy="9.5" r="0.3" fill="currentColor" />
      {/* Ojo */}
      <circle cx="17" cy="9" r="0.5" fill="currentColor" />
      {/* Oreja */}
      <path d="M16 7 L15 5 L17 6" />
      {/* Cola */}
      <path d="M4 12 Q2 10 3 8" />
      {/* Patas */}
      <line x1="8" y1="18" x2="8" y2="21" />
      <line x1="11" y1="18" x2="11" y2="21" />
      <line x1="13" y1="18" x2="13" y2="21" />
      <line x1="16" y1="17" x2="16" y2="20" />
    </svg>
  )
}
