"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { useState } from "react";
import ResumeModal from "../resume-modal";

const index = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52 bg-gradient-to-br from-blue-950 to-blue-900">
        <div className="container">
          <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
            <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
              <div>
                <div className="flex flex-col gap-4 mb-6">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight">
                    <span className="block">Hey,</span>
                    <span className="block">I'm Joel Prakash <span className="wave">👋</span></span>
                  </h1>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-light mb-6">Aspiring Cybersecurity Analyst | Frontend Developer</h2>
              </div>
              <p className="text-white font-normal max-w-md xl:max-w-xl text-base sm:text-lg opacity-90 leading-relaxed">
                I love building things that matter - from secure systems that protect data to user-friendly interfaces that make technology accessible. Take a look at some of my recent work and let's connect!
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
                <button 
                  onClick={() => setIsResumeModalOpen(true)}
                  className="relative overflow-hidden cursor-pointer w-full sm:w-fit py-2.5 sm:py-3 px-5 sm:px-6 border-2 border-white rounded-full group bg-white hover:bg-transparent transition-all duration-300 text-center"
                >
                  <span className="relative z-10 text-base sm:text-lg font-medium text-primary group-hover:text-white transition-colors duration-300">
                    View Resume
                  </span>
                </button>
                <a 
                  href="/resume.pdf" 
                  download="Joel-Prakash-Resume.pdf"
                  className="relative overflow-hidden cursor-pointer w-full sm:w-fit py-2.5 sm:py-3 px-5 sm:px-6 border-2 border-white rounded-full group hover:bg-white transition-colors duration-300 text-center"
                >
                  <span className="relative z-10 text-base sm:text-lg font-medium text-white group-hover:text-primary transition-colors duration-300">
                    Download PDF
                  </span>
                </a>
              </div>
            </div>
            <Image
              src={getImgPath("/images/home/banner/image-19.jpeg")}
              alt="Joel Prakash"
              width={685}
              height={650}
              className="block lg:hidden"
            />
          </div>
        </div>
        <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
          <Image
            src={getImgPath("/images/home/banner/image-19.jpeg")}
            alt="Joel Prakash"
            width={685}
            height={650}
            className=" absolute right-0 top-0 z-1"
          />
        </div>
      </section>

      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </>
  );
};

export default index;
