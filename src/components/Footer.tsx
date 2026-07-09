import { FadeInUp } from "@/components/AnimateOnScroll";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/SocialIcons";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/r3s0lv343vr",
    icon: GitHubIcon,
    hoverClass:
      "hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white dark:hover:shadow-white/5",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/craigferguson",
    icon: LinkedInIcon,
    hoverClass:
      "hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/craigferguson",
    icon: TwitterIcon,
    hoverClass:
      "hover:border-sky-400 hover:bg-sky-50 hover:text-sky-600 dark:hover:border-sky-500/40 dark:hover:bg-sky-500/10 dark:hover:text-sky-400",
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FadeInUp>
      <footer className="border-t border-slate-200 py-6 dark:border-white/10 sm:py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 text-center sm:flex-row sm:gap-6 sm:px-6 sm:text-left lg:px-8">
          <p className="text-xs text-slate-500 sm:text-sm">
            &copy; {year} Craig Ferguson. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon, hoverClass }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Craig Ferguson on ${label}`}
                className={`group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:shadow-lg ${hoverClass}`}
              >
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </FadeInUp>
  );
}
