export interface Experience {
  company: {
    en: string // Nombre de la empresa en inglés
    es: string // Nombre de la empresa en español
  }
  title: {
    en: string // Título del puesto en inglés
    es: string // Título del puesto en español
  }
  period: {
    en: string // Período de trabajo en inglés
    es: string // Período de trabajo en español
  }
  responsibilities: {
    en: string[] // Lista de responsabilidades en inglés
    es: string[] // Lista de responsabilidades en español
  }
}

// Experiencia laboral de Pablo Torres
// Cada experiencia incluye empresa, título, período y responsabilidades en ambos idiomas
export const experiences: Experience[] = [
  {
    company: {
      en: "Urban Vibes Madrid", // Nombre de la empresa (inglés)
      es: "Urban Vibes Madrid", // Nombre de la empresa (español)
    },
    title: {
      en: "Digital Marketing Manager & Media Planner", // Responsable de Marketing Digital y Planificación de Medios (inglés)
      es: "Responsable de Marketing Digital y Planificación de Medios", // Responsable de Marketing Digital y Planificación de Medios (español)
    },
    period: {
      en: "June 2024 - October 2024", // Junio 2024 - Octubre 2024 (inglés)
      es: "Junio 2024 - Octubre 2024", // Junio 2024 - Octubre 2024 (español)
    },
    responsibilities: {
      en: [
        "Developed and managed the monthly media plan, ensuring alignment of digital strategies with sales objectives and participation in tourism events.",
        "Created content for Instagram profiles, achieving a 30% increase in engagement through strategic publication scheduling.",
        "Optimized WordPress website, increasing traffic by 35% and improving visibility of tours and weekly events.",
        "Produced and edited promotional videos that increased social media interaction and strengthened brand presence.",
        "Strategic planning for event promotion across multiple digital channels, including social media, email marketing, and online advertising.",
      ],
      es: [
        "Desarrollé y gestioné el plan de medios mensual, asegurando la alineación de estrategias digitales con los objetivos de ventas y participación en eventos turísticos.",
        "Creación de contenido para perfiles de Instagram, logrando un aumento del engagement del 30% mediante una calendarización estratégica de publicaciones.",
        "Optimización del sitio web en WordPress, aumentando el tráfico en un 35% y mejorando la visibilidad de tours y eventos semanales.",
        "Producción y edición de videos promocionales que incrementaron la interacción en redes sociales y reforzaron la presencia de la marca.",
        "Planificación estratégica para la promoción de eventos a través de múltiples canales digitales, incluyendo redes sociales, email marketing y publicidad en línea.",
      ],
    },
  },
  {
    company: {
      en: "Agencia Brandana",
      es: "Agencia Brandana",
    },
    title: {
      en: "Digital Marketing Specialist & Media Strategist",
      es: "Especialista en Marketing Digital y Estratega de Medios",
    },
    period: {
      en: "January 2022 - December 2023",
      es: "Enero 2022 - Diciembre 2023",
    },
    responsibilities: {
      en: [
        "Designed and executed media plans for multichannel advertising campaigns, ensuring effective scheduling and optimal resource allocation.",
        "Planned and executed advertising campaigns on Google Ads, achieving a 20% increase in ROI.",
        "Managed campaigns on Facebook Ads and Instagram Ads (Meta), optimizing targeting strategies to improve reach and engagement KPIs.",
        "Implemented retargeting strategies that increased conversions by 25%.",
        "Created detailed performance reports and data analysis with Google Analytics to inform strategic decisions.",
        "Competitive analysis and SWOT development to identify improvement opportunities and guide market strategies.",
      ],
      es: [
        "Diseñé y ejecuté planes de medios para campañas publicitarias multicanal, asegurando una calendarización efectiva y la asignación óptima de recursos.",
        "Planificación y ejecución de campañas publicitarias en Google Ads, logrando un incremento del ROI del 20%.",
        "Gestión de campañas en Facebook Ads e Instagram Ads (Meta), optimizando estrategias de segmentación para mejorar el KPI de alcance y engagement.",
        "Implementación de estrategias de retargeting que aumentaron las conversiones en un 25%.",
        "Creación de informes detallados de rendimiento y análisis de datos con Google Analytics para informar decisiones estratégicas.",
        "Análisis de la competencia y desarrollo de análisis DAFO para identificar oportunidades de mejora y guiar estrategias de mercado.",
      ],
    },
  },
  {
    company: {
      en: "Startups Tec de Monterrey",
      es: "Startups Tec de Monterrey",
    },
    title: {
      en: "Digital Marketing Consultant",
      es: "Consultor de Marketing Digital",
    },
    period: {
      en: "2020 - 2022",
      es: "2020 - 2022",
    },
    responsibilities: {
      en: [
        "Created and executed media plans and marketing strategies to position emerging startups.",
        "Developed strategic content and publication scheduling to increase visibility of emerging products.",
        "Designed optimized landing pages for lead capture and generation of business opportunities using WordPress.",
      ],
      es: [
        "Creación y ejecución de planes de medios y estrategias de marketing para posicionar startups emergentes.",
        "Desarrollo de contenido estratégico y calendarización de publicaciones para aumentar la visibilidad de productos emergentes.",
        "Diseño de landing pages optimizadas para la captación de leads y generación de oportunidades comerciales mediante WordPress.",
      ],
    },
  },
  {
    company: {
      en: "Mally",
      es: "Mally",
    },
    title: {
      en: "Community Manager & Content Creator",
      es: "Community Manager y Creador de Contenidos",
    },
    period: {
      en: "February 2022 - December 2023",
      es: "Febrero 2022 - Diciembre 2023",
    },
    responsibilities: {
      en: [
        "Managed social media (Facebook and Instagram) to increase reach and engagement with the target audience, achieving a 25% increase in engagement.",
        "Created visual and advertising content, including graphic designs and promotional videos, to highlight weekly events and venue promotions.",
        "Planned and scheduled strategic publications aligned with advertising campaigns, maximizing attendance at events.",
        "Implemented digital advertising strategies to attract new customers and build loyalty with the existing audience.",
      ],
      es: [
        "Gestión de redes sociales (Facebook e Instagram) para aumentar el alcance y la interacción con el público objetivo, logrando un incremento del engagement del 25%.",
        "Creación de contenido visual y publicitario, incluyendo diseños gráficos y videos promocionales, para destacar los eventos semanales y las promociones del lugar.",
        "Planificación y  para destacar los eventos semanales y las promociones del lugar.",
        "Planificación y calendarización de publicaciones estratégicas alineadas con campañas publicitarias, maximizando la asistencia a los eventos.",
        "Implementación de estrategias de publicidad digital para atraer nuevos clientes y fidelizar la audiencia existente.",
      ],
    },
  },
]

