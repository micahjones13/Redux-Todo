import React from 'react';



const Todo = (props) => {
    return(
        <div>
            <p
            className = {props.item.completed ? 'todo-done' : 'todo'}
            onClick = {e => props.toggleTodo(e, props.item.id)}>{props.item.value}</p>
            <button onClick = {e => props.deleteTodo(e, props.item.id)}>Delete</button>
        </div>
    );
}

export default Todo;