import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Programming",
    skills: ["C", "C++", "Python", "JavaScript", "PHP", "PostgreSQL", "Bash"],
  },
  {
    title: "Web",
    skills: ["React", "TypeScript", "Node.js", "Express", "HTML", "CSS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Supabase", "MySQL"],
  },
  {
    title: "AI",
    skills: ["Ollama", "LangChain", "Local LLM Deployment", "Prompt Engineering"],
  },
  {
    title: "Tools",
    skills: ["Docker", "Git", "GitHub", "Linux", "Arch Linux", "Neovim"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase italic">
              Tech Stack
            </h2>
            <p className="text-muted-foreground font-medium tracking-widest uppercase text-xs">
              Tools of the trade
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-8 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <h3 className="text-lg font-bold mb-6 tracking-widest uppercase text-white/90 group-hover:text-white transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
