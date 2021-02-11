import React from 'react';
import styles from './Dialogs.module.css';
import { DialogItem, Message, Button, addMessageActionCreator, updateNewMessageActionCreator } from '../../components/index'

export function Dialogs({ state, dispatch }) {

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} />);

    let textareaContent = React.createRef();

    function addNewMessage() {
        dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        let newMessageContent = textareaContent.current.value;
        let action = updateNewMessageActionCreator(newMessageContent);
        dispatch(action);
    };

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
                    <textarea
                        value={state.newMessageText}
                        onChange={onMessageChange}
                        ref={textareaContent}
                        className={styles.messageArea}></textarea>
                    <div className={styles.buttonContainer}>
                        <Button action={addNewMessage} text='Add message' />
                    </div>
                </div>
            </div>
        </div>
    );
};