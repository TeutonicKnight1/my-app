import React from 'react';
import './styles/ListElement.css';

function ListElement(props) {
  const {Task, deleteF, changeF, acceptF} = props;
    return (
      <div className='ListElement'>
        { Task.isChange == 0 ? ( 
              <h3 className='ListElementHeader'>
                {Task.name}
              </h3>
            ) : (
              <input className='ChangeListElementInput' defaultValue={Task.name}/>)
        }

        {Task.isChange == 1 && 
          <button onClick={() => acceptF(Task.id)} className='BtnListElementAgree'>
            <img className='BtnListElementAgreeImg' src='\img\agree.png'/>
          </button>
        }

        

        <button onClick={() => changeF(Task.id)} className='BtnListElementChange'>
          <img className='BtnListElementChangeImg' src='\img\change_pen.png' alt=''/>
        </button>
        <button onClick={() => deleteF(Task.id)} className='BtnListElementDelete'>
          <img className='BtnListElementDeleteImg' src='\img\trash_bag.png' alt=''/>
        </button>

        { Task.isChange == 0 ? (
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
