import React, { useState } from 'react'

//CSS
import styles from './ImagesResults.module.css'

const ImagesResults = ({ result }) => {

    const [className, setClassName] = useState(`${styles.imageResult}`)

    function changeClassName() {
        if (className.includes('greatestView')) {
            setClassName(`${styles.imageResult}`)
        } else {
            setClassName(`${styles.imageResult} ${styles.greatestView}`)
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
                    <span>@{result.username}</span>
                </div>
        </div>
    )
}

export default ImagesResults