import React from 'react';
import styles from './MyPosts.module.css'
import { Button, Post } from '../index';

export function MyPosts() {
    return (
        <div className={styles.myPostsContainer}>
            <div className={styles.addPost}>
                <textarea className={styles.contentArea}></textarea>
                <Button text='Add Post' />
            </div>
            <Post content='Post 1' />
            <Post content='Post 2' />
            <Post content='Post 1' />
            <Post content='Post 2' />
            <Post content='Post 1' />
            <Post content='Post 2' />
            <Post content='Post 1' />
            <Post content='Post 2' />
            <Post content='Post 1' />
            <Post content='Post 2' />
            <Post content='Post 1' />
            <Post content='Post 2' />
        </div>
    )
}