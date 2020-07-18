import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import Portal from "components/Portal";
import Header from "components/Header";
import AboutMe from "components/AboutMe";
import Work from "components/Work";
import Skills from "components/Skills";
import Contact from "components/Contact";
import Footer from "components/Footer";

const Overlay = styled(animated.div)`
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: black;
`;
const Drawer = styled(animated.div)`
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  width: 320px;
  z-index: 10;
  background-color: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
`;

export default function Home() {
  const [anim, setAnim] = useSpring(() => ({
    value: 0,
    config: { friction: 20, tension: 100, mass: 1 },
  }));
  const styles = useMemo(
    () => ({
      drawer: {
        transform: anim.value
          .interpolate({
            range: [0, 1],
            output: [100, 0],
          })
          .interpolate(v => `translateX(${v}%)`),
      },
      overlay: {
        opacity: anim.value.interpolate({
          range: [0, 1],
          output: [0, 0.64],
        }),
      },
    }),
    [anim]
  );

  useEffect(() => {
    setAnim(() => ({ value: 1 }));
  }, []);

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
      <Footer />
      <Portal>
        <>
          <Overlay style={styles.overlay} />
          <Drawer style={styles.drawer} />
        </>
      </Portal>
    </>
  );
}
