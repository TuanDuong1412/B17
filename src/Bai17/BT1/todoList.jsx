import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, getTodoList, selectTodos } from './store/todoSlice';

export default function TodosList() {
    const dispatch = useDispatch()
    const { todos } = useSelector(selectTodos)

    useEffect(() => {
        dispatch(getTodoList());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTodo({ id }))
    }

    return (
        <>
            <h2>todosList</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title} <button onClick={() => { handleDelete(todo.id) }}>Delete</button></li>
                ))}
            </ul >
        </>
    )
}