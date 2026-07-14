import home from "../assets/project-images/Ayush-Link/home.png";
import patient from "../assets/project-images/Ayush-Link/patient.png";
import doctor from "../assets/project-images/Ayush-Link/doctor.png";
import admin from "../assets/project-images/Ayush-Link/admin.png";
import verification from "../assets/project-images/Ayush-Link/verification.png";
import queue from "../assets/project-images/Ayush-Link/patient-public-queue.png";

const projects = [
  {
    id: 1,

    title: "Ayush-Link",

    subtitle: "Clinic Appointment & Live Queue Management System",

    description:
      "Ayush-Link is a full stack web application developed to simplify clinic appointment booking and improve patient waiting experience through a real-time queue management system.",

    status: "Completed",

    role: "Full Stack Developer",

    duration: "Apr 2026 – Jun 2026",

    github: "https://github.com/pramodhegde7/Ayush-Link",

    live:
      "https://ayushlinkproject.vercel.app/?_vercel_share=j9jqXXCVdvA3Bs702ThaExnKrsybK6FI",

    images: [
  {
    title: "Home",
    src: home,
  },
  {
    title: "Doctor Dashboard",
    src: doctor,
  },
  {
    title: "Patient Dashboard",
    src: patient,
  },
  {
    title: "Admin Panel",
    src: admin,
  },
  {
    title: "Queue Management",
    src: queue,
  },
  {
    title: "Doctor Verification",
    src: verification,
  },
],

    metrics: [
  "👨‍⚕️ 3 User Roles",
  "🖥️ 15+ Screens",
  "🔐 Secure Authentication",
  "☁️ MongoDB Atlas",
  "🚀 Deployed on Vercel",
],

    technologies: [
  "Python",
  "Flask",
  "MongoDB Atlas",
  "HTML5",
  "CSS3",
  "JavaScript (ES6)",
  "Jinja2",
  "Git",
  "GitHub",
  "Vercel",
],

    features: [
  "Online Appointment Booking",
  "Real-Time Queue Tracking",
  "Patient Dashboard",
  "Doctor Dashboard",
  "Admin Approval System",
  "Review & Rating Module",
  "Digital Prescriptions",
  "Responsive User Interface",
],

    caseStudy: {

      problem:
        "Patients often spend a long time waiting outside clinics without knowing when their turn will arrive. Doctors also find it difficult to manage appointments, queues and patient flow efficiently.",

      solution:
        "Ayush-Link provides an online appointment booking system with live queue tracking, doctor dashboards, patient dashboards, digital prescriptions and real-time consultation updates.",

      challenges: [
        "Designing a dynamic queue algorithm",
        "Role-based authentication",
        "Doctor verification workflow",
        "MongoDB Atlas integration",
        "Responsive UI for all devices",
      ],

      outcome: [
        "Successfully deployed on Vercel",
        "Supports Patient, Doctor & Admin roles",
        "Demonstrates real-time queue management",
        "Improves appointment management workflow",
      ],

      learned: [
        "React Component Design",
        "Python Flask Backend",
        "MongoDB Atlas",
        "Authentication & Authorization",
        "Git & GitHub",
        "Deployment using Vercel",
        "Responsive Web Design",
      ],
    },
  },

  // Future projects go here
/*
 {
  id: 2,

  title: "Personal Portfolio",

  subtitle: "Modern Responsive Developer Portfolio",

  description:
    "A personal portfolio website built using React and Vite to showcase projects, technical skills, certifications and experience with a clean modern UI.",

  status: "Completed",

  role: "Frontend Developer",

  duration: "Jul 2026",

  github: "https://github.com/pramodhegde7",

  live: "https://your-portfolio.vercel.app",

  images: [
  {
    title: "Home",
    src: home,
  },
  {
    title: "About",
    src: doctor,
  },
  {
    title: "Skills",
    src: admin,
  },
  {
    title: "Projects",
    src: patient,
  },
  {
    title: "Contact",
    src: queue,
  },
],

  metrics: [
    "🌐 Responsive",
    "⚡ Fast Performance",
    "🎨 Modern UI",
    "🚀 Vercel",
    "📱 Mobile Friendly",
  ],

  technologies: [
    "React",
    "Vite",
    "CSS3",
    "JavaScript",
    "React Icons",
    "Vercel",
  ],

  features: [
    "Responsive Design",
    "Project Showcase",
    "Screenshot Gallery",
    "Dark Theme",
    "Contact Form",
    "Smooth Animations",
  ],

  caseStudy: {
    problem:
      "Developers need a professional portfolio to showcase their work and technical skills to recruiters.",

    solution:
      "Built a clean and responsive portfolio with reusable React components, modern UI and project showcase.",

    challenges: [
      "Creating responsive layouts",
      "Improving performance",
      "Design consistency",
      "Smooth animations",
    ],

    outcome: [
      "Professional online portfolio",
      "Responsive across devices",
      "Easy to maintain",
      "Fast loading",
    ],

    learned: [
      "React",
      "Component Design",
      "Responsive CSS",
      "Performance Optimization",
      "Deployment",
    ],
  },
},
*/
];


export default projects;