export const PERFORMANCE_CONFIG = {
  // Intersection Observer options
  intersectionObserver: {
    threshold: 0.1,
    rootMargin: "-50px",
  },
  
  // Scroll throttling
  scrollThrottle: 16, // 60fps
  
  // Image optimization
  images: {
    quality: 85,
    formats: ['image/webp', 'image/avif'],
    sizes: {
      mobile: '(max-width: 640px) 100vw',
      tablet: '(max-width: 1024px) 50vw', 
      desktop: '25vw'
    }
  },
  
  // Animation preferences
  animations: {
    duration: 0.6,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    stagger: 0.1
  },
  
  // Bundle splitting
  chunks: {
    vendor: ['react', 'react-dom', 'next'],
    animations: ['framer-motion', 'gsap'],
    ui: ['@radix-ui'],
  }
}

// Performance monitoring utilities
export const performanceMonitor = {
  // Mark performance timings
  mark: (name: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.mark(name)
    }
  },
  
  // Measure performance between marks
  measure: (name: string, startMark: string, endMark: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      try {
        window.performance.measure(name, startMark, endMark)
        const measure = window.performance.getEntriesByName(name)[0]
        return measure.duration
      } catch (error) {
        console.warn('Performance measurement failed:', error)
        return 0
      }
    }
    return 0
  },
  
  // Log Core Web Vitals
  logCWV: () => {
    if (typeof window !== 'undefined') {
      // Import web-vitals dynamically
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      }).catch(() => {
        // Silently fail if web-vitals is not available
      })
    }
  }
}

// Lazy loading utilities
export const lazyLoad = {
  // Check if element is in viewport
  isInViewport: (element: HTMLElement) => {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  },
  
  // Preload critical resources
  preloadResource: (href: string, as: string) => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = href
      link.as = as
      document.head.appendChild(link)
    }
  },
  
  // Prefetch resources
  prefetchResource: (href: string) => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = href
      document.head.appendChild(link)
    }
  }
}

export default PERFORMANCE_CONFIG
