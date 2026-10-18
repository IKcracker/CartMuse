/** An aria-hidden decorative 8-point starburst that renders consistently across fonts and devices. */
export function Starburst({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      focusable="false"
      aria-hidden="true"
    >
      <path d="M50 2L59 37L85 15L64 43L98 50L64 57L85 85L59 63L50 98L41 63L15 85L36 57L2 50L36 43L15 15L41 37Z" />
    </svg>
  );
}
