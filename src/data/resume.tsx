import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Damilola Oni",
  initials: "DV",
  url: "https://dillion.io",
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Frontend Engineer. I love building things and helping people. Very active on Twitter.",
  summary:
    "I am a frontend developer with over 1 year of experience, specializing in HTML, CSS, JavaScript, and ReactJS. I am passionate about creating engaging and responsive user interfaces. I am open to work opportunities and always eager to learn and grow in my field.",
  avatarUrl: "/me.jpeg",
  skills: [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next.js",
    "Typescript",
    "Git"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "damilolaoni46@gmail.com",
    tel: "+2347079233733",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Onidamilola",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/oni-damilola-65757622a/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ODD_BLACK",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "D-Aggregate",
      href: "https://D-aggregate.com",
      badges: [],
      location: "full-time",
      title: "Frontend developer",
      logoUrl: "/codebg (3).png",
      start: "January 2024",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Styletisy",
      href: "https://styletisfy.com",
      badges: [],
      location: "Freelance",
      title: "Frontend developer",
      logoUrl: "/logo.png",
      start: "August 2024",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "AltSchool Africa",
      href: "https://altschoolafrica.com/",
      degree: "frontend engineer",
      logoUrl: "/altschool.png",
      start: "2022",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Alphageek",
      href: "https://alphageekwebapp.d-aggregate.com/",
      dates: "Jan 2024 - present",
      active: true,
      description:
        "I developed a merchandizing app using ReactJS, taking charge of the entire frontend development process. The app is designed to collect data from merchandizing agents in the field, streamlining the data collection process and enhancing the efficiency of merchandizing operations.",
      technologies: [
        "react.js",
        "Javascript",
        "MySQL",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://alphageekwebapp.d-aggregate.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Memory Game",
      href: "https://magicui.design",
      dates: "June 2024",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "HTMl",
        "javascript",
        "Laravel",
        "Ajax",
       
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Update-project",
      href: "https://update-knowledge.vercel.app/",
      dates: "July 2024",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "React.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://update-knowledge.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Onidamilola/Update-project/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Styletisfy",
      href: "https://styletisfyecommerce.vercel.app/",
      dates: "August 2024",
      active: true,
      description:
        " transitioning the platform from a Bootstrap-based architecture to Next.js. This involved optimizing the user interface for improved performance, implementing responsive designs, and ensuring seamless integration with backend services. The project enhanced the website's speed, scalability, and user experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      // video:
        // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
 } as const;
