"use client"
import Hero from "../_components/Hero";
import AboutComponent from '../_components/AboutComponent';

export default function About() {
  return (
    <>
      <Hero bgImage="/aboutHero.jpg" />
      <AboutComponent />
    </>
  );
}