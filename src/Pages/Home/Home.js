import React from 'react'

import NavBar from '../../Components/NavBar/NavBar'
import ImagesResults from '../../Components/ImagesResults/ImagesResults'
import TweetsResults from '../../Components/TweetsResults/TweetsResults'
import Footer from '../../Components/Footer/Footer'

import styles from '../Home/home.module.css'

import iconSearch from '../../images/icon-search.svg'


const Home = () => {

    return (
        <>
            <NavBar layout="home" />
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.titles}>
                        <h1>Encontre hashtags de maneira fácil.</h1>
                        <h2>Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo</h2>
                    </div>
                    <form>
                        <button>
                            <img src={iconSearch} alt="Icon Search" />
                        </button>
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className={styles.inputSearch}
                            maxLength="140"
                            required
                        />
                    </form>
                </div>
            </div>
            <div className={styles.mobileTabs}>
                <div className={styles.changingResults}>
                    <span>Tweets</span>
                    <span>Imagens</span>

                </div>
                <div className={styles.tabs}>
                    <div></div>
                </div>
            </div>
            <div className={styles.homeContent}>
                <h2>Exibindo os 10 resultados mais recentes para #</h2>
                <div className={styles.content}>
                    <div className={styles.imagesResults}>
                        <ImagesResults/>
                    </div>
                    <div className={styles.tweetsResults}>
                        <TweetsResults/>
                    </div>

                </div>
                <div className={styles.contentResponsive}>
                    <div className={styles.imagesResults}>
                        <ImagesResults/>
                    </div>
                    <div className={styles.tweetsResults}>
                        <TweetsResults/>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )

}

export default Home