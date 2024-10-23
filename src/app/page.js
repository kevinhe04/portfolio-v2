import Sidebar from "./components/sidebar";
import { ExternalLink } from "lucide-react";
import Navbar from "./components/navbar";
import { Badge } from "@/components/ui/badge";
import { SocialIcon } from "react-social-icons";
import Menu from "./components/menu";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-stone-800 text-white">
      <Sidebar />
      <Navbar />
      <Menu />
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4"
      >
        <h1 className="text-4xl md:text-7xl font-bold mt-2">Kevin He</h1>
        <p className="text-lg md:text-xl mt-4">
          Second-year McGill Software Engineering Co-op Student.
        </p>
        <p className="text-lg md:text-xl mt-4">Schulich Leader 2023.</p>
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
                "Developed a React Native mobile application for restaurant selection in Montreal, with 250+ users on the waitlist.",
                "Leveraged TikTok for app promotion, reahing over 200,000 views and accumulating more than 20,000 likes.",
                "Web application currently live; iOS and Google Play versions in final stages of development.",
                "Established a collaborative partnership with RestoMontreal.ca and planning on initiating outreach efforts to various food companies for potential partnerships and collaborations.",
              ]}
              skills={[
                "React Native",
                "RESTful API",
                "postgreSQL",
                "BeautifulSoup (Web Scraping)",
                "Python",
                "Render",
                "Flask",
                "AWS Lambda",
                "AWS API Gateway",
                "Node.js",
                "Google Apps Script",
                "TypeScript",
              ]}
              link="https://www.tedy.app/?r=0"
            />
            <ExperienceItem
              dates="May 2024 - August 2024"
              title="Full-Stack Web Developer Intern"
              company="Tedy, Montreal, Canada"
              description={[
                "Led UI/UX enhancements of the platform, coding in TypeScript and JavaScript, and employing Next.js with Next-Intl for internalization to implement intuitive design improvements that boosted user satisfaction.",
                "Managed Supabase databases and automated user email notifications using Inngest cron jobs and React Resend.",
                "Developed Retool workflows that sent daily Slack messages with critical user analytics to the team, leveraging SQL queries to provide Tedy with accurate, real-time data insights every morning.",
                "Contributed to agile processes, including daily stand-ups, sprint planning, code reviews, QA testing, and retrospectives, and developed unit tests to maintain code quality.",
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
            />

            <ExperienceItem
              dates="Contract"
              title="Developer"
              company="Chéri, Montreal, Canada"
              description={[
                "Developed Chéri's responsive e-commerce platform using Next.js, generating $10,000 in first-week sales.",
                "Integrated Supabase for authentication and database management, Stripe for payments, and use-shopping-cart library for seamless purchasing.",
                "Ensured cross-device responsiveness to maximize user engagement and conversions.",
              ]}
              skills={[
                "JavaScript",
                "Node.Js",
                "Stripe",
                "Supabase",
                "Next.Js",
              ]}
              link="https://cherimtl.com"
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
              title="Picky Eats - Ongoing"
              description="Developed a React Native Mobile Application and a Web Application that recommends restaurants in Montreal based on user-specified choices. Built a waitlist of 250+ users anticipating the mobile app launch. Launched a successful marketing campaign on TikTok, with the first video reaching over 200,000 views and 20,000 likes. Web application currently live; iOS and Google Play versions in final stages of development."
              imageUrl="images/pickyeats.jpg"
              projectLink="http://www.pickyeats.tech"
              skills={[
                "React Native",
                "TypeScript",
                "RESTful API",
                "postgreSQL",
                "BeautifulSoup (Web Scraping)",
                "Python",
                "Render",
                "Flask",
                "AWS Lambda",
                "AWS API Gateway",
                "Node.js",
                "Google Apps Script",
              ]}
            />
            <ProjectCard
              title="Chéri E-Commerce Website - September 2024"
              description="Full-stack E-Commerce website developed using Next.js, Supabase authentication and database management systems, Stripe for payments, and the use-shopping-cart library for cart functionality."
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
            <ProjectCard
              title="Pomodoro Study App - January 2024"
              description="Created a Pomodoro timer website, incorporating Spotify's API to boost study efficiency. This site combines the focused work sessions of the Pomodoro technique with personalized Spotify playlists, enhancing concentration and making study sessions more enjoyable and productive."
              imageUrl="images/pomodoro.png"
              projectLink="https://studypomodoro.vercel.app/"
              skills={["HTML", "CSS", "JavaScript", "Spotify API"]}
            />
            <ProjectCard
              title="CodeJam Hackathon Challenge - November 2023"
              description="Led the integration of real-time front-end and back-end systems for a logistics platform at CodeJam. Utilized WebSocket technology for live server-client communication, enabling dynamic updates of truck and load information and instant matching notifications for truckers."
              imageUrl="images/loadboard.jpg"
              projectLink="https://devpost.com/software/loadboard"
              skills={["JavaScript", "Node.Js", "React.Js", "WebSockets"]}
            />
            <ProjectCard
              title="Portfolio V1 - October 2023"
              description="Very first design of my portfolio."
              imageUrl="images/portfoliov1.png"
              projectLink="https://kevinhe.vercel.app/"
              skills={["React.js", "JavaScript", "Node.Js"]}
            />
            <ProjectCard
              title="Ukulele DIY - May 2023"
              description="My first ever coding project, made in HTML/CSS/JavaScript. Website on how to make your own cardboard ukulele. Design was quite atrocious..."
              imageUrl="images/music.png"
              projectLink="https://kevinhe04.github.io/Arts-and-Science-IA-Project/"
              skills={["HTML", "CSS", "JavaScript"]}
            />
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
              url="https://www.instagram.com/he_is_kevin_/"
            />
          </div>
        </div>
      </section>

      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Kevin He. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ExperienceItem({ dates, title, company, description, skills, link }) {
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
        <div className="md:w-1/4 text-center md:text-left">
          <p className="font-semibold">{dates}</p>
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
