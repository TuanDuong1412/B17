// Action types
const FETCH_BOOKS = 'FETCH_BOOKS';
const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
const ADD_BOOK = 'ADD_BOOK';
const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
const UPDATE_BOOK = 'UPDATE_BOOK';
const UPDATE_BOOK_SUCCESS = 'UPDATE_BOOK_SUCCESS';
const DELETE_BOOK = 'DELETE_BOOK';
const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';

// Action creators
export const fetchBooks = () => ({
    type: FETCH_BOOKS
});

export const addBook = (book) => ({
    type: ADD_BOOK,
    payload: book
});

export const updateBook = (book) => ({
    type: UPDATE_BOOK,
    payload: book
});

export const deleteBook = (bookId) => ({
    type: DELETE_BOOK,
    payload: bookId
});

export const fetchBooksSuccess = (books) => ({
    type: FETCH_BOOKS_SUCCESS,
    payload: books
});

export const addBookSuccess = (book) => ({
    type: ADD_BOOK_SUCCESS,
    payload: book
});

export const updateBookSuccess = (book) => ({
    type: UPDATE_BOOK_SUCCESS,
    payload: book
});

export const deleteBookSuccess = (bookId) => ({
    type: DELETE_BOOK_SUCCESS,
    payload: bookId
});