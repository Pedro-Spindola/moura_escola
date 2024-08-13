import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from './Card'
import Container from './Container'
import pessoa01 from '../assets/pessoa1.jpg'
import pessoa02 from '../assets/pessoa2.jpg'
import pessoa03 from '../assets/pessoa3.jpg'
import pessoa04 from '../assets/pessoa4.jpg'
import pessoa05 from '../assets/pessoa5.jpg'
import { useState, useEffect } from 'react'
import styles from './slider.module.css'

function Slider() {

    const [slidePerView, setSlidePerView] = useState(3)

    useEffect(() => {
        function handleResize(){
            if(window.innerWidth >= 1400){
                setSlidePerView(3);
            } else if(window.innerWidth < 1400 && window.innerWidth >= 1000){
                setSlidePerView(2);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])
    
    return (
        <section className={styles.section}>
            <Container className={styles.container}>
                <div className={styles.boxFrase}>
                    <h1>Experiências dos Meus Mentorados</h1>
                </div>
                <Swiper className={styles.swiper_slide} loop={true} spaceBetween={60} autoplay={{ delay: 3000 }} slidesPerView={slidePerView}>
                    <SwiperSlide>
                        <Card foto={pessoa01} nome="Maria Fernandes" comentario="A mentoria foi transformadora! Consegui aprimorar minhas habilidades de design e me sinto muito mais confiante para enfrentar desafios profissionais. Recomendo a todos que querem evoluir na carreira." />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card foto={pessoa02} nome="Lucas Almeida" comentario="A abordagem prática e os feedbacks detalhados me ajudaram a enxergar o design gráfico de uma maneira completamente nova. Minha evolução foi perceptível desde as primeiras sessões." />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card foto={pessoa04} nome="Carolina Souza" comentario="O Palestino não apenas me ensinou técnicas de design, mas também me mostrou como pensar como uma designer. A mentoria foi fundamental para o meu crescimento profissional" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card foto={pessoa03} nome="Renato Lima" comentario="Graças à mentoria do Leonardo, consegui desenvolver um portfólio que me abriu portas no mercado de trabalho. Cada sessão foi um passo importante na minha carreira como designer gráfico." />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card foto={pessoa05} nome="Amanda Oliveira" comentario="O Leonardo tem uma maneira única de explicar conceitos complexos de design gráfico. As sessões de mentoria me deram a confiança necessária para realizar projetos com mais criatividade e precisão." />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
  )
}

export default Slider