"use client";

import { personalInfo } from "@/app/config/personal-info";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: typeof FiMail;
};

const { email, phoneDial, phoneDisplay, linkedinUrl, githubUrl } = personalInfo;

const contactMethods: ContactMethod[] = [
  email && {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    icon: FiMail,
  },
  phoneDial &&
    phoneDisplay && {
      label: "Phone",
      value: phoneDisplay,
      href: `tel:${phoneDial}`,
      icon: FiPhone,
    },
  linkedinUrl && {
    label: "LinkedIn",
    value: linkedinUrl.replace(/^https?:\/\/(www\.)?linkedin\.com/i, "").replace(/\/+$/, ""),
    href: linkedinUrl,
    icon: FiLinkedin,
  },
].filter((method): method is ContactMethod => Boolean(method));

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28">
      <div className="container">
        <div className="rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] border border-white/80 bg-white/95 p-6 sm:p-8 lg:p-12 shadow-floating">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <p className="eyebrow text-secondary/70">Reach out</p>
            <h2>Want my resume or a quick chat? I&apos;m easy to reach.</h2>
            <p className="text-base sm:text-lg">
              Email, text, or connect on LinkedIn and I&apos;ll respond as soon as I step away from class or the code editor.
              Happy to share more about my internships, projects, or availability.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-3">
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-2xl sm:rounded-3xl border border-primary/10 bg-shell/60 p-4 sm:p-5 transition-transform hover:-translate-y-1"
              >
                <div className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-white text-primary shadow-soft mb-3 sm:mb-4">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <p className="text-[0.65rem] sm:text-sm uppercase tracking-[0.35em] sm:tracking-[0.4em] text-secondary/70 font-semibold">{label}</p>
                <p className="mt-1.5 sm:mt-2 text-base sm:text-lg font-semibold text-primary break-all">{value}</p>
              </a>
            ))}
          </div>

          {(email || githubUrl) && (
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3.5 text-base font-semibold transition-transform hover:-translate-y-0.5 min-h-[48px]"
                >
                  Email Joel directly
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/10 px-5 py-3.5 text-sm font-semibold text-secondary hover:text-primary min-h-[48px]"
                >
                  <FiGithub className="h-4 w-4" />
                  GitHub profile
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
