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
    overview: "Plataforma de inteligência astronômica e wiki mobile que consolida dados de missões espaciais da NASA e ESA. Integra um sistema RAG (Retrieval-Augmented Generation) para busca semântica e síntese de artigos científicos, combinado com processamento de imagens e recursos nativos do dispositivo.",
    problema: `Dados astronômicos e publicações científicas de missões espaciais estão dispersos em portais complexos (NASA APOD, ESA Hubble, JPL), com metadados técnicos difíceis de consultar e sem busca semântica em artigos. Além disso, a visualização de imagens de alta resolução em dispositivos móveis exige pipelines otimizados e suporte a funcionamento offline.`,
    solucao: `Desenvolvi uma solução completa que unifica APIs espaciais em uma interface imersiva. Implementei um motor de RAG (Retrieval-Augmented Generation) alimentado por artigos científicos, permitindo que os usuários façam perguntas em linguagem natural e recebam respostas precisas com citações das fontes. O app inclui persistência offline, tratamento de dados astronômicos (coordenadas RA/DEC) e recursos nativos como câmera para diário de bordo e sensores de movimento.`,
    arquitetura: [
      {
        titulo: "Sistema RAG & Inteligência Artificial",
        descricao: "Arquitetura RAG (Retrieval-Augmented Generation) integrada com vetorização de artigos científicos astronômicos. Permite busca por similaridade semântica e síntese de conhecimento em linguagem natural com citações diretas das pesquisas."
      },
      {
        titulo: "Gateway de APIs Espaciais & Adapters",
        descricao: "Camada de abstração que normaliza dados da NASA APOD, ESA Hubble Archive e JPL Small-Body Database. Converte respostas heterogêneas em schemas TypeScript unificados de alta performance."
      },
      {
        titulo: "Cache Local & Persistência com SQLite",
        descricao: "Banco SQLite local gerenciado com estratégia LRU para armazenar metadados de 500+ objetos celestes e artigos científicos, permitindo exploração completa mesmo sem conexão com a internet."
      },
      {
        titulo: "Pipeline de Processamento de Imagens & Hardware Nativo",
        descricao: "Processamento de imagens FITS e astronomia de alta resolução para JPEG/WebP progressivo. Integração com giroscópio, acelerômetro (modo Sky Map) e câmera nativa para registro de observações no diário de bordo."
      }
    ],
    stack: ["React Native", "TypeScript", "Python", "RAG / Embeddings", "NASA APIs", "ESA Hubble API", "SQLite", "Expo Sensors", "Expo Camera"],
    desafios: [
      {
        titulo: "Implementação e Precisão do RAG com Artigos Científicos",
        descricao: "Garantir a relevância semântica das respostas de IA sem alucinações técnicas. Implementei chunking adaptativo dos artigos científicos, busca híbrida por vetores + palavras-chave e limiar de corte de relevância rigoroso."
      },
      {
        titulo: "Rate Limiting e Cache Agressivo de APIs",
        descricao: "Superar restrições de requisições de APIs da NASA implementando prefetch inteligente em background, compressão WebP progressiva e cache SQLite de múltiplas camadas."
      },
      {
        titulo: "Processamento de Dados Astronômicos em Dispositivos Móveis",
        descricao: "Tratamento de formatos científicos FITS e parsing de coordenadas celestes (RA/DEC) direto no cliente sem comprometer a taxa de quadros (60fps) das animações."
      }
    ],
    aprendizados: [
      "Sistemas de RAG enriquecem drasticamente a experiência do usuário ao transformar documentos técnicos estáticos em conhecimento conversacional.",
      "A combinação de IA moderna com arquitetura offline-first cria um produto robusto e independente de instabilidades de rede.",
      "A integração de hardware nativo (sensores e câmera) eleva um app de consulta de dados a uma ferramenta interativa completa."
    ],
    resultado: `O Astreu se consolidou como o projeto mais completo do portfólio, integrando RAG com artigos científicos, suporte offline a 500+ objetos celestes e precisão de ±2 graus no mapeamento de constelações. O tempo de resposta para buscas semânticas é inferior a 1.5s com consumo otimizado de memória.`,
    githubUrl: "https://github.com/BrenoPiropo"
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
    resultado: `O app atingiu 200+ usuários beta em 3 meses, com taxa de retenção de 68% na primeira semana — acima da média da categoria (35%). O sistema de clubes gerou 450+ discussões ativas, provando que a dimensão social é o diferencial competitivo.`,
    githubUrl: "https://github.com/BrenoPiropo"
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
    overview: "App educacional em produção que utiliza o algoritmo de Repetição Espaçada (SRS) para maximizar a retenção de vocabulário. Containerizado com Docker, possui backend próprio em NestJS para sincronização cross-device e análises de progresso.",
    problema: `Estudos mostram que 90% do vocabulário aprendido em métodos tradicionais é esquecido em 30 dias. Flashcards físicos são ineficientes e apps existentes como Anki têm UX datada, desmotivando usuários jovens. A falta de um backend próprio também impede análises de progresso detalhadas.`,
    solucao: `Desenvolvi um sistema SRS completo com algoritmo SM-2 otimizado, interface de flashcards fluida com gestos (swipe left/right/up), e um backend em NestJS containerizado com Docker que analisa padrões de erro para identificar palavras de maior dificuldade. A gamificação inclui streaks diários, decks temáticos e competições semanais.`,
    arquitetura: [
      {
        titulo: "Implantado em Produção com Docker",
        descricao: "Arquitetura backend containerizada com Docker, garantindo ambientes consistentes entre desenvolvimento, staging e produção com integração contínua."
      },
      {
        titulo: "Algoritmo SM-2 Otimizado",
        descricao: "Implementação própria do algoritmo SuperMemo-2 com ajustes dinâmicos de intervalo baseados em taxa de acerto histórica. Palavras com erro recorrente têm intervalo reduzido automaticamente."
      },
      {
        titulo: "Sessões de Revisão Inteligentes",
        descricao: "O backend calcula diariamente o 'deck de revisão' ótimo para cada usuário, considerando palavras vencidas, novas palavras do dia e palavras de dificuldade elevada. Limite de 20 novas palavras/dia para evitar sobrecarga cognitiva."
      },
      {
        titulo: "Sincronização Cross-Device",
        descricao: "API RESTful que sincroniza estado de revisão entre múltiplos dispositivos. O usuário pode revisar no celular pela manhã e no tablet à noite sem perder progresso."
      }
    ],
    stack: ["React Native", "NestJS", "Docker", "TypeScript", "PostgreSQL", "SM-2 Algorithm", "Expo Notifications", "Reanimated"],
    desafios: [
      {
        titulo: "Implementação do Algoritmo SM-2",
        descricao: "O algoritmo original SuperMemo-2 tem nuances matemáticas sutis. Tive que estudar papers acadêmicos sobre spaced repetition e fazer ajustes para lidar com edge cases: usuários que param por semanas, palavras novas vs. revisão, e o efeito de 'ease hell'."
      },
      {
        titulo: "UX de Flashcards Fluida",
        descricao: "Criar gestos naturais (swipe) com animações de 60fps usando Reanimated. Cada direção de swipe tem feedback visual e háptico diferente: direita (acerto) vibra suave, esquerda (erro) vibra mais forte, cima (muito fácil) tem animação de celebração."
      },
      {
        titulo: "Persistência Local vs. Cloud",
        descricao: "Decidir o que fica local e o que vai para a cloud foi crucial. O estado de revisão (intervalos, datas) é sincronizado, mas os assets de áudio das pronúncias ficam em cache local para funcionamento offline."
      }
    ],
    aprendizados: [
      "Algoritmos de aprendizado precisam de 'humanização': um intervalo matematicamente ótimo pode ser psicologicamente desmotivador.",
      "Animações não são decoração — em apps de flashcards, elas reforçam o feedback de acerto/erro e melhoram a retenção.",
      "Notificações push são uma faca de dois gumes: agendadas corretamente aumentam retenção em 40%; genéricas causam uninstall."
    ],
    resultado: `Usuários beta reportaram aumento de 3x na retenção de vocabulário comparado a métodos tradicionais. A taxa de conclusão diária de sessões atingiu 82%, e o streak médio é de 23 dias — indicando hábito real formado.`,
    githubUrl: "https://github.com/BrenoPiropo"
  }
];

export function getProjeto(slug: string): Projeto | undefined {
  return projetos.find((p) => p.slug === slug);
}