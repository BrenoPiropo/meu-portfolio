import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Breno Piropo | Desenvolvedor de Software",
  description:
    "Desenvolvedor Full Stack especializado em React Native, NestJS, TypeScript e Python. Estudante de Ciência da Computação na UESC.",
  keywords: ["desenvolvedor", "software", "react native", "nestjs", "typescript", "portfolio"],
  authors: [{ name: "Breno Piropo" }],
  openGraph: {
    title: "Breno Piropo | Desenvolvedor de Software",
    description: "Desenvolvedor Full Stack especializado em React Native, NestJS, TypeScript e Python.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#050505] text-[#f5f5f5]`}
      >
        {children}
      </body>
    </html>
  );
}