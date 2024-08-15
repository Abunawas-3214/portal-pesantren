import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/partials/footer";
import Header from "@/components/partials/header";


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Pesantren NU",
  description: "Generated by create next app",
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
      </body>
    </html>
  );
}
