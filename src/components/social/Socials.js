import React from 'react'

import styles from './Socials.module.scss'

export const Socials = () => {

    return (
        <>
            <svg className={`${styles.icon} ${styles.discord}`} />
            <svg className={`${styles.icon} ${styles.twitter}`} />
        </>
    )
}