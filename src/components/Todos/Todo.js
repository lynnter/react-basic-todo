import React from 'react';
import Items from '../Items';
import PropTypes from 'prop-types';
class Todo extends React.Component {
  render() {
    /* passing todo as props to Items component*/
    return this.props.todo.map((v) => (
    <Items key={v.id} todo = {v} />
    ));
}
}

//prop types
Todo.propTypes = {
  todo: PropTypes.array.isRequired
}

export default Todo;
