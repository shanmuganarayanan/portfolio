'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/data'

const colorMap: Record<string, { border: string; glow: string; tag: string; icon: string }> = {
  cyan: {
    border: 'hover:border-[#00f5c8]/40',
    glow: 'before:bg-[#00f5c8]',
    tag: 'border-[#00f5c8]/30 text-[#00f5c8]/70',
    icon: 'bg-[#00f5c8]/10 border-[#00f5c8]/20',
  },
  purple: {
    border: 'hover:border-[#7b5ea7]/40',
    glow: 'before:bg-[#7b5ea7]',
    tag: 'border-[#7b5ea7]/40 text-[#b89fd4]',
    icon: 'bg-[#7b5ea7]/10 border-[#7b5ea7]/20',
  },
  orange: {
    border: 'hover:border-[#ff6b35]/40',
    glow: 'before:bg-[#ff6b35]',
    tag: 'border-[#ff6b35]/30 text-[#ff9a70]',
    icon: 'bg-[#ff6b35]/10 border-[#ff6b35]/20',
  },
}

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-24 max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs text-[#00f5c8] tracking-widest">02 —</span>
        <h2 className="font-display text-2xl font-extrabold tracking-tight">Featured Projects</h2>
        <div className="flex-1 h-px bg-[#1a2744]" />
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => {
          const c = colorMap[project.color]
          return (
            <div
              key={project.id}
              className={`
                relative bg-[#0c1428] border border-[#1a2744] p-6 overflow-hidden
                group cursor-pointer transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
                ${c.border}
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Top accent bar */}
              <div
                className={`
                  absolute top-0 left-0 right-0 h-0.5
                  transition-all duration-300
                  ${project.color === 'cyan' ? 'bg-[#00f5c8]' : project.color === 'purple' ? 'bg-[#7b5ea7]' : 'bg-[#ff6b35]'}
                  scale-x-0 group-hover:scale-x-100 origin-left
                `}
              />

              {/* Corner bracket */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#1a2744] group-hover:border-[#00f5c8]/20 transition-colors" />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 border flex items-center justify-center text-xl ${c.icon}`}>
                  {project.icon}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`
                      font-mono text-[10px] px-2 py-0.5 border
                      ${project.status === 'Live'
                        ? 'border-[#00f5c8]/30 text-[#00f5c8]'
                        : 'border-[#1a2744] text-[#6b8099]'
                      }
                    `}
                  >
                    {project.status === 'Live' && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00f5c8] mr-1.5 animate-pulse" />
                    )}
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold mb-1 group-hover:text-[#00f5c8] transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-[11px] text-[#6b8099] mb-3 tracking-wide">{project.subtitle}</p>

              {/* Description */}
              <p className="font-mono text-xs text-[#6b8099] leading-relaxed mb-5 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-mono text-[10px] px-2 py-0.5 border ${c.tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link !== '#' ? (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-[#6b8099] hover:text-[#00f5c8] transition-colors flex items-center gap-1.5 group/link"
                >
                  <span className="w-4 h-px bg-current" />
                  {project.link.replace('https://', '')}
                  <span className="group-hover/link:translate-x-1 transition-transform">↗</span>
                </Link>
              ) : (
                <span className="font-mono text-[11px] text-[#1a2744]">Internal Product</span>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
