import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

import styles from '../styles/Landing.module.css';

import img1 from '../assets/svg/landingPage/img1.svg';
import headingImg from '../assets/svg/landingPage/heading.svg';
import callButton from '../assets/svg/landingPage/callbutton.svg';

function Landing() {
    return (
        <div className={styles.landing} id="home">
            <div className={styles.landingBody}>
                <div className={styles.landingDescription}>
                    <div className={styles.headingImage}>
                        <Image src={headingImg} layout="responsive" height={50} width={100} />                    
                    </div>
                    <p>Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Tristique semper urna, </p>
                    <button className={styles.landingButton}>
                        <div className={styles.buttonImage}>
                        <Image src={callButton} layout="responsive" height={50} width={50} />
                        </div>                     
                        <p>Call Now</p>
                    </button>
                </div>
                <div className={styles.landingImage}>
                    <Image src={img1} layout="responsive" height={100} width={120} />
                </div>
            </div>
        </div>
    )
}

export default Landing
