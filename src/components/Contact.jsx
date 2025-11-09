import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sent! I will get back to you shortly.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative bg-[#0b0b0c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build the future</h2>
            <p className="mt-3 text-white/70">Have a project in robotics or intelligent systems? I’m available for collaboration and consulting.</p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-white/80">Email</div>
              <a href="mailto:hello@robofolio.dev" className="text-amber-300">hello@robofolio.dev</a>
              <div className="mt-4 text-white/80">Location</div>
              <div className="text-white/60">Remote • Worldwide</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Name</label>
                <input required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input type="email" required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/70 mb-1">Message</label>
              <textarea required rows={4} className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/50" placeholder="Tell me about your project" />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button className="rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold px-5 py-2.5">Send Message</button>
              {status && <span className="text-amber-300 text-sm">{status}</span>}
            </div>
          </form>
        </div>
        <footer className="mt-16 flex items-center justify-between text-white/50 text-sm">
          <div>© {new Date().getFullYear()} RoboFolio</div>
          <div className="space-x-4">
            <a href="#home" className="hover:text-white">Top</a>
            <a href="#projects" className="hover:text-white">Projects</a>
          </div>
        </footer>
      </div>
    </section>
  )
}
