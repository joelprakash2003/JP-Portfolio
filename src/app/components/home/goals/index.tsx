"use client";

import { AnimateSection } from "../animate-section";
import { FaBriefcase, FaCertificate, FaCode, FaGraduationCap } from "react-icons/fa";

const goals = [
  {
    icon: FaGraduationCap,
    title: "Graduate + launch grad school",
    description: "Finish my CIS degree at UTD this December and roll into a cybersecurity-focused master’s program in January.",
    accent: "from-lilac/60 to-haze/70",
  },
  {
    icon: FaCertificate,
    title: "Earn Security+ & Network+",
    description: "Deepen my security foundation and pair it with practical automation projects across identity, network, and cloud.",
    accent: "from-mint/70 to-peach/60",
  },
  {
    icon: FaBriefcase,
    title: "Secure a cyber role I love",
    description: "Join a team where I can blend SecOps instincts with frontend craft to ship safer internal tools and customer experiences.",
    accent: "from-peach/70 to-amber/60",
  },
  {
    icon: FaCode,
    title: "Contribute to open-source",
    description: "Build lightweight security tooling, dashboards, and components that empower small teams to act like big ones.",
    accent: "from-haze/70 to-lilac/60",
  },
];

const Goals = () => {
  return (
    <section id="goals" className="py-16 sm:py-24 lg:py-28">
      <div className="container space-y-8 sm:space-y-10">
        <AnimateSection>
          <div className="flex flex-col gap-3 sm:gap-4 max-w-3xl">
            <p className="eyebrow">Momentum</p>
            <h2>What I&apos;m building toward next.</h2>
            <p className="text-base sm:text-lg">
              Each milestone keeps me balanced between learning, applying, and sharing. It&apos;s how I stay curious while
              moving fast.
            </p>
          </div>
        </AnimateSection>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <AnimateSection key={goal.title} delay={index * 0.08}>
                <div className={`rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] bg-gradient-to-br ${goal.accent} border border-white/60 p-5 sm:p-6 lg:p-8 shadow-soft`}>
                  <div className="inline-flex h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-white text-primary shadow-soft mb-3 sm:mb-4">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{goal.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed">{goal.description}</p>
                </div>
              </AnimateSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Goals;

