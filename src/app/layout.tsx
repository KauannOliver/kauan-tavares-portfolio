import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { perfil } from "@/content/perfil";
import { ExperienceProvider } from "@/components/layout/ExperienceProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RuntimeEffects } from "@/components/effects/RuntimeEffects";
import { siteUrl } from "@/lib/seo";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});
const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});
const title = `${perfil.nome} — ${perfil.titulo}`;
export const metadata: Metadata = {
  title: { default: title, template: "%s — Kauan Tavares" },
  description: perfil.frase,
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  openGraph: {
    title,
    description: perfil.frase,
    type: "website",
    locale: "pt_BR",
    siteName: perfil.nome,
  },
  twitter: { card: "summary_large_image", title, description: perfil.frase },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${mono.variable} ${display.variable}`}
    >
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <ExperienceProvider>
          <Navbar />
          {children}
          <Footer />
          <RuntimeEffects />
        </ExperienceProvider>
      </body>
    </html>
  );
}
