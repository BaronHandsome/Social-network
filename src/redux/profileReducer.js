import { store } from '../redux/state';

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

export const profileReducer = (state, action) => {
    const _addPost = () => {
        let newPost = {
            id: state.posts.length + 1,
            post: state.newPostText
        };
        if (state.newPostText !== '') {
            state.posts.unshift(newPost);
            state.newPostText = ('')
            console.log(newPost)

            store.rerender(state._state);
        }
    };

    const _updateNewPost = (newText) => {
        store._state.profilePage.newPostText = newText;
        console.log(store._state.profilePage.newPostText);

        store.rerender(store._state);
    };

    switch (action.type) {
        case ADD_POST:
            _addPost();
            break;
        case UPDATE_NEW_POST:
            _updateNewPost(action.newText);
            break;
    }

            return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (newPostContent) => ({ type: UPDATE_NEW_POST, newText: newPostContent });