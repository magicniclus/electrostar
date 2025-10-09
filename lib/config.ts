import siteConfig from '@/config/site-config.json';

export interface CompanyInfo {
  name: string;
  legalName: string;
  address: string;
  phone: string;
  email: string;
  siret: string;
  ceo: string;
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}

export interface AboutSection {
  smallTitle: string;
  title: string;
  subtitle: string;
  content: string;
  gradientFrom: string;
  gradientTo: string;
  buttonText: string;
  buttonHref: string;
  reversed: boolean;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

export interface GalleryConfig {
  title: string;
  subtitle: string;
  initialDisplayCount: number;
  images?: GalleryImage[];
}

export interface ContactConfig {
  title: string;
  subtitle: string;
}

export interface TeamMember {
  name: string;
  position: string;
  description: string;
  photo: string;
}

export interface TeamConfig {
  members: TeamMember[];
}

export interface PartnerLogo {
  src: string;
  alt: string;
  name: string;
}

export interface PartnersConfig {
  logos: PartnerLogo[];
}

export interface ColorsConfig {
  primary: string;
  secondary: string;
  accent: string;
}

export interface SiteConfig {
  company: CompanyInfo;
  hero: HeroConfig;
  about: AboutConfig;
  gallery: GalleryConfig;
  contact: ContactConfig;
  team: TeamConfig;
  partners: PartnersConfig;
  colors: ColorsConfig;
}

// Default configuration fallback
const defaultConfig: SiteConfig = {
  company: {
    name: "Orossa Design",
    legalName: "Orossa Design",
    address: "Haute-Loire, Loire, Ardèche, Puy-de-Dôme, Cantal",
    phone: "07 61 44 21 03",
    email: "contact@orossa-design.fr",
    siret: "À définir",
    ceo: "José France"
  },
  hero: {
    title: "Menuiserie Bois Haut de Gamme & Design",
    subtitle: "Artisan menuisier spécialisé dans les escaliers sur mesure, terrasses pilotis, balcons et meubles époxy. Créations uniques avec garantie décennale.",
    buttonText: "Demander un devis",
    buttonHref: "#contact",
    backgroundVideo: "video.mp4"
  },
  about: {
    sections: [
      {
        smallTitle: "Notre savoir-faire",
        title: "Expertise multi-métiers du bâtiment",
        subtitle: "Escaliers, terrasses pilotis et meubles époxy sur mesure",
        content: "Spécialisés dans la menuiserie bois haut de gamme, nous créons des escaliers sur mesure, terrasses pilotis, balcons et meubles époxy uniques. Notre équipe de 2 à 5 collaborateurs passionnés allie savoir-faire traditionnel et techniques modernes pour réaliser vos projets les plus ambitieux. Chaque création est protégée par notre garantie décennale.",
        gradientFrom: "#2563eb",
        gradientTo: "#3b82f6",
        buttonText: "Voir nos prestations",
        buttonHref: "#services",
        reversed: false
      },
      {
        smallTitle: "Notre zone d'intervention",
        title: "Service de proximité en Île-de-France",
        subtitle: "Intervention dans un rayon de 100km",
        content: "Basés en région Auvergne-Rhône-Alpes, nous intervenons dans les départements 43, 42, 07, 63 et 15 pour concrétiser vos projets de menuiserie d'exception. Notre proximité nous permet d'assurer un suivi personnalisé de A à Z, depuis la conception jusqu'à la pose, avec des déplacements sur mesure pour étudier chaque projet dans son environnement.",
        gradientFrom: "#059669",
        gradientTo: "#10b981",
        buttonText: "Vérifier votre zone",
        buttonHref: "#contact",
        reversed: true
      }
    ]
  },
  gallery: {
    title: "Nos Réalisations",
    subtitle: "Découvrez nos réalisations en menuiserie bois : escaliers, terrasses pilotis, balcons et meubles époxy",
    initialDisplayCount: 4,
    images: []
  },
  contact: {
    title: "Contactez-nous",
    subtitle: "Devis gratuit et personnalisé"
  },
  team: {
    members: []
  },
  partners: {
    logos: []
  },
  colors: {
    primary: "#2563eb",
    secondary: "#059669",
    accent: "#3b82f6"
  }
};

// Merge config with defaults
function mergeWithDefaults(config: any, defaults: any): any {
  const result = { ...defaults };
  
  for (const key in config) {
    if (config[key] && typeof config[key] === 'object' && !Array.isArray(config[key])) {
      result[key] = mergeWithDefaults(config[key], defaults[key] || {});
    } else if (config[key] !== undefined && config[key] !== null) {
      result[key] = config[key];
    }
  }
  
  return result;
}

export const config: SiteConfig = mergeWithDefaults(siteConfig, defaultConfig);
