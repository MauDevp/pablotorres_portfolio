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
      en: "Boost your search rankings with advanced SEO strategies powered by AI analytics and competitive insights.",
      es: "Mejora tu posicionamiento en buscadores con estrategias SEO avanzadas potenciadas por análisis de IA e insights competitivos.",
    },
  },
  {
    icon: "BarChart3", // Icono de gráfico para analítica
    title: {
      en: "Performance Analytics", // Analítica de rendimiento (inglés)
      es: "Analítica de Rendimiento", // Analítica de rendimiento (español)
    },
    description: {
      en: "Transform raw data into actionable insights with comprehensive analytics and AI-powered performance tracking.",
      es: "Transforma datos brutos en insights accionables con análisis completos y seguimiento de rendimiento potenciado por IA.",
    },
  },
  {
    icon: "TrendingUp", // Icono de tendencia para redes sociales
    title: {
      en: "Strategic Social Media", // Redes sociales estratégicas (inglés)
      es: "Redes Sociales Estratégicas", // Redes sociales estratégicas (español)
    },
    description: {
      en: "Captivate your audience with targeted social campaigns optimized by AI for maximum engagement and conversion.",
      es: "Cautiva a tu audiencia con campañas sociales dirigidas y optimizadas por IA para máximo engagement y conversión.",
    },
  },
  {
    icon: "Globe", // Icono de globo para contenido
    title: {
      en: "Conversion-Focused Content", // Contenido enfocado a conversiones (inglés)
      es: "Contenido Enfocado a Conversiones", // Contenido enfocado a conversiones (español)
    },
    description: {
      en: "Create compelling, strategic content that resonates with your audience and drives measurable business results.",
      es: "Crea contenido estratégico y convincente que resuene con tu audiencia y genere resultados comerciales medibles.",
    },
  },
  {
    icon: "MessageSquare", // Icono de mensaje para automatización
    title: {
      en: "AI-Powered Automation", // Automatización con IA (inglés)
      es: "Automatización con IA", // Automatización con IA (español)
    },
    description: {
      en: "Implement intelligent chatbots and marketing automation to enhance customer experience and generate leads 24/7.",
      es: "Implementa chatbots inteligentes y automatización de marketing para mejorar la experiencia del cliente y generar leads 24/7.",
    },
  },
  {
    icon: "Mail", // Icono de correo para email marketing
    title: {
      en: "Personalized Email Campaigns", // Campañas de email personalizadas (inglés)
      es: "Campañas de Email Personalizadas", // Campañas de email personalizadas (español)
    },
    description: {
      en: "Deliver high-converting email campaigns with AI-driven segmentation, personalization, and optimization.",
      es: "Entrega campañas de email de alta conversión con segmentación, personalización y optimización impulsadas por IA.",
    },
  },
]

