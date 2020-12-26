import React from 'react';
import styles from './Message.module.css';

export function Message({ message }) {
    return (
        <div className={styles.message}>{message}</div>
    );
};