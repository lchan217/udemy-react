import React, { Component } from 'react';
// import React, { useState } from 'react'
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'asdf', name: "Lizzie", age: 31 },
      { id: '23a', name: "Christopher", age: 33 },
      { id: 'aw1', name: "Claire", age: 32 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 65 },
        { name: "Chris", age: 100 },
        { name: "Claire", age: 72 }
      ] 
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) =>{
    // both ways are immutable
    // const persons = this.state.persons.slice()

    const persons = [...this.state.persons]

    // delete person from persons
    persons.splice(personIndex, 1)

    // set state with deleted person
    this.setState({persons: persons})

  }

  render() {
    // not global, scoping
    const style = {
      backgroundColor: 'white',
      // also valid: 'background-color': 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // recommended way (vs ternary in return)
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi there!</h1>
        <p>Everything must be included in App div</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
  
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work?'))
  }
}

export default App;

// const app = props => {
//   const [personState, setPersonsState] = useState({
//     persons: [
//       { name: "Lizzie", age: 31 },
//       { name: "Christopher", age: 33 },
//       { name: "Liz", age: 32 }
//     ],
//     otherState: 'some other value'
//   });

//   const [otherState, setOtherState] = useState('some other value')

//   console.log(personState, otherState)

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Elizabeth", age: 65 },
//         { name: "Chris", age: 100 },
//         { name: "Liz", age: 32 }
//       ] 
//       // otherState: 'some other value' // if not added, it will just be deleted
//     })

//   }

//   return (
//     <div className="App">
//       <h1>Hi there!</h1>
//       <p>Everything must be included in App div</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person 
//         name={personState.persons[0].name} 
//         age={personState.persons[0].age}/>
//       <Person 
//         name={personState.persons[1].name} 
//         age={personState.persons[1].age}
//         click={switchNameHandler}>My Hobbies: Reading</Person>
//       <Person 
//         name={personState.persons[2].name} 
//         age={personState.persons[2].age}/>
//     </div>

//   );
// }

// export default app;