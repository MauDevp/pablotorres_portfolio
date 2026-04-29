export interface Service {
  icon: string // Nombre del icono de Lucide React
  title: {
    en: string // Título en inglés
    es: string // Título en español
  }
  description: {
    en: string // Descripción en inglés
    es: string // Descripción en español
  }
}

// Servicios ofrecidos por Pablo Torres
// Cada servicio incluye un icono, título y descripción en ambos idiomas
export const services: Service[] = [
  {
    icon: "Search", // Icono de búsqueda para SEO
    title: {
      en: "Data-Driven SEO", // SEO basado en datos (inglés)
      es: "SEO Basado en Datos", // SEO basado en datos (español)
    },
    description: {
      en: "Improve visibility with technical SEO, content optimization, WordPress improvements, and competitive insights tied to measurable traffic growth.",
      es: "Mejora la visibilidad con SEO técnico, optimización de contenido, mejoras en WordPress e insights competitivos conectados a crecimiento medible de tráfico.",
    },
  },
  {
    icon: "BarChart3", // Icono de gráfico para analítica
    title: {
      en: "Performance Analytics", // Analítica de rendimiento (inglés)
      es: "Analítica de Rendimiento", // Analítica de rendimiento (español)
    },
    description: {
      en: "Turn campaign data into decisions with GA4, Tag Manager, KPI dashboards, ROI reporting, and channel-by-channel optimization.",
      es: "Convierte datos de campaña en decisiones con GA4, Tag Manager, dashboards de KPI, reportes de ROI y optimización por canal.",
    },
  },
  {
    icon: "TrendingUp", // Icono de tendencia para redes sociales
    title: {
      en: "Strategic Social Media", // Redes sociales estratégicas (inglés)
      es: "Redes Sociales Estratégicas", // Redes sociales estratégicas (español)
    },
    description: {
      en: "Plan, publish, and optimize social campaigns across Instagram, Meta, TikTok, and UGC workflows to grow engagement and attendance.",
      es: "Planifica, publica y optimiza campañas sociales en Instagram, Meta, TikTok y flujos UGC para crecer engagement y asistencia.",
    },
  },
  {
    icon: "Globe", // Icono de globo para contenido
    title: {
      en: "Conversion-Focused Content", // Contenido enfocado a conversiones (inglés)
      es: "Contenido Enfocado a Conversiones", // Contenido enfocado a conversiones (español)
    },
    description: {
      en: "Build creative concepts, moodboards, scripts, reels, and promotional assets with a consistent visual direction and business purpose.",
      es: "Construye conceptos creativos, moodboards, guiones, reels y piezas promocionales con dirección visual consistente y objetivo comercial.",
    },
  },
  {
    icon: "MessageSquare", // Icono de mensaje para automatización
    title: {
      en: "AI-Powered Automation", // Automatización con IA (inglés)
      es: "Automatización con IA", // Automatización con IA (español)
    },
    description: {
      en: "Design customer journeys, loyalty programs, CRM workflows, and retargeting strategies that improve retention and conversion.",
      es: "Diseña customer journeys, programas de lealtad, flujos CRM y estrategias de retargeting que mejoran retención y conversión.",
    },
  },
  {
    icon: "Mail", // Icono de correo para email marketing
    title: {
      en: "Personalized Email Campaigns", // Campañas de email personalizadas (inglés)
      es: "Campañas de Email Personalizadas", // Campañas de email personalizadas (español)
    },
    description: {
      en: "Create segmented email campaigns and multichannel calendars aligned with funnel stages, promotions, and business objectives.",
      es: "Crea campañas de email segmentadas y calendarios multicanal alineados con etapas del funnel, promociones y objetivos de negocio.",
    },
  },
]
