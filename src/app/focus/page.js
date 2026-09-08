"use client";

import * as motion from "motion/react-client";
import ThemeToggle from "../components/themeToggle";
import { focus, journal } from "@/data/focus";

// Newest first, without mutating the source array.
const entries = [...journal].sort((a, b) => b.dateISO.localeCompare(a.dateISO));

export default function FocusPage() {
  return (
    <div className="min-h-screen bg-warm-50">
      <div className="w-full border-b border-warm-200">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="/"
            className="text-sm text-warm-400 hover:text-warm-700 transition-colors duration-300"
          >
            &larr; home
          </a>
          <ThemeToggle />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="w-8 h-px bg-accent mb-4" />
          <p className="text-sm text-warm-400 tracking-wide mb-2">
            Current focus
          </p>
          <h1 className="text-3xl md:text-4xl font-serif text-warm-900 tracking-tight mb-4">
            {focus.label}.
          </h1>
          <p className="text-warm-500 leading-relaxed">{focus.intro}</p>
        </motion.header>

        <div className="space-y-12 divide-y divide-warm-200/70">
          {entries.map((entry, i) => (
            <motion.article
              key={entry.dateISO + entry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className={i === 0 ? "" : "pt-12"}
            >
              <p className="text-sm text-warm-400 tracking-wide mb-2">
                {entry.date}
              </p>
              <h2 className="text-2xl font-serif text-warm-900 tracking-tight mb-5">
                {entry.title}
              </h2>
              <div className="space-y-5">
                {/*
                  Blank lines split paragraphs; single newlines are just the
                  editor's wrapping, so they collapse back into spaces.
                */}
                {entry.body
                  .trim()
                  .split(/\n\n+/)
                  .map((paragraph, j) => (
                    <p key={j} className="text-warm-600 leading-relaxed">
                      {paragraph.replace(/\s*\n\s*/g, " ")}
                    </p>
                  ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
