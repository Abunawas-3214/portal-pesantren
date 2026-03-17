import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/partials/footer";
import Header from "@/components/partials/header";
import BackToTop from "@/components/ui/back-to-top";
import { SpeedInsights } from "@vercel/speed-insights/next"

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Portal Pesantren RMI NU",
  description: "Pusat informasi dan direktori Pesantren di bawah naungan RMI NU Kota Malang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://pesantrennu.id/#organization",
        "name": "RMI NU Kota Malang",
        "url": "https://pesantrennu.id",
        "logo": {
          "@type": "ImageObject",
          "url": "https://pesantrennu.id/rmi.svg"
        },
        "description": "Rabithah Ma'ahid Islamiyah Nahdlatul Ulama (RMI NU) Kota Malang."
      },
      {
        "@type": "WebSite",
        "@id": "https://pesantrennu.id/#website",
        "url": "https://pesantrennu.id",
        "name": "Portal Pesantren RMI NU",
        "publisher": {
          "@id": "https://pesantrennu.id/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://pesantrennu.id/pesantren?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <SpeedInsights />
      </body>
    </html>
  );
}
