import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "UpperLevel Barbershop | Marietta, GA — 30+ Years of Precision Cuts",
  description:
    "UpperLevel Barbershop in Marietta, Georgia. Over 30 years of experience. Precision haircuts, fades, beard trims, and loc maintenance for men, women, and kids. Book your appointment today.",
  keywords: [
    "barbershop",
    "Marietta GA",
    "haircut",
    "fade",
    "beard trim",
    "loc maintenance",
    "UpperLevel Barbershop",
    "Coffia Hillman",
    "barber near me",
  ],
  openGraph: {
    title: "UpperLevel Barbershop | Marietta, GA",
    description:
      "30+ years of precision cuts. Fades, beard trims, loc maintenance — for men, women, and kids. Book now on Booksy.",
    type: "website",
    locale: "en_US",
    // PLACEHOLDER — swap with actual deployed URL
    url: "https://upperlevelbarbershop.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-brand-light text-brand-dark`}
      >
        {children}
      </body>
    </html>
  );
}
