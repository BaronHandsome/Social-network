import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

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

export function Message({ message }) {
    return(
        <div className={styles.message}>{message}</div>
    );
};

export function Dialogs() {
    return (
        <div className={styles.dialogsContainer}>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    <DialogItem name='User 1' id='1' />
                    <DialogItem name='User 2' id='2' />
                    <DialogItem name='User 3' id='3' />
                    <DialogItem name='User 4' id='4' />
                </div>
            </div>
            <div className={styles.messages}>
                <Message message='Hi' />
                <Message message='Sup' />
                <Message message='Hello' />
            </div>
        </div>
    );
};