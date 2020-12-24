import React from 'react';
import styles from './Header.module.css'

import logo from '../../assets/logo.svg';

export function Header() {


    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} className={styles.logo} />
            </div>
        </header>
    );
};