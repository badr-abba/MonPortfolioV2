import profileImg from "@/assets/profile.png";
import projectIot from "@/assets/project-iot.png";
import projectWip from "@/assets/project-wip.png";
import projectPerformance from "@/assets/project-performance.png";
import projectStock from "@/assets/project-stock.png";
import projectSmartfactory from "@/assets/project-smartfactory.png";
import projectElearning from "@/assets/project-elearning.png";

export const portfolioData = {
  profile: {
    name: "ABBA BADREDDINE",
    role: "Master's Student in Big Data & Cloud Computing",
    bio: "Professionnel passionné par les technologies numériques avancées, spécialisé en Big Data, Cloud Computing, DevOps et Data Science, rigoureux et orienté solutions pour développer des architectures modernes, scalables et optimisées.",
    location: "Bouskoura, Maroc",
    email: "badreddineabba@gmail.com",
    phone: "+212601582388",
    linkedin: "https://www.linkedin.com/in/badreddineabba/",
    github: "https://github.com/badr-abba/",
    portfolio: "https://www.badrabba.com",
    photoUrl: profileImg,
    resumeUrl: "Cv.pdf"
  },
  hero: {
    typingText: [
      "Master's student in Big Data & Cloud Computing.",
      "Passionate about Data Science.",
      "Interested in DevOps practices.",
      "Eager to learn about scalable cloud architectures.",
      "Exploring automation and data analysis."
    ]
  },
  skills: {
    hard: [
      "JavaScript", "Python", "PHP", "SQL", "Shell/Bash",
      "MySQL", "SQL Server", "PostgreSQL", "MongoDB", "Firebase",
      "Power BI", "Apache Spark", "Hadoop MapReduce", "Pandas", "NumPy",
      "Linux", "Docker", "Kubernetes",
      "CI/CD", "Jenkins", "GitLab CI", "Terraform",
      "Azure", "HTML/CSS", "ETL", "Data Modeling"
    ],
    soft: [
      "Résolution de problèmes",
      "Esprit d'analyse",
      "Gestion de projet",
      "Travail d'équipe",
      "Autonomie",
      "Adaptabilité",
      "Communication technique"
    ],
    tools: [
      "Power BI",
      "SAP",
      "Git & GitHub",
      "VS Code",
      "Raspberry Pi",
      "Docker Desktop",
      "Postman",
      "Jupyter Notebook",
      "pgAdmin"
    ]
  },
  experience: [
    {
      role: "Stagiaire | Data Analyst",
      company: "PHARMA5 (Nouaceur)",
      date: "Juillet 2025 - Septembre 2025",
      description: "Création et automatisation de tableaux de bord pour le suivi de la performance industrielle et des cadences machines (Smart Factory).",
      tasks: [
        "Tableaux de bord performance Smart Factory.",
        "Suivi processus nettoyage équipements.",
        "Automatisation de rapports opérationnels.",
        "Modélisation de données (KPIs)."
      ]
    },
    {
      role: "Stagiaire | BI & Performance",
      company: "LATECOERE (Casablanca)",
      date: "Octobre 2024 - Avril 2025",
      description: "Digitalisation et analyse de la performance industrielle. Intégration de données SAP et HOROQUARTZ.",
      tasks: [
        "Suivi temps réel du flux de production (WIP).",
        "Dashboard anticipation ruptures de stock.",
        "ETL et centralisation des données.",
        "Optimisation des processus manuels."
      ]
    }
  ],
  education: [
    {
      degree: "Master Big Data & Cloud Computing",
      school: "Faculté des Sciences Ain Chock",
      year: "2025 - 2027",
      description: "Architecture Cloud, Big Data, IA."
    },
    {
      degree: "Licence SMI (Réseaux & Systèmes)",
      school: "Faculté des Sciences Ain Chock",
      year: "2023 - 2024",
      description: "Administration système, Réseaux, Dév."
    },
    {
      degree: "DEUG Sciences",
      school: "Faculté des Sciences Ain Chock",
      year: "2020 - 2023",
      description: "Mathématiques et Informatique."
    },
    {
      degree: "Baccalauréat Sc. Math A",
      school: "Lycée Ouled Hriz",
      year: "2018 - 2019",
      description: "Sciences Mathématiques."
    }
  ],
  projects: [
    {
      title: "Smart Parking IoT",
      category: "IoT / Embarqué",
      description: "Système de gestion de parking intelligent avec Raspberry Pi, capteurs, RFID et interface web de supervision.",
      tags: ["Python", "PHP", "Raspberry Pi", "IoT"],
      image: projectIot,
      repoLink: "https://github.com/badr-abba/",
      demoLink: "#"
    },
    {
      title: "Digitalisation WIP Usine",
      category: "Business Intelligence",
      description: "Interface visuelle Power BI affichant les données de production SAP sur un layout d'usine en temps réel.",
      tags: ["PowerBI", "SAP", "DAX", "Data Viz"],
      image: projectWip,
      repoLink: "#",
      demoLink: "#"
    },
    {
      title: "Dashboard Performance & KPIs",
      category: "Business Intelligence",
      description: "Tableaux de bord combinant SAP et HOROQUARTZ pour le suivi du ratio de production et de la performance.",
      tags: ["PowerBI", "SAP", "Excel", "ETL"],
      image: projectPerformance,
      repoLink: "#",
      demoLink: "#"
    },
    {
      title: "Suivi Ruptures de Stock",
      category: "Supply Chain Data",
      description: "Outil d'anticipation des ruptures d'articles pour optimiser la chaîne d'approvisionnement.",
      tags: ["PowerBI", "Analytics", "SQL"],
      image: projectStock,
      repoLink: "#",
      demoLink: "#"
    },
    {
      title: "Smart Factory : Suivi Cadences Machines",
      category: "Business Intelligence / Industrie 4.0",
      description: "Développement de tableaux de bord interactifs Power BI pour le pilotage de la Smart Factory.",
      tags: ["PowerBI", "SQL Server", "Industrie 4.0", "Data Analysis"],
      image: projectSmartfactory,
      repoLink: "#",
      demoLink: "#"
    },
    {
      title: "Learn with ABBA : Plateforme E-Learning",
      category: "Web Dev / Éducation",
      description: "Plateforme web centralisant les ressources pédagogiques du Master Big Data & Cloud Computing.",
      tags: ["HTML5", "CSS3", "JavaScript", "Firebase"],
      image: projectElearning,
      repoLink: "#",
      demoLink: "#"
    }
  ],
  certifications: [
    {
      name: "Git and GitHub",
      issuer: "365 Data Science",
      date: "Nov 2025",
      link: "https://learn.365datascience.com/certificates/CC-D8699E634C/"
    },
    {
      name: "Intro to Data Science",
      issuer: "365 Data Science",
      date: "Nov 2025",
      link: "https://learn.365datascience.com/certificates/CC-A94952EA38/"
    },
    {
      name: "Introduction to Python",
      issuer: "DataCamp",
      date: "Nov 2025",
      link: "#"
    },
    {
      name: "Cybersecurity & Ethical Hacking",
      issuer: "Cisco",
      date: "Juin 2024",
      link: "#"
    },
    {
      name: "Network Defense",
      issuer: "Cisco",
      date: "Juin 2024",
      link: "#"
    },
    {
      name: "Operating Systems Basics",
      issuer: "Cisco",
      date: "Juin 2024",
      link: "#"
    }
  ]
};
