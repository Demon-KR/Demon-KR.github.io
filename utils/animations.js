export function hackEffect(element, finalText, duration = 2000) {
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let iterations = 0
  
  const interval = setInterval(() => {
    element.textContent = finalText
      .split('')
      .map((char, index) => {
        if (index < iterations) {
          return finalText[index]
        }
        return chars[Math.floor(Math.random() * chars.length)]
      })
      .join('')

    if (iterations >= finalText.length) {
      clearInterval(interval)
    }
    iterations += 1/3
  }, 50)
}

export function animateOnScroll() {
  const elements = document.querySelectorAll('.timeline-item, .gallery-container, .qa-item')
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('fade-in-up')
    }
  })
}