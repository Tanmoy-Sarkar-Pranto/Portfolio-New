import React from "react"

import styles from "./EducationSkills.module.css"
import skills from "../../data/skills"
import education from "../../data/education"
import { getImageUrl } from "../../utils"

const EducationSkills = () => {
  return (
    <section id="skills" className={styles.container}>
      <div className={styles.leftDiv}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <h2 className={styles.title}>Education</h2>
        <ul className={styles.education}>
          {education.map((edu, id) => {
            return (
              <li key={id} className={styles.educationItem}>
                <img
                  src={getImageUrl(edu.imageSrc)}
                  alt={edu.institution}
                  style={{ height: "50px", width: "50px" }}
                />
                <div className={styles.educationItemDetails}>
                  <h3>{edu.institution}</h3>
                  <p>{`${edu.startDate} - ${edu.endDate}`}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default EducationSkills
