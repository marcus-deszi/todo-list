import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDoList }) => {
    console.log(toDoList);
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo toDo={todo} />
                )
            })}
        </div>
    );
};

export default ToDoList;