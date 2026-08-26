import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FiAward, FiCheckCircle, FiShoppingBag, FiTarget } from 'react-icons/fi'
import { MdOutlineVerified } from 'react-icons/md'
import IsoLogo from '../components/IsoLogo'
import AnimatedSection from '../components/AnimatedSection'
import './About.css'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

function CounterStat({ target, suffix = '', label }) {
  return (
    <div className="about-stat">
      <div className="about-stat__val">
        <span>{target}</span>
        {suffix}
      </div>
      <div className="about-stat__label">{label}</div>
    </div>
  )
}

const milestones = [
  { year: '1956', event: 'Samkarathil Group founded – 70+ years of retail legacy begins' },
  { year: '2006', event: 'S-MART Supermarket established in Anchal, Kollam' },
  { year: '2010', event: 'Expanded product range to 100+ FMCG brands' },
  { year: '2015', event: 'Achieved ISO certification – first in Anchal city' },
  { year: '2020', event: 'Introduced home-grown organic vegetables section' },
  { year: '2026', event: 'Continuing to lead Kerala\'s retail industry with excellence' },
]

const values = [
  { icon: <FiCheckCircle />, title: 'Uncompromising Quality', desc: 'Only products meeting our stringent quality norms make it to our shelves.' },
  { icon: <FiTarget />, title: 'Customer First', desc: 'Every decision we make centers on the satisfaction of our customers.' },
  { icon: <FiShoppingBag />, title: 'Affordable for All', desc: '70+ years of buying power means better prices passed on to you.' },
  { icon: <FiAward />, title: 'ISO Certified Excellence', desc: 'The first ISO certified supermarket in Anchal — quality is our standard.' },
]

export default function About() {
  return (
    <motion.div
      className="page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Page Hero */}
      <section className="page-hero about-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <AnimatedSection>
            <span className="section-label">Our Story</span>
            <h1 className="page-hero__title">About <span className="gradient-text">S-MART</span></h1>
            <p className="page-hero__subtitle">
              Over 70 years of retail excellence, rooted in Kerala's heart.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container about-story">
          <AnimatedSection variant="slideLeft" className="about-story__text">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              One of the Leading Supermarkets in <span className="gradient-text">Anchal</span>
            </h2>
            <div className="divider" style={{ margin: '1rem 0' }} />
            <p>
              S-MART Supermarket was started in the year 2006 and is located in the heart of Anchal city with ample car parking facility. All leading FMCG brands are available here, and all products are sold at a discounted price.
            </p>
            <p>
              The <strong>Samkarathil Group</strong>, which runs the supermarket, has over 70 years of retail experience. Only products which meet the stringent quality norms of the firm are available here. We also sell home-grown vegetables.
            </p>
            <p>
              S-Mart Supermarket is a dynamic leader in the retail and food sector. An impeccable eye for quality and our continuing strive to provide exceptional service is what forms the core of S-Mart. We're on a mission to deliver quality beyond question and convenience that adds something great to your day.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="slideRight" className="about-story__visual">
            <div className="about-badge-grid">
              <div className="about-badge glass-card">
                <IsoLogo className="about-badge__icon" />
                <h4>ISO Certified</h4>
                <p>First in Anchal city</p>
              </div>
              <div className="about-badge glass-card">
                <FiAward className="about-badge__icon" />
                <h4>Est. 1956</h4>
                <p>Samkarathil Group</p>
              </div>
              <div className="about-badge glass-card">
                <FiShoppingBag className="about-badge__icon" />
                <h4>100+ Brands</h4>
                <p>FMCG partners</p>
              </div>
              <div className="about-badge glass-card">
                <FiCheckCircle className="about-badge__icon" />
                <h4>Since 2006</h4>
                <p>S-MART Supermarket</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            <CounterStat target="70+" label="Years of Retail Experience" />
            <CounterStat target="100+" label="FMCG Brands" />
            <CounterStat target="1st" label="ISO Certified in Anchal" />
            <CounterStat target="1000+" label="Happy Customers Daily" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-label">Our Foundation</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="divider" />
          </AnimatedSection>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} variant="fadeUp" delay={i * 0.1}>
                <div className="about-value-card glass-card">
                  <div className="about-value-card__icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline-section">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Milestones</h2>
            <div className="divider" />
          </AnimatedSection>

          <div className="timeline">
            {milestones.map((m, i) => (
              <AnimatedSection
                key={m.year}
                variant={i % 2 === 0 ? 'slideLeft' : 'slideRight'}
                delay={i * 0.1}
                className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
              >
                <div className="timeline__card glass-card">
                  <div className="timeline__year">{m.year}</div>
                  <p className="timeline__event">{m.event}</p>
                </div>
                <div className="timeline__dot" />
              </AnimatedSection>
            ))}
            <div className="timeline__line" />
          </div>
        </div>
      </section>
    </motion.div>
  )
}
