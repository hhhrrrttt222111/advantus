import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiCapsule } from "react-icons/bi";
import { MdOutlineContactPhone } from "react-icons/md";

import styles from '../../styles/Bottombar.module.css'

import logoColor from '../../assets/svg/logoColor.svg'

function Bottombar() {
  return (
    <div className={styles.bottombar}>
        <div className={styles.bottomContainer}>
            <div className={styles.logoCircle}>
                <Link href="/" passHref>
                    <a>
                        <Image src={logoColor} height={70} width={70} layout="responsive" alt=""/>
                    </a>
                </Link>
            </div>
            <Link href="/#products" passHref>
                <div className={styles.bottomContent}>
                    <BiCapsule className={styles.bottomIcon}/>
                    Products
                </div>
            </Link>
            <Link href="/#purchase" passHref>
                <div className={styles.bottomContent}>
                    <MdOutlineContactPhone className={styles.bottomIcon}/>
                    Contact Us
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Bottombar