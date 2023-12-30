import {
  mobile,
  backend,
  creator,
  ven,
  web,
  // typescript,
  html,
  css,
  reactjs,
  nextjs,
  jest,
  playwrite,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  mui,
  //rapid,
  //openai,
  framer,
  meta,
  starbucks,
  tesla,
  shopify,
  sampyl,
  tshirt,
  cat,
  article,
  threejs,
  fitness,
  portfolio,
  clone,
  typescript,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Next JS",
    icon: nextjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Framer Motion",
    icon: framer,
  },

  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Playwrite",
    icon: playwrite,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Sampyl",
    icon: sampyl,
    iconBg: "#383E56",
    date: "June 2023 - Dec 2023",
    points: [
      "Led the development of pixel-perfect UIs for AI-driven web applications, employing Next.js, Tailwind CSS, TypeScript, and Shadcn/UI. Ensured mobile-friendly and responsive layouts while prioritizing SEO and performance optimization for a seamless user experience.",
      "Integrated REST APIs to facilitate seamless data exchange between the frontend and backend, contributing to the development of responsive and data-driven applications.",
      "Implemented Supabase authentication features to support user sign-in, sign-up, forgot password, and password reset functions within a system that utilizes cookie-based route protection for enhanced security.",
      "Effectively implemented Sanity CMS to manage and create blog content.",
      "Utilized Test-Driven Development (TDD) for precise unit testing, following the Arrange-Act-Assert (AAA) pattern. Proficient in crafting end-to-end (e2e) tests using Playwright for robust validation of critical scenarios."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Our team's MVP, his exceptional blend of creativity, technical mastery and dedication to our AI startup.",
    name: "Ven Vadlamani",
    designation: "Founder & CEO",
    company: "Sampyl",
    image: ven,
  },
];

const projects = [
  {
    name: "Design AI",
    description:
      "Create your unique and exclusive shirt with our brand-new AI 3D customization tool. Unleash your imagination and define your own style.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "white-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "openai api",
        color: "green-text-gradient",
      },
    ],
    image: tshirt,
    source_code_link: "https://github.com/anayatkhan1/Design-AI",
    live_link: "https://aishirtprint.netlify.app/",
  },
  {
    name: "Showcase AI",
    description:
      "This application to generate unique and creative high quality images based on user inputs or specific criteria and also learn from the other user prompt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "dalle",
        color: "white-text-gradient",
      },

      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
    ],
    image: cat,
    source_code_link: "https://github.com/anayatkhan1/Showcase-AI",
    live_link: "https://theshowcaseai.netlify.app/",
  },
  {
    name: "Summarizer AI",
    description:
      "This AI article summarizer is allows users to summarize long articles into shorter and more concise versions. The app is designed to be user-friendly and easy to use.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "white-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: article,
    source_code_link: "https://github.com/anayatkhan1/AI-Summarizer",
    live_link: "https://aisummarizeapp.netlify.app/",
  },
  {
    name: "Fitness",
    description:
      "This application allows users to learn about different exercises. It also includes a Youtube videos, so users can find each exercise details with youtube videos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "white-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/anayatkhan1/Fitness-App",
    live_link: "https://gymworkoutapp.netlify.app/",
  },
  {
    name: "3D Portfolio",
    description:
      "This website is a showcase of my skills as a web developer. It uses 3D graphics and animation to create a visually appealing and interactive experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "three js",
        color: "white-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/anayatkhan1/3D-Portfolio",
    live_link: "https://anayatkhan.netlify.app/",
  },
  {
    name: "Chatgpt clone",
    description:
      "The ChatGPT clone leverages the power of OpenAI's API to generate contextually relevant and coherent responses based on user input.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: clone,
    source_code_link: "https://github.com/anayatkhan1/chatgpt-clone",
    live_link: "https://gptclonesite.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
