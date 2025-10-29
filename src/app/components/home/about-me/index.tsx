"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { AnimateSection } from "../animate-section";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <AnimateSection>
              <div className="flex items-center justify-between gap-2 border-b-2 border-primary pb-7 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
              </div>
            </AnimateSection>

            <AnimateSection delay={0.2}>
              <div className="pt-10 xl:pt-16 flex flex-col lg:flex-row gap-10 items-start">
                {/* Left: Description */}
                <div className="w-full lg:w-1/2" id="about-me">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    I'm a senior at The University of Texas at Dallas pursuing my Bachelor's in Computer Information Systems and Technology with a track in Cybersecurity and Data Analytics. I'm passionate about exploring the latest innovations in IT, from system administration to network security. My goal is to contribute to the world of technology through secure, efficient, and user-friendly solutions.
                  </p>
                </div>

                {/* Right: Stats and Hobbies */}
                <div className="w-full lg:w-1/2 space-y-8">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-5">
                    {[
                      { count: "3+", label: "Years of experience" },
                      { count: "4", label: "Major Projects" },
                      { count: "100+", label: "Users supported" },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-primary">{item.count}</h3>
                        <p className="text-sm md:text-base text-gray-600 mt-2">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Hobbies */}
                  <div>
                    <h3 className="text-xl xl:text-2xl font-semibold text-gray-800 mb-4">Hobbies & Interests</h3>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {[
                        { name: "⚽ Soccer" },
                        { name: "✈️ Travel" },
                        { name: "📸 Photography" },
                        { name: "🍜 Foodie" },
                        { name: "🎨 Graphic Design" }
                      ].map((hobby) => (
                        <div
                          key={hobby.name}
                          className="group cursor-default"
                        >
                          <p className="bg-white py-3 md:py-4 px-4 md:px-5 rounded-full text-sm md:text-base xl:text-lg font-medium shadow-md hover:shadow-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                            {hobby.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
