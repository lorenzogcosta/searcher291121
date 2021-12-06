import React from 'react';

//Imagens
import gitIcon from '../../../assets/svg/icon-github.svg';
// import emailIcon from '../../svg/icon-envelope.svg';
// import linkedinIcon from '../../svg/icon-awesome-linkedin.svg';


    const AboutMembers = (props) => {
        return (
            <div className="about-members">
                {console.log('props', props)}
                <img
                    className="about-member__imagem"
                    src={props.foto}
                    alt="Foto de perfil"
                />
                <h3 className="about-member__name">{props.nome}</h3>
                <p className="about-member__text">
                    {props.texto}
                </p>
                <div className="about-member__contact">
                    <a href={"http://github.com/" + props.git} target="_blank" rel="noopener noreferrer">
                        <img
                            className="about-member__link"
                            src={gitIcon}
                            alt="Github"
                        />
                    </a>
                    <a href={"mailto:" + props.email}>
                        <img
                            className="about-member__link"
                            // src={emailIcon}
                            alt="Email"
                        />
                    </a>
                    <a href={"https://www.linkedin.com/in/" + props.linkedin} target="_blank" rel="noopener noreferrer">
                        <img
                            className="about-member__link"
                            // src={linkedinIcon}
                            alt="LinkedIn"
                        />
                    </a>
                </div>
            </div>
        );
    }
    export default AboutMembers;
