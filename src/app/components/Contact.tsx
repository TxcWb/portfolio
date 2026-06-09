import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="mb-4 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Build Something Together
          </h2>
          <p className="mb-12 text-center text-foreground/70 text-lg">
            Open to opportunities, collaborations, and interesting projects
          </p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl" />
              <div className="relative p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl">
                <div className="space-y-4">
                  <motion.a
                    href="https://github.com/jayemersonnavares"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-background/60 border border-border/30 rounded-lg hover:bg-background/80 hover:border-purple-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-foreground/90 group-hover:text-purple-400 transition-colors">GitHub</div>
                      <div className="text-sm text-foreground/60">@jayemersonnavares</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/jayemersonnavares"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-background/60 border border-border/30 rounded-lg hover:bg-background/80 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-foreground/90 group-hover:text-blue-400 transition-colors">LinkedIn</div>
                      <div className="text-sm text-foreground/60">Jay Emerson Navares</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="mailto:jayemerson.navares@example.com"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-background/60 border border-border/30 rounded-lg hover:bg-background/80 hover:border-green-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-foreground/90 group-hover:text-green-400 transition-colors">Email</div>
                      <div className="text-sm text-foreground/60">jayemerson.navares@example.com</div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
