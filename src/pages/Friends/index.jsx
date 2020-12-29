import React from 'react';
import styles from './Friends.module.css';
import { NavLink } from 'react-router-dom';
import { Friend } from '../../components/index'

export function Friends({ state }) {
    let friendItems = state.friend.map(friendItem => <Friend name={friendItem.name} />)

    return (
        <div className={styles.friendsMainContainer}>
            {friendItems}
        </div>
    )
}