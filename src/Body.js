import React from 'react';
import './styles/Body.css';
import ListElement from './ListElement';
import HeaderList from './HeaderList';
import ListElementCreator from './ListElementCreator';
import { useSelector } from 'react-redux';

function Body() {
    const TaskArr = useSelector(state => state.reducer.TaskArr)
    return (
        <div className='Body'>
            <HeaderList />
            {TaskArr.map(item =>
                <ListElement 
                    key={item.id}
                    Task = {item}
                />
            )}
            <ListElementCreator/>
        </div>
    );
}

export default Body;