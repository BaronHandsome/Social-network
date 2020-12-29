import React from 'react';
import styles from './Friend.module.css';
import friendIcon from '../../assets/friend.svg'
import { } from '../index';


export function Friend({ name }) {
    return (
        <div className={styles.friendContainer}>
            <div className={styles.imageContainer}>
                <img src={friendIcon} className={styles.image}></img>
            </div>
            <div className={styles.infoContainer}>
                <p>{name}</p>
            </div>
        </div>
    );
};