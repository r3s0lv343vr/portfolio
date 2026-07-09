export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  imageGradient: string;
}

export const projects: Project[] = [
  {
    id: "economic-dashboard",
    title: "Economic Data Dashboard",
    description:
      "Interactive dashboard for visualizing macroeconomic indicators, trends, and regional comparisons with filterable charts and exportable reports.",
    tags: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    href: "#",
    imageGradient: "from-blue-600 via-indigo-600 to-violet-700",
  },
  {
    id: "econometrics-toolkit",
    title: "Econometrics Analysis Toolkit",
    description:
      "Web-based toolkit for running regression analysis, forecasting models, and statistical tests with clear, interpretable output for research workflows.",
    tags: ["React", "Python", "Pandas", "Tailwind CSS"],
    href: "#",
    imageGradient: "from-indigo-600 via-purple-600 to-fuchsia-700",
  },
  {
    id: "policy-impact-simulator",
    title: "Policy Impact Simulator",
    description:
      "Decision-support application that models policy scenarios, estimates outcomes, and presents results through intuitive data visualizations.",
    tags: ["Next.js", "R", "Chart.js", "Supabase"],
    href: "#",
    imageGradient: "from-cyan-600 via-blue-600 to-indigo-700",
  },
];
