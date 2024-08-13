import React from 'react'
import styles from './Card.module.css'

function Card({foto, nome, comentario}) {
  return (
    <div className={styles.card}>
        <div className={styles.boxImg}>
            <img src={foto} alt="" />
        </div>
        <div className={styles.cardText}>
            <h2>{nome}</h2>
            <h3>{comentario}</h3>
        </div>
    </div>
  )
}

export default Card