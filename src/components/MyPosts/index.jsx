import React from 'react';
import styles from './MyPosts.module.css'
import { Button, Post } from '../index';



export function MyPosts() {
    let postData = [
        {
            id: 1,
            message: 'Post 1'
        },
        {
            id: 2,
            message: 'Post 2'
        },
        {
            id: 3,
            message: 'Post 3'
        },
        {
            id: 4,
            message: 'Post 4'
        },
        {
            id: 5,
            message: 'Post 5'
        },
        {
            id: 6,
            message: 'Post 6'
        },
        {
            id: 7,
            message: 'Post 7'
        },
        {
            id: 8,
            message: 'Post 8'
        },
        {
            id: 9,
            message: 'Post 9'
        },
        {
            id: 10,
            message: 'Post 10'
        },
        {
            id: 11,
            message: 'Post 11'
        },
        {
            id: 12,
            message: 'Post 12'
        },
    ];

    let readyPosts = postData.map(content => <Post content={content.message} />)

    return (
        <div className={styles.myPostsContainer}>
            <div className={styles.addPost}>
                <textarea className={styles.contentArea}></textarea>
                <Button text='Add Post' />
            </div>
            { readyPosts }
        </div>
    )
}