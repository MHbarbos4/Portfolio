import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ContactPage = () => {
  const handleWhatsapp = () => {
    window.open(
      "https://wa.me/5515991028935?text=Ol%C3%A1%20Matheus%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
      "_blank",
    );
  };

  const handleSms = () => {
    window.location.href =
      "sms:+5515991028935?body=Ol%C3%A1%20Matheus%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.";
  };

  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl space-y-8">
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-3"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Contato</p>
            <h1 className="glow-heading font-heading text-3xl font-semibold sm:text-4xl">Vamos conversar</h1>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              Esta página reúne meus canais oficiais de contato para conversas sobre oportunidades, posições júnior,
              estágios ou projetos pontuais em desenvolvimento de software.
            </p>
          </motion.header>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="grid gap-8 md:grid-cols-2"
          >
            <div className="space-y-4 text-sm text-muted-foreground">
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
                      onClick={handleWhatsapp}
                    >
                      WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-center border-border/70 text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary hover-scale"
                      onClick={handleSms}
                    >
                      SMS
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="mt-4 space-y-2">
                <a
                  href="mailto:matheushb756@gmail.com"
                  className="flex items-center gap-2 text-sm text-primary hover:underline hover-scale"
                >
                  <Mail className="h-4 w-4" /> E-mail
                </a>
                <a
                  href="https://www.linkedin.com/in/matheus-barbosa-03314028a"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline hover-scale"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="https://github.com/MHbarbos4"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline hover-scale"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>

              <Button asChild variant="outline" className="mt-4 border-primary/60 text-xs">
                <a href="/curriculo-matheus-barbosa.docx" download>
                  Baixar currículo
                </a>
              </Button>
            </div>

          </motion.section>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
