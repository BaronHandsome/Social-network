import React from 'react';
import styles from './Dialogs.module.css';
import { DialogItem, Message } from '../../components/index'

export function Dialogs() {
    let dialogs = [
        {
            id: 1,
            name: 'User 1'
        },
        {
            id: 2,
            name: 'User 2'
        },
        {
            id: 3,
            name: 'User 3'
        },
        {
            id: 4,
            name: 'User 4'
        }
    ];
    
    let messages = [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'Sup'
        },
        {
            id: 3,
            message: 'Hello'
        },
        {
            id: 4,
            message: 'Yo'
        }
    ];

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = messages.map(message => <Message message={message.message} />);

    return (
        <div className={styles.dialogsContainer}>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    { dialogsElements }
                </div>
            </div>
            <div className={styles.messages}>
                { messagesElements }
            </div>
        </div>
    );
};