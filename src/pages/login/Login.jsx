import React, { useState } from "react";
import axios from 'axios';
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";

import './Login.css';
import Navbar from '../../components-utils/header/NavBar';
import Footer from '../../components-utils/footer/Footer';

// ---------------LOGIN-AREA RENDERIZATION--------------------
const LoginArea = () => {
    const [errlog, setErrlog] = useState(false);
    const navigate = useNavigate();
    
    const validations = yup.object().shape({
        email: yup.string().email('Digite Um Email Valido').required('Digite Seu Email'),
        password: yup.string().min(6, 'Minimo 6 Caracteres').required('Digite Sua Senha')
    })


    function loginCheck(values) {

        let eventError = false;
        let logged = false;
        
        if (!eventError) {

            axios.get('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?maxRecords=6&view=Grid%20view',
                {
                    headers: {
                        'Authorization': 'Bearer key2CwkHb0CKumjuM'
                    }
                })
                .then(resp => {
                    console.log(resp)

                    resp.data.records.filter(squad => {
                        if (squad.fields.Squad === '291121' & values.email === squad.fields.Email & values.password === squad.fields.Senha) {
                            logged = true;
                            return true
                        } return false
                    })
                    if (logged) {
                        
                        navigate('/results')
                    } else {

                        values.email = "";
                        values.password = "";

                        setErrlog(true)
                    }
                }).catch(err => console.log("erro" + err))
        }
    }

<<<<<<< HEAD
    return (
        <>
            <Navbar layout="login" />
            <div className='loginArea' onClick={() => setErrlog(false)} >
                <Formik validationSchema={validations} onSubmit={loginCheck} initialValues={{}} >
                    <Form className="formLogin">
                        <label style={{ display: errlog ? "block" : "none", color: 'red' }}>Verifique email e senha</label>
                        <h2 className="loginH2">Login</h2>
                        <div>
                            <Field name='email' className="field" placeHolder="Usuário" type="email" />
                            <div>
                                <ErrorMessage className="errormessage" component='label' name="email" />
                            </div>
                        </div>
                        <div>
                            <Field name='password' placeHolder="Senha" className="field" type='password' />
                            <div>
                                <ErrorMessage className="errormessage" component='label' name="password" />
                            </div>
                        </div>
                        <button type="submit">ACESSAR</button>
                    </Form>
                </Formik>
=======
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
>>>>>>> 87f2e7ca477e2bdfb329e17d9e6514f7e1ce0d65
            </div>
            <Footer />
        </>
    )
}

export default LoginArea

