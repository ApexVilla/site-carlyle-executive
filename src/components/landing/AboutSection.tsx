import { motion } from "framer-motion";

const AboutSection = () => (
  <section className="section-padding" id="sobre">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-28 items-center">
        {/* ── Imagem com efeito 3D premium ── */}
        <motion.div
          initial={{ opacity: 0, x: -32, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, type: "spring", stiffness: 55, damping: 18 }}
        >
          <div className="relative group">
            {/* Sombra deslocada — efeito de profundidade */}
            <div className="absolute inset-0 bg-primary/25 rounded-[2rem] -z-10 translate-x-5 translate-y-5 transition-transform duration-700 group-hover:translate-x-7 group-hover:translate-y-7" />
            <div className="absolute inset-0 bg-primary/8 rounded-[2rem] -z-20 blur-3xl translate-x-5 translate-y-5" />

            {/* Foto */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 shadow-[0_24px_60px_rgba(0,0,0,0.1)]">
              <img
                src="/perfil-5.jpeg"
                alt="Renato Carlyle"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-104"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
            </div>

            {/* Badge flutuante */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-5 glass-card rounded-2xl px-5 py-4 shadow-lg"
            >
              <p className="font-display text-xl font-semibold text-foreground leading-none">30+</p>
              <p className="font-body text-[10px] text-muted-foreground tracking-[0.15em] uppercase mt-1">Anos de liderança</p>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Texto ── */}
        <motion.div
          initial={{ opacity: 0, x: 32, y: 16 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.18, type: "spring", stiffness: 55, damping: 18 }}
        >
          <p className="text-[11px] tracking-[0.38em] uppercase text-primary font-body mb-5 font-medium">
            Sobre mim
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-10 leading-[1.15]">
            Transformando visão em execução{" "}
            <span className="italic text-primary">impecável</span>
          </h2>

          <div className="space-y-6 text-muted-foreground font-body leading-[1.8] text-base md:text-[1.05rem] font-light">
            <p>
              Comandando operações há mais de três décadas, estabeleço
              conexões genuínas entre o propósito corporativo e a execução
              mercadológica.
            </p>
            <p>
              Minha atuação como{" "}
              <span className="text-foreground font-medium">Gestor Comercial</span> e
              Mentor Executivo tem sido pautada no fortalecimento estrutural
              dos líderes e equipes. Eu não entrego apenas estratégias;
              desenho a trilha completa de expansão e capacitação para
              garantir a máxima excelência.
            </p>
            <p>
              Mais do que metodologias, trago uma visão pragmática forjada no
              calor das negociações empresariais e na liderança construtiva de
              mesas diretoras influentes.
            </p>
          </div>

          {/* Linha decorativa */}
          <div className="mt-10 flex items-center gap-4">
            <div className="w-10 h-px bg-primary/40" />
            <span className="font-display text-sm italic text-muted-foreground">
              Renato Carlyle
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
