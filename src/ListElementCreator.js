import React from 'react';
import './styles/ListElementCreator.css';

function ListElementCreator({props}) {

    return (
        <div className='ListElementCreator'>
            <div className='DivNameOfNewTask'>
                <h3 className='hNameOfNewTask'>Заголовок</h3>
                <button onClick={props} className='BtnOfNewTask'>
                    <img className='CrossImg' src='/img/cross.png' alt=''/>
                </button>
                <input type='text' size='30' id='NameOfNewTask'/>
            </div>
            <div className='DivTextOfNewTask'>
                <h3 className='hTextOfNewTask'>Суть дела</h3>
                <textarea id='TextOfNewTask' wrap='soft'/>
            </div>
        </div>
    )
}

export default ListElementCreator;