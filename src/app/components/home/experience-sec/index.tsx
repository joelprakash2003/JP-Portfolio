import { AnimateSection } from "../animate-section";

const experiences = [
  {
    year: "2025 · Present",
    title: "Frontend Developer",
    company: "WorshipBuddy · Dallas, TX",
    type: "Freelance",
    description:
      "Helped design and build ScheduleBuddy and PresenterBuddy so church teams can run weekly services with less friction.",
    highlights: [
      "Watched real testers use the tools and streamlined flows based on what slowed them down, making navigation clearer and faster.",
      "Built responsive layouts in React, Next.js, and Tailwind to keep the experience smooth on both mobile and desktop.",
      "Kept presenter and admin views visually aligned so cues and service steps stay consistent for everyone.",
    ],
    skills: ["React", "Next.js", "Tailwind", "UX writing"],
  },
  {
    year: "Summer 2025",
    title: "IT Services Intern",
    company: "GM Financial · Arlington, TX",
    type: "Internship",
    description:
      "As an intern, I supported applications like Quantum, ABS Suite, and other treasury tools for 100+ coworkers, keeping jobs and handoffs clear.",
    highlights: [
      "Built recurring automations in FIS Scheduler to replace manual steps",
      "Documented troubleshooting + change plans so shifts could pick up fast",
      "Provided application support with daily status updates to treasury leads",
    ],
    skills: ["FIS Scheduler", "ServiceNow", "SQL", "Documentation"],
  },
  {
    year: "Summer 2024",
    title: "ALIS System Administrator Intern",
    company: "Lockheed Martin · Fort Worth, TX",
    type: "Internship",
    description:
      "Helped keep ALIS environments for the F-35 program backed up, monitored, and properly permissioned.",
    highlights: [
      "Assisted with restores and disaster recovery walk-throughs",
      "Configured administrator/service accounts with least-privilege rules",
      "Tracked hardware health across multiple sites and escalated issues early",
    ],
    skills: ["Windows/Linux", "Access control", "Monitoring", "Scripting"],
  },
  {
    year: "2021",
    title: "Sales & Reservation Agent",
    company: "U-Haul · Dallas, TX",
    type: "Full-time",
    description:
      "Handled fast-paced customer support, reservations, and follow-ups while keeping daily teams in sync.",
    highlights: [
      "Translated customer needs into clear next steps",
      "Boosted rentals through proactive check-ins",
      "Learned to stay patient under pressure",
    ],
    skills: ["Customer service", "Coordination", "Upselling"],
  },
];

const ExperienceSec = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32">
      <div className="container space-y-8 sm:space-y-10">
        <AnimateSection>
          <div className="flex flex-col gap-3 sm:gap-4 max-w-3xl">
            <p className="eyebrow">Experience</p>
            <h2>Internships and freelance work that keep me learning.</h2>
            <p className="text-base sm:text-lg text-secondary">
              I split my time between supporting enterprise systems and solving technical problems at scale. Here&apos;s how that shows up in each role.
            </p>
          </div>
        </AnimateSection>

        <div className="space-y-5 sm:space-y-6">
          {experiences.map((experience, index) => (
            <AnimateSection key={experience.title} delay={index * 0.05}>
              <article className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] border border-white/70 bg-white/90 p-5 sm:p-6 lg:p-8 shadow-floating">
                <div className="absolute right-8 sm:right-12 top-6 sm:top-8 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-lilac blur-3xl opacity-40" />
                <div className="absolute bottom-3 sm:bottom-4 left-8 sm:left-12 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-mint blur-3xl opacity-30" />

                <div className="relative grid gap-4 sm:gap-6 lg:grid-cols-[260px_1fr]">
                  <div className="space-y-1.5 sm:space-y-2">
                    <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.5em] text-secondary/70 font-semibold">{experience.year}</p>
                    <h3 className="text-xl sm:text-2xl font-semibold">{experience.title}</h3>
                    <p className="text-sm sm:text-base font-semibold text-secondary">{experience.company}</p>
                    <p className="text-xs sm:text-sm text-secondary/80">{experience.type}</p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base text-secondary leading-relaxed">{experience.description}</p>
                    <ul className="space-y-2 text-sm sm:text-base text-secondary leading-relaxed">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-primary/60" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {experience.skills.map((skill) => (
                        <span key={skill} className="rounded-full bg-shell px-2.5 sm:px-3 py-1 text-xs font-semibold text-primary">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </AnimateSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
