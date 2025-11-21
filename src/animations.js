// Reusable Framer Motion variants tailored for Editorial Minimalist interactions
export const staggerContainer = (stagger = 0.08, delayChildren = 0.1) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const fadeIn = ({ y = 20, opacity = 0, duration = 0.8, delay = 0, ease = 'easeOut' } = {}) => ({
  hidden: { opacity, y },
  show: { opacity: 1, y: 0, transition: { duration, delay, ease } },
});

export const textReveal = ({ duration = 0.9, delay = 0, ease = [0.22, 1, 0.36, 1] } = {}) => ({
  hidden: { y: '100%' },
  show: { y: '0%', transition: { duration, delay, ease } },
});

export const drawLine = ({ duration = 1, delay = 0, ease = [0.22, 1, 0.36, 1] } = {}) => ({
  hidden: { scaleY: 0, transformOrigin: 'top center' },
  show: { scaleY: 1, transformOrigin: 'top center', transition: { duration, delay, ease } },
});

export const imageReveal = ({ duration = 1.2, delay = 0.1, ease = [0.22, 1, 0.36, 1] } = {}) => ({
  hidden: { opacity: 0, scale: 1.1 },
  show: { opacity: 1, scale: 1.0, transition: { duration, delay, ease } },
});
