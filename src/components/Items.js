import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Items extends Component {
     render() {
          return (
               <div>
                  <p style={someStylin}>{this.props.todo.title}</p>  
               </div>
          )
     }
}
const someStylin = {
backgroundColor: 'grey'
}

Items.propTypes = {
     todo: PropTypes.object.isRequired
   }
export default Items
