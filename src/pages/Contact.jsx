import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi'
import AnimatedSection from '../components/AnimatedSection'
import './Contact.css'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const contactInfo = [
  {
    icon: <FiPhone />,
    title: 'Phone',
    lines: ['0475-2270677', '+91 93491 67973'],
    href: 'tel:04752270677',
    color: '#22c55e',
  },
  {
    icon: <FiMail />,
    title: 'Email',
    lines: ['samkarathil@gmail.com'],
    href: 'mailto:samkarathil@gmail.com',
    color: '#3b82f6',
  },
  {
    icon: <FiMapPin />,
    title: 'Location',
    lines: ['Samkarathil Trading Company Pvt Ltd', 'R.O Junction, Anchal,', 'Kollam, Kerala – 691306'],
    href: 'https://maps.google.com/?q=Anchal+Kollam+Kerala',
    color: '#f5a623',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

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
            <span className="section-label">Reach Out</span>
            <h1 className="page-hero__title">Contact <span className="gradient-text">Us</span></h1>
            <p className="page-hero__subtitle">
              We'd love to hear from you. Visit us or drop a message anytime.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Contact Info Cards */}
          <div className="contact-info-grid">
            {contactInfo.map((info, i) => (
              <AnimatedSection key={info.title} variant="fadeUp" delay={i * 0.1}>
                <a href={info.href} target={info.title === 'Location' ? '_blank' : '_self'} rel="noreferrer" className="contact-info-card glass-card">
                  <div className="contact-info-card__icon" style={{ '--ci-color': info.color }}>
                    {info.icon}
                  </div>
                  <div className="contact-info-card__body">
                    <h3>{info.title}</h3>
                    {info.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          {/* Form + Map */}
          <div className="contact-main">
            {/* Form */}
            <AnimatedSection variant="slideLeft" className="contact-form-wrapper">
              <div className="glass-card contact-form-card">
                <h2 className="contact-form-card__title">Send Us a Message</h2>
                <p className="contact-form-card__sub">We'll get back to you within 24 hours.</p>

                {submitted ? (
                  <motion.div
                    className="contact-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <FiCheckCircle className="contact-success__icon" />
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We'll contact you soon.</p>
                    <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}>
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                          placeholder="Your full name"
                        />
                        {errors.name && <span className="form-error">{errors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="+91 ..."
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Subject</label>
                        <input
                          id="contact-subject"
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                        placeholder="Write your message here..."
                      />
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>
                    <button type="submit" className="btn btn-primary contact-submit-btn" id="contact-submit">
                      <FiSend /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection variant="slideRight" className="contact-map-wrapper">
              <div className="glass-card contact-map-card">
                <h3 className="contact-map-card__title">Find Us Here</h3>
                <div className="contact-map-embed">
                  <iframe
                    title="S-MART Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.8574693254483!2d76.9218!3d8.9893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e59e00000001%3A0x12345!2sAnchal%2C+Kollam%2C+Kerala!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="contact-map-details">
                  <div className="contact-map-detail-row">
                    <FiMapPin color="#f5a623" />
                    <span>R.O Junction, Anchal, Kollam, Kerala – 691306</span>
                  </div>
                  <div className="contact-map-detail-row">
                    <FiPhone color="#22c55e" />
                    <span>0475-2270677 | +91 93491 67973</span>
                  </div>
                  <div className="contact-map-detail-row">
                    <FiMail color="#3b82f6" />
                    <span>samkarathil@gmail.com</span>
                  </div>
                </div>
                <div className="contact-hours">
                  <h4>Store Hours</h4>
                  <div className="contact-hours__row">
                    <span>Monday – Saturday</span>
                    <span>8:00 AM – 9:00 PM</span>
                  </div>
                  <div className="contact-hours__row">
                    <span>Sunday</span>
                    <span>9:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
