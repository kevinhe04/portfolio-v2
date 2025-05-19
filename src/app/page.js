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
        className="min-h-screen flex flex-col justify-center items-center text-center px-4"
      >
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-7xl font-bold mt-2 text-white"
          >
            Kevin He
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl mt-4 text-white"
          >
            McGill Software Engineering Co-op Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl mt-4 text-white"
          >
            Part-Time Content Creator
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl mt-6"
          >
            <img
              className="size-52 rounded-full object-cover m-auto"
              src="images\headshot.jpeg"
            ></img>
          </motion.div>
        </motion.section>
      </section>
      <section id="about" className="py-16 px-4">
        <div className="relative max-w-3xl w-full mx-auto backdrop-blur-md bg-white/20 rounded-xl p-8 shadow-lg border border-white/50">
          <div className="absolute top-10 -left-30 w-32 h-32 md:bg-white/30 rounded-full blur-xl"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white drop-shadow-sm">
            About Me
          </h2>

          <div className="text-xl text-center text-white/90 space-y-6">
            <p>
              I love creating content that inspires people or makes them laugh.
            </p>

            <p>
              On a more technical note, I like to build stuff that leaves a big
              impact on the community. My goal is to make people's lives easier
              and if I am capable of inspiring people in the process, I would
              have accomplished everything I wanted.
            </p>

            <p>
              Thank you for reading through my portfolio, I hope our paths cross
              one day.
            </p>
          </div>
          <div className="absolute bottom-5 right-5 w-20 h-20 md:bg-white/20 rounded-full blur-md"></div>
          <div className="absolute top-1/2 right-10 w-10 h-10 md:bg-white/30 rounded-full blur-sm"></div>
        </div>
      </section>

      <section id="experience" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
            Experience
          </h2>
          <div className="flex flex-col gap-8">
            <ExperienceItem
              dates="May 2025 - August 2025"
              title="Mobile Developer Intern"
              company="Sun Life Financial, Montreal, Canada"
              description={["Integrating Push Notifications within the hybrid Sun Life app through Kotlin and TypeScript."]}
              skills={["Kotlin", "TypeScript", "Ionic Framework"]}
              image="images/SunLife.png"
              link="https://www.sunlife.ca/en/"
            />
            <ExperienceItem
              dates="September 2024 - Present"
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
              title="Web Developer Intern"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
            Projects
          </h2>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-8">
            <ProjectCard
              title="ZenOS - Ongoing"
              description="Developed a cross-platform application using Electron.js and TypeScript (Desktop), and Swift (Mobile), designed to enhance productivity by providing a distraction-free environment."
              imageUrl="images/zenos.png"
              projectLink="https://tryzenos.com"
              skills={["TypeScript", "Swift", "Electron.js", "Firebase"]}
            />
            <ProjectCard
              title="PickyEats - Ongoing"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Content Creation
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-32 md:gap-5 mt-20 items-center">
            <Tiktok />
            <Tiktok2 />
            <Tiktok1 />
          </div>
          <div className="mt-20">
            <h1 className="text-white text-4xl font-bold text-center">
              Support me !
            </h1>
            <div className="flex flex-col md:flex-row gap-5 mt-10 justify-center">
              <div className="flex flex-col items-center">
                <h1 className="text-white text-2xl font-bold">TikTok</h1>
                <iframe
                  height="80px"
                  src="https://livecounts.io/embed/tiktok-live-follower-counter/kvin.he"
                  style={{
                    border: "0",
                    width: "220px",
                    height: "80px",
                  }}
                ></iframe>
                <div className="w-28 p-2 text-center font-bold mt-4 rounded-lg text-lg bg-transparent text-white hover:bg-white hover:text-black transition-all duration-500 border-2 border-white">
                  <a href="https://www.tiktok.com/@kvin.he" target="_blank">
                    Follow
                  </a>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center">
                  <h1 className="text-white text-2xl font-bold">YouTube</h1>
                  <iframe
                    height="80px"
                    src="https://livecounts.io/embed/youtube-live-subscriber-counter/UChfHENDTz2IBStA4PL8GJDw"
                    style={{
                      border: "0",
                      width: "220px",
                      height: "80px",
                    }}
                  ></iframe>
                  <div className="w-28 p-2 text-center font-bold mt-4 rounded-lg text-lg bg-transparent text-white hover:bg-white hover:text-black transition-all duration-500 border-2 border-white">
                    <a href="https://www.youtube.com/@kvin.he1" target="_blank">
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center">
                  <h1 className="text-white text-2xl font-bold">Twitch</h1>
                  <iframe
                    height="80px"
                    src="https://livecounts.io/embed/twitch-live-follower-counter/kvinhe"
                    style={{
                      border: "0",
                      width: "220px",
                      height: "80px",
                    }}
                  ></iframe>
                  <div className="w-28 p-2 text-center font-bold mt-4 rounded-lg text-lg bg-transparent text-white hover:bg-white hover:text-black transition-all duration-500 border-2 border-white">
                    <a href="https://www.twitch.tv/kvinhe" target="_blank">
                      Follow
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contact</h2>
          <p className="text-lg mb-8 text-white">
            Feel free to reach out to me through the following platforms.
          </p>
          <div className="flex justify-center gap-4">
            <SocialIcon
              target="_blank"
              url="https://www.linkedin.com/in/kevinhe04/"
            />
            <SocialIcon target="_blank" url="https://github.com/kevinhe04" />
            <SocialIcon target="_blank" url="mailto:kvn.04he@gmail.com" />
            <SocialIcon
              target="_blank"
              url="https://www.instagram.com/kvin.he/"
            />
            <SocialIcon target="_blank" url="https://www.tiktok.com/@kvin.he" />
            <SocialIcon
              target="_blank"
              url="https://www.youtube.com/@kvin.he1"
            />
          </div>
        </div>
      </section>
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2025 Kevin He. All rights reserved.</p>
      </footer>
    </div>
  );
}
