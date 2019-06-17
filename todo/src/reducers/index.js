import { ADD } from '../actions';


const initialState = {
    todos: [
        {
            value: 'Play Destiny',
            completed: false,
            id: 1
        },
        {
            value: 'Make Dinner',
            completed: false,
            id: 2
        },

    ]
}

export default (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case ADD:
            return{
                ...state,
               todos: action.payload
            }
        default:
            return state;
    }
}