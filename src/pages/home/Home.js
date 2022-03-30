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
    }, []);

    // Get the Timestamp that the hashtag was searched
    function timeStamp() {
        const now = new Date();
        return now.getTime();
    }

    // Set the API link to save the hashtag infos required
    function getAirtableURL() {
        return `https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas`;
    }

    // Save all info required after the hashtag was searched
    function saveSearch(hashtag) {
        axios.post(getAirtableURL(), {
            "records": [
                {
                    "fields": {
                        "Squad": "291121",
                        "Hashtag": hashtag,
                        "Data": timeStamp(),
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
        returnedInfo = returnedInfo
            .replace(/#/g, '')
            .trim()
            .toLowerCase();
        return returnedInfo;
    }

    // Set the type of info we want once the user search for a hashtag
    function getTwitterURL(type, hashtag) {
        if (type === 'tweet') {
            return `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${hashtag} has:hashtags -is:retweet -is:quote -has:links -has:images&max_results=10&expansions=author_id,attachments.media_keys&user.fields=id,name,username,profile_image_url,url&media.fields=type,url,width,height&tweet.fields=source`;
        } else if (type === 'image') {
            return `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${hashtag} has:hashtags -is:retweet -is:quote has:images&max_results=10&expansions=author_id,attachments.media_keys&user.fields=id,name,username,profile_image_url,url&media.fields=type,url,width,height&tweet.fields=source`;
        }
    }

    // Search for the tweets that are using the hashtag searched
    function searchTweets(hashtag) {
        const headers = {
            headers: {
                "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAJ98WgEAAAAAVzdJnJbz%2BG8TmzOdvMa1Nptw%2Bp8%3Dm9WMpt9jKkAi8Uqw3Racfq0bijbky733wTxn3dw0s5h1r2AQkR"
            }
        }

        // Get the username of the people that tweeted using the hashtag searched
        axios.get(getTwitterURL(`image`, hashtag), headers).then(
            response => {
                const users = {};
                response.data.includes.users.forEach(
                    user => {
                        users[String(user.id)] = user.username || '';
                    }
                );

                const medias = {};
                response.data.includes.media.forEach(
                    media => {
                        medias[String(media.media_key)] = media.url || noImage;
                    }
                );

                const results = response.data.data.map(
                    tweet => {
                        return {
                            "url": `https://twitter.com/user/status/${tweet.id}` || '',
                            "image_url": medias[String(tweet.attachments.media_keys[0])],
                            "author": {
                                "username": users[String(tweet.author_id)]
                            }
                        };
                    }
                );

                setImagesResults(results);
            }
        )

        // Get all info required (name, username, image and tweet post)
        axios.get(getTwitterURL(`tweet`, hashtag), headers).then(
            response => {
                const users = {};
                response.data.includes.users.forEach(
                    user => {
                        users[String(user.id)] = {
                            "name": user.name || '',
                            "username": user.username || '',
                            "profile_image_url": String(user.profile_image_url).replace('normal', 'bigger') || noImage,
                            "profile_url": `https://twitter.com/${user.username}` || ''
                        };
                    }
                );

                const results = response.data.data.map(
                    postTweet => {
                        return {
                            "content": postTweet.text || '',
                            "url": `https://twitter.com/user/status/${postTweet.id}` || '',
                            "author": users[String(postTweet.author_id)]
                        };
                    }
                );

                setTweetsResults(results);
            }
        );
    }
    // Once the hashtag input is filled with a word and the form is submit all the info is saved and the tweets and images are showed bellow
    function submitForm(event) {
        event.preventDefault();
        saveSearch(getReturnedInfo());
        searchTweets(getReturnedInfo());
        setLastHashtag(getReturnedInfo());
        setHashtagSearch('');
    }

    //If Hashtag input is empty it will alert the user to fill with any word
    const lidarInputVazio = () => {
        const inputVazio = document.querySelector('#inputSearch') === '';

        if (inputVazio) {
            alert('Campo Obrigatório! Preencha o input com a palavra que deseja procurar')
        }
    }

    return (
        <>
            <div className={styles.header}>
                <NavBar fixed="true" layout="home" />
                <div className={styles.headerContent}>
                    <div className={styles.titles}>
                        <h1>Encontre hashtags de maneira fácil.</h1>
                        <h2>Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo</h2>
                    </div>
                    <form onSubmit={submitForm}>
                        <button onClick={lidarInputVazio}>
                            <img src={iconSearch} alt="Icon Search" />
                        </button>
                        <input
                            type="text"
                            placeholder="Buscar..."
                            id="inputSearch"
                            className={styles.inputSearch}
                            value={hashtagSearch}
                            onChange={handleHashtagChange}
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
                <h2>Exibindo os 10 resultados mais recentes para #{lastHashtag}</h2>
                <div className={styles.content}>
                    <div className={styles.imagesResults}>
                        {imagesResults.length === 0 ? (
                            <div></div>
                        ) : (
                            <ul>
                                {
                                    imagesResults.map(
                                        (result, index) => (
                                            <li key={index}>
                                                <ImagesResults result={result} />
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        )}
                    </div>
                    <div className={styles.tweetsResults}>
                        {tweetsResults.length === 0 ? (
                            <div></div>
                        ) : (
                            <ul>
                                {
                                    tweetsResults.map(
                                        (result, index) => (
                                            <li key={index}>
                                                <TweetsResults result={result} />
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        )}
                    </div>

                </div>
                <div className={styles.contentResponsive}>
                    {tabActive === 'images' ? (
                        <div className={styles.imagesResults}>
                            {imagesResults.length === 0 ? (
                                <div></div>
                            ) : (
                                <ul>
                                    {
                                        imagesResults.map(
                                            (result, index) => (
                                                <li key={index}>
                                                    <ImagesResults result={result} />
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            )}
                        </div>
                    ) : (
                        <div className={styles.tweetsResults}>
                            {tweetsResults.length === 0 ? (
                                <div></div>
                            ) : (
                                <ul>
                                    {
                                        tweetsResults.map(
                                            (result, index) => (
                                                <li key={index}>
                                                    <TweetsResults result={result} />
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )

}

export default Home