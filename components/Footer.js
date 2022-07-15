import React from 'react'

import styles from '../styles/Footer.module.css';

function Footer() {

    let year = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <p>Copyright <span>©</span> {year} | Advantus Life Sciences</p>
        </div>
    )
}

export default Footer