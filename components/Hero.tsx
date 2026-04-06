'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { personalInfo, stats } from '@/lib/data'

const roles = [
  'Frontend Engineer',
  'AI Developer',
  'UI/UX Designer',
  'Next.js Expert',
  'MCP Builder',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00f5c8]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#7b5ea7]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">

          {/* Left — Text */}
          <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#00f5c8]" />
              <span className="font-mono text-xs text-[#00f5c8] tracking-widest uppercase">
                Open to opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.02] tracking-tight mb-4">
              <span className="text-[#e8f4f8]">Hi, I'm</span>
              <br />
              <span className="text-[#00f5c8]">Shanmuga</span>
            </h1>

            {/* Typewriter role */}
            <div className="font-mono text-lg sm:text-xl text-[#6b8099] mb-6 h-8 flex items-center">
              <span className="text-[#ff6b35]">&gt;</span>
              <span className="ml-2 text-[#e8f4f8]">{displayed}</span>
              <span className="cursor-blink ml-0.5 text-[#00f5c8]">_</span>
            </div>

            {/* Bio */}
            <p className="font-mono text-sm text-[#6b8099] leading-relaxed mb-8 max-w-lg">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                href="#projects"
                className="btn-clip bg-[#00f5c8] text-black font-bold text-sm px-7 py-3 hover:bg-[#00e0b8] transition-all duration-200 hover:-translate-y-0.5"
              >
                View Projects →
              </Link>
              <Link
                href="#contact"
                className="btn-clip bg-transparent text-[#e8f4f8] font-bold text-sm px-7 py-3 border border-[#1a2744] hover:border-[#00f5c8] hover:text-[#00f5c8] transition-all duration-200"
              >
                Let's Talk
              </Link>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-clip bg-transparent text-[#6b8099] font-bold text-sm px-7 py-3 border border-[#1a2744] hover:border-[#7b5ea7] hover:text-[#b89fd4] transition-all duration-200"
              >
                GitHub ↗
              </a>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Node', 'Figma', 'AI/MCP', 'TailwindCSS'].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 border border-[#1a2744] text-[#6b8099] hover:border-[#00f5c8]/40 hover:text-[#00f5c8] transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Floating UI Cards */}
          <div
            className={`relative h-[420px] hidden lg:block transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            {/* Main card — 01Cloud */}
            <div className="absolute top-10 right-0 w-72 bg-gradient-to-br from-[#0c1428] to-[#0a1a3a] border border-[#1a2744] rounded-sm p-5 float shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#00f5c8] animate-pulse" />
                <span className="font-mono text-[10px] text-[#6b8099] uppercase tracking-widest">Live Product</span>
              </div>
              <div className="text-xs font-mono text-[#6b8099] mb-1">console.01cloud.com</div>
              <div className="text-lg font-bold text-[#e8f4f8]">01Cloud Console</div>
              <div className="text-xs text-[#6b8099] mt-1">Cloud Infrastructure Platform</div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {['Compute', 'Storage', 'Network'].map((item) => (
                  <div key={item} className="bg-[#00f5c8]/5 border border-[#00f5c8]/10 rounded px-2 py-1.5 text-center">
                    <div className="text-[10px] text-[#00f5c8]/60 font-mono">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security alert card */}
            <div className="absolute top-[-36px] left-0 w-52 bg-[#0c1428] border border-[#7b5ea7]/30 rounded-sm p-4 shadow-xl" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm">🔐</span>
                <span className="font-mono text-[10px] text-[#b89fd4]">ALERT</span>
              </div>
              <div className="text-xs font-bold text-[#e8f4f8]">Threat Detected</div>
              <div className="text-[10px] text-[#6b8099] mt-1">01Security · AI Analysis</div>
              <div className="mt-3 h-1 bg-[#7b5ea7]/20 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-[#7b5ea7] rounded-full animate-pulse" />
              </div>
            </div>

            {/* Stats card */}
            <div className="absolute bottom-12 left-8 w-44 bg-[#040812] border border-[#1a2744] rounded-sm p-4 shadow-xl">
              <div className="font-mono text-[10px] text-[#6b8099] uppercase tracking-widest mb-2">Assets Tracked</div>
              <div className="text-3xl font-bold text-[#e8f4f8] font-display">2,847</div>
              <div className="font-mono text-[10px] text-[#00f5c8] mt-1">↑ 12.4% this month</div>
            </div>

            {/* MCP badge */}
            <div className="absolute bottom-0 right-8 bg-[#7b5ea7]/10 border border-[#7b5ea7]/30 rounded-sm px-4 py-2 shadow-xl">
              <div className="font-mono text-[10px] text-[#b89fd4]">MCP · Agentic AI</div>
            </div>

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#00f5c8]/20" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#7b5ea7]/20" />
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border border-[#1a2744] divide-x divide-y sm:divide-y-0 divide-[#1a2744] mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-5 text-center bg-[#040812]/50 hover:bg-[#080f1e] transition-colors">
              <div className="font-display text-3xl font-extrabold text-[#00f5c8]">{stat.num}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#6b8099] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
