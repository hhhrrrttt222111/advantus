import React from 'react'
import Image from 'next/image'

import styles from '../../styles/Products.module.css'
import ProductCard from './ProductCard'

import products from '../../data/products'

import capsule from '../../assets/svg/capsule.svg'


function Products() {
    return (
        <div id="products" className={styles.products}>
            <div className={styles.productsBody}>
                <div className={styles.productsHeader}>
                    <h1>Products</h1>
                    <div className={styles.headerImg}>
                        <Image src={capsule} alt="" layout="responsive" width={80} height={80}/>
                    </div>
                </div>
                <div className={styles.container}>
                    {
                        products.map((product) => (
                            <ProductCard 
                                key={product.id} 
                                id={product.id}
                                name={product.name}
                                composition={product.composition}
                                indications={product.indications}
                                dosage={product.dosage}
                                formulation={product.formulation}
                                packing={product.packing}
                                image={product.image}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Products
