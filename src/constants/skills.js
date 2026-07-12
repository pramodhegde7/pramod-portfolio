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
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: FaHtml5,
    level: "Advanced",
    percentage: 95,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    level: "Advanced",
    percentage: 90,
  },
  {
    name: "JavaScript",
    icon: FaJs,
    level: "Intermediate",
    percentage: 85,
  },
  {
    name: "React",
    icon: FaReact,
    level: "Intermediate",
    percentage: 85,
  },
  {
    name: "Python",
    icon: FaPython,
    level: "Intermediate",
    percentage: 85,
  },
  {
    name: "Flask",
    icon: SiFlask,
    level: "Intermediate",
    percentage: 80,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: "Intermediate",
    percentage: 80,
  },
  {
    name: "Git",
    icon: FaGitAlt,
    level: "Intermediate",
    percentage: 80,
  },
  {
    name: "GitHub",
    icon: FaGithub,
    level: "Intermediate",
    percentage: 80,
  },
];

export default skills;