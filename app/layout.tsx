import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Electrostar - Électricien Professionnel en Île-de-France",
  description: "Electrostar, électricien professionnel spécialisé en électricité générale. Équipe de 2 à 5 collaborateurs intervenant en Île-de-France, Oise et Haute-Savoie. Devis gratuit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
       <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="keywords" content="électricien, Île-de-France, Oise, Haute-Savoie, électricité générale, installation électrique, dépannage, mise aux normes, Electrostar" />
        <meta name="author" content="Omar El Mahjouby - Electrostar" />
        <meta property="og:title" content="Electrostar - Électricien Professionnel en Île-de-France" />
        <meta property="og:description" content="Électricien professionnel spécialisé en électricité générale. Équipe de 2 à 5 collaborateurs intervenant en Île-de-France, Oise et Haute-Savoie." />
        <meta property="og:type" content="website" />
        
        {/* Google tag (gtag.js) - Electrostar */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11128083735" strategy="afterInteractive" />
        <Script id="google-analytics-electrostar" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11128083735');
          `}
        </Script>

      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
