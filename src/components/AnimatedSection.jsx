import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * AnimatedSection – wraps children in a scroll-triggered reveal animation.
 * @param {string} variant - 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn'
 * @param {number} delay - animation delay in seconds
 * @param {string} className - additional class names
 */
const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
}

export default function AnimatedSection({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  style = {},
  as = 'div',
  threshold = 0.15,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={style}
      variants={variants[variant]}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  )
}
