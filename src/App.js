import React from 'react';
import './App.css';
import Todo from './components/Todos/Todo';
import Header from './components/Layout/Header';

class App extends React.Component {
  state = {
    todos: [
    {
      id: 1,
      title: "cook",
      completed: false
    },
    {
      id: 2,
      title: "cook",
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

  render() {
    console.log(this.state.todos)
    return ( 
    <div className="App">
      <header className="App-header">
      <Header />
      <Todo todos = {this.state.todos}/> 
      </header>
    </div>
  );
}
}

export default App;
