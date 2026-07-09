import {
  FadeInUp,
  StaggerArticle,
  StaggerGrid,
} from "@/components/AnimateOnScroll";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-white/20"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeInUp className="mb-10 max-w-2xl sm:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Projects
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl dark:text-white">
            Selected work
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:mt-4 sm:text-base dark:text-slate-400">
            A collection of projects that showcase my skills in data analysis,
            economics, and building practical digital tools.
          </p>
        </FadeInUp>

        <StaggerGrid className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerArticle
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100 dark:border-white/10 dark:bg-slate-900/40 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/10"
            >
              <div
                className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.imageGradient}`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  <svg className="h-8 w-8 text-white/80" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <span className="absolute bottom-3 left-3 rounded-md bg-black/30 px-2 py-1 text-xs font-medium text-white/70 backdrop-blur-sm">
                  Placeholder
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
                  {project.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-indigo-500"
                >
                  View Project
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </StaggerArticle>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
