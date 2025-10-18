'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Calendar, Database, UserCheck } from 'lucide-react';
import { config } from '@/lib/config';

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 overflow-hidden">
        {/* Optional background image overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Politique de Confidentialité
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Protection et traitement de vos données personnelles conformément au RGPD.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {config.company.name}, représenté par {config.company.ceo}, s'engage à protéger la vie privée 
                  des utilisateurs de son site web et à respecter la réglementation en vigueur sur la protection 
                  des données personnelles, notamment le Règlement Général sur la Protection des Données (RGPD).
                </p>
                <p>
                  Cette politique de confidentialité vous informe sur la façon dont nous collectons, utilisons, 
                  stockons et protégeons vos données personnelles lorsque vous utilisez notre site web ou nos services.
                </p>
              </div>
            </div>

            {/* Responsable du traitement */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsable du traitement</h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p><strong>Dénomination :</strong> {config.company.legalName}</p>
                <p><strong>Nom commercial :</strong> {config.company.name}</p>
                <p><strong>Forme juridique :</strong> {config.company.formeJuridique}</p>
                <p><strong>SIRET :</strong> {config.company.siret}</p>
                <p><strong>Adresse :</strong> {config.company.address}</p>
                <p><strong>Email :</strong> <a href={`mailto:${config.company.email}`} className="text-gray-600 hover:text-gray-800 transition-colors">{config.company.email}</a></p>
                <p><strong>Téléphone :</strong> <a href={`tel:${config.company.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-gray-800 transition-colors">{config.company.phone}</a></p>
              </div>
            </div>

            {/* Données collectées */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Database className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Données collectées</h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nous collectons les données personnelles suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                  <li><strong>Données de localisation :</strong> adresse postale pour l'intervention</li>
                  <li><strong>Données de projet :</strong> description des travaux électriques souhaités</li>
                  <li><strong>Données de navigation :</strong> adresse IP, cookies, pages visitées</li>
                  <li><strong>Données de communication :</strong> échanges par email, téléphone ou formulaire</li>
                </ul>
              </div>
            </div>

            {/* Finalités du traitement */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Finalités du traitement</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Vos données personnelles sont collectées et traitées pour les finalités suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Établissement de devis et gestion des demandes de services</li>
                  <li>Exécution des contrats de travaux électriques</li>
                  <li>Communication avec les clients et prospects</li>
                  <li>Gestion de la relation client et du service après-vente</li>
                  <li>Respect des obligations légales et réglementaires</li>
                  <li>Amélioration de nos services et de notre site web</li>
                  <li>Prospection commerciale (avec votre consentement)</li>
                </ul>
              </div>
            </div>

            {/* Base légale */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Base légale du traitement</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Le traitement de vos données personnelles est fondé sur :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>L'exécution d'un contrat :</strong> pour la réalisation des travaux électriques</li>
                  <li><strong>L'intérêt légitime :</strong> pour l'amélioration de nos services</li>
                  <li><strong>Le consentement :</strong> pour la prospection commerciale et les cookies non essentiels</li>
                  <li><strong>L'obligation légale :</strong> pour la conservation des factures et documents comptables</li>
                </ul>
              </div>
            </div>

            {/* Destinataires */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Destinataires des données</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Vos données personnelles peuvent être transmises aux destinataires suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personnel autorisé de {config.company.name}</li>
                  <li>Prestataires techniques (hébergement, maintenance du site)</li>
                  <li>Organismes de contrôle et autorités compétentes (sur demande légale)</li>
                  <li>Assureurs et organismes de garantie</li>
                </ul>
                <p>
                  Nous nous engageons à ne jamais vendre, louer ou céder vos données à des tiers à des fins commerciales.
                </p>
              </div>
            </div>

            {/* Durée de conservation */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Durée de conservation</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Vos données sont conservées pendant les durées suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Données clients :</strong> 10 ans après la fin du contrat (garantie décennale)</li>
                  <li><strong>Données prospects :</strong> 3 ans après le dernier contact</li>
                  <li><strong>Données comptables :</strong> 10 ans (obligation légale)</li>
                  <li><strong>Cookies :</strong> 13 mois maximum</li>
                  <li><strong>Données de navigation :</strong> 25 mois maximum</li>
                </ul>
              </div>
            </div>

            {/* Vos droits */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos droits</h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                  <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                  <li><strong>Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez-nous à : <a href={`mailto:${config.company.email}`} className="text-gray-600 hover:text-gray-800 transition-colors">{config.company.email}</a>
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Lock className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sécurité des données</h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                  vos données personnelles contre :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>L'accès non autorisé</li>
                  <li>La divulgation, l'altération ou la destruction</li>
                  <li>La perte accidentelle</li>
                </ul>
                <p>
                  Ces mesures incluent le chiffrement des données, l'authentification sécurisée, 
                  la sauvegarde régulière et la formation de notre personnel.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                  <li><strong>Cookies de performance :</strong> pour analyser l'utilisation du site</li>
                  <li><strong>Cookies de fonctionnalité :</strong> pour mémoriser vos préférences</li>
                </ul>
                <p>
                  Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur 
                  ou via notre bandeau de consentement.
                </p>
              </div>
            </div>

            {/* Réclamations */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Réclamations</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Si vous estimez que le traitement de vos données personnelles constitue une violation 
                  du RGPD, vous avez le droit d'introduire une réclamation auprès de la CNIL :
                </p>
                <p>
                  <strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong><br />
                  3 Place de Fontenoy - TSA 80715<br />
                  75334 PARIS CEDEX 07<br />
                  Téléphone : 01 53 73 22 22<br />
                  Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">www.cnil.fr</a>
                </p>
              </div>
            </div>

            {/* Modifications */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Modifications de la politique</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                  Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé 
                  de nos pratiques en matière de protection des données.
                </p>
              </div>
            </div>

            {/* Date de mise à jour */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Calendar className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">Dernière mise à jour</span>
              </div>
              <p className="text-gray-600">17 octobre 2025</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
