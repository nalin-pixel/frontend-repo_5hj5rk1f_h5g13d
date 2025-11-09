export default function Projects() {
  const projects = [
    {
      title: 'Ares-1 Autonomous Rover',
      desc: 'Rugged UGV with LiDAR-based SLAM, real-time mapping, and autonomous path planning for industrial inspection.',
      tags: ['ROS2', 'LiDAR', 'Jetson'],
      link: '#',
    },
    {
      title: 'Orion 6-DOF Manipulator',
      desc: 'High-precision robotic arm with torque sensing and visual servoing for micro-assembly tasks.',
      tags: ['C++', 'MoveIt', 'OpenCV'],
      link: '#',
    },
    {
      title: 'Falcon UAV Platform',
      desc: 'VTOL drone with PX4 autopilot, onboard AI for target tracking, and robust telemetry.',
      tags: ['PX4', 'Python', 'TensorRT'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="relative bg-[#0b0b0c]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.06),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Projects</h2>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full border border-white/20 text-white px-4 py-2 hover:bg-white/5">Get in touch</a>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
              <div className="aspect-[16/10] bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_center,rgba(245,197,24,0.15),transparent_60%)]" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-black/60 border border-white/10 text-white/80 px-2 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
