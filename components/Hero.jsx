import { useEffect } from 'react'
import { hackEffect } from '../utils/animations'

export default function Hero() {
  useEffect(() => {
    const heroTitle = document.querySelector('.hero h1')
    if (heroTitle) {
      hackEffect(heroTitle, 'DEMON', 1500)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-subtitle">// Welcome to</div>
        <h1 className="terminal-cursor">DEMON</h1>
        <p className="hero-description">
          Cybersecurity Research Team
        </p>
        <div className="cta-group">
          <a 
            href="#timeline" 
            className="cta-button"
            onClick={() => scrollToSection('timeline')}
          >
            sudo ./explore
          </a>
          <a 
            href="#qa" 
            className="cta-button secondary"
            onClick={() => scrollToSection('qa')}
          >
            cat faq.txt
          </a>
        </div>
      </div>
    </section>
  )
}