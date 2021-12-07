// ------------- LOGIN PAGE DESIGN -----------------
import React from "react";
import './login.css';


// ---------------LOGIN-AREA RENDERIZATION--------------------

export default function loginArea() {
    return (
        <div className="loginArea">
            <form action="" className="formLogin">
            <h2 className="loginH2">Login</h2>
            <input type="email" placeholder="Usuário" className="inputs" />
            <input type="password" placeholder="Senha" />
            <button>ACESSAR</button>
            </form>
        </div>
        )
}


