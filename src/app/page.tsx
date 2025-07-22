import Image from "next/image";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>

        <section id="about" className="my-10">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-4 text-lg">
            Hi! I'm Gautam, a software engineer with a passion for creating web applications.
          </p>
        </section>

        <section id="projects" className="my-10">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Tracky - Capstone project during MS CS @ RIT"
              description="COLLECT previous frame details for good JSON data using inspect module, and MATCH it against future JSON data to detect errors that would otherwise go unnoticed, or make the program to fail elsewhere."
              githubUrl="https://github.com/GautamGadipudi/tracky"
              technologies={["Python", "Data Collection"]}
            />
            
            {/* <ProjectCard
              title="Task Management App"
              description="A productivity app with drag-and-drop functionality, real-time collaboration, and advanced filtering. Built using Next.js and Firebase."
              githubUrl="https://github.com/your-username/task-manager"
              liveUrl="https://your-task-app.com"
              technologies={["Next.js", "Firebase", "React DnD", "Tailwind CSS"]}
            />
            
            <ProjectCard
              title="Weather Dashboard"
              description="A responsive weather application with location-based forecasts, interactive maps, and historical data visualization using React and Chart.js."
              githubUrl="https://github.com/your-username/weather-dashboard"
              liveUrl="https://your-weather-app.com"
              technologies={["React", "Chart.js", "OpenWeather API", "Leaflet"]}
            /> */}
          </div>
        </section>

        <section id="contact" className="my-10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 text-lg">
            Get in touch via email: <a href="mailto:gadipudi.gautam@gmail.com" className="text-blue-500">you@example.com</a>
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
