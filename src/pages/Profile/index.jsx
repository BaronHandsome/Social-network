import React from 'react';
import styles from './Profile.module.css'

import { MyPosts, ProfileInfo } from '../../components/index';

export function Profile({ state, addPost }) {
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPosts 
            addPost={addPost}
            posts={state.posts} />
        </div>
    );
};