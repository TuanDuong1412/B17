import { combineReducers } from 'redux';

// Books reducer
const booksReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return action.payload;
        case 'ADD_BOOK_SUCCESS':
            return [...state, action.payload];
        case 'UPDATE_BOOK_SUCCESS':
            return state.map((book) =>
                book.id === action.payload.id ? action.payload : book
            );
        case 'DELETE_BOOK_SUCCESS':
            return state.filter((book) => book.id !== action.payload);
        default:
            return state;
    }
};

// Root reducer
const rootReducer = combineReducers({
    books: booksReducer
});

export default rootReducer;