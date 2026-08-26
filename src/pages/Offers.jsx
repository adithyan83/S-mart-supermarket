import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiArrowRight, FiCalendar, FiTag, FiClock
} from 'react-icons/fi'
import {
  MdLocalFireDepartment, MdOutlinePercent
} from 'react-icons/md'
import AnimatedSection from '../components/AnimatedSection'
import heroBanner from '../assets/hero_banner.png'
import newOfferBanner from '../assets/newoffer.png'
import groceryImg from '../assets/grocery_card.png'
import fruitsImg from '../assets/fruits_card.png'
import beveragesImg from '../assets/beverages_card.png'
import personalCareImg from '../assets/personal_care_card.png'
import frozenImg from '../assets/frozen_card.png'
import dairyImg from '../assets/dairy_card.png'
import homeCareImg from '../assets/home_care.png'
import './Offers.css'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const hotDeals = [
  { id: 1, img: groceryImg,     cat: 'grocery',   name: 'Aashirvaad Whole Wheat Atta', qty: '5 kg',       price: 239, mrp: 299, discount: 20 },
  { id: 2, img: dairyImg,       cat: 'dairy',     name: 'Amul Fresh Paneer',           qty: '200 g',      price: 68,  mrp: 80,  discount: 15 },
  { id: 3, img: frozenImg,      cat: 'snacks',    name: 'McCain Crispy French Fries',  qty: '450 g',      price: 120, mrp: 150, discount: 20 },
  { id: 4, img: beveragesImg,   cat: 'beverages', name: 'Nescafe Classic Coffee',      qty: '200 g',      price: 320, mrp: 390, discount: 18 },
  { id: 5, img: personalCareImg,cat: 'personal',  name: 'Dove Beauty Bar Soap',        qty: '100 g × 4',  price: 180, mrp: 220, discount: 18 },
  { id: 6, img: fruitsImg,      cat: 'fresh',     name: 'Fresh Organic Apple Basket',  qty: '1 kg',       price: 120, mrp: 160, discount: 25 },
  { id: 7, img: homeCareImg,    cat: 'homecare',  name: 'Vim Dishwash Liquid',         qty: '750 ml',     price: 89,  mrp: 110, discount: 19 },
  { id: 8, img: groceryImg,     cat: 'grocery',   name: 'Tata Salt – Pure & Iodised',  qty: '1 kg',       price: 18,  mrp: 22,  discount: 18 },
]

export default function Offers() {
  return (
    <motion.div
      className="page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* ── Elegant Hero Section ──────────────── */}
      <section className="offers-premium-hero">
        <div className="offers-premium-hero__ambient" />
        <div className="container offers-premium-hero__container">
          <div className="offers-premium-hero__content">
            <nav className="offers-premium-hero__breadcrumb">
              <Link to="/">Home</Link>
              <span className="separator">/</span>
              <span className="active">Deals & Offers</span>
            </nav>
            <h1 className="offers-premium-hero__title">
              Up to <span className="gradient-text">40% Off</span> <br />
              Fresh Organic Produce
            </h1>
            <p className="offers-premium-hero__subtitle">
              Farm-fresh organic produce, groceries, and daily essentials at unmatched prices. Direct from S-MART to your home.
            </p>
            <div className="offers-premium-hero__stats">
              <div className="stat-pill">
                <FiTag className="icon" /> <strong>Up to 40% OFF</strong>
              </div>
              <div className="stat-pill">
                <FiClock className="icon" /> <strong>Updated Weekly</strong>
              </div>
              <div className="stat-pill">
                <FiCalendar className="icon" /> <strong>Valid till 31 AUG 2026</strong>
              </div>
            </div>
          </div>
          <div className="offers-premium-hero__image-panel">
            <div className="image-panel__card">
              <img src={heroBanner} alt="S-MART Store Interior" className="image-panel__img" />
              <div className="image-panel__badge">
                <span className="percentage"><MdOutlinePercent /></span>
                <div>
                  <div className="badge-title">Anchal, Kollam</div>
                  <div className="badge-subtitle">Visit In-Store Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Weekend Super Saver Wide Banner ───── */}
      <section className="offers-saver-showcase">
        <div className="container">
          <AnimatedSection variant="fadeUp">
            <div className="saver-showcase__card">
              <Link to="/products" className="saver-showcase__link" style={{ position: 'relative' }}>
                <img
                  src={newOfferBanner}
                  alt="Weekend Super Saver Banner"
                  className="saver-showcase__img"
                />
                <div className="saver-showcase__badge">
                  <FiCalendar className="icon" /> Valid till 31 AUG 2026
                </div>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Hot Deals Display Grid ────────────── */}
      <section className="offers-deals-grid-section">
        <div className="container">
          <div className="deals-grid-header">
            <h2 className="deals-grid-title">
              <MdLocalFireDepartment className="fire-icon" /> Hot Deals Right Now
            </h2>
            <p className="deals-grid-subtitle">
              Showing {hotDeals.length} exclusive active discounts
            </p>
          </div>

          <div className="deals-premium-grid">
            <AnimatePresence mode="popLayout">
              {hotDeals.map((deal, i) => (
                <motion.div
                  key={deal.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="deal-premium-card"
                >
                  <div className="deal-premium-card__image-container">
                    <span className="deal-premium-card__discount-tag">
                      {deal.discount}% OFF
                    </span>
                    <img src={deal.img} alt={deal.name} className="deal-premium-card__img" />
                  </div>
                  <div className="deal-premium-card__body">
                    <span className="deal-premium-card__category">{deal.cat.toUpperCase()}</span>
                    <h4 className="deal-premium-card__name">{deal.name}</h4>
                    <p className="deal-premium-card__qty">{deal.qty}</p>
                    
                    <div className="deal-premium-card__pricing-row">
                      <div className="prices">
                        <span className="price-active">₹{deal.price}</span>
                        <span className="price-mrp">₹{deal.mrp}</span>
                      </div>
                      <span className="save-tag">Save ₹{deal.mrp - deal.price}</span>
                    </div>

                    <div className="deal-premium-card__footer">
                      <span className="validity">
                        <FiCalendar className="icon" /> Valid till 31 AUG 2026
                      </span>
                      <Link to="/products" className="details-link">
                        View details <FiArrowRight className="arrow" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Premium In-Store Banner ───────────── */}
      <section className="section-sm offers-instore-section">
        <div className="container">
          <AnimatedSection variant="scaleIn">
            <div className="instore-premium-banner">
              <div className="instore-premium-banner__content">
                <h2>Visit S-MART Supermarket</h2>
                <p>Enjoy extra discounts and exclusive spot deals by visiting our physical store in Anchal.</p>
                <div className="location-info">
                  <strong>R.O Junction, Anchal, Kollam, Kerala</strong>
                </div>
              </div>
              <div className="instore-premium-banner__actions">
                <Link to="/contact" className="btn btn-accent">
                  Get Directions <FiArrowRight />
                </Link>
                <a href="tel:04752270677" className="btn btn-outline-white">
                  Call: 0475-2270677
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
