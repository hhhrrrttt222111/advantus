import React from 'react';
import Image from 'next/image';
import { FiPhoneCall, FiMail } from "react-icons/fi";

import styles from '../styles/Purchase.module.css';

import purchaseImg from '../assets/svg/purchasePage/img.svg';


function Purchase() {
    return (
        <div id="purchase" className={styles.purchase}>
            <div className={styles.purchaseBody}>
                <h1>Online Purchase</h1>

                <div className={styles.phoneContainer}>
                    <div className={styles.phoneNums} data-aos='fade-up' data-aos-duration="400">
                        <FiPhoneCall className={styles.phoneIcon}/>
                        <p className={styles.phone}>
                            <a href="tel:+918921548088">+91 8921548088</a>
                        </p>
                        <p className={styles.phone}>
                            <a href="tel:+919447736026">+91 9447736026</a>
                        </p>
                        <p className={styles.phone}>
                            <a href="tel:+919495936026">+91 9495936026</a>
                        </p>
                    </div>
                    <div className={styles.image}>
                        <Image src={purchaseImg} alt="" className={styles.image} />
                    </div>
                </div>
                <div className={styles.emailContainer} data-aos='fade-up' data-aos-duration="600">
                    <FiMail className={styles.emailIcon}/>
                    <a href="mailto:advantuslifesciences@gmail.com" className={styles.email}>advantuslifesciences@gmail.com</a> 
                </div>
                <p className={styles.phone} data-aos='fade-up' data-aos-duration="800">
                    For product enquiries: <br />
                    <span className={styles.bold}>Maria Pharma</span> <br />
                    <a href="tel:04842347975">0484 2347975</a> <br />
                    <a href="tel:+919847045354">+91 9847045354</a>
                </p>
            </div>

        </div>
    )
}

export default Purchase
