"use client";

import { AnimateSection } from "../animate-section";

const summaryPoints = [
  {
    title: "Professional summary",
    description:
      "UT Dallas senior (CIS + Cybersecurity) graduating December 2025. Recent GM Financial intern and current WorshipBuddy frontend developer.",
  },
  {
    title: "How I help",
    description:
      "Ensure systems are reliable while keeping UI work clean—comfortable jumping between tickets, docs, and screens.",
  },
  {
    title: "Clearance & clubs",
    description: "Secret clearance · Cybersecurity Club + UTD CSG member.",
  },
];

const quickFacts = [
  { label: "Focus", value: "Cybersecurity + Frontend" },
  { label: "Availability", value: "Entry level Cyber or IT roles" },
  { label: "Tools", value: "React · Next.js · AWS · ServiceNow" },
];

const funStuff = ["⚽ Soccer", "✈️ Travel", "📸 Photography", "🍜 Food hunts", "🎮 Home lab tinkering"];

const AboutMe = () => {
  return (
    <section id="about" className="relative isolate py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-cloud/60 to-shell" />
      <div className="container space-y-8 sm:space-y-10">
        <AnimateSection>
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <p className="eyebrow">About</p>
            <h2>Who I am in one glance.</h2>
            <p className="text-base sm:text-lg">
              Friendly teammate, detail-driven problem solver, and soon-to-graduate CIS student ready for roles in cybersecurity and IT operations.
            </p>
          </div>
        </AnimateSection>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <AnimateSection>
            <article className="rounded-[24px] sm:rounded-[32px] border border-white/75 bg-white/90 p-5 sm:p-7 lg:p-8 shadow-floating backdrop-blur space-y-4 sm:space-y-5 h-full">
              {summaryPoints.map((item) => (
                <div key={item.title} className="space-y-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </article>
          </AnimateSection>

          <div className="space-y-5 sm:space-y-6">
            <AnimateSection delay={0.1}>
              <div className="rounded-[24px] sm:rounded-[32px] border border-white/80 bg-white/90 p-5 sm:p-6 shadow-soft space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold">Quick facts</h3>
                <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-3">
                  {quickFacts.map((fact) => (
                    <div key={fact.label} className="rounded-xl sm:rounded-2xl bg-shell/60 px-3 sm:px-4 py-2.5 sm:py-3">
                      <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.4em] text-secondary/70">{fact.label}</p>
                      <p className="text-xs sm:text-sm font-semibold text-primary leading-tight mt-1">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateSection>

            <AnimateSection delay={0.2}>
              <div className="rounded-[24px] sm:rounded-[32px] border border-white/80 bg-white/90 p-5 sm:p-6 shadow-soft flex flex-col h-full">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Fun stuff</h3>
                <div className="flex flex-wrap gap-2 flex-grow items-start content-start">
                  {funStuff.map((item) => (
                    <span key={item} className="rounded-full border border-primary/10 bg-shell px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-primary">
                      {item}
                    </span>
                  ))}
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
