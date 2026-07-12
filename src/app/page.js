"use client";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import { SocialIcon } from "react-social-icons";
import Menu from "./components/menu";
import * as motion from "motion/react-client";
import ProjectCard from "@/components/projectCard";
import ExperienceItem from "@/components/experienceItem";
import GalleryItem from "@/components/galleryItem";
import { galleryItems } from "@/data/gallery";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay },
});

function Divider() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="h-px bg-gradient-to-r from-transparent via-warm-200 to-transparent" />
    </div>
  );
}

const socialLinks = [
  { url: "https://www.linkedin.com/in/kvinhe/", label: "LinkedIn" },
  { url: "https://github.com/kevinhe04", label: "GitHub" },
  { url: "mailto:kvn.04he@gmail.com", label: "Email" },
  { url: "https://www.instagram.com/kvin.he/", label: "Instagram" },
  { url: "https://www.tiktok.com/@kvin.he", label: "TikTok" },
  { url: "https://www.youtube.com/@kvin.he1", label: "YouTube" },
];

export default function Home() {
  return (
    <div className="bg-warm-50 min-h-screen">
      <Sidebar />
      <Navbar />
      <Menu />

      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center px-8"
      >
        <div className="max-w-3xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-5">
          <div className="text-center lg:text-left w-full lg:flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 mt-20 md:mt-0"
            >
              <img
                src="images/headshot.jpeg"
                alt="Kevin He"
                className="w-32 h-32 rounded-full object-cover mx-auto lg:mx-0 ring-2 ring-warm-200"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-warm-900 mb-6 tracking-tight"
            >
              Kevin He
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-xl text-warm-600 text-base md:text-lg leading-relaxed"
            >
              I like exploring new interests and building skills along the way.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="max-w-xl text-warm-400 text-sm uppercase tracking-widest mt-5"
            >
              Current Focus: Startups
            </motion.p>
          </div>
        </div>
      </section>

      <Divider />

      <section id="experience" className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp()} className="mb-16">
            <div className="w-8 h-px bg-accent mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif text-warm-900">
              Experience.
            </h2>
          </motion.div>
          <div className="flex flex-col">
            <motion.div {...fadeUp(0)}>
              <ExperienceItem
                dates="June 2026 - Present"
                title="Systems Integration Engineer Intern"
                company="AWL-Electricity • Montreal, Canada"
                description={["Built PCBs", "Acted as a client representative for projects"]}
                skills={["Hardware", "International Business Development"]}
                image="images/AWL.jpeg"
                link="https://www.awl-e.com/"
              />
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <ExperienceItem
                dates="September 2025 - December 2025"
                title="AI Software Developer Intern"
                company="Autodesk • Montreal, Canada"
                description={[
                  "Accelerated multi-agent workflows through MCP tool caching, reducing agent response time by 52%",
                  "Built an async ingestion pipeline with SQS → S3 events and DynamoDB job tracking, improving scalability",
                  "Integrated RAG multimodal search using Marengo, enabling unified retrieval across text/image/video assets",
                ]}
                skills={["Python", "StrandsAgent", "MCP", "RAG", "AWS"]}
                image="images/autodesk.jpg"
                link="https://www.autodesk.com/"
              />
            </motion.div>
            <motion.div {...fadeUp(0.2)}>
              <ExperienceItem
                dates="May 2025 - August 2025"
                title="Mobile Developer Intern"
                company="Sun Life Financial • Montreal, Canada"
                description={[
                  "Integrated push notifications for Hong Kong's hybrid app using TypeScript, Angular, Ionic Cordova/Capacitor",
                  "Enhanced AI chatbot features in Sun Life's iOS app using Swift and Amazon Connect, improving customer UX",
                  "Delivered iOS features on navigation, message handling, and read-receipts to increase app stability and test coverage",
                ]}
                skills={["Swift", "TypeScript", "Ionic Framework"]}
                image="images/SunLife.png"
                link="https://www.sunlife.ca/en/"
              />
            </motion.div>
            <motion.div {...fadeUp(0.3)}>
              <ExperienceItem
                dates="May 2024 - August 2024"
                title="Software Developer Intern"
                company="Tedy • Montreal, Canada"
                description={[
                  "Implemented frontend features and backend workflows using TypeScript, Next.js, and Inngest",
                  "Built Retool dashboards with PostgreSQL queries to identify unattended claims, reducing missed claims by 40%",
                ]}
                skills={[
                  "TypeScript",
                  "JavaScript",
                  "Node.Js",
                  "SQL",
                  "Supabase",
                  "Next.Js",
                ]}
                link="https://www.tedy.app/?r=0"
                image="images/tedy.png"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Divider />

      <section id="projects" className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp()} className="mb-16">
            <div className="w-8 h-px bg-accent mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif text-warm-900">
              My Proudest Projects.
            </h2>
          </motion.div>
          <div className="flex flex-col md:flex-row md:flex-wrap">
            <motion.div {...fadeUp(0)} className="w-full">
              <ProjectCard
                title="Clove - TreeHacks (Stanford Hackathon)"
                dates="February 2026"
                description="Not a winner, but proud to have competed in the world's most competitive collegiate hackathon!"
                imageUrl="images/clove-logo.png"
                projectLink="https://devpost.com/software/clove-ga6v5p"
                skills={["Swift", "Render", "Zoom"]}
              />
            </motion.div>
            <motion.div {...fadeUp(0.08)} className="w-full">
              <ProjectCard
                title="Stacy - Hack The North Winner"
                dates="September 2025"
                description="Best Voice Assistant project at Hack The North (Canada's biggest hackathon)."
                imageUrl="images/stacy.png"
                projectLink="https://devpost.com/software/stacy-g7zptj"
                skills={["Swift", "SwiftUI", "VAPI"]}
              />
            </motion.div>
            <motion.div {...fadeUp(0.16)} className="w-full">
              <ProjectCard
                title="ZenOS - BagelHacks Winner"
                dates="March 2025"
                description="Highest rating at BagelHacks and 1st place at JHKCBA's pitch competition."
                imageUrl="images/zenos.png"
                projectLink="https://www.youtube.com/watch?v=3vmHrCJ-nJs"
                skills={["TypeScript", "Swift", "Electron.js", "Firebase"]}
              />
            </motion.div>
            <motion.div {...fadeUp(0.24)} className="w-full">
              <ProjectCard
                title="PickyEats"
                dates="November 2024 - April 2025"
                description="12k+ downloads. 10k+ restaurants. 5M+ views."
                imageUrl="images/pickyeats.jpg"
                projectLink="https://picky-eats.vercel.app/"
                skills={[
                  "AWS",
                  "Expo",
                  "React Native",
                  "TypeScript",
                  "PostgreSQL",
                ]}
              />
            </motion.div>
            <motion.div {...fadeUp(0.32)} className="w-full">
              <ProjectCard
                title="Chéri"
                dates="September 2024"
                description="$10,000 in first-week sales."
                imageUrl="images/cherimtl_logo.jpg"
                projectLink="https://www.cherimtl.com/"
                skills={["Next.js", "Supabase", "Stripe"]}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Divider />

      <section id="content-creation" className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp()} className="mb-16">
            <div className="w-8 h-px bg-accent mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif text-warm-900">
              Content Creation.
            </h2>
          </motion.div>
        </div>
        <motion.div
          {...fadeUp(0.1)}
          className="relative w-full max-w-3xl mx-auto aspect-video my-8 rounded-2xl overflow-hidden shadow-lg ring-1 ring-warm-200"
        >
          <iframe
            src="https://www.youtube.com/embed/Rr_jqi_TkW4?si=NHMg55VwKzg2vvwO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </motion.div>
        <motion.div
          {...fadeUp(0.2)}
          className="relative w-full max-w-3xl mx-auto aspect-video my-8 rounded-2xl overflow-hidden shadow-lg ring-1 ring-warm-200"
        >
          <iframe
            src="https://www.youtube.com/embed/jr-HO6HDUik"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </motion.div>
      </section>

      <Divider />

      <section id="my-life-in-pictures" className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp()} className="mb-16">
            <div className="w-8 h-px bg-accent mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif text-warm-900">
              My life in pictures.
            </h2>
          </motion.div>
          <div className="columns-2 md:columns-3 gap-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={`${item.date}-${index}`}
                className="break-inside-avoid"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              >
                <GalleryItem {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section id="contact" className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp()} className="mb-12">
            <div className="w-8 h-px bg-accent mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif text-warm-900">
              Get in touch.
            </h2>
          </motion.div>
          <motion.div
            {...fadeUp(0.15)}
            className="flex flex-wrap justify-center gap-10"
          >
            {socialLinks.map(({ url, label }) => (
              <div
                key={label}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <SocialIcon
                    url={url}
                    bgColor="#292524"
                    fgColor="#faf9f7"
                    style={{ width: 44, height: 44 }}
                  />
                </div>
                <span className="mt-2 text-sm text-warm-400 group-hover:text-warm-800 transition-colors duration-300">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
