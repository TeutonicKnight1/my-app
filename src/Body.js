import React from 'react';
import './styles/Body.css';
import ListElement from './ListElement';
import HeaderList from './HeaderList';
import ListElementCreator from './ListElementCreator';



class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TaskArr: []
        };
    }

    AddTaskHandler = () => {
        const name = document.querySelector('#NameOfNewTask').value;
        const text = document.querySelector('#TextOfNewTask').value;
        let isChange = 0;

        const TaskArr = this.state.TaskArr;

        const newTask = {
            id: TaskArr.length ? TaskArr[TaskArr.length - 1].id + 1 : 1,
            name,
            text,
            isChange,
        }

        this.setState({TaskArr: [
            ...this.state.TaskArr,
            newTask,
        ]})
    }

    DeleteTaskHandler = (id) => {
        const newTaskArr = this.state.TaskArr.filter(item =>
            item.id !== id
        )

        this.setState({
            TaskArr: [...newTaskArr,]
        })
    }

    ChangeTaskHandler = (id) => {
        const ChangeTaskArrItem = this.state.TaskArr.find(item => 
            item.id == id
        );
        const TaskArrWithoutItem = this.state.TaskArr.filter(item =>
                item.id !== id
        );

        ChangeTaskArrItem.isChange = 1;

        const ChangeTaskArr = TaskArrWithoutItem.concat(ChangeTaskArrItem);

        this.setState({
            ...ChangeTaskArr
        })
    }

    AcceptChangeHandler = (id) => {
        const name = document.querySelector('.ChangeListElementInput').value;
        const text = document.querySelector('.ChangeListElementTextarea').value;

        const ChangeTaskArrItem = this.state.TaskArr.find(item => 
            item.id == id
        );
        const TaskArrWithoutItem = this.state.TaskArr.filter(item =>
                item.id !== id
        );

        ChangeTaskArrItem.name = name;
        ChangeTaskArrItem.text = text;
        ChangeTaskArrItem.isChange = 0;

        const ChangeTaskArr = TaskArrWithoutItem.concat(ChangeTaskArrItem);

        this.setState({
            ...ChangeTaskArr
        })
    }


    render() {
        return (
            <div className='Body'>
                <HeaderList />
                {this.state.TaskArr.map(item =>
                    <ListElement 
                        key={item.id} 
                        Task = {item} 
                        deleteF = {this.DeleteTaskHandler}
                        changeF = {this.ChangeTaskHandler}
                        acceptF = {this.AcceptChangeHandler}
                    />
                )}
                <ListElementCreator props = {this.AddTaskHandler}/>
            </div>
        );
    }
}

export default Body;