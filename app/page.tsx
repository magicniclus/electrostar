'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';

export default function Home() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  const servicesData = [
    {
      title: "Électricité Générale",
      subtitle: "Installations électriques complètes",
      content: "Installation et rénovation électrique pour particuliers et professionnels. Mise aux normes, tableaux électriques, éclairage et prises. Intervention rapide et travail soigné depuis 2005.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
    },
    {
      title: "Domotique & Maison Connectée",
      subtitle: "Automatisation intelligente",
      content: "Installation de systèmes domotiques pour automatiser votre habitat. Éclairage intelligent, volets roulants, chauffage connecté et sécurité. Solutions modernes et évolutives.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    },
    {
      title: "Portails Automatisés",
      subtitle: "Motorisation et automatisation",
      content: "Installation et maintenance de portails automatiques. Motorisation de portails battants et coulissants, interphones, digicodes et télécommandes. Service complet clé en main.",
      image: "/portail.png"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop",
      alt: "Installation racks industriels",
      title: "Racks de stockage - Marseille"
    },
    {
      src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=800&fit=crop",
      alt: "Structure métallique sur mesure",
      title: "Fabrication métallique - Nice"
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=800&fit=crop",
      alt: "Travaux de chaudronnerie",
      title: "Chaudronnerie - Toulon"
    },
    {
      src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&h=800&fit=crop",
      alt: "Ferronnerie industrielle",
      title: "Ferronnerie - Cannes"
    },
    {
      src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=800&fit=crop",
      alt: "Maintenance équipements",
      title: "Maintenance - Aix-en-Provence"
    },
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      alt: "Assemblage industriel",
      title: "Assemblage - Avignon"
    }
  ];

  const partnerLogos = [
    {
      src: "/logo/SMA_BTP.png",
      alt: "SMA BTP - Partenaire construction",
      name: "SMA BTP"
    },
    {
      src: "/logo/decennale.png",
      alt: "Assurance décennale - Garantie", 
      name: "Assurance Décennale"
    },
    {
      src: "/logo/qonto.png",
      alt: "Qonto - Partenaire bancaire",
      name: "Qonto"
    },
    {
      src: "/logo/tmc-partenaire.png",
      alt: "TMC Partenaire - Réseau professionnel",
      name: "TMC Partenaire"
    }
  ];

  const teamMembers = [
    {
      name: "Adrien",
      position: "Fondateur & Électricien Expert",
      description: "Électricien professionnel depuis 2005, je dirige Darien Elec en tant qu'auto-entrepreneur. Expert en électricité générale, domotique et automatisation de portails, j'interviens dans un rayon de 100km avec un service personnalisé. Chaque projet bénéficie d'une approche technique rigoureuse pour garantir sécurité et performance.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const contactInfo = {
    address: "Tour\nRayon d'intervention: 100km",
    phone: "07 53 73 71 22",
    email: "contact@darien-elec.fr",
    hours: "Lundi - Vendredi: 8h00 - 18h00\nSamedi: 8h00 - 12h00",
    mapEmbedUrl: "https://maps.google.com/maps?q=Tour,France&t=&z=10&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      <Hero config={config.hero} />
      <LogoCarousel config={config.partners} speed={30} />
      <div id="expertise">
        <AboutSection
          smallTitle={config.about.sections[0].smallTitle}
          title={config.about.sections[0].title}
          subtitle={config.about.sections[0].subtitle}
          content={config.about.sections[0].content}
          image="/about.jpg"
          gradientFrom={config.about.sections[0].gradientFrom}
          gradientTo={config.about.sections[0].gradientTo}
          buttonText={config.about.sections[0].buttonText}
          buttonHref={config.about.sections[0].buttonHref}
          reversed={config.about.sections[0].reversed}
        />
      </div>
      <div id="services">
        <ServicesSection title="Nos Services" subtitle="Découvrez notre gamme complète de prestations électriques" cards={servicesData} />
      </div>
      <div id="realisations">
        <ProjectGallery config={config.gallery} />
      </div>
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image="/about2.jpg"
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection title="Notre Équipe" subtitle="Expert en électricité et domotique au service de vos projets" config={config.team} />
      <ContactSection contactInfo={contactInfo} />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
