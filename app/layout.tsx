import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
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
  robots: {
    index: true,
    follow: true,
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
        className="font-sans antialiased bg-[#050505] text-[#f5f5f5]"
      >
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
