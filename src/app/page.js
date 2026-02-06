"use client";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import { SocialIcon } from "react-social-icons";
import Menu from "./components/menu";
import * as motion from "motion/react-client";
import ProjectCard from "@/components/projectCard";
import ExperienceItem from "@/components/experienceItem";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Sidebar />
      <Navbar />
      <Menu />
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center px-8"
      >
        <div className="max-w-3xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left w-full lg:flex-1"
          >
            <div className="mb-8 mt-20 md:mt-0">
              <img
                src="images/headshot.jpeg"
                alt="Kevin He"
                className="w-32 h-32 rounded-full object-cover mx-auto lg:mx-0"
              />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-6 tracking-tight">
              Kevin He
            </h1>
            <p className="max-w-xl text-black text-base md:text-lg leading-relaxed">
              I like exploring different interests and building new skills along the way.
            </p>
            <br />
            <p className="max-w-xl text-gray-500 text-base md:text-lg leading-relaxed">
              Current Focus: Startups, AI Development, Travelling
            </p>

          </motion.div>
        </div >
      </section >
      <section id="experience" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-16">
              Experience.
            </h2>
          </div>
          <div className="flex flex-col">
            <ExperienceItem
              dates="September 2025 - December 2025"
              title="AI Software Developer Intern"
              company="Autodesk • Montreal, Canada"
              description={["Accelerated multi-agent workflows through MCP tool caching, reducing agent response time by 52%", "Built an async ingestion pipeline with SQS → S3 events and DynamoDB job tracking, improving scalability", "Integrated RAG multimodal search using Marengo, enabling unified retrieval across text/image/video assets"
              ]}
              skills={["Python", "StrandsAgent", "MCP", "RAG", "AWS"]}
              image="images/autodesk.jpg"
              link="https://www.autodesk.com/"
            />
            <ExperienceItem
              dates="May 2025 - August 2025"
              title="Mobile Developer Intern"
              company="Sun Life Financial • Montreal, Canada"
              description={["Integrated push notifications for Hong Kong’s hybrid app using TypeScript, Angular, Ionic Cordova/Capacitor",
                "Enhanced AI chatbot features in Sun Life’s iOS app using Swift and Amazon Connect, improving customer UX",
                "Delivered iOS features on navigation, message handling, and read-receipts to increase app stability and test coverage"
              ]}
              skills={["Swift", "TypeScript", "Ionic Framework"]}
              image="images/SunLife.png"
              link="https://www.sunlife.ca/en/"
            />
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
          </div>
        </div>
      </section>
      <section id="projects" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-16">
              Projects.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap">
            <ProjectCard
              title="Stacy - Hack The North Winner"
              dates="September 2025"
              description="Voice safety companion that logs incidents, tracks live location, and alerts your loved ones/police. Awarded Best Voice-Powered App by VAPI (Hack The North 2025)."
              imageUrl="images/stacy.png"
              projectLink="https://devpost.com/software/stacy-g7zptj"
              skills={["Swift", "SwiftUI"]}
            />
            <ProjectCard
              title="ZenOS - BagelHacks Winner"
              dates="March 2025"
              description="Productivity environment tool. Awarded highest rating by judges at BagelHacks Hackathon 2025 and won 1st Place at JHKCBA's pitch competition."
              imageUrl="images/zenos.png"
              projectLink="https://www.youtube.com/watch?v=3vmHrCJ-nJs"
              skills={["TypeScript", "Swift", "Electron.js", "Firebase"]}
            />
            <ProjectCard
              title="PickyEats"
              dates="November 2024 - April 2025"
              description="Developed a React Native Mobile Application that recommends restaurants in Montreal based on user-specified choices. 12k+ downloads. 10k+ restaurants. 5M+ views."
              imageUrl="images/pickyscreen.png"
              projectLink="https://picky-eats.vercel.app/"
              skills={[
                "AWS",
                "Expo",
                "React Native",
                "TypeScript",
                "PostgreSQL"
              ]}
            />
            <ProjectCard
              title="Chéri"
              dates="September 2024"
              description="Developed Chéri's responsive e-commerce, generating $10,000 in first-week sales using Stripe, Next.js, and Supabase."
              imageUrl="images/cheri.png"
              projectLink="https://www.cherimtl.com/"
              skills={[
                "Next.js",
                "Supabase",
                "Stripe",
              ]}
            />
          </div>
        </div>
      </section>
      <section id="content-creation" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-16">
              Content Creation.
            </h2>
          </div>
        </div>
        <div className="relative w-full max-w-3xl mx-auto aspect-video my-8">
          <iframe
            src="https://www.youtube.com/embed/Rr_jqi_TkW4?si=NHMg55VwKzg2vvwO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          ></iframe>
        </div>
        <div className="relative w-full max-w-3xl mx-auto aspect-video my-8">
          <iframe
            src="https://www.youtube.com/embed/jr-HO6HDUik"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          ></iframe>
        </div>
      </section>
      <section id="contact" className="py-16 px-4">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-400 transition">
            <SocialIcon
              url="https://www.linkedin.com/in/kevinhe04/"
              fgColor="#fff"
              style={{ width: 48, height: 48 }}
            />
            <span className="mt-2 text-sm font-medium text-white text-center">
              LinkedIn
            </span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-gray-300 transition">
            <SocialIcon
              url="https://github.com/kevinhe04"
              fgColor="#fff"
              style={{ width: 48, height: 48 }}
            />
            <span className="mt-2 text-sm font-medium text-white text-center">
              GitHub
            </span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-red-400 transition">
            <SocialIcon
              url="mailto:kvn.04he@gmail.com"
              fgColor="#fff"
              style={{ width: 48, height: 48 }}
            />
            <span className="mt-2 text-sm font-medium text-white text-center">
              Email
            </span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-pink-400 transition">
            <SocialIcon
              url="https://www.instagram.com/kvin.he/"
              fgColor="#fff"
              style={{ width: 48, height: 48 }}
            />
            <span className="mt-2 text-sm font-medium text-white text-center">
              Instagram
            </span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-black transition">
            <SocialIcon
              url="https://www.tiktok.com/@kvin.he"
              fgColor="#fff"
              style={{ width: 48, height: 48 }}
            />
            <span className="mt-2 text-sm font-medium text-white text-center">
              TikTok
            </span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-red-500 transition">
            <SocialIcon
              url="https://www.youtube.com/@kvin.he1"
              fgColor="#fff"
              style={{ width: 48, height: 48 }}
            />
            <span className="mt-2 text-sm font-medium text-white text-center">
              YouTube
            </span>
          </div>
        </div>
      </section >
    </div >
  );
}
