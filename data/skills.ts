export interface SkillCategory {
  name: {
    en: string // Nombre de la categoría en inglés
    es: string // Nombre de la categoría en español
  }
  skills: {
    en: string // Habilidades en inglés
    es: string // Habilidades en español
  }
}

// Categorías de habilidades profesionales de Pablo Torres
// Cada categoría incluye un nombre y lista de habilidades en ambos idiomas
export const skillCategories: SkillCategory[] = [
  {
    name: {
      en: "Digital Marketing & Advertising", // Marketing Digital y Publicidad (inglés)
      es: "Marketing Digital y Publicidad", // Marketing Digital y Publicidad (español)
    },
    skills: {
      en: "SEO advanced, SEM, Google Ads, Meta Ads, TikTok Ads, dynamic retargeting, programmatic advertising, LinkedIn Ads",
      es: "SEO avanzado, SEM, Google Ads, Meta Ads, TikTok Ads, retargeting dinámico, publicidad programática, LinkedIn Ads",
    },
  },
  {
    name: {
      en: "Strategy & Planning", // Estrategia y Planificación (inglés)
      es: "Estrategia y Planificación", // Estrategia y Planificación (español)
    },
    skills: {
      en: "Creation and optimization of multichannel media plans, design of sales funnels to maximize conversions at each stage of the customer journey, market analysis and segmentation strategies",
      es: "Creación y optimización de planes de medios multicanal, diseño de funnels de ventas para maximizar conversiones en cada etapa del customer journey, análisis de mercado y estrategias de segmentación",
    },
  },
  {
    name: {
      en: "Analytics & Data Strategy", // Analítica y Estrategia de Datos (inglés)
      es: "Analítica y Estrategia de Datos", // Analítica y Estrategia de Datos (español)
    },
    skills: {
      en: "Google Analytics 4, Data Studio, Tag Manager, KPI and ROI interpretation, custom dashboards",
      es: "Google Analytics 4, Data Studio, Tag Manager, interpretación de KPI y ROI, dashboards personalizados",
    },
  },
  {
    name: {
      en: "Content Management & Social Media", // Gestión de Contenidos y Redes Sociales (inglés)
      es: "Gestión de Contenidos y Redes Sociales", // Gestión de Contenidos y Redes Sociales (español)
    },
    skills: {
      en: "Editorial calendars, persuasive copywriting, Hootsuite, campaign management and UGC (User-Generated Content)",
      es: "Calendarios editoriales, copywriting persuasivo, Hootsuite, gestión de campañas y UGC (User-Generated Content)",
    },
  },
  {
    name: {
      en: "Automation Tools & CRM", // Herramientas de Automatización y CRM (inglés)
      es: "Herramientas de Automatización y CRM", // Herramientas de Automatización y CRM (español)
    },
    skills: {
      en: "HubSpot, Salesforce Marketing Cloud, Marketo, workflow automation, advanced email marketing",
      es: "HubSpot, Salesforce Marketing Cloud, Marketo, automatización de flujos de trabajo, email marketing avanzado",
    },
  },
  {
    name: {
      en: "Graphic Design & Content Production", // Diseño Gráfico y Producción de Contenidos (inglés)
      es: "Diseño Gráfico y Producción de Contenidos", // Diseño Gráfico y Producción de Contenidos (español)
    },
    skills: {
      en: "Photoshop, Illustrator, Canva, Premiere, After Effects, Cap Cut, WordPress",
      es: "Photoshop, Illustrator, Canva, Premiere, After Effects, Cap Cut, WordPress",
    },
  },
]

