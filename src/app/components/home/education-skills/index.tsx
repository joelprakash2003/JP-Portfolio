"use client";
import { getDataPath } from "@/utils/image";
import { useEffect, useState } from "react";
import { SiJavascript, SiReact, SiNodedotjs, SiSqlite, SiAmazon as SiAws, SiGit, SiLinux, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", rating: 5 },
    { name: "React", icon: SiReact, color: "#61DAFB", rating: 5 },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", rating: 5 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", rating: 5 },
    { name: "SQL", icon: SiSqlite, color: "#003B57", rating: 4 },
    { name: "AWS", icon: SiAws, color: "#FF9900", rating: 4 },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", rating: 4 },
    { name: "Git", icon: SiGit, color: "#F05032", rating: 5 },
    { name: "Linux", icon: SiLinux, color: "#FCC624", rating: 4 },
  ];

  return (
    <section id="education" className="bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="overflow-hidden">
        <div className="container relative z-10">
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b-2 border-primary pb-7 mb-9 xl:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">Education & Technical Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
              {/* Education */}
              <div className="space-y-8">
                <h3 className="text-3xl font-semibold mb-8">Education</h3>
                {educationData?.education?.map((value: any, index: any) => {
                  return (
                    <div key={index} className="flex items-start gap-6 border-l-4 border-primary pl-6 py-4">
                      <div className="flex-1 flex flex-col gap-2">
                        <h5 className="text-xl font-bold">{value?.title}</h5>
                        <p className="font-normal text-secondary leading-relaxed">{value?.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Technical Skills */}
              <div className="space-y-8">
                <h3 className="text-3xl font-semibold mb-8">Technical Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 xl:gap-6">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={index}
                        className="p-6 border-2 border-softGray rounded-xl flex flex-col gap-4 items-center justify-between hover:border-primary hover:shadow-lg transition-all duration-300 bg-white group cursor-pointer"
                      >
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <IconComponent className="w-9 h-9" style={{ color: skill.color }} />
                          </div>
                          <p className="text-black font-semibold text-center">{skill.name}</p>
                        </div>
                        <div className="flex gap-1.5">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < skill.rating ? "bg-primary" : "bg-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
