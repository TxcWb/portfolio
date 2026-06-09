import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 uppercase italic">
              Connect
            </h2>
            <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto font-medium tracking-tight">
              Open for collaborations!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                label: "GitHub", 
                value: "@TxcWb", 
                href: "https://github.com/TxcWb", 
                icon: Github,
                color: "hover:text-purple-400"
              },
              { 
                label: "LinkedIn", 
                value: "Jay Navares", 
                href: "https://www.linkedin.com/in/jay-emerson-navares-998b69333/", 
                icon: Linkedin,
                color: "hover:text-blue-400"
              },
              { 
                label: "Email", 
                value: "toxicfilipinoweeb@gmail.com", 
                href: "mailto:toxicfilipinoweeb@gmail.com", 
                icon: Mail,
                color: "hover:text-emerald-400"
              }
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-1">{item.label}</div>
                    <div className={`text-sm font-semibold truncate transition-colors ${item.color}`}>
                      {item.value}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
