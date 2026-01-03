import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjectBySlug } from "@/data/projects";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <main className="bg-background text-foreground">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Projeto não encontrado</p>
            <h1 className="glow-heading font-heading text-3xl font-semibold sm:text-4xl">Nada por aqui ainda</h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              Não encontrei este projeto. Talvez o link esteja incorreto ou o case ainda esteja em construção.
            </p>
            <Button asChild variant="outline" className="border-primary/60">
              <Link to="/projetos">Voltar para projetos</Link>
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl space-y-8">
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Projeto</p>
            <h1 className="glow-heading font-heading text-3xl font-semibold sm:text-4xl">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Badge
                variant="outline"
                className="border-primary/60 text-[10px] uppercase tracking-[0.2em] text-primary"
              >
                {project.category}
              </Badge>
              {project.badges?.map((badge) => (
                <Badge key={badge} variant="secondary" className="text-[10px] uppercase tracking-[0.15em]">
                  {badge}
                </Badge>
              ))}
            </div>

            <div className="grid gap-3 text-xs text-muted-foreground sm:grid-cols-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">Empresa</p>
                <p className="mt-1 text-sm text-foreground">{project.company}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">Ano</p>
                <p className="mt-1 text-sm text-foreground">{project.year}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">Papel</p>
                <p className="mt-1 text-sm text-foreground">{project.role}</p>
              </div>
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="border border-border/80 bg-card/80 shadow-[0_0_0_1px_rgba(0,0,0,0.6)]">
              <CardHeader>
                <CardTitle className="text-base">Visão geral</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Principais tecnologias
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-[11px] text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.results && (
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Principais resultados
                    </p>
                    <p className="text-sm text-foreground">{project.results}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-end">
            <Button asChild variant="outline" size="sm" className="border-primary/60 text-xs">
              <Link to="/projetos">Voltar para lista de projetos</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;
