import React from 'react'
import Image from 'next/image'

import styles from '../styles/Products.module.css'
import ProductCard from './ProductCard'

import shield from '../assets/svg/shield.svg'


function Products() {
    return (
        <div id="products" className={styles.products}>
            <div className={styles.productsBody}>
                <div className={styles.productsHeader}>
                    <h1>Products</h1>
                    <div className={styles.headerImg}>
                        <Image src={shield} alt="" layout="responsive" width={80} height={80}/>
                    </div>
                </div>
                <div className={styles.container}>
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

        </div>
    )
}

export default Products
