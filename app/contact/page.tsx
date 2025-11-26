// © 2025 Arzu Kirici — All Rights Reserved

"use client";

import { FormEvent, useState } from "react";

const EMAIL = "arzukirici@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/arzu-kirici";
const GITHUB_URL = "https://github.com/agkirici";
const UPWORK_URL = "https://www.upwork.com/freelancers/~0135d7c36f12a8eba8?mp_source=share";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") || "").toString();
    const email = (formData.get("email") || "").toString();
    const message = (formData.get("message") || "").toString();

    const subject = encodeURIComponent(
      `Message from portfolio site${name ? ` – ${name}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    setStatus("sending");
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  };

  return (
    <main className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 md:flex-row">
        {/* Left: text + direct links */}
        <section className="md:w-1/2 space-y-5">
          <header className="space-y-2">
            <p className="text-sm font-medium text-sky-500">Contact</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s talk.
            </h1>
          </header>

          <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
            I work at the intersection of biology, data analysis and software
            development. If you&apos;re working in healthcare, pharma, or
            spatial biology and want to discuss a project, collaboration, or
            role, feel free to reach out.
          </p>

          <div className="flex gap-6">
            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 hover:bg-sky-600 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6 text-neutral-200"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 hover:bg-sky-600 transition-colors"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6 text-neutral-200"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* Upwork */}
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 hover:bg-sky-600 transition-colors"
              aria-label="Upwork"
            >
              <svg
                className="w-6 h-6 text-neutral-200"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
              </svg>
            </a>
          </div>

          <div className="space-y-2 text-xs text-neutral-400">
            <p className="font-semibold uppercase tracking-wide">
              How I usually collaborate
            </p>
            <ul className="list-disc space-y-1 pl-4">
              <li>Prototype small tools to test ideas quickly.</li>
              <li>Join existing teams as a hybrid biologist–developer.</li>
              <li>Help design data workflows for spatial and single-cell projects.</li>
            </ul>
          </div>
        </section>

        {/* Right: contact form */}
        <section className="md:w-1/2">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-50">
              Send a message
            </h2>
            <p className="mt-1 text-xs text-neutral-400">
              This form opens an email draft to {EMAIL}. No data is stored on
              the server.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-sm">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-neutral-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 outline-none focus:border-sky-500"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-neutral-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 outline-none focus:border-sky-500"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-neutral-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 outline-none focus:border-sky-500"
                  placeholder="What would you like to work on?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sent" ? "Email draft opened" : "Compose email"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
