import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Programming",
    color: "from-purple-500 to-pink-500",
    skills: ["C", "C++", "Python", "JavaScript", "PHP", "PostgreSQL", "Bash"],
  },
  {
    title: "Web",
    color: "from-blue-500 to-cyan-500",
    skills: ["React", "TypeScript", "Node.js", "Express", "HTML", "CSS"],
  },
  {
    title: "Databases",
    color: "from-green-500 to-emerald-500",
    skills: ["PostgreSQL", "Supabase", "MySQL"],
  },
  {
    title: "AI",
    color: "from-orange-500 to-red-500",
    skills: ["Ollama", "LangChain", "Local LLM Deployment", "Prompt Engineering"],
  },
  {
    title: "Tools",
    color: "from-yellow-500 to-orange-500",
    skills: ["Docker", "Git", "GitHub", "Linux", "Arch Linux", "Neovim"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.slice(0, 3).map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-300`} />
                <div className="relative p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/60 transition-all h-full">
                  <h3 className={`mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
                        className="px-3 py-1 bg-background/60 border border-border/30 rounded-md text-sm text-foreground/80 hover:bg-background/80 hover:border-border/60 transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Centered AI and Tools row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
            {skillCategories.slice(3).map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (3 + categoryIndex) * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-300`} />
                <div className="relative p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/60 transition-all h-full">
                  <h3 className={`mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: ((3 + categoryIndex) * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
                        className="px-3 py-1 bg-background/60 border border-border/30 rounded-md text-sm text-foreground/80 hover:bg-background/80 hover:border-border/60 transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
