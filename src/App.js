import React from 'react';
import Todo from './components/Todos/Todo';
import Header from './components/Layout/Header';

class App extends React.Component {
  state = {
    todo: [
    {
      id: 1,
      title: "cook",
      completed: false
    },
    {
      id: 2,
      title: "read",
      completed: false
    },
    {
      id: 3,
      title: "go to the gym",
      completed: false
    },
    {
      id: 4,
      title: "apply for jobs",
      completed: false
    },
    {
      id: 5,
      title: "code",
      completed: false
    }
    ]
  }

checkedComplete = () => {
  console.log(this.state.todo.id)
}

  render() {
    console.log(this.state.todo)
    return ( 
    <div className="App">
      <header className="App-header">
      <Header />
      {/* passing down to Todo as a prop */}
      <Todo todo={this.state.todo} checkedComplete={this.checkedComplete}/> 
      </header>
    </div>
  );
}
}

export default App;
