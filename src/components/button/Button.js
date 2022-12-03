import React from 'react'

import styles from './Button.module.scss'

export const Button = ({ name, onClick }) => {
    return (
        <div className={styles.buttonWrapper}>
            <div onClick={onClick} className={styles.button}>{name}</div>
        </div>
    )
}