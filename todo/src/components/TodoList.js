import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { add, toggle, delete_todo } from '../actions';

class TodoList extends React.Component{
    state = {
        inputText: ''
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addTodo = e => {
        this.props.add(this.state.inputText);
        this.setState({ inputText: '' });
    }
    toggleTodo = (e, id) => {
        e.preventDefault();
        this.props.toggle(id)
    }
    deleteTodo = (e, id) => {
        e.preventDefault();
        this.props.delete_todo(id);
    }

    render(){
        return(
            <div>
            {this.props.todos.map(item => (
               <Todo
                key = {item.id}
                item={item} 
                toggleTodo={this.toggleTodo}
                deleteTodo={this.deleteTodo}
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
              <button onClick = {this.addTodo}>Add ToDo</button>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return{
        todos: state.todos
    };
};

export default connect(mapStateToProps, { add, toggle, delete_todo })(TodoList);


//make it so that the add todo button actually adds a todo