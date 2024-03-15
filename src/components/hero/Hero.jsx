import React from "react"
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils"

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Pranto</h1>
        <p className={styles.description}>
          I'm a full stack developer and have proficiency in React.js,
          Express.js, HTML, CSS and HTTP Networking. Reach out to learn mroe
          about me.
        </p>
        <a
          href="mailto:ptanmoysarkar@gmail.com"
          target="_blank"
          className={styles.contactBtn}
        >
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="hero image"
        className={styles.heroImg}
      />
      <div className={styles.topblur}></div>
      <div className={styles.bottomblur}></div>
    </section>
  )
}

export default Hero
