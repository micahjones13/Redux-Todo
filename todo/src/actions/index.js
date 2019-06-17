export const ADD = 'ADD';

//item is a todo to be added to todo list
export const add = (item) => {
    return{
        type: ADD,
        payload: item
    }
}