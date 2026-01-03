import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowDownCircle, ArrowRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Particles } from "@tsparticles/react";
import matheusAvatar from "@/assets/matheus.jpeg";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const heroAvatar = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  const titles = [
    "Full Stack Developer em início de carreira",
    "Tecnólogo em ADS formado pelo SENAI Gaspar Ricardo Júnior",
    "Focado em dados, APIs e aplicações web"
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [titles.length]);

  const currentTitle = titles[currentTitleIndex];

  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      {/* Fundo com partículas e gradiente */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)_/_0.25),_transparent_60%)] opacity-70"
        aria-hidden="true"
      />
      <Particles
        id="hero-particles"
        className="pointer-events-none absolute inset-0 hidden md:block"
        options={
          {
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            particles: {
              color: { value: "#ff0000" },
              number: { value: 40, density: { enable: true, value: 40 } },
              size: { value: { min: 1, max: 3 } },
              move: { enable: true, speed: 1.2 },
              opacity: { value: 0.35 },
              links: { enable: false },
            },
          } as any
        }
      />

      {/* HERO */}
      <section className="relative border-b border-border/60 bg-gradient-to-b from-background via-background-soft/20 to-background-soft px-4 pb-20 pt-24 sm:px-6 md:pt-28 lg:px-8">
        <div className="container mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start">
          <motion.div
            className="flex-1 space-y-6"
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary"
              variants={heroItem}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_15px_hsl(var(--glow-red))]" />
              Disponível para novos desafios
            </motion.p>
            <motion.div className="space-y-3" variants={heroItem}>
              <h1 className="glow-heading font-heading text-4xl font-semibold sm:text-5xl lg:text-6xl">
                Matheus Henrique Barbosa
              </h1>
              <motion.p
                key={currentTitle}
                className="text-lg font-medium text-primary sm:text-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {currentTitle}
                <span
                  className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-primary align-middle"
                  aria-hidden
                />
              </motion.p>
              <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
                Desenvolvedor Full Stack em início de carreira e tecnólogo em ADS formado pelo SENAI Gaspar Ricardo
                Júnior, com foco em construir APIs, aplicações web e integrações de dados que gerem resultado real para o
                negócio.
              </p>
            </motion.div>
            <motion.div className="flex flex-wrap items-center gap-4 pt-2" variants={heroItem}>
              <Button
                size="lg"
                className="group glow-button shadow-[0_0_30px_hsl(var(--glow-red))]"
                onClick={() => {
                  const el = document.getElementById("projetos");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Ver projetos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glow-button border-primary/60 bg-background/60 text-foreground hover:bg-primary/10 hover:text-primary"
                onClick={() => {
                  const el = document.getElementById("contato");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Contato
              </Button>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="hidden sm:inline">Ou conecte-se comigo</span>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/MHbarbos4"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub de Matheus Henrique Barbosa"
                    className="rounded-full border border-border/70 bg-background/60 p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/matheus-barbosa-03314028a"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn de Matheus Henrique Barbosa"
                    className="rounded-full border border-border/70 bg-background/60 p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:matheushb756@gmail.com"
                    aria-label="Enviar e-mail para Matheus Henrique Barbosa"
                    className="rounded-full border border-border/70 bg-background/60 p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-1 justify-center md:mt-0"
            variants={heroAvatar}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-[conic-gradient(from_180deg,_hsl(var(--primary)),_hsl(var(--accent)),_hsl(var(--primary)))] opacity-70 blur-md" />
              <div className="relative h-44 w-44 overflow-hidden rounded-full border border-primary/70 bg-card shadow-[0_0_35px_hsl(var(--glow-red))] sm:h-56 sm:w-56">
                <img
                  src={matheusAvatar}
                  alt="Foto de perfil de Matheus Henrique Barbosa"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex items-center justify-center text-xs text-muted-foreground">
          <ArrowDownCircle className="mr-2 h-4 w-4 animate-bounce" />
          Role para conhecer o portfólio
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="border-b border-border/60 bg-background px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="container mx-auto max-w-5xl"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="glow-heading font-heading text-2xl font-semibold sm:text-3xl">Sobre</h2>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Quem é Matheus Henrique Barbosa
            </span>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-sm text-muted-foreground sm:text-base">
              Sou desenvolvedor Full Stack em início de carreira e tecnólogo em Análise e Desenvolvimento de Sistemas
              formado pelo SENAI Gaspar Ricardo Júnior. Gosto de conectar front-end, back-end e dados para entregar
              soluções completas.
            </p>
            <div className="grid gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-between rounded-lg border border-primary/30 bg-primary/5 px-4 py-3">
                <span>Projetos práticos publicados no GitHub</span>
                <span className="font-heading text-primary">GitHub</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-primary/30 bg-primary/5 px-4 py-3">
                <span>Experiência em estágio com dados e desenvolvimento</span>
                <span className="font-heading text-primary">2RPNET</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-primary/30 bg-primary/5 px-4 py-3">
                <span>1 cliente atendido em projeto independente</span>
                <span className="font-heading text-primary">1</span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 rounded-xl border border-border/80 bg-card/80 p-5 text-sm text-muted-foreground md:grid-cols-[1.2fr,1fr]">
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground">Formação</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary">
                Análise e Desenvolvimento de Sistemas
              </p>
              <p className="mt-1 text-sm text-foreground">SENAI Gaspar Ricardo Júnior</p>
              <p className="text-xs text-muted-foreground">Curso Superior de Tecnologia concluído</p>
            </div>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>
                Foco em fundamentos sólidos de programação, engenharia de software, bancos de dados, desenvolvimento web
                e computação em nuvem.
              </p>
              <p>
                Projetos integradores aproximam o curso da realidade da indústria, com ênfase em boas práticas, trabalho
                em equipe e visão de produto.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 rounded-xl border border-border/80 bg-card/80 p-5 text-sm text-muted-foreground md:grid-cols-[1.2fr,1fr]">
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground">Experiência Profissional</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary">Estagiário / Desenvolvedor Full Stack</p>
              <p className="mt-1 text-sm text-foreground">2RPNET · mar/2024 – dez/2025</p>
              <ul className="mt-2 list-disc space-y-1 text-xs pl-4 text-muted-foreground">
                <li>Atuação em squad ágil com metodologia Scrum.</li>
                <li>Desenvolvimento de APIs e serviços utilizando Python (FastAPI), C#, Java e SQL.</li>
                <li>Integrações e consultas em bancos de dados como SQL Server, Postgres, Hive e BigQuery.</li>
                <li>Criação de aplicações web com ASP.NET, React e Docker.</li>
              </ul>
            </div>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>
                Apoiei a construção de pipelines de dados e dashboards em Power BI, ajudando times de negócio a tomarem
                decisões com base em indicadores atualizados.
              </p>
              <p>
                Também participei de atividades de gestão de acessos com Active Directory (AD) e uso de ferramentas como
                GitHub e Jira no dia a dia do time.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJETOS */}
      <section
        id="projetos"
        className="border-b border-border/60 bg-[radial-gradient(circle_at_top,_hsl(var(--surface-dark)),_hsl(var(--background)))] px-4 py-16 sm:px-6 lg:px-8"
      >
        <motion.div
          className="container mx-auto max-w-6xl"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-6 flex items-center justify_between gap-4">
            <h2 className="glow-heading font-heading text-2xl font-semibold sm:text-3xl">Projetos em destaque</h2>
            <Button asChild variant="outline" size="sm" className="border-primary/60 text-xs">
              <a href="/projetos">Ver todos</a>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Corporate Dashboard",
                description:
                  "Painel corporativo em tempo real para acompanhamento de indicadores de negócio e performance de times.",
              },
              {
                title: "E-commerce B2B",
                description:
                  "Plataforma de vendas B2B com foco em automação de catálogo e integração com ERP.",
              },
              {
                title: "Internal Tools Suite",
                description:
                  "Conjunto de ferramentas internas para squads de produto, com foco em produtividade.",
              },
            ].map((project) => (
              <Card
                key={project.title}
                className="group border border-border/80 bg-card/80 shadow-[0_0_0_1px_rgba(0,0,0,0.6)] transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:border-primary/80 hover:shadow-[0_0_35px_hsl(var(--glow-red))]"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-base">
                    <span>{project.title}</span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-primary">Case</span>
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-xs">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-[11px] text-primary">React</span>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-[11px] text-primary">TypeScript</span>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-[11px] text-primary">Node.js</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-8 border-primary/60 text-xs">
                      GitHub
                    </Button>
                    <Button size="sm" className="h-8 text-xs">
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="border-b border-border/60 bg-background px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="container mx-auto max-w-4xl"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="glow-heading mb-8 font-heading text-2xl font-semibold sm:text-3xl">Experiência</h2>
          <div className="relative border-l border-primary/60 pl-6">
            <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--glow-red))]" />
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-primary">mar/2024 – dez/2024</p>
                <h3 className="font-heading text-base font-semibold">Estagiário / Desenvolvedor Full Stack · 2RPNET</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Atuação em squad ágil com Scrum, desenvolvendo APIs, integrações de dados e aplicações web em um
                  ambiente focado em indicadores e operações de negócio.
                </p>
                <ul className="mt-3 list-disc space-y-1 text-xs pl-4 text-muted-foreground">
                  <li>Desenvolvimento de serviços e APIs com Python (FastAPI), C# e Java.</li>
                  <li>Consultas e integrações com bancos de dados SQL Server, Postgres, Hive e BigQuery.</li>
                  <li>Criação de sistemas web usando ASP.NET, React e Docker.</li>
                  <li>Suporte a pipelines de dados e dashboards em Power BI.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* HABILIDADES */}
      <section
        id="habilidades"
        className="border-b border-border/60 bg-[radial-gradient(circle_at_top,_hsl(var(--surface-dark)),_hsl(var(--background)))] px-4 py-16 sm:px-6 lg:px-8"
      >
        <motion.div
          className="container mx-auto max-w-5xl"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="glow-heading mb-8 font-heading text-2xl font-semibold sm:text-3xl">Habilidades</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-4 rounded-xl border border-border/80 bg-card/80 p-4">
              <h3 className="font-heading text-sm font-semibold">Frontend</h3>
              <div className="space-y-3 text-xs text-muted-foreground">
                <div>
                  <div className="flex justify-between">
                    <span>React / TypeScript</span>
                    <span>Forte</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-muted">
                    <div className="h-1.5 w-[88%] rounded-full bg-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>HTML, CSS, Tailwind</span>
                    <span>Avançado</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-muted">
                    <div className="h-1.5 w-[82%] rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 rounded-xl border border-border/80 bg-card/80 p-4">
              <h3 className="font-heading text-sm font-semibold">Backend &amp; APIs</h3>
              <div className="space-y-3 text-xs text-muted-foreground">
                <div>
                  <div className="flex justify-between">
                    <span>Python (FastAPI) / C# (ASP.NET)</span>
                    <span>Intermediário</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-muted">
                    <div className="h-1.5 w-[80%] rounded-full bg-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>Java / Spring Boot</span>
                    <span>Intermediário</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-muted">
                    <div className="h-1.5 w-[70%] rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 rounded-xl border border-border/80 bg-card/80 p-4">
              <h3 className="font-heading text-sm font-semibold">Dados &amp; Ferramentas</h3>
              <div className="space-y-3 text-xs text-muted-foreground">
                <div>
                  <div className="flex justify-between">
                    <span>SQL (Postgres, SQL Server, BigQuery, Hive)</span>
                    <span>Intermediário</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-muted">
                    <div className="h-1.5 w-[80%] rounded-full bg-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>Power BI, Docker, Git/GitHub</span>
                    <span>Intermediário</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-muted">
                    <div className="h-1.5 w-[78%] rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CONTATO (SEM FORMULÁRIO) */}
      <section id="contato" className="bg-background px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="container mx-auto max-w-4xl"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="glow-heading font-heading text-2xl font-semibold sm:text-3xl">Contato</h2>
            <p className="max-w-sm text-xs text-muted-foreground sm:text-sm">
              Canais oficiais para contato profissional sobre oportunidades, posições júnior, estágios e projetos em
              desenvolvimento de software.
            </p>
          </div>
          <div className="max-w-2xl space-y-4 text-sm text-muted-foreground">
            <p>
              Se você identifica aderência entre meu perfil e as necessidades do seu time ou projeto, fique à vontade
              para utilizar um dos canais abaixo. Costumo responder em até 1 dia útil.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center gap-2 text-sm text-primary hover:underline cursor-pointer hover-scale">
                  <MessageCircle className="h-4 w-4" /> Telefone
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-sm">
                <DialogHeader>
                  <DialogTitle>Como você prefere falar comigo?</DialogTitle>
                  <DialogDescription>
                    Escolha o canal que fizer mais sentido para você. Ambos são direcionados para o meu número pessoal.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <Button
                    variant="outline"
                    className="w-full justify-center border-border/70 text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary hover-scale"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5515991028935?text=Ol%C3%A1%20Matheus%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
                        "_blank",
                      )
                    }
                  >
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-center border-border/70 text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary hover-scale"
                    onClick={() =>
                      (window.location.href =
                        "sms:+5515991028935?body=Ol%C3%A1%20Matheus%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.")
                    }
                  >
                    SMS
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <div className="mt-4 space-y-2">
              <a
                href="mailto:matheushb756@gmail.com"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Mail className="h-4 w-4" /> E-mail
              </a>
              <a
                href="https://www.linkedin.com/in/matheus-barbosa-03314028a"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/MHbarbos4"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
            <Button asChild variant="outline" className="mt-2 border-primary/60 text-xs glow-button">
              <a href="/curriculo-matheus-barbosa.docx" download>
                Baixar currículo
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
