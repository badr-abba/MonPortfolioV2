import { motion } from "framer-motion";

interface NavigationProps {
  sections: string[];
  activeSection: number;
  onNavigate: (index: number) => void;
}

export const Navigation = ({ sections, activeSection, onNavigate }: NavigationProps) => {
  const sectionLabels = ["Accueil", "À propos", "Skills", "Expérience", "Projets", "Contact"];

  return (
    <motion.nav
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
    >
      {sections.map((_, index) => (
        <div key={index} className="group flex items-center gap-3 justify-end">
          <span 
            className={`text-xs font-display uppercase tracking-wider transition-all duration-300 opacity-0 group-hover:opacity-100 ${
              activeSection === index ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {sectionLabels[index]}
          </span>
          <button
            onClick={() => onNavigate(index)}
            className={`nav-dot ${activeSection === index ? 'active' : ''} hover:bg-primary/50`}
            aria-label={`Navigate to ${sectionLabels[index]}`}
          />
        </div>
      ))}
    </motion.nav>
  );
};
