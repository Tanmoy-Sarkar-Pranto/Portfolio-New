import React from "react"
import styles from "./Navbar.module.css"
import { useState } from "react"
import { getImageUrl } from "../../utils"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className={styles.navbar}>
      <a href="/" className={styles.title}>
        My Portfolio
      </a>
      <div className={styles.menu}>
        <img
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt=""
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
