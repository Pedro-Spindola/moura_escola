import React, { useState } from 'react';
import styles from './ParaVoce.module.css'
import Container from './Container'

function ParaVoce() {

    const [hoveredOption, setHoveredOption] = useState(null);

    const handleMouseEnter = (option) => {
        setHoveredOption(option);
    };

    const handleMouseLeave = () => {
        setHoveredOption(null);
    };

  return (
    <section className={styles.section}>
        <Container className={styles.container}>
            <div className={styles.boxOpcoes}>
                <div className={styles.options} id='op1' onMouseEnter={() => handleMouseEnter('op1')}onMouseLeave={handleMouseLeave}>
                    <div className={`${styles.ponto} ${hoveredOption === 'op1' ? styles.pontoHovered : ''}`}></div>
                    <h2 className={styles.h2}>Iniciantes no Mundo do Design</h2>
                </div>
                <div className={styles.options} id='op2' onMouseEnter={() => handleMouseEnter('op2')}onMouseLeave={handleMouseLeave}>
                    <div className={`${styles.ponto} ${hoveredOption === 'op2' ? styles.pontoHovered : ''}`}></div>
                    <h2 className={styles.h2}>Profissionais em Busca de Especialização</h2>
                </div>
                <div className={styles.options} id='op3' onMouseEnter={() => handleMouseEnter('op3')}onMouseLeave={handleMouseLeave}>
                    <div className={`${styles.ponto} ${hoveredOption === 'op3' ? styles.pontoHovered : ''}`}></div>
                    <h2 className={styles.h2}>Investindo no Futuro</h2>
                </div>
                <div className={styles.options} id='op4' onMouseEnter={() => handleMouseEnter('op4')}onMouseLeave={handleMouseLeave}>
                    <div className={`${styles.ponto} ${hoveredOption === 'op4' ? styles.pontoHovered : ''}`}></div>
                    <h2 className={styles.h2}>Empreendedores e Startups Criativas</h2>
                </div>
                <div className={styles.options} id='op5' onMouseEnter={() => handleMouseEnter('op5')}onMouseLeave={handleMouseLeave}>
                    <div className={`${styles.ponto} ${hoveredOption === 'op5' ? styles.pontoHovered : ''}`}></div>
                    <h2 className={styles.h2}>Design para Educadores e Instituições de Ensino</h2>
                </div>
            </div>
            <div className={`${styles.line} ${hoveredOption == 'op1' || hoveredOption == 'op2' || hoveredOption == 'op3' || hoveredOption == 'op4' || hoveredOption == 'op5' ? styles.lineSelect : ''}`}>
            </div>
            <div className={`${styles.textOptions} ${hoveredOption == 'op1' || hoveredOption == 'op2' || hoveredOption == 'op3'|| hoveredOption == 'op4' || hoveredOption == 'op5' ? styles.textOptionsSelect : ''}`}>
                <h3 className={styles.h3}>
                {hoveredOption === 'op1' && 'Se você está dando os primeiros passos no universo do design e quer desenvolver uma base sólida de habilidades essenciais, a Moura - Escola de Artes é o lugar perfeito para começar sua jornada. Nosso curso é projetado especificamente para iniciantes, fornecendo uma introdução abrangente aos princípios do design, ferramentas digitais, e técnicas criativas. Você aprenderá a transformar suas ideias em realidade visual, desde os fundamentos do layout até as nuances da teoria das cores. Com a Moura, você terá o suporte necessário para dominar as competências fundamentais e construir um portfólio impressionante, abrindo portas para uma carreira promissora no mundo do design.'}
                {hoveredOption === 'op2' && 'Você já tem experiência na área de design, mas quer levar suas habilidades para o próximo nível? Na Moura - Escola de Artes, oferecemos cursos avançados e módulos especializados que são ideais para profissionais que desejam aprimorar suas técnicas ou se aprofundar em novas áreas. Se você está buscando se destacar em programas específicos como Adobe Illustrator, Photoshop, ou quer explorar campos emergentes como UX/UI design, nossa escola tem as ferramentas e o conhecimento para ajudar você a se destacar. Nossos instrutores experientes estão prontos para orientá-lo em cada etapa, garantindo que você fique à frente das tendências do mercado e desenvolva um domínio técnico que impressione qualquer cliente ou empregador.'}
                {hoveredOption === 'op3' && 'Você entende a importância da educação contínua e está decidido a investir no seu próprio crescimento profissional? A Moura - Escola de Artes é o caminho ideal para quem deseja se preparar para um futuro de sucesso no design. Nosso currículo é pensado para aqueles que enxergam a educação como um investimento no próprio potencial e estão prontos para se dedicar ao desenvolvimento de novas competências. Seja você um iniciante ou um profissional experiente, nossos cursos oferecem a profundidade e o rigor necessários para que você alcance seus objetivos. Com a Moura, você não está apenas aprendendo uma nova habilidade; está construindo uma carreira de sucesso que transformará seu futuro.'}
                {hoveredOption === 'op4' && 'Você é um empreendedor ou faz parte de uma startup e precisa dominar o design para alavancar seu negócio? A Moura - Escola de Artes oferece cursos especialmente voltados para empreendedores que desejam adquirir habilidades em design para criar identidades visuais impactantes, desenvolver materiais de marketing cativantes e construir uma presença online forte. Aprenda a usar o design como uma ferramenta estratégica para comunicar sua marca de maneira eficaz e alcançar seu público-alvo. Nossos cursos ajudarão você a transformar ideias em conceitos visuais que impulsionam vendas e fortalecem a imagem do seu negócio no mercado.'}
                {hoveredOption === 'op5' && 'É um educador ou trabalha em uma instituição de ensino e quer incorporar o design em seus projetos educacionais? Na Moura - Escola de Artes, entendemos que o design pode ser uma ferramenta poderosa no ensino, seja para criar materiais didáticos envolventes, desenvolver recursos visuais para aulas, ou mesmo ensinar os princípios do design aos seus alunos. Oferecemos cursos que capacitam educadores a usar ferramentas de design para melhorar a experiência de aprendizagem e inovar em suas práticas pedagógicas. Com nosso suporte, você poderá tornar o aprendizado mais interativo e visualmente atraente, contribuindo para o desenvolvimento criativo de seus alunos.'}
                {!hoveredOption && 'Passe o mouse sobre uma opção para ver mais detalhes.'}
                </h3>
            </div>
            
        </Container>
    </section>
  )
}

export default ParaVoce