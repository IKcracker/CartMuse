import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/site-shell";

export const metadata: Metadata = {
  title: { default: "CartMuse — Your style. Your budget. Better finds.", template: "%s | CartMuse" },
  description: "Independent fashion inspiration, smart shopping tools and guides to finding eligible offers. Browse mood-led edits, plan your spend and shop more intentionally.",
  keywords: ["CartMuse", "South African fashion deals", "fashion finds", "shopping budget calculator", "SHEIN shopping guide"],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "CartMuse",
    title: "CartMuse — Your style. Your budget. Better finds.",
    description: "The fashion discovery destination for shoppers who love a good find.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}
