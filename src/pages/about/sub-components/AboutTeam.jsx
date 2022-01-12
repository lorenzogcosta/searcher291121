import React, { useEffect, useState } from 'react'

//componentes
import AboutMembers from './AboutMembers';

//Imagens
import Joane from '../../../assets/profile/joane.jpg';
import Esther from '../../../assets/profile/Esther.jpg';
import Lorenzo from '../../../assets/profile/Lorenzo.jpg';

const AboutTeam = () => {
    const [infoTeam, setInfoTeam] = useState(null)

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer key2CwkHb0CKumjuM");
        myHeaders.append("Cookie", "brw=brwZr09Lc4XQ6bGuH");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?fields%5B%5D=Squad&fields%5B%5D=Nome&fields%5B%5D=Email&fields%5B%5D=Descrição&fields%5B%5D=Imagem&fields%5B%5D=Github&fields%5B%5D=LinkedIn", requestOptions)
            .then(response => response.json())
            .then(result => {
                const filteredTeam = result.records.filter((item) => item.fields.Squad === '291121')
                const isNewArray = Array (filteredTeam)
                console.log(result.records)
                setInfoTeam(isNewArray)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <section className="about-team">
            <h2 className="about-team__title">Quem somos</h2>
            <div className="about-team__members">
                {console.log(infoTeam)}
            <AboutMembers
                            //  foto={Esther}
                            nome="Esther Valentim Bacelar"
                            texto="Estudante - Desenvolvimento FullStack. Trabalhei no desenvolvimento da Home, em HTML, CSS, JS e React"
                            git="https://github.com/esthervbac"
                            email="esther.v.bacelar@gmail.com"
                            linkedin="esther.v.bacelar@gmail.com"
                        />
                {/* {infoTeam.map((member) => (
                    <>
                        {console.log(member)}
                        <AboutMembers
                            //  foto={Esther}
                            nome="Esther Valentim Bacelar"
                            texto="Estudante - Desenvolvimento FullStack. Trabalhei no desenvolvimento da Home, em HTML, CSS, JS e React"
                            git="https://github.com/esthervbac"
                            email="esther.v.bacelar@gmail.com"
                            linkedin="esther.v.bacelar@gmail.com"
                        />
                    </>

                ))} */}
            </div>
        </section>
    );

}
export default AboutTeam;

