import React, { useEffect } from 'react';
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
                    <h2 data-aos='fade-up' data-aos-duration="400">About</h2>
                    <h1 data-aos='fade-up' data-aos-duration="600">Advantus Life Sciences</h1>
                    <p data-aos='fade-up' data-aos-duration="800">Established in the year 2012, we predominantly focus on the chronic disease management segment. Our products match international quality & are at par with the best in the industry. To ensure the trust of our consumers, we take at most care in the manufacturing of our products. Our products are manufactured at state-of-the-art plants with National and International accreditations like WHO GMP, ISO, US FDA, and FSSAI. </p>
                </div>
                <div className={styles.aboutImage} data-aos='fade-up' data-aos-duration="1200">
                    <Image src={aboutImg} layout="responsive" height={500} width={1400} alt="" className='no_drag'/>
                </div>
            </div>
        </div>
    )
}

export default About
