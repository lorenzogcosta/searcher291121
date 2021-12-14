// ------------- LOGIN PAGE DESIGN -----------------
import React, { Component } from "react";
import './Login.css';
import axios from 'axios';

// ---------------LOGIN-AREA RENDERIZATION--------------------

export default class loginArea extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    loginCheck(e) {
        e.preventDefault();

        let inputEmail = document.querySelector('.inputEmail').value;
        let emailEmpty = document.querySelector('.emailEmpty');
        let inputPassword = document.querySelector('.inputPassword').value;
        let passwordEmpty = document.querySelector('.passwordEmpty');
        let eventError = false;

        if (inputEmail === "") {
            eventError = true;
            emailEmpty.innerHTML = "Preencha o Email";

        }
        if (inputPassword === "") {
            eventError = true;
            passwordEmpty.innerHTML = "Insira a senha"
        }

        if (!eventError) {
            alert('logou no sistema!!!')


            axios.get('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?maxRecords=3&view=Grid%20view',
                {
                    headers: {
                        'Authorization': 'Bearer key2CwkHb0CKumjuM'
                    }
                })
                .then(resp => {
                    const body = resp.data.records.filter(membro => {
                        if (membro.fields.Squad === '1') {
                            return true
                        }
                        return false
                    })

                    console.log('body=', body)
                })

        }

    }

    login(body) {

        this.setState({ data: body })
    }

    render() {
        return (
            <div className="loginArea">
                <form onSubmit={this.loginCheck} className="formLogin">
                    <h2 className="loginH2">Login</h2>
                    <input onKeyPress={() => document.querySelector('.emailEmpty').innerHTML = ""} type="email" placeholder="Usuário" className="inputEmail" />
                    <label htmlFor="user" className="emailEmpty"></label>
                    <input onKeyPress={() => document.querySelector('.passwordEmpty').innerHTML = ""} type="password" placeholder="Senha" className="inputPassword" />
                    <label htmlFor="password" className="passwordEmpty"></label>
                    <button type="submit">ACESSAR</button>
                </form>
            </div>
        )
    }
}
