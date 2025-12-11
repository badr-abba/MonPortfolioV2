import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export const AboutSection = () => {
  const { profile, education } = portfolioData;

  return (
    <div className="horizontal-section flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-12">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <span className="text-primary font-display text-sm uppercase tracking-wider">
              À propos
            </span>
            <h2 className="text-4xl font-display font-bold text-gradient">
              Qui suis-je ?
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed text-lg">
            {profile.bio}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="glass-card p-4 rounded-xl gradient-border">
              <h4 className="text-3xl font-display font-bold text-primary">2+</h4>
              <p className="text-sm text-muted-foreground">Années d'études supérieures</p>
            </div>
            <div className="glass-card p-4 rounded-xl gradient-border">
              <h4 className="text-3xl font-display font-bold text-primary">6+</h4>
              <p className="text-sm text-muted-foreground">Projets réalisés</p>
            </div>
            <div className="glass-card p-4 rounded-xl gradient-border">
              <h4 className="text-3xl font-display font-bold text-primary">2</h4>
              <p className="text-sm text-muted-foreground">Stages professionnels</p>
            </div>
            <div className="glass-card p-4 rounded-xl gradient-border">
              <h4 className="text-3xl font-display font-bold text-primary">6+</h4>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <span className="text-primary font-display text-sm uppercase tracking-wider">
              Parcours
            </span>
            <h2 className="text-4xl font-display font-bold text-foreground">
              Formation
            </h2>
          </div>

          <div className="relative space-y-6 pl-8">
            <div className="timeline-line" />
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative glass-card p-5 rounded-xl gradient-border group hover:scale-[1.02] transition-transform"
              >
                {/* Timeline dot */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-primary glow" />
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="font-display font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {edu.school}
                    </p>
                    <p className="text-xs text-primary flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {edu.year}
                    </p>
                    <p className="text-sm text-muted-foreground pt-1">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
