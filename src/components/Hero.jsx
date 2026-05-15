import jennifer from "../assets/jennifer.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-pink-50 pt-16 relative overflow-hidden">
      <div className="absolute w-72 h-72 rounded-full border-[40px] border-pink-100 -top-20 -right-20" />
      <div className="absolute w-52 h-52 rounded-full border-[30px] border-pink-100 -bottom-16 -left-10" />

      <div className="text-center px-6 relative z-10">
        <div className="relative inline-block mb-6">
          <div className="w-28 h-28 rounded-full border-4 border-pink-200 overflow-hidden mx-auto">
            <img
              src={jennifer}
              alt="Jennifer Cano Retome"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white" />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Jennifer Cano Retome
        </h1>
        <p className="text-pink-400 text-lg mb-4">Software Developer</p>

        <div className="flex gap-2 justify-center mb-6">
          {["Entry Level", "Career Shifter", "Open to Work"].map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white border border-pink-200 text-pink-400 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
          Marketing graduate and career shifter breaking into tech. I build web
          apps, test them, and keep learning every single day.
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <a
            href="#projects"
            className="bg-pink-400 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-pink-500 transition-colors"
          >
            View My Work
          </a>
          <a
            href="/jennifer-retome-cv.pdf"
            download="Jennifer_Retome_CV.pdf"
            className="bg-white border border-pink-300 text-pink-400 px-6 py-3 rounded-full text-sm hover:bg-pink-50 transition-colors"
          >
            Download CV
          </a>
        </div>

        <p className="text-gray-400 text-sm animate-bounce">
          ↓ scroll to explore
        </p>
      </div>
    </section>
  );
}

export default Hero;
