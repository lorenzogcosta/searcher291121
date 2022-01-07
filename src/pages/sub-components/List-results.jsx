import React from "react";
import './List-results.css'

export default function results() {

    return (

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
                    <tbody >
                        <tr>
                            <td className="tableLeft">#hashtagname</td>
                            <td>25/02</td>
                            <td>09:30</td>
                        </tr>
                        <tr>
                            <td className="tdBorder" colSpan="3"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )

}