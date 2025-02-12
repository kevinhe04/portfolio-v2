"use client";

import Sidebar from "./components/sidebar";
import { ExternalLink } from "lucide-react";
import Navbar from "./components/navbar";
import { Badge } from "@/components/ui/badge";
import { SocialIcon } from "react-social-icons";
import Menu from "./components/menu";
import Tiktok from "@/components/tiktok";
import Tiktok1 from "@/components/tiktok1";
import Tiktok2 from "@/components/tiktok2";

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
        <h1 className="text-4xl md:text-7xl font-bold mt-2">Kevin He</h1>
        <p className="text-lg md:text-xl mt-4">
          McGill Software Engineering Co-op Student
        </p>
        <p className="text-lg md:text-xl mt-4">Aspiring Content Creator.</p>
      </section>

      <section id="experience" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Experience
          </h2>
          <div className="flex flex-col gap-8">
            <ExperienceItem
              dates="September 2024 - Present"
              title="Founder"
              company="PickyEats, Montreal, Canada"
              description={[
                "Founded a mobile app recommending restaurants tailored to users’ choices, resulting in 5,000+ active users.",
                "Partnered with RestoMontreal.ca to integrate restaurant data via Flask web scraping, offering users over 10k+ restaurants.",
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
                "Enhanced the platform’s functionality, using TypeScript and Next.js, delivering a smooth and intuitive user experience.",
                "Managed SQL databases and automated user emails with cron jobs, streamlining communication and backend processes.",
                "Built Retool workflows to send daily Slack messages with user analytics, delivering insights to the team every morning.",
                "Contributed to agile processes, including daily stand-ups, sprint planning, code reviews, QA testing, and unit testing.",
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
      <section id="social-media" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Social Media
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-32 md:gap-5 mt-20 items-center">
            <Tiktok />
            <Tiktok1 />
            <Tiktok2 />
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

function ExperienceItem({
  dates,
  title,
  company,
  description,
  skills,
  link,
  image,
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="block bg-white md:bg-opacity-85 hover:bg-opacity-100 text-black shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 cursor-pointer group"
    >
      <div className="absolute top-4 right-4 text-gray-400 group-hover:text-black transition-colors duration-300">
        <ExternalLink size={20} />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4 text-center md:text-left flex flex-col">
          <p className="font-semibold">{dates}</p>
          <div className="flex-1 flex items-center justify-center">
            <img src={image} className="rounded-2xl"></img>
          </div>
        </div>
        <div className="md:w-3/4">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
          <p className="mb-4">{company}</p>
          <ul className="list-disc list-inside mb-4">
            {description.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pointer-events-none">
            {skills.map((skill) => (
              <Badge key={skill} className="bg-blue-100 text-blue-800">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

function ProjectCard({ title, description, imageUrl, projectLink, skills }) {
  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer">
      <div className="bg-white md:bg-opacity-85 hover:bg-opacity-100 rounded-lg shadow-lg overflow-hidden flex transition-all transform hover:scale-105 cursor-pointer group">
        <div className="absolute top-4 right-4 text-gray-400 group-hover:text-black transition-colors duration-300">
          <ExternalLink size={20} />
        </div>
        <img
          src={imageUrl}
          alt={title}
          className="w-1/3 object-cover hidden md:block"
        />
        <div className="p-6 flex flex-col justify-between md:w-2/3">
          <div>
            <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
            <p className="text-black mb-4">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2 pointer-events-none">
            {skills.map((skill) => (
              <Badge key={skill} className="bg-blue-100 text-blue-800">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
