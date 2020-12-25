import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navLinks}>
                <NavLink
                    to='/profile'
                    className={styles.linkBlock}
                    activeClassName={styles.active}>
                    <span className={styles.link}>Profile</span>
                </NavLink>
                <NavLink
                    to='/dialogs'
                    className={styles.linkBlock}
                    activeClassName={styles.active}>
                    <span className={styles.link}>Dialogs</span>
                </NavLink>
                <NavLink
                    to='/news'
                    className={styles.linkBlock}
                    activeClassName={styles.active}>
                    <span className={styles.link}>News</span>
                </NavLink>
                <NavLink
                    to='/music'
                    className={styles.linkBlock}
                    activeClassName={styles.active}>
                    <span className={styles.link}>Music</span>
                </NavLink>
                <NavLink
                    to='/settings'
                    className={styles.linkBlock}
                    activeClassName={styles.active}>
                    <span className={styles.link}>Settings</span>
                </NavLink>
            </div>
        </nav>
    );
};