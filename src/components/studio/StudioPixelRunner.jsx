export default function StudioPixelRunner() {
  return (
    <div className="w-full h-3 bg-on-background flex overflow-hidden">
      <div className="w-full flex">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex">
            <span className="w-4 h-full bg-secondary-fixed"></span>
            <span className="w-4 h-full bg-primary-container"></span>
            <span className="w-4 h-full bg-secondary-fixed"></span>
            <span className="w-4 h-full bg-on-background"></span>
          </div>
        ))}
      </div>
    </div>
  )
}
