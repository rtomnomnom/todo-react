import React, { Component} from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
      return this.props.todos.map((value) => {
        return <TodoItem key={value.id} todo={value} toggleComplete={this.props.toggleComplete} deleteTodo={this.props.deleteTodo} />
      });
  }
}

// Proptypes
Todos.proptype = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todos;
