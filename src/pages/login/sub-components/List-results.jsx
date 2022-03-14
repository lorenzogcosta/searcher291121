import React, { useEffect, useState } from "react";
import Footer from "../../../components-utils/footer/Footer";
import NavBar from "../../../components-utils/header/NavBar";
import axios from 'axios';

import './List-results.css' // Css Style \\

    export default function Results() {
        useEffect(()=>{
            
        },) 
  

    const [squad, setSquad] = useState([])


    function urlSearch() {
        return "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?maxRecords=10&view=Grid%20view"
    }

    axios.get(urlSearch(), {
        headers: {
            "Authorization": "Bearer key2CwkHb0CKumjuM"
        }
        
    }).then(resp => {

    let hash = resp.data.records

    setSquad(hash)

    }).catch(err => console.log('err' + err))


    return (
        <>
            <NavBar layout="searchList" />
            <div className="resultsHero">
                <div className="resultsList">
                    <h2>Buscas realizadas</h2>
                    <table>
                        <thead>
                            <tr>
                                <th className="tableLeft" style={{ WebkitBorderTopLeftRadius: "14px" }}>Hashtag</th>
                                <th>Data</th>
                                <th style={{ WebkitBorderTopRightRadius: "14px" }}>Hora</th>
                            </tr>
                        </thead>
                        <tbody>{squad.reverse().map((hash) =>
                            <tr>
                                <td className="tableLeft">{hash.fields.Hashtag}</td>
                                <td>{hash.createdTime}</td>
                                <td>{hash.fields.Hora}</td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            </div >
            <Footer />
        </>
    )
}