import React from 'react';
import styles from './Navbar.module.css'

export function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navLinks}>
                <div className={styles.linkBlock}>
                    <a href='#'>Profile</a>
                </div>
                <div className={styles.linkBlock}>
                    <a href='#'>Messages</a>
                </div>
                <div className={styles.linkBlock}>
                    <a href='#'>News</a>
                </div>
                <div className={styles.linkBlock}>
                    <a href='#'>Music</a>
                </div>
                <div className={styles.linkBlock}>
                    <a href='#'>Settings</a>
                </div>
            </div>
        </nav>
    );
};