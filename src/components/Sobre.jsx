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
                    <h2>Rafael Costa</h2>
                    <h3>Olá atuo na área de Design há mais de 15 anos. Sou o fundador do canal “NG-Design”, que conta com mais de 200 mil inscritos no YouTube. Desde o início da minha jornada como Designer e Artista, percebi que, além de criar, eu realmente gostava de ensinar. Enfrentei muitos desafios e diversos erros, mas cada perrengue me trouxe aprendizados valiosos e me fez mais resiliente.<br/><br/></h3>
                    <h3>Hoje, trago meu conhecimento através de conteúdos, cursos e da mentoria oferecida na “NextGen Design”. Acredito que todos têm um potencial criativo imenso, e minha missão é incentivar as pessoas a alcançarem a excelência. Cada vídeo que publico e cada aluno que mentoro são oportunidades de transformar sonhos em realidade, e estou aqui para mostrar que, com dedicação, é possível criar um futuro brilhante no design!</h3>
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
