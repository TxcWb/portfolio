import { motion } from "motion/react";
import { Github, Mail, ArrowRight } from "lucide-react";

const techStack = [
  "React",
  "TypeScript",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "AWS",
  "Python",
  "Docker",
  "Arch Linux",
  "Ollama",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Tech Badges */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-md group-hover:blur-lg transition-all" />
                <div className="relative px-4 py-2 bg-card/40 backdrop-blur-sm border border-border/50 rounded-full">
                  <span className="text-sm text-foreground/90">{tech}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              <span className="block text-5xl md:text-7xl mb-2">Jay Emerson P. Navares</span>
            </h1>

            <div className="mb-6 text-xl md:text-2xl text-muted-foreground">
              <span className="text-purple-400">Full-Stack Developer</span>
              <span className="mx-2">•</span>
              <span className="text-blue-400">AI Enthusiast</span>
              <span className="mx-2">•</span>
              <span className="text-cyan-400">Systems Engineer</span>
            </div>

            <p className="mb-10 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              I build scalable web applications, backend systems, AI-powered platforms,
              and Linux automation tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-card/40 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-card/60 transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </motion.button>

              <motion.a
                href="https://github.com/jayemersonnavares"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-card/40 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-card/60 transition-all flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-foreground/30 rounded-full p-1"
            >
              <div className="w-1.5 h-3 bg-foreground/50 rounded-full mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
