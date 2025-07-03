import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="#home" className="logo" onClick={() => scrollToSection('home')}>
          DEMON
        </Link>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => scrollToSection('home')}>~/home</a></li>
          <li><a href="#timeline" onClick={() => scrollToSection('timeline')}>~/timeline</a></li>
          <li><a href="#members" onClick={() => scrollToSection('members')}>~/members</a></li>
          <li><a href="#gallery" onClick={() => scrollToSection('gallery')}>~/gallery</a></li>
          <li><a href="#qa" onClick={() => scrollToSection('qa')}>~/qa</a></li>
        </ul>
        
        <div className="mobile-menu" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}