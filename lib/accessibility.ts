/**
 * Accessibility utilities for WAI-ARIA compliance
 */

// Skip navigation links for keyboard users
export const skipLinks = [
  { id: 'main-content', label: 'Skip to main content' },
  { id: 'navigation', label: 'Skip to navigation' },
  { id: 'footer', label: 'Skip to footer' },
];

// Keyboard navigation hooks
export const KEYBOARD_KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
};

// Focus trap utility for modals and dialogs
export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusableElement = focusableElements[0] as HTMLElement;
  const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === KEYBOARD_KEYS.TAB) {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
  };

  element.addEventListener('keydown', handleKeyDown);
  firstFocusableElement?.focus();

  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
};

// Announce message to screen readers
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Generate unique IDs for ARIA relationships
export const generateId = (prefix: string) => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Color contrast utilities
export const getContrastRatio = (color1: string, color2: string): number => {
  // Convert hex to RGB
  const getRGB = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  // Calculate relative luminance
  const getLuminance = (rgb: { r: number; g: number; b: number }) => {
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((val) => {
      val = val / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const rgb1 = getRGB(color1);
  const rgb2 = getRGB(color2);
  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
};

// Check if contrast meets WCAG standards
export const meetsContrastStandard = (ratio: number, level: 'AA' | 'AAA' = 'AA', isLargeText = false) => {
  if (level === 'AA') {
    return isLargeText ? ratio >= 3 : ratio >= 4.5;
  } else {
    return isLargeText ? ratio >= 4.5 : ratio >= 7;
  }
};

// Keyboard navigation hook
export const useKeyboardNavigation = (items: string[], onSelect: (index: number) => void) => {
  let currentIndex = -1;

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case KEYBOARD_KEYS.ARROW_DOWN:
        e.preventDefault();
        currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        onSelect(currentIndex);
        break;
      case KEYBOARD_KEYS.ARROW_UP:
        e.preventDefault();
        currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        onSelect(currentIndex);
        break;
      case KEYBOARD_KEYS.HOME:
        e.preventDefault();
        currentIndex = 0;
        onSelect(currentIndex);
        break;
      case KEYBOARD_KEYS.END:
        e.preventDefault();
        currentIndex = items.length - 1;
        onSelect(currentIndex);
        break;
    }
  };

  return handleKeyDown;
};

// Live region for dynamic content updates
export const createLiveRegion = (id: string, ariaLive: 'polite' | 'assertive' = 'polite') => {
  const region = document.createElement('div');
  region.id = id;
  region.setAttribute('aria-live', ariaLive);
  region.setAttribute('aria-atomic', 'true');
  region.className = 'sr-only';
  document.body.appendChild(region);
  return region;
};

// Focus management utilities
export const focusElement = (selector: string) => {
  const element = document.querySelector(selector) as HTMLElement;
  if (element) {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

// ARIA labels for common UI patterns
export const ariaLabels = {
  navigation: {
    main: 'Main navigation',
    mobile: 'Mobile navigation menu',
    breadcrumb: 'Breadcrumb navigation',
    pagination: 'Pagination navigation',
  },
  buttons: {
    close: 'Close',
    menu: 'Open menu',
    darkMode: 'Toggle dark mode',
    language: 'Change language',
    submit: 'Submit form',
    cancel: 'Cancel',
    previous: 'Previous',
    next: 'Next',
  },
  forms: {
    required: 'Required field',
    error: 'Error:',
    success: 'Success:',
    info: 'Information:',
  },
  regions: {
    header: 'Page header',
    main: 'Main content',
    footer: 'Page footer',
    aside: 'Sidebar',
    search: 'Search',
  },
};
