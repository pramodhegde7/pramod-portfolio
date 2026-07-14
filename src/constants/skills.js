import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiFlask,
  SiMongodb,
  SiVercel,
} from "react-icons/si";

const skills = [

  // Frontend
  {
    name: "React",
    icon: FaReact,
    level: "Intermediate",
    percentage: 70,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    level: "Intermediate",
    percentage: 70,
    category: "Frontend",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    level: "Advanced",
    percentage: 90,
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    level: "Advanced",
    percentage: 85,
    category: "Frontend",
  },

  // Backend
  {
    name: "Python",
    icon: FaPython,
    level: "Intermediate",
    percentage: 75,
    category: "Backend",
  },
  {
    name: "Flask",
    icon: SiFlask,
    level: "Intermediate",
    percentage: 70,
    category: "Backend",
  },

  // Database
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: "Intermediate",
    percentage: 75,
    category: "Database",
  },

  // Tools
  {
    name: "Git",
    icon: FaGitAlt,
    level: "Intermediate",
    percentage: 70,
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    level: "Intermediate",
    percentage: 75,
    category: "Tools",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    level: "Intermediate",
    percentage: 70,
    category: "Tools",
  },

];

export default skills;