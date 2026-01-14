import React from "react";
import aboutData from "../data/about.json";

export default function About() {
  const {
    name,
    headline,
    description,
    location,
    email,
    resume,
    socials,
    photo,
  } = aboutData;

  return (
    <section id="about" className="bg-gray-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        {/* Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-teal-400 shadow-2xl">
            <img
              src={photo}
              alt={`${name} profile`}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Description */}
        <div className="text-center md:text-left">
          <h3 className="text-sm uppercase tracking-widest text-teal-300">About</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">{name}</h2>
          <p className="text-teal-300 font-medium mt-1">{headline}</p>

          <p className="text-gray-300 mt-6 leading-relaxed">
            {description}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 justify-center md:justify-start">
            <a
              href={resume}
              className="inline-block px-6 py-2 bg-teal-400 text-black rounded-md font-semibold shadow hover:opacity-90 transition"
              download
            >
              Download Resume
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-block px-6 py-2 border border-gray-600 rounded-md text-gray-200 hover:text-white transition text-sm"
            >
              {email}
            </a>
          </div>

          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            {socials.github && (
              <a href={socials.github} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">GitHub</span>
                {/* simple icon fallback */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.18.09 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.27 3.39.97.11-.76.41-1.27.75-1.57-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.21 1.18a11.1 11.1 0 012.92-.39c.99 0 1.99.13 2.92.39 2.23-1.49 3.21-1.18 3.21-1.18.63 1.65.23 2.87.12 3.17.75.8 1.2 1.82 1.2 3.08 0 4.42-2.71 5.39-5.29 5.67.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56A11.53 11.53 0 0023.5 12.02C23.5 5.66 18.35.5 12 .5z"/>
                </svg>
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.7v1.6h.05c.52-.99 1.8-2.03 3.7-2.03C20.6 8.57 21 11 21 14.1V21h-4v-6.4c0-1.52-.03-3.47-2.1-3.47-2.1 0-2.42 1.64-2.42 3.36V21H9z"/>
                </svg>
              </a>
            )}
            {socials.twitter && (
              <a href={socials.twitter} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23 4.56c-.77.35-1.6.58-2.46.69a4.29 4.29 0 001.88-2.37 8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 3.16a4.28 4.28 0 001.33 5.72c-.67-.02-1.3-.21-1.85-.51v.05c0 2.06 1.47 3.78 3.42 4.18-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.73 2.15 2.99 4.04 3.03A8.56 8.56 0 012 19.54a12.07 12.07 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.37-.02-.56A8.66 8.66 0 0023 4.56z"/>
                </svg>
              </a>
            )}
          </div>

          <div className="mt-4 text-sm text-gray-400">
            <div><strong>Location:</strong> {location}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
