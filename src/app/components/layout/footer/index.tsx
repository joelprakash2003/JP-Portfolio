import FooterLogo from "../footer-logo";
import Link from "next/link";
import { personalInfo } from "@/app/config/personal-info";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#education" },
  { label: "Goals", href: "#goals" },
];

const Footer = () => {
  const resumeHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resume.pdf`;
  const { email, phoneDisplay, phoneDial, linkedinUrl, githubUrl } = personalInfo;
  const socialLinks = [
    linkedinUrl ? { label: "LinkedIn", href: linkedinUrl } : null,
    githubUrl ? { label: "GitHub", href: githubUrl } : null,
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return (
    <footer className="py-12 sm:py-16 lg:py-20">
      <div className="container">
        <div className="rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] border border-white/70 bg-white/85 backdrop-blur-xl shadow-soft p-6 sm:p-8 lg:p-10 xl:p-12">
          <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3 sm:space-y-4 max-w-xl">
              <FooterLogo />
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                Thanks for spending time with my portfolio. Reach out anytime if you&apos;d like a fresh copy of my resume,
                references, or just want to talk shop.
              </p>
              <p className="text-xs sm:text-sm text-secondary/60">
                © {new Date().getFullYear()} Joel Prakash · Dallas, Texas
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div>
                <p className="eyebrow mb-2 sm:mb-3">Navigate</p>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm font-semibold text-primary">
                  {footerLinks.map((link) => (
                    <Link key={link.label} href={link.href} className="block hover:text-primary/70 transition-colors py-1 min-h-[32px] flex items-center">
                      {link.label}
                    </Link>
                  ))}
                  <a
                    href={resumeHref}
                    download
                    className="block hover:text-primary/70 transition-colors py-1 min-h-[32px] flex items-center"
                  >
                    Resume
                  </a>
                </div>
              </div>

              <div>
                <p className="eyebrow mb-2 sm:mb-3">Connect</p>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm font-semibold text-primary">
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="block hover:text-primary/70 transition-colors py-1 min-h-[32px] flex items-center"
                    >
                      Email
                    </a>
                  )}
                  {phoneDisplay && phoneDial && (
                    <a
                      href={`tel:${phoneDial}`}
                      className="block hover:text-primary/70 transition-colors py-1 min-h-[32px] flex items-center"
                    >
                      {phoneDisplay}
                    </a>
                  )}
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-primary/70 transition-colors py-1 min-h-[32px] flex items-center"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
