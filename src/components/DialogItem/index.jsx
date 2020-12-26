import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

export function DialogItem({ name, id }) {
    return (
        <NavLink
            to={`/dialogs/ ${id}`}
            className={styles.dialogBlock}
            activeClassName={styles.active}>
            <span className={styles.dialog}>{name}</span>
        </NavLink>
    );
};