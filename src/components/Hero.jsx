import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-20 overflow-hidden bg-[#0b0b0c]">
      <div className="absolute inset-0">
        {/* soft radial glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12),transparent_60%)] pointer-events-none" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="py-16 lg:py-24">
          <p className="text-amber-300/90 tracking-[.35em] uppercase text-xs mb-4">Robotic Engineer</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
            Futuristic Robotics &
            <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent"> AI Systems</span>
          </h1>
          <p className="mt-6 text-white/70 max-w-xl">
            I design, prototype, and deploy intelligent robotic solutions with a minimalist aesthetic and precision engineering.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold px-5 py-2.5 shadow-[0_0_25px_rgba(245,197,24,0.30)] hover:shadow-[0_0_35px_rgba(245,197,24,0.45)] transition-shadow">View Work</a>
            <a href="#contact" className="rounded-full border border-white/20 text-white px-5 py-2.5 hover:bg-white/5 transition-colors">Contact</a>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
          {/* 3D Spline scene */}
          <Spline
            scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* subtle overlay gradient to blend with background. pointer-events-none so it won't block 3D */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
