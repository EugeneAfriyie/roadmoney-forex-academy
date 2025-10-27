// src/pages/Mentorship/Mentorship.tsx
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import MentorshipHero from "../../components/Mentorship/MentorshipHero";


const Mentorship: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const bgClass =
    theme === "dark"
      ? "bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]"
      : "bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]";
  const textClass = theme === "dark" ? "text-white/90" : "text-gray-900";

  return (
    <main className={`font-montserrat transition-colors duration-500 ${bgClass} ${textClass}`}>
      <MentorshipHero />
      {/* <MentorshipCurriculum /> */}
      {/* <MentorHighlight /> */}
      {/* <MentorshipImpact /> */}
      {/* <MentorshipPlans /> */}
      {/* <MentorshipCTA /> */}
    </main>
  );
};

export default Mentorship;
