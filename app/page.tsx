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
      title: "Installation Électrique",
      subtitle: "Neuf et rénovation",
      content: "Installation électrique complète sur chantiers de rénovation et construction. Compteurs, prises, éclairage, tableaux électriques. Vérification et contrôle de l'installation pour votre sécurité.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
    },
    {
      title: "Installation Électroménager",
      subtitle: "Fourniture et installation",
      content: "Installation complète d'électroménager : four, plaques de cuisson, réfrigérateur, lave-linge, lave-vaisselle, hotte aspirante. Service clé en main avec garantie.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    },
    {
      title: "Éclairage & Maintenance",
      subtitle: "Extérieur et professionnel",
      content: "Éclairage extérieur, maintenance de l'éclairage et installations électriques dans les gares, centres commerciaux. Contrôle et remise aux normes des anciennes installations.",
      image: "/tableau.png"
    }
  ];

  const galleryImages = [
    {
      src: "/client/1.jpg",
      alt: "Installation électrique - BatiElec"
    },
    {
      src: "/client/2.jpg",
      alt: "Tableau électrique - BatiElec"
    },
    {
      src: "/client/3.jpg",
      alt: "Installation électroménager - BatiElec"
    },
    {
      src: "/client/4.jpg",
      alt: "Éclairage extérieur - BatiElec"
    },
    {
      src: "/client/5.jpg",
      alt: "Rénovation électrique - BatiElec"
    },
    {
      src: "/client/6.jpg",
      alt: "Installation prises - BatiElec"
    },
    {
      src: "/client/7.jpg",
      alt: "Maintenance électrique - BatiElec"
    },
    {
      src: "/client/8.jpg",
      alt: "Installation compteur - BatiElec"
    },
    {
      src: "/client/9.jpg",
      alt: "Mise aux normes - BatiElec"
    },
    {
      src: "/client/10.jpg",
      alt: "Installation éclairage - BatiElec"
    },
    {
      src: "/client/11.jpg",
      alt: "Dépannage électrique - BatiElec"
    },
    {
      src: "/client/12.jpg",
      alt: "Installation four - BatiElec"
    },
    {
      src: "/client/13.jpg",
      alt: "Installation lave-linge - BatiElec"
    },
    {
      src: "/client/14.jpg",
      alt: "Installation lave-vaisselle - BatiElec"
    },
    {
      src: "/client/15.jpg",
      alt: "Installation hotte - BatiElec"
    },
    {
      src: "/client/16.jpg",
      alt: "Installation plaques - BatiElec"
    },
    {
      src: "/client/17.jpg",
      alt: "Installation réfrigérateur - BatiElec"
    },
    {
      src: "/client/18.jpg",
      alt: "Contrôle installation - BatiElec"
    }
  ];

  const partnerLogos = [
    {
      src: "/logo/cic.png",
      alt: "CIC - Partenaire bancaire",
      name: "CIC"
    },
    {
      src: "/logo/decennale.png",
      alt: "Assurance décennale - Garantie", 
      name: "Assurance Décennale"
    },
    {
      src: "/logo/tmc-partenaire.png",
      alt: "TMC Partenaire - Réseau professionnel",
      name: "TMC Partenaire"
    }
  ];

  const teamMembers = [
    {
      name: "Omar",
      position: "Électricien Professionnel - Fondateur BatiElec",
      description: "Électricien professionnel passionné, je dirige BatiElec depuis 2024 avec plus de 20 ans d'expérience dans le domaine électrique en France, Suisse et Espagne. Diplômé d'un Bac Électrotechnique (1997) et DUT Électrotechnique (1999), notre équipe de 2 à 5 collaborateurs assure installations électriques, tableaux, prises, éclairage et installation d'électroménager avec garantie décennale.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const contactInfo = {
    address: "3 Secteurs Île-de-France : Nord, Centre, Sud",
    phone: "07 46 33 50 95",
    email: "elmahjomar@gmail.com",
    hours: "Lundi - Vendredi: 8h00 - 18h00\nSamedi: 8h00 - 12h00",
    mapEmbedUrl: "https://maps.google.com/maps?q=Paris,Île-de-France&t=&z=10&ie=UTF8&iwloc=&output=embed"
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
          image="/about.png"
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
        <ProjectGallery 
          title="Nos Réalisations"
          subtitle="Découvrez nos réalisations en installation électrique par BatiElec"
          images={galleryImages}
          initialDisplayCount={8}
        />
      </div>
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image="/about2.png"
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection title="Qui suis-je ?" subtitle="Électricien professionnel au service de vos projets" config={config.team} />
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
