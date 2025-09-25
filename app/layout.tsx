import type { Metadata } from "next";
import { Poppins, Seymour_One } from "next/font/google";
import localFont from "next/font/local";
import NavbarComponent from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-primary",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const seymour = Seymour_One({
  variable: "--font-termalazo",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const restora = localFont({
  src: "../public/Restora.woff2",
  variable: "--font-title",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gattellaindustriaturistica.com"),
  title: {
    default: "Gattella Industria Turística | Hotelería en Termas de Río Hondo",
    template: "%s | Gattella Industria Turística",
  },
  description:
    "Gattella Industria Turística es una empresa familiar en Termas de Río Hondo que gestiona hoteles como City, Suiza, Panamericano y Principado. Ofrecemos confort, gastronomía y relax, brindando experiencias termales únicas.",
  keywords: [
    "Gattella Industria Turística",
    "hotelería Termas de Río Hondo",
    "hoteles Gattella",
    "empresa hotelera Termas",
    "hoteles integrados Gattella",
    "gestión hotelera Termas",
    "hotel Suiza Termas",
    "hotel City Termas",
  ],
  openGraph: {
    type: "website",
    url: "https://www.gattellaindustriaturistica.com",
    title: "Gattella Industria Turística | Hotelería en Termas de Río Hondo",
    description:
      "Descubre Gattella Industria Turística, empresa familiar que administra hoteles en Termas de Río Hondo. Confort, gastronomía, relax y una propuesta integral en hotelería regional.",
    images: [
      {
        url: "/portada-gattella.webp",
        width: 1200,
        height: 630,
        alt: "Gattella Industria Turística - Termas de Río Hondo",
      },
    ],
    siteName: "Gattella Industria Turística",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gattella Industria Turística | Hotelería en Termas de Río Hondo",
    description:
      "Empresa hotelera familiar en Termas de Río Hondo que gestiona varios hoteles. Confort, relax y gastronomía bajo la marca Gattella.",
    images: ["/portada-gattella.webp"],
  },
  alternates: {
    canonical: "https://www.gattellaindustriaturistica.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${restora.variable} ${poppins.variable} ${seymour.variable} antialiased`}
      >
        {/* <ThemeInit /> */}
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
