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
                {/* <select className={styles.dropdown}>
                    <option disabled>Group</option>
                    <option value="1">Best friends</option>
                    <option value="2">Colleagues</option>
                    <option value="3">3</option>
                </select> */}
            </div>
        </div>
    );
};