import type { Metadata } from 'next';
import { getProjeto, projetos } from '@/app/lib/projetos';

type ProjectLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projetos.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjeto(slug);

  if (!project) {
    return { title: 'Projeto não encontrado | Breno Piropo' };
  }

  return {
    title: `${project.nome} — Estudo de caso | Breno Piropo`,
    description: project.overview,
    keywords: [...project.stack.slice(0, 6), project.nome, 'estudo de caso'],
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `${project.nome} — Estudo de caso`,
      description: project.overview,
      type: 'article',
      locale: 'pt_BR',
    },
  };
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return children;
}
