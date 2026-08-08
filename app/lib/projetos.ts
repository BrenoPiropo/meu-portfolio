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
    stack: ["React Native", "Expo", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Socket.io", "OpenLibrary API"],
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
    tag: "Mobile",
    tagColor: "text-blue-400",
    tagBg: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    gradientFrom: "from-blue-500/10",
    videoUrl: "https://www.youtube.com/embed/T4RTzhH0MHw",
    imageUrl: "/logo_minerva.jpg",
    overview: "App educacional que utiliza o algoritmo de Repetição Espaçada (SRS) para maximizar a retenção de vocabulário. Inspirado no Anki, mas com UX moderna, gamificação contextual e backend próprio para sincronização entre dispositivos.",
    problema: `Estudos mostram que 90% do vocabulário aprendido em métodos tradicionais é esquecido em 30 dias. Flashcards físicos são ineficientes e apps existentes como Anki têm UX datada, desmotivando usuários jovens. A falta de um backend próprio também impede análises de progresso detalhadas.`,
    solucao: `Desenvolvi um sistema SRS completo com algoritmo SM-2 otimizado, interface de flashcards fluida com gestos (swipe left/right/up), e um backend que analisa padrões de erro para identificar palavras de maior dificuldade. A gamificação inclui streaks diários, decks temáticos e competições semanais.`,
    arquitetura: [
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
      },
      {
        titulo: "Notificações Contextuais",
        descricao: "Sistema de notificações push local com horários otimizados pelo histórico de uso. Se o usuário sempre revisa às 19h, a notificação é agendada para 18:45."
      }
    ],
    stack: ["React Native", "NestJS", "TypeScript", "PostgreSQL", "SM-2 Algorithm", "Expo Notifications", "Reanimated"],
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
  },
  {
    slug: "astreu",
    nome: "Astreu",
    tag: "Science",
    tagColor: "text-purple-400",
    tagBg: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    gradientFrom: "from-purple-500/10",
    videoUrl: "https://www.youtube.com/embed/99UX5aCpF8Q",
    imageUrl: "/logo_astreu.jpg",
    overview: "Wiki astronômica mobile que consolida dados de missões espaciais da NASA e ESA em uma interface imersiva. O app combina tratamento de dados científicos em formatos especializados com recursos nativos do dispositivo para uma experiência de exploração única.",
    problema: `Dados astronômicos de missões espaciais estão dispersos entre dezenas de portais (NASA APOD, ESA Hubble, JPL, etc.), cada um com interfaces diferentes e formatos incompatíveis. O público geral não consegue acessar imagens de alta resolução ou entender metadados técnicos. Apps existentes são pesados e não funcionam offline.`,
    solucao: `Unifiquei múltiplas APIs espaciais em uma única interface coesa. O app traduz metadados técnicos (coordenadas celestes, filtros espectrais, instrumentos) em linguagem acessível. Persistência local permite explorar o universo mesmo sem internet, e recursos nativos como câmera e sensores de movimento criam experiências imersivas (ex: apontar o celular para o céu e identificar constelações).`,
    arquitetura: [
      {
        titulo: "Gateway de APIs Espaciais",
        descricao: "Camada de abstração que normaliza dados da NASA APOD, ESA Hubble Archive e JPL Small-Body Database. Cada API tem seu próprio adapter que converte responses em um schema unificado."
      },
      {
        titulo: "Cache Local com SQLite",
        descricao: "Banco SQLite local armazena imagens em cache (comprimidas) e metadados astronômicos. O usuário pode navegar por 500+ objetos celestes offline. Sistema de LRU (Least Recently Used) gerencia espaço automaticamente."
      },
      {
        titulo: "Processamento de Imagens",
        descricao: "Pipeline de processamento que converte imagens FITS (formato astronômico padrão) para JPEG otimizado para mobile. Inclui ajuste de histograma, redução de ruído e compressão progressiva."
      },
      {
        titulo: "Integração com Hardware Nativo",
        descricao: "Giroscópio e acelerômetro para modo 'Sky Map': aponte o celular para o céu e veja constelações sobrepostas via AR. Câmera para capturar fotos do céu noturno e comparar com imagens de telescópios profissionais."
      }
    ],
    stack: ["React Native", "NASA APOD API", "ESA Hubble API", "SQLite", "TypeScript", "Expo Sensors", "Expo Camera", "Sharp (image processing)"],
    desafios: [
      {
        titulo: "Rate Limiting das APIs",
        descricao: "A NASA APOD limita a 1000 requests/dia. Implementei um sistema de cache agressivo com prefetch inteligente: o app baixa dados dos próximos 7 dias em background, e imagens são carregadas em resolução progressiva (thumbnail → HD)."
      },
      {
        titulo: "Tratamento de Dados Astronômicos",
        descricao: "Dados da ESA vêm em formato FITS com headers complexos (WCS coordinates, filtros espectrais). Desenvolvi um parser que extrai coordenadas celestes (RA/DEC), data de observação e instrumento utilizado, apresentando tudo de forma acessível."
      },
      {
        titulo: "Performance de Imagens de Alta Resolução",
        descricao: "Imagens do Hubble chegam a 50MB+. Implementei carregamento progressivo: thumbnail borrado instantâneo (200ms), preview em resolução média (2s), e download completo sob demanda. O cache local usa WebP com qualidade 85 para reduzir tamanho em 60%."
      }
    ],
    aprendizados: [
      "Dados científicos precisam de 'camadas de abstração': o usuário não precisa entender RA/DEC, mas o app precisa saber para calcular posições.",
      "Prefetch agressivo é essencial quando você depende de APIs de terceiros com limitações.",
      "Recursos nativos do dispositivo (sensores, câmera) transformam um app de consumo de conteúdo em uma experiência de descoberta."
    ],
    resultado: `O app cataloga 500+ objetos celestes com dados oficiais da NASA/ESA. O modo Sky Map identifica corretamente 88 constelações com precisão de ±2 graus. O cache local permite navegação completa offline, e o tempo médio de carregamento de imagens caiu de 8s para 1.2s com o pipeline de processamento.`,
    githubUrl: "https://github.com/BrenoPiropo"
  }
];

export function getProjeto(slug: string): Projeto | undefined {
  return projetos.find((p) => p.slug === slug);
}