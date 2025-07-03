import { useState, useEffect } from 'react'
import Image from 'next/image'

const galleryData = [
  {
    id: '1321',
    title: '제 30회 해킹캠프 동계',
    subtitle: 'Seoul, South Korea',
    description: '2025년 02월 제 30회 해킹캠프 동계 (예시 설명)',
    imageUrl: '/images/gallery/2025/2025_hcamp_30.jpg',
    fallbackText: 'hcamp-30'
  },
]

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imageErrors, setImageErrors] = useState({})
  const totalSlides = galleryData.length

  const changeSlide = (direction) => {
    let newSlide = currentSlide + direction
    
    if (newSlide >= totalSlides) {
      newSlide = 0
    } else if (newSlide < 0) {
      newSlide = totalSlides - 1
    }
    
    setCurrentSlide(newSlide)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleImageError = (id) => {
    setImageErrors(prev => ({
      ...prev,
      [id]: true
    }))
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        changeSlide(-1)
      } else if (e.key === 'ArrowRight') {
        changeSlide(1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  return (
    <section className="section" id="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="section-subtitle">ls -la /home/demon/gallery/</div>
        
        <div className="gallery-container">
          <div className="gallery-slider">
            {galleryData.map((item, index) => (
              <div 
                key={index}
                className={`gallery-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="slide-content">
                  <div className="gallery-photo">
                    <div className="gallery-image-container">
                      {imageErrors[item.id] ? (
                        <div className="gallery-image-fallback">
                          {item.fallbackText}
                        </div>
                      ) : (
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={300}
                          height={300}
                          className="gallery-image"
                          onError={() => handleImageError(item.id)}
                          priority={index === 0} // 첫 번째 이미지 preload
                        />
                      )}
                      { <div className="gallery-overlay"></div> }
                    </div>
                  </div>
                  <div className="gallery-info">
                    <h3 className="gallery-title">{item.title}</h3>
                    <p className="gallery-subtitle">{item.subtitle}</p>
                    <p className="gallery-description">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-controls">
            <button className="slider-btn prev" onClick={() => changeSlide(-1)}>
              ‹
            </button>
            <div className="slider-dots">
              {galleryData.map((_, index) => (
                <span 
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <button className="slider-btn next" onClick={() => changeSlide(1)}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}