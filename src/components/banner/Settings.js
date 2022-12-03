import React from 'react'

import { WalletSettings } from '../wallet/WalletSettings'
import styles from './Banner.module.scss'

export const Settings = () => {
   return (
       <div className={styles.settings}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-24">
                        <div className="flex-start">
                            <WalletSettings />
                        </div>
                    </div>
                </div>
            </div>
       </div>
   )
}