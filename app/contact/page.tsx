"use client";

import { FormEvent, useState } from "react";

const EMAIL = "arzukirici@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/arzu-kirici";

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

          <div className="space-y-3 text-sm text-neutral-200">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Email
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
              >
                {EMAIL}
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                LinkedIn
              </p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
              >
                View my LinkedIn profile
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                GitHub
              </p>
              <a
                href="https://github.com/agkirici"
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
              >
                View my GitHub profile
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Upwork
              </p>
              <a
                href="https://www.upwork.com/freelancers/~0135d7c36f12a8eba8?mp_source=share"
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
              >
                View my Upwork profile
              </a>
            </div>
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
