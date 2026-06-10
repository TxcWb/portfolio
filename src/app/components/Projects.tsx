import { motion } from "motion/react";
import { Github, ExternalLink, Sparkles, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "StudySurf",
    description: "Automated Educational Video Generation Platform. Converts PDFs, text, and markdown into engaging educational videos using AI segmentation and narration generation.",
    tech: ["React", "FastAPI", "AWS S3", "DynamoDB", "Cognito", "CloudFront"],
    badge: "AI Project",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    github: "https://github.com/TxcWb/studysurf",
    image: "/image/studysurf.png"
  },
  {
    title: "Faculty Accomplishment Tracker",
    description: "Faculty reporting and approval platform with role-based workflows, document management, and CSV exports.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    badge: "Production System",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    github: "https://github.com/TxcWb/facultyaccomplishmenttracker",
    externalLink: "https://canva.link/y1dy8rvafdv6v0z",
    image: "/image/facultyaccomplishmenttracker.png"
  },
  {
    title: "Local AI Chatbot",
    description: "Offline conversational AI assistant powered by Ollama, LangChain, and LLaMA 3.2. Features contextual memory and prompt templating.",
    tech: ["Python", "Ollama", "LangChain"],
    badge: "AI Engineering",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/20",
    github: "https://github.com/TxcWb/pythonchatbot",
    externalLink:"https://dev.to/up_min_sparcs/how-to-make-a-chatbot-in-python-using-a-local-llm-7h8?fbclid=IwY2xjawSTcuRleHRuA2FlbQIxMQBicmlkETFhOEpVOXVLNDBVSnpJekppc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuXCC4c63dWE9x-JJtooQ7p6dFFKApm8chtRlQkOelxAR-qNdy7zCmQqf13A_aem_mwAFDU3ZxxGtKp_Gj3AQDg"
    image: "/image/pythonchatbot.jpeg"
  },
  {
    title: "Linux Automation Suite",
    description: "Collection of Python and Bash automation tools for Linux system administration and productivity.",
    tech: ["Python", "Bash", "Linux", "Arch Linux"],
    badge: "Automation",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    github: "https://github.com/TxcWb/scriptsimadeformylappy",
    image: "/image/linuxscripts.png"
  },
  {
    title: "Web Scraping Automation",
    description: "E-commerce data extraction pipeline with pagination handling, rate limiting, CSV exports, and error recovery.",
    tech: ["Python", "BeautifulSoup", "Requests"],
    badge: "Data Engineering",
    badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    github: "https://github.com/TxcWb/pracwebscraping",
    image: "/image/webscraper.png"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent italic uppercase">
              Selected Works
            </h2>
            <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto font-medium tracking-tight">
              A collection of notable projects that I made throughout my college life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="relative h-full flex flex-col overflow-hidden bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl transition-all duration-500 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                  {/* Project Image Container */}
                  <div className="aspect-video w-full overflow-hidden relative border-b border-white/10">
                    {project.image ? (
                      project.externalLink ? (
                        <a 
                          href={project.externalLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full h-full relative group/image"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
                            <ExternalLink className="w-10 h-10 text-white" />
                          </div>
                        </a>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                      )
                    ) : (
                      <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                        <Sparkles className="w-12 h-12 text-zinc-800" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 tracking-tight">{project.title}</h3>

                    <p className="text-muted-foreground leading-relaxed mb-6 font-medium text-sm md:text-base">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-zinc-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-white transition-colors group/link"
                      >
                        <Github className="w-5 h-5" />
                        <span>Source Code</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
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

