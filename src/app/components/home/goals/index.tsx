"use client";
import { AnimateSection } from "../animate-section";
import { FaGraduationCap, FaCertificate, FaBriefcase, FaCode } from "react-icons/fa";

const Goals = () => {
  const goals = [
    {
      icon: <FaGraduationCap className="w-16 h-16" />,
      title: "Graduate & Continue Education",
      description: "Complete my Bachelor's in Computer Information Systems from UTD in December and begin my Master's program in January",
      color: "text-blue-600"
    },
    {
      icon: <FaCertificate className="w-16 h-16" />,
      title: "Security Certifications",
      description: "Pass the CompTIA Security+ and Network+ certifications to advance my cybersecurity expertise",
      color: "text-green-600"
    },
    {
      icon: <FaBriefcase className="w-16 h-16" />,
      title: "Land Cybersecurity Role",
      description: "Secure a full-time position as a Cybersecurity Analyst or Systems Administrator at a leading technology company",
      color: "text-purple-600"
    },
    {
      icon: <FaCode className="w-16 h-16" />,
      title: "Build & Contribute",
      description: "Develop open-source security tools and contribute to cybersecurity projects that make a real impact",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="goals" className="py-16 md:py-32 bg-white">
      <div className="container">
        <AnimateSection>
          <div className="flex items-center justify-between gap-2 border-b-2 border-primary pb-7 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">My Goals</h2>
          </div>
        </AnimateSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {goals.map((goal, index) => (
            <AnimateSection key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-xl transition-all duration-300 group">
                <div className={`${goal.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                    {goal.icon}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{goal.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{goal.description}</p>
              </div>
            </AnimateSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;

