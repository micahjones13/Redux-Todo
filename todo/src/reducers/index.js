import { ADD, TOGGLE, DELETE_TODO } from '../actions';


const initialState = {
    todos: [
        {
            value: 'Play Destiny',
            completed: false,
            id: 0 //starting this ID at 1 messed up the toggle function. Match the id's with the index value to avoid this.
        },
        {
            value: 'Make Dinner',
            completed: false,
            id: 1
        },

    ]
}

export default (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case ADD:
            //create a new todo variable to store payload in
            const newTodo = { value: action.payload, completed: false, id: Date.now() };
            return{
                ...state,
               todos: [...state.todos, newTodo]
            };
        case TOGGLE:
            return{
                ...state,
                todos: state.todos.map((todo) => {
                    if(action.payload === todo.id){
                        return{
                            ...todo,
                            completed: !todo.completed
                        };
                    } else{
                        return todo;
                    }
                })
            };
        case DELETE_TODO:
            return{
                ...state,
                todos: state.todos.filter(todo => {
                   return action.payload !== todo.id
                   
                })
            }
        default:
            return state;
    }
}