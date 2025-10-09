import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Paciflo Elec - Électricien Professionnel en Midi-Pyrénées",
  description: "Paciflo Elec, électricien professionnel spécialisé en électricité générale. Intervention rapide dans un rayon de 42km en Midi-Pyrénées. Devis gratuit.",
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
        <meta name="keywords" content="électricien, Midi-Pyrénées, électricité générale, installation électrique, dépannage, mise aux normes, Paciflo Elec" />
        <meta name="author" content="Patrice Ferret - Paciflo Elec" />
        <meta property="og:title" content="Paciflo Elec - Électricien Professionnel en Midi-Pyrénées" />
        <meta property="og:description" content="Électricien professionnel spécialisé en électricité générale. Intervention rapide dans un rayon de 42km en Midi-Pyrénées." />
        <meta property="og:type" content="website" />
        
        {/* Google tag (gtag.js) - Paciflo Elec */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11128083735" strategy="afterInteractive" />
        <Script id="google-analytics-paciflo" strategy="afterInteractive">
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
