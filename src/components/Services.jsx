import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { services } from '../data'

export default function Services() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="work" className="border-b border-line-color">
      <div className="max-w-6xl mx-auto">
        {services.map((svc, idx) => (
          <div
            key={svc.id}
            className={`group relative border-b border-line-color overflow-hidden ${hovered === svc.id ? 'bg-accent-teal/5' : ''}`}
            onMouseEnter={() => setHovered(svc.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* floating preview */}
            <motion.img
              src={svc.image}
              alt=""
              className="pointer-events-none hidden md:block absolute top-1/2 left-1/2 w-[320px] h-[420px] -translate-x-1/2 -translate-y-1/2 object-cover border border-line-color shadow-subtle"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={hovered === svc.id ? { opacity: 0.18, scale: 1 } : { opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
            />

            <a href="#" className="block">
              <div className="grid grid-cols-12 items-center min-h-[92px]">
                <div className="col-span-2 md:col-span-2 border-r border-line-color px-6 py-6">
                  <span className="text-xs tracking-[0.3em] uppercase">{svc.id}</span>
                </div>
                <div className="col-span-9 md:col-span-9 border-r border-line-color px-6 py-6">
                  <h4 className="font-serif text-3xl md:text-4xl">{svc.title}</h4>
                </div>
                <div className="col-span-1 md:col-span-1 px-6 py-6 flex items-center justify-end">
                  <ChevronRight className="w-6 h-6 transition-transform duration-300 ease-editorial group-hover:translate-x-1 text-ink" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
