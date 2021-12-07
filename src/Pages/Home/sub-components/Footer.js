import React from 'react'

import styles from './Footer.module.css'


const Footer = () => {

    return ( 
        <div className={styles.footer}>
            <span>@Newtab Academy {new Date().getFullYear()}.&nbsp;&nbsp;Todos os direitos reservados</span>
        </div>
    )

}


export default Footer