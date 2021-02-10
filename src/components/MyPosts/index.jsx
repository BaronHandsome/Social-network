import React from 'react';
import styles from './MyPosts.module.css'
import { Button, Post } from '../index';



export function MyPosts({ posts, postText, dispatch }) {
    let postsElements = posts.map(content => <Post key={content.id} content={content.post} />)

    let textareaContent = React.createRef();
    function addNewPost(params) {
        dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () => {
        let newPostContent = textareaContent.current.value;
        let action = { type: 'UPDATE-NEW-POST', newText: newPostContent };
        dispatch(action);
    };

    return (
        <div className={styles.myPostsContainer}>
            <div className={styles.addPost}>
                <textarea 
                onChange={onPostChange} 
                value={postText}
                ref={textareaContent} 
                className={styles.contentArea} />
                <div className={styles.buttonContainer}>
                    <Button action={addNewPost} text='Add Post' />
                </div>
            </div>
            { postsElements }
        </div>
    )
}









// export function MyPosts({ posts, addPost, postText }) {
//     let имяДляСсылки = React.createRef();

//     let onPostChange = () => {
//         let сюдаКладемЗнечениеТекстАрея = textareaContent.current.value;
//     };

//     return (
//         <div className={styles.myPostsContainer}>
//             <div className={styles.addPost}>
//                 <textarea 
//                 onChange={onPostChange} 
//                 value={postText}
//                 ref={textareaContent} />
//             </div>
//             { postsElements }
//         </div>
//     )
// }