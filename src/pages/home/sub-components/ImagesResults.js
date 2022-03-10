import React, { useState } from 'react'

//CSS
import styles from './ImagesResults.module.css'

const ImagesResults = ({ result }) => {
const [className, setClassName] = useState(`${styles.imagesResults}`)

    function changeClassName() {
        if (className.includes('greatestView')) {
            setClassName(`${styles.imagesResults}`)
        } else {
            setClassName(`${styles.imagesResults} ${styles.greatestView}`)
        }
    }

    return (
        <div 
            className={className}
                style={{
                    backgroundImage: `url(${result.image_url})`
                }}
                onClick={changeClassName}
                onBlur={() => alert()}
        >
                <div className={styles.dataPost}>
                    <span>Postado por:</span>
                    <span>@{result.author.username}</span>
                </div>
        </div>
    )
}

export default ImagesResults