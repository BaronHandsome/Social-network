import React from 'react';
import styles from './PostButtons.module.css';
import deletePost from '../../assets/DeletePost.svg'
import editPost from '../../assets/EditPost.svg'

export function DeletePost() {

    return (
        <div className={styles.btnContainer}>
            <img className={styles.actionIcon} src={deletePost} alt='Delete post'></img>
        </div>
    );
};

export function EditPost() {
    return (
        <div className={styles.btnContainer}>
        <img className={styles.actionIcon} src={editPost} alt='Add post'></img>
    </div>
    );
};