import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import {
  FiSearch, FiAward, FiHeart, FiTruck, FiArrowRight, FiPercent,
  FiChevronLeft, FiChevronRight, FiCheckCircle, FiStar
} from 'react-icons/fi'
import {
  MdOutlineLocalGroceryStore, MdOutlineEco, MdOutlineLocalDrink,
  MdOutlineLunchDining, MdOutlineAcUnit, MdOutlineDirectionsWalk,
  MdOutlineSpa, MdOutlineCheckroom, MdOutlineCleaningServices,
  MdOutlineKitchen, MdOutlineMovie, MdOutlineMenuBook,
  MdOutlineToys, MdOutlineCardGiftcard, MdOutlineLocalFireDepartment,
  MdOutlineFavorite
} from 'react-icons/md'
import AnimatedSection from '../components/AnimatedSection'
import './Products.css'

// Import realistic category images
import groceryImg from '../assets/grocery_card.png'
import vegImg from '../assets/vegetables_card.png'
import fruitsImg from '../assets/fruits_card.png'
import bevImg from '../assets/beverages_card.png'
import dairyImg from '../assets/dairy_card.png'
import frozenImg from '../assets/frozen_card.png'
import footwearImg from '../assets/footwear_card.png'
import cosmeticsImg from '../assets/cosmetics_card.png'
import fashionImg from '../assets/fashion_card.png'
import personalCareImg from '../assets/personal_care_card.png'
import homeCareImg from '../assets/home_care.png'
import householdUtensilsImg from '../assets/household_utensils.png'
import stationaryImg from '../assets/stationary.png'
import booksMagazinesImg from '../assets/books_magazines.png'
import toysImg from '../assets/toys.png'
import giftItemsImg from '../assets/gift_items.png'

// Brand Logos
import nestleLogo from '../assets/nestle.svg'
import itcLogo from '../assets/itc.svg'
import daburLogo from '../assets/dabur.svg'
import easternLogo from '../assets/eastern.png'
import parleLogo from '../assets/parle.svg'
import pepsicoLogo from '../assets/pepsico.svg'

const ALL = 'All'

const products = [
  {
    icon: <MdOutlineLocalGroceryStore />,
    name: 'Grocery',
    category: 'Daily Essentials',
    color: '#22c55e',
    count: '120+ Products',
    items: ['Rice', 'Flour', 'Pulses', 'Spices', 'Oils'],
    image: groceryImg
  },
  {
    icon: <MdOutlineEco />,
    name: 'Organic Vegetables',
    category: 'Fresh Produce',
    color: '#16a34a',
    count: '45+ Products',
    items: ['Fresh', 'Organic', 'Healthy', 'Green'],
    image: vegImg
  },
  {
    icon: <MdOutlineFavorite />,
    name: 'Organic Fruits',
    category: 'Fresh Produce',
    color: '#f97316',
    count: '30+ Products',
    items: ['Fresh', 'Organic', 'Seasonal', 'Juicy'],
    image: fruitsImg
  },
  {
    icon: <MdOutlineLocalDrink />,
    name: 'Beverages',
    category: 'Drinks',
    color: '#3b82f6',
    count: '60+ Products',
    items: ['Juices', 'Soft Drinks', 'Tea', 'Coffee'],
    image: bevImg
  },
  {
    icon: <MdOutlineLunchDining />,
    name: 'Dairy Products',
    category: 'Dairy',
    color: '#a855f7',
    count: '50+ Products',
    items: ['Milk', 'Butter', 'Cheese', 'Curd'],
    image: dairyImg
  },
  {
    icon: <MdOutlineAcUnit />,
    name: 'Frozen Foods',
    category: 'Frozen',
    color: '#06b6d4',
    count: '40+ Products',
    items: ['Frozen Veg', 'Snacks', 'Ice Cream', 'Ready Meals'],
    image: frozenImg
  },
  {
    icon: <MdOutlineDirectionsWalk />,
    name: 'Footwares',
    category: 'Fashion',
    color: '#8b5cf6',
    count: '35+ Products',
    items: ['Sandals', 'Slippers', 'Sports Shoes', 'Formal Shoes'],
    image: footwearImg
  },
  {
    icon: <MdOutlineSpa />,
    name: 'Cosmetics',
    category: 'Beauty',
    color: '#ec4899',
    count: '80+ Products',
    items: ['Face Wash', 'Moisturizer', 'Lipstick', 'Foundation'],
    image: cosmeticsImg
  },
  {
    icon: <MdOutlineCheckroom />,
    name: 'Fashion Accessory',
    category: 'Fashion',
    color: '#f59e0b',
    count: '50+ Products',
    items: ['Belts', 'Bags', 'Wallets', 'Sunglasses'],
    image: fashionImg
  },
  {
    icon: <MdOutlineCleaningServices />,
    name: 'Personal Care',
    category: 'Health & Care',
    color: '#10b981',
    count: '90+ Products',
    items: ['Shampoo', 'Soap', 'Toothpaste', 'Deodorant'],
    image: personalCareImg
  },
  {
    icon: <MdOutlineKitchen />,
    name: 'Home Care',
    category: 'Health & Care',
    color: '#6366f1',
    count: '70+ Products',
    items: ['Detergent', 'Floor Cleaner', 'Dish Wash', 'Air Freshener'],
    image: homeCareImg
  },
  {
    icon: <MdOutlineKitchen />,
    name: 'Household Utensils',
    category: 'Home',
    color: '#64748b',
    count: '65+ Products',
    items: ['Plates', 'Cups', 'Bowls', 'Cooking Pots'],
    image: householdUtensilsImg
  },
  {
    icon: <MdOutlineMovie />,
    name: 'Movie CDs',
    category: 'Entertainment',
    color: '#ef4444',
    count: '150+ Products',
    items: ['Malayalam', 'Tamil', 'Hindi', 'English'],
    image: null
  },
  {
    icon: <MdOutlineMenuBook />,
    name: 'Stationery',
    category: 'Education',
    color: '#0ea5e9',
    count: '110+ Products',
    items: ['Pens', 'Notebooks', 'Files', 'Erasers'],
    image: stationaryImg
  },
  {
    icon: <MdOutlineMenuBook />,
    name: 'Books & Magazines',
    category: 'Education',
    color: '#78716c',
    count: '85+ Products',
    items: ['Novels', 'Magazines', 'Academic Books', 'Comics'],
    image: booksMagazinesImg
  },
  {
    icon: <MdOutlineToys />,
    name: 'Toys',
    category: 'Kids',
    color: '#f97316',
    count: '75+ Products',
    items: ['Educational', 'Action Figures', 'Board Games', 'Puzzles'],
    image: toysImg
  },
  {
    icon: <MdOutlineCardGiftcard />,
    name: 'Gift Items',
    category: 'Gifts',
    color: '#e11d48',
    count: '40+ Products',
    items: ['Gift Hampers', 'Greeting Cards', 'Decoratives'],
    image: giftItemsImg
  },
  {
    icon: <MdOutlineLocalFireDepartment />,
    name: 'LPG Connection',
    category: 'Utilities',
    color: '#dc2626',
    count: 'Available',
    items: ['New Connections', 'Refill Booking', 'Regulator'],
    image: null
  }
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

const brands = [
  { label: 'Nestle', logo: nestleLogo },
  { label: 'ITC', logo: itcLogo },
  { label: 'Dabur', logo: daburLogo },
  { label: 'Eastern', logo: easternLogo },
  { label: 'Parle', logo: parleLogo },
  { label: 'Pepsico', logo: pepsicoLogo },
]

const mobileMainCategories = [
  { name: 'Grocery', image: groceryImg, searchCat: 'Daily Essentials' },
  { name: 'Fresh Produce', image: vegImg, searchCat: 'Fresh Produce' },
  { name: 'Personal Care', image: personalCareImg, searchCat: 'Health & Care' },
  { name: 'Beverages', image: bevImg, searchCat: 'Drinks' },
  { name: 'Dairy Products', image: dairyImg, searchCat: 'Dairy' },
  { name: 'Frozen Foods', image: frozenImg, searchCat: 'Frozen' },
]

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const allCategories = [ALL, ...new Set(products.map((p) => p.category))]

export default function Products() {
  const location = useLocation()
  const searchInputRef = useRef(null)
  
  const [activeCategory, setActiveCategory] = useState(ALL)
  const [search, setSearch] = useState('')
  const [showFullSearch, setShowFullSearch] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(1) // Start with Rahul S. (index 1)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Listen to window size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Listen to search focus query param
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('focus') === 'search') {
      setShowFullSearch(true)
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus()
        }
      }, 300)
    } else {
      setShowFullSearch(false)
    }
  }, [location.search])

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === ALL || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const selectCategoryFromMobileGrid = (catName, searchCat) => {
    setActiveCategory(searchCat)
    setShowFullSearch(true)
  }

  // Mobile Mockup layout (Right Mockup)
  if (isMobile && !showFullSearch) {
    return (
      <motion.div
        className="page-wrapper"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="container mobile-categories-container">
          
          {/* Shop By Category Section (Photos) */}
          <section className="mobile-section">
            <div className="mobile-section-header">
              <h2 className="mobile-section-title">Shop By Category</h2>
              <button onClick={() => setShowFullSearch(true)} className="mobile-view-all">View all</button>
            </div>
            
            <div className="mobile-category-photo-grid">
              {mobileMainCategories.map((cat) => (
                <div
                  key={cat.name}
                  className="mobile-photo-card"
                  onClick={() => selectCategoryFromMobileGrid(cat.name, cat.searchCat)}
                >
                  <div className="mobile-photo-card__img-wrapper">
                    <img src={cat.image} alt={cat.name} className="mobile-photo-card__img" />
                  </div>
                  <span className="mobile-photo-card__label">{cat.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Weekend Sale Banner */}
          <section className="mobile-section">
            <div className="weekend-sale-banner" onClick={() => selectCategoryFromMobileGrid('Grocery', 'Daily Essentials')}>
              <div className="weekend-sale-banner__content">
                <span className="weekend-sale-banner__tag">WEEKEND SALE</span>
                <h3 className="weekend-sale-banner__title">Up to 20% Off</h3>
                <p className="weekend-sale-banner__subtitle">On Grocery & Staples</p>
                <button className="weekend-sale-banner__btn">Shop Now</button>
              </div>
              <img src={groceryImg} alt="Grocery Basket" className="weekend-sale-banner__img" />
            </div>
          </section>

          {/* Quality You Can Trust Banner */}
          <section className="mobile-section">
            <Link to="/about" className="quality-badge-banner">
              <div className="quality-badge-banner__left">
                <div className="quality-badge-banner__icon">
                  <FiAward size={22} />
                </div>
                <div className="quality-badge-banner__text">
                  <h4 className="quality-badge-banner__title">Quality You Can Trust</h4>
                  <p className="quality-badge-banner__subtitle">Serving quality products for over 70 years.</p>
                </div>
              </div>
              <FiChevronRight className="quality-badge-banner__arrow" size={20} />
            </Link>
          </section>

          {/* Customer Testimonials */}
          <section className="mobile-section">
            <div className="mobile-section-header">
              <h2 className="mobile-section-title">Customer Testimonials</h2>
              <Link to="/contact" className="mobile-view-all">View all</Link>
            </div>
            
            <div className="mobile-testimonial-carousel">
              <button
                className="carousel-arrow carousel-arrow--left"
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={20} />
              </button>
              
              <div className="mobile-testimonial-card">
                <div className="mobile-testimonial-card__stars">
                  {[...Array(5)].map((_, si) => (
                    <FiStar key={si} fill="#16a34a" color="#16a34a" size={14} />
                  ))}
                </div>
                <p className="mobile-testimonial-card__text">
                  {testimonials[activeTestimonial].text}
                </p>
                <div className="mobile-testimonial-card__author">
                  <div className="mobile-testimonial-card__avatar">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <h4 className="mobile-testimonial-card__name">{testimonials[activeTestimonial].name}</h4>
                    <span className="mobile-testimonial-card__role">{testimonials[activeTestimonial].role}</span>
                  </div>
                </div>
              </div>

              <button
                className="carousel-arrow carousel-arrow--right"
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                <FiChevronRight size={20} />
              </button>
            </div>

            {/* Dots */}
            <div className="mobile-testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`mobile-testimonial-dot ${activeTestimonial === index ? 'mobile-testimonial-dot--active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </section>



        </div>
      </motion.div>
    )
  }

  // Original list/search layout
  return (
    <motion.div
      className="page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container products-page-container">
        
        {/* Minimalist Controls */}
        <AnimatedSection className="products-controls">
          <div className="products-search">
            <FiSearch className="products-search__icon" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="products-search__input"
            />
          </div>
          <div className="products-filters">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'filter-btn--active' : ''}`}
              >
                {cat}
              </button>
            ))}
            {isMobile && (
              <button
                onClick={() => setShowFullSearch(false)}
                className="filter-btn filter-btn-back"
                style={{ backgroundColor: '#f0fdf4', color: '#16a34a', borderColor: '#dcfce7' }}
              >
                ← Back
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* Redesigned Grid */}
        <motion.div layout className="products-grid">
          {filtered.map((product, i) => (
            <AnimatedSection key={product.name} variant="fadeUp" delay={i * 0.04}>
              <div className="product-card glass-card" style={{ '--prod-color': product.color }}>
                {/* Left side: Content */}
                <div className="product-card__content">
                  <h3 className="product-card__title">{product.name}</h3>
                  <span className="product-card__count">{product.count}</span>

                  <div className="product-card__tags">
                    {product.items.map((item) => (
                      <span key={item} className="product-card__tag-chip">{item}</span>
                    ))}
                  </div>

                  <Link to="/contact" className="product-card__btn">
                    Explore <FiArrowRight />
                  </Link>
                </div>

                {/* Right side: Product Image / Fallback Glow */}
                <div className="product-card__image-container">
                  <div className="product-card__glow-backdrop" />

                  {product.image ? (
                    <img src={product.image} alt={product.name} className="product-card__img" />
                  ) : (
                    <div className="product-card__placeholder">
                      {product.icon}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="products-empty">
            <p>No categories found matching "{search}"</p>
          </div>
        )}

        {/* Bottom Helper Banner */}
        <AnimatedSection className="help-banner">
          <div className="help-banner__content">
            <div className="help-banner__icon">
              <FiTruck />
            </div>
            <div className="help-banner__text">
              <h3 className="help-banner__title">Can't find what you're looking for?</h3>
              <p className="help-banner__subtitle">We're here to help you find the perfect product.</p>
            </div>
          </div>
          <Link to="/contact" className="help-banner__btn">
            Contact Us <FiArrowRight />
          </Link>
        </AnimatedSection>
      </div>
    </motion.div>
  )
}
