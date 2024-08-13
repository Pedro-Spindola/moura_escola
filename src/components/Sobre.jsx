import React from 'react'
import styles from './Sobre.module.css'
import Container from './Container'
import Imagem01 from '../assets/sobreImg01.jpg'
import Button from './Button'

function Sobre() {
  return (
    <section className={styles.sobreMentor}>
        <Container className={styles.container}>
            <div className={styles.boxSobre1}>
                <div className={styles.fotosOne}>
                    <img className={styles.imgSobreOne} src={Imagem01} alt=""/>
                </div>
                <div className={styles.textoOne}>
                    <h2>Você será mentorado por mim.</h2>
                    <h2>Leonardo "Palestino"</h2>
                    <h3>Atuo na área do Design há mais de 10 anos e sou dono do canal Palestino Design que conta com amis de 85 mil inscritos no Youtube. 
                        Desde que comecei a trilhar minha jornada como Designer/Artista, eu percebi que além de criar, eu gostava de ensinar.
                        Passei por muitos perrengues, tomei muito calote de cliente, errei e aprendi demais, mas nunca desisti.<br/><br/>
                    </h3>
                    <h3>
                    E por ter passado por tudo isso, junto com a vontade de ensinar.
                        Hoje eu trago o que sei através de conteúdos, cursos e da mentoria que a Moura - Escola de Arte oferece.
                        Além de acreditar que todos temos um potencial criativo absurdo, e eu sou o cara que gosta de incentivar pessoas a alcançarem a excelência.
                    </h3>
                </div>
            </div>
            <div className={styles.garantiVaga}>
                <h1 className={styles.textoGarantiVaga}>Garanta sua vaga agora e comece sua jornada rumo ao sucesso!</h1>
                <Button/>
            </div>
            <div className={styles.boxFrase}>
                <h1>Bóra ser criativo em um nível que você nunca imaginou?</h1>
            </div>
        </Container>
    </section>
  )
  
}

export default Sobre
