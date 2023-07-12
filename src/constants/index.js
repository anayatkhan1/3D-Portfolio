import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    mui,
    // rapid,
    // openai,
    framer,
    meta,
    starbucks,
    tesla,
    shopify,
    tshirt,
    cat,
    article,
    threejs,
    fitness,
    portfolio,
    clone
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
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Material UI",
      icon: mui,
    },
    {
      name: "Framer motion",
      icon: framer,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "openai api",
    //   icon: openai,
    // },
    // {
    //   name: "rapid api",
    //   icon: rapid,
    // },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
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
      live_link: "https://aishirtprint.netlify.app/"
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
      live_link: "https://theshowcaseai.netlify.app/"
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
        }
      ],
      image: article,
      source_code_link: "https://github.com/anayatkhan1/AI-Summarizer",
      live_link: "https://aisummarizeapp.netlify.app/"
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
        }
      ],
      image: fitness,
      source_code_link: "https://github.com/anayatkhan1/Fitness-App",
      live_link: "https://gymworkoutapp.netlify.app/"
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
        }
      ],
      image: portfolio,
      source_code_link: "https://github.com/anayatkhan1/3D-Portfolio",
      live_link: "https://anayatkhan.netlify.app/"
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
        }
      ],
      image: clone,
      source_code_link: "https://github.com/anayatkhan1/chatgpt-clone",
      live_link: "https://gptclonesite.netlify.app/"
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };