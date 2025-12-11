import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ChevronRight, Github, Linkedin, Mail, MapPin, Download } from "lucide-react";

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = portfolioData.hero.typingText;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentText];

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText, texts]);

  return (
    <div className="horizontal-section flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Disponible pour un stage</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl font-display font-bold"
          >
            <span className="text-foreground">Hello, I'm</span>
            <br />
            <span className="text-gradient">{portfolioData.profile.name.split(' ')[0]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground"
          >
            {portfolioData.profile.role}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="h-16"
          >
            <p className="text-lg text-foreground/80 font-body">
              {displayText}
              <span className="animate-blink text-primary">|</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span>{portfolioData.profile.location}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glow-hover p-3 rounded-xl transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glow-hover p-3 rounded-xl transition-all hover:scale-110"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
            <a
              href={`mailto:${portfolioData.profile.email}`}
              className="glass-card glow-hover p-3 rounded-xl transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 pt-4"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider glow transition-all hover:scale-105"
            >
              Me contacter
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={portfolioData.profile.resumeUrl}
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-primary/30 text-primary font-display font-semibold text-sm uppercase tracking-wider glow-hover transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              CV
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-3xl opacity-30 animate-pulse-glow" />
            
            {/* Rotating border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, hsl(190, 100%, 50%), hsl(260, 80%, 60%), hsl(190, 100%, 50%))',
                padding: '4px',
              }}
            >
              <div className="w-full h-full rounded-full bg-background" />
            </motion.div>

            {/* Profile image */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background">
              <img
                src={portfolioData.profile.photoUrl}
                alt={portfolioData.profile.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-xl glow"
            >
              <span className="text-xs font-display text-primary">Big Data</span>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-xl glow"
            >
              <span className="text-xs font-display text-accent">Cloud Computing</span>
            </motion.div>

            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-8 glass-card px-4 py-2 rounded-xl glow"
            >
              <span className="text-xs font-display text-primary">DevOps</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground font-display uppercase tracking-wider">
          Scroll
        </span>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 mt-2 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
