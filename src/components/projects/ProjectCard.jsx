import React from "react"
import { getImageUrl } from "../../utils"
import styles from "./ProjectCard.module.css"

const ProjectCard = ({ project }) => {
  //   console.log(project)
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(project.imageSrc)}
        alt={project.title}
        className={styles.image}
      />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          )
        })}
      </ul>
      <div className={styles.links}>
        <a
          href={project.demo}
          className={project.demo ? styles.link : ""}
          target="_blank"
        >
          {project.demo ? "Demo" : ""}
        </a>
        <a href={project.source} className={styles.link} target="_blank">
          Source
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
