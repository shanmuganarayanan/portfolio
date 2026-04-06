'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { personalInfo } from '@/lib/data'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#040812]/90 backdrop-blur-xl border-b border-[#1a2744]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#00f5c8] flex items-center justify-center text-black font-bold text-xs font-mono">
            SN
          </div>
          <span className="font-mono text-sm text-[#00f5c8] tracking-widest hidden sm:block">
            // PORTFOLIO
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-[#6b8099] hover:text-[#00f5c8] uppercase tracking-widest transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Status */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-[#6b8099]">
            <span className="w-2 h-2 rounded-full bg-[#00f5c8] animate-pulse" />
            Available
          </div>
          <Link
            href="#contact"
            className="btn-clip bg-[#00f5c8] text-black font-bold text-xs px-5 py-2 hover:bg-[#00e0b8] transition-colors"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#6b8099] hover:text-[#00f5c8] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080f1e] border-t border-[#1a2744] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#6b8099] hover:text-[#00f5c8] uppercase tracking-widest transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-clip bg-[#00f5c8] text-black font-bold text-xs px-5 py-2 text-center hover:bg-[#00e0b8] transition-colors"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  )
}
