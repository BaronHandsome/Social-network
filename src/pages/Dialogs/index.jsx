import React from 'react';
import styles from './Dialogs.module.css';
import { DialogItem, Message, Button } from '../../components/index'

export function Dialogs({ state, dispatch }) {

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} />);

    let textareaContent = React.createRef();

    function addNewMessage(params) {
        let newMessageContent = textareaContent.current.value;
        let action = { type: 'ADD-MESSAGE', message: newMessageContent };
        dispatch(action);
        textareaContent.current.value = '';
    }

    return (
        <div className={styles.dialogsContainer}>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <div className={styles.addNewMessageContainer}>
                    <textarea ref={textareaContent} className={styles.messageArea}></textarea>
                    <div className={styles.buttonContainer}>
                        <Button action={addNewMessage} text='Add message' />
                    </div>
                </div>
            </div>
        </div>
    );
};