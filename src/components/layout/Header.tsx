import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Projetos", to: "/projetos" },
  { label: "Contato", to: "/contato" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // mantém o HTML sempre em modo escuro
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary shadow-[0_0_20px_hsl(var(--glow-red))]">
            <span className="font-heading text-lg font-semibold">MB</span>
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-heading text-sm font-semibold tracking-wide">Matheus Henrique</span>
            <span className="text-xs text-muted-foreground">Full Stack Developer</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-primary"
            aria-label="Abrir menu de navegação"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border/60 bg-background/95 md:hidden">
          <div className="container flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                activeClassName="text-primary bg-primary/5"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
