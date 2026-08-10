export interface Projeto {
  slug: string;
  nome: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  borderColor: string;
  gradientFrom: string;
  videoUrl: string;
  imageUrl?: string;
  overview: string;
  problema: string;
  solucao: string;
  arquitetura: {
    titulo: string;
    descricao: string;
  }[];
  stack: string[];
  desafios: {
    titulo: string;
    descricao: string;
  }[];
  aprendizados: string[];
  resultado: string;
  githubUrl?: string;
  githubBackendUrl?: string;
  documentationUrl?: string;
  documentationCompleteUrl?: string;
  featured?: boolean;
  role: string;
  status: string;
  highlights: string[];
}

export const projetos: Projeto[] = [
  {
    slug: "astreu",
    nome: "Astreu",
    tag: "Science & IA",
    tagColor: "text-purple-400",
    tagBg: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    gradientFrom: "from-purple-500/10",
    videoUrl: "https://www.youtube.com/embed/99UX5aCpF8Q",
    imageUrl: "/logo_astreu.jpg",
    overview: "Plataforma mobile de exploração astronômica desenvolvida como TCC. Reúne dados científicos, comunidade e um assistente RAG que consulta artigos reais antes de responder.",
    problema: `Dados astronômicos confiáveis estão distribuídos entre diferentes fontes científicas e costumam exigir interfaces especializadas. Ao mesmo tempo, assistentes generalistas podem responder sem fundamentação e dificultar a conferência das informações.`,
    solucao: `Desenvolvi uma experiência mobile que integra NASA APOD, NASA NeoWs, Caltech Exoplanet Archive, ESA Gaia DR3 e arXiv. O backend em NestJS organiza usuários, comunidade e diário de bordo, enquanto o pipeline RAG usa Ollama, Llama 3, mxbai-embed-large e ChromaDB para recuperar trechos científicos antes de gerar respostas com referências.`,
    arquitetura: [
      {
        titulo: "Sistema RAG & Inteligência Artificial",
        descricao: "PDFs do arXiv são divididos em blocos, vetorizados com mxbai-embed-large e armazenados no ChromaDB. Os quatro trechos mais similares são enviados ao Llama 3 como contexto."
      },
      {
        titulo: "Gateway de APIs Espaciais & Adapters",
        descricao: "Integrações com NASA APOD, NASA NeoWs, Caltech Exoplanet Archive, ESA Gaia DR3 e arXiv abastecem as áreas de exploração científica do aplicativo."
      },
      {
        titulo: "Backend modular e persistência",
        descricao: "API NestJS com TypeORM e MySQL, organizada em módulos para usuários, autenticação, comunidade, diário de bordo, metas, galeria e inteligência artificial."
      },
      {
        titulo: "Experiência mobile e comunidade",
        descricao: "Frontend em React Native e Expo com catálogo científico, galeria, feed social, upload de PDFs, diário de bordo com fotos e metas de exploração."
      }
    ],
    stack: ["React Native", "Expo", "TypeScript", "NestJS", "TypeORM", "MySQL", "LangChain", "Ollama / Llama 3", "ChromaDB", "NASA APIs"],
    desafios: [
      {
        titulo: "Implementação e Precisão do RAG com Artigos Científicos",
        descricao: "Estruturar ingestão, chunking, embeddings e recuperação de contexto para fazer o modelo responder a partir dos artigos científicos disponíveis. A avaliação formal do RAG permanece como evolução planejada."
      },
      {
        titulo: "Integração de fontes heterogêneas",
        descricao: "Normalizar respostas de diferentes serviços científicos e apresentá-las em uma navegação consistente, mantendo tratamento de erros por integração."
      },
      {
        titulo: "Segurança e evolução da autenticação",
        descricao: "A versão documentada ainda não utiliza JWT. A adoção de tokens de sessão, remoção de credenciais hardcoded e proteção dos endpoints está registrada como prioridade técnica."
      }
    ],
    aprendizados: [
      "Sistemas de RAG enriquecem drasticamente a experiência do usuário ao transformar documentos técnicos estáticos em conhecimento conversacional.",
      "A integração de fontes científicas exige adapters claros e tratamento independente de falhas.",
      "Documentar limitações de segurança e avaliação torna o estudo de caso mais transparente e útil."
    ],
    resultado: `O projeto entrega um protótipo full stack documentado com nove áreas principais, integrações científicas reais, comunidade e um pipeline RAG executado localmente. As próximas etapas registradas incluem avaliação formal do RAG e fortalecimento da autenticação.`,
    githubUrl: "https://github.com/BrenoPiropo",
    documentationUrl: "/Documentacao_Resumida_Astreu_Hub.html",
    documentationCompleteUrl: "/Documentacao_Completa_Astreu_Hub.html",
    featured: true,
    role: "Desenvolvimento full stack individual e pesquisa aplicada no TCC",
    status: "Protótipo acadêmico documentado",
    highlights: ["RAG com artigos científicos", "5 fontes de dados", "9 áreas principais"]
  },
  {
    slug: "clube-de-leitura",
    nome: "Clube de Leitura",
    tag: "Social",
    tagColor: "text-emerald-400",
    tagBg: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    gradientFrom: "from-emerald-500/10",
    videoUrl: "https://www.youtube.com/embed/wCEmGjhn6Uw",
    imageUrl: "/logo_clube_leitura.jpg",
    overview: "Ecossistema social gamificado que transforma a leitura solitária em uma experiência coletiva. O app conecta leitores em clubes temáticos, gamifica metas pessoais e integra a OpenLibrary para acesso instantâneo a milhões de títulos.",
    problema: `A leitura é uma atividade fundamental para o desenvolvimento intelectual, mas a maioria dos leitores abandona metas por falta de accountability social. Apps existentes focam apenas no rastreamento individual, ignorando o poder da comunidade. Além disso, a descoberta de novos livros é fragmentada entre múltiplas plataformas.`,
    solucao: `Criei um ecossistema onde leitores formam clubes temáticos, compartilham metas semanais e competem em rankings de engajamento. A gamificação não é superficial: conquistas são desbloqueadas por consistência (dias consecutivos de leitura), volume (páginas lidas) e social (discussões em clubes). A integração com a OpenLibrary API elimina a fricção de cadastrar livros manualmente.`,
    arquitetura: [
      {
        titulo: "Backend Modular (NestJS)",
        descricao: "Arquitetura em camadas com módulos independentes para autenticação, clubes, metas e notificações. Cada módulo possui seu próprio controller, service e repository, garantindo escalabilidade e testabilidade."
      },
      {
        titulo: "Sincronização em Tempo Real",
        descricao: "WebSockets via Socket.io para atualizações instantâneas em clubes literários. Quando um membro posta uma resenha ou atualiza seu progresso, todos os participantes recebem a notificação em tempo real."
      },
      {
        titulo: "Cache Inteligente",
        descricao: "Redis para cache de rankings e feeds de atividade. Dados de alta frequência de leitura são cacheados por 5 minutos, reduzindo drasticamente a carga no PostgreSQL."
      },
      {
        titulo: "Offline-First",
        descricao: "AsyncStorage do React Native persiste leituras localmente. Quando a conexão é restabelecida, um sync engine reconcilia diferenças entre estado local e servidor, resolvendo conflitos por timestamp."
      }
    ],
    stack: ["React Native", "Expo Router", "NestJS", "TypeScript", "SQL Server", "Redis", "Socket.io", "OpenLibrary API"],
    desafios: [
      {
        titulo: "Sincronização de Estado Offline-First",
        descricao: "O maior desafio técnico foi garantir consistência de dados quando o usuário alterna entre online e offline. Implementei um sync engine com fila de operações pendentes (operation queue) e resolução de conflitos baseada em Last-Write-Wins com vetores de clock."
      },
      {
        titulo: "Gamificação que não pareça forçada",
        descricao: "Evitei sistemas de pontos genéricos. Cada conquista tem um propósito narrativo: 'Maratonista' para 7 dias consecutivos, 'Crítico' para 10 resenhas detalhadas. O sistema de níveis é baseado em horas de leitura, não em interações vazias."
      },
      {
        titulo: "Performance com Listas Grandes",
        descricao: "A lista de livros da OpenLibrary pode retornar milhares de resultados. Implementei virtualização com FlashList, paginação cursor-based no backend e skeleton screens para perceived performance."
      }
    ],
    aprendizados: [
      "A importância de pensar em estados de erro desde o início: usuários offline, APIs indisponíveis, timeouts.",
      "Gamificação efetiva precisa de feedback imediato. Delay entre ação e recompensa maior que 2s quebra o loop de engajamento.",
      "TypeScript em todo o stack (frontend + backend) eliminou uma classe inteira de bugs de integração."
    ],
    resultado: `O projeto demonstra a construção de uma experiência social de leitura com clubes temáticos, metas, rankings, atualização em tempo real e integração com um catálogo externo de livros.`,
    githubUrl: "https://github.com/BrenoPiropo",
    role: "Desenvolvimento full stack individual",
    status: "Projeto independente",
    highlights: ["Clubes temáticos", "Gamificação", "Integração OpenLibrary"]
  },
  {
    slug: "minerva",
    nome: "Minerva",
    tag: "Mobile & Backend",
    tagColor: "text-blue-400",
    tagBg: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    gradientFrom: "from-blue-500/10",
    videoUrl: "https://www.youtube.com/embed/uj8AEABea3A",
    imageUrl: "/logo_minerva.jpg",
    overview: "Aplicativo mobile gamificado para aprender vocabulário em inglês com flash cards, revisão espaçada, jogos, tutor de IA, ranking e desafios diários.",
    problema: `Praticar vocabulário de forma consistente exige variedade, feedback rápido e um histórico de progresso. Experiências restritas a listas ou flash cards isolados podem perder engajamento e não priorizar palavras que precisam de revisão.`,
    solucao: `Desenvolvi um aplicativo em React Native e Expo com estudo por flash cards, revisão de erros, jogos de palavras, tutor com Google Gemini e um sistema de XP, níveis, ofensiva, conquistas, ranking e desafios diários. O backend NestJS usa JWT, TypeORM e MySQL, com deploy containerizado no Render.`,
    arquitetura: [
      {
        titulo: "Implantado em Produção com Docker",
        descricao: "Arquitetura backend containerizada com Docker, garantindo ambientes consistentes entre desenvolvimento, staging e produção com integração contínua."
      },
      {
        titulo: "Revisão espaçada",
        descricao: "O backend registra acertos e erros e disponibiliza as palavras pendentes para revisão, criando um ciclo de prática focado nas dificuldades do usuário."
      },
      {
        titulo: "Gamificação integrada",
        descricao: "XP, níveis, ofensiva, três desafios diários, conquistas e ranking global conectam estudo, jogos e progressão em uma única experiência."
      },
      {
        titulo: "Autenticação e API",
        descricao: "API NestJS protegida com JWT, Passport, bcrypt, Helmet e limitação de requisições. O gateway de IA mantém a integração com Gemini no backend."
      }
    ],
    stack: ["React Native", "Expo Router", "TypeScript", "NestJS", "TypeORM", "MySQL", "JWT", "Google Gemini", "Docker", "Render"],
    desafios: [
      {
        titulo: "Unificar estudo e jogos",
        descricao: "Manter XP, progresso, desafios e revisão coerentes entre flash cards, forca, enigmas e palavras embaralhadas exigiu centralizar regras no backend."
      },
      {
        titulo: "Autenticação persistente",
        descricao: "O aplicativo restaura sessões a partir do JWT salvo no dispositivo e limpa o estado ao receber respostas 401, evitando fluxos inconsistentes de login."
      },
      {
        titulo: "Integração segura com IA",
        descricao: "A chamada ao Gemini passa por um gateway no backend, evitando expor a chave da API no aplicativo mobile e permitindo controle centralizado das requisições."
      }
    ],
    aprendizados: [
      "Mecânicas de gamificação funcionam melhor quando compartilham uma regra de progresso simples e previsível.",
      "A autenticação mobile precisa tratar restauração, expiração e logout como partes do mesmo fluxo.",
      "Serviços de IA devem ser acessados pelo backend para proteger credenciais e permitir observabilidade."
    ],
    resultado: `A versão documentada reúne doze telas, autenticação JWT, revisão de palavras, quatro modalidades de jogo/estudo, tutor de IA, desafios e ranking. O backend está publicado no Render e o aplicativo possui configuração para builds Android via EAS.`,
    githubUrl: "https://github.com/BrenoPiropo/Readingapp",
    githubBackendUrl: "https://github.com/BrenoPiropo/Minerva-backend",
    documentationUrl: "/documentacao_resumida_minerva.html",
    documentationCompleteUrl: "/documentacao_completa_minerva.html",
    role: "Desenvolvimento full stack individual",
    status: "Backend publicado no Render",
    highlights: ["12 telas", "JWT + segurança", "IA via Gemini"]
  }
];

export function getProjeto(slug: string): Projeto | undefined {
  return projetos.find((p) => p.slug === slug);
}
