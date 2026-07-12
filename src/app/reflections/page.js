"use client";

import * as motion from "motion/react-client";
import ListRow from "@/components/listRow";
import ThemeToggle from "../components/themeToggle";
import { reflections } from "@/data/reflections";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay },
});

const intro =
  "This is where I think out loud, a running log of how I am navigating life.";

export default function ReflectionsPage() {
  const entries = [...reflections].sort((a, b) =>
    b.dateISO.localeCompare(a.dateISO),
  );

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="w-full border-b border-warm-200">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="/"
            className="text-sm text-warm-400 hover:text-warm-700 transition-colors duration-300"
          >
            &larr; back
          </a>
          <ThemeToggle />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-8 h-px bg-accent mb-4" />
          <h1 className="text-4xl md:text-5xl font-serif italic text-warm-900 tracking-tight mb-6">
            Reflections.
          </h1>
          <p className="text-lg text-warm-600 leading-relaxed">{intro}</p>
        </motion.div>

        <div className="mt-12 divide-y divide-warm-200/70">
          {entries.map((entry, i) => (
            <motion.div key={entry.slug} {...fadeUp(i * 0.05)}>
              <ListRow
                title={entry.title}
                dates={entry.date}
                blurb={entry.excerpt}
                link={`/reflections/${entry.slug}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
