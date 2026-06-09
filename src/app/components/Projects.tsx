import { motion } from "motion/react";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "StudySurf",
    description: "Automated Educational Video Generation Platform. Converts PDFs, text, and markdown into engaging educational videos using AI segmentation and narration generation.",
    tech: ["React", "FastAPI", "AWS S3", "DynamoDB", "Cognito", "CloudFront"],
    badge: "AI Project",
    badgeColor: "from-purple-500 to-pink-500",
    github: "https://github.com/TxcWb/studysurf",
    gradient: "from-purple-900/40 to-pink-900/40",
    image: "/image/studysurf.png"
  },
  {
    title: "Faculty Accomplishment Tracker",
    description: "Faculty reporting and approval platform with role-based workflows, document management, and CSV exports.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    badge: "Production System",
    badgeColor: "from-blue-500 to-cyan-500",
    github: "https://github.com/TxcWb/facultyaccomplishmenttracker",
    gradient: "from-blue-900/40 to-cyan-900/40",
    image: "/image/facultyaccomplishmenttracker.png"
  },
  {
    title: "Local AI Chatbot",
    description: "Offline conversational AI assistant powered by Ollama, LangChain, and LLaMA 3.2. Features contextual memory and prompt templating.",
    tech: ["Python", "Ollama", "LangChain"],
    badge: "AI Engineering",
    badgeColor: "from-green-500 to-emerald-500",
    github: "https://github.com/TxcWb/pythonchatbot",
    gradient: "from-green-900/40 to-emerald-900/40",
    image: "/image/pythonchatbot.jpeg"
  },
  {
    title: "Linux Automation Suite",
    description: "Collection of Python and Bash automation tools for Linux system administration and productivity.",
    tech: ["Python", "Bash", "Linux", "Arch Linux"],
    badge: "Automation",
    badgeColor: "from-orange-500 to-red-500",
    github: "https://github.com/TxcWb/scriptsimadeformylappy",
    gradient: "from-orange-900/40 to-red-900/40",
  },
  {
    title: "Web Scraping Automation",
    description: "E-commerce data extraction pipeline with pagination handling, rate limiting, CSV exports, and error recovery.",
    tech: ["Python", "BeautifulSoup", "Requests"],
    badge: "Data Engineering",
    badgeColor: "from-yellow-500 to-orange-500",
    github: "https://github.com/TxcWb/pracwebscraping",
    gradient: "from-yellow-900/40 to-orange-900/40",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-all duration-500`} />
                <div className="relative h-full p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/60 transition-all flex flex-col overflow-hidden">
                  {/* Badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      <span className={`px-3 py-1 bg-gradient-to-r ${project.badgeColor} rounded-full text-xs text-white`}>
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Project Image/Placeholder */}
                  <div className="mb-4 h-48 rounded-lg overflow-hidden relative bg-black border border-border/30">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-black" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3">{project.title}</h3>

                  {/* Description */}
                  <p className="mb-4 text-foreground/70 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-background/60 border border-border/30 rounded text-xs text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all group/btn"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
