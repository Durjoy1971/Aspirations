export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading content"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 py-16"
    >
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-amber-500"
        aria-hidden="true"
      />
      <p className="text-base font-medium text-gray-600">Loading content...</p>
      <span className="sr-only">Loading content...</span>
    </div>
  );
}
