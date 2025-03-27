import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (section) {
    // Get the header height to offset the scroll position
    const header = document.querySelector("header")
    const headerHeight = header ? header.offsetHeight : 0

    // Add a small additional offset for better visual spacing
    const offset = headerHeight + 16

    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    })
  }
}

