import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      role: "Part-Time QA Tester",
      company: "ADJAO Tech Solutions Co.",
      date: "Mar 2026 – Present",
      desc: [
        "Tested a loan application platform to find bugs and ensure it works properly for users.",
        "Checked key features like loan submission, approval workflows, and error messages.",
        "Verified that data saved in the database matched what was shown in the app using DBeaver and Docker.",
        "Reported bugs to developers and re-tested fixes to confirm they were resolved.",
      ],
    },
    {
      role: "Freelance Software Engineer",
      company: "Self-Employed",
      date: "Apr – Dec 2025",
      desc: [
        "Built a full-stack dentist appointment system — front end, back end, APIs, and database.",
        "Tested all APIs using Postman and wrote documentation with Swagger.",
        "Used GitHub for version control and Trello to manage tasks with a teammate.",
      ],
    },
    {
      role: "Pharmacy Assistant / Stock Analyst",
      company: "Watsons Personal Care Store, QC",
      date: "Aug 2017 – Jan 2023",
      desc: [
        "Managed inventory, tracked stock levels, and handled product returns and expiries.",
        "Worked closely with the team to keep store operations running smoothly.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-pink-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-0.5 bg-pink-400 rounded" />
          <p className="text-pink-400 text-xs font-semibold uppercase tracking-widest">
            Where I've worked
          </p>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Experience</h2>
        <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
          A mix of tech and non-tech experience — but every role taught me
          something valuable.
        </p>

        <div className="relative border-l-2 border-pink-200 ml-3">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 ml-8 relative">
              <div className="absolute -left-11 top-4 w-4 h-4 bg-pink-400 rounded-full border-2 border-white shadow" />
              <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-gray-800 text-base">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-pink-400 bg-pink-50 border border-pink-200 rounded-full px-3 py-1 whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                <p className="text-sm text-pink-400 mb-4 flex items-center gap-2">
                  <FaBriefcase className="text-xs" /> {exp.company}
                </p>
                <ul className="space-y-2">
                  {exp.desc.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-500 leading-relaxed flex gap-2"
                    >
                      <span className="text-pink-300 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
