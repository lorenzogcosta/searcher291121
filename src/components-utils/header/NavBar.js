import React from "react";
import { NavLink } from 'react-router-dom'
import { isLogin } from "../../pages/login/utils/Logged";

import styles from './NavBar.module.css'

import aboutIcon from '../../assets/svg/icon-info-circle.svg'
import loginIcon from '../../assets/svg/icon-user-alt.svg'
import homeIcon from '../../assets/svg/icon-home.svg'
import logoutIcon from '../../assets/svg/icon-power-off.svg'


export default function NavBar({ fixed, layout }) {
    
    const setLoggedStatus = () => {
        localStorage.removeItem('jwt');
    }

    return (
        <div className={styles.navbar} style={{ position: `${fixed === 'true' ? 'fixed' : 'initial'}` }}>
            <div className={styles.container}>
                <NavLink to="/" style={{ textDecoration: 'none' }} className={styles.logo}>hashtag<span>finder</span></NavLink>

                {/*
                        There are 3 layouts with different buttons:
                            - Layout Home
                            - Layout Login
                            - Layout Search List
                        */}

                {layout === 'home' && (
                    <nav>
                        <ul>
                            <NavLink to="/sobre" style={{ textDecoration: 'none' }} className={styles.itemOne}><img src={aboutIcon} alt="About Area Icon" className={styles.aboutIcon} />&nbsp;&nbsp;&nbsp;Sobre</NavLink>
                            {isLogin() ? (
                                <NavLink to="/lista-de-buscas" style={{ textDecoration: 'none' }} className={styles.itemTwo}><img src={loginIcon} alt="Login Area Icon" className={styles.loginIcon} />&nbsp;&nbsp;&nbsp;Buscas</NavLink>
                            ) : (
                                <NavLink to="/login" style={{ textDecoration: 'none' }} className={styles.itemTwo}><img src={loginIcon} alt="Login Area Icon" className={styles.loginIcon} />&nbsp;&nbsp;&nbsp;Login</NavLink>
                            )}
                        </ul>
                    </nav>
                )}
                {layout === 'login' && (
                    <nav>
                        <ul>
                            <NavLink to="/" style={{ textDecoration: 'none' }} className={styles.itemOneHome}><img src={homeIcon} alt="Home Icon" className={styles.homeIcon} />&nbsp;&nbsp;&nbsp;Home</NavLink>
                            <NavLink to="/sobre" style={{ textDecoration: 'none' }} className={styles.itemOne}><img src={aboutIcon} alt="About Area Icon" className={styles.aboutIcon} />&nbsp;&nbsp;&nbsp;Sobre</NavLink>
                        </ul>
                    </nav>
                )}
                {layout === 'searchList' && (
                    <nav>
                        <ul>
                            <NavLink to="/" style={{ textDecoration: 'none' }} className={styles.itemOneHome}><img src={homeIcon} alt="Home Area Icon" className={styles.homeIcon} />&nbsp;&nbsp;&nbsp;Home</NavLink>
                            <NavLink to="/" style={{ textDecoration: 'none' }} className={styles.itemTwoLogOut} onClick={setLoggedStatus}><img src={logoutIcon} alt="Logout Icon" className={styles.logoutIcon} />&nbsp;&nbsp;&nbsp;Sair</NavLink>
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    );
}
