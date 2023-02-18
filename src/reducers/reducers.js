import { configureStore, createSlice } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

const taskSlice = createSlice({
    name: "task",
    initialState: {
        TaskArr: [],
        isEmpty: 0,
    },
    reducers: {
        addTask(state, action) {
            state.TaskArr.push(action.payload)
        },
        changeTask(state, action) {
            state.TaskArr =  action.payload
        },
        acceptChangeTask(state, action) {
            state.TaskArr =  action.payload
        },
        deleteTask(state, action) {
            state.TaskArr = action.payload
        },
    },
})

export default taskSlice.reducer
export const {addTask, changeTask, deleteTask, acceptChangeTask} = taskSlice.actions

export const store = configureStore({
    reducer: taskSlice, 
    devTools: composeWithDevTools(),
});

