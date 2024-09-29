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
                            <h1 className={styles.nomeLogoH1}>NextGen</h1>
                            <h2 className={styles.nomeLogoH2}>NextGen Design</h2>
                        </div>
                    </div>
                    <h1 className={styles.titulo}>NOSSA INSTITUIÇÃO</h1>
                    <h2 className={styles.subTitulo}><span className={styles.span}>Pronto para elevar suas habilidades de design?</span> Minha mentoria oferece um ensino personalizado que se adapta ao seu ritmo, combinando <span className={styles.span} >experiência e dedicação</span> para transformar sua criatividade em resultados. Seja você um iniciante ou buscando aprimoramento, estou aqui para ajudá-lo a alcançar suas metas. <span className={styles.span} >Invista no seu futuro e transforme seu potencial em realidade</span> — inscreva-se agora!</h2>
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