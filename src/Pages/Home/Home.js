import React from 'react'

import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

import styles from '../Home/home.module.css'


const Home = () => {

    return (
        <>
                <NavBar layout="home" />
                <div className={styles.homeContent}>
                    <h1>
                        Home
                    </h1>
                </div>
                <Footer />
        </>
    )

}

export default Home