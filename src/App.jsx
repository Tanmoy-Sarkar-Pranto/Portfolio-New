import React from "react"
import styles from "./App.module.css"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import EducationSkills from "./components/education&skills/EducationSkills"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <EducationSkills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
