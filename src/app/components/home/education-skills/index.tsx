"use client";

import { useEffect, useState } from "react";
import { getDataPath } from "@/utils/image";
import {
  SiAmazon as SiAws,
  SiGit,
  SiJavascript,
  SiLinux,
  SiNodedotjs,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiGraphql,
} from "react-icons/si";
import { AnimateSection } from "../animate-section";

type EducationEntry = {
  title: string;
  description: string;
};

type EducationPayload = {
  education: EducationEntry[];
};

type EducationResponse = {
  educationData?: EducationPayload;
};

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "AWS", icon: SiAws, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
];

const projects = [
  {
    title: "TryHackMe Labs",
    description: "Completed 15+ rooms focused on penetration testing, OSINT, and network security. Currently working through Advanced Penetration Testing path.",
    tags: ["Penetration Testing", "OSINT", "Network Security"],
  },
  {
    title: "HackTheBox Challenges",
    description: "Active on HackTheBox solving machines and challenges to sharpen exploitation techniques and privilege escalation skills.",
    tags: ["Exploitation", "Privilege Escalation", "CTF"],
  },
];

const labs = [
  {
    title: "Home Lab Setup",
    description: "Building a TrueNAS server for network storage and learning virtualization fundamentals with Proxmox to host multiple VMs for testing.",
    tags: ["TrueNAS", "Proxmox", "Virtualization"],
  },
  {
    title: "SIEM Monitoring Tool",
    description: "Setting up a basic SIEM solution to collect and analyze system logs, practice identifying security events, and learn threat detection fundamentals.",
    tags: ["SIEM", "Log Analysis", "Threat Detection"],
  },
];

const EducationSkills = () => {
  const [educationData, setEducationData] = useState<EducationPayload | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"), {
          signal: abortController.signal,
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error(`Failed to fetch education data: ${res.statusText}`);
        }
        const data: EducationResponse = await res.json();
        setEducationData(data.educationData ?? null);
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
        console.error("Error fetching education data:", error);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <section id="education" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-shell via-cloud to-mint/30">
      <div className="container space-y-8 sm:space-y-10">
        <AnimateSection>
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <p className="eyebrow">Education & Skills</p>
            <h2>School projects + real tools.</h2>
            <p className="text-base sm:text-lg">
              Through coursework, certifications, and internships, I continue developing my cybersecurity knowledge and practical technical experience.
            </p>
          </div>
        </AnimateSection>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <AnimateSection delay={0.1}>
            <div className="rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] border border-white/80 bg-white/90 p-5 sm:p-6 lg:p-8 shadow-floating flex flex-col">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">Education</h3>
              <div className="space-y-5 sm:space-y-6 flex-1">
                {(educationData?.education ?? []).map((item, index) => (
                  <div key={item?.title} className="flex gap-3 sm:gap-4">
                    <div className="pt-0.5 sm:pt-1">
                      <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-haze/90 text-sm sm:text-base font-semibold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <h4 className="text-lg sm:text-xl font-semibold">{item?.title}</h4>
                      <p className="text-xs sm:text-sm text-secondary leading-relaxed">{item?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateSection>

          <AnimateSection delay={0.2}>
            <div className="rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] border border-white/80 bg-white/90 p-5 sm:p-6 lg:p-8 shadow-floating overflow-hidden relative flex flex-col">
              <h3 className="text-xl sm:text-2xl font-semibold">Technical toolkit</h3>
              <p className="text-xs sm:text-sm text-secondary mb-4 sm:mb-5">Here&apos;s what I&apos;m proficient in right now.</p>
              <div className="relative flex-1 min-h-[240px] sm:min-h-[280px]">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  
                  // Random positions and sizes for scattered effect - bigger icons, no boxes
                  const positions = [
                    { top: '8%', left: '6%', iconSize: 'h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12', rotate: '5deg' },
                    { top: '18%', left: '20%', iconSize: 'h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10', rotate: '-8deg' },
                    { top: '5%', left: '38%', iconSize: 'h-9 w-9 sm:h-11 sm:w-11 lg:h-14 lg:w-14', rotate: '12deg' },
                    { top: '15%', left: '58%', iconSize: 'h-10 w-10 sm:h-13 sm:w-13 lg:h-16 lg:w-16', rotate: '-5deg' },
                    { top: '8%', left: '78%', iconSize: 'h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11', rotate: '15deg' },
                    { top: '42%', left: '4%', iconSize: 'h-9 w-9 sm:h-11 sm:w-11 lg:h-13 lg:w-13', rotate: '-12deg' },
                    { top: '38%', left: '22%', iconSize: 'h-10 w-10 sm:h-12 sm:w-12 lg:h-15 lg:w-15', rotate: '8deg' },
                    { top: '45%', left: '42%', iconSize: 'h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12', rotate: '-15deg' },
                    { top: '40%', left: '62%', iconSize: 'h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10', rotate: '10deg' },
                    { top: '48%', left: '80%', iconSize: 'h-9 w-9 sm:h-11 sm:w-11 lg:h-14 lg:w-14', rotate: '-6deg' },
                    { top: '72%', left: '8%', iconSize: 'h-9 w-9 sm:h-11 sm:w-11 lg:h-13 lg:w-13', rotate: '18deg' },
                    { top: '75%', left: '26%', iconSize: 'h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11', rotate: '-10deg' },
                    { top: '70%', left: '46%', iconSize: 'h-10 w-10 sm:h-12 sm:w-12 lg:h-15 lg:w-15', rotate: '7deg' },
                    { top: '78%', left: '66%', iconSize: 'h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10', rotate: '-18deg' },
                    { top: '68%', left: '84%', iconSize: 'h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12', rotate: '14deg' },
                    { top: '28%', left: '85%', iconSize: 'h-9 w-9 sm:h-11 sm:w-11 lg:h-14 lg:w-14', rotate: '-9deg' },
                  ];
                  
                  const position = positions[index];
                  const animationDuration = 3 + (index % 5) * 0.5;
                  const animationDelay = index * 0.1;
                  
                  return (
                    <div
                      key={skill.name}
                      className="group absolute animate-float cursor-pointer"
                      style={{
                        top: position.top,
                        left: position.left,
                        animationDuration: `${animationDuration}s`,
                        animationDelay: `${animationDelay}s`,
                        transform: `rotate(${position.rotate})`,
                      }}
                    >
                      <Icon 
                        className={`${position.iconSize} transition-all duration-500 drop-shadow-md hover:drop-shadow-2xl hover:scale-110 sm:hover:scale-125 lg:hover:scale-150 hover:rotate-0 hover:z-50`} 
                        style={{ color: skill.color }} 
                      />
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[60]">
                        <div className="whitespace-nowrap rounded-xl bg-gradient-to-r from-primary to-primary/90 px-4 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-sm">
                          {skill.name}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimateSection>

          <AnimateSection delay={0.3}>
            <div className="rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] border border-white/80 bg-white/90 p-5 sm:p-6 lg:p-8 shadow-floating h-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">Projects</h3>
              <div className="space-y-3 sm:space-y-4">
                {projects.map((project) => (
                  <div key={project.title} className="rounded-xl sm:rounded-2xl border border-primary/10 bg-shell/60 p-4 sm:p-5 space-y-2 sm:space-y-3">
                    <h4 className="text-base sm:text-lg font-semibold text-primary">{project.title}</h4>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-primary/15 bg-white px-2.5 sm:px-3 py-0.5 sm:py-1 text-[0.65rem] sm:text-xs font-semibold text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateSection>

          <AnimateSection delay={0.4}>
            <div className="rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] border border-white/80 bg-white/90 p-5 sm:p-6 lg:p-8 shadow-floating h-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">Hands-on Practice</h3>
              <div className="space-y-3 sm:space-y-4">
                {labs.map((lab) => (
                  <div key={lab.title} className="rounded-xl sm:rounded-2xl border border-primary/10 bg-shell/60 p-4 sm:p-5 space-y-2 sm:space-y-3">
                    <h4 className="text-base sm:text-lg font-semibold text-primary">{lab.title}</h4>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">{lab.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {lab.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-primary/15 bg-white px-2.5 sm:px-3 py-0.5 sm:py-1 text-[0.65rem] sm:text-xs font-semibold text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateSection>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
