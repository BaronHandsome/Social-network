import React from 'react';
import styles from './Button.module.css'

export function Button( {text, action} ) {
    return (
        <div onClick={action} className={styles.button}>{text}</div>
    )
}