import React , { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons : [
      {name: "Pucci", age: 20, id: "gfhjks"},
      {name: "Bunty", age: 36, id: "vcbhjk"},
      {name: "Lucci", age: 29, id: "bvjkjd"}
    ],
    otherState: "Bankai",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({persons : [
      {name: "Pucci", age: 20},
      {name: newName, age: 37},
      {name: "Lucci", age: 29}
    ]})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})    
  }

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
    /* let elem = document.getElementById("PersonContainer");
    elem.classList.toggle("d-none"); */
  }

  render(){
    let persons = null;

    if (this.state.showPersons){
      persons = (        
        <div id="PersonContainer">
          {/* <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, "Butagorita")}
          changed = {this.nameChangeHandler}
          >
            Appending Children via props 
          </Person> */}

          {this.state.persons.map((person, index) => {
            return <Person 
            key={person.id} 
            name={person.name} 
            age={person.age} 
            click = {() => this.deletePersonHandler(index)}
            changed = {(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      )

      /* style.backgroundColor = "Red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      }; */
    }

    const classesAssigned = []
    if (this.state.persons.length <=2){
      classesAssigned.push(classes.red);
    }
    if (this.state.persons.length <=1){
      classesAssigned.push(classes.bold);
    }

    console.log(classes);

    return (
        <div className={classes.App}>
          <h1> Testing React App</h1>
          <p className={classesAssigned.join(' ')}> This is really working!!</p>
          <button
          className={classes.Button}
          onClick={this.togglePersonsHandler}>
            Toggle Name 
          </button>

          {persons}

          {/*  //This way of passing arguements to function is inefficient 
          <button 
          className="btn"
          style = {style}
          onClick={() => this.switchNameHandler("Bunta")}>
            Switch Name 
          </button> */}
        </div>
    );
  };
  
}

export default App;
