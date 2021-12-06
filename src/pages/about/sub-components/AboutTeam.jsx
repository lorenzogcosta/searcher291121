import React from 'react'

//componentes
import AboutMembers from '../sub-components/AboutMembers';

//Imagens
import Joane from '../../../assets/profile/joane.jpg';

const AboutTeam = () => {
    return (
        <section className="about-team">
        <h2 className="about-team__title">Quem somos</h2>

        <div className="about-team__members">

            <AboutMembers
                // foto={Esther}
                nome="Esther Valentin Bacelar"
                texto="Trabalhei no desenvolvimento da Home, em HTML, CSS, JS e React"
                git=""
                email=""
                linkedin="https://www.linkedin.com/in/esther-valentim-bacelar/"
            />

            <AboutMembers
                foto={Joane}
                nome="Joane Alves Ribeiro"
                texto="Fui responsável pela criação e estilização da sessão Sobre, em HTML, CSS, JS e React"
                git="https://github.com/joanealves"
                email="joanealves2011@gmail.com"
                linkedin="https://www.linkedin.com/in/joane-alves-ribeiro//"
            />

            <AboutMembers
                // foto={Lorenzo}
                nome="Lorenzo Costa "
                texto="Contribui com o desenvolvimento do HTML, CSS e Java Script da página Login"
                git="https://github.com/lorenzogcosta"
                email=""
                linkedin="https://www.linkedin.com/in/lorenzogcosta/-mour%C3%A3o-ba0756a3/"
            />
          </div>
    </section>
    );
  
}
export default AboutTeam;

