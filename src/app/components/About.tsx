import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="mb-4 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl">
            <p className="mb-6 text-lg text-foreground/80 leading-relaxed">
              Passionate software developer focused on Full-Stack Development,
              Cloud Infrastructure,
              Database Design, and
              Local AI Systems.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently studying Computer Science at the University of the Philippines Mindanao.
              Interested in backend architecture, AI integrations, self-hosted technologies, Linux, and automation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
