export interface Project {
  id: string // Identificador único del proyecto
  title: {
    en: string // Título del proyecto en inglés
    es: string // Título del proyecto en español
  }
  category: {
    en: string // Categoría del proyecto en inglés
    es: string // Categoría del proyecto en español
  }
  increase: {
    en: string // Porcentaje de mejora en inglés
    es: string // Porcentaje de mejora en español
  }
  slug: string // URL amigable para la página de detalle
  image: string // Ruta de la imagen del proyecto
  link?: string // Enlace externo al proyecto (opcional, por ejemplo, enlace de Drive)
  summary: {
    en: string // Resumen del proyecto en inglés
    es: string // Resumen del proyecto en español
  }
  challenge: {
    en: string // Descripción del desafío en inglés
    es: string // Descripción del desafío en español
  }
  solution: {
    en: string // Descripción de la solución en inglés
    es: string // Descripción de la solución en español
  }
  results: {
    en: string[] // Lista de resultados en inglés
    es: string[] // Lista de resultados en español
  }
  testimonial?: {
    quote: {
      en: string // Cita del cliente en inglés
      es: string // Cita del cliente en español
    }
    author: {
      en: string // Nombre del autor en inglés
      es: string // Nombre del autor en español
    }
    position: {
      en: string // Cargo del autor en inglés
      es: string // Cargo del autor en español
    }
  }
}

// Proyectos destacados de Pablo Torres
// Cada proyecto incluye información detallada sobre el caso de éxito en ambos idiomas
export const projects: Project[] = 
[
  // Proyecto 1 - Hiking Urban
  {
    "id": "Hiking Urban",
    "title": {
      "en": "HIKING ADVENTURES WITH URBAN VIBES",
      "es": "AVENTURAS DE SENDERISMO CON URBAN VIBES"
    },
    "category": {
      "en": "Social Media",
      "es": "Redes Sociales"
    },
    "increase": {
      "en": "12,400 views",
      "es": "12,400 visualizaciones"
    },
    "slug": "hiking-urban-vibes",
    "image": "/projects/hikinh_urban_vibes.jpg",
    "link": "https://drive.google.com/drive/folders/example-hiking-urban",
    "summary": {
      "en": "Digital strategy and audiovisual content that boosted the hiking community in Madrid, increasing registration conversions by 300% and engagement by 75%.",
      "es": "Estrategia digital y contenido audiovisual que impulsó la comunidad de senderismo en Madrid, aumentando la conversión de registros en un 300% y el engagement en un 75%."
    },
    "challenge": {
      "en": "Urban Vibes sought to promote their hiking excursions in Madrid but faced difficulties in generating consistent registrations. The lack of attractive content and well-targeted campaigns limited their audience reach and the conversion of interested parties into active participants.",
      "es": "Urban Vibes buscaba promocionar sus excursiones de senderismo en Madrid, pero enfrentaba dificultades para generar inscripciones consistentes. La falta de contenido atractivo y campañas bien dirigidas limitaba el alcance de su audiencia y la conversión de interesados en participantes activos."
    },
    "solution": {
      "en": "I developed a comprehensive visual content and digital advertising strategy: Audiovisual production with drone shots and professional cameras to capture the experience. Video editing in CapCut, Lightroom, and Photoshop to optimize quality and visual impact. Meta Ads campaigns strategically targeted to attract new clients. Social media conversion strategy, increasing interest and weekly bookings.",
      "es": "Desarrollé una estrategia integral de contenido visual y publicidad digital: Producción audiovisual con tomas de dron y cámara profesional para capturar la experiencia. Edición de videos en CapCut, Lightroom y Photoshop para optimizar la calidad y el impacto visual. Campañas en Meta Ads segmentadas estratégicamente para atraer nuevos clientes. Estrategia de conversión en redes sociales, aumentando el interés y las reservas semanales."
    },
    "results": {
      "en": [
        "4,583 organic views on Instagram in the first campaign phase.",
        "300% increase in weekly bookings, going from 20 to 60 attendees in just four weeks.",
        "8,000 new social media followers in less than two weeks.",
        "75% increase in engagement thanks to attractive content and interactive campaigns."
      ],
      "es": [
        "4,583 visualizaciones orgánicas en Instagram en la primera fase de campaña.",
        "300% de incremento en reservas semanales, pasando de 20 a 60 asistentes en solo cuatro semanas.",
        "8,000 nuevos seguidores en redes sociales en menos de dos semanas.",
        "75% de aumento en engagement gracias a contenido atractivo y campañas interactivas."
      ]
    },
    "testimonial": {
      "quote": {
        "en": "Before Pablo arrived, our excursions had a good response, but there was a lack of a clear strategy for growth. With his creative vision and focus on viral content, we not only filled every outing but also maintained a constant waiting list for weeks. His work on social media took Urban Vibes to another level, with more interaction and a much more active community.",
        "es": "Antes de que Pablo llegara, nuestras excursiones tenían buena respuesta, pero faltaba una estrategia clara para crecer. Con su visión creativa y el enfoque en contenido viral, logramos no solo llenar cada salida, sino mantener una lista de espera constante por semanas. Su trabajo en redes sociales llevó a Urban Vibes a otro nivel, con más interacción y una comunidad mucho más activa."
      },
      "author": {
        "en": "Michael de la Torre",
        "es": "Michael de la Torre"
      },
      "position": {
        "en": "Founder, Urban Vibes",
        "es": "Fundador, Urban Vibes"
      }
    }
  },
  // Proyecto 2 - TE CAMBIO UN DOMINGO DE RESACA POR ESTO
  {
    "id": "TE CAMBIO UN DOMINGO DE RESACA POR ESTO",
    "title": {
      "en": "I'LL TRADE YOU A HUNGOVER SUNDAY FOR THIS",
      "es": "TE CAMBIO UN DOMINGO DE RESACA POR ESTO"
    },
    "category": {
      "en": "Social Media",
      "es": "Redes Sociales"
    },
    "increase": {
      "en": "4,583 views",
      "es": "4,583 visualizaciones"
    },
    "slug": "te-cambio-un-domingo-de-resaca-por-esto",
    "image": "/projects/te_cambio_urban_vibes.jpg",
    "link": "https://drive.google.com/drive/folders/example-te-cambio-domingo",
    "summary": {
      "en": "Emotional marketing strategy and viral content that generated 12,400 views, over 80 shares, and consolidated the excursions as a sold-out event for two consecutive months.",
      "es": "Estrategia de marketing emocional y contenido viral que generó 12,400 visualizaciones, más de 80 compartidos y consolidó las excursiones como un evento lleno por dos meses consecutivos."
    },
    "challenge": {
      "en": "The challenge was to emotionally connect with the audience and break the barrier of indecision, encouraging more people to join the hiking experience. A powerful message and an eye-catching video were needed to generate impact and increase conversions.",
      "es": "El reto era conectar emocionalmente con la audiencia y romper la barrera de la indecisión, incentivando a más personas a unirse a la experiencia de senderismo. Se necesitaba un mensaje poderoso y un video llamativo para generar impacto y aumentar las conversiones."
    },
    "solution": {
      "en": "I created a content strategy with a disruptive and easy-to-share message: 'I'll trade you a hungover Sunday for this.' High-quality audiovisual production with cinematic drone shots and emotional close-ups. Professional editing in Lightroom and Premiere to optimize color, rhythm, and narrative. Strategic distribution on social media and paid campaigns on Meta Ads to maximize reach.",
      "es": "Creé una estrategia de contenido con un mensaje disruptivo y fácil de compartir: 'Te cambio un domingo de resaca por esto'. Producción audiovisual de alta calidad con planos cinematográficos de dron y primeros planos emotivos. Edición profesional en Lightroom y Premiere para optimizar color, ritmo y narrativa. Distribución estratégica en redes sociales y campañas de pago en Meta Ads para maximizar el alcance."
    },
    "results": {
      "en": [
        "12,400 views on Instagram in the first week.",
        "Over 80 organic shares, generating virality.",
        "Growth of 12,000 social media followers in just one month.",
        "Excursions sold out for two consecutive months, ensuring the event's profitability."
      ],
      "es": [
        "12,400 visualizaciones en Instagram en la primera semana.",
        "Más de 80 compartidos orgánicos, generando viralidad.",
        "Crecimiento de 12,000 seguidores en redes sociales en un solo mes.",
        "Excursiones con cupo lleno durante dos meses consecutivos, asegurando la rentabilidad del evento."
      ]
    },
    "testimonial": {
      "quote": {
        "en": "We had the challenge of growing our community and positioning ourselves as a reference account in Madrid. Pablo devised a content strategy that gave us impressive visibility. Thanks to his work, we gained 15,000 new followers, and our page became a key point for discovering events in the city.",
        "es": "Teníamos el reto de hacer crecer nuestra comunidad y posicionarnos como una cuenta referente en Madrid. Pablo ideó una estrategia de contenido que nos dio una visibilidad impresionante. Gracias a su trabajo, logramos 15,000 nuevos seguidores y nuestra página se convirtió en un punto clave para descubrir eventos en la ciudad."
      },
      "author": {
        "en": "Michael de la Torre",
        "es": "Michael de la Torre"
      },
      "position": {
        "en": "Founder, Urban Vibes",
        "es": "Fundador, Urban Vibes"
      }
    }
  },
  // Proyecto 3 - SEMANA DE LA HISPANIDAD
  {
    "id": "SEMANA DE LA HISPANIDAD",
    "title": {
      "en": "HISPANIC HERITAGE WEEK",
      "es": "SEMANA DE LA HISPANIDAD"
    },
    "category": {
      "en": "Social Media",
      "es": "Redes Sociales"
    },
    "increase": {
      "en": "27,400 views",
      "es": "27,400 visualizaciones"
    },
    "slug": "semana-de-la-hispanidad",
    "image": "/projects/semana_de_la_hispanidad.jpg",
    "link": "https://drive.google.com/drive/folders/example-semana-hispanidad",
    "summary": {
      "en": "Content strategy and digital advertising that reached 27,400 views and added 15,000 new social media followers.",
      "es": "Estrategia de contenido y publicidad digital que alcanzó 27,400 visualizaciones y sumó 15,000 nuevos seguidores en redes sociales."
    },
    "challenge": {
      "en": "Urban Vibes not only organizes events but also functions as a platform for recommendations about activities in Madrid. For Hispanic Heritage Week, we needed to promote the city's cultural events, attracting more attendees and strengthening the digital community.",
      "es": "Urban Vibes no solo organiza eventos, sino que también funciona como una plataforma de recomendaciones sobre actividades en Madrid. Para la Semana de la Hispanidad, necesitábamos promocionar los eventos culturales de la ciudad, atrayendo más público y fortaleciendo la comunidad digital."
    },
    "solution": {
      "en": "I created an audiovisual campaign with vibrant and dynamic images highlighting the cultural richness of the event. Multi-channel content strategy, publishing on Instagram Reels, TikTok, and Facebook to maximize reach. Engagement campaign with effective calls to action that encouraged interaction and content sharing. Optimization on Meta Ads, ensuring precise targeting to reach audiences interested in cultural events.",
      "es": "Creé una campaña audiovisual con imágenes vibrantes y dinámicas que destacaban la riqueza cultural del evento. Estrategia de contenido multicanal, publicando en Instagram Reels, TikTok y Facebook para maximizar el alcance. Campaña de engagement, con llamadas a la acción efectivas que incentivaban la interacción y el compartido del contenido. Optimización en Meta Ads, asegurando una segmentación precisa para alcanzar al público interesado en eventos culturales."
    },
    "results": {
      "en": [
        "27,400 views on social media, with high audience interaction.",
        "15,000 new followers on the account, strengthening the digital community.",
        "Significant increase in event attendance, consolidating the platform as a reference in Madrid."
      ],
      "es": [
        "27,400 visualizaciones en redes sociales, con gran interacción del público.",
        "15,000 nuevos seguidores en la cuenta, fortaleciendo la comunidad digital.",
        "Aumento significativo en la asistencia a los eventos, consolidando la plataforma como una referencia en Madrid."
      ]
    },
    "testimonial": {
      "quote": {
        "en": "We wanted more people to discover and participate in the Hispanic Heritage Week events, but we didn't know how to make a real impact on social media. Pablo created a dynamic and well-targeted content campaign that achieved over 27,000 views on our video and a growth of 15,000 followers on the page. His strategy positioned Urban Vibes as a key source of recommendations in Madrid.",
        "es": "Queríamos que más personas descubrieran y participaran en los eventos de la Semana de la Hispanidad, pero no sabíamos cómo lograr un impacto real en redes. Pablo creó una campaña de contenido dinámica y bien segmentada que logró más de 27,000 vistas en nuestro video y un crecimiento de 15,000 seguidores en la página. Su estrategia posicionó a Urban Vibes como una fuente clave de recomendaciones en Madrid."
      },
      "author": {
        "en": "Jonathan Rodriguez",
        "es": "Jonathan Rodriguez"
      },
      "position": {
        "en": "Co Founder, Trabel Vides",
        "es": "Co fundador, Trabel Vides"
      }
    }
  },
  // Proyecto 4 - ULISES EN YOUTUBE
  {
    "id": "Ulises en YouTube",
    "title": {
      "en": "Ulises on YouTube",
      "es": "Ulises en YouTube"
    },
    "category": {
      "en": "Social Media",
      "es": "Redes Sociales"
    },
    "increase": {
      "en": "2,460 views",
      "es": "2,460 visualizaciones"
    },
    "slug": "ulises-en-youtube",
    "image": "/projects/ulises_en_youtube.jpg",
    "link": "https://drive.google.com/drive/folders/example-ulises-youtube",
    "summary": {
      "en": "Strategic promotion campaign that increased the artist's visibility on YouTube, achieving 2,460 views and exponential growth on Spotify.",
      "es": "Campaña de promoción estratégica que aumentó la visibilidad del artista en YouTube, logrando 2,460 visualizaciones y un crecimiento exponencial en Spotify."
    },
    "challenge": {
      "en": "Ulises is an emerging artist who needed to increase his visibility on digital platforms and attract new listeners. The goal was to optimize his YouTube channel and consolidate his presence on Spotify through an audiovisual content strategy.",
      "es": "Ulises es un artista emergente que necesitaba aumentar su visibilidad en plataformas digitales y atraer nuevos oyentes. La meta era optimizar su canal de YouTube y consolidar su presencia en Spotify a través de una estrategia de contenido audiovisual."
    },
    "solution": {
      "en": "Professional editing of the music video in Premiere Pro, improving visual quality and storytelling. Promotion campaign on YouTube Ads, optimizing targeting to reach specific audiences. Social media conversion strategy, directing traffic to the YouTube channel and streaming platforms. Segmentation in Meta Ads to maximize video exposure and increase plays.",
      "es": "Edición profesional del videoclip en Premiere Pro, mejorando la calidad visual y el storytelling. Campaña de promoción en YouTube Ads, optimizando el targeting para llegar a audiencias específicas. Estrategia de conversión en redes sociales, dirigiendo tráfico hacia el canal de YouTube y plataformas de streaming. Segmentación en Meta Ads, para maximizar la exposición del video y aumentar las reproducciones."
    },
    "results": {
      "en": [
        "2,460 views on YouTube in the first campaign phase.",
        "Increase of 80 new subscribers on the channel.",
        "Exponential growth in plays on Spotify.",
        "Greater recognition of the artist in the digital music scene."
      ],
      "es": [
        "2,460 visualizaciones en YouTube en la primera fase de campaña.",
        "Aumento de 80 nuevos suscriptores en el canal.",
        "Incremento exponencial de reproducciones en Spotify.",
        "Mayor reconocimiento del artista en la escena musical digital."
      ]
    },
    "testimonial": {
      "quote": {
        "en": "With this release, we needed visibility and real growth in Ulises' audience. Pablo took charge of the entire advertising campaign on YouTube, achieving over 2,400 views and a notable increase in followers on Spotify. His handling of segmentation and strategy was key to getting Ulises' music to more people.",
        "es": "Con este lanzamiento, necesitábamos visibilidad y crecimiento real en la audiencia de Ulises. Pablo se encargó de toda la campaña publicitaria en YouTube, logrando más de 2,400 vistas y un incremento notable de seguidores en Spotify. Su manejo de segmentación y estrategia fue clave para que la música de Ulises llegara a más personas."
      },
      "author": {
        "en": "Ulises Alanís",
        "es": "Ulises Alanís"
      },
      "position": {
        "en": "DJ",
        "es": "DJ"
      }
    }
  },
  // Proyecto 5 - Boiler Room con Ulises
  {
    "id": "boiler room con ulises",
    "title": {
      "en": "Boiler Room with Ulises",
      "es": "Boiler Room con Ulises"
    },
    "category": {
      "en": "Social Media",
      "es": "Redes Sociales"
    },
    "increase": {
      "en": "2,462 views",
      "es": "2,462 visualizaciones"
    },
    "slug": "boiler-room-con-ulises",
    "image": "/projects/boiler_room_ulises.jpg",
    "link": "https://drive.google.com/drive/folders/example-boiler-room",
    "summary": {
      "en": "Storytelling strategy and audiovisual production that generated 62.8% new audience and 2 hours and 32 minutes of playback time on YouTube.",
      "es": "Estrategia de storytelling y producción audiovisual que generó un 62.8% de audiencia nueva y 2 horas y 32 minutos de tiempo de reproducción en YouTube."
    },
    "challenge": {
      "en": "For this project, the challenge was to capture the audience's attention immediately and maintain engagement in a Boiler Room format. An innovative visual strategy was needed to ensure retention and maximize the conversion of new viewers into followers.",
      "es": "Para este proyecto, el reto era captar la atención de la audiencia de manera inmediata y mantener el engagement en un formato de Boiler Room. Se necesitaba una estrategia visual innovadora que asegurara la retención y maximizara la conversión de nuevos espectadores en seguidores."
    },
    "solution": {
      "en": "Professional filming of the event, combining dynamic shots and cinematic angles. Use of an impactful visual hook, starting the video with a dramatic scene where a character is run over and gets up to reveal Ulises' set. Strategic editing in Premiere Pro, ensuring fluidity in the narrative and visual effects. Optimization of the video for audience retention on YouTube, applying storytelling techniques and visual engagement.",
      "es": "Filmación profesional del evento, combinando tomas dinámicas y ángulos cinematográficos. Uso de un gancho visual impactante, comenzando el video con una escena dramática donde un personaje es atropellado y se levanta para revelar el set de Ulises. Edición estratégica en Premiere Pro, asegurando fluidez en la narrativa y efectos de impacto. Optimización del video para retención de audiencia en YouTube, aplicando técnicas de storytelling y engagement visual."
    },
    "results": {
      "en": [
        "2,462 views on YouTube.",
        "Total playback time: 2 hours and 32 minutes.",
        "62.8% new audience reached.",
        "37% increase in engagement with current followers."
      ],
      "es": [
        "2,462 visualizaciones en YouTube.",
        "Tiempo total de reproducción: 2 horas y 32 minutos.",
        "62.8% de audiencia nueva alcanzada.",
        "37% de aumento en engagement con seguidores actuales."
      ]
    },
    "testimonial": {
      "quote": {
        "en": "Pablo didn't just film and edit this project; he also designed an impactful strategy to make the content stand out on digital platforms. The visual hook he created gave the video great engagement, attracting a new audience and increasing Ulises' visibility on social media.",
        "es": "Pablo no solo grabó y editó este proyecto, sino que también diseñó una estrategia de impacto para que el contenido destacara en plataformas digitales. El gancho visual que creó hizo que el video tuviera un gran engagement, atrayendo a una audiencia nueva y aumentando la visibilidad de Ulises en redes sociales."
      },
      "author": {
        "en": "Ulises Alanís",
        "es": "Ulises Alanís"
      },
      "position": {
        "en": "DJ",
        "es": "DJ"
      }
    }
  },
  // Proyecto 6 - Impulso de Marca Personal para Ulises
  {
    "id": "impulso de marca personal para ulises",
    "title": {
      "en": "Personal Branding Boost for Ulises",
      "es": "Impulso de Marca Personal para Ulises"
    },
    "category": {
      "en": "Marketing Plan",
      "es": "Plan de Marketing"
    },
    "increase": {
      "en": "15,000 followers",
      "es": "15,000 seguidores"
    },
    "slug": "impulso-de-marca-personal-para-ulises",
    "image": "/projects/marca_personal_ulises.jpg",
    "link": "https://drive.google.com/drive/folders/example-marca-personal",
    "summary": {
      "en": "Development and implementation of a comprehensive marketing plan based on conversion funnels and omnichannel strategies, achieving exponential growth in digital presence and audience engagement.",
      "es": "Desarrollo e implementación de un plan de marketing integral basado en embudos de conversión y estrategias omnicanal, logrando un crecimiento exponencial en su presencia digital y engagement con la audiencia."
    },
    "challenge": {
      "en": "Ulises, an emerging artist, needed to consolidate his digital presence and strengthen his personal brand in a highly competitive market. His visual identity was undefined, lacked a structured plan for follower acquisition and retention, and had no optimized conversion strategies on key platforms like YouTube, Instagram, and Spotify.",
      "es": "Ulises, un artista emergente, necesitaba consolidar su presencia digital y fortalecer su marca personal en un mercado altamente competitivo. Su identidad visual no estaba definida, carecía de un plan estructurado para la captación y fidelización de seguidores, y no contaba con estrategias optimizadas de conversión en plataformas clave como YouTube, Instagram y Spotify."
    },
    "solution": {
      "en": "To consolidate Ulises' personal brand in the music industry, a Comprehensive Marketing Plan was implemented based on a conversion funnel (attraction, interaction, and retention), an omnichannel strategy (social media, streaming, digital advertising, and email marketing), and monitoring of key KPIs (follower growth, engagement, and plays). Additionally, results were optimized through real-time analysis, A/B Testing, and a coherent brand identity, including the design of a custom logo. This generated a significant increase in his digital presence and audience.",
      "es": "Para consolidar la marca personal de Ulises en la industria musical, se implementó un Plan de Marketing Integral basado en un embudo de conversión (atracción, interacción y fidelización), una estrategia omnicanal (redes sociales, streaming, publicidad digital y email marketing) y el monitoreo de KPIs clave (crecimiento de seguidores, engagement y reproducciones). Además, se optimizaron los resultados mediante análisis en tiempo real, A/B Testing y una identidad de marca coherente, incluyendo el diseño de un logotipo personalizado. Esto generó un aumento significativo en su presencia digital y audiencia."
    },
    "results": {
      "en": [
        "15,000 new followers on digital platforms.",
        "Significant increase in views of key content.",
        "Positioning of Ulises as a rising artist in the music industry.",
        "Growth in engagement and retention of his digital community."
      ],
      "es": [
        "15,000 seguidores nuevos en plataformas digitales.",
        "Aumento significativo en visualizaciones de contenido clave.",
        "Posicionamiento de Ulises como un artista en ascenso dentro del sector musical.",
        "Crecimiento en engagement y fidelización de su comunidad digital."
      ]
    },
    "testimonial": {
      "quote": {
        "en": "Thanks to Pablo, we managed to structure Ulises' brand with a strategic and professional vision. From logo design to the implementation of the marketing plan, every action had a real impact on our growth. His ability to integrate creativity with analytical data allowed us to optimize our campaigns and consolidate Ulises' digital presence in a competitive market like the music industry.",
        "es": "Gracias a Pablo, logramos estructurar la marca de Ulises con una visión estratégica y profesional. Desde el diseño del logo hasta la implementación del plan de marketing, cada acción tuvo un impacto real en nuestro crecimiento. Su capacidad para integrar creatividad con datos analíticos nos permitió optimizar nuestras campañas y consolidar la presencia digital de Ulises en un mercado tan competitivo como el musical."
      },
      "author": {
        "en": "Ulises Alanís",
        "es": "Ulises Alanís"
      },
      "position": {
        "en": "DJ",
        "es": "DJ"
      }
    }
  },
  // Proyecto 7 - Estrategia de Plan de Medios para Marca de Cerveza en Madrid
  {
    "id": "Estrategia de Plan de Medios para Marca de Cerveza en Madrid",
    "title": {
      "en": "Media Plan Strategy for a Beer Brand in Madrid",
      "es": "Estrategia de Plan de Medios para Marca de Cerveza en Madrid"
    },
    "category": {
      "en": "Media Plan",
      "es": "Plan de Medios"
    },
    "increase": {
      "en": "+75% in awareness",
      "es": "+75% en awareness"
    },
    "slug": "marca_de_cerveza_en_madrid",
    "image": "/projects/estrella_galicia.jpg",
    "link": "https://drive.google.com/drive/folders/example-cerveza-madrid",
    "summary": {
      "en": "Design and implementation of a multiplatform media plan for the positioning and expansion of a craft beer brand in the Madrid market.",
      "es": "Diseño e implementación de un plan de medios multiplataforma para el posicionamiento y expansión de una marca de cerveza artesanal en el mercado madrileño."
    },
    "challenge": {
      "en": "A craft beer brand in Madrid needed to increase its recognition and differentiate itself in a highly competitive sector. Its visibility was limited, and it lacked a structured media strategy to effectively impact its target audience. Additionally, a campaign integrating digital and traditional media was needed to achieve an omnichannel presence.",
      "es": "Una marca de cerveza artesanal en Madrid necesitaba aumentar su reconocimiento y diferenciarse en un sector altamente competitivo. Su visibilidad era limitada, y carecía de una estrategia estructurada de medios para impactar eficazmente a su público objetivo. Además, se requería una campaña que integrara medios digitales y tradicionales para lograr una presencia omnicanal."
    },
    "solution": {
      "en": "To boost the craft beer brand in Madrid, a Comprehensive Media Plan was designed combining digital and traditional strategies. It began with a detailed analysis of the target audience, segmented by interests and location. Content distribution was optimized through digital campaigns (Meta Ads, YouTube, Google Ads, and influencer marketing) and traditional media (gastronomic events, magazine advertising, and collaborations with bars). Impact was measured with key KPIs (brand recognition, engagement, and sales), and continuous optimization was implemented through real-time analysis, A/B Testing, and remarketing. Results included a significant increase in visibility, followers, and sales.",
      "es": "Para impulsar la marca de cerveza artesanal en Madrid, se diseñó un Plan de Medios Integral que combinó estrategias digitales y tradicionales. Se comenzó con un análisis detallado del público objetivo, segmentando por intereses y ubicación. La distribución de contenido se optimizó mediante campañas digitales (Meta Ads, YouTube, Google Ads e influencer marketing) y medios tradicionales (eventos gastronómicos, publicidad en revistas y colaboraciones con bares). Se midió el impacto con KPIs clave (reconocimiento de marca, engagement y ventas) y se implementó una optimización continua mediante análisis en tiempo real, A/B Testing y remarketing. Los resultados incluyeron un aumento significativo en visibilidad, seguidores y ventas."
    },
    "results": {
      "en": [
        "+75% increase in brand awareness in Madrid.",
        "+9,500 social media followers in 3 months.",
        "+42% increase in web traffic and online sales.",
        "Expansion of distribution in strategic bars and restaurants."
      ],
      "es": [
        "+75% de aumento en awareness de la marca en Madrid.",
        "+9,500 seguidores en redes sociales en 3 meses.",
        "+42% de incremento en tráfico web y ventas online.",
        "Expansión de la distribución en bares y restaurantes estratégicos."
      ]
    },
    "testimonial": {
      "quote": {
        "en": "Pablo was key in structuring our media plan. His strategic approach and mastery of digital advertising allowed us to position ourselves effectively in a saturated market. Thanks to his planning and continuous optimization, we significantly increased visibility and engagement with our audience.",
        "es": "Pablo fue clave en la estructuración de nuestro plan de medios. Su enfoque estratégico y su dominio de la publicidad digital nos permitieron posicionarnos de manera efectiva en un mercado saturado. Gracias a su planificación y optimización continua, logramos aumentar significativamente la visibilidad y el engagement con nuestra audiencia."
      },
      "author": {
        "en": "Cristina",
        "es": "Cristina"
      },
      "position": {
        "en": "Manager of the dpt mkt",
        "es": "Gerente del dpt mkt"
      }
    }
  }
]
