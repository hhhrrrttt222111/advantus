import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Landing.module.css';

import img1 from '../assets/svg/landingPage/img1.svg';
import headingImg from '../assets/svg/landingPage/heading.svg';

function Landing() {

    return (
        <div className={styles.landing} id="home">
            <div className={styles.landingBody}>
                <div className={styles.landingDescription}>
                    <div className={styles.headingImage} data-aos='zoom-in'>
                        <Image src={headingImg} layout="responsive" height={50} width={100} alt="Advantus"/>                    
                    </div>
                    <p data-aos='fade-up'> With a goal of ensuring a healthier future, we at Advantus life sciences work to provide top quality medicines at affordable prices. We aim to enhance the quality of life of each & every citizen through the best of our hands. </p>
                </div>
                <div className={styles.landingImage} data-aos='fade-left'>
                    <Image src={img1} layout="responsive" height={100} width={120} alt="Advantus" className={styles.image}/>
                </div>
            </div>
        </div>
    )
}

export default Landing
