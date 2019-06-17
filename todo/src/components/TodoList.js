import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { add } from '../actions';

class TodoList extends React.Component{
    state = {
        inputText: ''
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render(){
        return(
            <div>
            {this.props.todos.map(item => (
               <Todo
                key = {item.id}
                item={item} 
                />
              ))}
              <form>
                <input type = 'text'
                 placeholder = 'enter todo' 
                 value = {this.state.inputText} 
                 name = 'inputText'
                 onChange = {this.handleChanges}
                 />
              </form>
              <button>Add ToDo</button>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return{
        todos: state.todos
    };
};

export default connect(mapStateToProps, { add })(TodoList);


//make it so that the add todo button actually adds a todo