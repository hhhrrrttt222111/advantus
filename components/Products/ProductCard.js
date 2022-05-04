import React from 'react'
import Image from 'next/image';

import styles from '../../styles/ProductCard.module.css'

import img from '../../assets/medicine.jpg'
function ProductCard() {
    return (
        <div className={styles.card}>
            <div className={styles.card_img}>
                <Image src={img} alt="" placeholder="blur" priority="true" className={styles.image} layout="fill"/>
            </div>
            <div className={styles.card_content}>
                hello
            </div>

        </div>
    )
}

export default ProductCard
