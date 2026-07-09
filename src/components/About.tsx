import { FadeInUp, StaggerGrid, StaggerItem } from "@/components/AnimateOnScroll";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "GraphQL",
  "AWS",
  "Docker",
  "Figma",
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeInUp className="mb-10 max-w-2xl sm:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            About Me
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl dark:text-white">
            Building digital experiences that matter
          </h2>
        </FadeInUp>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <FadeInUp delay={0.1} className="space-y-5 text-sm leading-relaxed text-slate-600 sm:space-y-6 sm:text-base dark:text-slate-400">
            <p>
              I am an economics and data analysis professional building
              practical digital tools that transform ideas, data, and workflows
              into useful software solutions. With a background in economics,
              econometrics, and analytical problem-solving, I approach
              development through the lens of clarity, evidence, usability, and
              real-world impact.
            </p>
            <p>
              My work sits at the intersection of data analysis, economic
              reasoning, artificial intelligence, and product thinking. Whether
              I am designing an analytics tool, building a portfolio project, or
              turning an idea into a working application, I focus on creating
              solutions that make information clearer, support better decisions,
              and improve everyday workflows.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2} className="space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
              <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <StaggerGrid className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {[
                { title: "Frontend", desc: "React, Next.js, Vue" },
                { title: "Backend", desc: "Node, Python, Go" },
                { title: "Database", desc: "SQL, NoSQL, Redis" },
                { title: "DevOps", desc: "CI/CD, AWS, Vercel" },
              ].map((item) => (
                <StaggerItem
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-900/30"
                >
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
