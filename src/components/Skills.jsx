import skillsData from "../data/skills.json";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-800 text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-teal-400">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 flex flex-col items-center shadow hover:shadow-teal-400/40 transition">
            <span className="text-3xl mb-2">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
