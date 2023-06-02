import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, addnewTodo, selectTodos } from './store/todoSlice';

export default function TodoForm() {
    const { todos } = useSelector(selectTodos)
    const [todo, settodo] = useState('')
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault();
        const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
        const newtodo = {
            id: newId,
            title: todo,
        }
        dispatch(addnewTodo(newtodo));
        settodo('')
    }

    return (
        <>
            <h3>TodoForm</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Add new todo' id='todo' value={todo} onChange={(e) => settodo(e.target.value)} />
                <button type='submit'>Add</button>
            </form>

        </>
    )

}