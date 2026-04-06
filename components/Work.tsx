'use client'

import { useRef, useEffect, useState } from 'react'
import { work } from '@/lib/data'

export default function Work() {
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
    <section id="work" ref={ref} className="py-24 max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs text-[#00f5c8] tracking-widest">03 —</span>
        <h2 className="font-display text-2xl font-extrabold tracking-tight">What I've Built</h2>
        <div className="flex-1 h-px bg-[#1a2744]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {work.map((item, i) => (
          <div
            key={item.title}
            className={`
              group flex items-center gap-4 bg-[#0c1428] border border-[#1a2744]
              px-5 py-4 hover:border-[#00f5c8]/30 hover:-translate-y-0.5
              transition-all duration-200 cursor-default
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="text-2xl w-10 flex-shrink-0 flex items-center justify-center">{item.icon}</div>
            <div className="flex-1">
              <div className="font-bold text-sm group-hover:text-[#00f5c8] transition-colors">{item.title}</div>
              <div className="font-mono text-[10px] text-[#00f5c8]/60 mt-0.5 tracking-widest">{item.tech}</div>
              <div className="font-mono text-[11px] text-[#6b8099] mt-0.5">{item.desc}</div>
            </div>
            <div className="text-[#1a2744] group-hover:text-[#00f5c8]/40 transition-colors text-lg">→</div>
          </div>
        ))}
      </div>

      {/* Terminal block */}
      <div className="mt-10 bg-[#040812] border border-[#1a2744] rounded-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a2744] bg-[#080f1e]">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="font-mono text-[10px] text-[#6b8099] ml-2">~/shanmuga/builds</span>
        </div>
        <div className="p-5 font-mono text-xs space-y-2">
          <div>
            <span className="text-[#00f5c8]">$</span>
            <span className="text-[#6b8099]"> ls -la ./projects</span>
          </div>
          <div className="text-[#6b8099] pl-4 space-y-1">
            <div><span className="text-[#00f5c8]">drwxr-xr-x</span> 01cloud/ <span className="text-[#7b5ea7]"># Next.js cloud console</span></div>
            <div><span className="text-[#00f5c8]">drwxr-xr-x</span> 01security/ <span className="text-[#7b5ea7]"># AI security manager</span></div>
            <div><span className="text-[#00f5c8]">drwxr-xr-x</span> itam-tool/ <span className="text-[#7b5ea7]"># Enterprise ITAM</span></div>
            <div><span className="text-[#ff6b35]">-rw-r--r--</span> api-gateway.go <span className="text-[#7b5ea7]"># Go API gateway</span></div>
            <div><span className="text-[#ff6b35]">-rw-r--r--</span> mcp-server.go <span className="text-[#7b5ea7]"># MCP tooling</span></div>
            <div><span className="text-[#ff6b35]">-rw-r--r--</span> scanner.py <span className="text-[#7b5ea7]"># Network scanner</span></div>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#00f5c8]">$</span>
            <span className="cursor-blink text-[#00f5c8]">_</span>
          </div>
        </div>
      </div>
    </section>
  )
}
