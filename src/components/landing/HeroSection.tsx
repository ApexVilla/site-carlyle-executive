import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BackgroundAnimation from "@/components/landing/BackgroundAnimation";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax suave na imagem de fundo
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* ── Background parallax image ── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          style={{ y: imageY }}
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          src="/perfil-2.jpeg"
          alt="Renato Carlyle"
          className="w-full h-[115%] object-cover object-top"
        />

        {/* Gradiente principal — maior contraste no texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/40" />

        {/* Grain de luxe — textura sutil */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ── Background animation sobreposta ── */}
      <BackgroundAnimation className="absolute inset-0 pointer-events-none z-0 opacity-35 mix-blend-multiply" />

      {/* ── Conteúdo principal ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="container relative z-10 pt-36 pb-24"
      >
        <div className="max-w-2xl">
          {/* Linha dourada animada */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 72 }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-px bg-gradient-to-r from-primary to-primary/40 mb-10"
          />

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="text-[11px] tracking-[0.45em] uppercase text-primary font-body mb-7 font-medium"
          >
            Renato Carlyle
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-[2.6rem] md:text-5xl lg:text-[3.75rem] xl:text-[4.5rem] font-light leading-[1.08] mb-9 text-foreground"
          >
            Transformando operações{" "}
            <br className="hidden md:block" />
            comerciais em{" "}
            <span className="italic text-primary relative inline-block">
              máquinas{" "}
              {/* Underline dourado animado */}
              <motion.span
                className="absolute bottom-0 left-0 h-[1px] bg-primary/40 block"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
              />
            </span>
            de crescimento sustentável
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
            className="text-base md:text-lg text-muted-foreground font-light leading-[1.75] mb-14 max-w-lg"
          >
            Mais de 30 anos liderando estratégias, pessoas e resultados no mais alto nível
          </motion.p>

          {/* CTA */}
          <motion.a
            href="#contato"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3 }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-5 text-primary px-9 py-[1.1rem] text-[11px] tracking-[0.18em] uppercase font-body font-semibold border border-primary/40 hover:border-primary hover:bg-primary/6 transition-all duration-500 rounded-sm relative overflow-hidden group"
          >
            <span className="relative z-10">Agendar conversa estratégica</span>
            <motion.span
              className="relative z-10 text-base"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
            {/* Fill hover */}
            <div className="absolute inset-0 bg-primary/8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </motion.a>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground/70 font-medium">
          Scroll
        </span>
        <div className="relative w-px h-12 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary/80 to-transparent"
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-border/30" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
