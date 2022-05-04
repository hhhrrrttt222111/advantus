import React from 'react'
import Sidebar from './Sidebar'

import styles from '../../styles/Layout.module.css'
import Bottombar from './Bottombar'

function layout({ children }) {
    return (
        <div className={styles.layout}>
            <div className={styles.layoutSidebar}>
                <Sidebar />
            </div>
            <div className={styles.layoutBody}>
                {children}  
            </div>
            <div className={styles.layoutBottombar}>
                <Bottombar />
            </div>
        </div>
    )
}

export default layout
