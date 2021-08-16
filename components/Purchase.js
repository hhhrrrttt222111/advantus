import React from 'react';
import Image from 'next/image';

import styles from '../styles/Purchase.module.css';

import userimg from '../assets/svg/purchasePage/userimg.svg';
import callImage from '../assets/svg/landingPage/callbutton.svg';
import mail from '../assets/svg/purchasePage/mailbutton.svg';
import purchaseImg from '../assets/svg/purchasePage/img.svg';


function Purchase() {
    return (
        <div id="purchase" className={styles.purchase}>
            <div className={styles.purchaseBody}>
                <h1>Online Purchase</h1>
                <h6>To purchase any of our products, please contact </h6>
                <div className={styles.purchaseInfo}>
                    <div className={styles.userImage}>
                        <Image src={userimg} alt="advantus" layout="intrinsic" width={150} height={150} />
                    </div>
                    <div className={styles.purchaseDesc}>
                        <h2>Pranav Jayasankar</h2>
                        <p>9656246532</p>
                        <p>pranavpj@gmail.com</p>
                        <div className={styles.purchaseButtons}>
                            <button>
                                <div className={styles.callimage}>
                                    <Image src={callImage} alt="advantus" layout="responsive" height={50} width={60} />
                                </div>
                            </button>
                            <button>
                                <div className={styles.mailimage}>
                                    <Image src={mail} alt="advantus" layout="responsive" height={50} width={60} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.purchaseImage}>
                <Image src={purchaseImg} alt="advantus" layout="responsive" height={100} width={50} />
            </div>
        </div>
    )
}

export default Purchase
