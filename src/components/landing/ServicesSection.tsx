import { Compass, TrendingUp, UsersRound, ShieldCheck, Lightbulb, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

const services: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Estratégia Comercial",
    desc: "Arquitetura de estratégias que conectam mercado, produto e execução com precisão.",
    icon: Compass,
  },
  {
    title: "Expansão de Market Share",
    desc: "Identificação e captura de oportunidades em mercados competitivos.",
    icon: TrendingUp,
  },
  {
    title: "Reestruturação de Equipes",
    desc: "Construção de times comerciais de alta performance com cultura de resultado.",
    icon: UsersRound,
  },
  {
    title: "Governança Comercial",
    desc: "Processos, métricas e frameworks que garantem consistência operacional.",
    icon: ShieldCheck,
  },
  {
    title: "Mentoria Executiva",
    desc: "Desenvolvimento de lideranças com visão estratégica e capacidade de execução.",
    icon: Lightbulb,
  },
  {
    title: "Inteligência Comercial + IA",
    desc: "Dados e tecnologia aplicados à tomada de decisão comercial.",
    icon: BrainCircuit,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 36, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 90, damping: 22 },
  },
};

const ServicesSection = () => (
  <section className="section-padding overflow-hidden bg-secondary/10">
    <div className="container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <p className="text-[11px] tracking-[0.38em] uppercase text-primary font-body mb-4 font-medium">
            Atuação
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Áreas de impacto
          </h2>
        </div>
        {/* Descrição lateral */}
        <p className="md:max-w-xs text-sm text-muted-foreground font-body leading-relaxed font-light">
          Diagnóstico, estratégia e execução — do planejamento à implementação com resultados mensuráveis.
        </p>
      </motion.div>

      {/* Grid de cards */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.015,
              transition: { type: "spring", stiffness: 400, damping: 26 },
            }}
            className="group relative glass-card p-8 rounded-[2rem] flex flex-col gap-6 cursor-default overflow-hidden"
          >
            {/* Número de ordem */}
            <span className="absolute top-7 right-8 font-display text-5xl font-semibold text-foreground/5 leading-none select-none">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Ícone */}
            <div className="relative z-10 w-14 h-14 bg-background/70 rounded-xl shadow-sm flex items-center justify-center border border-border/60 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
              <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500 stroke-[1.5]" />
            </div>

            {/* Texto */}
            <div className="relative z-10">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                {service.title}
              </h3>
              <p className="text-[0.9rem] text-muted-foreground leading-relaxed font-body font-light">
                {service.desc}
              </p>
            </div>

            {/* Linha dourada bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-center" />

            {/* Shine */}
            <div className="absolute -inset-full top-0 block w-1/2 h-full z-20 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 group-hover:animate-shine pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
