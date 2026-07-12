"use client";

import * as motion from "motion/react-client";
import { useParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "../../components/themeToggle";
import { reflections } from "@/data/reflections";

export default function ReflectionEntryPage() {
  const { slug } = useParams();
  const entry = reflections.find((e) => e.slug === slug);

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="w-full border-b border-warm-200">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="/reflections"
            className="text-sm text-warm-400 hover:text-warm-700 transition-colors duration-300"
          >
            &larr; reflections
          </a>
          <ThemeToggle />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {entry ? (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-px bg-accent mb-4" />
            <p className="text-sm text-warm-400 tracking-wide mb-2">
              {entry.date}
            </p>
            <h1 className="text-3xl md:text-4xl font-serif text-warm-900 tracking-tight mb-8">
              {entry.title}
            </h1>
            <div className="space-y-5">
              {entry.body
                .trim()
                .split(/\n\n+/)
                .map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-warm-600 leading-relaxed whitespace-pre-line"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </motion.article>
        ) : (
          <div>
            <div className="w-8 h-px bg-accent mb-4" />
            <h1 className="text-3xl md:text-4xl font-serif text-warm-900 tracking-tight mb-6">
              Entry not found.
            </h1>
            <a
              href="/reflections"
              className="group inline-flex items-center gap-1.5 text-warm-800 transition-colors duration-300 hover:text-accent cursor-pointer"
            >
              Back to reflections
              <ArrowUpRight
                size={16}
                className="text-warm-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
