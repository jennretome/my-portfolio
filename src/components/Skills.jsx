import { FaBug, FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";

function Skills() {
  const skillGroups = [
    {
      icon: <FaCode />,
      category: "Frontend",
      skills: ["React.js", "HTML", "CSS", "Tailwind", "JavaScript"],
    },
    {
      icon: <FaServer />,
      category: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "StrAPI"],
    },
    {
      icon: <FaDatabase />,
      category: "Database",
      skills: ["PostgreSQL", "DBeaver"],
    },
    {
      icon: <FaTools />,
      category: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Swagger",
        "Trello",
        "VS Code, NetBeans",
        "IntelliJ IDEA",
        "Docker",
        "DBeaver",
      ],
    },
    {
      icon: <FaBug />,
      category: "QA & Testing",
      skills: [
        "Functional Testing",
        "UI Testing",
        "API Testing",
        "Browser DevTools",
      ],
    },
  ];
  return (
    <section id="skills" className="py-20 px-6 bg-pink-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-0.5 bg-pink-400 rounded" />
          <p className="text-pink-400 text-xs font-semibold uppercase tracking-widest">
            What I know
          </p>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Skills</h2>
        <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
          Tools I've actually used in real projects — still growing, always
          learning.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-2xl p-5 border border-pink-100"
            >
              <div className="w-9 h-9 bg-pink-50 rounded-xl flex items-center justify-center text-pink-400 text-lg mb-3 border border-pink-100">
                {group.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-pink-50 text-pink-400 border border-pink-200 rounded-full px-3 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <span className="text-xs bg-gray-100 text-gray-500 border border-gray-200 rounded-full px-3 py-1">
            + Java (currently learning)
          </span>
          <span className="text-xs bg-gray-100 text-gray-500 border border-gray-200 rounded-full px-3 py-1">
            + AWS (currently learning)
          </span>
        </div>
      </div>
    </section>
  );
}
export default Skills;
