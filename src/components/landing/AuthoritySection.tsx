import { motion } from "framer-motion";

const stats = [
  { number: "30+",         label: "Anos de experiência" },
  { number: "C-Level",     label: "Atuação executiva" },
  { number: "Certificado", label: "Conselheiro corporativo" },
  { number: "MBA",         label: "Mentoria Empresarial" },
];

const AuthoritySection = () => (
  <section className="relative z-20 pt-8 pb-20 md:pt-12 overflow-hidden">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 36, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 22,
              delay: i * 0.08,
            }}
            whileHover={{
              scale: 1.03,
              y: -4,
              transition: { type: "spring", stiffness: 420, damping: 24 },
            }}
            className="group relative glass-card p-8 md:p-10 rounded-[2.5rem] text-center flex flex-col justify-center items-center cursor-default overflow-hidden"
          >
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-primary/20 group-hover:border-primary/50 transition-colors duration-500" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-primary/20 group-hover:border-primary/50 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col justify-center items-center gap-2">
              <div className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground group-hover:text-primary transition-colors duration-500 ease-out leading-none">
                {stat.number}
              </div>
              <div className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground font-body font-medium leading-relaxed group-hover:text-foreground/70 transition-colors duration-500 mt-1">
                {stat.label}
              </div>
            </div>

            {/* Shine on hover */}
            <div className="absolute -inset-full top-0 block w-1/2 h-full z-20 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 group-hover:animate-shine pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AuthoritySection;
