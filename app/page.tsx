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
      subtitle: "Installations et rénovations électriques",
      content: "Installation complète et rénovation électrique pour particuliers et professionnels. Mise aux normes, tableaux électriques, éclairage et prises. Travail soigné et conforme aux normes.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
    },
    {
      title: "Dépannage Électrique",
      subtitle: "Intervention rapide 7j/7",
      content: "Dépannage électrique d'urgence et réparations. Panne de courant, disjoncteur qui saute, problèmes d'éclairage. Intervention rapide en Île-de-France, Oise et Haute-Savoie.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    },
    {
      title: "Mise aux Normes",
      subtitle: "Sécurité et conformité",
      content: "Mise aux normes de vos installations électriques anciennes. Diagnostic électrique, remplacement de tableaux, mise à la terre. Respect des normes NF C 15-100 pour votre sécurité.",
      image: "/tableau.png"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop",
      alt: "Installation électrique résidentielle",
      title: "Installation électrique - Toulouse"
    },
    {
      src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=800&fit=crop",
      alt: "Tableau électrique moderne",
      title: "Tableau électrique - Montpellier"
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=800&fit=crop",
      alt: "Dépannage électrique",
      title: "Dépannage - Perpignan"
    },
    {
      src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&h=800&fit=crop",
      alt: "Mise aux normes électriques",
      title: "Mise aux normes - Carcassonne"
    },
    {
      src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=800&fit=crop",
      alt: "Installation éclairage",
      title: "Éclairage - Albi"
    },
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      alt: "Rénovation électrique",
      title: "Rénovation - Auch"
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
      name: "Omar El Mahjouby",
      position: "Électricien Professionnel - Fondateur",
      description: "Électricien professionnel passionné, je dirige Electrostar avec un engagement total pour la qualité et la sécurité. Spécialisé en électricité générale, notre équipe de 2 à 5 collaborateurs intervient en Île-de-France, Oise et Haute-Savoie avec un service personnalisé et réactif. Chaque installation respecte les normes en vigueur pour votre sécurité.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const contactInfo = {
    address: "Île-de-France, Oise, Haute-Savoie\nÉquipe de 2 à 5 collaborateurs",
    phone: "01 XX XX XX XX",
    email: "electrostar1525@gmail.com",
    hours: "Lundi - Vendredi: 8h00 - 18h00\nSamedi: 8h00 - 12h00",
    mapEmbedUrl: "https://maps.google.com/maps?q=Midi-Pyrénées,France&t=&z=8&ie=UTF8&iwloc=&output=embed"
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
      <TeamSection title="Notre Équipe" subtitle="Électricien professionnel au service de vos projets" config={config.team} />
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
