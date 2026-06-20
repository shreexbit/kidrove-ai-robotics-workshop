import { useRef } from "react";

import Hero from "./components/Hero";
import Workshop from "./components/Workshop";
import CurriculumTimeline from "./components/CurriculumTimeline";
import LearningOutcomes from "./components/LearningOutcomes";
import WhyParentsLove from "./components/WhyParentsLove";
import FAQSection from "./components/FAQSection";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import RobotAssistant from "./components/RobotAssistant";

export default function App() {
  const curriculumRef = useRef(null);
  const registerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="font-sans antialiased">
      <Hero
        onEnroll={() => scrollToSection(registerRef)}
        onExplore={() => scrollToSection(curriculumRef)}
      />

      <Workshop />

      <div ref={curriculumRef}>
        <CurriculumTimeline />
      </div>

      <LearningOutcomes />

      <WhyParentsLove />

      <FAQSection />

      <div ref={registerRef}>
        <RegistrationForm />
      </div>

      <Footer />

      <RobotAssistant />
    </div>
  );
}