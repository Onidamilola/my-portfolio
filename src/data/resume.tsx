import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Damilola Oni",
  initials: "DO",
  url: "https://damilola-portfolio-mauve.vercel.app/",
  location: "Sheffield, United Kingdom",
  locationLink: "https://www.google.com/maps/place/Sheffield",
  description:
    "Web developer working with React, Next.js, Python and AI tools. M.Sc. Computing with Cloud Technologies student in Sheffield, UK.",
  summary:
    "I'm a web developer with 3+ years of experience building, maintaining and troubleshooting live web applications used by 500+ field agents and 100+ staff. I work across **JavaScript/TypeScript, React and Next.js** on the frontend and **Python, Flask and SQL** on the backend, and I deploy to **Microsoft Azure** and Vercel with CI/CD pipelines.\n\nI'm currently studying for an **M.Sc. in Computing with Cloud Technologies at Sheffield Hallam University**, where I'm learning machine learning, building neural networks and RNNs from scratch, and training models with Azure Machine Learning. I enjoy turning the needs of non-technical users into clear, easy-to-use tools, and I'm open to software engineering roles in the UK.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "Flask",
    "SQL",
    "PostgreSQL",
    "REST APIs",
    "Redux",
    "Tailwind CSS",
    "Jest",
    "Docker",
    "Microsoft Azure",
    "Azure Machine Learning",
    "CI/CD (GitHub Actions, Azure DevOps)",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/#projects", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "damilolaoni46@gmail.com",
    tel: "+447423683215",
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
        url: "mailto:damilolaoni46@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Sheffield Hallam University",
      href: "https://www.shu.ac.uk/",
      badges: [],
      location: "Part-time",
      title: "Student Mentor",
      logoUrl: "",
      start: "October 2026",
      end: "Present",
      description:
        "Support fellow students one-to-one and in groups as they settle into university, helping them find their way around online learning systems, study resources and university services. Explain academic and technical topics in plain, approachable language.",
    },
    {
      company: "Outcess Limited",
      href: "https://outcess.com",
      badges: [],
      location: "Full-time",
      title: "Frontend Developer",
      logoUrl: "",
      start: "June 2025",
      end: "December 2025",
      description:
        "Built and maintained React/TypeScript frontends for the U-Connect and CRM platforms used by 100+ employees, integrating REST APIs with backend teams and resolving production issues. Delivered HR dashboards (attendance, leave, payroll) that reduced manual data-entry errors by 30%, and modularised application logic into reusable, well-tested components, lifting development efficiency by 25%.",
    },
    {
      company: "D-Aggregate",
      href: "https://D-aggregate.com",
      badges: [],
      location: "Full-time",
      title: "Frontend Developer",
      logoUrl: "/codebg (3).png",
      start: "January 2024",
      end: "May 2025",
      description:
        "Led frontend development of Alphageek, a large-scale merchandising platform supporting 500+ field agents across Nigeria, working closely with backend teams on REST API design and data flow. Improved application performance by 35% through optimised Redux state management, and increased user adoption by 40% with intuitive interfaces for non-technical field users.",
    },
    {
      company: "Styletisfy",
      href: "https://styletisfy.com",
      badges: [],
      location: "Freelance",
      title: "Frontend Engineer",
      logoUrl: "/logo.png",
      start: "August 2024",
      end: "December 2024",
      description:
        "Migrated a legacy Bootstrap application to Next.js/React with TypeScript, improving page-load speed and overall performance by 40%. Integrated REST APIs to reduce frontend-backend latency by 20%, and boosted SEO and organic traffic by 25% using server-side rendering.",
    },
  ],
  education: [
    {
      school: "Sheffield Hallam University",
      href: "https://www.shu.ac.uk/",
      degree: "M.Sc. Computing with Cloud Technologies",
      logoUrl: "",
      start: "2026",
      end: "Present",
    },
    {
      school: "AltSchool Africa",
      href: "https://altschoolafrica.com/",
      degree: "Frontend Engineering Certificate",
      logoUrl: "/altschool.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "Adekunle Ajasin University",
      href: "https://aaua.edu.ng/",
      degree: "B.Sc. Plant Science and Biotechnology",
      logoUrl: "",
      start: "2014",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Coldline",
      href: "https://coldchain-frontend-gbdrhfdnf3hfa0fv.uksouth-01.azurewebsites.net/",
      dates: "2026 · M.Sc. project",
      active: true,
      description:
        "A cold-chain logistics monitoring dashboard that streams live sensor telemetry (temperature, humidity and shock) from connected cold boxes. It charts readings against a safe temperature band, logs threshold breaches, lets admins send commands to devices, configure thresholds and manage users. Deployed on Microsoft Azure.",
      technologies: [
        "React",
        "Vite",
        "IoT telemetry",
        "Microsoft Azure",
        "Azure App Service",
      ],
      links: [
        {
          type: "Website",
          href: "https://coldchain-frontend-gbdrhfdnf3hfa0fv.uksouth-01.azurewebsites.net/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/coldline.jpg",
    },
    {
      title: "NaijaCipe",
      href: "https://github.com/c5061369/Naija-CIPE",
      dates: "2026 · M.Sc. project",
      active: true,
      description:
        "A full-stack Nigerian recipe platform built with Python and Flask. Users can register or sign in with Google, browse recipes and stores, save favourites and leave reviews; admins manage recipes, categories, users and approve reviews from a dashboard. Built with Flask blueprints, SQLAlchemy models and migrations, and deployed with Gunicorn.",
      technologies: [
        "Python",
        "Flask",
        "SQLAlchemy",
        "Google OAuth",
        "Jinja",
        "SQL",
        "Gunicorn",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/c5061369/Naija-CIPE",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "U-Connect (Outcess)",
      href: "",
      dates: "June 2025 - December 2025",
      active: true,
      description:
        "Internal staff platform at Outcess Limited used by 100+ employees. I built and maintained React/TypeScript frontends, integrated REST APIs with the backend team, and delivered HR dashboards for attendance, leave and payroll that cut manual data-entry errors by 30% through better validation and UX. Source code is private to the company.",
      technologies: ["React", "TypeScript", "REST APIs", "Tailwind CSS"],
      links: [],
      image: "",
    },
    {
      title: "RouteMind AI",
      href: "https://route-mind-ai-liart.vercel.app/",
      dates: "2026 · Personal project",
      active: true,
      description:
        "An AI support agent concept for logistics teams that answers \"Where is my package?\" questions automatically. Includes an AI chat assistant, a live shipment-tracking page and an admin dashboard, with smart escalation to human agents.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI chat", "Vercel"],
      links: [
        {
          type: "Website",
          href: "https://route-mind-ai-liart.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/routemind.jpg",
    },
    {
      title: "AI Care Predict",
      href: "https://ai-care-one.vercel.app/",
      dates: "2026 · Personal project",
      active: true,
      description:
        "A personalised health-monitoring dashboard that tracks heart rate, oxygen saturation and respiratory rate, charts trends over time and predicts flare-up risk. Includes AI analysis and insights, a risk score, health advisories and a built-in care assistant chat.",
      technologies: ["Next.js", "React", "TypeScript", "Recharts", "Tailwind CSS", "AI", "Vercel"],
      links: [
        {
          type: "Website",
          href: "https://ai-care-one.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/ai-care.jpg",
    },
    {
      title: "Alphageek",
      href: "https://alphageekwebapp.d-aggregate.com/",
      dates: "Jan 2024 - May 2025",
      active: true,
      description:
        "I developed a merchandising app using ReactJS, taking charge of the entire frontend development process. The app is designed to collect data from merchandising agents in the field, streamlining the data collection process and enhancing the efficiency of merchandising operations.",
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
    },
    {
      title: "Styletisfy",
      href: "https://styletisfyecommerce.vercel.app/",
      dates: "August 2024",
      active: true,
      description:
        "Transitioned the platform from a Bootstrap-based architecture to Next.js. This involved optimizing the user interface for improved performance, implementing responsive designs, and ensuring seamless integration with backend services. The project enhanced the website's speed, scalability, and user experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://styletisfyecommerce.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Update-project",
      href: "https://update-knowledge.vercel.app/",
      dates: "July 2024",
      active: true,
      description:
        "Created an open-source platform for sharing and expanding knowledge across diverse fields, enabling users to upload and update content effortlessly.",
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
    },
    {
      title: "Guinness scan_X",
      href: "https://gdmgroup-scan-x-q338c.ondigitalocean.app/",
      dates: "November 2024",
      active: true,
      description:
        "Scan_X is an interactive prize wheel with customizable sections and engaging animations, perfect for promotions and gamification. Built with HTML, CSS, and JavaScript, it offers a responsive, dynamic user experience.",
      technologies: [
        "HTML",
        "CSS",
        "javascript",
        "Ajax",
      ],
      links: [
        {
          type: "Website",
          href: "https://gdmgroup-scan-x-q338c.ondigitalocean.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
  ],
} as const;
