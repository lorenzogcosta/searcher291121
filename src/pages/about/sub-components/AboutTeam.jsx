import React from 'react'

//componentes
import AboutMembers from '../sub-components/AboutMembers';

//Imagens
import Joane from '../../../assets/profile/joane.jpg';
import Esther from '../../../assets/profile/Esther.jpg';
import Lorenzo from '../../../assets/profile/Lorenzo.jpg';

const AboutTeam = () => {
    return (
        <section className="about-team">
        <h2 className="about-team__title">Quem somos</h2>

        <div className="about-team__members">

            <AboutMembers
                foto={Esther}
                nome="Esther Valentim Bacelar"
                texto="Trabalhei no desenvolvimento da Home, em HTML, CSS, JS e React"
                git="https://github.com/esthervbac"
                email="esther.v.bacelar@gmail.com"
                linkedin="https://www.linkedin.com/in/esther-valentim-bacelar/"
            />

            <AboutMembers
                foto={Joane}
                nome="Joane Alves Ribeiro"
                texto="Fui responsável pela criação e estilização da sessão Sobre, em HTML, CSS, JS e React"
                git="https://github.com/joanealves"
                email="joanealves2011@gmail.com"
                linkedin="https://www.linkedin.com/in/joane-alves-ribeiro/"
            />

            <AboutMembers
                foto={Lorenzo}
                nome="Lorenzo Costa "
                texto="Contribui com o desenvolvimento do HTML, CSS e Java Script da página Login e página de buscas."
                git="https://github.com/lorenzogcosta"
                email="lorenzocostasan94@gmail.com"
                linkedin="https://www.linkedin.com/in/lorenzogcosta/"
            />
          </div>
    </section>
    );
  
}
export default AboutTeam;

