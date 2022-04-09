import React, { useEffect, useState } from 'react'

//componentes
import AboutMembers from './AboutMembers';

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
                const filteredTeam = result.records?.filter((item) => item.fields.Squad === '291121')
                setInfoTeam(filteredTeam)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <section className="about-team">
            <h2 className="about-team__title">Quem somos</h2>
            <div className="about-team__members">
                {infoTeam?.map((member, index) => (
                    <AboutMembers
                        foto={member.fields.Imagem[0].url}
                        nome={member.fields.Nome}
                        texto={member.fields.Descrição}
                        git={member.fields.Github}
                        email={member.fields.Email}
                        linkedin={member.fields.LinkedIn}
                        key={`id: ${index}`}
                    />
                ))}
            </div>
        </section>
    );

}
export default AboutTeam;