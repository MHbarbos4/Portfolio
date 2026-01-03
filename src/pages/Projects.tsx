import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories as projectCategories, projects as allProjects } from "@/data/projects";

type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  archived: boolean;
  fork: boolean;
};

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");
  const [activeTab, setActiveTab] = useState("cases");

  const { data: githubRepos, isLoading: isLoadingRepos, isError: isErrorRepos } = useQuery<GithubRepo[]>({
    queryKey: ["github-repos"],
    queryFn: async () => {
      const res = await fetch("https://api.github.com/users/MHbarbos4/repos?sort=updated");
      if (!res.ok) throw new Error("Erro ao carregar repositórios do GitHub");
      return res.json();
    },
  });

  const projects = useMemo(
    () =>
      activeCategory === "all"
        ? allProjects
        : allProjects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  const filteredGithubRepos = useMemo(
    () =>
      (githubRepos || []).filter((repo) => !repo.fork),
    [githubRepos],
  );

  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl space-y-8">
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Projetos</p>
            <h1 className="glow-heading font-heading text-3xl font-semibold sm:text-4xl">Projetos em que atuei</h1>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              Uma visão um pouco mais detalhada dos tipos de problemas que gosto de resolver: dados, produto digital e
              operações de negócio.
            </p>

            {activeTab === "cases" && (
              <div className="flex flex-wrap gap-2 pt-2">
                <Button
                  size="sm"
                  variant={activeCategory === "all" ? "default" : "outline"}
                  className="h-8 px-3 text-[11px]"
                  onClick={() => setActiveCategory("all")}
                >
                  Todos
                </Button>
                {projectCategories.map((category) => (
                  <Button
                    key={category}
                    size="sm"
                    variant={activeCategory === category ? "default" : "outline"}
                    className="h-8 px-3 text-[11px]"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            )}
          </motion.header>

          <Tabs defaultValue="cases" className="mt-4" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="cases">Cases selecionados</TabsTrigger>
              <TabsTrigger value="github">Repositórios GitHub</TabsTrigger>
            </TabsList>

            <TabsContent value="cases" className="mt-4">
              <motion.section
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                className="relative"
              >
                <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {projects.map((project) => (
                      <CarouselItem key={project.slug} className="sm:basis-1/2 lg:basis-1/3">
                        <Link
                          to={`/projetos/${project.slug}`}
                          className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                          <Card className="h-full overflow-hidden border border-border/80 bg-card/80 shadow-[0_0_0_1px_rgba(0,0,0,0.6)] transition-transform transition-shadow duration-200 group-hover:-translate-y-1 group-hover:border-primary/80 group-hover:shadow-[0_0_35px_hsl(var(--glow-red))]">
                            {project.image && (
                              <div className="border-b border-border/60 bg-muted">
                                <div className="aspect-video">
                                  <img
                                    src={project.image}
                                    alt={project.imageAlt || project.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                </div>
                              </div>
                            )}
                            <CardHeader className="space-y-2">
                              <div className="flex items-center justify-between gap-2">
                                <CardTitle className="text-base">{project.title}</CardTitle>
                                <Badge
                                  variant="outline"
                                  className="border-primary/60 text-[10px] uppercase tracking-[0.2em] text-primary"
                                >
                                  {project.category}
                                </Badge>
                              </div>

                              <p className="text-[11px] text-muted-foreground">
                                {project.company} • {project.year} • {project.role}
                              </p>

                              <CardDescription className="text-xs text-muted-foreground">
                                {project.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col justify-between space-y-4 text-xs">
                              <div className="flex flex-wrap gap-2">
                                {project.techs.map((tech) => (
                                  <span
                                    key={tech}
                                    className="rounded-full bg-primary/10 px-2 py-1 text-[11px] text-primary"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>

                              {project.badges && project.badges.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {project.badges.map((badge) => (
                                    <Badge
                                      key={badge}
                                      variant="secondary"
                                      className="text-[10px] uppercase tracking-[0.15em]"
                                    >
                                      {badge}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        </Link>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="border-primary/60 text-primary" />
                  <CarouselNext className="border-primary/60 text-primary" />
                </Carousel>
              </motion.section>
            </TabsContent>

            <TabsContent value="github" className="mt-4">
              <motion.section
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              >
                {isLoadingRepos && (
                  <p className="text-sm text-muted-foreground">Carregando repositórios do GitHub…</p>
                )}
                {isErrorRepos && (
                  <p className="text-sm text-destructive">
                    Não foi possível carregar os repositórios agora. Tente novamente mais tarde.
                  </p>
                )}
                {!isLoadingRepos && !isErrorRepos && (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredGithubRepos.map((repo) => (
                      <Card
                        key={repo.id}
                        className="flex h-full flex-col border border-border/80 bg-card/80 transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:border-primary/80 hover:shadow-[0_0_35px_hsl(var(--glow-red))]"
                      >
                        <CardHeader className="space-y-1.5">
                          <CardTitle className="truncate text-sm font-semibold">{repo.name}</CardTitle>
                          <CardDescription className="line-clamp-2 text-xs text-muted-foreground">
                            {repo.description || "Repositório sem descrição."}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto space-y-3 text-xs">
                          <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                            {repo.language && (
                              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                                {repo.language}
                              </span>
                            )}
                            <span>⭐ {repo.stargazers_count}</span>
                            <span>🍴 {repo.forks_count}</span>
                            {repo.archived && (
                              <Badge variant="outline" className="border-border/70 text-[10px] uppercase tracking-[0.15em]">
                                Arquivado
                              </Badge>
                            )}
                          </div>
                          <Button asChild size="sm" variant="outline" className="h-8 w-full border-primary/60 text-xs">
                            <a href={repo.html_url} target="_blank" rel="noreferrer">
                              Ver no GitHub
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </motion.section>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
