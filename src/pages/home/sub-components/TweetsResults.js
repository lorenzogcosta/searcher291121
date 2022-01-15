import React from 'react'

//CSS
import styles from './TweetsResults.module.css'

const TweetsResults = ({ result }) => {

    return (
        <div className={styles.tweetsResults}>
            <div className={styles.tweetsResultsContent}>
                <div className={styles.profileImages}>
                    <img src={result.profile_image_url} alt="" />
                </div>
                <div className={styles.tweetsContainer}>
                    <h1>{result.id}<span className={styles.userName}>@{result.author_username}</span></h1>
                    <p>{result.content}</p>
                </div>
            </div>
            <div className={styles.linkContainer}>
                <a href={result.url} target="_blank" rel="noopener noreferrer">Ver mais no Twitter</a>
            </div>
        </div>
    )
}

export default TweetsResults