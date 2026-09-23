import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.671.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface ContactInfo {
  icon: LucideIcon;
  label: string;
  href: string;
  sublabel?: string;
}

const CTASection = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      label: "(62) 99998-4422",
      sublabel: "WhatsApp",
      href: "https://wa.me/5562999984422",
    },
    {
      icon: MapPin,
      label: "Goiânia — GO",
      sublabel: "Localização",
      href: "#",
    },
    {
      icon: Mail,
      label: "renatocarlyle@gmail.com",
      sublabel: "E-mail",
      href: "mailto:renatocarlyle@gmail.com",
    },
  ];

  return (
    <section id="contato" className="section-padding relative z-10 overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-20"
          >
            <p className="text-[11px] tracking-[0.38em] uppercase text-primary font-body mb-7 font-medium">
              Próximo passo
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-0">
              Cresça com{" "}
              <span className="italic text-primary">estrutura e estratégia.</span>
            </h2>
          </motion.div>

          {/* Cards de contato */}
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: 0.15 + i * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 400, damping: 24 },
                }}
                className="group relative glass-card p-10 rounded-[2rem] flex flex-col items-center gap-3 cursor-pointer overflow-hidden text-center"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-400">
                  <info.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-400 stroke-[1.5]" />
                </div>

                {/* Sublabel */}
                {info.sublabel && (
                  <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/70 font-body font-medium">
                    {info.sublabel}
                  </span>
                )}

                {/* Label */}
                <span className="text-sm text-foreground font-body font-medium tracking-wide group-hover:text-primary transition-colors duration-300">
                  {info.label}
                </span>

                {/* Shine */}
                <div className="absolute -inset-full top-0 block w-1/2 h-full z-20 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 group-hover:animate-shine pointer-events-none" />
              </motion.a>
            ))}
          </div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-center"
          >
            <motion.a
              href="https://wa.me/5562999984422"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-4 bg-primary text-white border border-primary px-12 py-5 text-[11px] tracking-[0.22em] uppercase font-body font-semibold hover:bg-transparent hover:text-primary transition-all duration-500 rounded-full shadow-[0_12px_40px_rgba(43,65,42,0.25)] hover:shadow-[0_6px_20px_rgba(43,65,42,0.15)] animate-pulse-gold"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
              Falar com Renato Carlyle
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
