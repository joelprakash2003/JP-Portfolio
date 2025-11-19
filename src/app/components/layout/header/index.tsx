"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Logo from "../logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#education" },
  { label: "Goals", href: "#goals" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navLinks[0].href);
  const navListRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [bubbleStyle, setBubbleStyle] = useState<{ width: number; left: number; opacity: number }>({
    width: 0,
    left: 0,
    opacity: 0,
  });
  const [isBubbleStretching, setIsBubbleStretching] = useState(false);
  const resumeHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resume.pdf`;

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => {
        const element = document.querySelector(link.href) as HTMLElement | null;
        return element ? { id: link.href, element } : null;
      })
      .filter(Boolean) as { id: string; element: HTMLElement }[];

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const id = `#${visible[0].target.id}`;
          setActiveSection(id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionElements.forEach(({ element }) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsBubbleStretching(true);
    const timeout = setTimeout(() => setIsBubbleStretching(false), 220);
    return () => clearTimeout(timeout);
  }, [activeSection]);

  useEffect(() => {
    const navEl = navListRef.current;
    const linkEl = linkRefs.current[activeSection];

    if (!navEl || !linkEl) return;

    const navRect = navEl.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();

    setBubbleStyle({
      width: linkRect.width,
      left: linkRect.left - navRect.left,
      opacity: 1,
    });
  }, [activeSection, menuOpen]);

  return (
    <header className="fixed top-3 sm:top-6 left-0 z-50 w-full pointer-events-none">
      <div className="flex justify-center px-3 sm:px-4 lg:px-6">
        <div className="pointer-events-auto w-full max-w-[82rem]">
          <div className="rounded-full border border-white/60 bg-white/80 backdrop-blur-xl shadow-soft flex items-center gap-2 sm:gap-3 lg:gap-6 px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3">
            <Logo />

            <nav className="relative hidden md:flex items-center gap-1 text-sm font-medium text-secondary" ref={navListRef}>
              <motion.span
                aria-hidden
                className="pointer-events-none absolute top-1/2 h-9 rounded-full border border-primary/20 bg-cloud shadow-soft"
                initial={false}
                animate={{
                  width: Math.max(bubbleStyle.width, 0),
                  x: bubbleStyle.left,
                  y: "-50%",
                  opacity: bubbleStyle.opacity,
                  scaleX: isBubbleStretching ? 1.2 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 40,
                  mass: 0.6,
                }}
              />
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  ref={(el) => {
                    linkRefs.current[item.href] = el;
                  }}
                  className={`relative z-10 rounded-full px-4 py-2 transition-colors ${
                    activeSection === item.href ? "text-primary" : "text-secondary hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-2 sm:gap-3">
              <Link
                href="#contact"
                className="hidden lg:inline-flex items-center justify-center rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-primary transition-all hover:border-primary hover:text-primary min-h-[40px]"
              >
                Let&apos;s talk
              </Link>

              <a
                href={resumeHref}
                className="inline-flex items-center justify-center rounded-full bg-primary text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:bg-primary/90 min-h-[40px]"
                download
              >
                Resume
              </a>

              <button
                className="md:hidden inline-flex items-center justify-center rounded-full border border-primary/20 bg-white/80 p-2 text-primary min-h-[40px] min-w-[40px]"
                aria-label="Toggle navigation"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 sm:mt-3 px-3 sm:px-4 lg:px-6">
          <div className="pointer-events-auto w-full max-w-[82rem] mx-auto rounded-2xl sm:rounded-3xl border border-white/70 bg-white/95 shadow-soft backdrop-blur-xl p-4 sm:p-6 space-y-3 sm:space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className={`block text-base font-semibold py-2 min-h-[44px] flex items-center ${
                  activeSection === item.href ? "text-primary" : "text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={closeMenu}
              className="block text-base font-semibold text-primary py-2 min-h-[44px] flex items-center"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
