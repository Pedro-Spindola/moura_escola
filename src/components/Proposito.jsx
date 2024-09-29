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
                        <h1 className={styles.fresePrincipal} >A NextGen surge com o principal propósito de capacitar indivíduos ao transformar a criatividade em habilidade prática, tornando a educação em design acessível e útil para todos.</h1>
                    </div>
                    <div className={styles.conteudo}>
                        <div className={styles.boxDiferencial}>
                            <img className={styles.boxDiferencialImg} src={mentoria} alt=""/>
                            <div className={styles.textoDiferencial}>
                                <h2 className={styles.boxDiferencialH2}>Atenção personalizada e prática.</h2>
                                <h3 className={styles.boxDiferencialH3}>Na minha mentoria, você recebe atenção personalizada e prática, com sessões adaptadas ao seu nível e objetivos. Isso garante feedback específico sobre seus projetos, acelerando seu aprendizado e proporcionando um ambiente de suporte para experimentar novas técnicas.</h3>
                            </div>
                        </div>
                        <div className={styles.boxDiferencial}>
                            <img className={styles.boxDiferencialImg} src={horario} alt=""/>
                            <div className={styles.textoDiferencial}>
                                <h2 className={styles.boxDiferencialH2}>Aprenda no seu ritmo.</h2>
                                <h3 className={styles.boxDiferencialH3}>Uma das vantagens da minha mentoria é a possibilidade de aprender no seu ritmo. Sem pressa, você pode se aprofundar em cada conceito até se sentir confortável. Isso ajuda a consolidar seu conhecimento e garante que você se sinta confiante em suas habilidades.</h3>
                            </div>
                        </div>
                        <div className={styles.boxDiferencial}>
                            <img className={styles.boxDiferencialImg} src={online} alt=""/>
                            <div className={styles.textoDiferencial}>
                                <h2 className={styles.boxDiferencialH2}>Estude de qualquer lugar.</h2>
                                <h3 className={styles.boxDiferencialH3}>Com a minha mentoria, você pode estudar de qualquer lugar. Seja em casa ou em um café, as aulas online oferecem a flexibilidade necessária para integrar o aprendizado à sua rotina. Essa conveniência torna a experiência de aprendizado mais acessível e agradável.</h3>
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