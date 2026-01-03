import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl space-y-6">
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-3"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Sobre</p>
            <h1 className="glow-heading font-heading text-3xl font-semibold sm:text-4xl">
              Quem é Matheus Henrique Barbosa
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              Sou desenvolvedor Full Stack em início de carreira e tecnólogo em Análise e Desenvolvimento de Sistemas
              formado pelo SENAI Gaspar Ricardo Júnior. Atuo principalmente com desenvolvimento web, APIs e integrações
              de dados.
            </p>
          </motion.header>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="grid gap-8 md:grid-cols-2"
          >
            <div className="space-y-3 text-sm text-muted-foreground sm:text-base">
              <p>
                Tenho experiência construindo interfaces modernas em React e TypeScript, APIs e serviços backend em
                tecnologias como ASP.NET, FastAPI e Java, além de integrações com bancos de dados relacionais e não
                relacionais.
              </p>
              <p>
                No estágio na 2RPNET atuei em um squad ágil com Scrum, trabalhando com pipelines de dados, dashboards em
                Power BI, integrações com SQL Server, Postgres, Hive e BigQuery, além de aplicações containerizadas com
                Docker.
              </p>
              <p>
                Gosto de transformar requisitos complexos em soluções simples, bem estruturadas e fáceis de manter, sempre
                conectado com o que o time de negócio precisa.
              </p>
            </div>
            <div className="space-y-3 rounded-xl border border-border/80 bg-card/80 p-5 text-sm text-muted-foreground">
              <h2 className="font-heading text-base font-semibold text-foreground">Resumo rápido</h2>
              <ul className="space-y-1 list-disc pl-5">
                <li>Tecnólogo em Análise e Desenvolvimento de Sistemas formado pelo SENAI Gaspar Ricardo Júnior.</li>
                <li>Atuação como desenvolvedor Full Stack em início de carreira, com foco em web, APIs e dados.</li>
                <li>Experiência prática em estágio na 2RPNET (mar/2024 – dez/2025) em ambiente corporativo.</li>
                <li>Construção de projetos autorais publicados no GitHub e atendimento de 1 cliente em projeto independente.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
            className="grid gap-6 border-t border-border/60 pt-8 md:grid-cols-3"
          >
            <div className="space-y-2 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.18em] text-primary">Projetos</p>
              <p className="font-heading text-foreground">Projetos no GitHub</p>
              <p>
                Desenvolvimento de projetos práticos publicados no GitHub, incluindo APIs, dashboards, integrações de
                dados e aplicações web completas.
              </p>
            </div>
            <div className="space-y-2 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.18em] text-primary">Experiência</p>
              <p className="font-heading text-foreground">Estágio em dados e desenvolvimento</p>
              <p>
                Atuação como estagiário na 2RPNET, trabalhando com pipelines de dados, APIs, dashboards e aplicações web
                em ambiente corporativo.
              </p>
            </div>
            <div className="space-y-2 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.18em] text-primary">Clientes</p>
              <p className="font-heading text-foreground">1 cliente atendido</p>
              <p>
                Experiência atendendo um cliente corporativo em projeto independente, com foco em confiabilidade e
                entrega de valor para o negócio.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.26 }}
            className="mt-8 grid gap-6 rounded-xl border border-border/80 bg-card/80 p-5 text-sm text-muted-foreground md:grid-cols-[1.3fr,1fr]"
          >
            <div>
              <h2 className="font-heading text-base font-semibold text-foreground">Formação</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary">
                Análise e Desenvolvimento de Sistemas
              </p>
              <p className="mt-1 text-sm text-foreground">SENAI Gaspar Ricardo Júnior</p>
              <p className="text-xs text-muted-foreground">Curso Superior de Tecnologia concluído</p>
            </div>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>
                Durante a graduação, aprofundei conhecimentos em programação, modelagem de dados, engenharia de software
                e desenvolvimento web, sempre com foco em aplicar tudo em projetos reais.
              </p>
              <p>
                Essa base técnica me ajuda a conectar teoria e prática no dia a dia, estruturando melhor as soluções que
                desenvolvo para produto e negócio.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.34 }}
            className="mt-6 grid gap-6 rounded-xl border border-border/80 bg-card/80 p-5 text-sm text-muted-foreground md:grid-cols-[1.3fr,1fr]"
          >
            <div>
              <h2 className="font-heading text-base font-semibold text-foreground">Experiência Profissional</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary">Estagiário / Desenvolvedor Full Stack</p>
              <p className="mt-1 text-sm text-foreground">2RPNET · mar/2024 – dez/2025</p>
              <ul className="mt-2 list-disc space-y-1 text-xs pl-4 text-muted-foreground">
                <li>Atuação em squad ágil com metodologia Scrum.</li>
                <li>Desenvolvimento de APIs e serviços com Python (FastAPI), C#, Java e SQL.</li>
                <li>Trabalho com bancos de dados SQL Server, Postgres, Hive e BigQuery.</li>
                <li>Desenvolvimento de sistemas e aplicações web usando ASP.NET, React e Docker.</li>
              </ul>
            </div>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>
                Apoiei a construção de pipelines de dados e dashboards em Power BI, contribuindo para melhorar a
                visibilidade de indicadores operacionais e de negócio.
              </p>
              <p>
                Também tive contato com gestão de acessos via Active Directory e com o uso de ferramentas de colaboração
                como GitHub e Jira no dia a dia do time.
              </p>
            </div>
          </motion.section>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
