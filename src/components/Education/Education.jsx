import React from "react";
import { education } from "../../constents";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Pendidikan saya merupakan perjalanan pembelajaran dan pengembangan. Berikut rincian latar belakang akademis saya
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0 hidden sm:block"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative mb-20 flex flex-col sm:flex-row items-center"
          >
            {/* Timeline Dot */}
            <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 rounded-full z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Box */}
            <div
              className={`w-full sm:max-w-md bg-gray-900 border border-white p-6 sm:p-8 rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md transition-transform duration-300 hover:scale-105 ${index % 2 === 0
                  ? "sm:ml-[calc(50%+2rem)]"
                  : "sm:mr-[calc(50%+2rem)] sm:ml-auto"
                }`}
            >
              {/* Header (Logo and Title) */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Details */}
              <p className="text-sm text-gray-400 font-bold">
                Lokasi : {edu.grade}
              </p>
              <p className="mt-2 text-sm text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
