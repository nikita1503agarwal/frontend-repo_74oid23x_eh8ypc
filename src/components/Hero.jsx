import { motion } from 'framer-motion'
import { hero } from '../data'
import { staggerContainer, textReveal, drawLine, imageReveal, fadeIn } from '../animations'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] border-b border-line-color">
      {/* Vertical center line */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-px bg-line-color origin-top"
        variants={drawLine({ duration: 1, delay: 0.2 })}
        initial="hidden"
        animate="show"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left - Text */}
        <div className="relative flex flex-col justify-center px-6 sm:px-12 py-20 lg:py-28">
          <div className="space-y-6 max-w-xl">
            <motion.span
              className="text-xs uppercase tracking-[0.3em] text-accent-teal"
              variants={fadeIn({ y: 10, duration: 0.6, delay: 0.5 })}
              initial="hidden"
              animate="show"
            >
              {hero.eyebrow}
            </motion.span>

            <motion.div variants={staggerContainer(0.12, 0.6)} initial="hidden" animate="show" className="space-y-2">
              <div className="reveal-parent">
                <motion.h1 variants={textReveal()} className="font-serif text-6xl sm:text-7xl md:text-8xl leading-[0.9]">
                  {hero.titleBlock[0]}
                </motion.h1>
              </div>
              <div className="reveal-parent">
                <motion.h2 variants={textReveal({ delay: 0.05 })} className="font-serif italic text-5xl sm:text-6xl md:text-7xl text-ink/80 ml-6">
                  {hero.titleBlock[1]}
                </motion.h2>
              </div>
            </motion.div>

            <motion.p
              variants={fadeIn({ y: 12, duration: 0.8, delay: 0.9 })}
              initial="hidden"
              animate="show"
              className="text-sm leading-relaxed max-w-md"
            >
              {hero.description}
            </motion.p>

            <motion.div variants={fadeIn({ y: 14, duration: 0.8, delay: 1.0 })} initial="hidden" animate="show">
              <a
                href={hero.cta.href}
                className="inline-flex items-center px-6 py-3 rounded-full bg-accent-gold text-paper tracking-widest uppercase text-xs hover:opacity-90 transition"
              >
                {hero.cta.label}
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative border-l border-line-color min-h-[60vh] lg:min-h-[90vh]">
          <div className="absolute inset-6 border border-line-color">
            <motion.img
              src={hero.image}
              alt="Portrait of Magdalena"
              className="w-full h-full object-cover"
              variants={imageReveal({ delay: 0.6 })}
              initial="hidden"
              animate="show"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
