// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import laravell from "./assets/tech_logo/laravell.png";
import phpl from "./assets/tech_logo/phpl.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Education Section Logo's
import smk1Logo from "./assets/education_logo/smkn1_logo.png";
import vsicsLogo from "./assets/education_logo/smp1_logo.png";

// Project Section Logo's
import cryptoLogo from "./assets/work_logo/crypto-app.png";
import pasteAppLogo from "./assets/work_logo/paste-app.png";
import quizAppLogo from "./assets/work_logo/quiz-app.png";
import todoListLogo from "./assets/work_logo/to-do-list.png";
import weatherAppLogo from "./assets/work_logo/weather-app.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Laravel", logo: laravell },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "PHP", logo: phpl },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: smk1Logo,
    school: "SMK NEGERI 1 CIOMAS",
    date: "2023 - Present",
    grade: "Bogor",
    desc: "Saya sedang menempuh pendidikan di SMKN 1 Ciomas dengan jurusan Pengembangan Perangkat Lunak dan Gim. Selama belajar di SMKN 1 Ciomas, saya memperoleh dasar yang kuat dalam pemrograman, pengembangan perangkat lunak, dan prinsip-prinsip dasar ilmu komputer. Saya telah mempelajari berbagai mata pelajaran seperti Struktur Data, Algoritma, Pemrograman Berorientasi Objek, Jaringan Komputer, Sistem Manajemen Basis Data, Pengembangan Web, serta Rekayasa Perangkat Lunak. Pengalaman saya di SMKN 1 Ciomas sangat berperan penting dalam membentuk kemampuan teknis dan pengembangan profesional saya.",
    degree: "Pengembangan Perangkat Lunak Dan Game",
  },
  {
    id: 1,
    img: vsicsLogo,
    school: "SMP NEGERI 1 CIOMAS",
    date: "2021 - 2023",
    grade: "Bogor",
    desc: "Saya menyelesaikan pendidikan tingkat Sekolah Menengah Pertama (SMP) di SMPN 1 Ciomas. Selama masa sekolah, saya tidak hanya memperoleh dasar-dasar ilmu pengetahuan umum seperti Matematika, IPA, dan Bahasa, tetapi juga mengembangkan disiplin, keterampilan komunikasi, dan kerja sama tim. Pengalaman di SMPN 1 Ciomas menjadi fondasi penting bagi perjalanan pendidikan",
    degree: "",
  },
];

export const projects = [
  {
    id: 0,
    title: "Paste App",
    description:
      "A simple and efficient pastebin application that allows users to store and share text snippets. Built using React.js, it offers a user-friendly interface for easy pasting and sharing of code snippets or notes.",
    image: pasteAppLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "",
    webapp: "",
  },
  {
    id: 1,
    title: "Todo List",
    description:
      "A simple and effective to-do list application that helps users manage their tasks efficiently. Built using React.js, it features task creation, editing, and deletion functionalities for a seamless user experience.",
    image: todoListLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "",
    webapp: "",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A weather application that provides real-time weather updates and forecasts. Built using React.js, it fetches data from external APIs to deliver accurate weather information based on user location.",
    image: weatherAppLogo,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "",
    webapp: "",
  },
];
