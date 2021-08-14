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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id fermentum at dignissim ornare amet. Nullam nunc quam amet morbi blandit purus. Ultricies sit urna vitae purus. Et cursus in euismod vel ultrices feugiat volutpat vitae, aliquam.</p>
                </div>
                <div className={styles.aboutImage}>
                    <Image src={aboutImg} layout="responsive" height={500} width={1400} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default About
