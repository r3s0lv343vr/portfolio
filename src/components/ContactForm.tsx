"use client";

import { FormEvent, useState } from "react";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const initialForm: FormFields = {
  name: "",
  email: "",
  message: "",
};

function validateField(name: keyof FormFields, value: string): string {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
      if (value.trim().length > 100) return "Name must be under 100 characters.";
      return "";
    case "email":
      if (!value.trim()) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
        return "Please enter a valid email address.";
      return "";
    case "message":
      if (!value.trim()) return "Message is required.";
      if (value.trim().length < 10)
        return "Message must be at least 10 characters.";
      if (value.trim().length > 1000)
        return "Message must be under 1,000 characters.";
      return "";
    default:
      return "";
  }
}

function validateForm(form: FormFields): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(form) as (keyof FormFields)[]).forEach((key) => {
    const error = validateField(key, form[key]);
    if (error) errors[key] = error;
  });
  return errors;
}

const inputBase =
  "w-full rounded-lg border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500";
const inputValid =
  "border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:focus:border-indigo-500/60 dark:focus:ring-indigo-500/20";
const inputInvalid =
  "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 dark:border-red-500/60 dark:focus:border-red-500/60 dark:focus:ring-red-500/20";

export default function ContactForm() {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const field = name as keyof FormFields;

    setForm((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error || undefined }));
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const field = name as keyof FormFields;

    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error || undefined }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    // Simulate network request — replace with Formspree, Resend, etc.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setSubmitted(true);
  }

  function handleReset() {
    setForm(initialForm);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div
        className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-500/20 dark:bg-emerald-500/5 sm:p-10"
        role="status"
        aria-live="polite"
      >
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Message sent!</h3>
        <p className="mt-2 max-w-sm text-slate-600 dark:text-slate-400">
          Thanks for reaching out, {form.name.split(" ")[0]}. I&apos;ll get back
          to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-8 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:border-white/15 dark:text-slate-300 dark:hover:border-white/30 dark:hover:bg-white/5 dark:hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/40 sm:p-6 md:p-8"
      aria-label="Contact form"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Send a message</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          All fields are required. I typically respond within 1–2 business days.
        </p>
      </div>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Name <span className="text-indigo-600 dark:text-indigo-400" aria-hidden>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Craig Ferguson"
            aria-invalid={Boolean(errors.name && touched.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${inputBase} ${errors.name && touched.name ? inputInvalid : inputValid}`}
          />
          {errors.name && touched.name && (
            <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400" role="alert">
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Email <span className="text-indigo-600 dark:text-indigo-400" aria-hidden>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email && touched.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${inputBase} ${errors.email && touched.email ? inputInvalid : inputValid}`}
          />
          {errors.email && touched.email && (
            <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400" role="alert">
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Message <span className="text-indigo-600 dark:text-indigo-400" aria-hidden>*</span>
            </label>
            <span
              className={`text-xs ${form.message.length > 1000 ? "text-red-400" : "text-slate-500"}`}
              aria-live="polite"
            >
              {form.message.length}/1000
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tell me about your project, idea, or opportunity..."
            aria-invalid={Boolean(errors.message && touched.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputBase} resize-y min-h-[120px] ${errors.message && touched.message ? inputInvalid : inputValid}`}
          />
          {errors.message && touched.message && (
            <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400" role="alert">
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : (
            "Send message"
          )}
        </button>
      </div>
    </form>
  );
}
