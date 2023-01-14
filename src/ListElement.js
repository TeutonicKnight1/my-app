import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AcceptTaskChangeAction, ChangeTaskAction, DeleteTaskAction } from './reducers/reducers';
import './styles/ListElement.css';

function ListElement(props) {
  const dispatch = useDispatch()
  const TaskArr = useSelector(state => state.TaskArr)
  const {Task} = props

  const DeleteTaskHandler = (id) => {
    dispatch(DeleteTaskAction(id));
  }

  const ChangeTaskHandler = (id) => {
    const ChangeTask = Task
    
    ChangeTask.isChange = 1;

    const TaskArrSliceBefore = TaskArr.slice(0, id)
    const TaskArrSliceAfter = TaskArr.slice(id+1, TaskArr.length)

    const ChangeTaskArr = TaskArrSliceBefore.concat(ChangeTask).concat(TaskArrSliceAfter);

    dispatch(ChangeTaskAction(ChangeTaskArr));
  }

  const AcceptChangeHandler = (id) => {
    const nameChange = document.querySelector('.ChangeListElementInput').value;
    const textChange = document.querySelector('.ChangeListElementTextarea').value;

    let AccChangeTaskArrItem = TaskArr.find(item => item.id === id);

    AccChangeTaskArrItem = {
        ...AccChangeTaskArrItem,
        name: nameChange,
        text: textChange,
        isChange: 0,
    }

    const AccTaskArrSliceBefore = TaskArr.slice(0,id)
    const AccTaskArrSliceAfter = TaskArr.slice(id+1, TaskArr.length)

    const AccChangeTaskArr = AccTaskArrSliceBefore.concat(AccChangeTaskArrItem).concat(AccTaskArrSliceAfter);

    dispatch(AcceptTaskChangeAction(AccChangeTaskArr));
  }

  return (
    <div className='ListElement'>
      { Task.isChange === 0 ? ( 
            <h3 className='ListElementHeader'>
              {Task.name}
            </h3>
          ) : (
            <input className='ChangeListElementInput' autoComplete="off" defaultValue={Task.name}/>)
      }
      
      {Task.isChange === 1 && 
        <button onClick={() => AcceptChangeHandler(Task.id)} className='BtnListElementAgree'>
          <img className='BtnListElementAgreeImg' alt=''  src='\img\agree.png'/>
        </button>
      }

      <button onClick={() => ChangeTaskHandler(Task.id)} className='BtnListElementChange'>
        <img className='BtnListElementChangeImg' src='\img\change_pen.png' alt=''/>
      </button>
      <button onClick={() => DeleteTaskHandler(Task.id)} className='BtnListElementDelete'>
        <img className='BtnListElementDeleteImg' src='\img\trash_bag.png' alt=''/>
      </button>

      { Task.isChange === 0 ? (
          <p className='ListElementText'>
            {Task.text}
          </p>
        ) : (
          <textarea className='ChangeListElementTextarea' defaultValue={Task.text}/>)
      }
    </div>
  ) 
}

export default ListElement;
