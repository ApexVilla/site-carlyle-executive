import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const audiences = [
  "Empresas em crescimento que precisam de estrutura comercial",
  "Negócios em reestruturação buscando eficiência e resultado",
  "Executivos que precisam de direção estratégica clara",
  "Organizações buscando governança e escala sustentável",
];

const AudienceSection = () => (
  <section className="section-padding bg-secondary/10">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-28 items-center">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[11px] tracking-[0.38em] uppercase text-primary font-body mb-5 font-medium">
            Para quem
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-light text-foreground leading-[1.15]">
            Se você se{" "}
            <span className="italic text-primary">reconhece</span> aqui
          </h2>
          <p className="mt-6 text-base text-muted-foreground font-body font-light leading-relaxed max-w-sm">
            Atendo organizações e líderes que exigem resultados concretos — com estrutura, método e comprometimento.
          </p>
        </motion.div>

        {/* ── Lista ── */}
        <div className="space-y-5">
          {audiences.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group flex items-start gap-5 glass-card p-6 rounded-2xl hover:shadow-md transition-all duration-500 cursor-default"
            >
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <p className="text-base md:text-lg text-foreground font-display font-light leading-relaxed">
                {a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AudienceSection;
