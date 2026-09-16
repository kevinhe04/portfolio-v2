"use client";

import Navbar from "./components/navbar";
import { ArrowUpRight } from "lucide-react";
import Menu from "./components/menu";
import * as motion from "motion/react-client";
import ListRow from "@/components/listRow";
import ProjectsSection from "@/components/projectsSection";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay },
});

function Divider() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="h-px bg-gradient-to-r from-transparent via-warm-200 to-transparent" />
    </div>
  );
}

const headline =
  "McGill Software Engineering - I find robots really cool!";

const socialLinks = [
  { url: "https://www.linkedin.com/in/kvinhe/", label: "LinkedIn" },
  { url: "https://github.com/kevinhe04", label: "GitHub" },
  { url: "mailto:kvn.04he@gmail.com", label: "Email" },
  { url: "https://www.instagram.com/kvin.he/", label: "Instagram" },
  { url: "https://www.youtube.com/@kvinhe", label: "YouTube" },
];

export default function Home() {
  return (
    <div className="bg-warm-50 min-h-screen">
      <Navbar />
      <Menu />

      <section id="home" className="px-4 pt-28 pb-10 md:pt-32">
        <div className="max-w-3xl mx-auto flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif italic text-warm-900 tracking-tight"
          >
            Kevin He
          </motion.h1>
          <motion.a
            href="/timeline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group inline-flex flex-shrink-0 items-center gap-1 text-sm text-warm-500 transition-colors duration-300 hover:text-accent cursor-pointer"
          >
            Timeline
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-warm-600"
          >
            {headline}
          </motion.p>
        </div>
      </section>

      <Divider />

      <section id="experience" className="py-10 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp()} className="mb-6">
            <div className="w-8 h-px bg-accent mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif text-warm-900">
              Experience.
            </h2>
          </motion.div>
          <div className="divide-y divide-warm-200/70">
            <motion.div {...fadeUp(0)}>
              <ListRow
                dates="Jun 2026 — Present"
                title="Systems Integration Engineer Intern"
                subtitle="AWL-Electricity · Montreal, Canada"
                meta={["C++", "Python", "Altium", "PCB bring-up"]}
                link="https://www.awl-e.com/"
              />
            </motion.div>
            <motion.div {...fadeUp(0.06)}>
              <ListRow
                dates="Sep — Dec 2025"
                title="AI Software Developer Intern"
                subtitle="Autodesk · Montreal, Canada"
                meta={["Python", "AWS", "Docker", "Multi-agent systems", "RAG"]}
                link="https://www.autodesk.com/"
              />
            </motion.div>
            <motion.div {...fadeUp(0.12)}>
              <ListRow
                dates="May — Aug 2025"
                title="Mobile Developer Intern"
                subtitle="Sun Life Financial · Montreal, Canada"
                meta={["Swift", "SwiftUI", "TypeScript", "Angular", "Ionic"]}
                link="https://www.sunlife.ca/en/"
              />
            </motion.div>
            <motion.div {...fadeUp(0.18)}>
              <ListRow
                dates="May — Aug 2024"
                title="Software Developer Intern"
                subtitle="Tedy · Montreal, Canada"
                meta={["TypeScript", "Next.js", "PostgreSQL", "Retool"]}
                link="https://www.tedy.app/?r=0"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Divider />

      <ProjectsSection />

      <Divider />

      <section id="accolades" className="py-10 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp()} className="mb-6">
            <div className="w-8 h-px bg-accent mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif text-warm-900">
              Accolades.
            </h2>
          </motion.div>
          <div className="divide-y divide-warm-200/70">
            {/* TODO: fill in the year and, if you like, the title of your piece / prize category */}
            <motion.div {...fadeUp(0.06)}>
              <ListRow
                title="Pitch Competition Winner"
                dates="1st Place"
                blurb="JHKCBA's iPitch Competition · 2025"
                link="https://www.instagram.com/p/DHgafWkg_4Z/"
              />
            </motion.div>
            <motion.div {...fadeUp(0.06)}>
              <ListRow
                title="RCM Level 10 Piano"
                dates="Quebec Gold Medalist"
                blurb="Awarded for the highest Level 10 piano examination mark in Quebec."
                link="https://rcmusic-kentico-cdn.s3.amazonaws.com/rcm/media/main/learning/quebec_book2021.pdf"
              />
            </motion.div>
            <motion.div {...fadeUp(0)}>
              <ListRow
                title="36ᵉ Concours littéraire français"
                dates="2nd Place"
                blurb="Prose · 5ᵉ secondaire · Mixte"
                link="https://drive.google.com/file/d/11GNb1nG4f0VEkx4P7qUbTt0eO3LlwVKR/view"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Divider />

      <section id="contact" className="py-10 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp()} className="mb-6">
            <div className="w-8 h-px bg-accent mb-4" />
            <h2 className="text-2xl md:text-3xl font-serif text-warm-900">
              Get in touch.
            </h2>
          </motion.div>
          <motion.div
            {...fadeUp(0.15)}
            className="flex flex-wrap gap-x-8 gap-y-4"
          >
            {socialLinks.map(({ url, label }) => {
              const external = url.startsWith("http");
              return (
                <a
                  key={label}
                  href={url}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-1.5 text-base text-warm-600 transition-colors duration-300 hover:text-accent cursor-pointer"
                >
                  {label}
                  <ArrowUpRight
                    size={16}
                    className="text-warm-300 opacity-0 -translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:text-accent group-hover:opacity-100"
                  />
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
