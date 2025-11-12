import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutContent from "../components/About/AboutContent";
import StatsCounter from "../components/About/StatsCounter";
import TeamGrid from "../components/About/TeamGrid";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
      <StatsCounter />
      <TeamGrid />
    </main>
  );
}
