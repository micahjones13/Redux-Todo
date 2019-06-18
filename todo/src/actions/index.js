export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';
export const DELETE_TODO = 'DELETE_TODO';

//item is a todo to be added to todo list
export const add = (item) => {
    console.log(item);
    return{
        type: ADD,
        payload: item
    };
};

export const toggle = (id) => {
    console.log(id);
    return{
        type: TOGGLE,
        payload: id
    };
};

export const delete_todo = (id) => {
    console.log(id);
    return{
        type: DELETE_TODO,
        payload: id
    };
};