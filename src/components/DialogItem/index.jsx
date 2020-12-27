import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';
import { Avatar } from '../../components/index'

export function DialogItem({ name, id }) {
    return (
        <NavLink
            to={`/dialogs/ ${id}`}
            className={styles.dialogBlock}
            activeClassName={styles.active}>
            <Avatar />
            <span className={styles.dialog}>{name}</span>
        </NavLink>
    );
};