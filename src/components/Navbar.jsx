import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown, FiTag, FiMapPin, FiPhone, FiClock } from 'react-icons/fi'
import Logo from '../assets/Logo.png' // supermarket text → white
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/offers', label: 'Offers' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className="header-wrapper">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="top-bar__container">
            <div className="top-bar__left">
              <FiMapPin className="top-bar__icon" />
              <span>Est. 2006 – Anchal, Kerala</span>
            </div>
            <div className="top-bar__center">
              <span>Quality Products. Affordable Prices. <span className="top-bar__highlight">Everyday!</span></span>
            </div>
            <div className="top-bar__right">
              <a href="tel:04752270677" className="top-bar__link">
                <FiPhone className="top-bar__icon" />
                <span>0475-2270677</span>
              </a>
              <span className="top-bar__separator">|</span>
              <div className="top-bar__info">
                <FiClock className="top-bar__icon" />
                <span>7:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Floating Navbar */}
        <motion.nav
          className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="navbar__container">
            {/* Logo */}
            <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
              <img src={Logo} alt="S-Mart Supermarket" className="navbar__logo-img" />
            </Link>

            {/* Desktop Links */}
            <ul className="navbar__links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                    }
                  >
                    {link.label}
                    {link.label === 'Products' && <FiChevronDown className="navbar__chevron" />}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="navbar__actions">
              <Link to="/offers" className="btn btn-primary navbar__cta">
                <FiTag />
                <span className="navbar__cta-desktop">Today's Deals</span>
                <span className="navbar__cta-mobile">Deals</span>
              </Link>
            </div>


            {/* Hamburger button (mobile only) */}
            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <ul className="mobile-menu__links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                    {link.label === 'Products' && <FiChevronDown className="navbar__chevron" />}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <div className="mobile-menu__cta-wrapper">
              <Link
                to="/offers"
                className="btn btn-primary mobile-menu__cta"
                onClick={() => setMenuOpen(false)}
              >
                <FiTag />
                Today's Deals
              </Link>
            </div>

            <div className="mobile-menu__footer">
              <p>📍 R.O Junction, Anchal, Kollam</p>
              <p>📞 0475-2270677</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {menuOpen && (
        <div className="mobile-menu__overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
)
}
