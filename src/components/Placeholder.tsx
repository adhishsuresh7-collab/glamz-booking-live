export function Placeholder({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-neutral-900 via-neutral-800 to-black ${className}`}
    >
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_30%_20%,oklch(0.85_0.1_85_/_0.18),transparent_60%),radial-gradient(circle_at_80%_80%,oklch(0.92_0.04_20_/_0.15),transparent_60%)]" />
      {label && (
        <span className="relative z-10 font-display text-xs uppercase tracking-[0.4em] text-white/60">
          {label}
        </span>
      )}
    </div>
  );
}