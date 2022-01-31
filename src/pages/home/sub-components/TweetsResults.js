import React from 'react'

//CSS
import styles from './TweetsResults.module.css'

const TweetsResults = ({ result }) => {

    return (
        <div className={styles.tweetsResults}>
            <div className={styles.tweetsResultsContent}>
                <div className={styles.profileImages}>
                    <img src={result.author.profile_image_url} alt="" />
                </div>
                <div className={styles.tweetsContainer}>
                    <h1>{result.author.name}<span className={styles.userName}>&nbsp;&nbsp;&nbsp;@{result.author.username}</span></h1>
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