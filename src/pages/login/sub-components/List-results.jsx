import React, { useEffect, useState } from "react";
import Footer from "../../../components-utils/footer/Footer";
import NavBar from "../../../components-utils/header/NavBar";
import axios from 'axios';

import './List-results.css' // Css Style \\

export default function Results() {
    const [squad, setSquad] = useState([])

    function urlSearch() {
        return `https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?filterByFormula=({Squad}='291121')&maxRecords=90&pageSize=10&sort%5B0%5D%5Bfield%5D=Data&sort%5B0%5D%5Bdirection%5D=desc`
    }

    function formatDate(date) {
        let _date = new Date(date);
        let day = _date.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        let month = parseInt(_date.getMonth() + 1);
        if (month < 10) {
            month = '0' + month;
        }
        let year =  _date.getFullYear()
        return day + "/" + month + "/" + year;
    }

    function formatHour(date) {
        let _day = new Date(date);
        let hour = _day.getHours();
        if (hour < 10) {
            hour = '0' + hour;
        }
        let minutes = _day.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return hour + ":" + minutes;
    }

    useEffect(() => {
        axios.get(urlSearch(), {
            headers: {
                "Authorization": "Bearer key2CwkHb0CKumjuM"
            }

        }).then(
            resp => {
                let hash = resp.data.records.map(
                    record => {
                        return {
                            "hashtag": record.fields.Hashtag,
                            "data": record.fields.Data
                        }
                    }
                )
                setSquad(hash);
            }
        )
    }, []);

    return (
        <>
            <NavBar fixed="true" layout="searchList" />
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
                        <tbody>{squad.map((hash) =>
                            <tr>
                                <td className="tableLeft">#{hash.hashtag}</td>
                                <td>{formatDate(hash.data)}</td>
                                <td>{formatHour(hash.data)}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div >
            <Footer />
        </>
    )
}