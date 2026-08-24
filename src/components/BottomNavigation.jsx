import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiGrid, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import './BottomNavigation.css'

export default function BottomNavigation() {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <nav className="bottom-nav">
      <Link
        to="/"
        className={`bottom-nav__item ${currentPath === '/' ? 'bottom-nav__item--active' : ''}`}
      >
        <FiHome size={20} className="bottom-nav__icon" />
        <span className="bottom-nav__label">Home</span>
      </Link>

      <Link
        to="/products"
        className={`bottom-nav__item ${currentPath === '/products' && !location.search.includes('focus=search') ? 'bottom-nav__item--active' : ''}`}
      >
        <FiGrid size={20} className="bottom-nav__icon" />
        <span className="bottom-nav__label">Categories</span>
      </Link>

      <Link
        to="/products?focus=search"
        className={`bottom-nav__item ${location.search.includes('focus=search') ? 'bottom-nav__item--active' : ''}`}
      >
        <FiSearch size={20} className="bottom-nav__icon" />
        <span className="bottom-nav__label">Search</span>
      </Link>

      <Link
        to="/offers"
        className={`bottom-nav__item ${currentPath === '/offers' ? 'bottom-nav__item--active' : ''}`}
      >
        <div className="bottom-nav__icon-wrapper">
          <FiShoppingCart size={20} className="bottom-nav__icon" />
          <span className="bottom-nav__badge">0</span>
        </div>
        <span className="bottom-nav__label">Cart</span>
      </Link>

      <Link
        to="/contact"
        className={`bottom-nav__item ${currentPath === '/contact' ? 'bottom-nav__item--active' : ''}`}
      >
        <FiUser size={20} className="bottom-nav__icon" />
        <span className="bottom-nav__label">Account</span>
      </Link>
    </nav>
  )
}
