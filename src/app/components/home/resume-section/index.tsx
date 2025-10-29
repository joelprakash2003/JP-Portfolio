import React from 'react';

const ResumeSection = () => {
  return (
    <section id="resume-web">
      <div className="container py-16 md:py-32">
        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
          <h2>Joel Prakash</h2>
          <a 
            href="/resume.pdf" 
            download="Joel-Prakash-Resume.pdf"
            className="relative overflow-hidden cursor-pointer w-fit py-3 px-6 border border-primary rounded-full group bg-primary"
          >
            <span className="relative z-10 text-lg font-medium text-white group-hover:text-white transition-colors duration-300">
              Download PDF
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="mb-4 text-3xl">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-xl">B.S. in Computer Information Systems and Technology</h4>
                  <p className="text-primary font-semibold">The University of Texas at Dallas</p>
                  <p className="text-sm">Cybersecurity Track • GPA: 3.5 • December 2025</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-xl">A.S. in Information Technology</h4>
                  <p className="text-primary font-semibold">Dallas College, Richland Campus</p>
                  <p className="text-sm">Chancellor's Honor Roll • GPA: 3.4 • June 2023</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="mb-4 text-3xl">Certifications</h3>
              <div className="space-y-2">
                <p><strong>CompTIA A+</strong></p>
                <p><strong>Entrepreneurship and Small Business</strong></p>
                <p><strong>Cybersecurity Risk Management</strong></p>
                <p><strong>System Admin Training (Microsoft)</strong></p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="mb-4 text-3xl">Technical Skills</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold mb-1">Languages & Frameworks:</p>
                  <p>JavaScript, React, Next.js, Tailwind CSS, SQL</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Tools & Platforms:</p>
                  <p>AWS, Tableau, Excel, Alteryx, Jira, ServiceNow</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Security & Systems:</p>
                  <p>Wireshark, Splunk, Nmap, Windows/Linux Admin</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Version Control:</p>
                  <p>Git, GitHub</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Security Clearance:</p>
                  <p className="text-primary">Secret</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-3xl">Contact</h3>
              <div className="space-y-2">
                <p><strong>Email:</strong> joelprakash90@gmail.com</p>
                <p><strong>Phone:</strong> +1 (469) 257-5506</p>
                <p><strong>LinkedIn:</strong> linkedin.com/in/joelprakash-</p>
                <p><strong>GitHub:</strong> github.com/joelprakash</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Experience */}
            <div>
              <h3 className="mb-4 text-3xl">Experience</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-xl">Frontend Developer</h4>
                      <p className="text-primary font-semibold">WorshipBuddy</p>
                    </div>
                    <p className="text-sm">Apr 2025 - Present</p>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Built ScheduleBuddy & PresenterBuddy web apps using React + Tailwind</li>
                    <li>Enhanced user experience through responsive design and intuitive interfaces</li>
                    <li>Continuously improving UI based on direct user feedback</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-xl">IT Services Intern</h4>
                      <p className="text-primary font-semibold">GM Financial</p>
                    </div>
                    <p className="text-sm">May 2025 - Aug 2025</p>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Supported enterprise treasury systems ensuring consistent uptime</li>
                    <li>Automated critical workflows using FIS Scheduler to increase efficiency</li>
                    <li>Collaborated with over 100 internal users to troubleshoot and resolve technical issues</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-xl">ALIS System Administrator Intern</h4>
                      <p className="text-primary font-semibold">Lockheed Martin</p>
                    </div>
                    <p className="text-sm">May 2024 - Aug 2024</p>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Assisted with system backups and disaster recovery procedures</li>
                    <li>Managed user accounts and permissions while monitoring system performance</li>
                    <li>Contributed to maintaining secure and reliable operational environments</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-xl">Sales and Reservation Agent</h4>
                      <p className="text-primary font-semibold">U-Haul Moving & Storage</p>
                    </div>
                    <p className="text-sm">Jun 2021 - Aug 2021</p>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Handled customer inquiries and reservations</li>
                    <li>Managed day-to-day operational tasks</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Notable Projects */}
            <div>
              <h3 className="mb-4 text-3xl">Notable Projects</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-xl mb-1">WorshipBuddy Apps</h4>
                  <p className="text-sm mb-2">React/Tailwind UI for church scheduling and presentation tools. Enhanced UX, improved mobile performance.</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Tailwind", "Next.js"].map((tag) => (
                      <span key={tag} className="bg-softGray px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-xl mb-1">Data Tracking Project</h4>
                  <p className="text-sm mb-2">Analyzed phone data (heart rate, steps, calories) using Excel. Created visualization dashboards.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Excel", "Data Analytics"].map((tag) => (
                      <span key={tag} className="bg-softGray px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-xl mb-1">SQL Injection Study</h4>
                  <p className="text-sm mb-2">Investigated SQL vulnerabilities and mitigation methods.</p>
                  <div className="flex flex-wrap gap-2">
                    {["SQL", "Security"].map((tag) => (
                      <span key={tag} className="bg-softGray px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

