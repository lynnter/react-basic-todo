import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Items extends Component {
// dynamic styling
getStyle = () => {
     return {
          background: '#f4f4f4f4' ,
          fontSize: '20px',
          padding: '2px',
          borderBottom: '2px #ccc dotted',
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
     }
     }

     render() {
          return (
               <div style={this.getStyle()}>
                  <p>
                    <input type='checkbox' onChange={this.props.checkedComplete.bind(this)} />
                  {this.props.todo.title}
                  </p>  
               </div>
          )
     }
}


Items.propTypes = {
     todo: PropTypes.object.isRequired
   }
export default Items
