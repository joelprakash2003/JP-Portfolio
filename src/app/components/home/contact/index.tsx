"use client";

const Contact = () => {
  return (
    <section id="contact" className="no-print bg-gradient-to-br from-primary/5 to-blue-100 py-16 md:py-32">
      <div className="container">
        <div className="pt-8 pb-8">
          <div className="flex items-center justify-between gap-2 border-b-2 border-primary pb-7 mb-9 md:mb-16">
            <h2>Get In Touch</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-8 py-12">
              <p className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
                Feel free to reach out through email or phone. I'm always open to discussing new opportunities and interesting projects.
              </p>
              
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-8">
                <div className="flex flex-col items-center gap-3 w-full md:w-auto">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">Email</h3>
                  <a href="mailto:joelprakash90@gmail.com" className="text-base sm:text-lg text-primary hover:underline break-all">
                    joelprakash90@gmail.com
                  </a>
                </div>

                <div className="flex flex-col items-center gap-3 w-full md:w-auto">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">Phone</h3>
                  <a href="tel:+14692575506" className="text-base sm:text-lg text-primary hover:underline">
                    (469) 257-5506
                  </a>
                </div>

                <div className="flex flex-col items-center gap-3 w-full md:w-auto">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/joelprakash-/" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-primary hover:underline">
                    /in/joelprakash-
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
