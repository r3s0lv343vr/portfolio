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
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            About Me
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Building digital experiences that matter
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-slate-400 leading-relaxed">
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
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-lg font-semibold text-white">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-slate-900/50 px-3 py-1.5 text-sm font-medium text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Frontend", desc: "React, Next.js, Vue" },
                { title: "Backend", desc: "Node, Python, Go" },
                { title: "Database", desc: "SQL, NoSQL, Redis" },
                { title: "DevOps", desc: "CI/CD, AWS, Vercel" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-slate-900/30 p-5"
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
