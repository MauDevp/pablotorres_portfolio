import { useEffect, useRef, useCallback, useState } from 'react';
import { KEYBOARD_KEYS, trapFocus, announceToScreenReader } from '@/lib/accessibility';

/**
 * Hook for managing keyboard navigation in lists
 */
export const useListKeyboardNavigation = (
  items: any[],
  onSelect?: (index: number) => void,
  onActivate?: (index: number) => void
) => {
  const currentIndexRef = useRef(-1);
  const itemRefsRef = useRef<(HTMLElement | null)[]>([]);

  const setItemRef = useCallback((index: number) => (el: HTMLElement | null) => {
    itemRefsRef.current[index] = el;
  }, []);

  const focusItem = useCallback((index: number) => {
    if (index >= 0 && index < items.length) {
      currentIndexRef.current = index;
      itemRefsRef.current[index]?.focus();
      onSelect?.(index);
    }
  }, [items.length, onSelect]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const currentIndex = currentIndexRef.current;

    switch (e.key) {
      case KEYBOARD_KEYS.ARROW_DOWN:
      case KEYBOARD_KEYS.ARROW_RIGHT:
        e.preventDefault();
        focusItem(currentIndex < items.length - 1 ? currentIndex + 1 : 0);
        break;

      case KEYBOARD_KEYS.ARROW_UP:
      case KEYBOARD_KEYS.ARROW_LEFT:
        e.preventDefault();
        focusItem(currentIndex > 0 ? currentIndex - 1 : items.length - 1);
        break;

      case KEYBOARD_KEYS.HOME:
        e.preventDefault();
        focusItem(0);
        break;

      case KEYBOARD_KEYS.END:
        e.preventDefault();
        focusItem(items.length - 1);
        break;

      case KEYBOARD_KEYS.ENTER:
      case KEYBOARD_KEYS.SPACE:
        e.preventDefault();
        if (currentIndex >= 0 && currentIndex < items.length) {
          onActivate?.(currentIndex);
        }
        break;

      case KEYBOARD_KEYS.ESCAPE:
        e.preventDefault();
        currentIndexRef.current = -1;
        (e.target as HTMLElement).blur();
        break;
    }
  }, [items.length, focusItem, onActivate]);

  return {
    handleKeyDown,
    setItemRef,
    focusItem,
    currentIndex: currentIndexRef.current
  };
};

/**
 * Hook for managing focus trap in modals/dialogs
 */
export const useFocusTrap = (isActive: boolean) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const previousActiveElementRef = useRef<Element | null>(null);

  useEffect(() => {
    if (isActive && containerRef.current) {
      previousActiveElementRef.current = document.activeElement;
      const cleanup = trapFocus(containerRef.current);

      return () => {
        cleanup();
        if (previousActiveElementRef.current instanceof HTMLElement) {
          previousActiveElementRef.current.focus();
        }
      };
    }
  }, [isActive]);

  return containerRef;
};

/**
 * Hook for managing aria-live announcements
 */
export const useAnnouncement = () => {
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    announceToScreenReader(message, priority);
  }, []);

  return announce;
};

/**
 * Hook for managing focus on route changes
 */
export const useRouteFocus = () => {
  useEffect(() => {
    const handleRouteChange = () => {
      // Focus the main content area on route change
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
        announceToScreenReader('Page loaded');
      }
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
};

/**
 * Hook for managing keyboard shortcuts
 */
export const useKeyboardShortcuts = (shortcuts: Record<string, () => void>) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const modifier = e.ctrlKey ? 'ctrl+' : e.metaKey ? 'cmd+' : '';
      const shortcut = modifier + key;

      if (shortcuts[shortcut]) {
        e.preventDefault();
        shortcuts[shortcut]();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [shortcuts]);
};

/**
 * Hook for detecting and respecting prefers-reduced-motion
 */
export const usePrefersReducedMotion = () => {
  const QUERY = '(prefers-reduced-motion: reduce)';
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
};
