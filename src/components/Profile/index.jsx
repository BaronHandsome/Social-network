import React from 'react';
import styles from './Profile.module.css'

import img from '../../assets/img.jpeg';
import gitLink from '../../assets/gitLink.png';

export function Profile() {
    return (
        <div className={styles.content}>
            <img src={img} className={styles.mainImg} />
            <div className={styles.linkContainer}>
                <a href='https://github.com/BaronHandsome'><img src={gitLink} className={styles.gitLink} /></a>
            </div>
            <div>ava + desc</div>
            <div>
                My posts
                <div>New post</div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    );
};