import { useEffect } from 'react'

export default function useScrollProgress() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      document.documentElement.style.setProperty('--scroll-progress', `${scrolled}%`)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])
}