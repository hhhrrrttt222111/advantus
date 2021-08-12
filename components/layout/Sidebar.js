import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";

import styles from '../../styles/Sidebar.module.css'

import navLogo from '../../assets/svg/navLogo.svg'

function Sidebar() {

    const router = useRouter();

    var hashURL
    if(router.asPath === '/') {
        hashURL = 'home'
    } else {
        hashURL = router.asPath.replace('/#', '')
    }


    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarContainer}>
                <div className={styles.logo}>
                    <Link href="/" passHref>
                        <Image src={navLogo} layout="responsive" height={100} width={100} alt=""/>
                    </Link>
                </div>
                <div className={styles.navItems}>
                    <Link href="/#home">
                        <a className={`${hashURL === 'home' ? styles.navLinkActive : styles.navLink}`}>
                            Home
                        </a>
                    </Link>
                    <Link href="/#about">
                        <a className={`${hashURL === 'about' ? styles.navLinkActive : styles.navLink}`}>
                            About Us
                        </a>
                    </Link>
                    <Link href="/#products">
                        <a className={`${hashURL === 'products' ? styles.navLinkActive : styles.navLink}`}>
                            Products
                        </a>
                    </Link>
                    <Link href="/#purchase">
                        <a className={`${hashURL === 'purchase' ? styles.navLinkActive : styles.navLink}`}>
                            Purchase
                        </a>
                    </Link>
                    <Link href="/#contact">
                        <a className={`${hashURL === 'contact' ? styles.navLinkActive : styles.navLink}`}>
                            Contact Us
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
