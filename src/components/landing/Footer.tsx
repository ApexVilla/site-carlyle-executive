import { motion } from "framer-motion";

const Footer = () => (
  <footer className="py-14 border-t border-border/60 relative overflow-hidden">
    {/* Linha dourada decorativa topo */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Marca */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-3"
      >
        <img src="/logo.png" alt="Renato Carlyle" className="h-7 object-contain opacity-60" />
        <span className="font-display text-sm text-muted-foreground">
          © {new Date().getFullYear()} Renato Carlyle
        </span>
      </motion.div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex items-center gap-3"
      >
        <span className="text-[10px] text-primary/60 tracking-[0.08em]">—</span>
        <span className="text-[11px] text-muted-foreground/70 tracking-[0.18em] uppercase font-body font-medium">
          Gestor Comercial Sênior · Mentor · Conselheiro
        </span>
        <span className="text-[10px] text-primary/60 tracking-[0.08em]">—</span>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
