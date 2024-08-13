import React from 'react'
import styles from "./NavBar.module.css"
import icone_Instagram from '../assets/instagram.svg'
import icone_YouTube from '../assets/youTube.svg'
import icone_Discord from '../assets/discord.svg'

function NavBar() {
  return (
    <section>
        <nav>
            <div className={styles.boxIcones}>
                <div className={styles.icon}>
                    <img className={styles.iconesMidias} src={icone_Instagram}></img>
                </div>
                <div className={styles.icon}>
                  <img className={styles.iconesMidias} src={icone_YouTube}></img>
                </div>
                <div className={styles.icon}>
                  <img className={styles.iconesMidias} src={icone_Discord}></img>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default NavBar