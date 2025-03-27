export interface Testimonial {
  name: {
    en: string // Nombre del cliente en inglés
    es: string // Nombre del cliente en español
  }
  company: {
    en: string // Empresa del cliente en inglés
    es: string // Empresa del cliente en español
  }
  testimonial: {
    en: string // Testimonio en inglés
    es: string // Testimonio en español
  }
}

// Testimonios de clientes satisfechos
// Cada testimonio incluye nombre del cliente, empresa y texto del testimonio en ambos idiomas
export const testimonials: Testimonial[] = [
  {
    name: {
      en: "Raúl Méndez",
      es: "Raúl Méndez",
    },
    company: {
      en: "Madrid Food Trucks Union",
      es: "Unión de Food Trucks Madrid",
    },
    testimonial: {
      en: "We went from shouting discounts on the street to geo-targeted Instagram Stories. Now our trucks sell out before noon. Pablo gets street business.",
      es: "Pasamos de gritar descuentos en la calle a usar Stories geolocalizados. Ahora agotamos antes del mediodía. Pablo entiende el negocio real.",
    },
  },
  // Compañeros de trabajo
  {
    name: {
      en: "Lucía Vega",
      es: "Lucía Vega",
    },
    company: {
      en: "Content Strategist (Former Colleague)",
      es: "Estratega de Contenidos (Excompañera)",
    },
    testimonial: {
      en: "Worked with him on 12+ campaigns. His secret? Ruthless prioritization. He’d kill a ‘good’ idea to make space for a game-changer. Annoying… until the results came in.",
      es: "Trabajé con él en algunas campañas. ¿Su secreto? Priorizar sin piedad. Mataba una idea ‘buena’ para dar paso a una revolucionaria. Molesto… hasta que llegaban los resultados.",
    },
  },
  {
    name: {
      en: "Ander Goiko",
      es: "Ander Goiko",
    },
    company: {
      en: "Data Analyst (Project Partner)",
      es: "Analista de Datos (Socio en Proyecto)",
    },
    testimonial: {
      en: "He speaks ‘metric’ but thinks ‘human’. Our AI churn model? Pablo insisted on adding a customer empathy layer. Reduced cancellations by 18%.",
      es: "Habla en métricas pero piensa en personas. ¿Nuestro modelo de fuga con IA? Pablo insistió en añadir una capa de empatía al cliente. Bajamos cancelaciones un 18%.",
    },
  },
  // Colaboradores freelance
  {
    name: {
      en: "Nora Besalú",
      es: "Nora Besalú",
    },
    company: {
      en: "Freelance Copywriter",
      es: "Redactora Freelance",
    },
    testimonial: {
      en: "Most clients want hashtags and emojis. Pablo asked for ‘the vibe of a vinyl record intro’. Finally, creative briefs that don’t put me to sleep.",
      es: "La mayoría piden hashtags y emojis. Pablo pidió ‘la vibra de una intro de vinilo’. Por fin briefings creativos que no dan sueño.",
    },
  },
]

