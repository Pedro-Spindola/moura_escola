import React, { useState } from 'react';
import styles from './Perguntas.module.css'
import Button from './Button'
import Container from './Container'
import setas from '../assets/setas.svg'


function Perguntas() {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClickMouse = (option) => {
        if(activeIndex == option){
            setActiveIndex(null);
        }else{
            setActiveIndex(option);
        }
    };

  return (
    <section className={styles.section}>
        <Container className={styles.container}>
            <div className={styles.boxButton}>
                <h2 className={styles.textButtonH2}> Garanta sua vaga agora e comece sua jornada rumo ao sucesso! </h2>
                <Button/>
            </div>
            <div className={styles.boxPerguntas}>
                <div className={`${styles.mod_single1} ${activeIndex === 'p1' ? styles.mod_single1_aberto : ''}`} id="p1" onClick={() => handleClickMouse('p1')}>
                    <h1>Quais os métodos da mentoria?</h1>
                    <img src={setas} alt=""/>  
                </div>
                <div className={`${styles.mod_single2} ${activeIndex === 'p1' ? styles.mod_single2_aberto : ''}`}>
                    <h2>Os métodos de mentoria podem incluir reuniões virtuais, sessões de feedback, acompanhamento de projetos, e a troca de materiais educativos. Cada mentor pode adaptar seu método conforme as necessidades do mentorado, utilizando abordagens como coaching, orientação prática, ou troca de experiências.</h2>
                </div>
                <div className={`${styles.mod_single1} ${activeIndex === 'p2' ? styles.mod_single1_aberto : ''}`} id="p2" onClick={() => handleClickMouse('p2')}>
                    <h1>Quais as vantagens de fazer a mentoria?</h1>
                    <img src={setas} alt=""/>  
                </div>
                <div className={`${styles.mod_single2} ${activeIndex === 'p2' ? styles.mod_single2_aberto : ''}`}>
                    <h2>As vantagens de participar de uma mentoria incluem o acesso a conhecimentos e experiências de alguém mais experiente, networking com outros profissionais, desenvolvimento de habilidades específicas, e apoio na definição e alcance de metas pessoais e profissionais.</h2>
                </div>
                <div className={`${styles.mod_single1} ${activeIndex === 'p3' ? styles.mod_single1_aberto : ''}`} id="p3" onClick={() => handleClickMouse('p3')}>
                    <h1>Preciso ser maior de idade?</h1>
                    <img src={setas} alt=""/>  
                </div>
                <div className={`${styles.mod_single2} ${activeIndex === 'p3' ? styles.mod_single2_aberto : ''}`}>
                    <h2>Não necessariamente. Embora muitas mentorias sejam voltadas para adultos, adolescentes também podem participar, especialmente em programas de mentoria voltados para jovens. O importante é ter maturidade suficiente para aproveitar a experiência e estabelecer um bom relacionamento com o mentor.</h2>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Perguntas