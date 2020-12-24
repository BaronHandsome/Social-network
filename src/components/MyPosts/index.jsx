import React from 'react';
import styles from './MyPosts.module.css'
import { Button, Post } from '../index';

export function MyPosts() {
    return (
        <div className={styles.myPostsContainer}>
            <textarea></textarea>
            <Button text='Add Post'/>
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