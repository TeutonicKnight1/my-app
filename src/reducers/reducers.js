import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    TaskArr: [],
    isEmpty: 0,
}

const ADD_TASK = "ADD_TASK"
const CHANGE_TASK = "CHANGE_TASK"
const DELETE_TASK = "DELETE_TASK"
const ACCEPT_CHANGE_TASK = "ACCEPT_CHANGE_TASK"


const taskReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_TASK":
            return {...state, TaskArr: [...state.TaskArr, action.payload], isEmpty: 0};
        case "CHANGE_TASK": 
            return {...state, TaskArr: action.payload};
        case "ACCEPT_CHANGE_TASK":
            return {...state, TaskArr: action.payload}
        case "DELETE_TASK":
            return {...state, TaskArr: state.TaskArr.filter(item => item.id !== action.payload)}
        default:
            return state;
    }
}

export const store = createStore(taskReducer, composeWithDevTools());

export const AddTaskAction = (payload) => ({type: ADD_TASK, payload: payload})
export const ChangeTaskAction = (payload) => ({type: CHANGE_TASK, payload: payload})
export const DeleteTaskAction = (payload) => ({type: DELETE_TASK, payload: payload})
export const AcceptTaskChangeAction = (payload) => ({type: ACCEPT_CHANGE_TASK, payload: payload})
