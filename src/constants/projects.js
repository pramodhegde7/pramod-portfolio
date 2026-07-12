import home from "../assets/project-images/Ayush-Link/home.png";
import patient from "../assets/project-images/Ayush-Link/patient.png";
import doctor from "../assets/project-images/Ayush-Link/doctor.png";
import admin from "../assets/project-images/Ayush-Link/admin.png";
import verification from "../assets/project-images/Ayush-Link/verification.png";

const projects = [
  {
    title: "Ayush-Link",

    featured: true,

    description:
      "A Clinic Appointment & Live Queue Management System built using React, Flask and MongoDB. Patients can book appointments, monitor live queue status, and doctors can efficiently manage their daily schedule.",

    technologies: [
      "React",
      "Flask",
      "MongoDB",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    features: [
      "Live Queue Tracking",
      "Appointment Booking",
      "Doctor Dashboard",
      "Admin Dashboard",
      "Doctor Verification",
      "Digital Prescriptions",
    ],

    github: "https://github.com/pramodhegde7/Aayush-project",

    demo: "#",

    images: [
      home,
      patient,
      doctor,
      admin,
      verification,
    ],
  },
];

export default projects;