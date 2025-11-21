import { motion } from 'framer-motion'
import { intro } from '../data'
import { fadeIn, staggerContainer, textReveal } from '../animations'

export default function Intro() {
  return (
    <section id="about" className="border-b border-line-color">
      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[70vh]">
        {/* Column 1 */}
        <div className="border-r border-line-color flex flex-col justify-end px-6 py-12">
          <motion.p
            className="text-xs uppercase tracking-[0.25em] text-ink/60"
            variants={fadeIn({ y: 10, duration: 0.6 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {intro.quote}
          </motion.p>
        </div>

        {/* Column 2 - Image */}
        <div className="border-r border-line-color px-6 py-12">
          <div className="max-w-md mx-auto">
            <div className="overflow-hidden rounded-t-full border border-line-color">
              <motion.img
                src={intro.image}
                alt="Magdalena"
                className="w-full h-[540px] object-cover"
                initial={{ opacity: 0, scale: 1.08 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, ease: [0.22,1,0.36,1] }}
                viewport={{ once: true, amount: 0.4 }}
              />
            </div>
          </div>
        </div>

        {/* Column 3 - Text */}
        <div className="px-6 py-12 flex items-center">
          <div>
            <div className="reveal-parent">
              <motion.h3
                className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6"
                variants={textReveal()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                {intro.headline}
              </motion.h3>
            </div>
            <motion.p
              className="text-sm leading-relaxed max-w-sm"
              variants={fadeIn({ y: 10, duration: 0.7, delay: 0.2 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              {intro.copy}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
