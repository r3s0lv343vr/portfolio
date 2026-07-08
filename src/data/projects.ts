export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack online store with product catalog, cart, checkout, and admin dashboard. Built for performance and scalability.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    href: "#",
    github: "#",
    featured: true,
  },
  {
    id: "task-manager",
    title: "Task Manager App",
    description:
      "Collaborative project management tool with real-time updates, drag-and-drop boards, and team workspaces.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    href: "#",
    github: "#",
    featured: true,
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Beautiful weather app with location search, 7-day forecasts, and interactive charts for temperature and precipitation.",
    tags: ["React", "Tailwind CSS", "OpenWeather API"],
    href: "#",
    github: "#",
  },
  {
    id: "ai-content-writer",
    title: "AI Content Writer",
    description:
      "SaaS tool that helps marketers generate blog posts, social captions, and ad copy using large language models.",
    tags: ["Next.js", "OpenAI", "Prisma", "Vercel"],
    href: "#",
    github: "#",
    featured: true,
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description:
      "Mobile-first PWA for logging workouts, tracking progress, and setting personal fitness goals with visual analytics.",
    tags: ["React Native", "Expo", "Firebase"],
    href: "#",
    github: "#",
  },
  {
    id: "portfolio-cms",
    title: "Portfolio CMS",
    description:
      "Headless CMS tailored for creatives to manage projects, case studies, and blog posts with a clean editing experience.",
    tags: ["Next.js", "Sanity", "Tailwind CSS"],
    href: "#",
    github: "#",
  },
];
