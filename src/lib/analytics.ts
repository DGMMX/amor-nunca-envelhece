// Google Analytics 4 Configuration
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Google Analytics 4
    window.gtag = window.gtag || function() {
      (window.gtag as any).q = (window.gtag as any).q || []
      ;(window.gtag as any).q.push(arguments)
    }
    
    window.gtag('js', new Date())
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
  trackEvent('click', 'engagement', 'whatsapp_button')
}

// Track form submissions
export const trackFormSubmission = (formType: string) => {
  trackEvent('submit', 'form', formType)
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
} 