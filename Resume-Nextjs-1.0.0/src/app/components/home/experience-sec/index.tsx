import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "Apr 2025",
            title: "Frontend Developer",
            company: "WorshipBuddy",
            type: "Remote",
            description: "Built ScheduleBuddy & PresenterBuddy web apps using React + Tailwind. Enhanced user experience through responsive design and intuitive interfaces. Continuously improving UI based on direct user feedback."
        },
        {
            year: "May 2025",
            title: "IT Services Intern",
            company: "GM Financial",
            type: "Fulltime",
            description: "Supported enterprise treasury systems ensuring consistent uptime. Automated critical workflows using FIS Scheduler to increase efficiency. Collaborated with over 100 internal users to troubleshoot and resolve technical issues."
        },
        {
            year: "May 2024",
            title: "ALIS System Administrator Intern",
            company: "Lockheed Martin",
            type: "Fulltime",
            description: "Assisted with system backups and disaster recovery procedures. Managed user accounts and permissions while monitoring system performance. Contributed to maintaining secure and reliable operational environments."
        },
        {
            year: "Jun 2021",
            title: "Sales and Reservation Agent",
            company: "U-Haul Moving & Storage",
            type: "Fulltime",
            description: "Handled customer inquiries and managed reservations efficiently. Provided excellent customer service and managed day-to-day operational tasks."
        }
    ];

    return (
        <section id="experience">
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;