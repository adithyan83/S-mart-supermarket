import { motion } from 'framer-motion'
import { FiArrowRight, FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import './Offers.css'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export default function Offers() {
  return (
    <motion.div
      className="page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Coming Soon */}
      <section className="offers-coming-soon">
        <div className="container offers-coming-soon__inner">
          <AnimatedSection variant="fadeUp">
            <div className="offers-coming-soon__icon">
              <FiClock />
            </div>
            <h1 className="offers-coming-soon__title">
              Offers will be <span className="gradient-text">updated soon</span>..
            </h1>
            <p className="offers-coming-soon__subtitle">
              We're working on exclusive deals for you.<br className="offers-break" /> Stay tuned!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-sm offers-cta-section">
        <div className="container">
          <AnimatedSection variant="scaleIn">
            <div className="offers-cta-banner glass-card">
              <div className="offers-cta-banner__text">
                <h2>Visit Us In-Store Today!</h2>
                <p>Get the best deals in person at R.O Junction, Anchal, Kollam.</p>
              </div>
              <div className="offers-cta-banner__actions">
                <Link to="/contact" className="btn btn-accent">
                  Get Directions <FiArrowRight />
                </Link>
                <a href="tel:04752270677" className="btn btn-outline">
                  Call Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
