// LOGIN PAGE DESIGN
import React from "react";
import './login.css';


export default function loginArea() {
    return (
        <div className="loginArea">
            <form action="" className="formLogin">
            <h2 className="loginH2">Login</h2>
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />
            <button>ACESSAR</button>
            </form>
        </div>
        )
}


