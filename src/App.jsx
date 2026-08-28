import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Offers from './pages/Offers'
import Contact from './pages/Contact'
import TermsAndConditions from './pages/TermsAndConditions'

/* Scroll to top on every route change — works on desktop + mobile Safari */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Use requestAnimationFrame so it fires after Framer Motion's exit animation
    // clears the previous page from the DOM, landing correctly at the new page top
    const raf = requestAnimationFrame(() => {
      // window.scrollTo covers Chrome/Firefox/Edge
      window.scrollTo(0, 0)
      // Explicit fallback for Safari iOS which can ignore window.scrollTo
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
