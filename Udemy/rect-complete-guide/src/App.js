import React , { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: "Pucci", age: 20},
      {name: "Bunty", age: 36},
      {name: "Lucci", age: 29}
    ],
    otherState: "Bankai"
  }

  switchNameHandler = (newName) => {
    this.setState({persons : [
      {name: "Pucci", age: 20},
      {name: newName, age: 37},
      {name: "Lucci", age: 29}
    ]})
  }

  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        {name: "Pucci", age: 20},
        {name: event.target.value, age: 37},
        {name: "Lucci", age: 29}
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h1> Testing React App</h1>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        />

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this, "Butagorita")}
        changed = {this.nameChangeHandler}
        >
           Appending Children via props 
        </Person>

        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        />

        {/* This way of passing arguements to function is inefficient */}
        <button onClick={() => this.switchNameHandler("Bunta")}> Switch Name </button>
      </div>
    );
  };
  
}

export default App;
