// export default function Hero() {
//   return (
//     <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center px-4">
//       <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m <span className="text-teal-400">Kibrom</span></h1>
//       <p className="text-lg md:text-xl mb-8">Full-Stack Developer | I build scalable web apps & APIs.</p>
//       <a href="#projects" className="bg-teal-500 hover:bg-teal-400 text-black px-6 py-3 rounded-lg font-semibold">View My Work</a>
//     </section>
//   );
// }
import React, { useState } from "react";
import aboutData from "../data/about.json";

export default function Hero() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/hero-bg.jpg)`,
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
          <button
            onClick={() => setShowContactModal(true)}
            className="px-8 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Gradient overlay bottom (optional) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full relative border border-gray-700">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-teal-400 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-teal-400 mb-6 font-mono">Let's Connect</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-teal-400 font-semibold w-20">Phone:</span>
                <span>{aboutData.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-teal-400 font-semibold w-20">Email:</span>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${aboutData.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-400 transition"
                >
                  {aboutData.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-teal-400 font-semibold w-20">LinkedIn:</span>
                <a href={aboutData.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-teal-400 transition truncate">
                  {aboutData.socials.linkedin}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-teal-400 font-semibold w-20">Facebook:</span>
                <a href={aboutData.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-teal-400 transition truncate">
                  {aboutData.socials.facebook}
                </a>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowContactModal(false)}
                className="bg-teal-400 text-black px-6 py-2 rounded-md hover:bg-teal-500 transition font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
