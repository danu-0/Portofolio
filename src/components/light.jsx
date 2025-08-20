import LightRays from '../components/Backgrounds/LightRays/LightRays'

export default function Light() {
  return (
    <div
      style={{
        width: '100%',
        height: '600px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* LightRays sebagai background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#5409DA"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={10}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={10}
        distortion={0.05}
        className="absolute inset-0 z-0"
      />

      {/* Konten di atas LightRays */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          May these lights guide you on your path
        </h1>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white text-black rounded">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
