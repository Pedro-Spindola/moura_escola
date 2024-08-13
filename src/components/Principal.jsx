import React from 'react'
import styles from './Principal.module.css'
import Container from './Container'
import logotipo from '../assets/logo.png'
import professor from '../assets/professor.png'
import setas from '../assets/setas.svg'

function Principal() {
  return (
    <main>
        <Container className={styles.container}>
            <div className={styles.box}>
                <div className={styles.boxOne}>
                    <div className={styles.boxImage}>
                        <img className={styles.imgLogo} src={logotipo}></img>
                        <div className={styles.textLogo}>
                            <h1 className={styles.nomeLogoH1}>Moura</h1>
                            <h2 className={styles.nomeLogoH2}>Escola de Arte</h2>
                        </div>
                    </div>
                    <h1 className={styles.titulo}>NOSSA ESCOLA</h1>
                    <h2 className={styles.subTitulo}>Se você quer <span className={styles.span}>aprender Design de verdade</span>, minha mentoria é para você. Com <span className={styles.span} >experiência e paixão</span>, ofereço um <span className={styles.span} >ensino personalizado</span> para desenvolver seu talento e alcançar suas metas. Junte-se a mim e <span className={styles.span} >transforme seu potencial em realidade</span>.</h2>
                </div>
                <div className={styles.boxTwo}>
                    <img className={styles.imgProfessor} src={professor} alt="" />
                </div>
            </div>
        </Container>
        <div className={styles.lineScroll}>
            <img className={styles.imgSetas} src={setas}></img>
        </div>
    </main>
  )
}

export default Principal