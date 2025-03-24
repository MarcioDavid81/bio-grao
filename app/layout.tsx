import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import PriceTicker from "@/components/price-ticker";
import GetPrices from "@/components/get-prices";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Home | Bio Grão",
    template: "%s | Bio Grão",
  },
  icons: [
    {
      url: "/logoB.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${exo.variable} antialiased`}>
        <Header />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
