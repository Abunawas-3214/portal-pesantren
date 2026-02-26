import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/partials/footer";
import Header from "@/components/partials/header";
import BackToTop from "@/components/ui/back-to-top";


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
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
