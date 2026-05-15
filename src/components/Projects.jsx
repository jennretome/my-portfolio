import { FaGithub, FaLock } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Dentist Appointment System",
      desc: "A full-stack web app for scheduling and managing dental appointments. Built the front end, back end, APIs, and database from scratch.",
      tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      github: null,
      status: "completed",
      isPrivate: true,
    },
    {
      title: "Coming Soon",
      desc: "Next project in progress. Check back soon!",
      tags: ["Java"],
      github: null,
      status: "upcoming",
      isPrivate: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-0.5 bg-pink-400 rounded" />
          <p className="text-pink-400 text-xs font-semibold uppercase tracking-widest">
            What I've built
          </p>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Projects</h2>
        <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
          I'm just getting started — but every project here is something I
          actually built and learned from.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-2xl border overflow-hidden ${
                project.status === "upcoming"
                  ? "border-dashed border-pink-200 opacity-60"
                  : "border-pink-100 shadow-sm"
              }`}
            >
              <div
                className={`h-20 flex items-center justify-center text-3xl ${
                  project.status === "upcoming"
                    ? "bg-gray-50 text-gray-300"
                    : "bg-pink-50 text-pink-300"
                }`}
              >
                {project.status === "upcoming" ? "🔧" : "🦷"}
              </div>

              <div className="p-6 bg-white">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {project.title}
                  </h3>
                  {project.status === "completed" && (
                    <span className="text-xs bg-green-50 text-green-600 border border-green-200 rounded-full px-3 py-1 ml-2 whitespace-nowrap">
                      Completed
                    </span>
                  )}
                  {project.status === "upcoming" && (
                    <span className="text-xs bg-pink-50 text-pink-400 border border-pink-200 rounded-full px-3 py-1 ml-2 whitespace-nowrap">
                      In Progress
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  {project.desc}
                </p>

                {project.isPrivate && (
                  <p className="text-xs text-gray-400 italic mb-3 flex items-center gap-1">
                    <FaLock className="text-gray-300" />
                    Private client project — code available upon request.
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-pink-50 text-pink-400 border border-pink-200 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-pink-400 transition-colors"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
