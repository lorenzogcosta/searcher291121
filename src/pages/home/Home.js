import React, { useState, useEffect } from 'react'
import axios from 'axios'

//Components
import NavBar from '../../components-utils/header/NavBar'
import ImagesResults from './sub-components/ImagesResults'
import TweetsResults from './sub-components/TweetsResults'
import Footer from '../../components-utils/footer/Footer'

//Images
import iconSearch from '../../assets/svg/icon-search.svg'
import noImage from '../../assets/noimage.png'

//CSS
import styles from './home.module.css'


const Home = () => {

    const [tabActive, setTabActive] = useState('images'); // To switch between tabs with last images and tweets on responsive version
    const [imagesResults, setImagesResults] = useState([]); // Set results of the last images from the currently searched hashtag
    const [tweetsResults, setTweetsResults] = useState([]); // Set results of the last tweets from the currently searched hashtag
    const [hashtagSearch, setHashtagSearch] = useState(''); // Set the hashtag that the user wants to search
    const [lastHashtag, setLastHashtag] = useState('hashtag'); // Keep the last hashtag searched for the searched list page

    useEffect(() => {
        if (hashtagSearch.trim().length !== 0) {
            searchTweets(hashtagSearch);
        }

    }, [hashtagSearch]);

    // Get the date that the hashtag was searched
    function getDate() {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    // Get the hours and minutes that the hashtag was searched
    function getHour() {
        const date = new Date();
        const hour = String(date.getHours()).padStart(2, '0');
        const minute = String(date.getMinutes()).padStart(2, '0');
        return `${hour}:${minute}`;
    }

    // Set the API link to save the hashtag infos required
    function getAirtableURL() {
        return `https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas`;
    }

    // Save all info required after the hashtag was searched
    function saveSearch(hashtag) {
        axios.post(getAirtableURL(), {
            "saved": [
                {
                    "fields": {
                        "Squad": "291121",
                        "Hashtag": hashtag,
                        "Data": getDate(),
                        "Hora": getHour()
                    }
                }
            ]
        }, {
            headers: {
                "Authorization": "Bearer key2CwkHb0CKumjuM",
                "Content-Type": "application/json"
            }
        }).catch(e => console.log('erro\n' + e));
    }

    // Save the hashtag searched for the user
    function handleHashtagChange(event) {
        setHashtagSearch(event.target.value);
    }

    // Return the hashtag and the info 
    function getReturnedInfo() {
        let returnedInfo = hashtagSearch;
        returnedInfo = returnedInfo.replace(/#/g, '').trim().toLowerCase();
        return returnedInfo;
    }

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
                            <li><ImagesResults /></li>
                        </ul>
                    </div>
                    <div className={styles.tweetsResults}>
                        <ul>
                            <li><TweetsResults /></li>
                        </ul>
                    </div>

                </div>
                <div className={styles.contentResponsive}>
                    {tabActive === 'images' ? (
                        <div className={styles.imagesResults}>
                            <ul>
                                <li><ImagesResults /></li>
                            </ul>
                        </div>
                    ) : (
                        <div className={styles.tweetsResults}>
                            <ul>
                                <li><TweetsResults /></li>
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