import { useState, useEffect, useCallback  } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

const galleryData = [
  {
    id: '20252',
    title: '데몬팀 MT',
    subtitle: 'GAPYEONG, South Korea',
    description: `
    데몬팀은 3월 경기도 가평으로 MT 를 다녀왔습니다 😊
    비록 모든 멤버가 참여하진 못했지만 1박 2일동안
    새로운 팀원들과도 친해질 수 있는 시간이였어요 😍
    `,
    imageUrl: '/images/gallery/2025/2025_demon_mt.jpg',
    fallbackText: 'hcamp-30'
  },
  {
    id: '20251',
    title: '제 30회 해킹캠프 동계',
    subtitle: 'Seoul, South Korea',
    description: `
    제 30회 해킹캠프 겨울 시즌이 무사히 잘 끝났습니다 😊
    데몬팀에서는 매년 해킹캠프 CTF 대회를 운영하고 있어요 ✌
    내년에 진행 될 해킹캠프 여름 시즌을 기대해주세요 👀👀
    `,
    imageUrl: '/images/gallery/2025/2025_hcamp_30.jpg',
    fallbackText: 'hcamp-30'
  },
]

function FormattedDescription({ desc }) {
  return <ReactMarkdown remarkPlugins={remarkGfm}>{desc}</ReactMarkdown>
}

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imageErrors, setImageErrors] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState(null)
  const [imageLoading, setImageLoading] = useState({})
  const totalSlides = galleryData.length

  // 슬라이드 변경 함수
  const changeSlide = useCallback((direction) => {
    setCurrentSlide(prev => {
      let newSlide = prev + direction
      if (newSlide >= totalSlides) return 0
      if (newSlide < 0) return totalSlides - 1
      return newSlide
    })
  }, [totalSlides])

  // 특정 슬라이드로 이동
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  // 이미지 에러 핸들링
  const handleImageError = useCallback((id) => {
    console.log(`Image error for: ${id}`)
    setImageErrors(prev => ({ ...prev, [id]: true }))
    setImageLoading(prev => ({ ...prev, [id]: false }))
  }, [])

  // 이미지 로딩 상태 관리
  const handleImageLoadStart = useCallback((id) => {
    setImageLoading(prev => ({ ...prev, [id]: true }))
  }, [])

  const handleImageLoadComplete = useCallback((id) => {
    setImageLoading(prev => ({ ...prev, [id]: false }))
  }, [])

  // 이미지 프리로드 함수
  const preloadImage = useCallback((imageUrl, title) => {
    return new Promise((resolve, reject) => {
      if (typeof window !== 'undefined') {
        const img = new window.Image()
        img.onload = () => {
          console.log('Image preloaded:', title)
          resolve(img)
        }
        img.onerror = reject
        img.src = imageUrl
      } else {
        resolve(null)
      }
    })
  }, [])

  const closeModal = useCallback(() => {
    console.log('Closing modal')
    setIsModalOpen(false)
    setModalImage(null)
    
    if (typeof document !== 'undefined') {
      document.body.classList.remove('modal-open')
      document.body.style.overflow = ''
    }
  }, [])

  const changeModalImage = useCallback(async (direction) => {
    if (!modalImage) return
    
    const currentIndex = galleryData.findIndex(item => item.id === modalImage.id)
    let newIndex = currentIndex + direction
    
    if (newIndex >= totalSlides) newIndex = 0
    if (newIndex < 0) newIndex = totalSlides - 1
    
    const newImage = galleryData[newIndex]
    console.log('Changing modal image to:', newImage.title)

    try {
      await preloadImage(newImage.imageUrl, newImage.title)
    } catch (error) {
      console.warn('Failed to preload next modal image:', error)
    }
    
    setModalImage(newImage)
  }, [modalImage, totalSlides, preloadImage])

  const handleImageClick = useCallback(async (item, event) => {
    event.preventDefault()
    event.stopPropagation()
    
    console.log('Image clicked:', item.id, 'Error status:', imageErrors[item.id])
    if (!imageErrors[item.id]) {
      console.log('Opening modal for:', item.title)
      
      try {
        await preloadImage(item.imageUrl, item.title)
      } catch (error) {
        console.warn('Failed to preload modal image:', error)
      }
      
      setModalImage(item)
      setIsModalOpen(true)

      if (typeof document !== 'undefined') {
        document.body.classList.add('modal-open')
        document.body.style.overflow = 'hidden'
      }
    }
  }, [imageErrors, preloadImage])

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log('Key pressed:', e.key, 'Modal open:', isModalOpen)
      
      if (isModalOpen) {
        switch (e.key) {
          case 'Escape':
            e.preventDefault()
            e.stopPropagation()
            console.log('ESC pressed - closing modal')
            closeModal()
            break
          case 'ArrowLeft':
            e.preventDefault()
            e.stopPropagation()
            changeModalImage(-1)
            break
          case 'ArrowRight':
            e.preventDefault()
            e.stopPropagation()
            changeModalImage(1)
            break
        }
      } else {
        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault()
            changeSlide(-1)
            break
          case 'ArrowRight':
            e.preventDefault()
            changeSlide(1)
            break
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown, { capture: true })
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown, { capture: true })
    }
  }, [isModalOpen, changeSlide, closeModal, changeModalImage])

  useEffect(() => {
    if (isModalOpen) {
      console.log('Modal opened - setting up ESC listener')
      
      const handleEscapeKey = (e) => {
        if (e.key === 'Escape') {
          console.log('ESC key detected in modal effect')
          e.preventDefault()
          e.stopPropagation()
          closeModal()
        }
      }

      window.addEventListener('keydown', handleEscapeKey, { capture: true })
      
      return () => {
        window.removeEventListener('keydown', handleEscapeKey, { capture: true })
      }
    }
  }, [isModalOpen, closeModal])

  const handleModalBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      console.log('Modal backdrop clicked')
      closeModal()
    }
  }, [closeModal])

  useEffect(() => {
    return () => {
      if (typeof document !== 'undefined') {
        document.body.classList.remove('modal-open')
        document.body.style.overflow = ''
      }
    }
  }, [])

  useEffect(() => {
    const preloadSlides = async () => {
      const currentItem = galleryData[currentSlide]
      const nextIndex = currentSlide + 1 >= totalSlides ? 0 : currentSlide + 1
      const nextItem = galleryData[nextIndex]
      
      try {
        await Promise.all([
          preloadImage(currentItem.imageUrl, currentItem.title),
          preloadImage(nextItem.imageUrl, nextItem.title)
        ])
      } catch (error) {
        console.warn('Failed to preload slide images:', error)
      }
    }
    
    preloadSlides()
  }, [currentSlide, totalSlides, preloadImage])

  return (
    <>
      <section className="section" id="gallery">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="section-subtitle">ls -la /home/gallery/</div>
          
          <div className="gallery-container">
            <div className="gallery-slider">
              {galleryData.map((item, index) => (
                <div 
                  key={item.id}
                  className={`gallery-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="slide-content">
                    <div className="gallery-photo">
                      <div 
                        className={`gallery-image-container ${imageErrors[item.id] ? 'error' : 'clickable'}`}
                        onClick={(e) => handleImageClick(item, e)}
                        role={imageErrors[item.id] ? undefined : "button"}
                        tabIndex={imageErrors[item.id] ? -1 : 0}
                        onKeyDown={(e) => {
                          if ((e.key === 'Enter' || e.key === ' ') && !imageErrors[item.id]) {
                            handleImageClick(item, e)
                          }
                        }}
                        aria-label={imageErrors[item.id] ? undefined : `${item.title} 이미지 확대보기`}
                      >
                        {imageErrors[item.id] ? (
                          <div className="gallery-image-fallback">
                            {item.fallbackText}
                          </div>
                        ) : (
                          <>
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              width={300}
                              height={300}
                              className="gallery-image"
                              onLoadingComplete={() => handleImageLoadComplete(item.id)}
                              onError={() => handleImageError(item.id)}
                              priority={index === 0}
                              quality={85}
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            />
                            {!imageLoading[item.id] && (
                              <div className="image-click-hint">
                                <span>🔍</span>
                              </div>
                            )}
                          </>
                        )}
                        <div className="gallery-overlay"></div>
                      </div>
                    </div>
                    <div className="gallery-info">
                      <h3 className="gallery-title">{item.title}</h3>
                      <p className="gallery-subtitle">{item.subtitle}</p>
                      <FormattedDescription desc={item.description} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-controls">
              <button 
                className="slider-btn prev" 
                onClick={() => changeSlide(-1)}
                aria-label="이전 이미지"
                disabled={imageLoading[galleryData[currentSlide]?.id]}
              >
                ‹
              </button>
              <div className="slider-dots">
                {galleryData.map((_, index) => (
                  <span 
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`${index + 1}번째 이미지로 이동`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        goToSlide(index)
                      }
                    }}
                  />
                ))}
              </div>
              <button 
                className="slider-btn next" 
                onClick={() => changeSlide(1)}
                aria-label="다음 이미지"
                disabled={imageLoading[galleryData[currentSlide]?.id]}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 이미지 모달 - 최적화된 버전 */}
      {isModalOpen && modalImage && (
        <div 
          className="image-modal" 
          onClick={handleModalBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              console.log('ESC pressed on modal div')
              e.preventDefault()
              e.stopPropagation()
              closeModal()
            }
          }}
          tabIndex={-1}
        >
          <div className="modal-content">
            {/* 모달 헤더 */}
            <div className="modal-header">
              <div className="modal-title">
                <h3 id="modal-title">{modalImage.title}</h3>
                <p>{modalImage.subtitle}</p>
              </div>
              <button 
                className="modal-close" 
                onClick={closeModal}
                aria-label="모달 닫기"
                autoFocus
              >
                ✕
              </button>
            </div>

            {/* 모달 이미지 - 크기 및 성능 최적화 */}
            <div className="modal-image-container">
              <button 
                className="modal-nav-btn modal-prev" 
                onClick={() => changeModalImage(-1)}
                aria-label="이전 이미지"
              >
                ‹
              </button>
              
              <div className="modal-image-wrapper">
                <Image
                  src={modalImage.imageUrl}
                  alt={modalImage.title}
                  width={600}
                  height={600}
                  className="modal-image"
                  quality={90}
                  priority={true}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  loading="eager"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                  onLoad={() => {
                    console.log('Modal image loaded:', modalImage.title)
                  }}
                  onError={(e) => {
                    console.error('Modal image failed to load:', modalImage.imageUrl)
                  }}
                />
              </div>

              <button 
                className="modal-nav-btn modal-next" 
                onClick={() => changeModalImage(1)}
                aria-label="다음 이미지"
              >
                ›
              </button>
            </div>

            {/* 모달 하단 정보 */}
            <div className="modal-footer">
              <p className="modal-description">{modalImage.description}</p>
              <div className="modal-controls">
                <span className="modal-hint">ESC로 창을 닫으실 수 있습니다.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}