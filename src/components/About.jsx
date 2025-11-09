export default function About() {
  const stats = [
    { label: 'Years Experience', value: '6+' },
    { label: 'Projects Delivered', value: '30+' },
    { label: 'Patents/Publ.', value: '5' },
  ]

  return (
    <section id="about" className="relative bg-[#0b0b0c]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
            <p className="mt-4 text-white/70">
              I craft robotic platforms from concept to deployment — mechatronics, embedded systems, and control software. My design language blends
              minimalism with performance, emphasizing reliability and aesthetic clarity.
            </p>
            <ul className="mt-8 space-y-3 text-white/80">
              <li>• Autonomous navigation and SLAM</li>
              <li>• Robotic arms and precision manipulators</li>
              <li>• Computer vision and AI integration</li>
              <li>• Rapid prototyping and field testing</li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center">
                  <div className="text-3xl font-bold text-amber-300">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6">
              <h3 className="text-white font-semibold">Core Stack</h3>
              <p className="mt-2 text-white/70 text-sm">
                ROS2, PX4, STM32, NVIDIA Jetson, Python, C++, OpenCV, TensorRT, Fusion 360, KiCad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
