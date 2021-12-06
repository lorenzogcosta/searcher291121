import React from 'react'

import styles from './imagesresults.module.css'

import imagemTeste from '../../images/images.jpg'

const ImagesResults = () => {

    return (
        <div className={styles.imagesResults}>
        <ul>
        <li><img src={imagemTeste} alt="Imagem Teste" className={styles.image} />
            <div className={styles.dataPost}>
                <span>Postado por:</span>
                <span>@FulanoDeTal</span>
            </div></li>
            <li><img src={imagemTeste} alt="Imagem Teste" className={styles.image} />
            <div className={styles.dataPost}>
                <span>Postado por:</span>
                <span>@FulanoDeTal</span>
            </div></li>
            <li><img src={imagemTeste} alt="Imagem Teste" className={styles.image} />
            <div className={styles.dataPost}>
                <span>Postado por:</span>
                <span>@FulanoDeTal</span>
            </div></li>
            <li><img src={imagemTeste} alt="Imagem Teste" className={styles.image} />
            <div className={styles.dataPost}>
                <span>Postado por:</span>
                <span>@FulanoDeTal</span>
            </div></li>
            <li><img src={imagemTeste} alt="Imagem Teste" className={styles.image} />
            <div className={styles.dataPost}>
                <span>Postado por:</span>
                <span>@FulanoDeTal</span>
            </div></li>
            <li><img src={imagemTeste} alt="Imagem Teste" className={styles.image} />
            <div className={styles.dataPost}>
                <span>Postado por:</span>
                <span>@FulanoDeTal</span>
            </div></li>
            <li><img src={imagemTeste} alt="Imagem Teste" className={styles.image} />
            <div className={styles.dataPost}>
                <span>Postado por:</span>
                <span>@FulanoDeTal</span>
            </div></li>
            <li><img src={imagemTeste} alt="Imagem Teste" className={styles.image} />
            <div className={styles.dataPost}>
                <span>Postado por:</span>
                <span>@FulanoDeTal</span>
            </div></li>
            <li><img src={imagemTeste} alt="Imagem Teste" className={styles.image} />
            <div className={styles.dataPost}>
                <span>Postado por:</span>
                <span>@FulanoDeTal</span>
            </div></li>
            <li><img src={imagemTeste} alt="Imagem Teste" className={styles.image} />
            <div className={styles.dataPost}>
                <span>Postado por:</span>
                <span>@FulanoDeTal</span>
            </div></li>
        </ul>
        </div>
    )
}

export default ImagesResults