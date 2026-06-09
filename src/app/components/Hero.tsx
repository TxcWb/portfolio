import { motion } from "motion/react";
import { Github, Mail, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Background Elements that complement the Spotlight */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="mb-6 tracking-tighter leading-none">
              <span className="block text-6xl md:text-8xl lg:text-9xl font-extrabold bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                Jay Emerson P. Navares
              </span>
            </h1>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-x-3 text-lg md:text-2xl font-medium text-muted-foreground/80 tracking-tight">
              <span>Full-Stack Developer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
              <span>AI Enthusiast</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
              <span>Software Developer</span>
            </div>

            <p className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              I love turning ideas into practical software, from scalable web applications and AI-driven projects to Linux automation tools that solve real-world problems and save time.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-semibold text-foreground hover:bg-white/10 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </motion.button>

              <motion.a
                href="https://github.com/TxcWb"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-semibold text-foreground hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

