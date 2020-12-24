import React from 'react';
import styles from './Post.module.css';
import { Avatar, RateButton, DeletePost, EditPost } from '../index';

export function Post({content}) {
    return (
        <div className={styles.postBlock}>
            <Avatar name='Alexander Shebanov' />
            <div className={styles.content}>{content}</div>
            <div className={styles.ratingContainer}>
                <RateButton />
            </div>
            <div className={styles.postButtonsContainet}>
                <DeletePost />
                <EditPost />
            </div>
        </div>
    )
}