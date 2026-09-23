import { motion } from "framer-motion";

const DifferentialSection = () => (
  <section className="section-padding overflow-hidden">
    <div className="container">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, type: "spring", stiffness: 60, damping: 18 }}
          className="relative text-center"
        >
          {/* Aspas decorativas */}
          <div
            className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-[8rem] leading-none text-primary/8 select-none pointer-events-none"
            aria-hidden
          >
            "
          </div>

          {/* Linha superior */}
          <div className="w-14 h-px bg-primary/50 mx-auto mb-14" />

          <blockquote className="font-display text-2xl md:text-3xl lg:text-5xl font-light leading-[1.35] text-foreground italic relative z-10">
            <span className="text-primary">"</span>Não se trata de vender mais.
            <br />
            <span className="text-primary">Trata-se de construir estruturas</span>
            <br />
            comerciais que sustentam crescimento real.
            <span className="text-primary">"</span>
          </blockquote>

          {/* Assinatura */}
          <div className="mt-12 flex flex-col items-center gap-3">
            <div className="w-10 h-px bg-primary/40" />
            <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground font-body font-medium">
              Renato Carlyle
            </p>
          </div>

          {/* Linha inferior */}
          <div className="w-14 h-px bg-primary/50 mx-auto mt-14" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default DifferentialSection;
