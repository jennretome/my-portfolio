import { FaBook, FaBug, FaCode, FaMapMarkerAlt } from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaCode />,
      title: "Developer",
      desc: "React, Node.js, PostgreSQL — full stack from UI to database.",
    },
    {
      icon: <FaBug />,
      title: "QA Tester",
      desc: "I find bugs before users do. Functional, UI, and API testing.",
    },
    {
      icon: <FaBook />,
      title: "Lifelong Learner",
      desc: "Currently studying Java and AWS. Always adding something new to my toolkit.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Based in PH",
      desc: "Caloocan City, Philippines. Open to remote opportunities.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-0.5 bg-pink-400 rounded" />
          <p className="text-pink-400 text-xs font-semibold uppercase tracking-widest">
            Who I am
          </p>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">About Me</h2>
        <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
          I came from a non-tech background but made a deliberate shift into
          software development. I'm an entry-level developer who takes learning
          seriously — I build real projects, ask the right questions, and show
          up ready to grow. What I lack in years of experience, I make up for in
          drive and curiosity.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-pink-50 rounded-2xl p-5 border border-pink-100"
            >
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center text-pink-400 text-lg mb-3 border border-pink-100">
                {card.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
