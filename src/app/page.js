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
            className="text-4xl md:text-7xl font-bold mt-2"
          >
            Kevin He
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl mt-4"
          >
            McGill Software Engineering Co-op Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl mt-4"
          >
            Content Creator (one day maybe...)
          </motion.p>
        </motion.section>
      </section>

      <section id="experience" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Experience
          </h2>
          <div className="flex flex-col gap-8">
            <ExperienceItem
              dates="May 2025 - August 2025"
              title="Incoming Mobile Developer Intern"
              company="Sun Life Financial, Montreal, Canada"
              description={["Will be contributing to the iOS mobile platform."]}
              skills={["Swift", "SwiftUI"]}
              image="images/SunLife.png"
            />
            <ExperienceItem
              dates="September 2024 - Present"
              title="Founder"
              company="PickyEats, Montreal, Canada"
              description={[
                "Founded a mobile app recommending restaurants tailored to users’ choices, resulting in 5,000+ active users.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Projects
          </h2>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-8">
            <ProjectCard
              title="PickyEats - Ongoing"
              description="Developed a React Native Mobile Application that recommends restaurants in Montreal based on user-specified choices. 5,000+ downloads on the App Store."
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
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Content Creation
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-32 md:gap-5 mt-20 items-center">
            <Tiktok1 />
            <Tiktok2 />
            <Tiktok />
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
          <p className="text-lg mb-8">
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
          </div>
        </div>
      </section>
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Kevin He. All rights reserved.</p>
      </footer>
    </div>
  );
}
