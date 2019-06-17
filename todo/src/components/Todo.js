import React from 'react';

const Todo = (props) => {
    return(
        <div>
            <p>{props.item.value}</p>
        </div>
    );
}

export default Todo;