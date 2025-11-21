import { motion } from 'framer-motion'
import { nav } from '../data'

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-line-color">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 items-center h-20">
          <div className="flex items-center gap-6 px-6">
            {nav.left.map((item) => (
              <a key={item.label} href={item.href} className="text-sm tracking-widest uppercase hover:text-accent-teal transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="inline-block align-middle">
              <span className="font-serif text-2xl">{nav.brand}</span>
            </a>
          </div>
          <div className="flex items-center justify-end gap-6 px-6">
            {nav.right.map((item) => (
              <a key={item.label} href={item.href} className="text-sm tracking-widest uppercase hover:text-accent-teal transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
