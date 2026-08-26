import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * AnimatedSection – wraps children in a scroll-triggered reveal animation.
 * @param {string} variant - 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn'
 * @param {number} delay - animation delay in seconds
 * @param {string} className - additional class names
 */

// Detect mobile for reduced motion distances
const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: isMobile ? 24 : 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: isMobile ? -28 : -60 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: isMobile ? 28 : 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: isMobile ? 0.92 : 0.85 },
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

  // On mobile, use shorter duration and snappier easing
  const mobileDuration = isMobile ? Math.min(duration * 0.8, 0.45) : duration
  const mobileDelay = isMobile ? delay * 0.6 : delay

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={style}
      variants={variants[variant]}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration: mobileDuration,
        delay: mobileDelay,
        ease: [0.22, 1, 0.36, 1], // expo-out — very smooth on mobile
      }}
    >
      {children}
    </MotionTag>
  )
}

