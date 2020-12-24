import React from 'react';
import styles from './Profile.module.css'

import img from '../../assets/img.jpeg';
import { MyPosts } from '../../components/index';

export function Profile() {
    return (
        <div className={styles.content}>
            <img src={img} className={styles.mainImg} />
            <MyPosts />
        </div>
    );
};