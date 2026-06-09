import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <p className="text-lg md:text-xl text-foreground/70 italic">
              "Leave tomorrow's problems to tomorrow's you."
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <motion.a
              href="https://github.com/TxcWb"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-card/40 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all group"
            >
              <Github className="w-5 h-5 text-foreground/70 group-hover:text-purple-400 transition-colors" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/jay-emerson-navares-998b69333/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-card/40 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all group"
            >
              <Linkedin className="w-5 h-5 text-foreground/70 group-hover:text-blue-400 transition-colors" />
            </motion.a>

            <motion.a
              href="mailto:toxicfilipinoweeb@gmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-card/40 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/50 transition-all group"
            >
              <Mail className="w-5 h-5 text-foreground/70 group-hover:text-green-400 transition-colors" />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center text-foreground/60"
          >
            <p>© 2026 Jay Emerson P. Navares</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
