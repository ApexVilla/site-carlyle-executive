import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  const { scrollY } = useScroll();

  // Opacidade do background cresce de 0 → 1 nos primeiros 120px de scroll
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 1]);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      // Esconde ao descer rápido, aparece ao subir
      if (y < 60 || y < lastY.current) setVisible(true);
      else if (y > lastY.current + 12) setVisible(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      animate={{ y: visible ? 0 : -90 }}
      transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* ── Camada de vidro cristalizado ── */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Vidro base */}
        <div className="absolute inset-0 bg-white/55 backdrop-blur-3xl" />
        {/* Reflexo topo — linha de luz */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
        {/* Borda inferior */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        {/* Reflexo interno lateral esquerdo */}
        <div className="absolute left-0 inset-y-0 w-[1px] bg-gradient-to-b from-white/60 to-transparent" />
        {/* Sombra suave */}
        <div className="absolute inset-0 shadow-[0_4px_30px_rgba(0,0,0,0.06)]" />
      </motion.div>

      {/* ── Conteúdo ── */}
      <div
        className={`container relative flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-14 py-2" : "h-20 py-6"
        }`}
      >
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 420, damping: 26 }}
        >
          <img
            src="/logo.png"
            alt="Renato Carlyle"
            className={`object-contain transition-all duration-500 ${
              scrolled ? "h-8 md:h-9" : "h-10 md:h-12"
            }`}
          />
          <span className="font-display text-base md:text-lg text-foreground tracking-wide font-medium">
            Renato{" "}
            <span className="text-primary font-light italic">Carlyle</span>
          </span>
        </motion.a>

        {/* Link de contato */}
        <a
          href="#contato"
          className="animated-underline text-[11px] tracking-[0.18em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-body font-medium"
        >
          Contato
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
