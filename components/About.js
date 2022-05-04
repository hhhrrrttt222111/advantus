import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";

import styles from '../styles/About.module.css';

import aboutImg from '../assets/svg/about.svg'

function About() {

    const router = useRouter();
    

    return (
        <div className={styles.about} id="about">
            <div className={styles.aboutBody}>
                <div className={styles.aboutDescription}>
                    <h2>About</h2>
                    <h1>Advantus Life Sciences</h1>
                    <p>Established in the year 2012, we predominantly focus on the chronic disease management segment. Our products match international quality & are at par with the best in the industry. To ensure the trust of our consumers, we take at most care in the manufacturing of our products. Our products are manufactured at state-of-the-art plants with National and International accreditations like WHO GMP, ISO, US FDA, and FSSAI. </p>
                </div>
                <div className={styles.aboutImage}>
                    <Image src={aboutImg} layout="responsive" height={500} width={1400} alt="" className='no_drag'/>
                </div>
            </div>
        </div>
    )
}

export default About
