import { motion } from "motion/react";
import { Laptop, Grid3x3, Crown, Mountain, Bike, Brain } from "lucide-react";

const interests = [
  { icon: Laptop, label: "Linux Ricing", color: "from-purple-500 to-pink-500" },
  { icon: Grid3x3, label: "Speedcubing", color: "from-blue-500 to-cyan-500" },
  { icon: Crown, label: "Chess", color: "from-green-500 to-emerald-500" },
  { icon: Mountain, label: "Hiking", color: "from-orange-500 to-red-500" },
  { icon: Bike, label: "Motorcycle Riding", color: "from-yellow-500 to-orange-500" },
  { icon: Brain, label: "AI Research", color: "from-indigo-500 to-purple-500" },
];

export function Interests() {
  return (
    <section id="interests" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Interests & Hobbies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5, rotate: 2 }}
                className="group relative cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${interest.color} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-all duration-300`} />
                <div className="relative p-8 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/60 transition-all">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${interest.color} flex items-center justify-center`}>
                    <interest.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-center text-foreground/90">{interest.label}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
