import React from 'react';
import './styles/ListElementCreator.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddTaskAction } from './reducers/reducers';

function ListElementCreator() {
    const dispatch = useDispatch()
    const isEmpty = useSelector(state => state.isEmpty)
    const TaskArr = useSelector(state => state.TaskArr)

    const AddTaskHandler = () => {
        const name = document.querySelector('#NameOfNewTask').value;
        const text = document.querySelector('#TextOfNewTask').value;
        let isChange = 0;

        const newTask = {
            id: TaskArr.length ? TaskArr[TaskArr.length - 1].id + 1 : 0,
            name,
            text,
            isChange,
        }

        dispatch(AddTaskAction(newTask))
    }

    return (
        <div className='ListElementCreator'>
            <div className='DivNameOfNewTask'>
                <h3 className='hNameOfNewTask'>Заголовок</h3>
                <button onClick={() => AddTaskHandler()} className='BtnOfNewTask'>
                    <img className='CrossImg' src='/img/cross.png' alt=''/>
                </button>
                <input type='text' autoComplete="off" size='30' id='NameOfNewTask'/>
                {isEmpty === 1 &&
                    <span id='SpanNameOfNewTaskIsEmpty'>Это поле не может быть пустым</span>
                }
            </div>
            <div className='DivTextOfNewTask'>
                <h3 className='hTextOfNewTask'>Суть дела</h3>
                <textarea id='TextOfNewTask' wrap='soft'/>
            </div>
        </div>
    )
}

export default ListElementCreator;