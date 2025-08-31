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
import { CircleUser, Play, Calendar, Presentation } from "lucide-react";

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
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2">20K+</div>
                  <div className="flex flex-row justify-center gap-2 items-center">
                    <CircleUser size={18} color={"#99a1af"} />
                    <div className="text-sm text-gray-400">Followers </div>
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">7M+</div>
                  <div className="flex flex-row justify-center gap-2 items-center">
                    <Play size={18} color={"#99a1af"} />
                    <div className="text-sm text-gray-400">Video Views</div>
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
                  <div className="flex flex-row justify-center gap-2 items-center">
                    <Calendar size={18} color={"#99a1af"} />
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>

                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20">
                  <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
                  <div className="flex flex-row justify-center gap-2 items-center">
                    <Presentation size={18} color={"#99a1af"} />
                    <div className="text-sm text-gray-400">Projects Built</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <h4 className="text-lg font-semibold text-white mb-4 text-center">Focus Areas</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                    Software Development
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                    Content Creation
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 text-sm rounded-full border border-green-500/30">
                    Community Impact
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div >
      </section >

      <section id="about" className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative text-center mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-16 text-center">
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-blue-600/5 border border-blue-500/10">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Developer</h3>
                <p className="text-white leading-relaxed">
                  I like building products that make people's lives easier.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/5 to-purple-600/5 border border-purple-500/10">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Creator</h3>
                <p className="text-white leading-relaxed">
                  I post vlogs and funny videos. Also known as a yapper.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/5 to-green-600/5 border border-green-500/10">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Vision</h3>
                <p className="text-white leading-relaxed">
                  I want to inspire and entertain others.
                </p>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-8 text-center">Technologies</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-lg border border-blue-500/30">TypeScript</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-lg border border-green-500/30">Python</span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-lg border border-orange-500/30">Swift</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-lg border border-purple-500/30">Kotlin</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-lg border border-blue-500/30">PostgreSQL</span>
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-lg border border-red-500/30">C++</span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-lg border border-orange-500/30">Java</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-lg border border-cyan-500/30">React Native</span>
                    <span className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-lg border border-gray-700/50">Next.js</span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-lg border border-emerald-500/30">Flask</span>
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-sm rounded-lg border border-indigo-500/30">Electron.js</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-lg border border-yellow-500/30">AWS</span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-lg border border-orange-500/30">Firebase</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-lg border border-green-500/30">Supabase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              title="Software Developer Intern"
              company="Autodesk, Montreal, Canada"
              description={["Incoming"
              ]}
              skills={["C++", "TypeScript"]}
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
              link="https://pickyeats.me"
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
              title="LeetCode 2.0 - July 2025"
              description="Developed a SwiftUI app for reviewing coding interview problems. Really just because no mobile apps exist for this purpose and I'm really bad at LeetCode."
              imageUrl="images/lc.png"
              projectLink=""
              skills={["Swift", "SwiftUI"]}
            />
            <ProjectCard
              title="ZenOS - March 2025"
              description="Developed a cross-platform application using Electron.js and TypeScript (Desktop), and Swift (Mobile), designed to enhance productivity by providing a distraction-free environment."
              imageUrl="images/zenos.png"
              projectLink="https://www.youtube.com/watch?v=3vmHrCJ-nJs"
              skills={["TypeScript", "Swift", "Electron.js", "Firebase"]}
            />
            <ProjectCard
              title="PickyEats - February 2024"
              description="Developed a React Native Mobile Application that recommends restaurants in Montreal based on user-specified choices. 10,000+ downloads."
              imageUrl="images/pickyscreen.png"
              projectLink="https://pickyeats.me"
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
              title="Virtual Assistant - December 2024"
              description="Built a task management console app in C++. Designed to streamline personal daily tasks and improve productivity. Integrated dynamic task handling, Google Drive API for automated document updates, and a VBA macro for Word-to-PDF conversions."
              imageUrl="images/va.jpg"
              skills={["C++", "Google API", "VBA"]}
              projectLink="https://github.com/kevinhe04/VirtualAssistant" />
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
