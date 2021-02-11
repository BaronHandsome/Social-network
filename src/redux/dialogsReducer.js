import { store } from '../redux/state';

export const ADD_MESSAGE = 'ADD-MESSAGE';
export const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export const dialogsReducer = (state, action) => {
    const _addMessage = () => {
        let newMessage = {
            id: state.messages.length + 1,
            message: state.newMessageText
        };
        if (state.newMessageText !== '') {
            state.messages.push(newMessage);
            state.newMessageText = ('');
            console.log(newMessage);

            store.rerender(state._state);
        }
    };

    const _updateNewMessageText = (newText) => {
        state.newMessageText = newText
        console.log(state.newMessageText);

        store.rerender(state._state);
    };

    switch (action.type) {
        case ADD_MESSAGE:
            _addMessage();
            break;
        case UPDATE_NEW_MESSAGE:
            _updateNewMessageText(action.newText);
            break;
    }

    return state;
};

export const addMessageActionCreator = (newMessageContent) => ({ type: ADD_MESSAGE, message: newMessageContent });

export const updateNewMessageActionCreator = (newMessageContent) => ({ type: UPDATE_NEW_MESSAGE, newText: newMessageContent});