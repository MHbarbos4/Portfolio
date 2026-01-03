import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground scanlines">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
