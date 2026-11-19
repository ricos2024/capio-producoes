import type { Metadata, Viewport } from "next";
import { Big_Shoulders, JetBrains_Mono, Libre_Franklin } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";
import "./capio.css";

const display = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});
const corpo = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});
const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.nome} · Produtora audiovisual em Brasília`, template: `%s · ${site.nome}` },
  description: site.descricao,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    title: `${site.nome} · Produtora audiovisual em Brasília`,
    description: "Direção, captação e edição de vídeo para empresas: institucionais, conteúdo para redes, eventos e transmissão ao vivo.",
    url: site.url,
  },
};

export const viewport: Viewport = { themeColor: "#121419", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${corpo.variable} ${mono.variable}`}>
      <body id="inicio">{children}</body>
    </html>
  );
}
