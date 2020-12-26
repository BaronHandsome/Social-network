import React from 'react';
import styles from './Profile.module.css'

import { MyPosts, ProfileInfo } from '../../components/index';

export function Profile({ posts }) {
    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </div>
    );
};