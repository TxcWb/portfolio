import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <p className="text-xl font-bold tracking-tight text-white uppercase italic">
              "Leave tomorrow's problems to tomorrow's you."
            </p>
            <p className="text-sm text-zinc-500 font-medium tracking-widest uppercase">
              Jay Emerson P. Navares — 2026
            </p>
          </div>

          <div className="flex items-center gap-8">
            {[
              { href: "https://github.com/TxcWb", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/jay-emerson-navares-998b69333/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:toxicfilipinoweeb@gmail.com", icon: Mail, label: "Email" }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
              >
                <social.icon className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-700">
            Designed & Built with Precision • 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
