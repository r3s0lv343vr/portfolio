export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-100 via-indigo-100 to-violet-100 dark:from-slate-950 dark:via-indigo-950 dark:to-violet-950"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(99,102,241,0.2),transparent_50%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(99,102,241,0.45),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_10%,rgba(59,130,246,0.15),transparent_55%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_80%_10%,rgba(59,130,246,0.35),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_70%_80%,rgba(139,92,246,0.12),transparent_50%)] dark:bg-[radial-gradient(ellipse_60%_70%_at_70%_80%,rgba(139,92,246,0.3),transparent_50%)]"
        aria-hidden
      />

      <div
        className="hero-gradient-orb pointer-events-none absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-purple-500/20 blur-3xl dark:from-blue-500/30 dark:via-indigo-500/20 dark:to-purple-600/30 sm:h-96 sm:w-96 md:h-[32rem] md:w-[32rem]"
        aria-hidden
      />
      <div
        className="hero-gradient-orb-delayed pointer-events-none absolute -left-24 bottom-1/4 h-48 w-48 rounded-full bg-gradient-to-tr from-violet-400/15 via-blue-400/10 to-indigo-300/15 blur-3xl dark:from-violet-600/25 dark:via-blue-500/15 dark:to-indigo-400/25 sm:h-72 sm:w-72 md:h-96 md:w-96"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black,transparent)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-blue-300/60 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 backdrop-blur-sm dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-200 sm:px-4 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75 dark:bg-blue-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400" />
            </span>
            Available for new opportunities
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              Craig Ferguson
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg md:text-xl dark:text-slate-300/90">
            I turn ideas, data, and economic insights into practical digital
            tools. With a background in economics, data analysis, and
            econometrics, I build solutions that make information clearer,
            support smarter decisions, and improve everyday workflows.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/35 dark:shadow-blue-500/30 dark:hover:shadow-blue-500/45 sm:w-auto"
            >
              View my work
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur-sm transition-colors hover:border-slate-400 hover:bg-white sm:w-auto dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/35 dark:hover:bg-white/10"
            >
              Contact me
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 sm:mt-16 sm:flex sm:flex-wrap sm:gap-8 sm:pt-10 dark:border-white/15">
            {[
              { value: "5+", label: "Years experience" },
              { value: "30+", label: "Projects delivered" },
              { value: "15+", label: "Happy clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-2xl dark:from-blue-300 dark:to-purple-300">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
