export default function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-[60vh] bg-linen flex flex-col items-center justify-center gap-4 px-6"
    >
      <div className="w-8 h-[1px] bg-bronze animate-pulse" aria-hidden="true" />
      <span className="font-serif text-lg tracking-[0.14em] text-charcoal">
        AURELIA INTERIORS
      </span>
      <span className="text-[11px] uppercase tracking-[0.22em] text-taupe">
        Loading Studio Page…
      </span>
    </div>
  )
}
