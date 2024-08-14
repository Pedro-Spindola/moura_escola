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
                    <h1>Duvida 01</h1>
                    <img src={setas} alt=""/>  
                </div>
                <div className={`${styles.mod_single2} ${activeIndex === 'p1' ? styles.mod_single2_aberto : ''}`}>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum turpis nec odio malesuada, sed pharetra mi eleifend. In ultrices mauris nec nisi consequat, sed vestibulum justo vestibulum. Maecenas at faucibus orci.</h2>
                </div>
                <div className={`${styles.mod_single1} ${activeIndex === 'p2' ? styles.mod_single1_aberto : ''}`} id="p2" onClick={() => handleClickMouse('p2')}>
                    <h1>Duvida 01</h1>
                    <img src={setas} alt=""/>  
                </div>
                <div className={`${styles.mod_single2} ${activeIndex === 'p2' ? styles.mod_single2_aberto : ''}`}>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum turpis nec odio malesuada, sed pharetra mi eleifend. In ultrices mauris nec nisi consequat, sed vestibulum justo vestibulum. Maecenas at faucibus orci.</h2>
                </div>
                <div className={`${styles.mod_single1} ${activeIndex === 'p3' ? styles.mod_single1_aberto : ''}`} id="p3" onClick={() => handleClickMouse('p3')}>
                    <h1>Duvida 01</h1>
                    <img src={setas} alt=""/>  
                </div>
                <div className={`${styles.mod_single2} ${activeIndex === 'p3' ? styles.mod_single2_aberto : ''}`}>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum turpis nec odio malesuada, sed pharetra mi eleifend. In ultrices mauris nec nisi consequat, sed vestibulum justo vestibulum. Maecenas at faucibus orci.</h2>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Perguntas