import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';
import { projetos } from '@/app/lib/projetos';

export default function ProjectsSection() {
  const getProjectConfig = (slug: string) => {
    switch(slug) {
      case 'clube-de-leitura':
        return { tag: 'Social', tagColor: 'text-emerald-400', accentColor: '#10b981', hashtags: ['#SOCIAL', '#GAMIFICATION'] };
      case 'minerva':
        return { tag: 'Mobile', tagColor: 'text-blue-400', accentColor: '#3b82f6', hashtags: ['#MOBILE', '#FULLSTACK'] };
      case 'astreu':
        return { tag: 'Science', tagColor: 'text-purple-400', accentColor: '#8b5cf6', hashtags: ['#NASA_API', '#STORAGE'] };
      default:
        return { tag: 'Projeto', tagColor: 'text-white', accentColor: '#ffffff', hashtags: [] };
    }
  };

  return (
    <section id="projetos" className="max-w-6xl mx-auto px-6 py-32">
      <AnimatedSection className="mb-16">
        <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em] mb-4 block">
          Portfólio
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
          Projetos em Destaque
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projetos.slice(0, 3).map((projeto, index) => {
          const config = getProjectConfig(projeto.slug);
          return (
            <AnimatedSection 
              key={projeto.slug} 
              delay={index * 150} 
              className={index === 0 ? 'lg:col-span-2' : ''}
            >
              <ProjectCard 
                name={projeto.nome}
                tag={config.tag}
                tagColor={config.tagColor}
                description={projeto.overview}
                videoUrl={projeto.videoUrl}
                imageUrl={projeto.imageUrl}
                slug={projeto.slug}
                accentColor={config.accentColor}
                hashtags={config.hashtags}
                index={index}
              />
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
