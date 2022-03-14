// First Import The Dependencies

import React, { useState } from "react";
import axios from 'axios';
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";


import { login } from './utils/Logged'; // Component Responsible For Checking Login
import Navbar from '../../components-utils/header/NavBar'; // Header With Navigates
import Footer from '../../components-utils/footer/Footer'; // Footer Component

import './Login.css'; // Css Style

// ---------------LOGIN-AREA RENDERIZATION-------------------- \\

const LoginArea = () => {


    const [errlog, setErrlog] = useState(false); // Div Login Error Check
    
    const navigate = useNavigate();

    // ------------- Yup Configs Form ----------- \\
    const validations = yup.object().shape({
        email: yup.string().email('Digite Um Email Valido').required('Digite Seu Email'),
        password: yup.string().min(6, 'Minimo 6 Caracteres').required('Digite Sua Senha')
    })

    // Function Responsible For Make Request API & Validate User 
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

                    let dataSquad  = resp.data.records
                    
                    dataSquad.filter(squad => {
                        if (squad.fields.Squad === '291121' & values.email === squad.fields.Email & values.password === squad.fields.Senha) {
                            logged = true;
                            return true
                        } return false
                    })
                    if (logged) {                        
                        login() // Set Key Token At LocalStorage \\

                        navigate('/results')
                    } else {

                        values.email = "";
                        values.password = "";

                        setErrlog(true) // Show Div Login Error \\
                    }
                }).catch(err => console.log("erro" + err))
        }
    }

    return (
        <>
            <Navbar fixed="true" layout="login" />
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
            </div>
            <Footer />
        </>
    )
}

export default LoginArea

