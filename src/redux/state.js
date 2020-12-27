import { rerender } from "../render";

export let state = {
    profilePage: {
        posts: [
            {
                id: 1,
                post: 'Post 1'
            },
            {
                id: 2,
                post: 'Post 2'
            },
            {
                id: 3,
                post: 'Post 3'
            },
            {
                id: 4,
                post: 'Post 4'
            },
            {
                id: 5,
                post: 'Post 5'
            },
            {
                id: 6,
                post: 'Post 6'
            },
            {
                id: 7,
                post: 'Post 7'
            },
            {
                id: 8,
                post: 'Post 8'
            },
            {
                id: 9,
                post: 'Post 9'
            },
            {
                id: 10,
                post: 'Post 10'
            },
            {
                id: 11,
                post: 'Post 11'
            },
            {
                id: 12,
                post: 'Post 12'
            }
        ]
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                name: 'User 1'
            },
            {
                id: 2,
                name: 'User 2'
            },
            {
                id: 3,
                name: 'User 3'
            },
            {
                id: 4,
                name: 'User 4'
            },
            {
                id: 5,
                name: 'User 5'
            }
        ],
        messages: [
            {
                id: 1,
                message: 'Hi'
            },
            {
                id: 2,
                message: 'Sup'
            },
            {
                id: 3,
                message: 'Hello'
            },
            {
                id: 4,
                message: 'Yo'
            },
            {
                id: 5,
                message: 'Hi'
            },
            {
                id: 6,
                message: 'Hi'
            },
            {
                id: 7,
                message: 'Sup'
            },
            {
                id: 8,
                message: 'Hello'
            },
            {
                id: 9,
                message: 'Yo'
            },
            {
                id: 10,
                message: 'Hi'
            },
            {
                id: 11,
                message: 'Hi'
            },
            {
                id: 12,
                message: 'Sup'
            },
            {
                id: 13,
                message: 'Hello'
            },
            {
                id: 14,
                message: 'Yo'
            },
            {
                id: 15,
                message: 'Hi'
            },
            {
                id: 16,
                message: 'Hi'
            },
            {
                id: 17,
                message: 'Sup'
            },
            {
                id: 18,
                message: 'Hello'
            },
            {
                id: 19,
                message: 'Yo'
            },
            {
                id: 20,
                message: 'Hi'
            },
            {
                id: 21,
                message: 'Hi'
            },
            {
                id: 22,
                message: 'Sup'
            },
            {
                id: 23,
                message: 'Hello'
            },
            {
                id: 24,
                message: 'Yo'
            },
            {
                id: 25,
                message: 'Hi'
            },
            {
                id: 26,
                message: 'Hi'
            },
            {
                id: 27,
                message: 'Sup'
            },
            {
                id: 28,
                message: 'Hello'
            },
            {
                id: 29,
                message: 'Yo'
            },
            {
                id: 30,
                message: 'Hi'
            },
        ]
    },
};

export let addPost = (post) => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        post: post
    };
    state.profilePage.posts.push(newPost);

    rerender(state);
};

export let addMessage = (message) => {
    let newMessage = {
        id: state.dialogsPage.messages.length + 1,
        message: message
    };
    state.dialogsPage.messages.push(newMessage);

    rerender(state);
};