// export default function Hero() {
//   return (
//     <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center px-4">
//       <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m <span className="text-teal-400">Kibrom</span></h1>
//       <p className="text-lg md:text-xl mb-8">Full-Stack Developer | I build scalable web apps & APIs.</p>
//       <a href="#projects" className="bg-teal-500 hover:bg-teal-400 text-black px-6 py-3 rounded-lg font-semibold">View My Work</a>
//     </section>
//   );
// }
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/assets/hero-bg.jpg')",
          filter: "brightness(0.5)",
        }}
      ></div>

      {/* Overlay content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-teal-400">Kibrom</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-gray-200">
          Full-Stack Developer | Building modern, scalable web apps
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-teal-400 text-black font-semibold rounded-md hover:bg-teal-300 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Gradient overlay bottom (optional) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </section>
  );
}
