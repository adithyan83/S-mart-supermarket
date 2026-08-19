import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiShoppingBag, FiStar, FiAward, FiUsers, FiTruck, FiCheckCircle,
  FiArrowRight
} from 'react-icons/fi'
import {
  MdOutlineLocalGroceryStore, MdOutlineEco, MdOutlineLocalDrink,
  MdOutlineLunchDining, MdOutlineAcUnit, MdOutlineDirectionsWalk,
  MdOutlineSpa, MdOutlineCheckroom, MdOutlineCleaningServices,
  MdOutlineKitchen, MdOutlineMovie, MdOutlineMenuBook,
  MdOutlineToys, MdOutlineCardGiftcard, MdOutlineLocalFireDepartment,
  MdOutlineDashboard, MdOutlineFavorite
} from 'react-icons/md'
import AnimatedSection from '../components/AnimatedSection'
import heroBanner from '../assets/hero_banner.png'
import nestleLogo  from '../assets/nestle.png'  // bg-removed v2
import itcLogo     from '../assets/itc.png'     // bg-removed v3
import daburLogo   from '../assets/dabur.png'   // bg-removed v3
import easternLogo from '../assets/eastern.png' // bg-removed v1
import parleLogo   from '../assets/parle.png'   // bg-removed v1
import pepsicoLogo from '../assets/pepsico.png' // bg-removed v1
import './Home.css'

/* ── Data ─────────────────────────────────────────── */
const categories = [
  { icon: <MdOutlineLocalGroceryStore />, label: 'Grocery', color: '#22c55e' },
  { icon: <MdOutlineEco />, label: 'Organic Vegetables', color: '#16a34a' },
  { icon: <MdOutlineFavorite />, label: 'Organic Fruits', color: '#f97316' },
  { icon: <MdOutlineLocalDrink />, label: 'Beverages', color: '#3b82f6' },
  { icon: <MdOutlineLunchDining />, label: 'Diary Products', color: '#a855f7' },
  { icon: <MdOutlineAcUnit />, label: 'Frozen Foods', color: '#06b6d4' },
  { icon: <MdOutlineDirectionsWalk />, label: 'Footwares', color: '#8b5cf6' },
  { icon: <MdOutlineSpa />, label: 'Cosmetics', color: '#ec4899' },
  { icon: <MdOutlineCheckroom />, label: 'Fashion Accessory', color: '#f59e0b' },
  { icon: <MdOutlineCleaningServices />, label: 'Personal Care', color: '#10b981' },
  { icon: <MdOutlineKitchen />, label: 'Home Care', color: '#6366f1' },
  { icon: <MdOutlineDashboard />, label: 'Household Utensils', color: '#64748b' },
  { icon: <MdOutlineMovie />, label: 'Movie CDs', color: '#ef4444' },
  { icon: <MdOutlineMenuBook />, label: 'Stationery', color: '#0ea5e9' },
  { icon: <MdOutlineMenuBook />, label: 'Books & Magazines', color: '#78716c' },
  { icon: <MdOutlineToys />, label: 'Toys', color: '#f97316' },
  { icon: <MdOutlineCardGiftcard />, label: 'Gift Items', color: '#e11d48' },
  { icon: <MdOutlineLocalFireDepartment />, label: 'LPG Connection', color: '#dc2626' },
]

const whyChoose = [
  {
    icon: <FiCheckCircle />,
    title: 'Quality Products',
    desc: 'S-mart is backed with superior vendors to ensure product quality and on time delivery. We supply good quality products from more than hundred FMCG companies at an affordable rates.',
    accent: '#22c55e',
  },
  {
    icon: <FiStar />,
    title: 'Affordable Rates',
    desc: 'We have more than 70 years of experience in FMCG sector, so we can offer products at relatively low prices by using our buying power to buy goods from manufacturers at lower prices.',
    accent: '#f5a623',
  },
  {
    icon: <FiTruck />,
    title: 'Ample Car Parking',
    desc: 'Parking plays a major role in a customer\'s decision of where to shop. A relaxing shopping experience begins with convenient car parking. We make it simple and easy for our customers.',
    accent: '#3b82f6',
  },
  {
    icon: <FiAward />,
    title: 'Industry Leader',
    desc: 'We are celebrating 70 years of being in retail business. We\'re proud to say that we are one of the leaders in today\'s Industry. We celebrate this part of our history.',
    accent: '#a855f7',
  },
  {
    icon: <FiUsers />,
    title: 'Experienced Staffs',
    desc: 'Highly trained staff and professionals have been appointed to take care of all the needs of customers. We provide a 100% satisfaction guarantee on every purchase.',
    accent: '#10b981',
  },
  {
    icon: <FiShoppingBag />,
    title: 'ISO Certified',
    desc: 'We are the first ISO certified Supermarket in Anchal city. This internationally recognised standard ensures services meet the needs of clients through an effective quality management system.',
    accent: '#f59e0b',
  },
]

const testimonials = [
  {
    text: '"I am quite happy with s-mart they supply quality products at affordable rates"',
    name: 'Balu Joseph',
    role: 'Regular Customer',
    avatar: 'BJ',
  },
  {
    text: '"Excellent customer service. Its so nice and refreshing to be greeted with a smile. Everything is available at reasonable prices"',
    name: 'Vivek Nair',
    role: 'Loyal Customer',
    avatar: 'VN',
  },
]


const brands = [
  { label: 'Nestle'  },
  { label: 'ITC'     },
  { label: 'Dabur'   },
  { label: 'Eastern' },
  { label: 'Parle'   },
  { label: 'Pepsico' },
]

/* ── Page Transition ─────────────────────────────── */
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

/* ── Component ───────────────────────────────────── */
export default function Home() {
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
              className="badge badge-accent hero__badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              ✦ Est. 2006 • Anchal, Kerala
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
              {[['70+', 'Years Experience'], ['100+', 'FMCG Brands'], ['ISO', 'Certified'], ['1st', 'In Anchal']].map(([val, label]) => (
                <div key={label} className="hero__stat">
                  <span className="hero__stat-val">{val}</span>
                  <span className="hero__stat-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="hero__cta-group">
              <Link to="/products" className="btn btn-primary">
                <FiShoppingBag /> Shop Now
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
          <AnimatedSection className="section-header">
            <span className="section-label">Browse</span>
            <h2 className="section-title">Shop By Category</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Everything you need under one roof — from fresh produce to household essentials.
            </p>
          </AnimatedSection>

          <div className="categories-grid">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.label} variant="scaleIn" delay={i * 0.04}>
                <Link to="/products" className="cat-card">
                  <div className="cat-card__icon" style={{ '--cat-color': cat.color }}>
                    {cat.icon}
                  </div>
                  <span className="cat-card__label">{cat.label}</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose S-MART ────────────── */}
      <section className="section why-section">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-label">Our Promise</span>
            <h2 className="section-title">Why Choose S-MART?</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Delivering quality and value to Anchal for over 70 years.
            </p>
          </AnimatedSection>

          <div className="why-grid">
            {whyChoose.map((item, i) => (
              <AnimatedSection key={item.title} variant="fadeUp" delay={i * 0.08}>
                <div className="why-card glass-card">
                  <div className="why-card__icon" style={{ '--why-color': item.accent }}>
                    {item.icon}
                  </div>
                  <h3 className="why-card__title">{item.title}</h3>
                  <p className="why-card__desc">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────── */}
      <section className="section testimonials-section">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-label">What Customers Say</span>
            <h2 className="section-title">Customer Testimonials</h2>
            <div className="divider" />
          </AnimatedSection>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} variant={i % 2 === 0 ? 'slideLeft' : 'slideRight'} delay={i * 0.15}>
                <div className="testimonial-card glass-card">
                  <div className="testimonial-card__stars">
                    {[...Array(5)].map((_, si) => (
                      <FiStar key={si} fill="#f5a623" color="#f5a623" size={16} />
                    ))}
                  </div>
                  <p className="testimonial-card__text">{t.text}</p>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">{t.avatar}</div>
                    <div>
                      <div className="testimonial-card__name">{t.name}</div>
                      <div className="testimonial-card__role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
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
                  const logoMap = { Nestle: nestleLogo, ITC: itcLogo, Dabur: daburLogo, Eastern: easternLogo, Parle: parleLogo, Pepsico: pepsicoLogo }
                  const logoSrc = logoMap[brand.label]
                  // Per-logo size tweaks to visually normalise shapes
                  const sizeMap = {
                    ITC:     { width: '150px', height: '90px' },
                    Nestle:  { width: '120px', height: '70px' },
                    Dabur:   { width: '120px', height: '70px' },
                    Eastern: { width: '120px', height: '70px' },
                    Parle:   { width: '120px', height: '70px' },
                    Pepsico: { width: '120px', height: '70px' },
                  }
                  const imgStyle = sizeMap[brand.label] || {}
                  return (
                    <div key={`${brand.label}-${i}`} className="brand-item">
                      {logoSrc ? (
                        <img
                          src={logoSrc}
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
