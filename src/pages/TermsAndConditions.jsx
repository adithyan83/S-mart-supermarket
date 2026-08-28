import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import './TermsAndConditions.css'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: `By accessing and using the S-MART Supermarket website and services, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of our services following any changes constitutes your acceptance of the revised terms.`,
  },
  {
    id: 'use',
    title: '2. Use of Our Services',
    content: `You agree to use our website and services only for lawful purposes and in a manner that does not infringe the rights of others. You must not:\n• Use our services in any way that violates applicable local, national, or international laws or regulations.\n• Transmit any unsolicited or unauthorised advertising or promotional material.\n• Attempt to gain unauthorised access to any part of our website or its related systems.\n• Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.`,
  },
  {
    id: 'products',
    title: '3. Products & Pricing',
    content: `All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time. Prices for our products are subject to change without notice. We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of any product or service. While we make every effort to display product colours and images accurately, we cannot guarantee that your device's display will be accurate.`,
  },
  {
    id: 'orders',
    title: '4. Orders & Payments',
    content: `When you place an order with us, you are making an offer to purchase the selected products. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product or pricing information, or issues identified by our fraud detection team. Payment must be received in full before an order is processed. We accept cash, UPI, and major debit/credit cards at our store.`,
  },
  {
    id: 'returns',
    title: '5. Returns & Refunds',
    content: `We want you to be completely satisfied with your purchase. If you are not satisfied, you may return most items within 7 days of purchase with a valid receipt, provided the item is unused, in its original packaging, and in a resaleable condition. Perishable goods, opened personal care products, and items marked as non-returnable are excluded from this policy. Refunds will be processed within 5–7 business days using the original payment method.`,
  },
  {
    id: 'intellectual',
    title: '6. Intellectual Property',
    content: `All content on the S-MART website, including but not limited to text, graphics, logos, images, and software, is the property of Samkarathil Trading Company Pvt Ltd and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent. The S-MART name, logo, and all related names, logos, product and service names are trademarks of Samkarathil Trading Company Pvt Ltd.`,
  },
  {
    id: 'privacy',
    title: '7. Privacy & Data',
    content: `Your privacy is important to us. Any personal information collected through our website or store is used solely for the purpose of providing and improving our services. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except where required by law. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.`,
  },
  {
    id: 'liability',
    title: '8. Limitation of Liability',
    content: `To the fullest extent permitted by law, Samkarathil Trading Company Pvt Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, our services. Our total liability to you for any claim arising out of or relating to these terms or our services shall not exceed the amount paid by you for the specific product or service giving rise to the claim.`,
  },
  {
    id: 'governing',
    title: '9. Governing Law',
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Kollam, Kerala. If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.`,
  },
  {
    id: 'contact',
    title: '10. Contact Us',
    content: `If you have any questions about these Terms and Conditions, please contact us:\n\nSamkarathil Trading Company Pvt Ltd\nR.O Junction, Anchal, Kollam, Kerala – 691306\nPhone: 0475-2270677 / +91 93491 67973\nEmail: samkarathil@gmail.com`,
  },
]

export default function TermsAndConditions() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero */}
      <section className="page-hero terms-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="terms-hero__badge">Legal</span>
          <h1 className="page-hero__title">Terms &amp; Conditions</h1>
          <p className="page-hero__subtitle">
            Please read these terms carefully before using our services.
          </p>
          <p className="terms-hero__date">Last updated: August 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="terms-body">
        <div className="container terms-layout">
          {/* Sidebar TOC */}
          <nav className="terms-toc" aria-label="Table of contents">
            <h2 className="terms-toc__heading">Contents</h2>
            <ul className="terms-toc__list">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="terms-toc__link">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="terms-sections">
            <AnimatedSection>
              <div className="terms-intro-card">
                <p>
                  Welcome to <strong>S-MART Supermarket</strong>. These Terms and Conditions govern
                  your use of our website and in-store services operated by{' '}
                  <strong>Samkarathil Trading Company Pvt Ltd</strong>. By accessing or using our
                  services, you agree to be bound by these terms.
                </p>
              </div>
            </AnimatedSection>

            {sections.map((s, i) => (
              <AnimatedSection key={s.id} delay={i * 0.05}>
                <div id={s.id} className="terms-section">
                  <h2 className="terms-section__title">{s.title}</h2>
                  <div className="terms-section__body">
                    {s.content.split('\n').map((line, idx) =>
                      line.trim() === '' ? (
                        <br key={idx} />
                      ) : (
                        <p key={idx}>{line}</p>
                      )
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
