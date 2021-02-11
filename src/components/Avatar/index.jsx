import React from 'react';
import styles from './Avatar.module.css';
import avatar from '../../assets/avatar.png';

export function Avatar({ name }) {
    return(
        <div className={styles.avatarBlock}>
            <img src={avatar} className={styles.avatar} alt='User'></img>
            <span className={styles.name}>{name}</span>
        </div>
    );
};