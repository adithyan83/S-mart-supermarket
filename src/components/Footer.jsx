import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiChevronUp
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

const popularCategories = [
  'Grocery',
  'Vegetables & Fruits',
  'Beverages',
  'Frozen Foods',
  'Personal Care',
  'Footwear & Toys',
  'Cosmetics',
  'Stationery',
]

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/offers', label: 'Offers' },
  { to: '/contact', label: 'Contact Us' },
]

const blogPosts = [
  'Digital marketing ideas for your biz..',
  'New trends in web designing...',
  'Make money from your website...',
]

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState({
    popular: false,
    links: false,
    blog: false,
    touch: false,
  })
  
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">S</div>
              <div>
                <div className="footer__logo-name">S-MART</div>
                <div className="footer__logo-sub">Supermarket</div>
              </div>
            </div>
            <p className="footer__desc">
              One of the leading supermarkets in Anchal, Kerala. Quality products,
              affordable prices, and 70+ years of retail experience.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook" className="footer__social-icon"><FiFacebook /></a>
              <a href="#" aria-label="Instagram" className="footer__social-icon"><FiInstagram /></a>
              <a href="https://wa.me/919349167973" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer__social-icon"><FaWhatsapp /></a>
              <a href="#" aria-label="Twitter" className="footer__social-icon"><FiTwitter /></a>
            </div>
          </div>

          {/* Popular Categories */}
          <div className="footer__col">
            <h4 className="footer__heading" onClick={() => toggleSection('popular')}>
              Popular Category
              <span className="footer__accordion-toggle">
                {expandedSections.popular ? '−' : '+'}
              </span>
            </h4>
            <ul className={`footer__list ${expandedSections.popular ? 'footer__list--open' : ''}`}>
              {popularCategories.map((cat) => (
                <li key={cat}>
                  <Link to="/products" className="footer__link">
                    <span className="footer__link-arrow">›</span> {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading" onClick={() => toggleSection('links')}>
              Quick Links
              <span className="footer__accordion-toggle">
                {expandedSections.links ? '−' : '+'}
              </span>
            </h4>
            <ul className={`footer__list ${expandedSections.links ? 'footer__list--open' : ''}`}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer__link">
                    <span className="footer__link-arrow">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div className="footer__col">
            <h4 className="footer__heading" onClick={() => toggleSection('blog')}>
              Blog
              <span className="footer__accordion-toggle">
                {expandedSections.blog ? '−' : '+'}
              </span>
            </h4>
            <ul className={`footer__list ${expandedSections.blog ? 'footer__list--open' : ''}`}>
              {blogPosts.map((post) => (
                <li key={post}>
                  <a href="#" className="footer__link">
                    <span className="footer__link-arrow">›</span> {post}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading" onClick={() => toggleSection('touch')}>
              Get in Touch
              <span className="footer__accordion-toggle">
                {expandedSections.touch ? '−' : '+'}
              </span>
            </h4>
            <ul className={`footer__contact ${expandedSections.touch ? 'footer__list--open' : ''}`}>
              <li>
                <FiPhone className="footer__contact-icon" />
                <div>
                  <a href="tel:04752270677" className="footer__link">0475-2270677</a>
                  <br />
                  <a href="tel:+919349167973" className="footer__link">+91 93491 67973</a>
                </div>
              </li>
              <li>
                <FiMail className="footer__contact-icon" />
                <a href="mailto:samkarathil@gmail.com" className="footer__link">
                  samkarathil@gmail.com
                </a>
              </li>
              <li>
                <FiMapPin className="footer__contact-icon" style={{ alignSelf: 'flex-start', marginTop: '3px' }} />
                <address className="footer__address">
                  Samkarathil Trading Company Pvt Ltd<br />
                  R.O Junction, Anchal,<br />
                  Kollam, Kerala – 691306
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            Copyright © {new Date().getFullYear()} S-MART. All rights reserved.
          </p>
          <p className="footer__powered">
            Designed &amp; Developed by{' '}
            <a
              href="https://vawtechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__powered-link"
            >
              VAW Technologies
            </a>
          </p>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <FiChevronUp size={20} />
        </button>
      )}
    </footer>
  )
}
