export type Project = {
  slug: string;
  title: string;
  company: string;
  year: string;
  role: string;
  category: string;
  description: string;
  techs: string[];
  badges?: string[];
  results?: string;
  image?: string;
  imageAlt?: string;
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "corporate-dashboard",
    title: "EstoqueManager - Dashboard de Estoque",
    company: "Projeto autoral",
    year: "2025",
    role: "Full Stack",
    category: "Dashboards",
    description:
      "Aplicação fullstack para controle completo de estoque, com dashboards em tempo real, autenticação e fluxo de movimentações.",
    techs: ["React", "TypeScript", ".NET 9", "SQL Server", "Tailwind"],
    badges: ["Dashboard operacional", "Autenticação JWT"],
    results:
      "Centralização do controle de produtos, redução de erros manuais em lançamentos de estoque e visão rápida de itens críticos.",
    image: "/src/assets/GerEstoque.png",
    imageAlt: "Dashboard de estoque com gráficos e cards de métricas",
    githubUrl: "https://github.com/MHbarbos4/EstoqueManager",
    demoUrl: "https://estoquemanager.netlify.app",
  },
  {
    slug: "api-go",
    title: "API-Go - API REST em Go",
    company: "Projeto de estudo",
    year: "2025",
    role: "Backend Developer",
    category: "APIs REST",
    description:
      "API simples em Go para gerenciamento de itens com operações CRUD completas, persistência em SQLite e documentação automática via Swagger.",
    techs: ["Go", "SQLite", "Swagger", "REST"],
    badges: ["CRUD completo", "Documentação automática"],
    results:
      "Base sólida para estudos de boas práticas em APIs REST, versionamento e documentação voltada para consumo por outros serviços.",
    image: "/src/assets/APIgo.png",
    imageAlt: "Documentação Swagger aberta em navegador com rotas de API",
    githubUrl: "https://github.com/MHbarbos4/API-Go",
  },
  {
    slug: "cafeteria-mvc",
    title: "Cafeteria MVC - ASP.NET Core",
    company: "Projeto acadêmico SENAI",
    year: "2024",
    role: "Full Stack .NET",
    category: "Sistemas web",
    description:
      "Aplicação ASP.NET Core MVC com SQLite e Razor Pages para gestão de produtos de cafeteria, pedidos e cadastro de clientes, com validação completa.",
    techs: ["ASP.NET Core", "C#", "SQLite", "Razor Pages"],
    badges: ["CRUD completo", "Validação de dados"],
    results:
      "Projeto utilizado para consolidar fundamentos de MVC, Entity Framework, migrations e boas práticas de organização em .NET.",
    image: "/src/assets/MVC_Cafeteria.png",
    imageAlt: "Tela de sistema web de cafeteria com listagem de produtos",
    githubUrl: "https://github.com/MHbarbos4/ProjetoCafeteriaMVC",
  },
  {
    slug: "smart-greenhouse",
    title: "Estufa Inteligente - Projeto Integrador",
    company: "SENAI Gaspar Ricardo Júnior",
    year: "2024",
    role: "Full Stack / IoT",
    category: "Produto digital",
    description:
      "Projeto integrador de estufa inteligente com monitoramento de temperatura e umidade, automação de irrigação e painel web para acompanhamento.",
    techs: ["ASP.NET Core", "C#", "React", "IoT"],
    badges: ["Projeto integrador", "Automação"],
    results:
      "Demonstração prática de integração entre hardware, backend .NET e frontend React em um cenário próximo ao real.",
    image: "/src/assets/Estufa.png",
    imageAlt: "Dashboard de monitoramento de estufa com gráficos de temperatura e umidade",
    githubUrl: "https://github.com/MHbarbos4/ProjetoIntegrador",
  },
  {
    slug: "git-automation-tools",
    title: "Automação de Fluxos Git",
    company: "Projeto pessoal",
    year: "2024",
    role: "Developer / DevOps",
    category: "Ferramentas internas",
    description:
      "Conjunto de scripts e anotações focados em padronizar comandos Git, fluxo de branches e automação de tarefas repetitivas no dia a dia.",
    techs: ["Git", "GitHub", "Shell Script"],
    badges: ["Produtividade", "Boas práticas"],
    results:
      "Apoio no ganho de velocidade em operações de versionamento, criação de repositórios e manutenção de um fluxo Git consistente.",
    image: "/src/assets/FluxoGit.png",
    imageAlt: "Terminal exibindo comandos Git automatizados",
    githubUrl: "https://github.com/MHbarbos4/ProjetosComandoGitHub",
  },
];

export const categories = Array.from(new Set(projects.map((project) => project.category)));

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
