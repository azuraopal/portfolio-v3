import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import HeroImage from "../../assets/nopal.jpg";

function About() {
  return (
    <section
      id="about"
      className="py-4 px-4 sm:px-8 md:px-12 font-sans mt-16 md:mt-24 lg:mt-32 text-white"
    >
      {/* Flex container for layout: text on left, image on right (on desktop) */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left side: Text content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-6xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Muhammad Noval Supriyadi
          </h2>

          {/* Dynamic typing title */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-4 leading-tight">
            <span className="text-white">I am a</span>
            <Typewriter
              words={[
                "   Backend Developer",
                "   Frontend Developer",
                "   Tech Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          {/* Short description */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Saya adalah seorang software engineer yang memiliki semangat tinggi dengan dasar yang kuat dalam pengembangan web serta minat besar dalam mengeksplorasi teknologi baru. Saya menikmati tantangan dan senang memecahkan masalah kompleks melalui solusi yang inovatif. Tujuan saya adalah menciptakan aplikasi yang berdampak, meningkatkan pengalaman pengguna, dan membawa perubahan positif.
          </p>

          {/* Resume Button */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-2 px-8 rounded-full mt-2 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 4px 20px rgba(130, 69, 236, 0.5)",
            }}
          >
            Resume
          </a>
        </div>

        {/* Right side: Profile image with tilt effect */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            tiltReverse={true}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full border-4 border-purple-700 overflow-hidden"
          >
            <img
              src={HeroImage}
              alt="Muhammad Noval Supriyadi"
              className="w-full h-full object-cover rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default About;
