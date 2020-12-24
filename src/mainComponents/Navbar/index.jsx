import React from 'react';
import styles from './Navbar.module.css';

export function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navLinks}>
                <div className={styles.linkBlock}>
                    <a href='/profile'>Profile</a>
                </div>
                <div className={styles.linkBlock}>
                    <a href='/dialogs'>Dialogs</a>
                </div>
                <div className={styles.linkBlock}>
                    <a href='/news'>News</a>
                </div>
                <div className={styles.linkBlock}>
                    <a href='/music'>Music</a>
                </div>
                <div className={styles.linkBlock}>
                    <a href='/settings'>Settings</a>
                </div>
            </div>
        </nav>
    );
};