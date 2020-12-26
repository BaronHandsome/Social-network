import React from 'react';
import styles from './MyPosts.module.css'
import { Button, Post } from '../index';



export function MyPosts({ posts }) {
    let postsElements = posts.map(content => <Post content={content.message} />)

    return (
        <div className={styles.myPostsContainer}>
            <div className={styles.addPost}>
                <textarea className={styles.contentArea}></textarea>
                <Button text='Add Post' />
            </div>
            { postsElements }
        </div>
    )
}