import AboutMe from "./components/home/about-me"
import Contact from "./components/home/contact"
import EducationSkills from "./components/home/education-skills"
import ExperienceSec from "./components/home/experience-sec"
import HeroSection from "./components/home/hero-section"
import ContactBar from "./components/home/hero-section/contact-bar"
import Goals from "./components/home/goals"

const page = () => {
  return (
    <>
      <main>
        <HeroSection />
        <ContactBar />
        <AboutMe />
        <ExperienceSec />
        <EducationSkills />
        <Goals />
        <Contact />
      </main>
    </>
  )
}

export default page