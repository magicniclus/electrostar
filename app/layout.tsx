import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "BatiElec - Électricien expert depuis 20 ans | Ville-la-Grand (74100)",
  description: "BatiElec, électricien expert depuis 20 ans. Tableaux électriques, prises, éclairage, électroménager. Intervention Ain, Haute-Savoie, Genève, Vaud, Lausanne. Devis gratuit.",
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
        <meta name="keywords" content="électricien, Ville-la-Grand, Haute-Savoie, Ain, Genève, Vaud, Lausanne, installation électrique, tableau électrique, prises, éclairage, électroménager, BatiElec" />
        <meta name="author" content="Omar EL MAHJOUBY DERMANE - BatiElec" />
        <meta property="og:title" content="BatiElec - Électricien expert depuis 20 ans | Ville-la-Grand" />
        <meta property="og:description" content="Installation électrique professionnelle. Tableaux électriques, prises, éclairage, électroménager. Intervention Ain, Haute-Savoie, Genève, Vaud, Lausanne." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/bg.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Google tag (gtag.js) - BatiElec */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11128083735" strategy="afterInteractive" />
        <Script id="google-analytics-batielec" strategy="afterInteractive">
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
