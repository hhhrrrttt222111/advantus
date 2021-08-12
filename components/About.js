import React from 'react'
import { useRouter } from "next/router";

import styles from '../styles/About.module.css'

function About() {

    const router = useRouter();
    

    return (
        <div className={styles.about} id="about">
            <h1>ABOUT</h1>
        </div>
    )
}

export default About
