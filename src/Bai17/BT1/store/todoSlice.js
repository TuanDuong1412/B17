import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";



export const getTodoList = createAsyncThunk('todos/getTodoList', async (params, thunkAPI) => {

    const list = await axios.get('http://localhost:3000/todos');
    return list;
});

export const addnewTodo = createAsyncThunk('todos/addnewTodo', async (todo, thunkAPI) => {
    const list = await axios.post('http://localhost:3000/Todos', todo);
    thunkAPI.dispatch(getTodoList());
    return list;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (params, thunkAPI) => {
    console.log(22, params);
    const list = await axios.delete(`http://localhost:3000/Todos/${params.id}`);
    thunkAPI.dispatch(getTodoList());
    return list;
});


export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        loading: false,
    },
    reducers: {
        addTodo: (state, action) => {

            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            if (index !== -1) {
                state.todos.splice(index, 1);
            }
        },
        toggleTodo: (state, action) => {
            state[action.payload].completed = !state[action.payload].completed;
        },
        editTodo: (state, action) => {
            state[action.payload] = action.payload;
        },
        clearCompleted: (state, action) => {
            state = state.filter(todo => !todo.completed);
        },

    },
    extraReducers: {
        [getTodoList.pending]: (state, action) => {
            state.loading = true;
        },
        [getTodoList.fulfilled]: (state, action) => {
            state.todos = action.payload.data;
            state.loading = false;
        },
        [getTodoList.rejected]: (state, action) => {
            state.loading = false;
        },


        [addnewTodo.pending]: (state, action) => {
            state.loading = true;
        },
        [addnewTodo.fulfilled]: (state, action) => {
            // state.push(action.payload.data);
            addTodo()
            state.loading = false;
        },
        [addnewTodo.rejected]: (state, action) => {
            state.loading = false;
        },
        [deleteTodo.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteTodo.fulfilled]: (state, action) => {
            removeTodo()
            state.loading = false;
        },
        [deleteTodo.rejected]: (state, action) => {
            state.loading = false;
        },

       

    }
})

export const { addTodo, removeTodo, toggleTodo, editTodo, clearCompleted } = todoSlice.actions;
export const selectTodos = (state) => state.todo
export default todoSlice.reducer;