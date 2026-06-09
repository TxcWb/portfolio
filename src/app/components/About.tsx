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
              Passionate software developer focused on <span className="text-purple-400">Full-Stack Development</span>,
              <span className="text-blue-400"> Cloud Infrastructure</span>,
              <span className="text-cyan-400"> Database Design</span>, and
              <span className="text-green-400"> Local AI Systems</span>.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently studying Computer Science at the <span className="text-purple-400">University of the Philippines Mindanao</span>.
              Interested in backend architecture, AI integrations, self-hosted technologies, Linux, and automation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
