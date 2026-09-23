import { motion } from "framer-motion";
import { BarChart3, Globe2, Zap, Users2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

const results: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Crescimento de faturamento",
    desc: "Estruturas comerciais que geraram crescimento consistente em múltiplos mercados.",
    icon: BarChart3,
  },
  {
    title: "Expansão de mercado",
    desc: "Abertura de novos canais e territórios com estratégia e execução disciplinada.",
    icon: Globe2,
  },
  {
    title: "Otimização de processos",
    desc: "Redução de complexidade operacional com ganho de velocidade e margem.",
    icon: Zap,
  },
  {
    title: "Equipes de alta performance",
    desc: "Times formados com mentalidade de resultado e cultura de accountability.",
    icon: Users2,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 32, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 90, damping: 20 },
  },
};

const ResultsSection = () => (
  <section className="section-padding relative z-10 overflow-hidden">
    <div className="container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 md:mb-24"
      >
        <p className="text-[11px] tracking-[0.38em] uppercase text-primary font-body mb-4 font-medium">
          Resultados
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
          Impacto mensurável
        </h2>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {results.map((item) => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.018,
              transition: { type: "spring", stiffness: 400, damping: 26 },
            }}
            className="group relative glass-card p-8 rounded-[2.5rem] flex flex-col items-center gap-5 cursor-default overflow-hidden text-center"
          >
            {/* Glow de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2.5rem]" />

            {/* Ícone */}
            <div className="w-14 h-14 bg-background/80 rounded-2xl flex items-center justify-center border border-border/50 group-hover:bg-primary transition-all duration-500 shadow-sm relative z-10">
              <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500 stroke-[1.5]" />
            </div>

            {/* Texto */}
            <div className="relative z-10">
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body font-light">
                {item.desc}
              </p>
            </div>

            {/* Shine */}
            <div className="absolute -inset-full top-0 block w-1/2 h-full z-20 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shine pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ResultsSection;
