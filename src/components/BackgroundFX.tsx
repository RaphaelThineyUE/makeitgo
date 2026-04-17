// Fixed, full-viewport background: subtle grid, amber glow orbs, and noise.
// Kept CSS-only (no canvas) so it's cheap on mobile and doesn't block the main thread.

export default function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-grid-fade" />
      {/* Amber orb top-left */}
      <div
        className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full blur-3xl animate-float-slow"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,176,32,0.22), rgba(255,138,28,0.05) 50%, transparent 70%)",
        }}
      />
      {/* Orange orb bottom-right */}
      <div
        className="absolute -bottom-40 -right-24 h-[620px] w-[620px] rounded-full blur-3xl animate-float-slow"
        style={{
          animationDelay: "2s",
          background:
            "radial-gradient(circle at 70% 70%, rgba(255,95,19,0.18), rgba(255,138,28,0.04) 45%, transparent 70%)",
        }}
      />
      {/* Scanline / vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
