import React from 'react';
import styles from './Dialogs.module.css';
import { DialogItem, Message } from '../../components/index'

export function Dialogs({ dialogs, messages}) {
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