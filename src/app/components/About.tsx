import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase italic">
              About
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative p-10 md:p-16 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl">
              <div className="grid grid-cols-1 gap-10">
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed tracking-tight">
                  Passionate software developer focused on <span className="text-white">Full-Stack Development</span>,
                  <span className="text-white"> Cloud Infrastructure</span>,
                  <span className="text-white"> Database Design</span>, and
                  <span className="text-white"> Local AI Systems</span>.
                </p>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                  Currently studying Computer Science at the <span className="text-foreground">University of the Philippines Mindanao</span>.
                  I thrive at the intersection of backend architecture, AI integrations, and self-hosted technologies. 
                  My workflow is deeply rooted in Linux environments and automation, striving for 
                  <span className="italic text-foreground"> elegant solutions to complex problems.</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
