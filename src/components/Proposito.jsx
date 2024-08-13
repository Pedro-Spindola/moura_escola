import React from 'react'
import styles from './Proposito.module.css'
import Container from './Container'
import mentoria from '../assets/mentoria.svg'
import horario from '../assets/horario.svg'
import online from '../assets/online.svg'
import Button  from './Button'

function Proposito() {
  return (
    <section className={styles.sectionProposito}>
        <Container className={styles.container}>
            <div className={styles.lineProposito}>
                <div className={styles.container1}>
                    <div className={styles.fresePrincipal}>
                        <h1 className={styles.fresePrincipal} >A Moura surge com o principal propósito de capacitar indivíduos ao transformar a criatividade em habilidade prática, tornando a educação em design acessível e útil para todos.</h1>
                    </div>
                    <div className={styles.conteudo}>
                        <div className={styles.boxDiferencial}>
                            <img className={styles.boxDiferencialImg} src={mentoria} alt=""/>
                            <div className={styles.textoDiferencial}>
                                <h2 className={styles.boxDiferencialH2}>Atenção personalizada e prática.</h2>
                                <h3 className={styles.boxDiferencialH3}>Nossas mentorias individuais são baseadas em experiências de mercado, focando em aplicações práticas e respondendo às suas dúvidas. Receba feedback detalhado sobre projetos e desenvolva suas habilidades com orientação especializada.</h3>
                            </div>
                        </div>
                        <div className={styles.boxDiferencial}>
                            <img className={styles.boxDiferencialImg} src={horario} alt=""/>
                            <div className={styles.textoDiferencial}>
                                <h2 className={styles.boxDiferencialH2}>Aprenda no seu ritmo.</h2>
                                <h3 className={styles.boxDiferencialH3}>Com horários flexíveis, você escolhe quando assistir às aulas e sessões de mentoria. Participe de videochamadas, peça feedback sobre projetos e esclareça dúvidas, tudo conforme sua conveniência.</h3>
                            </div>
                        </div>
                        <div className={styles.boxDiferencial}>
                            <img className={styles.boxDiferencialImg} src={online} alt=""/>
                            <div className={styles.textoDiferencial}>
                                <h2 className={styles.boxDiferencialH2}>Estude de qualquer lugar.</h2>
                                <h3 className={styles.boxDiferencialH3}>Acesse nossas aulas totalmente online, com salas de aula virtuais e exercícios individuais. Receba feedback detalhado e desenvolva suas habilidades de forma prática, sem sair de casa.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.lineAlunos}>
                <div className={styles.container2}>
                    <div className={styles.garantiVaga}>
                        <h1 className={styles.textoGarantiVaga}>Garanta sua vaga agora e comece sua jornada rumo ao sucesso!</h1>
                        <Button/>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Proposito