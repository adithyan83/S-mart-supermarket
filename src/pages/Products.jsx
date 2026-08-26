import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import {
  FiSearch, FiAward, FiHeart, FiTruck, FiArrowRight, FiPercent,
  FiChevronLeft, FiChevronRight, FiCheckCircle, FiStar, FiSliders
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


const brands = [
  { label: 'Nestle', logo: nestleLogo },
  { label: 'ITC', logo: itcLogo },
  { label: 'Dabur', logo: daburLogo },
  { label: 'Eastern', logo: easternLogo },
  { label: 'Parle', logo: parleLogo },
  { label: 'Pepsico', logo: pepsicoLogo },
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
  const [showFilters, setShowFilters] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFilters(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  // Listen to search focus query param
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('focus') === 'search') {
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus()
        }
      }, 300)
    }
  }, [location.search])

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === ALL || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

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
          <div className="products-search-bar-row">
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
            
            <div className="products-filter-wrapper" ref={dropdownRef}>
              <button 
                className={`products-filter-toggle ${showFilters ? 'products-filter-toggle--active' : ''} ${activeCategory !== ALL ? 'products-filter-toggle--has-filter' : ''}`}
                onClick={() => setShowFilters(!showFilters)}
                aria-label="Toggle category filters"
              >
                <FiSliders className="icon" />
                <span>{activeCategory === ALL ? 'Filters' : activeCategory}</span>
              </button>

              <AnimatePresence>
                {showFilters && (
                  <motion.div 
                    className="products-filter-dropdown"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                  >
                    {allCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat)
                          setShowFilters(false)
                        }}
                        className={`dropdown-item ${activeCategory === cat ? 'dropdown-item--active' : ''}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
