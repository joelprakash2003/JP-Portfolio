"use client";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactBar = () => {
  return (
    <section>
      <div className="border-t-2 border-primary bg-gradient-to-r from-blue-50 to-purple-50 shadow-md">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-6 md:py-7">
            {/* Email */}
            <Link
              href="mailto:joelprakash90@gmail.com"
              className="flex items-center gap-3 px-4 py-2 rounded-full text-secondary hover:text-primary hover:bg-primary/10 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-white group-hover:ring-2 group-hover:ring-primary transition-all">
                <FaEnvelope className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm md:text-base font-medium hidden sm:inline">joelprakash90@gmail.com</span>
            </Link>

            {/* Phone */}
            <Link
              href="tel:+14692575506"
              className="flex items-center gap-3 px-4 py-2 rounded-full text-secondary hover:text-primary hover:bg-primary/10 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-white group-hover:ring-2 group-hover:ring-primary transition-all">
                <FaPhoneAlt className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm md:text-base font-medium hidden sm:inline">(469) 257-5506</span>
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/joelprakash2003"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-full text-secondary hover:text-primary hover:bg-primary/10 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-white group-hover:ring-2 group-hover:ring-primary transition-all">
                <FaGithub className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm md:text-base font-medium hidden sm:inline">GitHub</span>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/joelprakash-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-full text-secondary hover:text-primary hover:bg-primary/10 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-white group-hover:ring-2 group-hover:ring-primary transition-all">
                <FaLinkedin className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm md:text-base font-medium hidden sm:inline">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
