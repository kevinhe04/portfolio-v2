import Sidebar from "./components/sidebar";
import { ExternalLink } from "lucide-react";
import Navbar from "./components/navbar";
import { Badge } from "@/components/ui/badge";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <div>
      <Sidebar className="hidden lg:block" />
      <Navbar />
      <div className="text-white bg-blue-950">
        <section
          id="home"
          className="h-screen flex flex-col justify-center items-center text-white"
        >
          <p className="text-xl mt-4">Hi, my name is</p>
          <h1 className="text-5xl font-bold">Kevin He</h1>
          <p className="text-xl mt-4">
            Second-year McGill Software Engineering Co-op Student.
          </p>
        </section>

        <section id="experience" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 ">Experience</h2>
            <div className="flex flex-col gap-8 text-black">
              <a
                href="https://www.tedy.app/?r=0"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 cursor-pointer group"
              >
                <div className="absolute top-4 right-4 text-white group-hover:text-black transition-colors duration-300">
                  <ExternalLink />
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-1/4 text-center">
                    <p className="font-semibold">May 2024 - August 2024</p>
                  </div>
                  <div className="w-3/4 text-left">
                    <h3 className="text-2xl font-semibold mb-2">
                      Full-Stack Web Developer Intern
                    </h3>
                    <p className="mb-4">Tedy, Montreal, Canada</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Led UI/UX enhancements of the platform, coding in
                        TypeScript and JavaScript, and employing Next.js with
                        Next-Intl for internalization to implement intuitive
                        design improvements that boosted user satisfaction.
                      </li>
                      <li>
                        Managed Supabase databases and automated user email
                        notifications using Inngest cron jobs and React Resend.
                      </li>
                      <li>
                        Developed Retool workflows that sent daily Slack
                        messages with critical user analytics to the team,
                        leveraging SQL queries to provide Tedy with accurate,
                        real-time data insights every morning.
                      </li>
                      <li>
                        Contributed to agile processes, including daily
                        stand-ups, sprint planning, code reviews, QA testing,
                        and retrospectives, and developed unit tests to maintain
                        code quality.
                      </li>
                    </ul>
                    <div className="flex flex-row mt-5 gap-3 mx-auto">
                      <Badge> TypeScript</Badge>
                      <Badge> JavaScript</Badge>
                      <Badge> Node.Js</Badge>
                      <Badge> SQL</Badge>
                      <Badge> Supabase</Badge>
                      <Badge> Next.Js</Badge>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="https://cherimtl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 cursor-pointer group"
              >
                <div className="absolute top-4 right-4 text-white group-hover:text-black transition-colors duration-300">
                  <ExternalLink />
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-1/4 text-center">
                    <p className="font-semibold">Contract</p>
                  </div>
                  <div className="w-3/4 text-left">
                    <h3 className="text-2xl font-semibold mb-2">
                      Web Developer{" "}
                    </h3>
                    <p className="mb-4">Chéri, Montreal, Canada</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Worked on the Chéri e-commerce website, a clothing
                        company owned by a friend, updating it for each new
                        launch.{" "}
                      </li>
                      <li>
                        Implemented Supabase for authentication, Stripe for
                        payment processing, and used Next.js for the website
                        framework.
                      </li>
                      <li>
                        Contributed to generating{" "}
                        <span className="font-bold">$10,000</span> in sales
                        during the first launch through effective site
                        management and updates.
                      </li>
                    </ul>
                    <div className="flex flex-row mt-5 gap-3 mx-auto">
                      <Badge> JavaScript</Badge>
                      <Badge> Node.Js</Badge>
                      <Badge> Stripe</Badge>
                      <Badge> Supabase</Badge>
                      <Badge> Next.Js</Badge>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative overflow-hidden bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src="project-image1.jpg"
                  alt="Project 1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Chéri E-Commerce Website
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Led the development of Chéri's responsive e-commerce website
                    using Next.js, integrating Firebase authentication, Supabase
                    database management, and Stripe for payments, and the
                    use-shopping-cart library for cart functionality. These
                    implementations were crucial in generating $10,000 in sales
                    within the first week of the clothing launch.
                  </p>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </a>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-800 opacity-30"></div>
              </div>

              <div className="relative overflow-hidden bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src="project-image2.jpg"
                  alt="Project 2"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    GetTogether Mobile Application
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Mobile Application designed to help find activities to do
                    from a selection of choices.
                  </p>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </a>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-800 opacity-30"></div>
              </div>

              <div className="relative overflow-hidden bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src="project-image3.jpg"
                  alt="Project 3"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    AI Stock Market Analysis
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of the project. Highlights and key
                    achievements.
                  </p>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </a>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-800 opacity-30"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="text-4xl font-bold mb-6  relative z-10">Contact</h2>
            <p className="text-lg mb-12  relative z-10">
              Feel free to reach out to me through the following platforms.
            </p>
            <div className="flex flex-row gap-4">
              <SocialIcon url="https://www.instagram.com/he_is_kevin_/" />
              <SocialIcon url="https://www.linkedin.com/in/kevinhe04/" />
            </div>
          </div>
        </section>

        <footer className="py-6 bg-gray-800 text-white text-center">
          <p>&copy; 2024 Kevin He. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
