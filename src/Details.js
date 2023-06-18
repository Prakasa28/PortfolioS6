// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Prakasa",
  tagline: "I build things for web",
  img: profile,
  about: `Hi, I'm Prakasa, a frontend developer with a passion for creating beautiful and intuitive user interfaces. I have experience working with various frontend technologies such as HTML, CSS, JavaScript, and React. With a keen eye for design and a strong understanding of user experience, I strive to deliver engaging and impactful digital experiences.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "All rounder web developer",
    Company: `Tellow`,
    Location: "Amsterdam, The Netherlands",
    Type: "Internship",
    Duration: "Sep 2022 - Jan 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "ICT and media design",
    Company: "Fontys university of applied sciences",
    Location: "Eindhoven, The Netherlands",
    Type: "Full Time",
    Duration: "Feb 2020 - Present",
  },
  {
    Position: "Diploma in Electronics & Communication",
    Company: `PSG college of technology`,
    Location: "Coimbatore,India",
    Type: "Full Time",
    Duration: "Jun 2016 - Apr 2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Portfolio-Individual Project",
    image: projectImage1,
    description: ``,
    path: "/individualProject",
  },
  {
    title: "Noise control-Group Project",
    image: projectImage2,
    description: ``,
    path: "/groupProject",
  },
  {
    title: "Empathic Building-International Project",
    image: projectImage3,
    description: ``,
    path: "/internationalProject",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "prakasa1101@gmail.com",
  phone: "+91 12345 67890",
};
