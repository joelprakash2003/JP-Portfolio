"use client";

import { personalInfo } from "@/app/config/personal-info";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

type ContactItem = {
  label: string;
  value: string;
  href?: string | null;
  icon: typeof FiMail;
};

const { email, phoneDisplay, phoneDial, location, linkedinUrl, githubUrl } = personalInfo;

const contactItems: ContactItem[] = [];

if (email) {
  contactItems.push({
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    icon: FiMail,
  });
}

if (phoneDisplay && phoneDial) {
  contactItems.push({
    label: "Phone",
    value: phoneDisplay,
    href: `tel:${phoneDial}`,
    icon: FiPhone,
  });
}

if (location) {
  contactItems.push({
    label: "Location",
    value: location,
    href: null,
    icon: FiMapPin,
  });
}

if (linkedinUrl) {
  contactItems.push({
    label: "LinkedIn",
    value: linkedinUrl.replace(/^https?:\/\/(www\.)?linkedin\.com/i, "").replace(/\/+$/, ""),
    href: linkedinUrl,
    icon: FiLinkedin,
  });
}

if (githubUrl) {
  contactItems.push({
    label: "GitHub",
    value: githubUrl.replace(/^https?:\/\/(www\.)?github\.com\//i, "github.com/"),
    href: githubUrl,
    icon: FiGithub,
  });
}

const ContactBar = () => {
  return (
    <motion.section
      className="-mt-8 sm:-mt-10 lg:-mt-16 relative z-40"
      initial={{ opacity: 0, y: -12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">
        <div className="rounded-[20px] sm:rounded-[28px] border border-white/70 bg-white shadow-floating backdrop-blur px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3">
            {contactItems.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <div className="flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-primary/10 bg-shell px-3 sm:px-4 py-2.5 sm:py-3 min-h-[60px] sm:min-h-0">
                  <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-white text-primary shadow-soft flex-shrink-0">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-secondary/70 font-semibold">{label}</p>
                    <p className="text-sm sm:text-base font-semibold text-primary truncate">{value}</p>
                  </div>
                </div>
              );

              if (href) {
                return (
                  <a key={label} href={href} className="transition-transform hover:-translate-y-0.5">
                    {content}
                  </a>
                );
              }

              return (
                <div key={label} className="transition-transform hover:-translate-y-0.5">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactBar;
