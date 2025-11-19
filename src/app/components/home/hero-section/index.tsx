"use client";

import Image from "next/image";
import { useState } from "react";
import { getImgPath } from "@/utils/image";
import ResumeModal from "../resume-modal";

const focusAreas = [
  "Cybersecurity track @ UTD",
  "Frontend product work",
  "Automation & tooling",
  "People-first collaborator",
];

const statHighlights = [
  { title: "GM Financial", subtitle: "IT services intern · 2025" },
  { title: "WorshipBuddy", subtitle: "Frontend dev · present" },
  { title: "Lockheed Martin", subtitle: "ALIS sysadmin intern" },
];

const heroSignals = [
  { label: "Current role", value: "Frontend Developer · WorshipBuddy" },
  { label: "Latest internship", value: "IT Services · GM Financial (Summer 2025)" },
];

const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const resumeHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resume.pdf`;

  return (
    <>
      <section className="relative hero-section isolate overflow-hidden bg-gradient-to-b from-shell via-cloud to-peach/30">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-12 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-lilac blur-3xl opacity-60" />
          <div className="absolute top-16 right-0 h-64 w-64 sm:h-[28rem] sm:w-[28rem] rounded-full bg-mint blur-3xl opacity-70" />
          <div className="absolute bottom-0 left-1/4 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-peach blur-3xl opacity-60" />
        </div>

        <div className="container">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.95fr] pt-24 sm:pt-32 pb-12 sm:pb-16 lg:pb-24">
            <div className="space-y-5 sm:space-y-7 max-w-2xl">
              <p className="eyebrow text-secondary/80">Joel Prakash · Cybersecurity + Frontend</p>
              <h1>
                Hi, I&apos;m Joel — part security, part design… all powered by too much coffee.
                <span className="ml-2 inline-block align-middle text-5xl sm:text-6xl animate-bounce" role="img" aria-label="cartoon coffee mug" style={{ animationDuration: "2.4s" }}>
                  ☕️
                </span>
              </h1>
              <p className="text-lg text-secondary">
                I&apos;ve worked across enterprise IT and various technical projects, with a focus on reliability, clarity, and supporting users through
                well-designed systems.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3.5 text-base font-semibold shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-primary/90 min-h-[44px]"
                >
                  View resume
                </button>

                <a
                  href={resumeHref}
                  download="Joel-Prakash-Resume.pdf"
                  className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-white/70 px-6 py-3.5 text-base font-semibold text-primary backdrop-blur hover:border-primary hover:-translate-y-0.5 transition-transform min-h-[44px]"
                >
                  Download PDF
                </a>

                <a href="#experience" className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-4 py-3.5 text-sm font-semibold text-secondary hover:text-primary min-h-[44px]">
                  Browse experience →
                </a>
              </div>

              <div className="flex flex-wrap gap-2 pt-3">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-white/70 border border-white/60 px-4 py-2 text-sm font-semibold text-secondary backdrop-blur-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <div className="rounded-[32px] sm:rounded-[38px] border border-white/70 bg-white/85 backdrop-blur-2xl shadow-floating p-5 sm:p-6 lg:p-8">
                <div className="overflow-hidden rounded-[24px] sm:rounded-[32px] bg-lilac/40">
                  <Image
                    src={getImgPath("/images/home/banner/image-19.jpeg")}
                    alt="Joel Prakash"
                    width={640}
                    height={720}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl bg-haze/80 p-4 sm:p-5 border border-white/70">
                  {heroSignals.map((signal) => (
                    <div key={signal.label} className="flex flex-col gap-1">
                      <span className="text-xs uppercase tracking-[0.45em] text-secondary/70 font-semibold">
                        {signal.label}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-primary">{signal.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {statHighlights.map((stat) => (
                  <div
                    key={stat.title}
                    className="rounded-2xl sm:rounded-3xl border border-white/70 bg-white/85 p-4 sm:p-5 shadow-soft backdrop-blur text-left"
                  >
                    <p className="text-base sm:text-lg font-semibold text-primary">{stat.title}</p>
                    <p className="text-xs sm:text-sm text-secondary leading-snug">{stat.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </>
  );
};

export default HeroSection;
