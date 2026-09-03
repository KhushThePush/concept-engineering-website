/**
 * The remaining hand-authored icons: UI affordances and contact glyphs.
 * 1.5px strokes, `currentColor`, decorative unless given a title by the caller.
 */
function Base({
  children,
  size = 20,
  className = '',
}: {
  children: React.ReactNode;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: { size?: number; className?: string }) {
  return (
    <Base {...props}>
      <path d="M4 12 H20" />
      <path d="M14 6 L20 12 L14 18" />
    </Base>
  );
}

export function Phone(props: { size?: number; className?: string }) {
  return (
    <Base {...props}>
      <path d="M5 3 H9 L11 8 L8.5 9.5 a10 10 0 0 0 5 5 L15 12 L20 14 V18 a2 2 0 0 1 -2 2 A16 16 0 0 1 3 5 a2 2 0 0 1 2 -2 Z" />
    </Base>
  );
}

export function Mail(props: { size?: number; className?: string }) {
  return (
    <Base {...props}>
      <path d="M3 6 H21 V18 H3 Z" />
      <path d="M3 7 L12 13.5 L21 7" />
    </Base>
  );
}

export function Pin(props: { size?: number; className?: string }) {
  return (
    <Base {...props}>
      <path d="M12 21 s7 -7.2 7 -12 a7 7 0 1 0 -14 0 c0 4.8 7 12 7 12 Z" />
      <circle cx="12" cy="9" r="2.5" />
    </Base>
  );
}

export function Menu(props: { size?: number; className?: string }) {
  return (
    <Base {...props}>
      <path d="M3 6 H21" />
      <path d="M3 12 H21" />
      <path d="M3 18 H21" />
    </Base>
  );
}

export function Close(props: { size?: number; className?: string }) {
  return (
    <Base {...props}>
      <path d="M5 5 L19 19" />
      <path d="M19 5 L5 19" />
    </Base>
  );
}
