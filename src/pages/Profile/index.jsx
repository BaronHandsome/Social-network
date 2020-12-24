import React from 'react';
import styles from './Profile.module.css'

import img from '../../assets/img.jpeg';
import gitLink from '../../assets/gitLink.png';
import { MyPosts } from '../../components/index';

export function Profile() {
    return (
        <div className={styles.content}>
            <img src={img} className={styles.mainImg} />
            <div className={styles.linkContainer}>
                <a href='https://github.com/BaronHandsome'><img src={gitLink} className={styles.gitLink} /></a>
            </div>
            <MyPosts />
        </div>
    );
};