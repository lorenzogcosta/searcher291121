import React from "react";
import Navbar from '../../../components-utils/header/NavBar'; // Header With Navigates

//import Ilustração
import ilustração from "../../../assets/svg/about-ilustration.svg";

const AboutProject = () => {
  return (
    <>
    <Navbar layout="home" />
    <div className='about-project'>
      <main>
        <h1 className='about-tittle'>Sobre o projeto</h1>
        <p className='about-text'>
          O HashtagFinder é um site responsivo para visualização de mensagens,
          hashtags e imagens do Twitter, retorna rápido e de forma organizada,
          os dez resultados mais usados e recentes. É útil para analistas,
          produtores de conteúdo e outros tipos de profissionais que podem
          conferir a relevância imediata de um conteúdo específico através de
          palavras e expressões relacionadas. Esse projeto foi desenvolvido em
          equipe, durante a capacitação em Desenvolvimento Full Stack, módulo
          Front-end, da NewTab Academy, de maneira incremental durante os
          módulos HTML, CSS, Javascript e React. Em seu escopo possui duas
          páginas acessíveis para qualquer usuário. A primeira, "Home", consiste
          em um campo para busca da hashtag digitada e uma área para
          visualização das últimas 10 mensagens e imagens. A segunda, "Sobre",
          contém uma breve explicação do projeto e outra com os profissionais
          envolvidos no projeto. Há também uma página restrita para acompanhar
          as buscas realizadas.
        </p>
      </main>
      <img className='about-image'
      src={ilustração} alt="Ilustração"></img>
    </div>
    </>
  );
};

export default AboutProject;