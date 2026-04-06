import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#1a2744] py-8 max-w-6xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-[#00f5c8] flex items-center justify-center text-black font-bold text-[9px] font-mono">
            SN
          </div>
          <span className="font-mono text-xs text-[#6b8099]">
            Shanmuganarayanan · Frontend Engineer & AI Developer
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#projects" className="font-mono text-[10px] text-[#6b8099] hover:text-[#00f5c8] transition-colors uppercase tracking-widest">
            Projects
          </Link>
          <Link href="#skills" className="font-mono text-[10px] text-[#6b8099] hover:text-[#00f5c8] transition-colors uppercase tracking-widest">
            Skills
          </Link>
          <Link href="#contact" className="font-mono text-[10px] text-[#6b8099] hover:text-[#00f5c8] transition-colors uppercase tracking-widest">
            Contact
          </Link>
        </div>
        <span className="font-mono text-[10px] text-[#1a2744]">
          // Built with Next.js 15 · 2025
        </span>
      </div>
    </footer>
  )
}
