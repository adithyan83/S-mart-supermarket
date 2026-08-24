import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiShoppingBag, FiStar, FiAward, FiTruck, FiArrowRight, FiMapPin, FiShield,
  FiChevronRight, FiCheckCircle
} from 'react-icons/fi'
import {
  MdOutlineLocalGroceryStore, MdOutlineEco, MdOutlineLocalDrink,
  MdOutlineLunchDining, MdOutlineAcUnit, MdOutlineFavorite
} from 'react-icons/md'
import AnimatedSection from '../components/AnimatedSection'
import heroBanner from '../assets/hero_banner.png'
import nestleLogo from '../assets/nestle.svg'
import itcLogo from '../assets/itc.svg'
import daburLogo from '../assets/dabur.svg'
import easternLogo from '../assets/eastern.png'
import parleLogo from '../assets/parle.svg'
import pepsicoLogo from '../assets/pepsico.svg'
import './Home.css'

const brands = [
  { label: 'Nestle', logo: nestleLogo },
  { label: 'ITC', logo: itcLogo },
  { label: 'Dabur', logo: daburLogo },
  { label: 'Eastern', logo: easternLogo },
  { label: 'Parle', logo: parleLogo },
  { label: 'Pepsico', logo: pepsicoLogo },
]

/* ── Data ─────────────────────────────────────────── */
const categories = [
  { icon: <MdOutlineLocalGroceryStore />, label: 'Grocery', color: '#22c55e', bg: '#f0fdf4' },
  { icon: <MdOutlineEco />, label: 'Fresh Produce', color: '#16a34a', bg: '#f0fdf4' },
  { icon: <MdOutlineFavorite />, label: 'Personal Care', color: '#f97316', bg: '#fff7ed' },
  { icon: <MdOutlineLocalDrink />, label: 'Beverages', color: '#3b82f6', bg: '#eff6ff' },
  { icon: <MdOutlineLunchDining />, label: 'Dairy Products', color: '#a855f7', bg: '#f3e8ff' },
  { icon: <MdOutlineAcUnit />, label: 'Frozen Foods', color: '#06b6d4', bg: '#ecfeff' },
]

const whyChoose = [
  {
    icon: <FiCheckCircle />,
    title: 'Quality Products',
    desc: 'Sourced from 100+ trusted FMCG companies.',
    accent: '#22c55e',
  },
  {
    icon: <FiStar />,
    title: 'Affordable Rates',
    desc: 'Best quality products at lowest market prices.',
    accent: '#f5a623',
  },
  {
    icon: <FiTruck />,
    title: 'Ample Car Parking',
    desc: 'Spacious parking for a relaxed shopping experience.',
    accent: '#3b82f6',
  },
]

const testimonials = [
  {
    text: '"I am quite happy with s-mart they supply quality products at affordable rates"',
    name: 'Anjali R.',
    role: 'Customer',
    avatar: 'AR',
  },
  {
    text: '"Excellent customer service. It is a nice and refreshing to be greeted with a smile. Everything is available at reasonable prices!"',
    name: 'Rahul S.',
    role: 'Customer',
    avatar: 'RS',
  },
  {
    text: '"One of the best supermarkets in Kollam district. Clean environment, courteous staff, and very fast checkout experience."',
    name: 'Suresh K.',
    role: 'Customer',
    avatar: 'SK',
  }
]

const stats = [
  { val: '70+', label: 'Years Retail Experience', icon: <FiShield /> },
  { val: '100+', label: 'FMCG Brands', icon: <MdOutlineEco /> },
  { val: 'ISO', label: 'Certified', icon: <FiAward /> },
  { val: '1st', label: 'In Anchal', icon: <FiAward /> }
]

/* ── Page Transition ─────────────────────────────── */
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

/* ── Component ───────────────────────────────────── */
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* ── Hero ─────────────────────────── */}
      <section className="hero">
        <div className="hero__bg">
          <img src={heroBanner} alt="S-MART Supermarket Interior" className="hero__bg-img" />
          <div className="hero__bg-overlay" />
        </div>
        <div className="bg-glow bg-glow-green hero__glow-1" />
        <div className="bg-glow bg-glow-accent hero__glow-2" />

        <div className="container hero__content">
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.span
              className="badge hero__badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <FiMapPin style={{ marginRight: '4px' }} /> Est. 2006 - Anchal, Kerala
            </motion.span>

            <h1 className="hero__title">
              Welcome to{' '}
              <span className="gradient-text">S-MART</span>
              <br />
              Supermarket
            </h1>

            <p className="hero__subtitle">
              One-stop shopping experience for all your household and personal needs.
              Quality beyond question, convenience that adds something great to your day.
            </p>

            <div className="hero__stats">
              {stats.map((item) => (
                <div key={item.label} className="hero__stat">
                  <div className="hero__stat-icon">{item.icon}</div>
                  <div className="hero__stat-info">
                    <span className="hero__stat-val">{item.val}</span>
                    <span className="hero__stat-label">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero__cta-group">
              <Link to="/products" className="btn btn-primary">
                <FiShoppingBag /> Explore Products
              </Link>
              <Link to="/offers" className="btn btn-outline">
                View Deals <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hero__scroll"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <div className="hero__scroll-dot" />
        </motion.div>
      </section>

      {/* ── Shop By Category ─────────────── */}
      <section className="section categories-section">
        <div className="container">
          <div className="categories-header-compact">
            <h2 className="categories-title-compact">Shop By Category</h2>
            <Link to="/products" className="view-all-link">View all</Link>
          </div>

          <div className="categories-grid-mobile">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.label} variant="scaleIn" delay={i * 0.04}>
                <Link to="/products" className="cat-card-mobile" style={{ '--cat-bg': cat.bg }}>
                  <div className="cat-card-mobile__icon" style={{ '--cat-color': cat.color }}>
                    {cat.icon}
                  </div>
                  <span className="cat-card-mobile__label">{cat.label}</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Can't find what you're looking for? Help Banner */}
          <AnimatedSection variant="scaleIn">
            <Link to="/contact" className="help-banner-mobile">
              <div className="help-banner-mobile__content">
                <div className="help-banner-mobile__icon">
                  <FiTruck size={20} />
                </div>
                <div className="help-banner-mobile__text">
                  <h4 className="help-banner-mobile__title">Can't find what you're looking for?</h4>
                  <p className="help-banner-mobile__subtitle">We're here to help you find the perfect product.</p>
                </div>
              </div>
              <FiChevronRight className="help-banner-mobile__arrow" size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Choose S-MART ────────────── */}
      <section className="section why-section">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-label">Our Promise</span>
            <h2 className="section-title">Why Choose S-MART?</h2>
            <div className="divider" />
          </AnimatedSection>

          <div className="why-grid-mobile">
            {whyChoose.map((item, i) => (
              <AnimatedSection key={item.title} variant="fadeUp" delay={i * 0.08}>
                <div className="why-card-mobile">
                  <div className="why-card-mobile__icon" style={{ '--why-color': item.accent }}>
                    {item.icon}
                  </div>
                  <div className="why-card-mobile__info">
                    <h3 className="why-card-mobile__title">{item.title}</h3>
                    <p className="why-card-mobile__desc">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────── */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="categories-header-compact">
            <h2 className="categories-title-compact">What Customers Say</h2>
            <Link to="/contact" className="view-all-link">View all</Link>
          </div>

          <div className="testimonial-slider-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                className="testimonial-card-mobile"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="testimonial-card-mobile__stars">
                  {[...Array(5)].map((_, si) => (
                    <FiStar key={si} fill="#16a34a" color="#16a34a" size={16} />
                  ))}
                </div>
                <p className="testimonial-card-mobile__text">
                  {testimonials[activeTestimonial].text}
                </p>
                <div className="testimonial-card-mobile__author">
                  <div className="testimonial-card-mobile__avatar">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <div className="testimonial-card-mobile__name">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="testimonial-card-mobile__role">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="testimonial-slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-slider-dot ${activeTestimonial === index ? 'testimonial-slider-dot--active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Popular Brands ───────────────── */}
      <section className="section-sm brands-section">
        <div className="container">
          <AnimatedSection className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-label">Trusted</span>
            <h2 className="section-title">Popular Brands</h2>
            <div className="divider" />
          </AnimatedSection>

          <AnimatedSection variant="fadeIn">
            <div className="brands-track-wrapper">
              <div className="brands-track">
                {[...brands, ...brands].map((brand, i) => {
                  const imgStyle = {
                    width: brand.label === 'ITC' ? '150px' : '120px',
                    height: brand.label === 'ITC' ? '90px' : '70px',
                  }
                  return (
                    <div key={`${brand.label}-${i}`} className="brand-item" data-brand={brand.label}>
                      {brand.logo ? (
                        <img
                          src={brand.logo}
                          alt={brand.label}
                          className="brand-item__logo"
                          style={imgStyle}
                        />
                      ) : (
                        <span className="brand-item__text">{brand.label}</span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
