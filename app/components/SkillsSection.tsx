import AnimatedSection from './AnimatedSection';
import SkillCard from './SkillCard';

export default function SkillsSection() {
  const skills = [
    {
      icon: '📱',
      title: 'Mobile & Frontend',
      description: 'Experiência em React Native, Expo e TypeScript para interfaces imersivas.',
      tags: ['React Native', 'TypeScript', 'Expo'],
      color: 'blue' as const
    },
    {
      icon: '🗄️',
      title: 'Backend & Dados',
      description: 'Domínio em NestJS, SQL Server, MySQL e construção de APIs robustas.',
      tags: ['Node.js', 'NestJS', 'SQL'],
      color: 'purple' as const
    },
    {
      icon: '🤖',
      title: 'Inovação & Produtos',
      description: 'Desenvolvimento focado em gamificação, retenção de usuários e impacto real.',
      tags: ['Python', 'IA', 'Gamification'],
      color: 'cyan' as const
    }
  ];

  return (
    <section id="competencias" className="max-w-6xl mx-auto px-6 py-32">
      <AnimatedSection className="mb-16">
        <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.3em] mb-4 block">
          Competências
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
          O que eu construo
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <AnimatedSection key={index} delay={index * 150} className="h-full">
            <SkillCard {...skill} className="h-full" />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
