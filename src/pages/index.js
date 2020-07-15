import React from "react";
import Header from "components/Header";
import AboutMe from "components/AboutMe";
import Work from "components/Work";
import Skills from "components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Header
        githubLink="https://github.com/sewb21"
        linkedinLink="https://www.linkedin.com/in/seb-smith-34a20a1a6/"
      />
      <AboutMe />
      <Work />
      <Skills />
      <Contact />
    </>
  );
}
