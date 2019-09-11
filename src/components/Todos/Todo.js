import React from 'react';
import Items from '../Items';
import PropTypes from 'prop-types';

class Todo extends React.Component {


  render() {
    /* passing todo as props to Items component 
      and passing method of Items component's props up to here,
      need to bring it to App.js because the state is there
    */
    return this.props.todo.map((v) => (
    <Items key={v.id} todo = {v} checkedComplete={this.props.checkedComplete}/>
    ));
}
}


//prop types
Todo.propTypes = {
  todo: PropTypes.array.isRequired
}

export default Todo;
