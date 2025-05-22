import React from 'react';
import { SkillsInfo } from '../../constents.js';

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-[8vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
        <div className="w-24 h-1 bg-[#8245ed] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of skills forged through practice, projects, and passion.
        </p>
      </div>

      {/* Skills Wrapper */}
      <div className="flex flex-wrap justify-center gap-8">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 border border-white rounded-2xl p-6 w-full max-w-sm shadow-[0_0_20px_rgba(130,69,236,0.3)]"
          >
            {/* Category Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-300 mb-6">
              {category.title}
            </h3>

            {/* Skills List */}
            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 border border-gray-700 rounded-3xl px-3 py-2 text-gray-300 hover:bg-[#8245ed1a] transition"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="h-6 w-auto object-contain"
                  />
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
