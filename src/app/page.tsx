"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <section id="about" className="my-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - About content */}
            <div>
              <h2 className="text-2xl font-semibold">About Me</h2>
              <p className="mt-4 text-lg text-justify">
  Hi! I'm Gautam 👋 <br /><br />
  An infrastructure and software engineer with 5+ years of experience delivering secure, production-ready systems across cloud and on-premise environments. Skilled in implementing RESTful APIs and backend development using Java, Golang and Python, alongside expertise in Kubernetes, Linux systems, DevOps and CI/CD automation.
</p>
              <div className="mt-6">
                <a
                  href="/resume"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View My Resume
                </a>
              </div>
            </div>
            
            {/* Right side - Profile picture */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700">
                  <Image
                    src="/me_200x200.jpg"
                    alt="Gautam Gadipudi"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    priority
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback when image is not available */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-6xl font-bold" style={{display: 'none'}}>
                    GG
                  </div>
                </div>
                {/* Decorative ring around picture */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-sm"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="my-10">
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600">
                    Technologies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                    Languages
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Python</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Go</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Java</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">C#</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Javascript</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                    Platform Engineering
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">Kubernetes</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">Linux</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">Helm</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">OpenEBS CSI</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">VWWare ESXi</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">KVM</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">Microk8s</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                    Automation & DevOps & IaC
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Ansible</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Docker</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">ArgoCD</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Terraform</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Jenkins</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Bash</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">GitHub Actions</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                    Data Platforms
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs rounded-full">PostgreSQL</span>
                      <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs rounded-full">MongoDB</span>
                      <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs rounded-full">Elasticsearch</span>
                      <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs rounded-full">Redis</span>
                      <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs rounded-full">MS SQL Server</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                    Observability
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded-full">Prometheus</span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded-full">Grafana</span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded-full">Metrics Exporters</span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded-full">Alert Manager</span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded-full">Humio</span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded-full">Kibana</span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded-full">SonarQube</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                    Cloud Platforms
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded-full">AWS</span>
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded-full">onprem</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="projects" className="my-10">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Cricket strategy APIs for matchday"
              description="APIs for cricket match strategies"
              githubUrl="https://github.com/GautamGadipudi/cric-strat-api"
              technologies={["Go", "Gin Gonic", "RESTful APIs"]}
            />
            <ProjectCard
              title="Todo application backend"
              description="My first vibe coding project - APIs for user auth. using JWTs, and CRUD operations for todo entity."
              githubUrl="https://github.com/GautamGadipudi/todo-backend"
              technologies={["Go", "Gin Gonic", "RESTful APIs"]}
            />

            <ProjectCard
              title="K-means for movies from IMDB"
              description="Find a good k-value for a dataset, and use that to do clustering and generate some insights on it"
              githubUrl="https://github.com/GautamGadipudi/imdb-k-means"
              technologies={["Data Analysis", "Big Data", "Python", "k-means"]}
            />

            <ProjectCard
              title="Packet Analyzer"
              description="An application that reads a set of packets (TCP, UDP or ICMP) and produces a detailed summary of those packets."
              githubUrl="https://github.com/GautamGadipudi/PacketAnalyzer"
              technologies={["Java", "Computer Networking", "TCP", "UDP", "ICMP"]}
            />

            <ProjectCard
              title="Tracky - Capstone project during MS CS @ RIT"
              description="COLLECT previous frame details for good JSON data using inspect module, and MATCH it against future JSON data to detect errors that would otherwise go unnoticed, or make the program to fail elsewhere."
              githubUrl="https://github.com/GautamGadipudi/tracky"
              technologies={["Python", "Data Collection"]}
            />
            
            <ProjectCard
              title="Mars Rovers Network Implementation"
              description="An application that manages rovers' network by creating and maintains shortest path in their routing table, and supports data transmission as TCP packets in correct sequence, and ordering."
              githubUrl="https://github.com/GautamGadipudi/mars-rovers-data-transfer"
              technologies={["Java", "Computer Networking", "TCP", "Docker", "Routing"]}
            />
            
            <ProjectCard
              title="Personal Portfolio Website"
              description="A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode support, PDF resume viewer, and dynamic navigation."
              githubUrl="https://github.com/GautamGadipudi/portfolio"
              liveUrl="https://gautamgadipudi.github.io/"
              technologies={["Next.js", "TypeScript", "Tailwind CSS", "React"]}
            />
          </div>
          
          {/* More projects note */}
          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">More Projects Coming Soon!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm constantly working on new projects and adding them to my portfolio.
              </p>
              <a
                href="https://github.com/GautamGadipudi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium text-sm rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Visit My GitHub for More Projects
              </a>
            </div>
          </div>
        </section>

        <section id="misc-skills" className="my-10">
          <h2 className="text-2xl font-semibold mb-6">Misc. Interests / Skills</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded-full font-medium">
                    🍝 Foodie
                  </span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full font-medium">
                    ⚽ Average FIFA Player
                  </span>
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">
                    📸 Amateur Photographer
                  </span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full font-medium">
                    🎵 Music
                  </span>
                  <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full font-medium">
                    ✈️ Travel
                  </span>
                  <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs rounded-full font-medium">
                    🎮 Gaming
                  </span>
                  <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs rounded-full font-medium">
                    🎬 Telugu Movies
                  </span>
                  <span className="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded-full font-medium">
                    🍳 Cooking
                  </span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full font-medium">
                    🏏 Left Handed Batsman
                  </span>
                  <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs rounded-full font-medium">
                    🏞️ National Parks
                  </span>
                  <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs rounded-full font-medium">
                    ⛺ Camping
                  </span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full font-medium">
                    ⚽ Sunday League Player
                  </span>
                  <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs rounded-full font-medium">
                    🎯 Pro FPS Player
                  </span>
                  <span className="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded-full font-medium">
                    🥘 Biriyani Enthusiast
                  </span>
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">
                    🏏 Cricket lover
                  </span>
                </div>
              </div>
        </section>

        <section id="contact" className="my-10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 text-lg">
            Get in touch via email: <a href="mailto:gadipudi.gautam@gmail.com" className="text-blue-500">gadipudi.gautam@gmail.com</a>
          </p>
        </section>
      </main>

      <footer className="mt-16 text-center">
        © 2025 Gautam Gadipudi
      </footer>
      </div>
    </>
  );
}
