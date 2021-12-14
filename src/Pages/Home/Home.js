import React, { useState } from 'react'

import NavBar from '../../components-utils/header/NavBar'
import ImagesResults from './sub-components/ImagesResults'
import TweetsResults from './sub-components/TweetsResults'
import Footer from '../../components-utils/footer/Footer'
import iconSearch from '../../assets/svg/icon-search.svg'

import styles from '../../pages/Home/Home.module.css'


const Home = () => {

    const [tabActive, setTabActive] = useState('images'); // To switch between tabs with last images and tweets on responsive version
    const [imagesResults, setImagesResults] = useState([]); // Set results of the last images from the currently searched hashtag
    const [tweetsResults, setTweetsResults] = useState([]); // Set results of the last tweets from the currently searched hashtag

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
                    <span
                    onClick={() => setTabActive('tweets')}
                        style={{
                            color: `${tabActive === 'tweets' ? '#72EFDB' : 'white'}`,
                        }}
                    >
                    Tweets
                    </span>
                    <span
                        onClick={() => setTabActive('images')}
                            style={{
                                color: `${tabActive === 'images' ? '#72EFDB' : 'white'}`,
                            }}
                    >
                    Imagens
                    </span>
                </div>
                <div className={styles.tabs}>
                    <div
                        style={{
                            transform: `${tabActive === 'images' ? 'translateX(100%)' : 'translateX(0%)'}`
                        }}
                    >
                    </div>
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
                    {tabActive === 'images' ? (
                    <div className={styles.imagesResults}>
                        <ul>
                            <li><ImagesResults/></li>
                        </ul>
                    </div>
                    ) : (
                    <div className={styles.tweetsResults}>
                        <ul>
                            <li><TweetsResults/></li>
                        </ul>
                    </div>
                    )}                    
                </div>
            </div>
            <Footer />
        </>
    )

}

export default Home