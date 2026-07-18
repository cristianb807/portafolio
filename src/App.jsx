import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

import LightRays from "./ui/LightRays";

function App() {
  const [section, setSection] = useState("inicio");

  const transition = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  };

  const variants = {
    initial: {
      x: 250,
      rotateY: 18,
      opacity: 0,
      scale: 0.92,
    },

    animate: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },

    exit: {
      x: -250,
      rotateY: -18,
      opacity: 0,
      scale: 0.92,
    },
  };

  return (
    <main
      className="
        relative
        min-h-screen
        bg-black
        overflow-hidden
      "
    >
      {/* Fondo global */}
      <div
        className="
          absolute
          inset-0
          z-0
        "
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.8}
          lightSpread={1}
          rayLength={2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.05}
          distortion={0.03}
          className="opacity-60"
        />
      </div>

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          z-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)]
        "
      />

      {/* Contenido */}
      <div className="relative z-10">
        <Navbar setSection={setSection} />

        <AnimatePresence mode="wait">
          {section === "inicio" && (
            <motion.div
              key="inicio"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              style={{ perspective: 1200 }}
            >
           <Hero setSection={setSection} />
            </motion.div>
          )}

          {section === "sobre-mi" && (
            <motion.div
              key="sobre-mi"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              style={{ perspective: 1200 }}
            >
              <About />
            </motion.div>
          )}

          {section === "proyectos" && (
            <motion.div
              key="proyectos"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              style={{ perspective: 1200 }}
            >
              <Projects />
            </motion.div>
          )}

          {section === "contacto" && (
            <motion.div
              key="contacto"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              style={{ perspective: 1200 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default App;