import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[303px] h-[440px] hidden lg:flex">
                <Image
                  src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="w-full h-full"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1" id="about-me">
                <p className="text-lg leading-relaxed">
                  I'm a senior at The University of Texas at Dallas pursuing my Bachelor's in Computer Information Systems and Technology with a track in Cybersecurity and Data Analytics. I'm passionate about exploring the latest innovations in IT, from system administration to network security. My goal is to contribute to the world of technology through secure, efficient, and user-friendly solutions.
                </p>

                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[
                    { count: "3+", label: "Years of experience" },
                    { count: "4", label: "Major Projects" },
                    { count: "100+", label: "Users supported" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14">
                  <h3 className="text-base xl:text-xl text-black mb-4">Hobbies & Interests</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      { name: "⚽ Soccer", icon: "⚽" },
                      { name: "✈️ Traveling", icon: "✈️" },
                      { name: "🍜 Cuisines", icon: "🍜" },
                      { name: "💻 PC Building", icon: "💻" }
                    ].map((hobby) => (
                      <p
                        key={hobby.name}
                        className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl hover:bg-primary hover:text-white transition-colors duration-300 cursor-default"
                      >
                        {hobby.name}
                      </p>
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

export default AboutMe;
