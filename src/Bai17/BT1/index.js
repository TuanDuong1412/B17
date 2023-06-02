import { Provider } from 'react-redux';
import React from 'react'
import TodosList from './todoList';
import { store } from './store/store';
import TodoForm from './todoForm';

export default function B17BT1() {

    return (
        <Provider store={store}>
            <TodoForm />
            <TodosList />
        </Provider>
    )
}