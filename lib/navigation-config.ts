// Navigation configuration with enhanced information architecture
export interface NavigationItem {
  id: string
  label: {
    en: string
    es: string
  }
  priority: 'primary' | 'secondary'
  icon?: string
  description?: {
    en: string
    es: string
  }
  subsections?: NavigationItem[]
}

export const navigationConfig: NavigationItem[] = [
  {
    id: "home",
    label: {
      en: "Home",
      es: "Inicio"
    },
    priority: "primary"
  },
  {
    id: "about",
    label: {
      en: "About Me",
      es: "Sobre Mí"
    },
    priority: "primary",
    description: {
      en: "Learn about my background and expertise",
      es: "Conoce mi experiencia y especialización"
    }
  },
  {
    id: "expertise",
    label: {
      en: "Expertise",
      es: "Experiencia"
    },
    priority: "primary",
    description: {
      en: "Professional experience and skills",
      es: "Experiencia profesional y habilidades"
    },
    subsections: [
      {
        id: "experience",
        label: {
          en: "Work Experience",
          es: "Experiencia Laboral"
        },
        priority: "secondary"
      },
      {
        id: "skills",
        label: {
          en: "Technical Skills",
          es: "Habilidades Técnicas"
        },
        priority: "secondary"
      }
    ]
  },
  {
    id: "services",
    label: {
      en: "Services",
      es: "Servicios"
    },
    priority: "primary",
    description: {
      en: "How I can help grow your business",
      es: "Cómo puedo ayudar a crecer tu negocio"
    }
  },
  {
    id: "portfolio",
    label: {
      en: "Case Studies",
      es: "Casos de Éxito"
    },
    priority: "primary",
    description: {
      en: "Real results from successful campaigns",
      es: "Resultados reales de campañas exitosas"
    }
  },
  {
    id: "testimonials",
    label: {
      en: "Client Stories",
      es: "Testimonios"
    },
    priority: "secondary",
    description: {
      en: "What clients say about working with me",
      es: "Lo que dicen los clientes sobre trabajar conmigo"
    }
  },
  {
    id: "contact",
    label: {
      en: "Let's Connect",
      es: "Conectemos"
    },
    priority: "primary",
    description: {
      en: "Start your digital transformation today",
      es: "Comienza tu transformación digital hoy"
    }
  }
]

// Helper function to get primary navigation items
export const getPrimaryNavItems = () => 
  navigationConfig.filter(item => item.priority === 'primary')

// Helper function to get all navigation items with subsections flattened
export const getAllNavItems = () => {
  const items: NavigationItem[] = []
  navigationConfig.forEach(item => {
    items.push(item)
    if (item.subsections) {
      items.push(...item.subsections)
    }
  })
  return items
}
