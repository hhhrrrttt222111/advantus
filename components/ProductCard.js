import React from 'react'
import Image from 'next/image'

import styles from '../styles/Products.module.css'

import medicine from '../assets/png/medicine.png'

function ProductCard() {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image src={medicine} alt="" className={styles.productImg}/>
            </div>
            <div className={styles.cardContent}>
                <h1>Paracetamol</h1>
                <div className={styles.composition}>
                    <h2>Compostition</h2>
                    <p>There wasnt a bird in the sky, but that was not what caught her attention. It was the clouds.</p>
                </div>
                <div className={styles.cardItemsContainer}>
                    <div className={styles.cardItems}>
                        <div className={styles.cardItemSingle}>
                            <h2>Indication</h2>
                            <p>kjdabfkejhglhh </p>
                        </div>
                        <div className={styles.cardItemSingle}>
                            <h2>Dosage</h2>
                            <p>kjdabfkejhglhh </p>
                        </div>
                    </div>
                    <div className={styles.cardItems}>
                        <div className={styles.cardItemSingle}>
                            <h2>Formulation</h2>
                            <p>C6H6CH4C2</p>
                        </div>
                        <div className={styles.cardItemSingle}>
                            <h2>Packing</h2>
                            <p>10*10 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
