import { FadeInUp } from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <FadeInUp>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Contact
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl dark:text-white">
                Let&apos;s work together
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base dark:text-slate-400">
                Have a project in mind or want to discuss an opportunity? I&apos;d
                love to hear from you. Fill out the form and I&apos;ll get back to
                you as soon as possible.
              </p>

              <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
                {[
                  {
                    label: "Email",
                    value: "craig.ferguson@email.com",
                    href: "mailto:craig.ferguson@email.com",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    ),
                  },
                  {
                    label: "Location",
                    value: "San Francisco, CA",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    ),
                  },
                  {
                    label: "LinkedIn",
                    value: "linkedin.com/in/craigferguson",
                    href: "https://linkedin.com",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="break-all text-sm text-slate-900 transition-colors hover:text-indigo-600 sm:break-normal sm:text-base dark:text-white dark:hover:text-indigo-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 dark:text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <ContactForm />
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
