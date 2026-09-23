import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Diretor Executivo",
    company: "Villela Brasil Bank",
    period: "Gestão estratégica e expansão de operações",
  },
  {
    role: "Fundador",
    company: "R7 Comunicação e Desenvolvimento",
    period: "Consultoria e desenvolvimento organizacional",
  },
  {
    role: "Diretor Comercial",
    company: "UP380",
    period: "Liderança de operações comerciais",
  },
  {
    role: "Consultor",
    company: "Fox Partners",
    period: "Estratégia e performance empresarial",
  },
  {
    role: "Gerente Comercial",
    company: "Dinavidros",
    period: "Gestão comercial e crescimento de mercado",
  },
];

const ExperienceSection = () => (
  <section className="section-padding bg-secondary/10">
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
          Trajetória
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
          Experiência executiva
        </h2>
      </motion.div>

      {/* Linhas de experiência */}
      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.55,
              delay: i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="group relative border-t border-border/70 py-9 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:bg-white/40 transition-all duration-500 px-5 md:px-8 -mx-5 md:-mx-8 rounded-xl cursor-default"
          >
            {/* Barra lateral animada */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/0 via-primary to-primary/0 scale-y-0 origin-center group-hover:scale-y-100 transition-transform duration-500 ease-in-out rounded-full" />

            {/* Número + cargo + empresa */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-14 flex-1 min-w-0">
              <span className="text-[11px] tracking-[0.2em] text-muted-foreground/60 font-body hidden md:block shrink-0 w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-2xl md:text-3xl lg:text-[2.1rem] font-light text-foreground group-hover:text-primary transition-colors duration-500 mb-1.5 leading-snug truncate">
                  {exp.role}
                </h3>
                <p className="text-primary tracking-[0.18em] text-xs md:text-sm uppercase font-body font-medium">
                  {exp.company}
                </p>
              </div>
            </div>

            {/* Descrição + ícone */}
            <div className="flex items-center justify-between gap-6 md:w-5/12">
              <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-[260px]">
                {exp.period}
              </p>
              <motion.div
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500 hidden sm:flex"
                whileHover={{ rotate: 45 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
              </motion.div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-border/70" />
      </div>
    </div>
  </section>
);

export default ExperienceSection;
