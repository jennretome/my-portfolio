import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "jennifer.retome13@gmail.com",
    },
    { icon: <FaPhone />, label: "Phone", value: "+63-9453846936" },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Caloocan City, Philippines",
    },
    { icon: <FaGithub />, label: "GitHub", value: "github.com/yourusername" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-pink-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-0.5 bg-pink-400 rounded" />
          <p className="text-pink-400 text-xs font-semibold uppercase tracking-widest">
            Let's talk
          </p>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Contact Me</h2>
        <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
          I'm currently open to entry-level roles, freelance work, and
          collaborations. Feel free to reach out — I'd love to connect!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-pink-100 flex items-center gap-4 shadow-sm"
            >
              <div className="w-11 h-11 bg-pink-50 rounded-xl flex items-center justify-center text-pink-400 flex-shrink-0 border border-pink-100">
                {contact.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">{contact.label}</p>
                <p className="text-sm font-medium text-gray-700">
                  {contact.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-sm mb-1">
            Comfortable working across
          </p>
          <p className="text-gray-500 text-sm font-medium">
            Windows · Linux / Ubuntu · macOS
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 pt-6 border-t border-pink-100 text-center">
        <p className="text-sm text-gray-400">
          © 2026 Jennifer Cano Retome · Built with React.js & Tailwind CSS
        </p>
      </div>
    </section>
  );
}

export default Contact;
