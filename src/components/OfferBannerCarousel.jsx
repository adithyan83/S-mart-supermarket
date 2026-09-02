import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight, FiShoppingBag, FiTag, FiZap, FiArrowRight } from 'react-icons/fi'
import groceryImg from '../assets/grocery_card.png'
import fashionImg from '../assets/fashion_card.png'
import vegetablesImg from '../assets/vegetables_card.png'
import fruitsImg from '../assets/fruits_card.png'
import './OfferBannerCarousel.css'

const offerBanners = [
  {
    id: 'groceries',
    title: 'Mega Grocery Savings',
    subtitle: 'Daily essentials, rice, atta, spices & premium cooking oils at unbeatable prices.',
    discountTag: 'FLAT 40% OFF',
    badge: 'SUPER SAVER DEAL',
    category: 'GROCERIES',
    image: groceryImg,
    gradient: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)',
    accentColor: '#34d399',
    glowColor: 'rgba(52, 211, 153, 0.35)',
    btnText: 'Shop Groceries',
    link: '/products',
  },
  {
    id: 'fashion',
    title: 'Exclusive Fashion Sale',
    subtitle: 'Upgrade your wardrobe with trendy menswear, womenswear & kids apparel.',
    discountTag: '40% OFF SPECIAL',
    badge: 'NEW COLLECTION',
    category: 'FASHION & WEAR',
    image: fashionImg,
    gradient: 'linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6366f1 100%)',
    accentColor: '#a5b4fc',
    glowColor: 'rgba(165, 180, 252, 0.35)',
    btnText: 'Shop Fashion',
    link: '/products',
  },
  {
    id: 'vegetables',
    title: 'Farm-Fresh Vegetables',
    subtitle: '100% organic, hand-harvested fresh green vegetables delivered daily.',
    discountTag: 'SAVE 40% TODAY',
    badge: '100% ORGANIC',
    category: 'FRESH VEGETABLES',
    image: vegetablesImg,
    gradient: 'linear-gradient(135deg, #14532d 0%, #15803d 50%, #22c55e 100%)',
    accentColor: '#4ade80',
    glowColor: 'rgba(74, 222, 128, 0.35)',
    btnText: 'Shop Vegetables',
    link: '/products',
  },
  {
    id: 'fruits',
    title: 'Juicy Fresh Fruits Basket',
    subtitle: 'Handpicked premium apples, oranges, berries & tropical delight fruits.',
    discountTag: 'FLAT 40% DISCOUNT',
    badge: 'HEALTH & VITALITY',
    category: 'FRESH FRUITS',
    image: fruitsImg,
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #ea580c 100%)',
    accentColor: '#fb923c',
    glowColor: 'rgba(251, 146, 60, 0.35)',
    btnText: 'Shop Fruits',
    link: '/products',
  },
]

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  }),
}

export default function OfferBannerCarousel() {
  const [[page, direction], setPage] = useState([0, 0])
  const [isPaused, setIsPaused] = useState(false)
  const autoPlayRef = useRef(null)

  const activeIndex = ((page % offerBanners.length) + offerBanners.length) % offerBanners.length
  const currentBanner = offerBanners[activeIndex]

  const paginate = useCallback(
    (newDirection) => {
      setPage(([prevPage]) => [prevPage + newDirection, newDirection])
    },
    []
  )

  const goToSlide = (slideIndex) => {
    const diff = slideIndex - activeIndex
    if (diff !== 0) {
      setPage(([prevPage]) => [prevPage + diff, diff > 0 ? 1 : -1])
    }
  }

  // Auto-swipe timer effect
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        paginate(1)
      }, 4500)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isPaused, paginate])

  // Drag End handler for manual touch & mouse swipe
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50
    const velocityThreshold = 300

    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      paginate(1)
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      paginate(-1)
    }
  }

  return (
    <div
      className="offer-carousel-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Header Title */}
        <div className="offer-carousel-header">
          <div className="offer-carousel-header__left">
            <span className="offer-carousel-tag">
              <FiZap /> EXCLUSIVE OFFERS
            </span>
            <h2 className="offer-carousel-title">
              Top Deals of the Season <span className="highlight-badge">40% OFF</span>
            </h2>
          </div>
        </div>

        {/* Landscape Banner Frame */}
        <div className="offer-carousel-viewport">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="offer-landscape-banner"
              style={{
                background: currentBanner.gradient,
              }}
            >
              {/* Background Glow */}
              <div
                className="banner-ambient-glow"
                style={{ background: currentBanner.glowColor }}
              />

              <div className="offer-landscape-banner__grid">
                {/* Banner Text Content */}
                <div className="banner-content">
                  <div className="banner-badges">
                    <span className="banner-cat-pill">
                      <FiTag className="icon" /> {currentBanner.badge}
                    </span>
                    <span className="banner-discount-pill">
                      {currentBanner.discountTag}
                    </span>
                  </div>

                  <h3 className="banner-heading">{currentBanner.title}</h3>
                  <p className="banner-subtext">{currentBanner.subtitle}</p>

                  <div className="banner-cta-row">
                    <Link to={currentBanner.link} className="banner-btn-primary">
                      <FiShoppingBag className="btn-icon" /> {currentBanner.btnText} <FiArrowRight className="arrow-icon" />
                    </Link>
                    <span className="banner-offer-note">
                      * Valid for limited time. In-store & Online.
                    </span>
                  </div>
                </div>

                {/* Banner Landscape Image Showcase */}
                <div className="banner-image-wrapper">
                  <div className="banner-image-halo" style={{ background: currentBanner.glowColor }} />
                  <img
                    src={currentBanner.image}
                    alt={currentBanner.title}
                    className="banner-img"
                    draggable={false}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Touch / Hover Navigation Overlay Arrows */}
          <button
            className="carousel-overlay-arrow carousel-overlay-arrow--prev"
            onClick={() => paginate(-1)}
            aria-label="Previous Slide"
          >
            <FiChevronLeft />
          </button>
          <button
            className="carousel-overlay-arrow carousel-overlay-arrow--next"
            onClick={() => paginate(1)}
            aria-label="Next Slide"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="offer-carousel-footer">
          <div className="offer-carousel-dots">
            {offerBanners.map((banner, index) => (
              <button
                key={banner.id}
                className={`carousel-dot ${activeIndex === index ? 'carousel-dot--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${banner.title} banner`}
              >
                <span className="dot-fill" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
