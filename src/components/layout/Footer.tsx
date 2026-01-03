export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="container flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} <span className="font-heading font-semibold text-foreground">Matheus Henrique Barbosa</span>. Todos os direitos reservados.
        </p>
        <p className="text-[11px]">
          Construído com React, TypeScript e um tema vermelho & preto inspirado em cyberpunk.
        </p>
      </div>
    </footer>
  );
};
