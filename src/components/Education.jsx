import { FaBuilding, FaCertificate, FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      icon: <FaGraduationCap />,
      degree: "Post-Baccalaureate Diploma in Information Technology",
      school: "Polytechnic University of the Philippines",
      year: "2022 – 2023",
      note: "Capstone: Rotating Staff Scheduler & Leave Filing Management System",
    },
    {
      icon: <FaBuilding />,
      degree: "BS Business Administration – Marketing Management",
      school: "University of Caloocan City",
      year: "2011 – 2017",
      note: null,
    },
  ];

  const certifications = [
    { title: "AWS Cloud Quest: Cloud Practitioner", date: "May 2026" },
    {
      title: "Civil Service Examination (CSE) — Professional Level",
      date: "March 2025",
    },
    {
      title: "Back-End & Front-End Web Development 101, Bayan Academy",
      date: "2024",
    },
    {
      title:
        "Mobile Application Development 101 & Data Analytics 101, Bayan Academy",
      date: "2023",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-0.5 bg-pink-400 rounded" />
          <p className="text-pink-400 text-xs font-semibold uppercase tracking-widest">
            My background
          </p>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-pink-50 rounded-2xl p-6 border border-pink-100 flex gap-4"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-pink-400 flex-shrink-0 border border-pink-100">
                {edu.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1 leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm text-pink-400 mb-1">{edu.school}</p>
                <p className="text-xs text-gray-400 mb-2">{edu.year}</p>
                {edu.note && (
                  <p className="text-xs text-gray-500 italic bg-white rounded-lg px-3 py-2 border border-pink-100">
                    {edu.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-5">
          <div className="w-6 h-0.5 bg-pink-400 rounded" />
          <h3 className="font-semibold text-gray-800 text-lg">
            Certifications
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-pink-50 rounded-2xl p-4 border border-pink-100"
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-pink-400 flex-shrink-0 border border-pink-100">
                <FaCertificate />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 leading-snug">
                  {cert.title}
                </p>
                <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
