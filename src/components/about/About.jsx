import React from "react"
import styles from "./About.module.css"
import { getImageUrl } from "../../utils"

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="about image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/frontend.png")}
              alt="cursor"
              style={{ height: "50px", width: "50px" }}
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in gui and optimized
                sites with React.js
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/backend.png")}
              alt="server"
              style={{ height: "50px", width: "50px" }}
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience in building RESTful API and backend system and
                proficiency in Node.js and Express.js
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/app.png")}
              alt="app"
              style={{ height: "50px", width: "50px" }}
            />
            <div className={styles.aboutItemText}>
              <h3>App Developer</h3>
              <p>
                I have experience in developing Android and IOS apps with
                Flutter
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
