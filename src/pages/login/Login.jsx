import React, { Component } from "react";
import axios from 'axios';
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";

import './Login.css';
import Navbar from '../../components-utils/header/NavBar';
import Footer from '../../components-utils/footer/Footer';

// ---------------LOGIN-AREA RENDERIZATION--------------------
export default class loginArea extends Component {

    constructor(props) {
        super(props);

        this.state = {
            errlog: false
        };

        this.loginCheck = this.loginCheck.bind(this)

    }

    validations = yup.object().shape({
        email: yup.string().email('Digite Um Email Valido').required('Digite Seu Email'),
        password: yup.string().min(6, 'Minimo 6 Caracteres').required('Digite Sua Senha')
    })

    
    loginCheck(values) {
        

        let eventError = false;

        if (!eventError) {

            axios.get('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?maxRecords=6&view=Grid%20view',
                {
                    headers: {
                        'Authorization': 'Bearer key2CwkHb0CKumjuM'
                    }
                })
                .then(resp => {
                    let logged = false;

                    resp.data.records.filter(squad => {
                        if (squad.fields.Squad === '291121' & values.email === squad.fields.Email & values.password === squad.fields.Senha) {
                            logged = true;
                            return true
                        } return false
                    })
                    if (logged) {
                        console.log('logou no sistema')   
                        let navigate = useNavigate();
                        
                        navigate.push("/sobre")
                        
                             
                        // axios.post('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?maxRecords=6&view=Grid%20view',{ values },{
                        //     headers: {
                        //         'Authorization': 'Bearer key2CwkHb0CKumjuM',
                        //         'content-type': 'text/json'
                        //     }                            
                        // }).then(resp => console.log(resp))

                    } else {
                        this.setState({ errlog: true })
                    }
                })
        }
    }


    render() {
        return (
            <>
                <Navbar layout="login" />
                <div style={{ display: this.state.errlog ? "block" : "none"}}><h1>Verifique email e senha</h1></div>
                <div className='loginArea' onClick={() => this.setState({ errlog: false })}>
                    <Formik validationSchema={this.validations} onSubmit={this.loginCheck} initialValues={{}} >
                        <Form className="formLogin">
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
}


