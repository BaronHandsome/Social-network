import { store } from '../redux/state';

export const ADD_MESSAGE = 'ADD-MESSAGE';
export const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
    ],
    newMessageText: 'some message',
}

export const dialogsReducer = (state = initialState, action) => {
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
        default:
            return state;
    }

    return state;
};

export const addMessageActionCreator = (newMessageContent) => ({ type: ADD_MESSAGE, message: newMessageContent });

export const updateNewMessageActionCreator = (newMessageContent) => ({ type: UPDATE_NEW_MESSAGE, newText: newMessageContent});