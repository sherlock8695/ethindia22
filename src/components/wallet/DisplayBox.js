import React from 'react'

import styles from './WalletSettings.module.scss'

export const DisplayBox = ({ onClick, text, loading }) => {
    return (
        <div onClick={!loading ? onClick : () => {}} className={styles.displayBox}>{text}</div>
    )
}