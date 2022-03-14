import React from "react";
import { NavLink } from 'react-router-dom'
import { isLogin } from "../../pages/login/utils/Logged";

import styles from './NavBar.module.css'

import aboutIcon from '../../assets/svg/icon-info-circle.svg'
import loginIcon from '../../assets/svg/icon-user-alt.svg'
import homeIcon from '../../assets/svg/icon-home.svg'
import logoutIcon from '../../assets/svg/icon-power-off.svg'
import logo from '../../assets/svg/logo.svg'


export default function NavBar({ fixed, layout }) {

    const setLoggedStatus = () => {
        localStorage.removeItem('jwt');
    }

    return (
        <div
            className={styles.navbar}
            style={{ position: `${fixed === 'true' ? 'fixed' : 'initial'}` }}
        >
            <NavLink to="/" style={{ textDecoration: 'none' }}
                className={styles.linkImgHome}>
                <img src={logo} alt="logo" />
            </NavLink>

            {/*
                        There are 3 layouts with different buttons:
                            - Layout Home
                            - Layout Login
                            - Layout Search List
                        */}

            {layout === 'home' && (
                <div className={styles.links_navbar}>
                    <NavLink to="/sobre" style={{ textDecoration: 'none' }}
                        className={styles.itemOne}>
                        <img src={aboutIcon} alt="About Area Icon" />
                        Sobre
                    </NavLink>
                    {isLogin() ? (
                        <NavLink to="/results" style={{ textDecoration: 'none' }}
                            className={styles.itemTwo}>
                            <img src={loginIcon} alt="Login Area Icon" />
                            Login
                        </NavLink>
                    ) : (
                        <NavLink to="/login" style={{ textDecoration: 'none' }}
                            className={styles.itemTwo}>
                            <img src={loginIcon} alt="Login Area Icon" />
                            Login
                        </NavLink>
                    )}
                </div>
            )}
            {layout === 'login' && (
                <div className={styles.link_navbar}>
                    <NavLink to="/" style={{ textDecoration: 'none' }}
                        className={styles.itemOne}>
                        <img src={homeIcon} alt="Home Icon" />
                        Home
                    </NavLink>
                    <div>
                    <NavLink to="/sobre" style={{ textDecoration: 'none' }}
                        className={styles.itemTwo}>
                        <img src={aboutIcon} alt="About Area Icon" />
                        Sobre
                    </NavLink>
                    </div>
                </div>
            )}
            {layout === 'searchList' && (
                <div className={styles.links_navbar}>
                    <NavLink to="/" style={{ textDecoration: 'none' }}
                        className={styles.itemOne}>
                        <img src={homeIcon} alt="Home Area Icon" />
                        Home
                    </NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none' }}
                        className={styles.itemTwo}
                        onClick={setLoggedStatus}>
                        <img src={logoutIcon} alt="Logout Icon" />
                        Sair
                    </NavLink>
                </div>
            )}
        </div>
    );
}
