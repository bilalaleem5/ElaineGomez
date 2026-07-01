export type Property = {
  id: string;
  name: string;
  location: string;
  image: string;
  status: { en: string; es: string };
  price?: string;
  highlights: { en: string[]; es: string[] };
  body: { en: string; es: string };
  dmCode: string;
};

export const properties: Property[] = [
  {
    id: "makai",
    name: "Makai Residences",
    location: "Cap Cana, Dominican Republic",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
    status: { en: "VIP Pre-Sale", es: "Preventa VIP" },
    highlights: {
      en: ["500m to Playa Juanillo", "Ocean · Pool · Golf views", "Managed by Dolce by Wyndham"],
      es: ["500m de Playa Juanillo", "Vistas al mar, piscina y golf", "Administrado por Dolce by Wyndham"],
    },
    body: {
      en: "A limited VIP pre-sale in the heart of Cap Cana, 500 meters from Playa Juanillo. Residences frame ocean, pool and golf views. Hospitality is delivered by Dolce by Wyndham Hotels & Resorts. Designed by Duna Development and M+ Group.",
      es: "Preventa VIP limitada en el corazón de Cap Cana, a 500 metros de Playa Juanillo. Residencias con vista al mar, piscina y golf. Operación hotelera por Dolce by Wyndham Hotels & Resorts. Diseño de Duna Development y M+ Group.",
    },
    dmCode: "MAKAI",
  },
  {
    id: "andara",
    name: "Andara Residences",
    location: "Cap Cana, Dominican Republic",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    status: { en: "Preconstruction · Reserve $3,000", es: "Preconstrucción · Reserva $3,000" },
    highlights: {
      en: ["Reserve with only $3,000", "Modern architecture", "Prestigious gated community"],
      es: ["Reserva con solo $3,000", "Arquitectura moderna", "Comunidad cerrada prestigiosa"],
    },
    body: {
      en: "Preconstruction residences in one of Cap Cana's most prestigious gated communities. Modern architecture, resort amenities and strong appreciation potential. Reserve a unit for only $3,000.",
      es: "Residencias en preconstrucción en una de las comunidades más prestigiosas de Cap Cana. Arquitectura moderna, amenidades tipo resort y sólido potencial de plusvalía. Reserva una unidad por solo $3,000.",
    },
    dmCode: "ANDARA",
  },
  {
    id: "vista-cana",
    name: "Vista Cana Villas",
    location: "Punta Cana, Dominican Republic",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    status: { en: "Only 5 units left", es: "Solo 5 unidades" },
    price: "$298,000",
    highlights: {
      en: ["3 bed · 3 bath · Private pool", "Community of only 22 homes", "Qualifies for DR Residency Visa"],
      es: ["3 hab · 3 baños · Piscina privada", "Comunidad de solo 22 casas", "Califica para Residencia RD"],
    },
    body: {
      en: "Only five units remain in a boutique community of 22 villas. Three bedrooms, three baths and a private pool — steps from the golf course, an international school and horse stables. Qualifies for the Dominican Republic Residency Visa.",
      es: "Solo cinco unidades restantes en una comunidad boutique de 22 villas. Tres habitaciones, tres baños y piscina privada — a pasos del campo de golf, escuela internacional y establos. Califica para la Visa de Residencia de RD.",
    },
    dmCode: "VILLA",
  },
  {
    id: "miami",
    name: "Miami Luxury Condos",
    location: "Doral, Miami · FL",
    image:
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1600&q=80",
    status: { en: "Pre-construction Pricing", es: "Precios de Preconstrucción" },
    highlights: {
      en: ["Modern design · Prime Doral", "Live · Invest · Airbnb", "Bilingual support throughout"],
      es: ["Diseño moderno · Doral", "Vive · Invierte · Airbnb", "Soporte bilingüe completo"],
    },
    body: {
      en: "Pre-construction pricing on modern luxury condos in the heart of Doral, Miami. Perfect to live in, invest, or generate short-term rental income. Bilingual guidance from first inquiry to closing.",
      es: "Precios de preconstrucción en condominios de lujo modernos en el corazón de Doral, Miami. Perfectos para vivir, invertir o generar ingresos por alquiler. Guía bilingüe desde la primera consulta hasta el cierre.",
    },
    dmCode: "INFO",
  },
];
