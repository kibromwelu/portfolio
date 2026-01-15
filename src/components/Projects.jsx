import projectsData from "../data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-teal-400">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projectsData.map((proj, index) => (
          <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-teal-400/40 transition">
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-contain bg-gray-900" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-300 mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, i) => (
                  <span key={i} className="bg-gray-700 text-sm px-2 py-1 rounded">{t}</span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={proj.demo} className="text-teal-400 hover:underline">Demo</a>
                <a href={proj.github} className="text-teal-400 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
