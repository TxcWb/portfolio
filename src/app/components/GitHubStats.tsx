import { motion } from "motion/react";
import { GitBranch, GitCommit, Code2, Calendar, Star, TrendingUp } from "lucide-react";

const stats = [
  { icon: GitCommit, label: "Contributions", value: "500+", color: "from-purple-500 to-pink-500" },
  { icon: GitBranch, label: "Repositories", value: "25+", color: "from-blue-500 to-cyan-500" },
  { icon: Code2, label: "Languages", value: "10+", color: "from-green-500 to-emerald-500" },
  { icon: Star, label: "Projects Built", value: "15+", color: "from-yellow-500 to-orange-500" },
  { icon: Calendar, label: "Years Active", value: "3+", color: "from-orange-500 to-red-500" },
  { icon: TrendingUp, label: "Commits", value: "1000+", color: "from-indigo-500 to-purple-500" },
];

export function GitHubStats() {
  return (
    <section id="github-stats" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            GitHub Activity
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-all duration-300`} />
                <div className="relative p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/60 transition-all text-center">
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                  <div className="mb-1">{stat.value}</div>
                  <div className="text-xs text-foreground/60">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
