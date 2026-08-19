import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSearch } from 'react-icons/fi'
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

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const ALL = 'All'

const products = [
  { icon: <MdOutlineLocalGroceryStore />, name: 'Grocery', category: 'Daily Essentials', color: '#22c55e', items: ['Rice', 'Wheat', 'Pulses', 'Spices', 'Oils', 'Sugar', 'Salt', 'Flour'] },
  { icon: <MdOutlineEco />, name: 'Organic Vegetables', category: 'Fresh Produce', color: '#16a34a', items: ['Tomatoes', 'Onions', 'Potatoes', 'Carrots', 'Spinach', 'Beans'] },
  { icon: <MdOutlineFavorite />, name: 'Organic Fruits', category: 'Fresh Produce', color: '#f97316', items: ['Mangoes', 'Bananas', 'Apples', 'Grapes', 'Oranges', 'Papayas'] },
  { icon: <MdOutlineLocalDrink />, name: 'Beverages', category: 'Drinks', color: '#3b82f6', items: ['Soft Drinks', 'Juices', 'Tea', 'Coffee', 'Health Drinks', 'Water'] },
  { icon: <MdOutlineLunchDining />, name: 'Diary Products', category: 'Dairy', color: '#a855f7', items: ['Milk', 'Curd', 'Butter', 'Cheese', 'Paneer', 'Ice Cream'] },
  { icon: <MdOutlineAcUnit />, name: 'Frozen Foods', category: 'Frozen', color: '#06b6d4', items: ['Frozen Veg', 'Frozen Snacks', 'Ice Creams', 'Frozen Meats', 'Ready Meals'] },
  { icon: <MdOutlineDirectionsWalk />, name: 'Footwares', category: 'Fashion', color: '#8b5cf6', items: ['Sandals', 'Slippers', 'Sports Shoes', 'Formal Shoes', 'Kids Footwear'] },
  { icon: <MdOutlineSpa />, name: 'Cosmetics', category: 'Beauty', color: '#ec4899', items: ['Face Wash', 'Moisturizer', 'Lipstick', 'Foundation', 'Perfume', 'Eyeliner'] },
  { icon: <MdOutlineCheckroom />, name: 'Fashion Accessory', category: 'Fashion', color: '#f59e0b', items: ['Belts', 'Bags', 'Wallets', 'Scarves', 'Hats', 'Sunglasses'] },
  { icon: <MdOutlineCleaningServices />, name: 'Personal Care', category: 'Health & Care', color: '#10b981', items: ['Shampoo', 'Soap', 'Toothpaste', 'Deodorant', 'Skin Care', 'Hair Oil'] },
  { icon: <MdOutlineKitchen />, name: 'Home Care', category: 'Health & Care', color: '#6366f1', items: ['Detergent', 'Floor Cleaner', 'Dish Wash', 'Air Freshener', 'Insecticide'] },
  { icon: <MdOutlineKitchen />, name: 'Household Utensils', category: 'Home', color: '#64748b', items: ['Plates', 'Cups', 'Bowls', 'Cooking Pots', 'Knives', 'Spoons'] },
  { icon: <MdOutlineMovie />, name: 'Movie CDs', category: 'Entertainment', color: '#ef4444', items: ['Malayalam', 'Tamil', 'Hindi', 'English', 'Kids Movies', 'Classics'] },
  { icon: <MdOutlineMenuBook />, name: 'Stationery', category: 'Education', color: '#0ea5e9', items: ['Pens', 'Notebooks', 'Files', 'Rulers', 'Erasers', 'Staplers'] },
  { icon: <MdOutlineMenuBook />, name: 'Books & Magazines', category: 'Education', color: '#78716c', items: ['Novels', 'Magazines', 'Academic Books', 'Comic Books', 'Newspapers'] },
  { icon: <MdOutlineToys />, name: 'Toys', category: 'Kids', color: '#f97316', items: ['Educational Toys', 'Action Figures', 'Dolls', 'Board Games', 'Puzzles'] },
  { icon: <MdOutlineCardGiftcard />, name: 'Gift Items', category: 'Gifts', color: '#e11d48', items: ['Gift Hampers', 'Greeting Cards', 'Decorative Items', 'Gift Wraps'] },
  { icon: <MdOutlineLocalFireDepartment />, name: 'LPG Connection', category: 'Utilities', color: '#dc2626', items: ['New Connections', 'Cylinder Booking', 'Regulator', 'Pipe & Fittings'] },
]

const allCategories = [ALL, ...new Set(products.map((p) => p.category))]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(ALL)
  const [search, setSearch] = useState('')

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === ALL || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <motion.div
      className="page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <AnimatedSection>
            <span className="section-label">Browse</span>
            <h1 className="page-hero__title">Our <span className="gradient-text">Products</span></h1>
            <p className="page-hero__subtitle">
              18+ categories — everything from fresh vegetables to LPG connections.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Controls */}
          <AnimatedSection className="products-controls">
            <div className="products-search">
              <FiSearch className="products-search__icon" />
              <input
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
            </div>
          </AnimatedSection>

          {/* Products Grid */}
          <motion.div layout className="products-grid">
            {filtered.map((product, i) => (
              <AnimatedSection key={product.name} variant="scaleIn" delay={i * 0.04}>
                <div className="product-card glass-card">
                  <div className="product-card__header" style={{ '--prod-color': product.color }}>
                    <div className="product-card__icon">{product.icon}</div>
                    <span className="product-card__category">{product.category}</span>
                  </div>
                  <div className="product-card__body">
                    <h3 className="product-card__name">{product.name}</h3>
                    <div className="product-card__items">
                      {product.items.map((item) => (
                        <span key={item} className="product-chip">{item}</span>
                      ))}
                    </div>
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
        </div>
      </section>
    </motion.div>
  )
}
