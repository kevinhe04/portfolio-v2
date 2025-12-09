"use client";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import { SocialIcon } from "react-social-icons";
import Menu from "./components/menu";
import Tiktok from "@/components/tiktok";
import Tiktok1 from "@/components/tiktok1";
import Tiktok2 from "@/components/tiktok2";
import * as motion from "motion/react-client";
import ProjectCard from "@/components/projectCard";
import ExperienceItem from "@/components/experienceItem";

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Sidebar />
      <Navbar />
      <Menu />
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center px-8"
      >
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-5">
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

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              Kevin He
            </h1>

            <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
              <span className="text-blue-400">Software Engineer</span> & <span className="text-purple-400">Content Creator</span>
              <br />
              <span className="text-white text-lg">@ McGill University</span>
            </p>
          </motion.div>
          <div className="w-full lg:flex-1 mt-16 lg:mt-0">
            <ExperienceItem
              dates="September 2025 - December 2025"
              title="MLE Intern"
              company="Autodesk, Montreal, Canada"
              description={["Implemented caching within multi-agent workflows, reducing MCP server tool calls and redundant API usage", "Accelerated multimodal RAG pipelines by minimizing telemetry overhead, reducing agent response time by 52%", "Built asynchronous RAG ingestion with AWS Lambda, improving vector embedding and pipeline efficiency"
              ]}
              skills={["Python", "StrandsAgent", "MCP", "AWS"]}
              image="images/autodesk.jpg"
              link="https://www.autodesk.com/"
            />
          </div>
        </div >
      </section >
      <section id="experience" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative text-center mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-16 text-center">
              Experience
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <ExperienceItem
              dates="September 2025 - December 2025"
              title="AI Software Developer Intern"
              company="Autodesk, Montreal, Canada"
              description={["Implemented caching within multi-agent workflows, reducing MCP server tool calls and redundant API usage", "Accelerated multimodal RAG pipelines by minimizing telemetry overhead, reducing agent response time by 52%", "Built asynchronous RAG ingestion with AWS Lambda, improving vector embedding and pipeline efficiency"
              ]}
              skills={["Python", "StrandsAgent"]}
              image="images/autodesk.jpg"
              link="https://www.autodesk.com/"
            />
            <ExperienceItem
              dates="May 2025 - August 2025"
              title="Mobile Developer Intern"
              company="Sun Life Financial, Montreal, Canada"
              description={["Integrated push notifications and refactored login flow for Sun Life MPF (HK) using TypeScript, Angular, and Ionic.",
                "Enhanced AI chatbot features in the my Sun Life (CA) iOS app to improve customer experience using Swift & SwiftUI.",
                "Implemented read receipt functionality in AWS Connect chat interface to enhance user clarity and engagement."
              ]}
              skills={["Swift", "TypeScript", "Ionic Framework"]}
              image="images/SunLife.png"
              link="https://www.sunlife.ca/en/"
            />
            <ExperienceItem
              dates="September 2024 - March 2025"
              title="Founder"
              company="PickyEats, Montreal, Canada"
              description={[
                "Founded a mobile app recommending restaurants tailored to users’ choices, resulting in 10,000+ downloads.",
                "Partnered with RestoMontreal.ca to integrate restaurant data, offering users over 10k+ restaurants.",
                "Leveraged social media platforms to produce short videos promoting PickyEats, achieving over 1M+ views.",
              ]}
              skills={[
                "React Native",
                "TypeScript",
                "RESTful API",
                "postgreSQL",
                "Python",
                "Flask",
                "AWS",
                "Node.js",
                "Firebase",
              ]}
              link="https://picky-eats.vercel.app/"
              image="images/pickyeats.jpg"
            />
            <ExperienceItem
              dates="May 2024 - August 2024"
              title="Software Developer Intern"
              company="Tedy, Montreal, Canada"
              description={[
                "Delivered 40+ completed PRs, coding mainly in TypeScript.",
                "Managed SQL databases and created Retool workflows to streamline user data retrieval.",
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
          <div className="relative text-center mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-16 text-center">
              Projects
            </h2>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-8">
            <ProjectCard
              title="Stacy (Hack The North Winner) - September 2025"
              description="Built Stacy, a voice safety companion that logs incidents, tracks live location, and alerts your loved ones/police. Awarded Best Voice-Powered App by Vapi, as part of a sponsor challenge at Hack The North 2025."
              imageUrl="images/stacy.png"
              projectLink="https://devpost.com/software/stacy-g7zptj"
              skills={["Swift", "SwiftUI"]}
            />
            <ProjectCard
              title="ZenOS - March 2025"
              description="Developed a cross-platform application using Electron.js and TypeScript (Desktop), and Swift (Mobile), designed to enhance productivity by providing a distraction-free environment. Awarded highest rating by judges at BagelHacks Hackathon 2025 and won 1st Place at JHKCBA's pitch competition."
              imageUrl="images/zenos.png"
              projectLink="https://www.youtube.com/watch?v=3vmHrCJ-nJs"
              skills={["TypeScript", "Swift", "Electron.js", "Firebase"]}
            />
            <ProjectCard
              title="PickyEats - February 2024"
              description="Developed a React Native Mobile Application that recommends restaurants in Montreal based on user-specified choices. 10,000+ downloads."
              imageUrl="images/pickyscreen.png"
              projectLink="https://picky-eats.vercel.app/"
              skills={[
                "React Native",
                "TypeScript",
                "RESTful API",
                "postgreSQL",
                "Python",
                "Flask",
                "AWS",
                "Node.js",
                "Firebase",
              ]}
            />
            <ProjectCard
              title="Chéri E-Commerce Website - September 2024"
              description="Developed Chéri's responsive e-commerce platform using Next.js, generating $10,000 in first-week sales. Integrated Supabase for authentication and database management, Stripe for payments, and use-shopping-cart library for seamless purchasing."
              imageUrl="images/cheri.png"
              projectLink="https://www.cherimtl.com/"
              skills={[
                "JavaScript",
                "Node.Js",
                "Supabase",
                "Stripe",
                "use-shopping-cart",
                "postgreSQL",
                "React.Js",
              ]}
            />
          </div>
        </div>
      </section>
      <section id="content-creation" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative text-center mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-16 text-center">
              Content Creation
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-32 md:gap-5 mt-20 items-center">
            <Tiktok />
            <Tiktok2 />
            <Tiktok1 />
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative text-center mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-3xl"></div>
            <div className="relative text-center mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-3xl"></div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-16 text-center">
                Contact Me
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <SocialIcon
                  target="_blank"
                  url="https://www.linkedin.com/in/kevinhe04/"
                  className="mx-auto mb-3"
                />
                <h3 className="text-white font-semibold">LinkedIn</h3>
                <p className="text-white/60 text-sm">Professional Network</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <SocialIcon
                  target="_blank"
                  url="https://github.com/kevinhe04"
                  className="mx-auto mb-3"
                />
                <h3 className="text-white font-semibold">GitHub</h3>
                <p className="text-white/60 text-sm">Code & Projects</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <SocialIcon
                  target="_blank"
                  url="mailto:kvn.04he@gmail.com"
                  className="mx-auto mb-3"
                />
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-white/60 text-sm">Direct Contact</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <SocialIcon
                  target="_blank"
                  url="https://www.instagram.com/kvin.he/"
                  className="mx-auto mb-3"
                />
                <h3 className="text-white font-semibold">Instagram</h3>
                <p className="text-white/60 text-sm">Personal Updates</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <SocialIcon
                  target="_blank"
                  url="https://www.tiktok.com/@kvin.he"
                  className="mx-auto mb-3"
                />
                <h3 className="text-white font-semibold">TikTok</h3>
                <p className="text-white/60 text-sm">Short Content</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <SocialIcon
                  target="_blank"
                  url="https://www.youtube.com/@kvin.he1"
                  className="mx-auto mb-3"
                />
                <h3 className="text-white font-semibold">YouTube</h3>
                <p className="text-white/60 text-sm">Video Content</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}
