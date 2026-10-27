import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.posveci.com"),
  title: "POSVECI | Sistema POS para minimarket y almacenes",
  description:
    "Software para almacenes y minimarkets: punto de venta, control de inventario, caja y boleta electrónica SII. Prueba POSVECI gratis por 30 días.",
  keywords: [
    "sistema POS para minimarket",
    "software para almacenes",
    "control de inventario",
    "punto de venta Chile",
    "boleta electrónica SII",
  ],
  openGraph: {
    title: "POSVECI | Sistema POS para minimarket y almacenes",
    description: "Vende, controla tu stock y conoce tu negocio en tiempo real.",
    locale: "es_CL",
    type: "website",
    siteName: "POSVECI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} scroll-smooth`}>
      <body
        className="antialiased bg-white text-navy selection:bg-brand/15"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
