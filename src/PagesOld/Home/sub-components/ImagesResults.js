import React from 'react'

import styles from './ImagesResults.module.css'

import imagemTeste from '../../../assets/images.jpg'

const ImagesResults = () => {

    return (
        <div className={styles.imagesResults}>
            <ul>
                <li><img src={imagemTeste} alt="Imagem Teste" />
                    <div className={styles.dataPost}>
                        <span>Postado por:</span>
                        <span>@twitterusername</span>
                    </div></li>
                <li><img src={imagemTeste} alt="Imagem Teste" />
                    <div className={styles.dataPost}>
                        <span>Postado por:</span>
                        <span>@twitterusername</span>
                    </div></li>
                <li><img src={imagemTeste} alt="Imagem Teste" />
                    <div className={styles.dataPost}>
                        <span>Postado por:</span>
                        <span>@twitterusername</span>
                    </div></li>
                <li><img src={imagemTeste} alt="Imagem Teste" />
                    <div className={styles.dataPost}>
                        <span>Postado por:</span>
                        <span>@twitterusername</span>
                    </div></li>
                <li><img src={imagemTeste} alt="Imagem Teste" />
                    <div className={styles.dataPost}>
                        <span>Postado por:</span>
                        <span>@twitterusername</span>
                    </div></li>
                <li><img src={imagemTeste} alt="Imagem Teste" />
                    <div className={styles.dataPost}>
                        <span>Postado por:</span>
                        <span>@twitterusername</span>
                    </div></li>
                <li><img src={imagemTeste} alt="Imagem Teste" />
                    <div className={styles.dataPost}>
                        <span>Postado por:</span>
                        <span>@twitterusername</span>
                    </div></li>
                <li><img src={imagemTeste} alt="Imagem Teste" />
                    <div className={styles.dataPost}>
                        <span>Postado por:</span>
                        <span>@twitterusername</span>
                    </div></li>
                <li><img src={imagemTeste} alt="Imagem Teste" />
                    <div className={styles.dataPost}>
                        <span>Postado por:</span>
                        <span>@twitterusername</span>
                    </div></li>
                <li><img src={imagemTeste} alt="Imagem Teste" />
                    <div className={styles.dataPost}>
                        <span>Postado por:</span>
                        <span>@twitterusername</span>
                    </div></li>
            </ul>
        </div>
    )
}

export default ImagesResults