'use client'

import { useRef, useEffect, useState } from 'react'
import { skills } from '@/lib/data'

const allSkills = [
  { label: 'Agentic AI Dev', cat: 'ai' },
  { label: 'AI Integrations', cat: 'ai' },
  { label: 'MCP Tools', cat: 'ai' },
  { label: 'React JS', cat: 'frontend' },
  { label: 'Next JS', cat: 'frontend' },
  { label: 'TailwindCSS', cat: 'frontend' },
  { label: 'Material UI', cat: 'frontend' },
  { label: 'Recharts', cat: 'frontend' },
  { label: 'Node.js', cat: 'backend' },
  { label: 'Express', cat: 'backend' },
  { label: 'Python', cat: 'backend' },
  { label: 'Go', cat: 'backend' },
  { label: 'Figma', cat: 'design' },
  { label: 'Adobe XD', cat: 'design' },
  { label: 'HTML / CSS', cat: 'design' },
]

const catStyles: Record<string, string> = {
  ai: 'border-[#7b5ea7]/50 text-[#b89fd4] bg-[#7b5ea7]/08',
  frontend: 'border-[#00f5c8]/40 text-[#00f5c8] bg-[#00f5c8]/05',
  backend: 'border-[#1a2744] text-[#6b8099]',
  design: 'border-[#ff6b35]/40 text-[#ff9a70] bg-[#ff6b35]/05',
}

const catLabel: Record<string, string> = {
  ai: 'AI & Agents',
  frontend: 'Frontend',
  backend: 'Backend',
  design: 'Design',
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-24 max-w-6xl mx-auto px-6">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs text-[#00f5c8] tracking-widest">01 —</span>
        <h2 className="font-display text-2xl font-extrabold tracking-tight">Skills & Stack</h2>
        <div className="flex-1 h-px bg-[#1a2744]" />
      </div>

      {/* Category legend */}
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.entries(catLabel).map(([key, label]) => (
          <div key={key} className="flex items-center gap-2">
            <span className={`px-2 py-0.5 border font-mono text-[10px] tracking-widest ${catStyles[key]}`}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Skills grid */}
      <div className="flex flex-wrap gap-2">
        {allSkills.map((skill, i) => (
          <span
            key={skill.label}
            className={`
              px-4 py-2 border font-mono text-xs tracking-wide
              hover:-translate-y-1 hover:shadow-lg cursor-default
              transition-all duration-200
              ${catStyles[skill.cat]}
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {skill.label}
          </span>
        ))}
      </div>

      {/* Proficiency bars */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { label: 'React / Next.js', pct: 95, color: '#00f5c8' },
          { label: 'UI/UX Design (Figma)', pct: 88, color: '#ff6b35' },
          { label: 'Agentic AI / MCP', pct: 85, color: '#7b5ea7' },
          { label: 'Node / Express', pct: 80, color: '#00f5c8' },
          { label: 'TailwindCSS', pct: 95, color: '#00f5c8' },
          { label: 'Python / Go', pct: 72, color: '#b89fd4' },
        ].map((bar, i) => (
          <div key={bar.label}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-xs text-[#6b8099]">{bar.label}</span>
              <span className="font-mono text-xs text-[#6b8099]">{bar.pct}%</span>
            </div>
            <div className="h-1 bg-[#1a2744] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: visible ? `${bar.pct}%` : '0%',
                  background: bar.color,
                  transitionDelay: `${i * 100 + 300}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
