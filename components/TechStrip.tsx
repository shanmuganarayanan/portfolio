'use client'

const techItems = [
  'React JS', '·', 'Next.js 15', '·', 'TypeScript', '·', 'TailwindCSS', '·',
  'Node.js', '·', 'Express', '·', 'Figma', '·', 'Adobe XD', '·',
  'Agentic AI', '·', 'MCP Tools', '·', 'Python', '·', 'Go', '·',
  'Material UI', '·', 'Recharts', '·', 'REST APIs', '·', 'AI Integrations', '·',
]

export default function TechStrip() {
  return (
    <div className="border-y border-[#1a2744] bg-[#040812]/50 py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...techItems, ...techItems].map((item, i) => (
          <span
            key={i}
            className={`font-mono text-xs px-3 ${
              item === '·' ? 'text-[#1a2744]' : 'text-[#6b8099] hover:text-[#00f5c8] transition-colors'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
