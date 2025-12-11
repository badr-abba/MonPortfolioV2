import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code, Wrench, Users } from "lucide-react";

export const SkillsSection = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Hard Skills",
      icon: Code,
      items: skills.hard,
      color: "primary"
    },
    {
      title: "Soft Skills",
      icon: Users,
      items: skills.soft,
      color: "accent"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      items: skills.tools,
      color: "primary"
    }
  ];

  return (
    <div className="horizontal-section flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-display text-sm uppercase tracking-wider">
            Compétences
          </span>
          <h2 className="text-4xl font-display font-bold text-gradient mt-2">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 gradient-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                  <category.icon className={`w-6 h-6 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="font-display font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="tech-badge cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioData.certifications.map((cert, index) => (
              <motion.a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-4 rounded-xl glow-hover group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">
                      {cert.issuer.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
