import React from 'react';
import Image from 'next/image';
import styles from '../styles/Landing.module.css';

import img1 from '../assets/svg/landingPage/img1.svg';
import headingImg from '../assets/svg/landingPage/heading.svg';

function Landing() {
    return (
        <div className={styles.landing} id="home">
            <div className={styles.landingBody}>
                <div className={styles.landingDescription}>
                    <div className={styles.headingImage}>
                        <Image src={headingImg} layout="responsive" height={50} width={100} alt="Advantus"/>                    
                    </div>
                    <p>With a goal of ensuring a healthier future, we at Advantus life sciences work to provide top quality medicines at affordable prices. We aim to enhance the quality of life of each & every citizen through the best of our hands. </p>
                </div>
                <div className={styles.landingImage}>
                    <Image src={img1} layout="responsive" height={100} width={120} alt="Advantus"/>
                </div>
            </div>
        </div>
    )
}

export default Landing
