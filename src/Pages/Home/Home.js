import React from 'react'

import NavBar from './sub-components/NavBar'
import ImagesResults from './sub-components/ImagesResults'
import TweetsResults from './sub-components/TweetsResults'
import Footer from './sub-components/Footer'

import styles from './Home.module.css'

import iconSearch from '../../assets/svg/icon-search.svg'


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
                        <ul>
                            <li><ImagesResults/></li>
                        </ul>
                    </div>
                    <div className={styles.tweetsResults}>
                        <ul>
                            <li><TweetsResults/></li>
                        </ul>
                    </div>

                </div>
                <div className={styles.contentResponsive}>
                    <div className={styles.imagesResults}>
                        <ul>
                            <li><ImagesResults/></li>
                        </ul>
                    </div>
                    <div className={styles.tweetsResults}>
                        <ul>
                            <li><TweetsResults/></li>
                        </ul>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )

}

export default Home