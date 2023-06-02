import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

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

// Sagas
function* fetchBooksSaga() {
    try {
        const response = yield call(axios.get, 'http://localhost:3000/books');
        yield put({ type: FETCH_BOOKS_SUCCESS, payload: response.data });
    } catch (error) {
        // Handle error
    }
}

function* addBookSaga(action) {
    try {
        const response = yield call(axios.post, 'http://localhost:3000/books', action.payload);
        yield put({ type: ADD_BOOK_SUCCESS, payload: response.data });
    } catch (error) {
        // Handle error
    }
}

function* updateBookSaga(action) {
    try {
        const response = yield call(axios.put, `http://localhost:3000/books/${action.payload.id}`, action.payload);
        yield put({ type: UPDATE_BOOK_SUCCESS, payload: response.data });
    } catch (error) {
        // Handle error
    }
}

function* deleteBookSaga(action) {
    try {
        yield call(axios.delete, `http://localhost:3000/books/${action.payload}`);
        yield put({ type: DELETE_BOOK_SUCCESS, payload: action.payload });
    } catch (error) {
        // Handle error
    }
}

// Watcher saga
function* rootSaga() {
    yield takeEvery(FETCH_BOOKS, fetchBooksSaga);
    yield takeEvery(ADD_BOOK, addBookSaga);
    yield takeEvery(UPDATE_BOOK, updateBookSaga);
    yield takeEvery(DELETE_BOOK, deleteBookSaga);
}

export default rootSaga;