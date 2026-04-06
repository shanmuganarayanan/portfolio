'use client'

import { useState } from 'react'
import { personalInfo } from '@/lib/data'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs text-[#00f5c8] tracking-widest">04 —</span>
        <h2 className="font-display text-2xl font-extrabold tracking-tight">Get In Touch</h2>
        <div className="flex-1 h-px bg-[#1a2744]" />
      </div>

      {/* Contact box */}
      <div className="relative bg-[#0c1428] border border-[#1a2744] p-8 sm:p-12 overflow-hidden glow-border">
        {/* Left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00f5c8] via-[#7b5ea7] to-transparent" />

        {/* Corner decorations */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#00f5c8]/20" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#7b5ea7]/20" />

        {/* Background glow */}
        <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-[#7b5ea7]/5 blur-[80px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              Let's build something{' '}
              <span className="gradient-text">great</span>{' '}
              together
            </h3>
            <p className="font-mono text-xs text-[#6b8099] leading-relaxed mb-6">
              Open for{' '}
              <span className="text-[#00f5c8]">Frontend roles</span>,{' '}
              <span className="text-[#b89fd4]">AI integration projects</span>, and{' '}
              <span className="text-[#ff9a70]">UI/UX design</span>{' '}
              collaborations. Based in India · Available remotely.
            </p>

            {/* Availability chips */}
            <div className="flex flex-wrap gap-2">
              {['Full-time roles', 'Freelance', 'AI product design', 'Consulting'].map((chip) => (
                <span
                  key={chip}
                  className="font-mono text-[10px] px-3 py-1.5 border border-[#1a2744] text-[#6b8099] hover:border-[#00f5c8]/40 hover:text-[#00f5c8] transition-colors cursor-default"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <button
              onClick={copyEmail}
              className="group flex items-center gap-4 bg-[#040812] border border-[#1a2744] hover:border-[#00f5c8]/40 px-5 py-4 text-left transition-all duration-200 hover:translate-x-1"
            >
              <div className="w-9 h-9 bg-[#00f5c8]/10 border border-[#00f5c8]/20 flex items-center justify-center text-sm flex-shrink-0">
                📧
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] text-[#6b8099] uppercase tracking-widest">Email</div>
                <div className="text-sm font-bold mt-0.5">{personalInfo.email}</div>
              </div>
              <span className="font-mono text-[10px] text-[#00f5c8] opacity-0 group-hover:opacity-100 transition-opacity">
                {copied ? 'Copied!' : 'Copy →'}
              </span>
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#040812] border border-[#1a2744] hover:border-[#7b5ea7]/40 px-5 py-4 transition-all duration-200 hover:translate-x-1"
            >
              <div className="w-9 h-9 bg-[#7b5ea7]/10 border border-[#7b5ea7]/20 flex items-center justify-center text-sm flex-shrink-0">
                ⌨
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] text-[#6b8099] uppercase tracking-widest">GitHub</div>
                <div className="text-sm font-bold mt-0.5">github.com/shanmuganarayanan</div>
              </div>
              <span className="font-mono text-[10px] text-[#b89fd4] opacity-0 group-hover:opacity-100 transition-opacity">Visit ↗</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#040812] border border-[#1a2744] hover:border-[#ff6b35]/40 px-5 py-4 transition-all duration-200 hover:translate-x-1"
            >
              <div className="w-9 h-9 bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center text-sm flex-shrink-0">
                💼
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] text-[#6b8099] uppercase tracking-widest">LinkedIn</div>
                <div className="text-sm font-bold mt-0.5">linkedin.com/in/yourprofile</div>
              </div>
              <span className="font-mono text-[10px] text-[#ff9a70] opacity-0 group-hover:opacity-100 transition-opacity">Connect ↗</span>
            </a>

            <a
              href="https://console.01cloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#040812] border border-[#1a2744] hover:border-[#00f5c8]/40 px-5 py-4 transition-all duration-200 hover:translate-x-1"
            >
              <div className="w-9 h-9 bg-[#00f5c8]/10 border border-[#00f5c8]/20 flex items-center justify-center text-sm flex-shrink-0">
                🌐
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] text-[#6b8099] uppercase tracking-widest">Live Product</div>
                <div className="text-sm font-bold mt-0.5">console.01cloud.com</div>
              </div>
              <span className="font-mono text-[10px] text-[#00f5c8] opacity-0 group-hover:opacity-100 transition-opacity">Visit ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
