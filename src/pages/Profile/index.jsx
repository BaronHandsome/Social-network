import React from 'react';
import styles from './Profile.module.css'

import { MyPosts, ProfileInfo } from '../../components/index';

export function Profile({ state, dispatch }) {
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPosts
                dispatch={dispatch}
                posts={state.posts}
                postText={state.newPostText}
            />
        </div>
    );
};