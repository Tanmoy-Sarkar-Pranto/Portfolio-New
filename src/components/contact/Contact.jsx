import React from "react"
import { getImageUrl } from "../../utils"

import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email" />
          <a href="mailto:ptanmoysarkar@gmail.com" target="_blank">
            Email
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github" />
          <a href="https://github.com/Tanmoy-Sarkar-Pranto" target="_blank">
            Github
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin" />
          <a
            href="https://www.linkedin.com/in/tanmoy-sarkar-pranto-5a25901b3/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact
