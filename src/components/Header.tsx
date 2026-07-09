"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function handleNavClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setMenuOpen(false);

    if (href === "#" || href === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-slate-200/80 bg-white/90 shadow-lg shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90 dark:shadow-black/30"
          : "bg-white/60 backdrop-blur-sm dark:bg-slate-950/40"
      }`}
    >
      <nav
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="text-base font-semibold tracking-tight text-slate-900 transition-opacity hover:opacity-80 dark:text-white sm:text-lg"
        >
          Portfolio<span className="text-indigo-600 dark:text-indigo-400">.</span>
        </a>

        <div className="flex items-center gap-2">
          {/* Desktop navigation — xl (1280px) and up */}
          <ul className="hidden items-center gap-6 xl:flex xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                Get in touch
              </a>
            </li>
          </ul>

          {/* Mobile & tablet controls */}
          <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-200 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/10"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-14 z-40 bg-slate-900/40 sm:top-16 xl:hidden dark:bg-black/50"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative z-50 border-t border-slate-200 bg-white/95 shadow-lg shadow-slate-200/50 backdrop-blur-xl xl:hidden dark:border-white/10 dark:bg-slate-950/95 dark:shadow-black/30"
            >
              <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block min-h-[44px] rounded-lg px-3 py-3 text-base font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="flex min-h-[44px] items-center justify-center rounded-full bg-indigo-600 px-4 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                  >
                    Get in touch
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
