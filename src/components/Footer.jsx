import { Link } from 'react-router-dom'
import {
  FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter
} from 'react-icons/fi'
import './Footer.css'

const popularCategories = [
  'Grocery',
  'Organic Vegetables & Fruits',
  'Beverages & Diary Products',
  'Frozen Foods',
  'Personal & Home Care',
  'Footwears, Toys & Gift Items',
  'Cosmetics & Fashion Accessory',
  'Book, Magazines & Stationery',
]

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/about', label: 'ISO Certification' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Privacy Policy' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/contact', label: 'Login' },
]

const blogPosts = [
  'Digital marketing ideas for your biz..',
  'New trends in web designing...',
  'Make money from your website...',
]

export default function Footer() {
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
              <a href="#" aria-label="Twitter" className="footer__social-icon"><FiTwitter /></a>
            </div>
          </div>

          {/* Popular Categories */}
          <div className="footer__col">
            <h4 className="footer__heading">Popular Category</h4>
            <ul className="footer__list">
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
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer__link">
                    <span className="footer__link-arrow">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Feeds */}
          <div className="footer__col">
            <h4 className="footer__heading">Blog Feeds</h4>
            <ul className="footer__list">
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
            <h4 className="footer__heading">Get in Touch</h4>
            <ul className="footer__contact">
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
            Powered by <a href="#" className="footer__link footer__powered-link">Altiztech</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
