import React from 'react';
import styles from './MyPosts.module.css'
import { Button, Post } from '../index';



export function MyPosts({ posts }) {
    let postsElements = posts.map(content => <Post content={content.message} />)


    let textareaContent = React.createRef();

    function addNewPost(params) {
        let newPostContent = textareaContent.current.value;
        alert(newPostContent)
    }


    return (
        <div className={styles.myPostsContainer}>
            <div className={styles.addPost}>
                <textarea ref={textareaContent} className={styles.contentArea}></textarea>
                <div className={styles.buttonContainer}>
                    <Button action={addNewPost} text='Add Post' />
                </div>
            </div>
            { postsElements}
        </div>
    )
}